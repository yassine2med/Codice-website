# CODICE Accessibility Guide (a11y)
**Standard:** WCAG 2.1 Level AA / Section 508

All agents working on this project must adhere to these rules.

## 1. Semantic HTML
- Use proper heading hierarchy (`h1` -> `h2` -> `h3`). Never skip levels for styling.
- Use landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`.
- Buttons must be `<button>` elements, not `<div>` with onClick.

## 2. Interactive Elements
- **Focus States:** Every interactive element must have a visible `:focus` or `:focus-visible` ring.
- **ARIA Labels:** Any icon-only button must have an `aria-label`.
- **Keyboard Nav:** Users must be able to navigate the entire site using only the `Tab` and `Enter` keys.

## 3. Visuals & Media
- **Alt Text:** Every image must have a descriptive `alt` attribute (or `alt=""` if decorative).
- **Contrast:** Maintain a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
- **No Color-Only Info:** Never convey information using color alone.

## 4. Components
- **Modals/Drawers:** Must trap focus and be closeable with the `Esc` key.
- **Tabs:** Must follow the WAI-ARIA Tabs pattern.
- **Form Inputs:** Must always have a linked `<label>`.

---
**Agent Instruction:** At the start of every session, audit your assigned components against this guide.
