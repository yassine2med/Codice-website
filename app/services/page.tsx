"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CaseStudies from "@/components/sections/CaseStudies";
import CTABanner from "@/components/sections/CTABanner";
import { PageHero } from "@/components/ui/PageHero";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navbar />
      <PageHero 
        label="Our Expertise"
        title="Transforming the Public Sector"
        subtitle="End-to-end technology solutions purpose-built for the unique challenges of government agencies."
      />
      <ServicesGrid />
      <div className="bg-[#111827]">
        <CaseStudies />
      </div>
      <CTABanner />
      <Footer />
    </main>
  );
}
