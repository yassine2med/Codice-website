"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import NewsEvents from "@/components/sections/NewsEvents";
import CTABanner from "@/components/sections/CTABanner";
import { PageHero } from "@/components/ui/PageHero";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navbar />
      <PageHero 
        label="Latest News"
        title="Codice Insights"
        subtitle="The latest updates, event announcements, and technology insights from the front lines of government modernization."
        gradient="from-blue-500/20 to-transparent"
      />
      <NewsEvents />
      <CTABanner />
      <Footer />
    </main>
  );
}
