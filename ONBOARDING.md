# CODICE Technology Website — Agent Onboarding

## What We're Building
A premium marketing website for **CODICE Technology LLC** — a DC-based gov-tech firm with 16+ years serving Washington DC government agencies. Design north star: "Palantir meets Vercel, built for DC government."

**Live site**: https://codice-website.vercel.app  
**GitHub**: https://github.com/yassine2med/Codice-website  
**Vercel project**: codice-website (auto-deploys on push to `master`)  
**Branch convention**: Work on `claude/fervent-lamarr-659ae6`, push to `master` to trigger deploy.

---

## Current Status — May 2026
**Precision White redesign is COMPLETE across all 14 pages.** The site has been fully converted from dark navy (#0A1628) to a white design system. All pages are live.

### ✅ Completed
- Full site dark→white redesign (all 14 pages)
- Homepage hero: asymmetric 2-col with live Mission Dashboard panel (animated metrics, activity feed, floating badges)
- `ProductMockup.tsx` — animated app-screenshot placeholders for all 8 products (wired into `/products` and `/products/[slug]`)
- `MagneticButton.tsx` — cursor magnetic pull effect (on hero CTAs)
- `app/template.tsx` — page transitions (blur+slide enter/exit via AnimatePresence)
- Our Story timeline: scroll-draw line, pop-in nodes, hover accent borders
- Navbar: EVENTS now its own top-level item (split from COMPANY); hover text fixed (was invisible white, now blue)
- `TechStack.tsx`, `Testimonials.tsx`, `SectionHeader.tsx`, `MarketsGrid.tsx` — all white tokens
- New utility components: `CursorGlow.tsx`, `ScrollProgress.tsx`, `TiltCard.tsx`

### 🔜 Next Up — Creative Enhancement Phase
**Priority order:**
1. **Globe component** — spinning interactive globe with DC as hub, agency connection lines. Use Magic UI globe or build with `cobe` library. Place in homepage stats section or Contact page.
2. **Real photography** — Unsplash/Pexels free CDN images (no API key needed, direct URL embed):
   - Hero background: DC aerial / Capitol (subtle tint behind dot grid)
   - Case Studies section headers: government building facades
   - Services page: data center / server room
   - Our Story: DC streetscape for founding section
3. **Animated Beam** (Magic UI) — light beams connecting CODICE to agencies in homepage
4. **Bento Grid** — replace uniform 3-col services grid with asymmetric magazine layout
5. **Border Beam** (Magic UI) — traveling light beam orbiting CTA cards
6. **Video loop** — silent Pexels DC footage in hero at 5% opacity
7. **Text scramble/decode** effect on main headline
8. **Mobile layout audit** — spacing, font sizes, grid breakpoints on all pages
9. **TiltCard.tsx** — wire into products page (component exists, not yet used)
10. **Custom domain** — when CODICE is ready

---

## Tech Stack
- **Next.js 16.2.5** with Turbopack, App Router
- **Tailwind CSS v4** — use `bg-linear-to-br` not `bg-gradient-to-br`, `aspect-4/3` not `aspect-[4/3]`
- **Framer Motion** — `AnimatePresence`, `motion.div`, `whileInView`, `viewport={{ once: true }}`
- **`react-countup`** — via `<AnimatedCounter>` component with `enableScrollSpy`
- **TypeScript** — strict mode

---

## Design System — Precision White
```
Background:  #FFFFFF (page)        #F8FAFC (section alt / card bg)   #F0F6FF (blue tint bg)
Border:      #E2E8F0 (default)     border-[#2563EB]/40 (hover)
Text:        #0F172A (primary)     #334155 (body)    #64748B (secondary)   #94A3B8 (muted)
Accent:      #2563EB (blue)        #1D4ED8 (hover)   #3B82F6 (light)
Badge:       orange-50/orange-200/orange-600 for "NEW" badges
Hover cards: hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.10)]
CTA shadow:  shadow-[0_8px_32px_rgba(37,99,235,0.25)]
Dot grid:    className="dot-grid opacity-50" (CSS class in globals.css)
```

---

## Site Map (14 pages, all complete)
```
/                       Homepage — Hero (2-col+Dashboard), TrustMarquee, Stats, Services, Products, Markets, Testimonials, News, CTA
/services               Services listing — all 8 services with features
/services/[slug]        Service detail — features, tech stack, related sidebar
/products               Products listing — all 8 products with ProductMockup animated headers
/products/[slug]        Product detail — ProductMockup + overlay carousel, features, tech section
/our-story              About — timeline (scroll-draw), team, values, certs, offices
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

## Navigation Structure (`data/codice.ts` → `navigation`)
```
HOME       → direct link to /
COMPANY    → dropdown: Our Story, Clients & Partners, Case Studies, Careers
SOLUTIONS  → mega menu (sections[]): Services | Products | Markets
EVENTS     → direct link to /news  ← NEW (split from COMPANY)
CONNECT    → dropdown: Articles, Capability Statement, Contact
```
**Rule**: `SOLUTIONS` group uses `sections[]` (nested). All other groups use `items[]`.  
**Single-item groups** render as direct links (no dropdown) — this is how HOME and EVENTS work.

---

## Key Components
| Component | Purpose |
|-----------|---------|
| `components/ui/animated-hero.tsx` | Homepage hero — 2-col layout, Mission Dashboard panel, MagneticButton CTAs |
| `components/ui/ProductMockup.tsx` | Animated app-screenshot placeholder for 8 product categories |
| `components/ui/MagneticButton.tsx` | Cursor magnetic pull wrapper — use on any primary CTA |
| `components/ui/AnimatedCounter.tsx` | Scroll-triggered count-up numbers (react-countup) |
| `components/ui/TiltCard.tsx` | 3D tilt on hover — built, NOT YET wired into products page |
| `components/ui/CursorGlow.tsx` | Cursor glow trail effect |
| `components/ui/ScrollProgress.tsx` | Reading progress bar |
| `components/ui/GlowCard.tsx` | Reusable card with blue glow hover |
| `components/ui/PageHero.tsx` | Reusable page hero (case-studies, markets, services) |
| `components/sections/Footer.tsx` | Footer — inline SVG socials (DO NOT use lucide icons — linter strips them) |
| `components/sections/MarketsGrid.tsx` | 9-sector market grid with iconMap |
| `components/sections/TrustMarquee.tsx` | Infinite scroll client logo ticker |
| `components/sections/CaseStudies.tsx` | 4-card case study grid |
| `components/sections/Testimonials.tsx` | 3-quote carousel with dot nav |
| `components/ui/dorpdown-navigation.tsx` | Desktop mega menu (note: filename has typo, keep as-is) |
| `app/template.tsx` | Page transition wrapper — re-mounts on every navigation (unlike layout.tsx) |

---

## Data Model (`data/codice.ts`) — Single Source of Truth
Never hardcode content in components. Always derive from these exports.

| Export | Shape | Notes |
|--------|-------|-------|
| `company` | `{name, fullName, employees:137, offices[], social{}, email, phone}` | 137 employees, 3 offices |
| `stats` | `{value, suffix, label}[]` | 16+, 12+, 8, 100% |
| `services` | `{id, title, description, features[], techStack[], icon, slug}[]` | 8 services |
| `products` | `{id, name, slug, category, description, highlights[], features[], techStack[], showcaseImages[], logo, isNew}[]` | 8 products |
| `markets` | `{id, name, description, details, icon}[]` | 9 sectors |
| `clients` | `{category, items:[{name,logo}]}[]` | 2 categories, 17 total |
| `clientLogos` | `string[]` | For TrustMarquee |
| `caseStudies` | `{client, product, challenge, solution, outcome, metric}[]` | 4 real DC agencies |
| `news` | `{title, date, excerpt, image, slug}[]` | slugs are real codicetech.com URLs |
| `team` | `{name, title, bio, education, photo}[]` | Linwood Jolly (CEO, photo:''), Dash Kiridena (Founder), + 3 |
| `testimonials` | `{quote, name, title, company, photo}[]` | 3 verified quotes |
| `techStack` | `string[]` | 15 technologies |
| `navigation` | groups[] | see Navigation Structure above |

**Market IDs**: `government`, `healthcare`, `education`, `transportation`, `public-safety`, `legal`, `unemployment`, `facilities`, `financial`

---

## Critical Gotchas

### 1. Codex/linter agent actively rewrites files
- **Footer social icons**: Must use **inline SVGs** in JSX — linter strips lucide icon imports
- **Derived data**: Always use `company.offices.map(...)` etc. — linter reverts hardcoded arrays
- **MarketsGrid iconMap**: Keys must exactly match market IDs. Icons: `Building2, HeartPulse, GraduationCap, Bus, Shield, Scale, Users, Hammer, DollarSign`
- **Tailwind v4 syntax**: `bg-linear-to-br` NOT `bg-gradient-to-br`, `aspect-4/3` NOT `aspect-[4/3]`

### 2. Images — what exists vs what doesn't
| Path | Status |
|------|--------|
| `/public/images/clients/client-220.png` → `client-235.png` | ✅ Exist |
| `/public/images/clients/client-gra.png`, `client-pub.png` | ✅ Exist |
| `/public/images/clients/client-dl1.png` → `client-dl5.png` | ✅ Exist |
| `/public/images/services/*.png` | ✅ All 8 exist |
| `/public/images/testimonials/marco.jpg`, `maria.jpg`, `jimmy.jpg` | ✅ Exist |
| `/public/images/team/dash.png`, `emmash.png`, `ashanthi.png`, `sully.png` | ✅ Exist |
| `/public/images/products/showcase/*.png` | ❌ Missing — `ProductMockup.tsx` renders animated placeholder instead |
| `/public/images/brand/codice-logo-full.png` | ✅ Exists |

### 3. Contact form
Submits via `mailto:info@codicetech.com` — no backend, no API needed.

### 4. Linwood Jolly has no photo
In `team[]` with `photo: ''` — renders as initial-avatar chip. Intentional until photo provided.

### 5. next.config.ts image domains
External images (Unsplash, Pexels) must be added to `images.remotePatterns` in `next.config.ts`:
```ts
{ protocol: 'https', hostname: 'images.unsplash.com' },
{ protocol: 'https', hostname: 'images.pexels.com' },
```

### 6. Page transitions use `app/template.tsx`
`layout.tsx` doesn't re-render between navigations — AnimatePresence inside it won't fire exit animations.
`template.tsx` re-instantiates on every navigation. Enter: opacity+y+blur. Exit: opacity+y+blur. 450ms.

### 7. ProductMockup categories (must match exactly)
`"Permitting & Licensing"`, `"AI & Compliance"`, `"Logistics & Transportation"`, `"Healthcare Finance"`,
`"Payment Processing"`, `"Healthcare Administration"`, `"Case Management"`, `"Program Management"`

---

## Useful Free Image URLs (no attribution needed)
These Unsplash CDN URLs can be used directly in `<Image>` with `unoptimized` or after adding domain to next.config.ts:
```
DC Capitol aerial:     https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1600&q=80
DC Government bldg:    https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80
Data center / servers: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80
Tech office team:      https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80
Cybersecurity:         https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80
DC at night:           https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1600&q=80
```

---

## Commands
```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build — must pass before any commit
npm run lint         # ESLint
git push origin claude/fervent-lamarr-659ae6:master   # Deploy to Vercel
```
