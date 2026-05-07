# CODICE Technology Website — Agent Onboarding

## What We're Building
A premium marketing website for **CODICE Technology LLC** — a DC-based gov-tech firm with 16+ years serving Washington DC government agencies. Design north star: "Palantir meets Vercel, built for DC government."

**Live site**: https://codice-website.vercel.app  
**GitHub**: https://github.com/yassine2med/Codice-website  
**Vercel project**: codice-website (auto-deploys on push to `master`)

---

## Tech Stack
- **Next.js 16.2.5** with Turbopack, App Router
- **Tailwind CSS v4** — canonical class syntax only (no `@apply` abuse)
- **Framer Motion** — `AnimatePresence`, `motion.div`, `whileInView`
- **`react-countup`** — via `<AnimatedCounter>` component with `enableScrollSpy`
- **TypeScript** — strict mode

---

## Project Structure
```
app/
  page.tsx                  # Homepage
  our-story/page.tsx        # About / company page
  services/[slug]/page.tsx  # Dynamic service detail
  products/[slug]/page.tsx  # Dynamic product detail
  contact/page.tsx          # Contact form (mailto submission)
  case-studies/             # Case studies listing
  clients/                  # Client logos grid
  news/                     # News listing
  markets/                  # Markets overview
  careers/                  # Careers page

components/
  nav/Navbar.tsx            # Sticky nav with mega menu (SOLUTIONS uses sections[], not items[])
  sections/                 # Page sections (Hero, Footer, CTA, etc.)
  ui/                       # Reusable primitives (animated-hero, GlowCard, etc.)

data/codice.ts              # SINGLE SOURCE OF TRUTH — all company data lives here
```

---

## Data Model (`data/codice.ts`)
All content is exported from here. Never hardcode data in components — derive it.

| Export | Shape |
|--------|-------|
| `company` | name, certifications[], employees, offices[], social{} |
| `stats` | `{value, suffix, label}[]` |
| `services` | `{id, title, description, features[], techStack[], slug}[]` |
| `products` | `{id, name, slug, description, features[], techStack[], showcaseImages[], isNew}[]` |
| `markets` | `{id, name, description, details}[]` — IDs: government, healthcare, transportation, public-safety, unemployment, facilities |
| `clients` | `{category, items: [{name, logo}]}[]` |
| `news` | `{title, date, category, excerpt, slug}[]` — slugs are real URLs (codicetech.com) |
| `team` | `{name, role, photo?}[]` |
| `navigation` | SOLUTIONS group uses `sections[]`, other groups use `items[]` |

---

## Critical Gotchas

### 1. The Codex/linter agent rewrites files
A background agent actively rewrites components. To survive rewrites:
- **Footer social icons**: Use **inline SVGs** in JSX — never `import { LinkedIn } from 'lucide-react'`. The linter strips icon imports.
- **Derived data**: Compute from `company.*` fields (e.g. `company.offices.map(...)`) rather than hardcoding arrays in components.
- **MarketsGrid iconMap**: Keys must match market IDs exactly (`government`, `healthcare`, `transportation`, `public-safety`, `unemployment`, `facilities`).

### 2. Client logos
Only these files exist in `/public/images/clients/`:
`client-220.png` through `client-235.png`, `client-gra.png`, `client-pub.png`

### 3. Product showcase images
`/public/images/products/showcase/` — placeholder paths only, real images not yet added.

### 4. Contact form
Submits via `mailto:info@codicetech.com` with `encodeURIComponent` subject/body. No backend.

### 5. Navigation mega menu
`SOLUTIONS` group in `navigation` data uses `sections[]` (array of section objects with `items[]`). All other nav groups use `items[]` directly. Navbar handles both patterns.

---

## Design Tokens
```
Background:  #0A1628 (deep navy), #111827 (card surface), #1E293B (border)
Text:        #F8FAFC (primary), #94A3B8 (secondary), #64748B (muted)
Accent:      #2563EB (blue), #3B82F6 (blue hover), #FF6B00 (new badge)
```

---

## Key Components
| Component | Purpose |
|-----------|---------|
| `components/ui/animated-hero.tsx` | Homepage hero with cycling animated words |
| `components/ui/AnimatedCounter.tsx` | Scroll-triggered count-up numbers |
| `components/ui/GlowCard.tsx` | Reusable dark card with blue glow hover |
| `components/sections/Footer.tsx` | Footer with inline SVG social icons |
| `components/sections/MarketsGrid.tsx` | Market sector cards with iconMap |
| `components/sections/TrustMarquee.tsx` | Infinite scroll client logo ticker |

---

## Commands
```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm run lint         # ESLint check
vercel deploy --prod # Deploy to production
```

---

## What's Left
- Add real product showcase images to `/public/images/products/showcase/`
- Custom domain setup on Vercel dashboard
- Design polish: animation timing, mobile spacing, page transitions
- Careers page content (currently placeholder)
