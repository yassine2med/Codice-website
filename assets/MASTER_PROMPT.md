# CODICE WEBSITE REBUILD — MASTER PROMPT
# Paste this entire file into Claude Code as your first message.
# Claude Code reads this, scaffolds the project, then hands to Codex to verify.

---

## Who You Are

You are Claude Code, acting as architect and reviewer on the Codice Technology website rebuild.
This project uses a shared multi-agent workflow. Read the full protocol in references/multi-agent-workflow.md.

**Your role:** Architecture, data layer, component scaffolding, logic, code review.
**What you do NOT do:** Git commits (unless Yaz asks), design decisions, visual polish.
**What comes after you:** Codex verifies the build, Antigravity handles visual polish.

---

## Project Brief

Rebuild codicetech.com from scratch — replacing a dated WordPress/Elementor site with a
premium, modern, dark gov-tech website. The new site should feel like Palantir meets Vercel,
built for Washington DC government procurement officers and agency CTOs.

**Stack:**
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Components: shadcn/ui + 21st.dev components
- Icons: Lucide React + simple-icons (for tech stack)
- Counters: react-countup
- Deployment: Vercel

---

## Before You Do Anything

Run the agent start checklist:
1. `git status`
2. Read `CURRENT_STATE.md` (create it if it doesn't exist yet)
3. Read `TASKS.md` (create it if it doesn't exist yet)
4. Check `.agent-log/` for any prior notes

---

## Phase 1: Your Task — Scaffold the Project

### Step 1: Initialize
```bash
npx create-next-app@latest codice-website --typescript --tailwind --eslint --app --src-dir=false
cd codice-website
npm install framer-motion react-countup
npm install lucide-react
npx shadcn@latest init
npx shadcn@latest add card tabs carousel badge button navigation-menu
```

### Step 2: Create Folder Structure
```
/app
  layout.tsx          ← root layout with fonts, metadata, dark bg
  page.tsx            ← homepage (imports all sections)
  globals.css         ← CSS custom properties (design tokens)

/components
  /nav
    Navbar.tsx        ← sticky nav with mega menu
    MegaMenu.tsx      ← services + products dropdown
    MobileMenu.tsx    ← hamburger drawer
  /sections
    Hero.tsx          ← hero with animated bg + stat bar
    TrustMarquee.tsx  ← infinite scroll client logos
    ServicesGrid.tsx  ← 8 service cards
    ProductsShowcase.tsx ← tabbed 8 products
    MarketsGrid.tsx   ← 9 market tiles
    StatsSection.tsx  ← animated counters
    CaseStudies.tsx   ← 3 case study cards
    Testimonials.tsx  ← 3 quote carousel
    TechStack.tsx     ← tech marquee
    CTABanner.tsx     ← full-width conversion section
    NewsEvents.tsx    ← 3 latest articles
    Footer.tsx        ← 4-column footer
  /ui
    AnimatedCounter.tsx  ← wrapper for react-countup
    SectionHeader.tsx    ← reusable section title + subtitle
    GlowCard.tsx         ← card with hover glow effect

/data
  codice.ts           ← ALL company data as typed constants (see spec below)

/lib
  utils.ts            ← cn() utility from shadcn
  constants.ts        ← site-wide constants (site name, domain, etc.)

/.agent-log
  claude.md           ← your handoff notes
  codex.md            ← (Codex fills this)
  antigravity.md      ← (Antigravity fills this)

CURRENT_STATE.md      ← project status tracker
TASKS.md              ← agent task breakdown
```

### Step 3: Configure globals.css with Design Tokens
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --navy: #0A1628;
  --blue: #2563EB;
  --blue-light: #3B82F6;
  --blue-glow: rgba(37, 99, 235, 0.15);
  --white: #F8FAFC;
  --gray: #64748B;
  --surface: #111827;
  --border: #1E293B;

  /* Brand accent colors (from logo mark — accent use only) */
  --brand-orange: #FF6B00;
  --brand-blue:   #0099FF;
  --brand-red:    #CC2200;
  --brand-green:  #7ACC00;
}

* {
  box-sizing: border-box;
}

body {
  background-color: var(--navy);
  color: var(--white);
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}
```

### Step 4: Configure tailwind.config.ts
Extend the theme with the design tokens above as named colors:
```ts
colors: {
  navy: '#0A1628',
  blue: { DEFAULT: '#2563EB', light: '#3B82F6' },
  white: '#F8FAFC',
  gray: '#64748B',
  surface: '#111827',
  border: '#1E293B',
}
```

### Step 5: Configure layout.tsx
- Import Inter and DM Mono from next/font/google
- Set metadata: title, description, og tags
- Dark background, text-white, font applied to body

### Step 6: Populate /data/codice.ts
Create a fully typed data file. This is the SINGLE source of truth for all content.
No hardcoded strings in components — import everything from here.

```typescript
// /data/codice.ts

export const company = {
  name: 'CODICE',
  fullName: 'CODICE Technology LLC',
  founded: 2009,
  tagline: 'Transforming Government Through Technology',
  subtagline: '16 years. 12+ agencies. 100% client retention. Built in Washington DC.',
  award: "Washington DC's Small Business of the Year",
  phone: '+1 202-808-9399',
  email: 'info@codicetech.com',
  address: '1101 Vermont Avenue NW Suite 400, Washington, DC 20005',
  social: {
    linkedin: 'https://www.linkedin.com/company/codicetech',
    instagram: 'https://www.instagram.com/codicetech/',
    twitter: 'https://x.com/CodiceTech',
    facebook: 'https://web.facebook.com/CodiceTechDC',
  },
}

export const stats = [
  { value: 16, suffix: '+', label: 'Years of Experience' },
  { value: 12, suffix: '+', label: 'Government Agencies' },
  { value: 8, suffix: '', label: 'Proprietary Products' },
  { value: 100, suffix: '%', label: 'Client Retention' },
]

export const services = [
  { id: 'software', title: 'Custom Software Development', description: 'Tailored applications built for your specific mission and workflow.', slug: '/custom-software-and-application-development/' },
  { id: 'permits', title: 'Permit System Modernization', description: 'Replace legacy permit systems with fast, compliant modern platforms.', slug: '/permit-system-modernization/' },
  { id: 'analytics', title: 'Data Analytics & Business Intelligence', description: 'Decision-enabling dashboards and BI solutions for government data.', slug: '/data-analytics-and-business-intelligence/' },
  { id: 'cloud', title: 'Cloud Migration & Modernization', description: 'Move from legacy infrastructure to AWS, Azure, and cloud-native systems.', slug: '/cloud-migration-and-modernization/' },
  { id: 'security', title: 'IT Security & Privacy Solutions', description: 'Compliance-first security services for sensitive government environments.', slug: '/it-security-and-privacy-solutions/' },
  { id: 'payments', title: 'Payment Processing & Financial Systems', description: 'Automated payment platforms for government agencies and healthcare.', slug: '/payment-processing-and-financial-systems/' },
  { id: 'consulting', title: 'IT Consulting & Strategic Planning', description: 'Strategic and tactical technology consulting with measurable outcomes.', slug: '/it-consulting-and-strategic-planning/' },
  { id: 'workforce', title: 'Workforce Management & Support', description: 'IT staffing, HR systems, and administrative support solutions.', slug: '/workforce-management-and-administrative-support-solutions/' },
]

export const products = [
  { id: 'fortimind', name: 'FortiMind.ai', category: 'AI Regulatory Intelligence', description: 'AI-driven platform for regulatory compliance and intelligence.', isNew: true, slug: '/products/#fortimind' },
  { id: 'permione', name: 'PermiOne', category: 'Permit Modernization', description: 'End-to-end digital permitting for government agencies.', isNew: false, slug: '/products/#permione' },
  { id: 'celerkost', name: 'CelerKost', category: 'Healthcare Finance', description: 'Medicaid cost reporting that prevents fraud and enhances transparency.', isNew: false, slug: '/products/#celerkost' },
  { id: 'codicepay', name: 'CodicePay', category: 'Payment Processing', description: 'Automated payment solutions for public sector workflows.', isNew: false, slug: '/products/#codicepay' },
  { id: 'celermed', name: 'CelerMed', category: 'Healthcare Admin', description: 'Healthcare administration built for government health programs.', isNew: false, slug: '/products/#celermed' },
  { id: 'celercase', name: 'CelerCase', category: 'Case Management', description: 'Digital case management for justice, social services, and beyond.', isNew: false, slug: '/products/#celercase' },
  { id: 'travo', name: 'Travo AI', category: 'Transportation AI', description: 'AI-powered optimization for transportation and transit systems.', isNew: false, slug: '/products/#travo' },
  { id: 'cypms', name: 'CYPMS', category: 'Public Management', description: 'Youth and public program management for government agencies.', isNew: false, slug: '/products/#cypms' },
]

export const markets = [
  { id: 'gov', name: 'Government Agencies', icon: '🏛️' },
  { id: 'safety', name: 'Public Safety & Justice', icon: '⚖️' },
  { id: 'education', name: 'Education Systems', icon: '🎓' },
  { id: 'healthcare', name: 'Healthcare & Social Services', icon: '🏥' },
  { id: 'transport', name: 'Transportation & Infrastructure', icon: '🚇' },
  { id: 'environment', name: 'Environmental & Utility', icon: '🌿' },
  { id: 'finance', name: 'Financial Services', icon: '💳' },
  { id: 'hr', name: 'HR & Workforce Management', icon: '👥' },
  { id: 'legal', name: 'Legal & Regulatory Compliance', icon: '📋' },
]

export const clients = [
  'DC Department of Health',
  'DC Department of General Services',
  'DC Public Schools',
  'Metropolitan Police Department',
  'Office of the Chief Technology Officer',
  'Office of the Attorney General',
  'DC Department of Transportation',
  'Metro St. Louis Sewer District',
]

export const testimonials = [
  {
    quote: "CODICE's technical team can thoroughly assess an issue and provide a viable solution in no time.",
    name: 'Marco Sernesi',
    title: 'Managing Director',
    company: 'ICOSMOS Corp',
  },
  {
    quote: "The engagement was smooth — we met all contract requirements and the client was very pleased.",
    name: 'Maria Perrin',
    title: 'Principal',
    company: 'Gide Public Affairs',
  },
  {
    quote: "CODICE has been very flexible with financial operations, time management, and great timeliness and cooperation.",
    name: 'Jimmy Ieng',
    title: 'IT Manager',
    company: 'Office of the Chief Technology Officer',
  },
]

export const techStack = [
  'React', 'Angular', 'Vue', 'Node.js', 'TypeScript',
  'Spring', 'Laravel', 'MySQL', 'GitHub', 'AWS',
  'Azure', 'Oracle', 'UKG', 'Genesys',
]

export const caseStudies = [
  {
    client: 'DC Dept. of Transportation',
    product: 'PermiOne',
    challenge: 'Outdated legacy permitting system causing delays and compliance issues.',
    solution: 'Deployed PermiOne — a modern digital permitting platform built for government scale.',
    outcome: 'Faster permit processing, full compliance, agency-wide adoption.',
    metric: '100% digital',
  },
  {
    client: 'Federal Healthcare Agency',
    product: 'CelerKost',
    challenge: 'Medicaid cost reporting errors creating fraud exposure and transparency gaps.',
    solution: 'Implemented CelerKost with automated validation and real-time audit trails.',
    outcome: 'Significant fraud reduction, improved regulatory compliance.',
    metric: 'Fraud eliminated',
  },
  {
    client: 'Government Agency',
    product: 'FortiMind.ai',
    challenge: 'Manual regulatory intelligence processes unable to keep pace with changing requirements.',
    solution: 'Deployed FortiMind.ai — AI-driven platform for real-time regulatory monitoring.',
    outcome: 'Automated compliance intelligence, faster response to regulatory changes.',
    metric: 'AI-powered',
  },
]
```

### Step 7: Build page.tsx as Section Stubs
Import all 13 section components and render them in order.
Each section is a `<section id="section-name">` with a placeholder `<div>` inside.
This gives Antigravity a clear target for each section.

### Step 8: Build SectionHeader.tsx (shared component)
```tsx
// Used by every section
export function SectionHeader({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      {label && <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-4">{label}</p>}
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
```

### Step 9: Fill CURRENT_STATE.md and TASKS.md
Update both files with current status after scaffold is complete.

---

## After Scaffold — Hand Off to Codex

End your session with this message:

> "Scaffold complete. Handing to Codex.
> Please run `npm run build` and `npm run dev` to verify.
> Fix any type errors or missing imports.
> Update CURRENT_STATE.md with build status.
> Mark scaffold tasks as DONE in TASKS.md.
> Add entry to .agent-log/codex.md.
> Then hand to Antigravity to start with Hero section."

---

## After Codex Verifies — Antigravity Priority Order

1. Hero section (most critical — animated background, text reveal, stat counters)
2. Trust Marquee (quick high-impact win)
3. Stats Section (count-up animations)
4. Services Grid (hover glow cards)
5. CTA Banner
6. Everything else

---

## Logo Assets

Both logo files go in `/public/images/brand/`:
- `codice-logo.png` — icon/mark only (3D colorful swirl)
- `codice-logo-full.png` — icon + "CODICE" wordmark side by side

**Critical:** Both logos have black backgrounds. To render correctly on dark navy:
```tsx
// Use mix-blend-mode: screen — the black becomes transparent on dark bg
<Image
  src="/images/brand/codice-logo-full.png"
  alt="CODICE"
  width={160}
  height={40}
  className="mix-blend-screen"  // ← this is the key
/>
```

**Usage rules:**
- Desktop navbar + footer: `codice-logo-full.png` (icon + wordmark)
- Mobile navbar: `codice-logo.png` (icon only, 36px)
- og:image / meta: `codice-logo-full.png`
- Never place on white or light bg — dark-only assets

**Logo brand colors (from the mark — use as accent highlights only):**
```
Orange: #FF6B00 | Blue: #0099FF | Red: #CC2200 | Green: #7ACC00
```
Use these for: product category badges, market tile icons, decorative accents.
Primary accent is still --blue (#2563EB) everywhere else.

---

## Design Reference for All Agents

**North star:** "Palantir meets Vercel, built for DC government."
**Principle:** Show don't tell. Every section answers "What does this make possible?"
**Never:** Lorem ipsum, stock photos, inconsistent tokens, arbitrary Tailwind values.
**Always:** Dark navy bg, Inter font, blue accent (#2563EB), react-countup for numbers, Framer for motion.
**Logo:** Always `mix-blend-screen` on dark bg. Never on light bg.
