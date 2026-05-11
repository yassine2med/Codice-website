"use client";

import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import StatsSection from "@/components/sections/StatsSection";
import ServicesBento from "@/components/sections/ServicesBento";
import ProductsShowcase from "@/components/sections/ProductsShowcase";
import MarketsGrid from "@/components/sections/MarketsGrid";
import Testimonials from "@/components/sections/Testimonials";
import NewsEvents from "@/components/sections/NewsEvents";
import CTABanner from "@/components/sections/CTABanner";
import BeamSection from "@/components/sections/BeamSection";
import TrustStrip from "@/components/sections/TrustStrip";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-white overflow-x-hidden">
      {/* ─── 1. WHO ARE YOU? ─────────────────────────────────────────────── */}
      <Hero />

      {/* ─── 2. WHY TRUST YOU? ──────────────────────────────────────────── */}
      <TrustMarquee />
      <StatsSection />
      <TrustStrip />

      {/* ─── 3. HOW DO YOU WORK? ─────────────────────────────────────────── */}
      <BeamSection />

      {/* ─── 3. WHAT CAN YOU DO FOR ME? ─────────────────────────────────── */}

      {/* Services */}
      <section className="relative bg-white">
        <ServicesBento />
        <div className="flex justify-center pb-24 -mt-4 relative z-10">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest uppercase text-[#64748B] hover:text-[#0F172A] border border-[#E2E8F0] hover:border-brand-primary/40 bg-white hover:shadow-[0_4px_16px_rgba(37,99,235,0.08)] px-6 py-3 rounded-full transition-all duration-300"
          >
            View All Services
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300 text-brand-primary" />
          </Link>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <ProductsShowcase />
        <div className="flex justify-center pb-24 -mt-4 relative z-10">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest uppercase text-[#64748B] hover:text-[#0F172A] border border-[#E2E8F0] hover:border-brand-primary/40 bg-white hover:shadow-[0_4px_16px_rgba(37,99,235,0.08)] px-6 py-3 rounded-full transition-all duration-300"
          >
            Explore All Products
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300 text-brand-primary" />
          </Link>
        </div>
      </section>

      {/* Markets */}
      <section className="relative bg-white border-t border-[#E2E8F0]">
        <MarketsGrid />
        <div className="flex justify-center pb-24 -mt-4 relative z-10">
          <Link
            href="/markets"
            className="group inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest uppercase text-[#64748B] hover:text-[#0F172A] border border-[#E2E8F0] hover:border-brand-primary/40 bg-white hover:shadow-[0_4px_16px_rgba(37,99,235,0.08)] px-6 py-3 rounded-full transition-all duration-300"
          >
            View All Markets
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300 text-brand-primary" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Case Studies + News */}
      <section className="bg-white border-t border-[#E2E8F0]">
        <NewsEvents />
        <div className="flex justify-center pb-20 -mt-4 relative z-10">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest uppercase text-[#64748B] hover:text-[#0F172A] border border-[#E2E8F0] hover:border-brand-primary/40 bg-white hover:shadow-[0_4px_16px_rgba(37,99,235,0.08)] px-6 py-3 rounded-full transition-all duration-300"
          >
            All News & Events
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300 text-brand-primary" />
          </Link>
        </div>
      </section>

      {/* ─── FINAL CALL TO ACTION ─────────────────────────────────────────── */}
      <CTABanner />

      <Footer />
    </main>
  );
}
