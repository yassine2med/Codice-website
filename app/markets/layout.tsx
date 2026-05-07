import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markets",
  description: "CODICE Technology serves 9 government sectors — health, transportation, education, public safety, legal, unemployment, facilities, financial services, and general government.",
  openGraph: {
    title: "Markets | CODICE Technology",
    description: "9 government sectors served across Washington DC — from Medicaid finance and permitting to public safety, education, and workforce systems.",
  },
};

export default function MarketsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
