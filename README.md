# Yin Yin Win Medical PC — Website

A premium, multi-page marketing & booking website for Yin Yin Win Medical PC,
built with React, TypeScript, Vite, Tailwind CSS, React Router, Framer Motion,
and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    ui/            Reusable primitives (Button, Container, SectionHeading, ...)
    layout/         Navbar, Footer, Layout, ScrollToTop
    shared/         PageHeader, ServiceCard, FAQAccordion
    home/           Home-page-only sections (Hero, Benefits, ...)
    appointments/   The multi-step booking wizard and its steps
  data/
    clinic.ts       All clinic content — real info + clearly-scoped mock content
  pages/            One file per route (Home, About, Doctors, Services,
                     Appointments, Contact, Reviews, FAQ, NotFound)
```

## Content notes

- Clinic name, address, phone, fax, hours, rating (4.8/185 reviews),
  accessibility, payments, and review theme tags/counts are taken from the
  practice's public Google Business listing.
- The physician's name, title, and hospital affiliations reflect what's shown
  on the practice's own signage. Bio copy, education/board-certification
  detail, and exact service list are realistic placeholder content — swap in
  verified details before publishing.
- No patient review quotations are fabricated; the Reviews page shows
  aggregate rating + verified theme counts only.
- The booking flow is front-end only (no backend yet) — the final step
  generates a reference number and explains that staff will call to confirm.
  Wire it up to your booking/EHR system or a form backend before going live.

## Design system

- Colors: `teal` (primary/accent) and `ink` (near-black neutrals) defined in
  `tailwind.config.js`, plus a warm `sand` neutral for section backgrounds.
- Type: "Fraunces" (display/serif) for headings, "Inter" for body — loaded via
  Google Fonts in `index.html`.
