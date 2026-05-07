import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Partners",
  description: "17 DC government agencies and industry partners trust CODICE Technology — from DDOT and DHCF to DOES, DCPS, MPD, and OAG. 100% retention over 16 years.",
  openGraph: {
    title: "Clients & Partners | CODICE Technology",
    description: "The full network of DC government agencies and industry partners behind CODICE's 16-year track record of durable public systems.",
  },
};

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
