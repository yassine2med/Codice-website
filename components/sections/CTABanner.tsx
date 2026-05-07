"use client";

import { company } from "@/data/codice";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section id="cta" className="py-32 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#2563EB]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-[clamp(36px,5vw,56px)] font-bold text-white mb-6 leading-[1.1] tracking-tight">
          Ready to Modernize Your Agency?
        </h2>
        <p className="text-blue-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s talk about your mission. We&apos;ve delivered for over 12 government agencies — yours is next.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={`mailto:${company.email}`}
            className="bg-white text-[#2563EB] font-bold px-10 py-5 rounded-xl text-base hover:bg-blue-50 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
          >
            Schedule a Consultation
          </a>
          <a
            href={`tel:${company.phone}`}
            className="bg-transparent border-2 border-white/30 text-white font-bold px-10 py-5 rounded-xl text-base hover:bg-white/10 hover:border-white transition-all hover:-translate-y-1"
          >
            {company.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
