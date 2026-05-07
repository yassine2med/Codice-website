import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CODICE Technology. Schedule a consultation, discuss a modernization program, or reach our Washington DC and Colombo offices directly.",
  openGraph: {
    title: "Contact | CODICE Technology",
    description: "Reach CODICE Technology to discuss your agency's next mission — custom software, AI tools, cloud migration, or procurement inquiry.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
