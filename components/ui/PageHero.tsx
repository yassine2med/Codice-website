"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  gradient?: string;
}

export function PageHero({ title, subtitle, label, gradient = "from-[#2563EB]/20 to-transparent" }: PageHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Radial Gradient */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial ${gradient} blur-[120px] rounded-full opacity-30 pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {label && (
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-6">
              {label}
            </p>
          )}
          <h1 className="text-[clamp(40px,7vw,80px)] font-bold text-[#F8FAFC] mb-8 leading-[1.1] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[#64748B] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
