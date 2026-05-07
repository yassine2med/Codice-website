import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "8 proprietary government technology platforms — PermiOne, CelerKost, FortiMind, Travo AI, and more. Purpose-built software that DC agencies rely on every day.",
  openGraph: {
    title: "Products | CODICE Technology",
    description: "8 proprietary platforms for permits, Medicaid finance, AI compliance, transportation, and more — owned and built by CODICE Technology.",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
