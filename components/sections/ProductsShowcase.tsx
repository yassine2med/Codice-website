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
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <SectionHeader
        label="Proprietary Platforms"
        title="Modernizing Government Operations"
        subtitle="8 purpose-built platforms that power DC government agencies daily with absolute reliability and high-fidelity performance."
      />

      {/* Futuristic Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-16 relative z-10">
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setActive(p.id);
              setImageIndex(0);
            }}
            className={`group relative px-6 py-3 rounded-2xl border transition-all duration-500 ${
              active === p.id
                ? "bg-brand-primary border-brand-primary text-white shadow-xl scale-105"
                : "bg-slate-100 border-black/5 text-gray-500 hover:border-brand-primary/40 hover:text-brand-navy hover:bg-white"
            }`}
          >
            <span className="text-[11px] font-bold tracking-widest uppercase relative z-10">{p.name}</span>
            {p.isNew && (
              <span className="absolute -top-2 -right-2 bg-linear-to-r from-orange-500 to-red-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full shadow-lg">
                NEW
              </span>
            )}
            {active === p.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-brand-primary rounded-2xl z-0"
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
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass-card rounded-[3rem] overflow-hidden border-black/5 shadow-2xl"
        >
          <div className="absolute inset-0 mesh-gradient opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row min-h-[600px]">
            {/* Content Stage */}
            <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center bg-white/40">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-brand-primary mb-8"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                {product.category}
              </motion.div>

              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[clamp(32px,5vw,52px)] font-bold text-brand-navy mb-6 leading-none"
              >
                {product.name}
              </motion.h3>

              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium"
              >
                {product.description}
              </motion.p>

              {product.highlights && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
                >
                  {product.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-primary/5 flex items-center justify-center">
                        <Sparkles size={10} className="text-brand-primary" />
                      </div>
                      <span className="text-sm font-bold text-gray-600">{h}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href={"/products/" + product.slug}
                  className="group relative inline-flex items-center gap-3 bg-brand-navy text-white font-bold px-10 py-5 rounded-2xl text-base transition-all duration-300 hover:bg-brand-primary hover:shadow-xl hover:-translate-y-1"
                >
                  Deep Dive Platform <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Visual Stage */}
            <div 
              className="lg:w-[600px] bg-white border-t lg:border-t-0 lg:border-l border-black/5 relative overflow-hidden group/stage cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            >
              {images.length > 0 ? (
                <div className="relative w-full h-full min-h-[400px]">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[imageIndex]}
                        alt={product.name}
                        fill
                        className="object-cover opacity-80 group-hover/stage:opacity-100 transition-all duration-700"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Glass Interface Overlays */}
                  <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/20 z-10" />
                  
                  <div className="absolute top-10 right-10 flex gap-2 z-20">
                    {images.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-500 ${idx === imageIndex ? "w-8 bg-brand-primary" : "w-2 bg-black/20"}`}
                      />
                    ))}
                  </div>

                  <div className="absolute bottom-12 left-12 z-20">
                    <div className="glass-card p-6 rounded-[2rem] border-black/5 shadow-xl group-hover/stage:-translate-y-2 transition-transform duration-500 bg-white/90">
                      {product.logo && (
                        <div className="relative w-32 h-10 mb-4">
                          <Image src={product.logo} alt={product.name} fill className="object-contain brightness-0" />
                        </div>
                      )}
                      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-primary">Mission Critical Status: Operational</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full bg-white">
                   <div className="relative w-64 h-64 animate-float">
                      <Image src={product.logo!} alt={product.name} fill className="object-contain brightness-0 opacity-10" />
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

