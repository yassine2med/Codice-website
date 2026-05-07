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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={`text-center mb-16 px-4 ${className}`}
    >
      {label && (
        <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-4">
          {label}
        </p>
      )}
      <h2 className="text-[clamp(32px,5vw,56px)] font-bold text-[#F8FAFC] mb-4 tracking-[-0.02em] leading-[1.2]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#64748B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
