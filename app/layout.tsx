import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://codicetech.com"),
  title: "CODICE Technology — Transforming Government Through Technology",
  description: "CODICE Technology LLC. 16 years. 12+ agencies. 100% client retention. Washington DC's premier government technology firm.",
  openGraph: {
    title: "CODICE Technology — Transforming Government Through Technology",
    description: "Washington DC's premier government technology firm. Custom software, permit modernization, data analytics, cloud migration, and 8 proprietary products.",
    url: "https://codicetech.com",
    siteName: "CODICE Technology",
    images: [{ url: "/images/brand/codice-logo-full.png" }],
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
