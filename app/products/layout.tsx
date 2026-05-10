import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "8 proprietary government technology platforms — PermiOne, CelerKost, FortiMind, Travo AI, and more. Purpose-built software that DC agencies rely on every day.",
  keywords: ["government software", "PermiOne", "FortiMind", "CelerKost", "Travo AI", "DC government platforms", "permitting software", "healthcare finance"],
  openGraph: {
    title: "CODICE Proprietary Products — 8 Government Platforms",
    description: "Purpose-built platforms powering Washington DC government agencies every day. Permitting, AI compliance, healthcare finance, case management, and more.",
    images: [{ url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&q=80", width: 1200, height: 630, alt: "CODICE Proprietary Government Platforms" }],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
