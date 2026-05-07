"use client";

import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import StatsSection from "@/components/sections/StatsSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProductsShowcase from "@/components/sections/ProductsShowcase";
import MarketsGrid from "@/components/sections/MarketsGrid";
import Testimonials from "@/components/sections/Testimonials";
import NewsEvents from "@/components/sections/NewsEvents";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1628] overflow-x-hidden">
      <Navbar />

      {/* ─── 1. WHO ARE YOU? ────────────────────────────────────────────── */}
      <Hero />

      {/* ─── 2. WHY TRUST YOU? ──────────────────────────────────────────── */}

      {/* Social proof: logos of agencies they've worked with */}
      <TrustMarquee />

      {/* Hard numbers — 16yrs / 12 agencies / 8 products / 100% retention */}
      <StatsSection />

      {/* ─── 3. WHAT CAN YOU DO FOR ME? ─────────────────────────────────── */}

      {/* Services — 4-col grid preview, link to full /services page */}
      <section className="relative">
        <ServicesGrid />
        <div className="flex justify-center pb-24 -mt-8 relative z-10">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#3B82F6] transition-all"
          >
            View All Services
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Products — tabbed showcase of all 8 proprietary platforms */}
      <section className="bg-[#111827] border-y border-[#1E293B]">
        <ProductsShowcase />
        <div className="flex justify-center pb-24 -mt-8 relative z-10">
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#3B82F6] transition-all"
          >
            Explore All Products
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Markets — 10 government sectors, shows breadth of expertise */}
      <section className="relative">
        <MarketsGrid />
        <div className="flex justify-center pb-24 -mt-8 relative z-10">
          <Link
            href="/markets"
            className="group inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#3B82F6] transition-all"
          >
            View All Markets
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Testimonials — real client quotes with headshots */}
      <Testimonials />

      {/* News — shows the company is active, award visible */}
      <section className="bg-[#111827] border-y border-[#1E293B]">
        <NewsEvents />
        <div className="flex justify-center pb-24 -mt-8 relative z-10">
          <Link
            href="/news"
            className="group inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#3B82F6] transition-all"
          >
            All News & Events
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* ─── FINAL CALL TO ACTION ────────────────────────────────────────── */}
      <CTABanner />

      <Footer />
    </main>
  );
}
