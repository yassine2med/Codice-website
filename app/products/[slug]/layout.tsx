import type { Metadata } from "next";
import { products } from "@/data/codice";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: `${product.description} — a proprietary platform by CODICE Technology.`,
    openGraph: {
      title: `${product.name} | CODICE Technology`,
      description: product.description,
    },
  };
}

export default function ProductSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
