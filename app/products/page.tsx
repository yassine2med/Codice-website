"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { products } from "@/data/codice";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import ProductMockup from "@/components/ui/ProductMockup";
import TiltCard from "@/components/ui/TiltCard";
import { useState } from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// Group categories for cleaner filter tabs
const FILTER_GROUPS = [
  { id: "all",        label: "All Platforms",   count: products.length },
  { id: "gov",        label: "Gov Operations",  categories: ["Permitting & Licensing", "Program Management", "Case Management"] },
  { id: "health",     label: "Healthcare",      categories: ["Healthcare Finance", "Healthcare Administration"] },
  { id: "ai",         label: "AI & Compliance", categories: ["AI & Compliance"] },
  { id: "finance",    label: "Finance & Pay",   categories: ["Payment Processing", "Healthcare Finance"] },
  { id: "transport",  label: "Transportation",  categories: ["Logistics & Transportation"] },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProducts = activeFilter === "all"
    ? products
    : products.filter((p) => {
        const group = FILTER_GROUPS.find((g) => g.id === activeFilter);
        return group?.categories?.includes(p.category);
      });

  return (
    <main id="main-content" className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#0A0F1E]">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=60"
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.07 }}
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0F1E]/30 via-transparent to-[#0A0F1E]/70" />
        </div>
        <div className="absolute inset-0 dot-grid opacity-[0.15] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2563EB]/40 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#60A5FA] mb-6">
              Proprietary Platforms
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(36px,7vw,86px)] font-bold leading-[1.02] tracking-tighter mb-8 text-white">
              8 Products. Every Mission.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              CODICE builds and operates proprietary software that government agencies across Washington DC rely on every day — from permitting and AI compliance to healthcare finance and case management.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {FILTER_GROUPS.map((group) => {
              const count = group.id === "all"
                ? products.length
                : products.filter((p) => group.categories?.includes(p.category)).length;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveFilter(group.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl border text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeFilter === group.id
                      ? "bg-[#2563EB] border-[#2563EB] text-white shadow-[0_4px_20px_rgba(37,99,235,0.30)] scale-[1.03]"
                      : "bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#2563EB]/40 hover:text-[#0F172A]"
                  }`}
                >
                  {group.label}
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-black ${
                    activeFilter === group.id ? "bg-white/20 text-white" : "bg-[#F0F6FF] text-[#2563EB]"
                  }`}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{ perspective: "1200px" }}
            >
              {visibleProducts.map((product) => (
                <TiltCard key={product.id} intensity={6} className="flex flex-col h-full">
                  <div className="group relative bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden hover:border-[#2563EB]/40 hover:shadow-[0_8px_40px_rgba(37,99,235,0.10)] transition-all duration-300 flex flex-col h-full">
                    {/* Visual header */}
                    <div className="relative h-52 border-b border-[#E2E8F0] overflow-hidden rounded-t-3xl">
                      <ProductMockup category={product.category} name={product.name} />
                      {product.isNew && (
                        <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-20">
                          <Sparkles size={9} /> New
                        </span>
                      )}
                      {/* Live badge */}
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-[#E2E8F0] px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-black text-[#0F172A] uppercase tracking-widest">Live</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] mb-3">{product.category}</span>
                      <h2 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors duration-300">{product.name}</h2>
                      <p className="text-sm text-[#64748B] leading-relaxed mb-6 flex-1">{product.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.highlights?.slice(0, 3).map((h) => (
                          <span key={h} className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-[#F0F6FF] border border-[#2563EB]/15 text-[#1D4ED8]">{h}</span>
                        ))}
                      </div>

                      <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2563EB] hover:text-[#1D4ED8] transition-colors group/link mt-auto">
                        Explore Platform <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </motion.div>
          </AnimatePresence>

          {visibleProducts.length === 0 && (
            <div className="text-center py-20 text-[#94A3B8]">No products in this category.</div>
          )}
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-20 px-6 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-4">Why proprietary matters</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight mb-6 text-[#0F172A]">
            Software we own. Outcomes we guarantee.
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto leading-relaxed mb-12">
            Unlike integrators who assemble third-party tools, CODICE owns every line of code in our product suite — meaning faster upgrades, tighter security, and a roadmap that responds to your agency&apos;s needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "8", label: "Proprietary Products" },
              { value: "16+", label: "Years Maintained" },
              { value: "12+", label: "Agencies Served" },
              { value: "100%", label: "Client Retention" },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/30 hover:shadow-[0_4px_20px_rgba(37,99,235,0.07)] transition-all duration-300">
                <p className="font-[family-name:var(--font-dm-mono)] text-3xl font-bold text-[#2563EB] mb-2">{s.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
