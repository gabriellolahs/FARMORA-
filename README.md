# Farmora Agro Services — Website

A full 3-page international marketing site for Farmora Agro Services, built
with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer
Motion.

## Pages

| Route | Page |
|---|---|
| `/` | The Global Hub — home, services, live "Field Log" activity rail, global reach, testimonials |
| `/logistics` | Farmora Logistics — venture announcement, rollout manifest timeline, route map, early access |
| `/consultation` | Global Consultation & Connect — clickable world map, 4-step consultation form, FAQ |

## Design system

- **Fonts** are self-hosted via `@fontsource` packages (no external network
  calls at build or runtime): Fraunces (display serif), Space Grotesk
  (sans/UI), IBM Plex Mono (the "manifest tag" data style used for
  coordinates, dates, and status chips throughout the site).
- **Color tokens** live in `src/app/globals.css` under `:root` — canopy
  (deep green), parchment (warm paper), wheat (accent/CTA), rust (status),
  signal (active-state green).
- **Signature interactions:**
  - Home: a scroll-snap, filterable "Field Log" activity rail with a
    progress scrubber.
  - Logistics: an expandable rollout timeline ("Rollout Manifest") showing
    real milestone status, plus an animated dashed route map.
  - Consultation: a clickable interactive world map that pre-fills the
    location field of a 4-step progressive consultation form.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    page.tsx               # Home
    logistics/page.tsx     # Logistics venture page
    consultation/page.tsx  # Consultation & connect page
    layout.tsx             # Root layout (Nav + Footer)
    globals.css            # Design tokens, fonts, base styles
  components/
    Nav.tsx, Footer.tsx, NewsletterForm.tsx
    ui/                    # Reveal (scroll animation), Button, ManifestTag
    home/                  # Hero, ServicesGrid, ActivityRail, MapTeaser, Testimonials, ClosingCta
    logistics/             # LogisticsHero, Vision, Pillars, RolloutTimeline, RouteMap, Benefits, EarlyAccessForm
    consultation/          # ConsultHero, WorldMap, ConsultationForm, MapAndForm, ContactOptions, Faq, TrustBand
```

## Notes for next steps

- Forms are currently front-end only (they set local state on submit).
  Wire `ConsultationForm.tsx`, `EarlyAccessForm.tsx`, and
  `NewsletterForm.tsx` up to your backend, CRM, or an API route
  (`src/app/api/...`) when ready.
- Hero and section backgrounds use CSS gradients and SVG rather than
  photography, so the site works instantly with zero image assets. Swap in
  real photography/video in `Hero.tsx` and `LogisticsHero.tsx` when
  available.
- All interactive elements respect `prefers-reduced-motion`.
