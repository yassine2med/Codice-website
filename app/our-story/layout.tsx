import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Founded in 2009 in Washington DC. CODICE Technology's 16-year journey from a small government IT firm to a certified minority-owned technology company serving 12+ DC agencies.",
  openGraph: {
    title: "Our Story | CODICE Technology",
    description: "16 years of mission-driven government technology in Washington DC — timeline, team, values, certifications, and the people behind CODICE.",
  },
};

export default function OurStoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
