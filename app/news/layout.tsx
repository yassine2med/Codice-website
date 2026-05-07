import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Latest updates from CODICE Technology — product launches, agency modernization announcements, awards, and public-sector technology news.",
  openGraph: {
    title: "News & Events | CODICE Technology",
    description: "Product launches, agency updates, and milestones from Washington DC's premier government technology firm.",
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
