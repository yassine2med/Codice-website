# HANDOFF — CODICE Technology Website

## Goal
Build and deploy the CODICE Technology LLC marketing website (Next.js 16 + Tailwind v4 + Framer Motion). Design north star: "Palantir meets Vercel, built for DC government."

## Completed This Session
- Integrated real LinkedIn data: minority-owned cert, GSA schedule, 109 employees, Linwood Jolly
- Fixed Hero: cycling word mobile overflow, credentials bar replacing duplicate stats
- Fixed Footer: inline SVG social icons (linter-resistant), award pill badge
- Fixed Our Story: animated stat counters, split cert categories, derived offices from `company.offices`
- Fixed contact form: real mailto submission with encoded subject/body
- Fixed CaseStudies: 2×2 grid layout
- Fixed NewsEvents: external link handling for real codicetech.com URLs
- Fixed Products detail page: CheckCircle2 feature bullets
- Fixed MarketsGrid: iconMap matching new market IDs
- Fixed client logos: mapped to actually-existing numbered files in /public/images/clients/
- Added StatsSection eyebrow label, "View All" pill chip links on homepage
- **Deployed to Vercel**: https://codice-website.vercel.app
- GitHub repo auto-deploy connected: https://github.com/yassine2med/Codice-website

## Watch Out For
- **Codex/linter agent actively rewrites files** — use inline SVGs (not lucide imports in Footer) and derive data from `company.*` fields, never hardcode
- `data/codice.ts` is the single source of truth
- Navigation SOLUTIONS group uses `sections[]` not `items[]`

## Next Steps
1. Add real product showcase images to `/public/images/products/showcase/`
2. Set up custom domain on Vercel dashboard
3. Design polish pass (animations, mobile spacing)

## Resume
```bash
claude --continue
```
