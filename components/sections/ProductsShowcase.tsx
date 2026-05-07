"use client";

import { products } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsShowcase() {
  const [active, setActive] = useState(products[0].id);
  const product = products.find((p) => p.id === active)!;

  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Proprietary Platforms"
        title="Built for the Public Sector"
        subtitle="8 purpose-built platforms that government agencies rely on daily — not off-the-shelf software."
      />

      {/* Tab row */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`relative text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-300 ${
              active === p.id
                ? "bg-[#2563EB] border-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                : "border-[#1E293B] text-[#64748B] hover:border-[#2563EB]/40 hover:text-[#94A3B8]"
            }`}
          >
            {p.name}
            {p.isNew && (
              <span className="absolute -top-1.5 -right-1 bg-[#FF6B00] text-white text-[8px] font-black px-1.5 py-0.5 rounded-full tracking-wider">
                NEW
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active product panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative bg-[#0D1F3C] border border-[#1E293B] rounded-3xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/6 blur-[120px] rounded-full -mr-64 -mt-32 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row">
            {/* Left: content */}
            <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-1.5 rounded-full w-fit mb-6">
                {product.isNew && <Sparkles size={10} />}
                {product.category}
              </span>

              <h3 className="text-[clamp(28px,4vw,44px)] font-bold text-[#F8FAFC] mb-5 leading-tight tracking-tight">
                {product.name}
              </h3>

              <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {product.description}
              </p>

              {product.highlights && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-[#94A3B8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href={product.slug}
                className="inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 w-fit"
              >
                Explore {product.name} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: logo panel */}
            <div className="lg:w-[360px] bg-[#0A1628] border-t lg:border-t-0 lg:border-l border-[#1E293B] flex items-center justify-center p-12 min-h-[280px]">
              {product.logo ? (
                <div className="relative w-44 h-44">
                  <Image
                    src={product.logo}
                    alt={product.name}
                    fill
                    className="object-contain mix-blend-screen"
                    sizes="176px"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-[#111827] border border-[#1E293B] flex items-center justify-center">
                    <Sparkles size={36} className="text-[#2563EB]" />
                  </div>
                  <span className="text-sm font-bold text-[#64748B] tracking-widest uppercase">{product.name}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
