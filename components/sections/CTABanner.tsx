"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section id="cta" className="py-28 px-6 relative overflow-hidden bg-[#0A1628]">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F3C] to-[#0A1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(37,99,235,0.15),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right,#F8FAFC 1px,transparent 1px),linear-gradient(to bottom,#F8FAFC 1px,transparent 1px)`,
          backgroundSize: "3rem 3rem",
        }}
      />

      {/* Side glows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#2563EB]/10 blur-[100px] rounded-full" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#2563EB]/10 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20 px-4 py-2 rounded-full mb-8">
          Ready to Get Started?
        </span>

        <h2 className="text-[clamp(32px,5vw,56px)] font-bold text-[#F8FAFC] mb-6 leading-[1.1] tracking-tight">
          Let&apos;s Modernize
          <br />
          <span className="text-[#2563EB]">Your Agency Together</span>
        </h2>

        <p className="text-[#64748B] text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          We&apos;ve delivered for 12+ government agencies over 16 years.
          Tell us your mission — we&apos;ll build the technology that moves it forward.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_32px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
          >
            <Phone size={16} /> Schedule a Consultation
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-[#1E293B] hover:border-[#2563EB]/40 text-[#F8FAFC] font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
          >
            Explore Services <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
