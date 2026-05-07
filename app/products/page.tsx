"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { products } from "@/data/codice";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// Gradient per category - Refined for premium look
const categoryGradient: Record<string, string> = {
  "Permitting & Licensing": "from-[#1E3A8A]/30 to-[#2563EB]/10",
  "AI & Compliance": "from-[#F97316]/20 to-[#FFB800]/10",
  "Logistics & Transportation": "from-[#64748B]/30 to-[#94A3B8]/10",
  "Healthcare Finance": "from-[#1E3A8A]/20 to-[#64748B]/10",
  "Payment Processing": "from-[#F97316]/30 to-[#64748B]/10",
  "Healthcare Administration": "from-[#2563EB]/20 to-[#F97316]/10",
  "Case Management": "from-[#64748B]/40 to-[#1E3A8A]/10",
  "Program Management": "from-[#1E3A8A]/30 to-[#F97316]/10",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F8FAFC] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: `linear-gradient(to right,#1E293B 1px,transparent 1px),linear-gradient(to bottom,#1E293B 1px,transparent 1px)`,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%,#000 40%,transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%,#000 40%,transparent 100%)",
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563EB]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-6">
              Proprietary Platforms
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(44px,7vw,86px)] font-bold leading-[1.02] tracking-tight mb-8">
              8 Products. Every Mission.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              CODICE builds and operates proprietary software that government agencies across Washington DC rely on every day — from permitting and AI compliance to healthcare finance and case management.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24 px-6 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product) => {
              const grad = categoryGradient[product.category] ?? "from-blue-500/20 to-transparent";
              return (
                <motion.div
                  key={product.id}
                  variants={fadeUp}
                  className="group relative bg-[#111827] border border-[#1E293B] rounded-3xl overflow-hidden hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] transition-all duration-300 flex flex-col"
                >
                  {/* Visual header */}
                  <div className={`relative h-44 bg-linear-to-br ${grad} flex items-center justify-center border-b border-[#1E293B] overflow-hidden`}>
                    <div className="absolute inset-0 opacity-[0.07]" style={{
                      backgroundImage: `linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)`,
                      backgroundSize: "2rem 2rem",
                    }} />
                    {product.logo ? (
                      <div className="relative w-40 h-12">
                        <Image
                          src={product.logo}
                          alt={product.name}
                          fill
                          className="object-contain"
                          sizes="160px"
                        />
                      </div>
                    ) : (
                      <p className="text-2xl font-bold text-white/50">{product.name}</p>
                    )}
                    {product.isNew && (
                      <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-[#FF6B00]/20 border border-[#FF6B00]/40 text-[#FF6B00] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                        <Sparkles size={9} /> New
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] mb-3">
                      {product.category}
                    </span>
                    <h2 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                      {product.name}
                    </h2>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6 flex-1">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.highlights?.slice(0, 3).map((h) => (
                        <span key={h} className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-[#0A1628] border border-[#1E293B] text-[#475569]">
                          {h}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2563EB] hover:text-[#3B82F6] transition-colors group/link mt-auto"
                    >
                      Learn More
                      <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-20 px-6 bg-[#111827] border-y border-[#1E293B]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-4">Why proprietary matters</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight mb-6">
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
              <div key={s.label} className="p-6 rounded-2xl bg-[#0A1628] border border-[#1E293B]">
                <p className="font-mono text-3xl font-bold text-[#2563EB] mb-2">{s.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">{s.label}</p>
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
