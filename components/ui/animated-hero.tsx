"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Award, CheckCircle } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const words = ["innovative", "compliant", "scalable", "mission-driven", "proven"];

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Soft blue radial glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[900px] h-[600px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Top-right geometric accent */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none overflow-hidden">
        <div className="absolute top-[-80px] right-[-80px] w-[360px] h-[360px] border border-[#2563EB]/10 rounded-full" />
        <div className="absolute top-[-40px] right-[-40px] w-[260px] h-[260px] border border-[#2563EB]/8 rounded-full" />
        <div className="absolute top-[0px] right-[0px] w-[160px] h-[160px] border border-[#2563EB]/6 rounded-full" />
      </div>
      {/* Bottom-left geometric accent */}
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-60px] left-[-60px] w-[240px] h-[240px] border border-[#2563EB]/8 rounded-full" />
        <div className="absolute bottom-[-30px] left-[-30px] w-[140px] h-[140px] border border-[#2563EB]/6 rounded-full" />
      </div>

      {/* Thin top rule */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#2563EB]/30 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto gap-7 pt-36 pb-24"
      >
        {/* Trust badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2.5 bg-[#F0F6FF] border border-[#2563EB]/25 px-5 py-2.5 rounded-full shadow-sm">
            <div className="flex -space-x-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-[#2563EB] flex items-center justify-center">
                  <Shield size={9} className="text-white" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#1D4ED8]">
              Trusted by 12+ DC Government Agencies
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(42px,7.5vw,90px)] font-extrabold tracking-tighter leading-[0.92] text-[#0F172A]"
        >
          Modernizing <br className="hidden sm:block" />
          <span className="text-gradient text-glow">Public Service</span>
          <br className="hidden sm:block" />
          at the Speed of Mission.
        </motion.h1>

        {/* Dynamic word + subheadline */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-3 text-[#64748B] text-base font-medium">
            <span>Government technology that is</span>
            <span className="relative inline-block min-w-[130px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute left-0 font-bold text-[#2563EB]"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="invisible font-bold">{words.reduce((a, b) => a.length > b.length ? a : b)}</span>
            </span>
          </div>
          <p className="text-lg md:text-xl text-[#475569] max-w-2xl leading-relaxed">
            CODICE is Washington DC&apos;s premier partner for{" "}
            <span className="text-[#0F172A] font-semibold">high-fidelity government technology</span>.{" "}
            16 years of delivery. 100% client retention. Zero compromise on quality.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/services"
            className="group relative inline-flex items-center justify-center gap-3 bg-[#2563EB] text-white font-bold text-base px-9 py-4 rounded-xl transition-all duration-300 shadow-[0_8px_32px_rgba(37,99,235,0.28)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.42)] hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            Explore Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white border-2 border-[#E2E8F0] hover:border-[#2563EB]/40 text-[#0F172A] font-bold text-base px-9 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(37,99,235,0.10)] hover:-translate-y-0.5"
          >
            Schedule Briefing
          </Link>
        </motion.div>

        {/* Credential chips */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mt-2">
          {[
            { icon: Award, text: "DC Small Business of the Year 2025" },
            { icon: CheckCircle, text: "GSA Schedule Holder" },
            { icon: Shield, text: "NIST 800-53 Aligned" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2 rounded-full">
              <Icon size={12} className="text-[#2563EB]" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#64748B]">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-10 border-t border-[#E2E8F0] pt-10 w-full max-w-3xl"
        >
          {[
            { label: "Client Retention", val: "100%" },
            { label: "Years of Service", val: "16+" },
            { label: "Platforms Built", val: "8" },
            { label: "Gov Agencies", val: "12+" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1 items-center md:items-start">
              <span className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tighter font-[family-name:var(--font-dm-mono)]">
                {s.val}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#2563EB]/70">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-[#94A3B8]">Scroll</span>
        <div className="w-[1px] h-10 bg-linear-to-b from-[#2563EB]/40 to-transparent" />
      </motion.div>
    </section>
  );
}

export { Hero };
