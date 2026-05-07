import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom software engineering, cloud migration, data analytics, cybersecurity, health IT, and AI solutions delivered by CODICE Technology for Washington DC government agencies.",
  openGraph: {
    title: "Services | CODICE Technology",
    description: "8 government-grade service lines — from legacy modernization to AI compliance tools. Built for DC agencies with 100% client retention.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
