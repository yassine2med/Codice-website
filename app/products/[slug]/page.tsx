"use client";

import { useParams, notFound } from "next/navigation";
import { products } from "@/data/codice";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProductMockup from "@/components/ui/ProductMockup";

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.slug === params.slug);
  const [imageIndex, setImageIndex] = useState(0);

  if (!product) notFound();

  useEffect(() => {
    if (!product!.showcaseImages || product!.showcaseImages.length <= 1) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % product!.showcaseImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [product]);

  return (
    <main className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />

      {/* Product Hero */}
      <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1.5 rounded-full bg-[#F0F6FF] border border-[#2563EB]/20 text-[#2563EB] text-[10px] font-bold uppercase tracking-widest">{product!.category}</span>
                {product!.isNew && (
                  <span className="px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles size={10} /> New
                  </span>
                )}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-[#0F172A]">{product!.name}</h1>
              <p className="text-[#64748B] text-xl leading-relaxed mb-10 max-w-xl">{product!.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_8px_32px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 flex items-center gap-2">
                  Request a Demo <ArrowRight size={18} />
                </Link>
                {product!.techStack && (
                  <div className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Powered by</span>
                    <span className="text-xs font-bold text-[#0F172A]">{product!.techStack[0]}</span>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-4/3 rounded-[40px] overflow-hidden border border-[#E2E8F0] shadow-[0_8px_60px_rgba(15,23,42,0.10)]"
            >
              {/* Animated product dashboard as base layer */}
              <ProductMockup category={product!.category} name={product!.name} />

              {/* Real screenshot overlay — fades in on top if image exists */}
              <AnimatePresence mode="popLayout">
                <motion.div key={imageIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
                  <Image
                    src={product!.showcaseImages[imageIndex]}
                    alt={product!.name}
                    fill
                    className="object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Overlay badges */}
              <div className="absolute top-6 left-6 z-20">
                <div className="bg-white/90 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center gap-2.5">
                  <ShieldCheck className="text-[#2563EB]" size={14} />
                  <span className="text-[10px] font-bold text-[#0F172A] tracking-wider">Gov-Grade Secure</span>
                </div>
              </div>

              {product!.logo && (
                <div className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-2xl p-4 rounded-2xl border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
                  <div className="relative w-24 h-7">
                    <Image src={product!.logo} alt={product!.name} fill className="object-contain" />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-[#0F172A]">Unmatched Capabilities</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">Discover how {product!.name} is specifically engineered to handle the complexities of public sector management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product!.features?.map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)] transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all">
                  <CheckCircle2 size={16} className="text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[#64748B] leading-relaxed group-hover:text-[#334155] transition-colors">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Ecosystem */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="p-12 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:flex-1">
            <h2 className="text-3xl font-bold mb-6 leading-tight text-[#0F172A]">Technical Ecosystem</h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              {product!.name} is built on a cloud-native, secure technology stack that ensures maximum performance, 99.9% availability, and seamless integration with your existing government infrastructure.
            </p>
            <div className="flex flex-wrap gap-3">
              {product!.techStack?.map((tech) => (
                <div key={tech} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/35 transition-colors">
                  <CheckCircle2 className="text-[#2563EB]" size={14} />
                  <span className="text-sm font-bold text-[#334155]">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:flex-1 grid grid-cols-2 gap-6">
            {[{ val: "99.9%", label: "Uptime Guarantee" }, { val: "100%", label: "Compliant" }].map(s => (
              <div key={s.label} className="p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/35 hover:shadow-[0_4px_20px_rgba(37,99,235,0.07)] transition-all">
                <p className="text-3xl font-bold mb-2 text-[#2563EB] font-[family-name:var(--font-dm-mono)]">{s.val}</p>
                <p className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-widest">{s.label}</p>
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
