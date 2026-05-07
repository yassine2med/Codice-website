"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import MarketsGrid from "@/components/sections/MarketsGrid";
import CaseStudies from "@/components/sections/CaseStudies";
import CTABanner from "@/components/sections/CTABanner";
import { PageHero } from "@/components/ui/PageHero";

export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navbar />
      <PageHero 
        label="Sectors We Serve"
        title="Impact Across Government"
        subtitle="From local justice departments to federal health agencies, our solutions scale to meet the mission."
        gradient="from-emerald-500/20 to-transparent"
      />
      <MarketsGrid />
      <div className="bg-[#111827]">
        <CaseStudies />
      </div>
      <CTABanner />
      <Footer />
    </main>
  );
}
