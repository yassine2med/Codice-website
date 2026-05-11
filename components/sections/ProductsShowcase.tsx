"use client";

import { products } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "@/components/ui/Lightbox";
import ProductMockup from "@/components/ui/ProductMockup";

export default function ProductsShowcase() {
  const [active, setActive] = useState(products[0].id);
  const [imageIndex, setImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const product = products.find((p) => p.id === active)!;
  const images = useMemo(() => product.showcaseImages ?? [], [product]);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section id="products" className="py-16 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Floating red stars */}
      <style>{`
        @keyframes floatStar { 0% { transform: translateY(0px) scale(1); opacity: 0.18; } 100% { transform: translateY(-18px) scale(1.15); opacity: 0.38; } }
      `}</style>
      {[
        { top: "8%",  left: "2%",   size: 5, delay: "0s",    dur: "6s"   },
        { top: "35%", left: "1%",   size: 3, delay: "1.2s",  dur: "8s"   },
        { top: "60%", left: "3%",   size: 4, delay: "2.8s",  dur: "7s"   },
        { top: "82%", left: "7%",   size: 3, delay: "0.5s",  dur: "9s"   },
        { top: "15%", left: "12%",  size: 2, delay: "3.5s",  dur: "5.5s" },
        { top: "70%", left: "10%",  size: 3, delay: "1.8s",  dur: "7.5s" },
        { top: "45%", left: "5%",   size: 2, delay: "4s",    dur: "6.5s" },
        { top: "10%", right: "3%",  size: 4, delay: "0.8s",  dur: "9s"   },
        { top: "30%", right: "1%",  size: 3, delay: "2s",    dur: "6s"   },
        { top: "55%", right: "5%",  size: 5, delay: "3.2s",  dur: "8s"   },
        { top: "75%", right: "2%",  size: 2, delay: "1s",    dur: "7s"   },
        { top: "88%", right: "9%",  size: 3, delay: "2.6s",  dur: "5.8s" },
        { top: "22%", right: "11%", size: 2, delay: "4.2s",  dur: "9.5s" },
        // corners
        { top: "2%",  left: "1%",   size: 3, delay: "0.3s",  dur: "7s"   },
        { top: "2%",  right: "1%",  size: 3, delay: "1.4s",  dur: "6s"   },
        { top: "95%", left: "1%",   size: 3, delay: "2.1s",  dur: "8s"   },
        { top: "95%", right: "1%",  size: 3, delay: "3.3s",  dur: "7.5s" },
        // top middle
        { top: "2%",  left: "46%",  size: 4, delay: "0.7s",  dur: "6.5s" },
        { top: "4%",  left: "40%",  size: 2, delay: "2.5s",  dur: "9s"   },
        { top: "4%",  left: "53%",  size: 2, delay: "1.6s",  dur: "7.5s" },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: s.top,
            left: (s as {left?: string}).left,
            right: (s as {right?: string}).right,
            width: s.size,
            height: s.size,
            background: "#DC2626",
            borderRadius: "50%",
            animation: `floatStar ${s.dur} ease-in-out ${s.delay} infinite alternate`,
            boxShadow: `0 0 ${s.size * 3}px rgba(220,38,38,0.55)`,
          }}
        />
      ))}
      <SectionHeader
        label="Proprietary Platforms"
        title="Modernizing Government Operations"
        subtitle="8 purpose-built platforms that power DC government agencies daily with absolute reliability and high-fidelity performance."
      />

      {/* Product Tabs */}
      <div role="tablist" className="flex flex-wrap gap-2.5 justify-center mb-14 relative z-10">
        {products.map((p) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={active === p.id}
            aria-controls={`panel-${p.id}`}
            id={`tab-${p.id}`}
            onClick={() => { setActive(p.id); setImageIndex(0); }}
            className={`group relative px-5 py-2.5 rounded-xl border transition-all duration-400 ${
              active === p.id
                ? "bg-brand-primary border-brand-primary text-white shadow-[0_4px_20px_rgba(37,99,235,0.30)] scale-[1.02]"
                : "bg-white border-[#E2E8F0] text-[#64748B] hover:border-brand-primary/40 hover:text-[#0F172A] hover:shadow-[0_2px_8px_rgba(37,99,235,0.08)]"
            }`}
          >
            <span className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase relative z-10">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${active === p.id ? "bg-white animate-pulse" : "bg-[#22C55E] animate-pulse"}`} />
              {p.name}
            </span>
            {p.isNew && (
              <span className="absolute -top-2 -right-2 bg-linear-to-r from-orange-500 to-red-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full shadow-md">
                NEW
              </span>
            )}
            {active === p.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-brand-primary rounded-xl z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Stage Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          initial={{ opacity: 0, scale: 0.99, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.99, y: -16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-[0_4px_40px_rgba(15,23,42,0.08)]"
        >
          <div className="relative z-10 flex flex-col lg:flex-row min-h-[560px]">
            {/* Content Stage */}
            <div className="flex-1 p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-brand-primary mb-7"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                {product.category}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.22 }}
                className="text-[clamp(28px,4.5vw,48px)] font-bold text-[#0F172A] mb-5 leading-none"
              >
                {product.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#64748B] text-base md:text-lg leading-relaxed mb-10 max-w-xl"
              >
                {product.description}
              </motion.p>

              {product.highlights && (
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.38 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
                >
                  {product.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <CheckCircle2 size={15} className="text-brand-primary shrink-0" />
                      <span className="text-sm font-medium text-[#334155]">{h}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46 }}>
                <Link
                  href={"/products/" + product.slug}
                  className="group relative inline-flex items-center gap-3 bg-brand-primary text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.38)] hover:-translate-y-0.5"
                >
                  Explore Platform <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Visual Stage */}
            <div
              className={`lg:w-[520px] bg-[#0A1628] border-t lg:border-t-0 lg:border-l border-[#1E293B] relative overflow-hidden group/stage ${images.length > 0 ? "cursor-pointer" : ""}`}
              onClick={() => images.length > 0 && setLightboxOpen(true)}
            >
              {images.length > 0 ? (
                <div className="relative w-full h-full min-h-[380px]">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[imageIndex]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover/stage:scale-[1.03] transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 520px"
                        onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Carousel dots */}
                  <div className="absolute top-6 right-6 flex gap-1.5 z-20">
                    {images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-400 ${idx === imageIndex ? "w-6 bg-brand-primary" : "w-1.5 bg-[#CBD5E1]"}`}
                      />
                    ))}
                  </div>

                  {/* Product logo overlay */}
                  <div className="absolute bottom-8 left-8 z-20">
                    <div className="bg-white/90 backdrop-blur-sm border border-[#E2E8F0] p-3 rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.12)] group-hover/stage:-translate-y-1 transition-transform duration-500">
                      {product.logo && (
                        <div className="relative w-20 h-5 mb-2">
                          <Image src={product.logo} alt={product.name} fill className="object-contain" />
                        </div>
                      )}
                      <p className="text-[8px] font-bold tracking-[0.25em] uppercase text-brand-primary">Status: Operational</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full min-h-[380px] overflow-hidden">
                  <ProductMockup category={product.category} name={product.name} />
                  {/* Status badge */}
                  <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                      <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/70">Status: Operational</p>
                    </div>
                  </div>
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
