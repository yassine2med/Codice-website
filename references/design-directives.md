# Design Directives & Product Showcase Vision

This document captures specific visual and aesthetic preferences from the user regarding the Codice Technology digital platform.

## 1. Product Showcase Imagery
- **Style**: Must be hyper-realistic lifestyle shots.
- **Mockup Types**: Real devices (phones, tablets, desktop PCs) sitting in realistic environments (modern offices, medical settings, government bureaus).
- **Core Requirement**: The product/software **LOGO** must be rendered *inside* the screen of the device (as part of the UI), not just as an overlay.
- **Motion**: The showcase should use dynamic carousels with smooth transitions (crossfades/slides) to show different angles of the same product.

## 2. Branding & Assets
- **Logo Integrity**: Always use the high-fidelity PNG logos provided in the data files.
- **Overlay Strategy**: If AI generation fails to render accurate text/logos inside a mockup, use sophisticated CSS overlays (backdrop blur, glassmorphism badges) to place the logo over the screen corner in a way that feels integrated with the UI.

## 3. Architecture
- **Data-Driven**: All product images must be managed via the `showcaseImages` array in `data/codice.ts`.
- **Component**: The `ProductsShowcase.tsx` component is the primary container for these assets and supports multi-image auto-sliding.
