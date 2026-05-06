"use client";

import { company, stats } from "@/data/codice";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headlineWords = company.tagline.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-12 overflow-hidden bg-[#0A1628]">
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" 
      />
      
      {/* Blue glow effect */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2563EB]/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center w-full"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 bg-[#111827] border border-[#1E293B] rounded-full px-4 py-2 mb-8 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2563EB]">
            DC&apos;s #1 Gov-Tech Firm
          </span>
          <span className="text-xs text-[#64748B]">·</span>
          <span className="text-xs text-[#64748B]">Small Business of the Year 🏆</span>
        </motion.div>

        {/* Headline (word-by-word) */}
        <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F8FAFC] leading-[1.1] tracking-[-0.03em] max-w-5xl mb-6 flex flex-wrap justify-center gap-[0.25em]">
          {headlineWords.map((word, i) => (
            <motion.span key={i} variants={item} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={item} className="text-lg md:text-xl text-[#64748B] max-w-2xl mb-10 leading-relaxed">
          {company.subtagline}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-24">
          <a
            href="#services"
            className="bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold px-8 py-4 rounded-lg text-base transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1"
          >
            Explore Our Services
          </a>
          <a
            href="#products"
            className="bg-[#111827] border border-[#1E293B] hover:border-[#2563EB] hover:bg-[#1E293B] text-[#F8FAFC] font-semibold px-8 py-4 rounded-lg text-base transition-all hover:-translate-y-1"
          >
            View Our Products
          </a>
        </motion.div>

        {/* Stat bar */}
        <motion.div 
          variants={item}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl border-t border-[#1E293B] pt-10"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <span className="text-4xl md:text-5xl font-bold text-[#F8FAFC] font-[family-name:var(--font-dm-mono)] relative">
                {mounted ? (
                  <CountUp
                    end={parseInt(stat.value.replace(/,/g, '')) || 0}
                    duration={2.5}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={200}
                  />
                ) : (
                  stat.value
                )}
                {stat.suffix}
                <div className="absolute inset-0 bg-[#2563EB]/10 blur-xl rounded-full -z-10" />
              </span>
              <span className="text-sm text-[#64748B] mt-2">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#64748B]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.svg 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          width="16" height="16" viewBox="0 0 16 16" fill="none"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </motion.div>
    </div>
  );
}
