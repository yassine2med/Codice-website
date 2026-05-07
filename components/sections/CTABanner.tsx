"use client";

import { company } from "@/data/codice";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section id="cta" className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#2563EB]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: `linear-gradient(to right, #F8FAFC 1px, transparent 1px), linear-gradient(to bottom, #F8FAFC 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem',
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-[clamp(36px,5vw,56px)] font-bold text-[#F8FAFC] mb-6 leading-[1.1] tracking-tight">
          Ready to Modernize Your Agency?
        </h2>
        <p className="text-[#64748B] text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s talk about your mission. We&apos;ve delivered for over 12 government agencies — yours is next.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/contact"
            className="bg-[#2563EB] text-white font-bold px-10 py-5 rounded-xl text-base hover:bg-[#3B82F6] transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1"
          >
            Schedule a Consultation
          </a>
          <a
            href="/services"
            className="bg-transparent border-2 border-[#1E293B] text-[#F8FAFC] font-bold px-10 py-5 rounded-xl text-base hover:bg-white/5 hover:border-[#F8FAFC]/20 transition-all hover:-translate-y-1"
          >
            Explore Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}
