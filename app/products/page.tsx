"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import ProductsShowcase from "@/components/sections/ProductsShowcase";
import TechStack from "@/components/sections/TechStack";
import CTABanner from "@/components/sections/CTABanner";
import { PageHero } from "@/components/ui/PageHero";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navbar />
      <PageHero 
        label="Proprietary Platforms"
        title="Software Built to Serve"
        subtitle="We don't just build software. We build the mission-critical platforms that government agencies rely on every day."
        gradient="from-purple-500/20 to-transparent"
      />
      <ProductsShowcase />
      <div className="bg-[#111827]">
        <TechStack />
      </div>
      <CTABanner />
      <Footer />
    </main>
  );
}
