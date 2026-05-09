"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { products } from "@/data/codice";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductMockup from "@/components/ui/ProductMockup";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const categoryGradient: Record<string, string> = {
  "Permitting & Licensing": "from-[#2563EB]/8 to-[#3B82F6]/4",
  "AI & Compliance": "from-[#F97316]/8 to-[#FFB800]/4",
  "Logistics & Transportation": "from-[#64748B]/8 to-[#94A3B8]/4",
  "Healthcare Finance": "from-[#2563EB]/6 to-[#64748B]/4",
  "Payment Processing": "from-[#F97316]/8 to-[#64748B]/4",
  "Healthcare Administration": "from-[#2563EB]/8 to-[#F97316]/4",
  "Case Management": "from-[#64748B]/10 to-[#2563EB]/4",
  "Program Management": "from-[#2563EB]/8 to-[#F97316]/4",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-6">
              Proprietary Platforms
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(44px,7vw,86px)] font-bold leading-[1.02] tracking-tighter mb-8 text-[#0F172A]">
              8 Products. Every Mission.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              CODICE builds and operates proprietary software that government agencies across Washington DC rely on every day — from permitting and AI compliance to healthcare finance and case management.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const grad = categoryGradient[product.category] ?? "from-[#2563EB]/6 to-transparent";
              return (
                <motion.div
                  key={product.id}
                  variants={fadeUp}
                  className="group relative bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden hover:border-[#2563EB]/40 hover:shadow-[0_8px_40px_rgba(37,99,235,0.10)] transition-all duration-300 flex flex-col"
                >
                  {/* Visual header */}
                  <div className={`relative h-52 border-b border-[#E2E8F0] overflow-hidden rounded-t-3xl`}>
                    <ProductMockup category={product.category} name={product.name} />
                    {product.isNew && (
                      <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-20">
                        <Sparkles size={9} /> New
                      </span>
                    )}
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
                      Learn More <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
