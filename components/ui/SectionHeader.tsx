"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ label, title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className={`text-center mb-20 px-4 ${className}`}
    >
      {label && (
        <div className="inline-flex items-center justify-center mb-6">
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-brand-primary bg-brand-primary/5 border border-brand-primary/10 px-4 py-2 rounded-full shadow-sm">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-[clamp(36px,6vw,68px)] font-bold text-brand-navy mb-6 tracking-tight leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
      <div className="mt-8 w-24 h-1 bg-linear-to-r from-brand-primary to-transparent mx-auto rounded-full opacity-30" />
    </motion.div>
  );
}
