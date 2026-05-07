"use client";

import { useEffect, useState } from "react";
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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden mesh-gradient">
      {/* Decorative Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-accent/3 blur-[120px] rounded-full animate-pulse-slow delay-300" />
      
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(to right,#0A1628 1px,transparent 1px),linear-gradient(to bottom,#0A1628 1px,transparent 1px)`,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%,#000 30%,transparent 100%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto gap-8 pt-32 pb-24"
      >
        {/* Premium Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-3 glass-card px-5 py-2.5 rounded-full border-black/5 shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-brand-primary flex items-center justify-center">
                  <Shield size={10} className="text-white" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-primary">
              Trusted by 12+ DC Government Agencies
            </span>
          </div>
        </motion.div>

        {/* Dynamic Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(44px,8vw,96px)] font-extrabold tracking-tighter leading-[0.92] text-brand-navy"
        >
          Modernizing <br className="hidden sm:block" />
          <span className="text-gradient text-glow">Public Service</span> <br className="hidden sm:block" />
          at the Speed of Mission.
        </motion.h1>

        {/* Refined Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-500 max-w-3xl leading-relaxed"
        >
          CODICE is Washington DC&apos;s premier partner for <span className="text-brand-navy font-semibold">high-fidelity government technology</span>. 
          16 years of delivery. 100% client retention. ZERO compromise on quality.
        </motion.p>

        {/* High-Fidelity CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mt-6">
          <Link
            href="/services"
            className="group relative inline-flex items-center justify-center gap-3 bg-brand-primary text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 shadow-xl hover:-translate-y-1 overflow-hidden"
          >
            Launch Mission <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 glass-card hover:bg-white text-brand-navy font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
          >
            Schedule Briefing
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-12 border-t border-black/5 pt-12 w-full max-w-4xl"
        >
          {[
            { label: "Client Retention", val: "100%" },
            { label: "Years of Service", val: "16+" },
            { label: "Proprietary Platforms", val: "8" },
            { label: "Gov Agencies", val: "12+" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tighter">{s.val}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-brand-primary animate-float opacity-40" />
      <div className="absolute bottom-1/4 right-10 w-3 h-3 rounded-full bg-brand-accent animate-float delay-1000 opacity-30" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-gray-400">Initiate</span>
        <div className="w-px h-12 bg-linear-to-b from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
}

export { Hero };
