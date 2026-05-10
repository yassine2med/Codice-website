"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CaseStudies from "@/components/sections/CaseStudies";
import StatsSection from "@/components/sections/StatsSection";
import CTABanner from "@/components/sections/CTABanner";
import { PageHero } from "@/components/ui/PageHero";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />
      <PageHero
        label="Success Stories"
        title="Mission-Critical Outcomes"
        subtitle="Real results for real agencies. See how we deliver on the most demanding government requirements."
        bgImage="https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1600&q=70"
      />
      <CaseStudies showHeader={false} />
      <StatsSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
