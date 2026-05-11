import type { Metadata } from "next";
import { Inter, DM_Mono, Outfit } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ChatWidget from "@/components/ui/ChatWidget";
import CommandPalette from "@/components/ui/CommandPalette";
import AnnouncementBanner from "@/components/ui/AnnouncementBanner";
import Navbar from "@/components/nav/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
    images: [{ url: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1200&h=630&fit=crop&q=80", width: 1200, height: 630, alt: "CODICE Technology — Washington DC Government Technology" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODICE Technology — Washington DC Government Technology",
    description: "16 years. 12+ agencies. 100% client retention.",
    images: ["https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1200&h=630&fit=crop&q=80"],
  },
  icons: {
    icon: "/images/brand/codice-logo-red.png",
    apple: "/images/brand/codice-logo-red.png",
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
      className={`${inter.variable} ${dmMono.variable} ${outfit.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-[#0F172A] antialiased font-(family-name:--font-inter) selection:bg-brand-primary/15 selection:text-brand-accent">
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:bg-brand-primary focus:text-white focus:font-bold focus:px-6 focus:py-3 focus:rounded-xl focus:shadow-lg focus:outline-none">
          Skip to main content
        </a>
        <AnnouncementBanner />
        <Navbar />
        <ScrollProgress />
        <CursorGlow />
        <ScrollToTop />
        {children}
        <FloatingCTA />
        <ChatWidget />
        <CommandPalette />
      </body>
    </html>
  );
}
