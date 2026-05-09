import type { Metadata } from "next";
import CapabilityClient from "./CapabilityClient";

export const metadata: Metadata = {
  title: "Capability Statement",
  description: "CODICE Technology capability statement — certifications, NAICS codes, GSA schedule, past performance across 12+ DC agencies, and core government IT services.",
  openGraph: {
    title: "Capability Statement | CODICE Technology",
    description: "Government-ready. Mission-proven. Everything procurement officers need to evaluate CODICE Technology as a trusted partner.",
  },
};

export default function CapabilityPage() {
  return <CapabilityClient />;
}
