"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CaseStudies from "@/components/sections/CaseStudies";
import StatsSection from "@/components/sections/StatsSection";
import CTABanner from "@/components/sections/CTABanner";
import { PageHero } from "@/components/ui/PageHero";

export default function CaseStudiesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden relative">
      {/* Floating diamonds */}
      <style>{`@keyframes floatDiamond { 0% { transform: translateY(0) rotate(45deg); opacity: 0.10; } 100% { transform: translateY(-16px) rotate(45deg); opacity: 0.22; } }`}</style>
      {[
        { top: "10%", left: "2%",  size: 8,  delay: "0s",   dur: "6s"   },
        { top: "28%", right: "3%", size: 6,  delay: "1.4s", dur: "7.5s" },
        { top: "50%", left: "3%",  size: 10, delay: "2.8s", dur: "5.5s" },
        { top: "68%", right: "4%", size: 6,  delay: "0.7s", dur: "8s"   },
        { top: "84%", left: "6%",  size: 8,  delay: "3.5s", dur: "6.5s" },
        { top: "92%", right: "6%", size: 5,  delay: "1.9s", dur: "7s"   },
      ].map((d, i) => (
        <div key={i} className="absolute pointer-events-none bg-brand-primary"
          style={{ top: d.top, left: (d as {left?:string}).left, right: (d as {right?:string}).right, width: d.size, height: d.size, animation: `floatDiamond ${d.dur} ease-in-out ${d.delay} infinite alternate`, zIndex: 0, boxShadow: `0 0 ${d.size}px rgba(37,99,235,0.3)` }} />
      ))}
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
