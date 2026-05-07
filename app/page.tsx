"use client";

import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProductsShowcase from "@/components/sections/ProductsShowcase";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navbar />
      <Hero />
      <TrustMarquee />
      
      {/* Services Preview */}
      <div className="relative">
        <ServicesGrid />
        <div className="flex justify-center pb-24 relative z-10 -mt-12">
          <Link 
            href="/services" 
            className="group inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#3B82F6] transition-all"
          >
            View All Services <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      <StatsSection />

      {/* Products Preview */}
      <div className="bg-[#111827]">
        <ProductsShowcase />
        <div className="flex justify-center pb-24 relative z-10 -mt-12">
          <Link 
            href="/products" 
            className="group inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#3B82F6] transition-all"
          >
            Explore All Products <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
