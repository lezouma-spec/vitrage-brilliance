# Vitrage Brilliance

Build  a premium single-brand website for "Yassine Vitrage Auto", an automotive glass specialist in Tunisia (windshield replacement, side and rear windows, chip repair, sunroof, tinting, insurance paperwork help). The site must feel like a high-end automotive brand, not a typical garage site. i will upload photos and a video u can use of the real workplace
REFERENCE
Use https://www.monparebrise.com as a reference for the structure, the services offered, the type of information to show (services, how it works, FAQ, trust points) and the kind of photos and videos needed. Take inspiration Write all copy fresh for Yassine Vitrage Auto.

DESIGN DIRECTION (luxury and premium)
- Dark theme: deep black / charcoal backgrounds, champagne-gold accent (#C9A961), soft white text
- Typography: elegant serif for headings (Cormorant Garamond or Playfair Display), clean sans for body (Inter)
- Glassmorphism cards (frosted glass look, subtle borders, soft blur) as a nod to the glass business
- Generous white space, large imagery, thin gold divider lines
- Smooth, subtle animations only: fade/slide on scroll, gentle hover lifts, parallax on the hero. Nothing flashy.
- Fully responsive, mobile-first, fast loading, lazy-load images and videos
PAGES / SECTIONS
1. Hero: headline "Votre vitrage, remplacé avec précision." Sub-line: fast, premium service, in workshop or at your location. Two buttons: "Appeler maintenant" and "WhatsApp".
2. Services: windshield replacement, side/rear windows, chip repair, sunroof, tinting, each as a glass card with icon and short text.
3. How it works: 3 elegant steps (Send photo and car details, Get a quote, Fast installation).
4. Free quote form: name, phone, car brand, model, year, glass type, photo upload, message. On submit, show a confirmation and save the request (use Supabase if available) so the owner can see requests in a simple password-protected admin page.
5. Mobile service block: "Nous venons chez vous / au bureau", with the areas covered.
6. Our work: before/after slider plus the video gallery.
7. Why us: warranty, quality glass, speed, experience, insurance paperwork help (with animated counters).
8. Customer reviews: carousel of testimonial cards with 5 stars (placeholder reviews, easy to edit).
9. FAQ: accordion (repair vs. replace, duration, insurance, warranty, price).
10. Location and contact: embed the real business location on Google Maps for "Yassine Vitrage Auto" from this link  Use the Google Maps embed with the real address, show opening hours, click-to-call, WhatsApp, and a "Itinéraire" (directions) button. https://maps.app.goo.gl/6X6dXh3A1uSKAm639
11. Footer: logo, quick links, social icons (Facebook, Instagram), copyright.

FEATURES
- Sticky mobile bar at the bottom with Call and WhatsApp buttons
- Language switch FR / AR with full RTL support for Arabic (translate all content)
- Emergency banner: "Vitre cassée ? Intervention rapide."
- SEO: proper title and meta description ("Vitrage auto + city"), Open Graph tags, LocalBusiness JSON-LD schema with the real address, semantic HTML, alt text on all images
- Accessibility: good contrast, keyboard navigation, aria labels
- Floating WhatsApp button on desktop
TECH
React + Tailwind + shadcn/ui, clean reusable components, all text and images stored in one editable config file so I can update content easily.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ed4a17c2-af42-4cdc-8079-ff6b54c92979).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
