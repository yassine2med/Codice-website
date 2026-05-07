"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Award } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const words = ["innovative", "compliant", "scalable", "modern", "mission-driven"];

const badges = [
  { icon: Award, text: "DC Small Business of the Year 2025" },
  { icon: Shield, text: "100% Client Retention" },
];

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(
      () => setWordIndex((i) => (i + 1) % words.length),
      2200
    );
    return () => clearTimeout(id);
  }, [wordIndex]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0A1628] overflow-hidden">

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(to right,#1E293B 1px,transparent 1px),linear-gradient(to bottom,#1E293B 1px,transparent 1px)`,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%,#000 30%,transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%,#000 30%,transparent 100%)",
        }}
      />

      {/* Blue radial glow */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#2563EB]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Corner accent glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2563EB]/5 blur-[80px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2563EB]/5 blur-[80px] rounded-full" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto gap-8 pt-32 pb-24"
      >
        {/* Award badge row */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center">
          {badges.map(({ icon: Icon, text }) => (
            <span
              key={text}
              className="inline-flex items-center gap-2 bg-[#111827] border border-[#1E293B] text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
            >
              <Icon size={12} className="text-[#2563EB]" />
              {text}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(40px,7vw,80px)] font-bold tracking-tight leading-[1.08] text-[#F8FAFC]"
        >
          Government Technology
          <br />
          That Is{" "}
          <span className="relative inline-flex justify-center min-w-[320px] md:min-w-[420px]">
            {words.map((word, i) => (
              <motion.span
                key={word}
                className="absolute text-[#2563EB]"
                initial={{ opacity: 0, y: 40 }}
                animate={
                  wordIndex === i
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: wordIndex > i ? -40 : 40 }
                }
                transition={{ type: "spring", damping: 22, stiffness: 120 }}
              >
                {word}
              </motion.span>
            ))}
            {/* invisible placeholder to hold width */}
            <span className="invisible">{words.reduce((a, b) => (a.length > b.length ? a : b))}</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[#64748B] max-w-2xl leading-relaxed"
        >
          CODICE Technology has been the trusted IT partner to Washington DC's
          government agencies for <strong className="text-[#94A3B8] font-semibold">16 years</strong> — delivering
          custom software, permitting platforms, AI compliance tools, and cloud
          infrastructure that agencies rely on every day.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_32px_rgba(37,99,235,0.35)] hover:-translate-y-0.5"
          >
            Explore Our Services <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-transparent border border-[#1E293B] hover:border-[#2563EB]/50 text-[#F8FAFC] font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
          >
            <Phone size={16} /> Schedule a Consultation
          </Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-x-8 gap-y-3 justify-center mt-4 border-t border-[#1E293B] pt-8 w-full"
        >
          {[
            "12+ Government Agencies",
            "8 Proprietary Products",
            "16+ Years in DC",
            "100% Client Retention",
          ].map((item) => (
            <span key={item} className="text-xs font-semibold text-[#475569] tracking-widest uppercase">
              <span className="text-[#2563EB] mr-2">✦</span>{item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#475569]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-5 border-b-2 border-r-2 border-[#2563EB] rotate-45"
        />
      </motion.div>
    </section>
  );
}

export { Hero };
