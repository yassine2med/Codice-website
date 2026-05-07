import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/ui/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codice-website.vercel.app"),
  title: {
    default: "CODICE Technology — Washington DC Government Technology",
    template: "%s | CODICE Technology",
  },
  description: "CODICE Technology LLC — 16 years, 12+ agencies, 100% client retention. Washington DC's premier government technology firm delivering custom software, AI products, cloud migration, and permitting systems.",
  keywords: ["government technology", "Washington DC", "gov-tech", "permitting software", "DC agencies", "CODICE Technology", "FedRAMP", "cloud migration"],
  authors: [{ name: "CODICE Technology LLC" }],
  openGraph: {
    title: "CODICE Technology — Washington DC Government Technology",
    description: "16 years. 12+ agencies. 100% client retention. Custom software, AI compliance tools, cloud migration, and 8 proprietary platforms built for DC government.",
    url: "https://codice-website.vercel.app",
    siteName: "CODICE Technology",
    images: [{ url: "/images/brand/codice-logo-full.png", width: 1200, height: 630, alt: "CODICE Technology" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODICE Technology — Washington DC Government Technology",
    description: "16 years. 12+ agencies. 100% client retention.",
    images: ["/images/brand/codice-logo-full.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0A1628] antialiased font-[family-name:var(--font-inter)]">
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
