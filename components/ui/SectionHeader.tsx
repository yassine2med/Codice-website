"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ label, title, subtitle, className = "", light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className={`text-center mb-20 px-4 ${className}`}
    >
      {label && (
        <div className="inline-flex items-center justify-center mb-6">
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/20 px-4 py-2 rounded-full">
            {label}
          </span>
        </div>
      )}
      <h2 className={`text-[clamp(32px,5.5vw,60px)] font-bold mb-6 tracking-tight leading-[1.05] ${light ? "text-white" : "text-[#0F172A]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${light ? "text-slate-300" : "text-[#64748B]"}`}>
          {subtitle}
        </p>
      )}
      <div className="mt-8 w-16 h-[2px] bg-[#2563EB] mx-auto rounded-full opacity-60" />
    </motion.div>
  );
}
