import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join CODICE Technology — a certified minority-owned government tech firm in Washington DC. Open roles in software engineering, cloud infrastructure, health IT, and more.",
  openGraph: {
    title: "Careers | CODICE Technology",
    description: "Build technology that keeps public services moving. Current openings at CODICE Technology in Washington DC.",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
