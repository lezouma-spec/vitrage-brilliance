import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { adminLogin, adminLogout, getAdminQuotes } from "@/lib/quotes.functions";

export const Route = createFileRoute("/admin")({
  loader: () => getAdminQuotes(),
  head: () => ({
    meta: [
      { title: "Admin – Demandes de devis | Yassine Vitrage Auto" },
      { name: "description", content: "Espace privé de gestion des demandes de devis." },
      { property: "og:title", content: "Admin – Yassine Vitrage Auto" },
      { property: "og:description", content: "Espace privé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Admin,
});

function Admin() {
  const data = Route.useLoaderData();
  const router = useRouter();
  const login = useServerFn(adminLogin);
  const logout = useServerFn(adminLogout);
  const [error, setError] = useState(false);

  if (!data.authorized) {
    return (
      <main className="flex min-h-screen items-center justify-center px-5">
        <form
          className="glass w-full max-w-sm space-y-5 rounded-3xl p-8"
          onSubmit={async (e) => {
            e.preventDefault();
            const pw = String(new FormData(e.currentTarget).get("password") ?? "");
            const r = await login({ data: { password: pw } });
            if (r.ok) router.invalidate();
            else setError(true);
          }}
        >
          <h1 className="text-3xl">Espace admin</h1>
          <label htmlFor="pw" className="sr-only">Mot de passe</label>
          <Input id="pw" name="password" type="password" placeholder="Mot de passe" autoComplete="current-password" required className="h-12 rounded-xl" />
          {error && <p role="alert" className="text-sm text-destructive">Mot de passe incorrect</p>}
          <Button type="submit" variant="gold" size="lg" className="w-full">Entrer</Button>
        </form>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl">Demandes de devis <span className="text-gold">({data.quotes.length})</span></h1>
        <Button variant="glass" onClick={async () => { await logout(); router.invalidate(); }}>Déconnexion</Button>
      </div>
      {data.quotes.length === 0 && <p className="text-muted-foreground">Aucune demande pour le moment.</p>}
      <div className="grid gap-4">
        {data.quotes.map((q) => (
          <article key={q.id} className="glass grid gap-4 rounded-2xl p-6 md:grid-cols-[1fr_auto]">
            <div className="space-y-1 text-sm">
              <p className="font-serif text-2xl">{q.name}</p>
              <p><a href={`tel:${q.phone}`} className="text-gold hover:underline">{q.phone}</a> · <a href={`https://wa.me/${q.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">WhatsApp</a></p>
              <p className="text-muted-foreground">{[q.car_brand, q.car_model, q.car_year].filter(Boolean).join(" · ")} {q.glass_type && `— ${q.glass_type}`}</p>
              {q.message && <p className="pt-2 whitespace-pre-wrap">{q.message}</p>}
              <p className="pt-2 text-xs text-muted-foreground">{new Date(q.created_at).toLocaleString("fr-FR")}</p>
            </div>
            {q.photo_url && (
              <a href={q.photo_url} target="_blank" rel="noopener noreferrer">
                <img src={q.photo_url} alt={`Photo envoyée par ${q.name}`} className="h-36 w-48 rounded-xl object-cover" />
              </a>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
