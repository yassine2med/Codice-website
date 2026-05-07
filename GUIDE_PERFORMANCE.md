# CODICE Performance Guide
**Goal:** 95+ Lighthouse Performance Score / < 1s LCP

All agents working on this project must adhere to these optimization protocols.

## 1. Next.js Architecture
- **Server First:** Default to Server Components. Only use `"use client"` when interactivity (Framer Motion, hooks) is required.
- **Client Component Leafing:** Keep Client Components as small as possible and push them down the tree.

## 2. Image Optimization (`next/image`)
- **Always use `Image`:** Never use the raw `<img>` tag.
- **Priority:** Set `priority={true}` for the LCP image (usually the Hero logo or main visual).
- **Sizing:** Always provide `width`, `height`, or use `fill` with `sizes` to prevent Layout Shift (CLS).

## 3. Bundle & Runtime
- **Dynamic Imports:** Use `dynamic()` with `ssr: false` for heavy client-side libraries that aren't needed on first paint.
- **Framer Motion:** Prefer `m` from `framer-motion` + `LazyMotion` to reduce bundle size if the site grows complex.
- **Icon Libraries:** Ensure `lucide-react` is being tree-shaken correctly (avoid `import *`).

## 4. Fonts & Styles
- **Next/Font:** Use standard `next/font` patterns to avoid Flash of Unstyled Text (FOUT).
- **Tailwind:** Avoid arbitrary values in templates; prefer extending `tailwind.config.ts` for project-wide tokens.

---
**Agent Instruction:** Before every commit, verify that your changes do not regess Core Web Vitals or significantly increase bundle size.
