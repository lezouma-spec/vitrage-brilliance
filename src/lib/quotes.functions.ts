import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(6).max(30).regex(/^[+\d\s().-]+$/),
  car_brand: z.string().trim().max(60).optional().default(""),
  car_model: z.string().trim().max(60).optional().default(""),
  car_year: z.string().trim().max(10).optional().default(""),
  glass_type: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().max(1500).optional().default(""),
  photo: z
    .object({
      name: z.string().max(200),
      type: z.enum(["image/jpeg", "image/png", "image/webp", "image/heic"]),
      base64: z.string().max(7_000_000),
    })
    .nullable()
    .optional(),
});

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => quoteSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    let photo_path: string | null = null;
    if (data.photo) {
      const bin = Uint8Array.from(atob(data.photo.base64), (c) => c.charCodeAt(0));
      const ext = data.photo.type.split("/")[1];
      const path = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}.${ext}`;
      const { error } = await supabaseAdmin.storage
        .from("quote-photos")
        .upload(path, bin, { contentType: data.photo.type });
      if (!error) photo_path = path;
      else console.error("photo upload failed", error.message);
    }
    const { photo: _p, ...row } = data;
    const { error } = await supabaseAdmin.from("quote_requests").insert({ ...row, photo_path });
    if (error) {
      console.error("insert failed", error.message);
      throw new Error("Could not save request");
    }
    return { ok: true as const };
  });

// ---------- Admin (shared password gate) ----------
type AdminSession = { admin?: boolean };
function sessionConfig() {
  return {
    password: process.env["SESSION_SECRET"]!,
    name: "yva-admin",
    maxAge: 60 * 60 * 24 * 7,
    cookie: { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/" },
  };
}

async function sha(s: string) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)));
}
async function matches(input: string, expected: string) {
  const [a, b] = await Promise.all([sha(input), sha(expected)]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= (a[i] ?? 0) ^ (b[i] ?? 0);
  return diff === 0;
}

export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator((d: { password: string }) => z.object({ password: z.string().max(200) }).parse(d))
  .handler(async ({ data }) => {
    const expected = process.env["ADMIN_PASSWORD"];
    if (!expected) throw new Error("ADMIN_PASSWORD not set");
    if (!(await matches(data.password, expected))) return { ok: false as const };
    const s = await useSession<AdminSession>(sessionConfig());
    await s.update({ admin: true });
    return { ok: true as const };
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(async () => {
  const s = await useSession<AdminSession>(sessionConfig());
  await s.clear();
  return { ok: true as const };
});

export const getAdminQuotes = createServerFn({ method: "GET" }).handler(async () => {
  const s = await useSession<AdminSession>(sessionConfig());
  if (!s.data.admin) return { authorized: false as const, quotes: [] };
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("quote_requests")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(300);
  if (error) throw new Error(error.message);
  const quotes = await Promise.all(
    (data ?? []).map(async (q) => {
      let photo_url: string | null = null;
      if (q.photo_path) {
        const { data: signed } = await supabaseAdmin.storage
          .from("quote-photos")
          .createSignedUrl(q.photo_path, 3600);
        photo_url = signed?.signedUrl ?? null;
      }
      return { ...q, photo_url };
    }),
  );
  return { authorized: true as const, quotes };
});
