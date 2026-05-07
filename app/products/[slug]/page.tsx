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

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.slug === params.slug);
  const [imageIndex, setImageIndex] = useState(0);

  if (!product) {
    notFound();
  }

  // Auto-play for the product carousel
  useEffect(() => {
    if (!product.showcaseImages || product.showcaseImages.length <= 1) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % product.showcaseImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [product]);

  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F8FAFC]">
      <Navbar />

      {/* Product Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#2563EB10,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Product Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-[10px] font-bold uppercase tracking-widest">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="px-3 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles size={10} /> New
                  </span>
                )}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                {product.name}
              </h1>

              <p className="text-[#94A3B8] text-xl leading-relaxed mb-10 max-w-xl">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="bg-[#2563EB] hover:bg-[#3B82F6] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_0_24px_rgba(37,99,235,0.3)] flex items-center gap-2"
                >
                  Request a Demo <ArrowRight size={18} />
                </Link>
                {product.techStack && (
                  <div className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#111827] border border-[#1E293B]">
                    <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest">Powered by</span>
                    <span className="text-xs font-bold text-[#F8FAFC]">{product.techStack[0]}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right: Immersive Product Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-4/3 rounded-[40px] overflow-hidden border border-[#1E293B] shadow-2xl bg-[#0F172A]"
            >
              {/* Gradient placeholder background */}
              <div className="absolute inset-0 bg-linear-to-br from-[#1E293B] via-[#0F172A] to-[#0A1628]">
                <div className="absolute inset-0 opacity-[0.06]" style={{
                  backgroundImage: `linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)`,
                  backgroundSize: "3rem 3rem",
                }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2563EB]/20 blur-[80px] rounded-full" />
              </div>

              <AnimatePresence mode="popLayout">
                <motion.div
                  key={imageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={product.showcaseImages[imageIndex]}
                    alt={product.name}
                    fill
                    className="object-cover opacity-90"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-linear-to-t from-[#0A1628] via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Product Floating Badges */}
              <div className="absolute top-8 left-8 flex flex-col gap-4">
                <div className="bg-[#111827]/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB]/20 flex items-center justify-center">
                    <ShieldCheck className="text-[#2563EB]" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Compliance</p>
                    <p className="text-sm font-bold text-white">Gov Grade Secure</p>
                  </div>
                </div>
              </div>

              {product.logo && (
                <div className="absolute bottom-8 right-8 bg-[#111827]/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
                  <div className="relative w-32 h-10">
                    <Image src={product.logo} alt={product.name} fill className="object-contain mix-blend-screen" />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-32 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Unmatched Capabilities</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">Discover how {product.name} is specifically engineered to handle the complexities of public sector management.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features?.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#0A1628] border border-[#1E293B] hover:border-[#2563EB]/40 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#2563EB]/20 transition-all">
                  <CheckCircle2 size={16} className="text-[#2563EB]" />
                </div>
                <p className="text-[#94A3B8] leading-relaxed group-hover:text-[#F8FAFC] transition-colors">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Integration */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="p-12 rounded-[40px] bg-linear-to-br from-[#1E293B] to-[#0A1628] border border-[#1E293B] flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:flex-1">
            <h2 className="text-3xl font-bold mb-6 leading-tight">Technical Ecosystem</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
              {product.name} is built on a cloud-native, secure technology stack that ensures maximum performance, 99.9% availability, and seamless integration with your existing government infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              {product.techStack?.map((tech) => (
                <div key={tech} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="text-[#2563EB]" size={16} />
                  <span className="text-sm font-bold text-white/90">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:flex-1 grid grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <p className="text-3xl font-bold mb-2 text-[#2563EB]">99.9%</p>
              <p className="text-[#64748B] text-sm font-bold uppercase tracking-widest">Uptime Guarantee</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <p className="text-3xl font-bold mb-2 text-[#2563EB]">100%</p>
              <p className="text-[#64748B] text-sm font-bold uppercase tracking-widest">Compliant</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
