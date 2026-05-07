# CODICE Technology Website — Agent Onboarding

## What We're Building
A premium marketing website for **CODICE Technology LLC** — a DC-based gov-tech firm with 16+ years serving Washington DC government agencies. Design north star: "Palantir meets Vercel, built for DC government."

**Live site**: https://codice-website.vercel.app  
**GitHub**: https://github.com/yassine2med/Codice-website  
**Vercel project**: codice-website (auto-deploys on push to `master`)

---

## Current Status
Structure and content are **complete**. The next phase is **design polish** — animations, mobile spacing, hover states, and page transitions. Do not restructure pages or move data around — focus on visual quality.

---

## Tech Stack
- **Next.js 16.2.5** with Turbopack, App Router
- **Tailwind CSS v4** — use `bg-linear-to-br` not `bg-gradient-to-br`, `aspect-4/3` not `aspect-[4/3]`
- **Framer Motion** — `AnimatePresence`, `motion.div`, `whileInView`, `viewport={{ once: true }}`
- **`react-countup`** — via `<AnimatedCounter>` component with `enableScrollSpy`
- **TypeScript** — strict mode

---

## Design Tokens
```
Background:  #0A1628 (page/deep navy)   #111827 (card surface)   #060E1A (darker sections)
Border:      #1E293B (default)          #2563EB/40 (hover)
Text:        #F8FAFC (primary)          #94A3B8 (secondary)       #64748B (muted)   #475569 (faint)
Accent:      #2563EB (blue)             #3B82F6 (blue hover)      #FF6B00 (NEW badge)
Glow:        shadow-[0_0_32px_rgba(37,99,235,0.12)]
```

---

## Site Map (14 pages, all complete)
```
/                       Homepage — Hero, TrustMarquee, Stats, Services, Products, Markets, Testimonials, News, CTA
/services               Services listing — all 8 services with features
/services/[slug]        Service detail — features, tech stack, related sidebar
/products               Products listing — all 8 products with category gradients
/products/[slug]        Product detail — carousel, features, tech section
/our-story              About — timeline, team, values, certs, offices
/clients                Clients — 17 agencies + partners, case highlights, testimonials
/case-studies           Case studies — 4 real DC agency outcomes
/markets                Markets — 9 government sectors
/news                   News — featured updates + article grid
/articles               Articles — 4 linked CODICE pieces
/careers                Careers — culture, open roles, location
/contact                Contact — form (mailto), offices, social
/_not-found             404
```

---

## Data Model (`data/codice.ts`) — Single Source of Truth
Never hardcode content in components. Always derive from these exports.

| Export | Shape | Notes |
|--------|-------|-------|
| `company` | `{name, fullName, employees:137, offices[], social{}, email, phone}` | 137 employees, 3 offices |
| `stats` | `{value, suffix, label}[]` | 16+, 12+, 8, 100% |
| `services` | `{id, title, description, features[], techStack[], icon, slug}[]` | 8 services |
| `products` | `{id, name, slug, category, description, highlights[], features[], techStack[], showcaseImages[], logo, isNew}[]` | 8 products |
| `markets` | `{id, name, description, details, icon}[]` | 9 sectors — IDs below |
| `clients` | `{category, items:[{name,logo}]}[]` | 2 categories, 17 total |
| `clientLogos` | `string[]` | For TrustMarquee |
| `caseStudies` | `{client, product, challenge, solution, outcome, metric}[]` | 4 real DC agencies |
| `news` | `{title, date, excerpt, image, slug}[]` | slugs are real codicetech.com URLs |
| `team` | `{name, title, bio, education, photo}[]` | Linwood Jolly (CEO), Dash Kiridena (Founder), + 3 |
| `testimonials` | `{quote, name, title, company, photo}[]` | 3 verified quotes |
| `techStack` | `string[]` | 15 technologies |
| `navigation` | groups[] | SOLUTIONS uses `sections[]`, others use `items[]` |

**Market IDs**: `government`, `healthcare`, `education`, `transportation`, `public-safety`, `legal`, `unemployment`, `facilities`, `financial`

---

## Critical Gotchas

### 1. Codex/linter agent actively rewrites files
- **Footer social icons**: Must use **inline SVGs** in JSX — linter strips lucide icon imports
- **Derived data**: Always use `company.offices.map(...)` etc. — linter reverts hardcoded arrays
- **MarketsGrid iconMap**: Keys must exactly match market IDs above. Current icons: `Building2, HeartPulse, GraduationCap, Bus, Shield, Scale, Users, Hammer, DollarSign`
- **Tailwind v4 syntax**: `bg-linear-to-br` (not `bg-gradient-to-br`), `aspect-4/3` (not `aspect-[4/3]`)

### 2. Images — what exists vs what doesn't
| Path | Status |
|------|--------|
| `/public/images/clients/client-220.png` → `client-235.png` | ✅ Exist |
| `/public/images/clients/client-gra.png`, `client-pub.png` | ✅ Exist |
| `/public/images/clients/client-dl1.png` → `client-dl5.png` | ✅ Exist |
| `/public/images/services/*.png` | ✅ All 8 exist |
| `/public/images/testimonials/marco.jpg`, `maria.jpg`, `jimmy.jpg` | ✅ Exist |
| `/public/images/team/dash.png`, `emmash.png`, `ashanthi.png`, `sully.png` | ✅ Exist |
| `/public/images/products/showcase/*.png` | ❌ Missing — gradient placeholder renders instead |
| `/public/images/brand/codice-logo-full.png` | ✅ Exists |

### 3. Contact form
Submits via `mailto:info@codicetech.com` — no backend, no API needed.

### 4. Navigation mega menu
`SOLUTIONS` group uses `sections[]` (nested). All other groups use `items[]`. Navbar handles both.

### 5. Linwood Jolly has no photo
He's in `team[]` with `photo: ''` — renders as a chip (initial avatar), not a photo card. That's intentional until a photo is provided.

---

## Key Components
| Component | Purpose |
|-----------|---------|
| `components/ui/animated-hero.tsx` | Homepage hero — badges, headline, subhead, CTAs, credentials bar |
| `components/ui/AnimatedCounter.tsx` | Scroll-triggered count-up numbers |
| `components/ui/GlowCard.tsx` | Reusable dark card with blue glow hover |
| `components/ui/PageHero.tsx` | Reusable page hero used on case-studies, markets, services |
| `components/sections/Footer.tsx` | Footer — inline SVG socials, all 8 services, all 8 products, legal links |
| `components/sections/MarketsGrid.tsx` | 9-sector market grid with iconMap |
| `components/sections/TrustMarquee.tsx` | Infinite scroll client logo ticker |
| `components/sections/CaseStudies.tsx` | 4-card case study grid with "View All" CTA |
| `components/sections/Testimonials.tsx` | 3-quote carousel with dot nav |

---

## What's Next — Design Polish Phase
- Animation timing refinement (stagger delays, easing curves)
- Mobile layout audit (padding, font sizes, grid breakpoints)
- Hover state consistency across all card types
- Page transition animations (route changes)
- Add real product showcase images when CODICE provides them
- Custom domain on Vercel

## Commands
```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build — must pass before any PR
npm run lint         # ESLint
vercel deploy --prod # Deploy to production
```
