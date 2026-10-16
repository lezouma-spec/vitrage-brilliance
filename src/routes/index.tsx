import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/config/site";
import {
  EmergencyBanner, Header, Hero, Services, Process, QuoteForm, MobileService,
  Work, WhyUs, Reviews, Faq, Contact, Footer, FloatingActions,
} from "@/components/site/Sections";

const title = "Vitrage auto Gafsa | Yassine Vitrage Auto – Pare-brise & vitres";
const description =
  "Remplacement de pare-brise, vitres latérales et arrière, réparation d'impact, toit ouvrant et teinte à Gafsa. Service rapide en atelier ou à domicile, aide assurance.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoGlassShop",
  name: business.name,
  telephone: business.phone,
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.streetAddress,
    addressLocality: business.city,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: business.lat, longitude: business.lng },
  hasMap: business.mapsUrl,
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00", closes: "18:00",
  }],
  areaServed: ["Gafsa", "El Ksar", "Métlaoui", "Redeyef", "Moularès", "El Guettar"],
  sameAs: [business.facebook, business.instagram],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_TN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-primary-foreground">
        Aller au contenu
      </a>
      <EmergencyBanner />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <QuoteForm />
        <MobileService />
        <Work />
        <WhyUs />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
