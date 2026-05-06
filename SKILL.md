---
name: codice-website-rebuild
description: >
  Full-stack research + design + build orchestrator for rebuilding Codice Technology's website (codicetech.com).
  Use this skill whenever the user mentions Codice, codicetech.com, the employer site, Antigravity brief,
  website rebuild, "normalize the site", "fill the sections", "research Codice", or "component spec".
  This skill powers a 3-phase agentic workflow: Research → Normalize → Fill.
  Compatible with Claude Code (architect), Codex (terminal/verify), and Antigravity (visual polish).
  Always trigger this skill for any Codice website task — even partial ones.
---

# Codice Website Rebuild — Skill Orchestrator

## Quick Reference
- Company data: see `references/company-data.md`
- Competitor analysis: see `references/competitor-audit.md`
- Design vision: see `references/design-vision.md`
- Component map: see `references/component-map.md`
- Multi-agent protocol: see `references/multi-agent-workflow.md`
- Kickoff prompt for Claude Code: see `assets/MASTER_PROMPT.md`
- Project state template: see `assets/CURRENT_STATE.md`
- Task breakdown: see `assets/TASKS.md`

---

## The 3 Phases

### Phase 1: RESEARCH
**Owner: Claude Code**
1. All company data is pre-loaded in `references/company-data.md` — read it first
2. Competitor analysis pre-loaded in `references/competitor-audit.md`
3. If user wants a refresh: re-scrape the 6 URLs listed in company-data.md
4. Search 21st.dev for components listed in `references/component-map.md`
5. Output any new findings back to the reference files

### Phase 2: NORMALIZE
**Owner: Antigravity**
1. Read `references/design-vision.md` for north star aesthetic
2. Read design tokens in this file (below)
3. Audit every section against tokens — flag font, spacing, color, radius, shadow inconsistencies
4. Output a normalize brief: list of fixes per section, scoped and executable
5. Apply fixes — one section at a time, commit each with `[antigravity] ui: normalize {section}`

### Phase 3: FILL
**Owner: Claude Code + Antigravity**
1. Review every section's content slots
2. Pull copy from `references/company-data.md`
3. Rules: no lorem ipsum, max 2 lines per card, impact > volume, active voice
4. Output polished content to `assets/CONTENT.md`
5. Antigravity applies copy to components, verifies visual fit

---

## Design System (enforce everywhere, no exceptions)

### Logo Files (in /public/images/brand/)
- `codice-logo.png` — icon/mark only (3D swirl, use in mobile nav, favicon)
- `codice-logo-full.png` — icon + "CODICE" wordmark (use in desktop nav, footer, og:image)
- Both have black backgrounds — must be set to `mix-blend-mode: screen` OR background removed
- Preferred method: use `mix-blend-mode: screen` on dark navy bg — black disappears, logo pops
- DO NOT put logos on white or light backgrounds — they are dark-bg only assets

### Brand Colors (extracted from logo)
The logo contains 4 accent colors. Use sparingly as highlight accents only — never as backgrounds.
```
Logo orange:  #FF6B00   (top arc of mark)
Logo blue:    #0099FF   (left arc of mark)  
Logo red:     #CC2200   (center/right of mark)
Logo green:   #7ACC00   (bottom arc of mark)
```
These are accent-only. The site's primary accent remains --blue (#2563EB).
Use logo colors for: product category badges, market tile icons, decorative highlights.

### Color Tokens
```css
--navy:        #0A1628   /* primary bg */
--blue:        #2563EB   /* primary accent */
--blue-light:  #3B82F6   /* hover states */
--blue-glow:   rgba(37,99,235,0.15)  /* card glow on hover */
--white:       #F8FAFC   /* primary text on dark */
--gray:        #64748B   /* secondary text */
--surface:     #111827   /* card + section bg */
--border:      #1E293B   /* subtle dividers */
--gradient:    linear-gradient(135deg, #0A1628 0%, #0F2040 100%)

/* Brand accent colors (from logo — use sparingly) */
--brand-orange: #FF6B00
--brand-blue:   #0099FF
--brand-red:    #CC2200
--brand-green:  #7ACC00
```

### Typography
```
Primary: Inter (weights: 400, 500, 600, 700)
Mono/Data: DM Mono (for stats, code labels, badges)

H1: clamp(48px, 6vw, 80px) / 700 / -0.03em tracking / line-height 1.1
H2: clamp(36px, 4vw, 56px) / 600 / -0.02em tracking / line-height 1.2
H3: clamp(24px, 2.5vw, 36px) / 600 / line-height 1.3
Body: 16px / 400 / 1.65 line-height
Small: 14px / 500
Label: 12px / 600 / 0.08em tracking / UPPERCASE (for badges, categories)
Stat: clamp(48px, 6vw, 96px) / 700 / DM Mono
```

### Breakpoints (Tailwind config)
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1440px
```

### Spacing Scale
Only Tailwind scale: 1(4px), 2(8px), 3(12px), 4(16px), 6(24px), 8(32px), 12(48px), 16(64px), 24(96px)
No arbitrary values. Ever.

### Animation Defaults (Framer Motion)
```js
// Fade up on scroll (use for all section entries)
fadeUp: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }

// Stagger children
stagger: { animate: { transition: { staggerChildren: 0.08 } } }

// Hover glow (card)
cardHover: { whileHover: { y: -4, boxShadow: '0 0 32px rgba(37,99,235,0.2)' }, transition: { duration: 0.2 } }

// Counter (use react-countup or custom)
counter: { duration: 2.5, easing: 'easeOut', enableScrollSpy: true, scrollSpyDelay: 200 }
```

---

## 13-Section Page Map

| # | Section | Visual Priority | Component Source |
|---|---|---|---|
| 1 | Navigation | High | Custom + shadcn |
| 2 | Hero | Critical | 21st.dev + Aceternity |
| 3 | Trust Marquee | High | 21st.dev |
| 4 | Services Grid | High | 21st.dev |
| 5 | Products Showcase | High | Custom tabs |
| 6 | Markets Grid | Medium | Custom |
| 7 | Stats Bar | Critical | Custom + react-countup |
| 8 | Case Studies | High | 21st.dev |
| 9 | Testimonials | Medium | 21st.dev |
| 10 | Tech Stack | Medium | Custom marquee |
| 11 | CTA Banner | High | Custom |
| 12 | News | Medium | shadcn cards |
| 13 | Footer | Medium | Custom |

Full component specs in `references/component-map.md`.

---

## Multi-Agent Handoff Rules (short version)
Full protocol in `references/multi-agent-workflow.md`.

- Claude Code: architect, scaffolds, logic. No git worktrees unless asked.
- Codex: git, builds, verifications, state docs. Runs `npm run build` after every handoff.
- Antigravity: visual polish, animations, responsive QA, browser audit.
- One agent edits at a time. File conflict = pause, ask Yaz.
- Commit format: `[agent] scope: description`
