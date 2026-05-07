"use client";

import { products } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "@/components/ui/Lightbox";

export default function ProductsShowcase() {
  const [active, setActive] = useState(products[0].id);
  const [imageIndex, setImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  const product = products.find((p) => p.id === active)!;
  const images = useMemo(() => product.showcaseImages ?? [], [product]);

  // Auto-play the image carousel
  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images]);

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
            onClick={() => {
              setActive(p.id);
              setImageIndex(0);
            }}
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
                href={"/products/" + product.slug}
                className="inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 w-fit"
              >
                Explore {product.name} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: Showcase Image Panel */}
            <div 
              className="lg:w-[500px] bg-[#0A1628] border-t lg:border-t-0 lg:border-l border-[#1E293B] relative overflow-hidden group/showcase cursor-pointer"
              onClick={() => {
                setImageIndex(imageIndex);
                setLightboxOpen(true);
              }}
            >
              {images.length > 0 ? (
                <div className="relative w-full h-full min-h-[300px] lg:min-h-full">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[imageIndex]}
                        alt={`${product.name} interface`}
                        fill
                        className="object-cover opacity-80 transition-transform duration-700 group-hover/showcase:scale-105"
                        sizes="(max-width: 1024px) 100vw, 500px"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A1628] via-transparent to-[#0A1628]/40 pointer-events-none z-10" />
                  
                  {/* Progress Indicators */}
                  {images.length > 1 && (
                    <div className="absolute top-6 right-6 flex gap-2 z-20">
                      {images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-1 rounded-full transition-all duration-500 ${idx === imageIndex ? "w-6 bg-[#2563EB]" : "w-2 bg-white/20"}`}
                        />
                      ))}
                    </div>
                  )}
                  
                  {/* Expand Icon Hover Hint */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover/showcase:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-[#111827]/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-white text-sm font-bold tracking-widest uppercase shadow-2xl">
                      Click to Expand
                    </div>
                  </div>

                  {/* Brand Badge Overlay */}
                  <div className="absolute bottom-8 left-8 flex items-center gap-4 bg-[#111827]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl z-20 transition-transform duration-300 group-hover/showcase:-translate-y-2">
                    {product.logo ? (
                      <div className="relative w-24 h-8">
                        <Image
                          src={product.logo}
                          alt={product.name}
                          fill
                          className="object-contain mix-blend-screen"
                        />
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-[#F8FAFC] tracking-widest uppercase">{product.name}</span>
                    )}
                  </div>
                </div>
              ) : product.logo ? (
                <div className="flex items-center justify-center h-full p-12">
                  <div className="relative w-44 h-44 transition-transform duration-500 group-hover/showcase:scale-110">
                    <Image
                      src={product.logo}
                      alt={product.name}
                      fill
                      className="object-contain mix-blend-screen"
                      sizes="176px"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full gap-4">
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

      <Lightbox
        images={images}
        initialIndex={imageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        altText={product.name}
      />
    </section>
  );
}

