import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "CODICE delivers 8 government-grade technology services: Custom Software Development, Cloud Migration, Cybersecurity, Data Analytics, Permit Modernization, Health IT, Payment Systems, and IT Consulting.",
  keywords: ["government IT services", "cloud migration", "custom software DC", "cybersecurity government", "health IT", "permit modernization", "Washington DC IT"],
  openGraph: {
    title: "CODICE Technology Services — Government IT Expertise",
    description: "16 years of specialized government IT services. Custom software, cloud migration, AI, cybersecurity, health IT, and more — built for DC government scale.",
    images: [{ url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&q=80", width: 1200, height: 630, alt: "CODICE Technology Services" }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
