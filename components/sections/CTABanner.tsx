"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section id="cta" className="py-28 px-6 relative overflow-hidden bg-white">
      {/* Layered backgrounds */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right,#0A1628 1px,transparent 1px),linear-gradient(to bottom,#0A1628 1px,transparent 1px)`,
          backgroundSize: "3rem 3rem",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-brand-primary bg-brand-primary/5 border border-brand-primary/10 px-4 py-2 rounded-full mb-8 shadow-sm">
          Ready to Get Started?
        </span>

        <h2 className="text-[clamp(32px,5vw,56px)] font-bold text-brand-navy mb-6 leading-[1.1] tracking-tight">
          Let&apos;s Modernize
          <br />
          <span className="text-brand-primary">Your Agency Together</span>
        </h2>

        <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto leading-relaxed font-medium">
          We&apos;ve delivered for 12+ government agencies over 16 years.
          Tell us your mission — we&apos;ll build the technology that moves it forward.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-brand-primary text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 shadow-xl hover:shadow-brand-primary/40 hover:-translate-y-0.5"
          >
            <Phone size={16} /> Schedule a Consultation
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 bg-white border border-black/5 hover:border-brand-primary/30 text-brand-navy font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Services <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

