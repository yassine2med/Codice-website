"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CaseStudies from "@/components/sections/CaseStudies";
import StatsSection from "@/components/sections/StatsSection";
import CTABanner from "@/components/sections/CTABanner";
import { PageHero } from "@/components/ui/PageHero";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />
      <PageHero 
        label="Success Stories"
        title="Mission-Critical Outcomes"
        subtitle="Real results for real agencies. See how we deliver on the most demanding government requirements."
        gradient="from-amber-500/20 to-transparent"
      />
      <CaseStudies />
      <StatsSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
