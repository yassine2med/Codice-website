import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markets",
  description: "CODICE Technology serves government sectors across health, transportation, education, public safety, legal, unemployment, facilities, financial services, environment, workforce, and general government.",
  openGraph: {
    title: "Markets | CODICE Technology",
    description: "Government sectors served across Washington DC — from Medicaid finance and permitting to public safety, education, environment, and workforce systems.",
  },
};

export default function MarketsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
