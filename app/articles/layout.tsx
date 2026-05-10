import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "Field notes from CODICE Technology — insights on legacy modernization, AI regulatory intelligence, Medicaid cost reporting, cloud transformation, and public-sector technology strategy.",
  openGraph: {
    title: "Articles | CODICE Technology",
    description: "Curated thinking on legacy transformation, AI compliance, health IT, and the future of public sector operations from CODICE's engineering and strategy team.",
  },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
