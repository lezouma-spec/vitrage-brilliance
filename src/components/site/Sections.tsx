import { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Clock, Navigation, Star, ChevronLeft, ChevronRight, Upload, Check, Facebook, Instagram, Menu, X, AlertTriangle } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { business, content as c, images, videos } from "@/config/site";
import { useLang } from "@/lib/i18n";
import { submitQuote } from "@/lib/quotes.functions";
import { Reveal, Counter, SectionHead } from "./Reveal";
import { serviceIcons, WhatsAppIcon } from "./icons";

const tel = `tel:${business.phone}`;
const wa = `https://wa.me/${business.whatsapp}`;

export function EmergencyBanner() {
  const { t } = useLang();
  return (
    <a href={tel} className="block border-b border-gold/20 bg-gold-soft py-2 text-center text-xs tracking-wide text-gold hover:brightness-125 sm:text-sm">
      <AlertTriangle className="me-2 inline h-4 w-4" aria-hidden="true" />
      {t(c.emergency)} <span className="font-semibold">· {business.phoneDisplay}</span>
    </a>
  );
}

export function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    ["services", c.nav.services],
    ["process", c.nav.process],
    ["work", c.nav.work],
    ["quote", c.nav.quote],
    ["faq", c.nav.faq],
    ["contact", c.nav.contact],
  ] as const;
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#top" className="flex items-baseline gap-2" aria-label={business.name}>
          <span className="font-serif text-2xl text-gold-gradient">Yassine</span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Vitrage Auto</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map(([id, l]) => (
            <a key={id} href={`#${id}`} className="text-sm text-muted-foreground transition-colors hover:text-gold">{t(l)}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div role="group" aria-label="Langue / اللغة" className="flex rounded-full border border-border p-0.5 text-xs">
            {(["fr", "ar"] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
                className={`rounded-full px-3 py-1 transition-colors ${lang === l ? "bg-gold text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {l === "fr" ? "FR" : "عربي"}
              </button>
            ))}
          </div>
          <Button asChild variant="gold" size="sm" className="hidden px-4 md:inline-flex">
            <a href={tel}><Phone /> {business.phoneDisplay}</a>
          </Button>
          <button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border px-5 pb-5 lg:hidden">
          {links.map(([id, l]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-gold">{t(l)}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  const { t } = useLang();
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) imgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.08)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
      <img ref={imgRef} src={images.storefront} alt={t(c.hero.imageAlt)} width={1584} height={672}
        fetchPriority="high" className="absolute inset-0 h-full w-full scale-[1.08] object-cover will-change-transform" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:pb-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">{t(c.hero.eyebrow)}</p>
          <div className="gold-line my-6 w-32" />
          <h1 className="max-w-3xl text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">{t(c.hero.title)}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t(c.hero.subtitle)}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="gold" size="xl"><a href={tel}><Phone /> {t(c.hero.call)}</a></Button>
            <Button asChild variant="glass" size="xl"><a href={wa} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {t(c.hero.whatsapp)}</a></Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-28">
      <SectionHead eyebrow={t(c.services.eyebrow)} title={t(c.services.title)} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {c.services.items.map((s, i) => {
          const Icon = serviceIcons[s.icon] ?? serviceIcons['windshield']!;
          return (
            <Reveal key={s.icon} delay={i * 80}>
              <article className="glass lift h-full rounded-2xl p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-2xl text-foreground">{t(s.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(s.text)}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Process() {
  const { t } = useLang();
  return (
    <section id="process" className="border-y border-border bg-card/40 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow={t(c.process.eyebrow)} title={t(c.process.title)} />
        <ol className="grid gap-10 md:grid-cols-3">
          {c.process.steps.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <li className="text-center">
                <span className="font-serif text-6xl text-gold-gradient">0{i + 1}</span>
                <div className="gold-line mx-auto my-5 w-16" />
                <h3 className="text-2xl">{t(s.title)}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{t(s.text)}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const fileToBase64 = (f: File) =>
  new Promise<string>((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(String(r.result).split(",")[1] ?? "");
    r.onerror = rej;
    r.readAsDataURL(f);
  });

export function QuoteForm() {
  const { t } = useLang();
  const submit = useServerFn(submitQuote);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");
  const [fileName, setFileName] = useState("");
  const f = c.quote.fields;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const file = fd.get("photo") as File | null;
    let photo = null;
    if (file && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) { setErr(t(c.quote.photoTooBig)); return; }
      photo = { name: file.name, type: file.type as "image/jpeg", base64: await fileToBase64(file) };
    }
    setState("sending"); setErr("");
    try {
      await submit({ data: {
        name: String(fd.get("name") ?? ""), phone: String(fd.get("phone") ?? ""),
        car_brand: String(fd.get("brand") ?? ""), car_model: String(fd.get("model") ?? ""),
        car_year: String(fd.get("year") ?? ""), glass_type: String(fd.get("glass") ?? ""),
        message: String(fd.get("message") ?? ""), photo,
      } });
      setState("done");
    } catch {
      setState("error"); setErr(t(c.quote.error));
    }
  }

  const field = "h-12 rounded-xl border-border bg-background/50";
  return (
    <section id="quote" className="mx-auto max-w-4xl px-5 py-28">
      <SectionHead eyebrow={t(c.quote.eyebrow)} title={t(c.quote.title)} />
      <Reveal>
        <div className="glass rounded-3xl p-6 sm:p-10">
          {state === "done" ? (
            <div role="status" className="py-16 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground"><Check className="h-7 w-7" /></div>
              <p className="font-serif text-3xl">{t(c.quote.success)}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <p className="text-sm text-muted-foreground sm:col-span-2">{t(c.quote.subtitle)}</p>
              <div className="space-y-2"><Label htmlFor="name">{t(f.name)} *</Label><Input id="name" name="name" required minLength={2} maxLength={100} autoComplete="name" className={field} /></div>
              <div className="space-y-2"><Label htmlFor="phone">{t(f.phone)} *</Label><Input id="phone" name="phone" type="tel" required minLength={6} maxLength={30} autoComplete="tel" dir="ltr" className={field} /></div>
              <div className="space-y-2"><Label htmlFor="brand">{t(f.brand)}</Label><Input id="brand" name="brand" maxLength={60} className={field} /></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label htmlFor="model">{t(f.model)}</Label><Input id="model" name="model" maxLength={60} className={field} /></div>
                <div className="space-y-2"><Label htmlFor="year">{t(f.year)}</Label><Input id="year" name="year" inputMode="numeric" maxLength={4} className={field} /></div>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="glass">{t(f.glass)}</Label>
                <select id="glass" name="glass" className={`${field} w-full border px-3 text-sm text-foreground`}>
                  {c.quote.glassTypes.map((g) => <option key={g.fr} value={g.fr} className="bg-card">{t(g)}</option>)}
                </select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="photo">{t(f.photo)}</Label>
                <label htmlFor="photo" className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-gold/40 bg-background/40 px-4 py-5 text-sm text-muted-foreground transition-colors hover:border-gold focus-within:ring-1 focus-within:ring-ring">
                  <Upload className="h-5 w-5 text-gold" aria-hidden="true" />
                  <span className="truncate">{fileName || "JPG, PNG, WEBP · 5 Mo"}</span>
                  <input id="photo" name="photo" type="file" accept="image/jpeg,image/png,image/webp" className="sr-only"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
                </label>
              </div>
              <div className="space-y-2 sm:col-span-2"><Label htmlFor="message">{t(f.message)}</Label><Textarea id="message" name="message" maxLength={1500} rows={4} className="rounded-xl border-border bg-background/50" /></div>
              {err && <p role="alert" className="text-sm text-destructive sm:col-span-2">{err}</p>}
              <Button type="submit" variant="gold" size="xl" disabled={state === "sending"} className="sm:col-span-2">
                {state === "sending" ? t(c.quote.sending) : t(c.quote.submit)}
              </Button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}

export function MobileService() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <img src={images.workshop} alt={t(c.work.workshopAlt)} loading="lazy" width={768} height={1376}
            className="mx-auto max-h-[620px] w-full rounded-3xl object-cover" />
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{t(c.mobile.eyebrow)}</p>
          <div className="gold-line my-5 w-24" />
          <h2 className="text-4xl leading-tight md:text-5xl">{t(c.mobile.title)}</h2>
          <p className="mt-6 text-muted-foreground">{t(c.mobile.text)}</p>
          <h3 className="mt-10 text-xl text-gold">{t(c.mobile.areasTitle)}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {c.mobile.areas.map((a) => (
              <li key={a.fr} className="glass rounded-full px-4 py-2 text-sm"><MapPin className="me-1 inline h-3.5 w-3.5 text-gold" aria-hidden="true" />{t(a)}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const { t } = useLang();
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border" dir="ltr">
      <img src={images.after} alt={t(c.work.afterAlt)} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={images.before} alt={t(c.work.beforeAlt)} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-px bg-gold" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-gold">
          <ChevronLeft className="h-4 w-4" /><ChevronRight className="h-4 w-4" />
        </div>
      </div>
      <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 text-xs uppercase tracking-widest">{t(c.work.before)}</span>
      <span className="glass absolute top-4 right-4 rounded-full px-3 py-1 text-xs uppercase tracking-widest">{t(c.work.after)}</span>
      <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))}
        aria-label={t(c.work.sliderLabel)} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
    </div>
  );
}

export function Work() {
  const { t, lang } = useLang();
  return (
    <section id="work" className="border-y border-border bg-card/40 py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow={t(c.work.eyebrow)} title={t(c.work.title)} />
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3"><BeforeAfter /></Reveal>
          <Reveal className="lg:col-span-2" delay={120}>
            {videos.map((v) => (
              <figure key={v.src} className="overflow-hidden rounded-3xl border border-border">
                <video src={v.src} poster={v.poster} controls muted playsInline preload="none" loop
                  className="aspect-video w-full bg-overlay object-cover" aria-label={v[lang]} />
                <figcaption className="p-4 text-sm text-muted-foreground">{v[lang]}</figcaption>
              </figure>
            ))}
            <img src={images.trophy} alt={t(c.work.trophyAlt)} loading="lazy" width={768} height={1376}
              className="mt-8 h-64 w-full rounded-3xl border border-border object-cover object-top" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-5 py-28">
      <SectionHead eyebrow={t(c.why.eyebrow)} title={t(c.why.title)} />
      <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {c.why.stats.map((s, i) => (
          <Reveal key={i} delay={i * 80} className="text-center">
            <p className="font-serif text-5xl text-gold-gradient md:text-6xl"><Counter value={s.value} suffix={s.suffix} /></p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{t(s.label)}</p>
          </Reveal>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {c.why.points.map((p, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="glass lift h-full rounded-2xl p-7">
              <Check className="mb-4 h-5 w-5 text-gold" aria-hidden="true" />
              <h3 className="text-xl">{t(p.title)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(p.text)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Reviews() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const n = c.reviews.items.length;
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % n), 6000);
    return () => clearInterval(id);
  }, [n]);
  const r = c.reviews.items[i] ?? c.reviews.items[0];
  return (
    <section className="border-y border-border bg-card/40 py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead eyebrow={t(c.reviews.eyebrow)} title={t(c.reviews.title)} />
        <div className="glass rounded-3xl p-10 text-center" aria-live="polite">
          <div className="mb-6 flex justify-center gap-1 text-gold" aria-label="5/5">
            {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-5 w-5 fill-current" aria-hidden="true" />)}
          </div>
          <blockquote key={i} className="animate-in fade-in duration-700 font-serif text-2xl leading-relaxed md:text-3xl">“{t(r.text)}”</blockquote>
          <p className="mt-6 text-sm uppercase tracking-widest text-gold">{r.name}</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous" className="rounded-full border border-border p-2 hover:border-gold"><ChevronLeft className="h-4 w-4 rtl:rotate-180" /></button>
            {c.reviews.items.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`${k + 1}`} aria-current={k === i}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-3 bg-border"}`} />
            ))}
            <button onClick={() => setI((i + 1) % n)} aria-label="Next" className="rounded-full border border-border p-2 hover:border-gold"><ChevronRight className="h-4 w-4 rtl:rotate-180" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useLang();
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-28">
      <SectionHead eyebrow={t(c.faq.eyebrow)} title={t(c.faq.title)} />
      <Reveal>
        <Accordion type="single" collapsible className="glass rounded-3xl px-6">
          {c.faq.items.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`} className="border-border last:border-0">
              <AccordionTrigger className="py-6 text-start font-serif text-xl hover:text-gold hover:no-underline">{t(f.q)}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t(f.a)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="border-t border-border bg-card/40 py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow={t(c.contact.eyebrow)} title={t(c.contact.title)} />
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <iframe title={t(c.contact.mapTitle)} src={business.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full rounded-3xl border border-border grayscale-[60%] invert-[90%] hue-rotate-180" />
          </Reveal>
          <Reveal className="lg:col-span-2" delay={120}>
            <address className="glass h-full rounded-3xl p-8 not-italic">
              <p className="font-serif text-3xl">{business.name}</p>
              <p className="mt-3 flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4 text-gold" aria-hidden="true" />{t(c.contact.address)}</p>
              <div className="gold-line my-6" />
              <h3 className="flex items-center gap-2 text-lg text-gold"><Clock className="h-4 w-4" aria-hidden="true" />{t(c.contact.hoursTitle)}</h3>
              <dl className="mt-3 space-y-2 text-sm">
                {c.contact.hours.map((h, i) => (
                  <div key={i} className="flex justify-between gap-4"><dt className="text-muted-foreground">{t(h.day)}</dt><dd dir="ltr">{t(h.time)}</dd></div>
                ))}
              </dl>
              <div className="mt-8 grid gap-3">
                <Button asChild variant="gold" size="xl"><a href={tel}><Phone /> <span dir="ltr">{business.phoneDisplay}</span></a></Button>
                <Button asChild variant="whatsapp" size="xl"><a href={wa} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp</a></Button>
                <Button asChild variant="glass" size="xl"><a href={business.directionsUrl} target="_blank" rel="noopener noreferrer"><Navigation /> {t(c.contact.directions)}</a></Button>
              </div>
            </address>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border pb-28 pt-16 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl text-gold-gradient">Yassine</p>
          <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Vitrage Auto</p>
          <p className="mt-4 text-sm text-muted-foreground">{t(c.footer.tagline)}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="mb-4 font-sans text-xs uppercase tracking-widest text-gold">{t(c.footer.links)}</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {(Object.entries(c.nav) as [string, { fr: string; ar: string }][]).map(([id, l]) => (
              <li key={id}><a href={`#${id}`} className="hover:text-gold">{t(l)}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3 md:justify-end">
          <a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="glass flex h-11 w-11 items-center justify-center rounded-full hover:text-gold"><Facebook className="h-4 w-4" /></a>
          <a href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="glass flex h-11 w-11 items-center justify-center rounded-full hover:text-gold"><Instagram className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="gold-line mx-auto my-10 max-w-7xl" />
      <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {business.name}. {t(c.footer.rights)}</p>
    </footer>
  );
}

export function FloatingActions() {
  const { t } = useLang();
  return (
    <>
      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="fixed bottom-8 end-8 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-gold transition-transform hover:-translate-y-1 md:flex">
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/85 p-3 backdrop-blur-xl md:hidden">
        <Button asChild variant="gold" size="lg" className="h-12"><a href={tel}><Phone /> {t(c.hero.call)}</a></Button>
        <Button asChild variant="whatsapp" size="lg" className="h-12"><a href={wa} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp</a></Button>
      </div>
    </>
  );
}
