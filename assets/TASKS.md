# TASKS.md
# Source of truth for all active work.
# Updated by every agent at end of session.

---

## ACTIVE

### [antigravity] TASK-005: Visual polish - Trust Marquee + Stats + Testimonials
- TrustMarquee: Framer infinite scroll, fade mask edges, pause on hover
- StatsSection: dark section bg, large DM Mono numbers, blue glow behind each
- Testimonials: auto-play carousel, fade dissolve, pause on hover
- Responsive check all three
- Visual audit screenshot

### [antigravity] TASK-006: Normalize pass (after all sections built)
- Read design system tokens in SKILL.md
- Audit every section: font, size, spacing, color, radius, shadow
- List all inconsistencies found
- Fix all inconsistencies in one focused pass
- Commit: `[antigravity] ui: normalize full design system across all sections`
- Visual audit: screenshot full page, report pass/fail

### [codex] TASK-007: Final QA + Deploy (after normalize pass)
- `npm run build` - zero errors required
- `npm run lint` - zero errors
- Lighthouse audit on localhost (performance, accessibility, SEO)
- Report scores
- Deploy to Vercel: `vercel --prod`
- Share production URL with Yaz

---

## DONE

### [antigravity] TASK-004: Visual polish - Hero - COMPLETE (2026-05-06)
- Added animated dark grid background.
- Added blue glow accent dot/particle effect.
- Animated H1 word-by-word reveal on load.
- Animated sub text fade in after H1.
- Animated CTA buttons fade up.
- Stat bar: react-countup on all 4 numbers.
- Scroll indicator: animated chevron down.
- Visual audit completed.
- Added entry to .agent-log/antigravity.md.

### [codex] TASK-002: Verify scaffold build - COMPLETE (2026-05-06)
- `npm install` completed cleanly; dependencies were already up to date.
- `npm run build` passed clean on Next.js 16.2.5.
- `npm run dev` confirmed local preview at http://localhost:3000 with HTTP 200.
- Copied logo files to /public/images/brand/ (codice-logo.png, codice-logo-full.png).
- Updated CURRENT_STATE.md with build/dev status.
- Added entry to .agent-log/codex.md.
- Hand to Antigravity: "Ready for Hero section".

### [claude] TASK-001: Scaffold full project structure - COMPLETE (2026-05-06)
- Next.js scaffolded with TS, Tailwind, App Router.
- Installed: framer-motion, react-countup, lucide-react.
- shadcn/ui init + card, tabs, carousel, badge, button, navigation-menu.
- All folders created.
- globals.css with design tokens + marquee keyframe.
- layout.tsx with Inter + DM Mono, metadata, metadataBase.
- page.tsx with all 13 section imports.
- /data/codice.ts fully populated (company, stats, services, products, markets, clients, testimonials, techStack, caseStudies, news).
- /lib/constants.ts created.
- SectionHeader.tsx, GlowCard.tsx, AnimatedCounter.tsx built.
- All 13 sections built with real data: Navbar, Hero, TrustMarquee, ServicesGrid, ProductsShowcase, MarketsGrid, StatsSection, CaseStudies, Testimonials, TechStack, CTABanner, NewsEvents, Footer.
- Build passes clean.
- .agent-log/claude.md created.
- CURRENT_STATE.md updated.
- TASKS.md updated.

---

## BLOCKED

(Nothing)

---

## BACKLOG (post-launch)
- SEO: meta tags per page, structured data (JSON-LD Organization), sitemap.xml
- Performance: next/image for all images, lazy loading, bundle analysis
- Accessibility: ARIA labels, keyboard nav, color contrast audit (WCAG AA)
- Contact form: EmailJS or Resend API integration
- Analytics: Vercel Analytics or Plausible
- Blog/CMS: optional Contentlayer or Sanity for news section
- Dark/light mode toggle (stretch goal)
- Product detail pages (8 pages, one per product)
- Service detail pages (8 pages, one per service)
