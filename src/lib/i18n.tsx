import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/config/site";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (v: string | { fr: string; ar: string }) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  useEffect(() => {
    const saved = localStorage.getItem("yva-lang");
    if (saved === "ar" || saved === "fr") setLang(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("yva-lang", lang);
  }, [lang]);
  const t = (v: string | { fr: string; ar: string }) => (typeof v === "string" ? v : v[lang]);
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const c = useContext(LangCtx);
  if (!c) throw new Error("useLang outside LangProvider");
  return c;
}
