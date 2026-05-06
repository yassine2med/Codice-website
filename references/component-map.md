# Component Map
# Per-section specs + 21st.dev search terms + fallback sources

---

## How to Use This File
1. Search 21st.dev first using the search terms listed
2. If found: install, adapt tokens, verify
3. If not found: use fallback source or build custom
4. All components must use the design system tokens from SKILL.md

---

## Section 1: Navigation

**Visual spec:**
- Transparent on page load → dark blur background on scroll
- Logo: left-aligned, white SVG
- Links: center, 14px/500, gap-8
- CTA: right, blue filled button "Get a Consultation"
- Mega menu: Services (2 cols, 4 per col) + Products (2 cols, 4 per col)
- Active link: blue underline dot
- Mobile: hamburger → full-height slide-in drawer, dark bg

**21st.dev search:** `navigation bar dark sticky blur backdrop`
**Fallback:** shadcn/ui NavigationMenu + custom mega menu
**Custom build needed:** Mega menu layout (no exact match likely)
**Framer:** `AnimatePresence` for mega menu, `useScroll` for bg transition

---

## Section 2: Hero

**Visual spec:**
- Full viewport height (100svh)
- Background: animated dark grid with subtle blue glow dots (no stock photos)
- Badge top: "DC's #1 Gov-Tech Firm · Small Business of the Year 🏆"
- H1: "Transforming Government Through Technology" (2 lines, clamp 48-80px)
- Sub: "16 years. 12+ agencies. 100% client retention. Built in Washington DC."
- CTAs: "Explore Our Work" (blue filled) + "View Services" (ghost/outline)
- Scroll indicator: animated chevron down

**Stat Bar (below hero fold):**
- 4 stats inline: 16+ Years | 12+ Agencies | 8 Products | 100% Retention
- Each: DM Mono number + Inter label below
- Animated count-up on page load (react-countup)
- Dividers between stats
- Dark surface bg, border-top

**21st.dev search:** `hero dark animated grid background glow`
**21st.dev search:** `stat counter animated scroll`
**Fallback hero bg:** Aceternity UI — "Background Grid" or "Dot Pattern"
**Fallback stat:** react-countup + custom layout
**Framer:** Staggered text reveal on load (H1 word by word), parallax on scroll

---

## Section 3: Trust Marquee

**Visual spec:**
- Infinite horizontal scroll (left direction, auto-play)
- Items: client name + optional logo placeholder
- Clients: DC Health | DC DGS | DC Public Schools | MPD | OCTO | OAG | DDOT | ICOSMOS | Gide Public Affairs
- Label above: "TRUSTED BY" in label style (12px / uppercase / gray)
- Fade mask: left and right edges fade to transparent
- Speed: ~30s for full loop, pause on hover

**21st.dev search:** `infinite marquee logo scroll`
**Fallback:** MagicUI — `marquee` component
**Custom:** Add fade mask via `[mask-image: linear-gradient(...)]`

---

## Section 4: Services Grid

**Visual spec:**
- Section header: "Services We Offer" + subtitle
- 8 cards in 4×2 grid (desktop), 2×4 (tablet), 1×8 (mobile)
- Each card: icon (Lucide or custom SVG) + H3 + 1-line description + "Learn More →"
- Card: dark surface bg (#111827), 1px border (#1E293B), 16px radius
- Hover: y -4px + box-shadow: 0 0 32px rgba(37,99,235,0.2) + border-color: #2563EB
- Icon: 40px, blue accent color

**21st.dev search:** `feature cards grid dark hover glow`
**21st.dev search:** `service cards with icons dark theme`
**Fallback:** shadcn/ui Card + custom hover styles
**Framer:** Stagger children fadeUp on scroll

---

## Section 5: Products Showcase

**Visual spec:**
- Section header: "Our Products" + subtitle
- Tab switcher: 8 product name tabs (horizontal scroll on mobile)
- Active tab: blue underline + white text
- Tab content: product name (H2) + category badge (label) + 3-line description + "Learn More →" link
- Side visual: abstract product illustration or icon (large, 200px)
- Featured callout badge: "NEW" on FortiMind.ai

**Alternative layout (if tabs feel cluttered):**
- 3 featured cards (FortiMind.ai, CelerKost, PermiOne) + "See All 8 Products →" CTA

**21st.dev search:** `tabbed product showcase dark`
**21st.dev search:** `product cards with category badges`
**Fallback:** shadcn/ui Tabs component + custom layout
**Framer:** Tab content: `AnimatePresence` slide transition

---

## Section 6: Markets Grid

**Visual spec:**
- Section header: "Markets We Serve"
- 9 tiles in 3×3 grid (desktop), 3×3 (tablet), 2-col (mobile)
- Each tile: emoji or icon + market name
- Hover: blue border + brief description reveals below title (expand animation)
- No images — icon-first, text-focused

**21st.dev search:** `icon grid market sectors hover reveal`
**Fallback:** Custom CSS grid + Framer hover expand
**Framer:** Hover → `layout` animation to expand description

---

## Section 7: Stats Section

**Visual spec:**
- Full-width dark section (#0A1628), 96px vertical padding
- 4 stats centered, large
- Each: DM Mono giant number (clamp 48-96px) + Inter label below
- Stats: 16+ Years | 12+ Agencies | 8 Products | 100% Retention
- Center divider lines between stats (desktop)
- Subtle blue glow behind numbers
- Count-up animation triggers when section enters viewport

**21st.dev search:** `animated number counter dark section`
**Package:** react-countup (npm) — `CountUp` with `enableScrollSpy`
**Framer:** Fade in section on scroll, counter delay stagger

---

## Section 8: Case Studies

**Visual spec:**
- Section header: "Results That Speak"
- 3 cards horizontal (desktop), stack mobile
- Each card:
  - Client badge (agency name, small)
  - Challenge: 1 line
  - Solution: 1-2 lines
  - Outcome metric: bold, blue, large (e.g. "40% fraud reduction")
  - CTA: "Read Case Study →"
- Card: dark surface, left blue border accent (4px)

**Featured cases:**
1. **FortiMind.ai** — AI regulatory compliance for federal agencies
2. **CelerKost** — Medicaid cost reporting, fraud prevention
3. **DDOT Permits** — PermiOne modernized DC permitting system

**21st.dev search:** `case study cards dark with metrics`
**21st.dev search:** `result cards with outcome numbers`
**Fallback:** Custom cards with shadcn border + Framer fadeUp

---

## Section 9: Testimonials

**Visual spec:**
- Section header: "What Our Clients Say"
- 3 cards in auto-play carousel (pause on hover)
- Each card:
  - Large opening quote mark (blue, 64px)
  - Quote text (italic, 18px)
  - Avatar circle + name (bold) + title + company
- Card: dark surface, subtle border
- Carousel indicators: dots below

**21st.dev search:** `testimonial carousel dark quotes`
**Fallback:** shadcn/ui Carousel component + custom card
**Framer:** Fade cross-dissolve between cards

---

## Section 10: Tech Stack

**Visual spec:**
- Section header: "Technologies We Master"
- Infinite marquee (like trust marquee but with tech icons)
- Each item: icon (SVG) + name below
- 2 rows scrolling in opposite directions (optional — more dynamic)
- Speed: ~40s loop, pause on hover

**Technologies:** React, Angular, Vue, Node.js, TypeScript, Spring, Laravel, MySQL, GitHub, AWS, Azure, Oracle, UKG, Genesys (+ 2 more)
**Icons:** Use devicons.dev SVGs or simple-icons

**21st.dev search:** `tech stack logo marquee two rows`
**Fallback:** MagicUI marquee, 2x instance reverse direction

---

## Section 11: CTA Banner

**Visual spec:**
- Full-width section, gradient bg: navy → deep blue
- Centered text:
  - H2: "Ready to modernize your agency?"
  - Sub: "Join 12+ government agencies that trust CODICE."
- 2 CTAs: "Schedule a Consultation" (white filled) + "View Services" (ghost white outline)
- Subtle blue particle or grid in background

**21st.dev search:** `CTA banner dark gradient center`
**Fallback:** Custom section with Aceternity animated gradient bg
**Framer:** Scale in on scroll

---

## Section 12: News & Events

**Visual spec:**
- Section header: "Latest from CODICE"
- 3 cards, horizontal desktop / stack mobile
- Each card:
  - Date label (small, gray)
  - Category badge (e.g. "Product Launch", "News")
  - Title (H3)
  - 2-line excerpt
  - "Read More →" link
- No hero image in cards (keep clean)

**21st.dev search:** `blog post cards dark minimal`
**Fallback:** shadcn/ui Card + Badge components

---

## Section 13: Footer

**Visual spec:**
- Dark navy background (#0A1628)
- 4 columns:
  1. Logo + tagline + social icons (LinkedIn, X, Instagram, Facebook)
  2. Services (8 links)
  3. Products (8 links)
  4. Contact (address, phone, email)
- Divider line above copyright
- Copyright: "© 2025 CODICE Technology LLC. All rights reserved."
- Optional: "DC Small Business of the Year 🏆" badge inline with copyright

**Build:** Custom layout — no component library match needed
**Framer:** None needed — static is fine

---

## Priority Build Order for Antigravity
1. Hero (most visible, makes or breaks first impression)
2. Trust Marquee (quick win, high visual impact)
3. Stats Section (animated counters = wow factor)
4. Services Grid (most visited section)
5. CTA Banner (conversion-critical)
6. Everything else
