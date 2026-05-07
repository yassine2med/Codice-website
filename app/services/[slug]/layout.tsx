import type { Metadata } from "next";
import { services } from "@/data/codice";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: `${service.description} — delivered by CODICE Technology for Washington DC government agencies.`,
    openGraph: {
      title: `${service.title} | CODICE Technology`,
      description: service.description,
    },
  };
}

export default function ServiceSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
