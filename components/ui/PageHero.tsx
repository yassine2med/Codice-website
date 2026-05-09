"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  gradient?: string;
  bgImage?: string;
}

export function PageHero({
  title,
  subtitle,
  label,
  gradient = "from-[#2563EB]/20 to-transparent",
  bgImage,
}: PageHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#0A0F1E]">

      {/* Optional background photo */}
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.08 }}
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0F1E]/30 via-transparent to-[#0A0F1E]/60" />
        </div>
      )}

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 65%)` }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2563EB]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {label && (
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#60A5FA] mb-6">
              {label}
            </p>
          )}
          <h1 className="text-[clamp(36px,7vw,80px)] font-extrabold text-white mb-6 leading-[0.95] tracking-tighter">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
