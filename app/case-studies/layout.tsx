import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real outcomes for real DC agencies — permitting modernization at DOB, Medicaid finance at DHCF, unemployment benefits at DOES, and public safety at MPD.",
  openGraph: {
    title: "Case Studies | CODICE Technology",
    description: "Mission-critical outcomes across DC government — 4 real case studies showing how CODICE delivers on the most demanding agency requirements.",
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
