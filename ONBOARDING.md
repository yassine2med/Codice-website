# CODICE Technology Website — Agent Onboarding

## What We're Building
A premium marketing website for **CODICE Technology LLC** — a DC-based gov-tech firm with 16+ years serving Washington DC government agencies. Design north star: "Palantir meets Vercel, built for DC government."

**Live site**: https://codice-website.vercel.app  
**GitHub**: https://github.com/yassine2med/Codice-website  
**Vercel project**: codice-website (auto-deploys on push to `master`)  
**Branch convention**: Work on `claude/fervent-lamarr-659ae6`, push to `master` to trigger deploy.

---

## Current Status — May 2026
**Site is fully production-ready and client-presentable. All pages, components, accessibility, and polish are complete.**

### ✅ Completed (full history)
- Full site dark→white redesign (all 14 pages) — Precision White design system
- Homepage hero: asymmetric 2-col, live Mission Dashboard panel (metrics + activity feed); dashboard is `hidden lg:flex` (desktop-only)
- `ProductMockup.tsx` — animated app-screenshot placeholders for all 8 products (wired into `/products` and `/products/[slug]`)
- `MagneticButton.tsx` — cursor magnetic pull effect (on hero CTAs)
- `app/template.tsx` — page transitions (blur+slide enter/exit via AnimatePresence)
- Our Story timeline: scroll-draw line, pop-in nodes, hover accent borders
- Navbar: EVENTS top-level item (split from COMPANY); logo updated to `/images/brand/codice-logo-full.png`; inner padding `px-4 sm:px-8`; search button fires `codice:open-palette` custom event
- `TechStack.tsx`, `Testimonials.tsx`, `SectionHeader.tsx`, `MarketsGrid.tsx` — all white tokens
- Utility components: `CursorGlow.tsx`, `ScrollProgress.tsx`, `TiltCard.tsx`
- **Globe component** (`components/sections/GlobeSection.tsx`) — spinning cobe globe, DC as hub, arcs to London/Paris/Tokyo/Singapore, stats chips, agency chips; placed on homepage between StatsSection and BeamSection
- **BeamSection** (`components/sections/BeamSection.tsx`) — AnimatedBeam connecting DC agencies (DCRA/DOH/DDOT/DOES) ↔ CODICE hub ↔ products (PermiOne/FortiMind/CelerKost/Travo AI); `md:hidden` mobile fallback grid
- **ServicesBento** (`components/sections/ServicesBento.tsx`) — asymmetric 4-col bento grid replacing uniform services grid; FeaturedCard (2×2), WideCard (2×1), NormalCard; TiltCard on all cards; BorderBeam on FeaturedCard (dark bg, safe)
- **BorderBeam** — used in ServicesBento FeaturedCard only. **NOT on hero dashboard** (caused white mask stacking bug — removed)
- **TiltCard** wired into `/products` page (`intensity={6}`, `perspective: "1200px"` on grid)
- **PageHero** — accepts `bgImage?: string` prop; used on case-studies (DC aerial) and services (data center)
- Footer redesigned: dark navy `bg-[#0A0F1E]`, 12-col grid, logo in original colors (no filter), inline SVG socials
- `app/capability/page.tsx` split into server shell + `CapabilityClient.tsx` (needed for `export const metadata` + framer-motion coexistence)
- Real photography added: hero bg (DC at night), CTABanner (DC aerial), services page (data center), case-studies (DC aerial), Our Story founding section (DC Capitol aerial at 0.055 opacity)
- Removed heavy animations: no scan-line, no 28 floating particles, drift orbs softened
- **Mobile audit COMPLETE** — all 14 pages have `overflow-x-hidden`; globe canvas uses `aspectRatio: "1/1"` + `height: auto`; hero badges `hidden sm:flex`; navbar `px-4 sm:px-8`
- **`AnnouncementBanner.tsx`** — fixed top-0 z-[60] dark bar; "DC Small Business of the Year 2025" + FY2026 CTA; sets CSS var `--banner-h` for navbar offset; localStorage dismissal (`codice-banner-v2`)
- **`ChatWidget.tsx`** — static chatbot with 8 pre-written Q&A pairs; dark navy panel fixed bottom-right; notification badge disappears after first open; CTA links to relevant pages
- **`CommandPalette.tsx`** — Cmd/Ctrl+K search across all 12 pages + 8 products + 8 services; keyboard nav (↑↓ Enter Esc); recently visited pages tracked in localStorage; triggered via custom event `codice:open-palette`
- **`FloatingCTA.tsx`** — scroll-triggered "Schedule a Call" pill; hooks violation fixed (all hooks before conditional return)
- **`ScrollToTop.tsx`** — repositioned to `bottom-24 right-6` to sit above ChatWidget button
- **`TrustStrip.tsx`** — 8 certification badges on homepage (GSA Schedule 70, MBE, FedRAMP-Ready, NIST 800-53, HIPAA, PCI-DSS, SBA 8(a), DC SBOTY 2025); DC SBOTY highlighted in orange
- **`/products` page** — 6 animated filter tabs (All, Gov Operations, Healthcare, AI & Compliance, Finance & Pay, Transportation); AnimatePresence transitions on grid switch; "● Live" badge on every card
- **`/services/[slug]` page** — "Powered by These Platforms" cross-link section with `SERVICE_PRODUCTS` map; Travo AI added to cloud-migration
- **`/careers` page** — `QuickApplyForm` with name, email, role selector, note fields; mailto submit with loading/success states; "Don't see the right role?" dark section
- **`/contact` page** — "Available" green pulsing badge on form card header; CalendarCheck + Users trust signals
- **`/capability` page** — Print / Save PDF button (`window.print()`)
- **`/news` page** — first article as full-width featured landscape card; remaining in 3-col grid; `tagConfig` renders colored category badges (Product Launch / Article / Capability)
- **Accessibility** — skip-to-content link in `layout.tsx` (`#main-content`); `id="main-content"` on ALL 14 page `<main>` tags
- **SEO** — `layout.tsx` for products and services pages with `keywords[]` arrays and proper OG images; sitemap.xml; robots.txt
- **Print CSS** — Capability page prints cleanly via browser print dialog

### 🔜 Remaining (low priority)
1. **Custom domain** — when CODICE is ready
2. **Real product showcase images** — `ProductMockup.tsx` renders animated placeholders until `/public/images/products/showcase/*.png` are provided

---

## Tech Stack
- **Next.js 16.2.5** with Turbopack, App Router
- **Tailwind CSS v4** — use `bg-linear-to-br` not `bg-gradient-to-br`, `aspect-4/3` not `aspect-[4/3]`
- **Framer Motion** — `AnimatePresence`, `motion.div`, `whileInView`, `viewport={{ once: true }}`
- **`react-countup`** — via `<AnimatedCounter>` component with `enableScrollSpy`
- **`cobe` v2.0.1** — WebGL globe; API: `createGlobe(canvas, opts)` → `{ update(partialOpts), destroy() }`; NO `onRender` callback; uses `requestAnimationFrame` loop with `globe.update({ phi })`
- **TypeScript** — strict mode

---

## Design System — Precision White
```
Background:  #FFFFFF (page)        #F8FAFC (section alt / card bg)   #F0F6FF (blue tint bg)
Border:      #E2E8F0 (default)     border-[#2563EB]/40 (hover)
Text:        #0F172A (primary)     #334155 (body)    #64748B (secondary)   #94A3B8 (muted)
Accent:      #2563EB (blue)        #1D4ED8 (hover)   #3B82F6 (light)       #60A5FA (on dark bg)
Badge:       orange-50/orange-200/orange-600 for "NEW" badges
Hover cards: hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.10)]
CTA shadow:  shadow-[0_8px_32px_rgba(37,99,235,0.25)]
Dot grid:    className="dot-grid opacity-50" (CSS class in globals.css)
Dark section bg: #0A0F1E (Globe section, Footer)  #080D1A (Globe section)  #0A0F1E (CTABanner)
```

---

## Site Map (14 pages, all complete)
```
/                       Homepage — Hero (2-col+Dashboard hidden on mobile), TrustMarquee, Stats, TrustStrip, GlobeSection, BeamSection, ServicesBento, ProductsShowcase, MarketsGrid, Testimonials, NewsEvents, CTABanner
/services               Services listing — dark hero + stats + 8 service cards + Why CODICE
/services/[slug]        Service detail — features grid, approach, tech stack, "Powered by These Platforms" cross-links
/products               Products listing — hero, 6 filter tabs, 8 product cards with TiltCard + ProductMockup
/products/[slug]        Product detail — ProductMockup header, features, tech section
/our-story              About — hero, timeline (scroll-draw), team modals, values, certs, offices; DC Capitol aerial in founding section
/clients                Clients — 17 agencies + partners, case highlights, testimonials
/case-studies           Case studies — PageHero + 4-card grid + StatsSection
/markets                Markets — 9 government sectors grid
/news                   News — featured updates hero card + full-width first article + 3-col article grid with category badges
/articles               Articles — 4 linked CODICE pieces
/careers                Careers — culture, open roles, QuickApplyForm, location
/capability             Capability statement — GSA schedules, NAICS codes, past performance, Print/Save PDF button
/contact                Contact — form (mailto), "Available" badge, trust signals, offices, social
/_not-found             404
```

---

## Navigation Structure (`data/codice.ts` → `navigation`)
```
HOME       → direct link to /
COMPANY    → dropdown: Our Story, Clients & Partners, Case Studies, Careers
SOLUTIONS  → mega menu (sections[]): Services | Products | Markets
EVENTS     → direct link to /news
CONNECT    → dropdown: Articles, Capability Statement, Contact
```
**Rule**: `SOLUTIONS` group uses `sections[]` (nested). All other groups use `items[]`.  
**Single-item groups** render as direct links (no dropdown) — this is how HOME and EVENTS work.

---

## Key Components
| Component | Purpose |
|-----------|---------|
| `components/ui/animated-hero.tsx` | Homepage hero — 2-col, Mission Dashboard panel (`hidden lg:flex`), MagneticButton CTAs |
| `components/sections/GlobeSection.tsx` | Spinning cobe globe — DC hub, arcs to 4 capitals, stats chips, agency chips |
| `components/sections/BeamSection.tsx` | AnimatedBeam diagram — agencies ↔ CODICE ↔ products; `md:hidden` mobile fallback |
| `components/sections/ServicesBento.tsx` | Asymmetric bento grid — FeaturedCard, WideCard, NormalCard with TiltCard |
| `components/sections/TrustStrip.tsx` | 8 certification badges on homepage (GSA, MBE, FedRAMP, NIST, HIPAA, PCI-DSS, SBA 8(a), SBOTY) |
| `components/ui/ProductMockup.tsx` | Animated app-screenshot placeholder for 8 product categories |
| `components/ui/MagneticButton.tsx` | Cursor magnetic pull wrapper — use on any primary CTA |
| `components/ui/AnimatedCounter.tsx` | Scroll-triggered count-up numbers (react-countup) |
| `components/ui/TiltCard.tsx` | 3D tilt on hover — wired into products page + ServicesBento |
| `components/ui/CursorGlow.tsx` | Cursor glow trail effect |
| `components/ui/ScrollProgress.tsx` | Reading progress bar |
| `components/ui/ScrollToTop.tsx` | Back-to-top button at `bottom-24 right-6` (above ChatWidget) |
| `components/ui/FloatingCTA.tsx` | Scroll-triggered "Schedule a Call" pill; hidden on /contact; hooks before conditional return |
| `components/ui/ChatWidget.tsx` | Static 8-Q&A chatbot, dark navy, fixed bottom-right; notification badge |
| `components/ui/CommandPalette.tsx` | Cmd/Ctrl+K search palette; all pages + products + services; localStorage recent pages |
| `components/ui/AnnouncementBanner.tsx` | Fixed top banner; sets `--banner-h` CSS var; `codice-banner-v2` localStorage key |
| `components/ui/GlowCard.tsx` | Reusable card with blue glow hover |
| `components/ui/PageHero.tsx` | Reusable dark hero — accepts `label`, `title`, `subtitle`, `bgImage?` |
| `components/ui/BorderBeam.tsx` | Rotating light beam orbit — safe only on dark bg cards (bg prop must match card bg) |
| `components/sections/Footer.tsx` | Footer — dark navy, inline SVG socials (DO NOT use lucide icons — linter strips them) |
| `components/sections/MarketsGrid.tsx` | 9-sector market grid with iconMap |
| `components/sections/TrustMarquee.tsx` | Infinite scroll client logo ticker |
| `components/sections/CaseStudies.tsx` | 4-card case study grid |
| `components/sections/Testimonials.tsx` | 3-quote carousel with dot nav |
| `components/ui/dorpdown-navigation.tsx` | Desktop mega menu (note: filename has typo, keep as-is) |
| `app/template.tsx` | Page transition wrapper — re-mounts on every navigation |
| `app/capability/CapabilityClient.tsx` | "use client" half of capability page (split from page.tsx for metadata) |

---

## Global Layout (`app/layout.tsx`) — render order
```tsx
<AnnouncementBanner />   // fixed top-0 z-[60], sets --banner-h CSS var
<ScrollProgress />       // reading progress bar
<CursorGlow />           // cursor glow trail
<ScrollToTop />          // bottom-24 right-6
<FloatingCTA />          // scroll-triggered pill, hidden on /contact
<ChatWidget />           // fixed bottom-8 right-6 (56px button)
<CommandPalette />       // Cmd/Ctrl+K overlay
{children}
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

### 2. BorderBeam — white mask stacking bug
`BorderBeam` renders an `absolute inset-[1.5px]` div with the card's background color as a mask. On **white/light background cards**, this mask covers all card content. **Only use BorderBeam on dark background cards** (pass `bg="#0F172A"` or the matching dark color). It's currently only on `ServicesBento FeaturedCard` (`bg="#0F172A"`).

### 3. cobe v2 API (no onRender)
```tsx
const globe = createGlobe(canvas, { ...options });
// Animation loop — NOT onRender:
const animate = () => {
  phi.current += 0.0022;
  globe.update({ phi: phi.current });
  rafId = requestAnimationFrame(animate);
};
// Canvas dimensions MUST be JSX props, not imperative (React 19 removeChild crash):
<canvas ref={canvasRef} width={GLOBE_SIZE * 2} height={GLOBE_SIZE * 2}
  style={{ width: "100%", maxWidth: GLOBE_SIZE, height: "auto", aspectRatio: "1 / 1" }} />
```

### 4. Capability page — server/client split
`app/capability/page.tsx` is a server component (exports `metadata`).  
`app/capability/CapabilityClient.tsx` is `"use client"` with all the motion.div JSX.  
**Do not add `"use client"` to `page.tsx`** or metadata export breaks.

### 5. Images — what exists vs what doesn't
| Path | Status |
|------|--------|
| `/public/images/clients/client-220.png` → `client-235.png` | ✅ Exist |
| `/public/images/clients/client-gra.png`, `client-pub.png` | ✅ Exist |
| `/public/images/clients/client-dl1.png` → `client-dl5.png` | ✅ Exist |
| `/public/images/services/*.png` | ✅ All 8 exist |
| `/public/images/testimonials/marco.jpg`, `maria.jpg`, `jimmy.jpg` | ✅ Exist |
| `/public/images/team/dash.png`, `emmash.png`, `ashanthi.png`, `sully.png` | ✅ Exist |
| `/public/images/products/showcase/*.png` | ❌ Missing — `ProductMockup.tsx` renders animated placeholder |
| `/public/images/brand/codice-logo-full.png` | ✅ Exists (use as-is, no color filter) |

### 6. Contact form
Submits via `mailto:info@codicetech.com` — no backend, no API needed.

### 7. Linwood Jolly has no photo
In `team[]` with `photo: ''` — renders as initial-avatar chip. Intentional until photo provided.

### 8. next.config.ts image domains
External images (Unsplash, Pexels) must be in `images.remotePatterns` in `next.config.ts`:
```ts
{ protocol: 'https', hostname: 'images.unsplash.com' },
{ protocol: 'https', hostname: 'images.pexels.com' },
```

### 9. Page transitions use `app/template.tsx`
`layout.tsx` doesn't re-render between navigations — AnimatePresence inside it won't fire exit animations.
`template.tsx` re-instantiates on every navigation. Enter: opacity+y+blur. Exit: opacity+y+blur. 450ms.

### 10. ProductMockup categories (must match exactly)
`"Permitting & Licensing"`, `"AI & Compliance"`, `"Logistics & Transportation"`, `"Healthcare Finance"`,
`"Payment Processing"`, `"Healthcare Administration"`, `"Case Management"`, `"Program Management"`

### 11. Mobile — all pages have overflow-x-hidden
Every `<main>` tag has `overflow-x-hidden`. Sections with large decorative elements also have `overflow-hidden`. Do not remove these — decorative rings, orbs, and canvas elements can cause horizontal scroll on narrow viewports.

### 12. AnnouncementBanner + Navbar offset
Banner sets `document.documentElement.style.setProperty("--banner-h", "44px")` on mount.  
Navbar consumes it: `style={{ top: "var(--banner-h, 0px)" }}`.  
If dismissed, `--banner-h` resets to `"0px"`. Do NOT hardcode `top-0` on the Navbar.

### 13. FloatingCTA — hooks must come before conditional return
```tsx
// CORRECT — hooks first, conditional return last:
const pathname = usePathname();
useEffect(() => { ... }, [pathname]);
if (pathname === "/contact" || dismissed) return null;
```
Previously had early return BEFORE `useEffect` — React hooks violation causing runtime error.

### 14. CommandPalette — custom event bridge
Navbar search button fires `window.dispatchEvent(new Event("codice:open-palette"))`.  
CommandPalette listens for it in a `useEffect`. This lets two sibling components communicate without prop drilling through the layout.

### 15. Service → Product cross-links map
`app/services/[slug]/page.tsx` has a `SERVICE_PRODUCTS` record mapping each service slug to product slugs. Product slugs must match `data/codice.ts` exactly (`"travo"` not `"travo-ai"`).

### 16. Git push mechanism
Worktree `.git` files are broken — all pushes go through `/tmp/codice-fresh` (a full clone).  
Workflow: edit in `D:\Codex\Codice-website` → copy to worktree → copy to `/tmp/codice-fresh` → `npm run build` → `git commit` → `git push origin master`.

---

## Useful Free Image URLs (no attribution needed)
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
