"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Award, CheckCircle, TrendingUp, Zap, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const words = ["innovative", "compliant", "scalable", "mission-driven", "proven"];

/* ─── Live Activity Feed ─── */
const activityFeed = [
  { id: 1, agency: "DCRA", action: "Permit PM-4821 approved", time: "just now", color: "#22C55E" },
  { id: 2, agency: "DOH",  action: "HIPAA audit completed",   time: "2m ago",   color: "#2563EB" },
  { id: 3, agency: "DDOT", action: "Route A — on schedule",   time: "4m ago",   color: "#0EA5E9" },
  { id: 4, agency: "OAG",  action: "Regulation REG-003 indexed", time: "7m ago", color: "#7C3AED" },
  { id: 5, agency: "DHS",  action: "Case CASE-4401 escalated", time: "11m ago", color: "#F59E0B" },
];

/* ─── Mission Dashboard Panel ─── */
function MissionDashboard() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveIdx((i) => (i + 1) % activityFeed.length), 3000);
    return () => clearInterval(id);
  }, []);

  const metrics = [
    { label: "Open Permits",    display: "2,847", delta: "+12% MoM",  color: "#2563EB" },
    { label: "Cases Active",    display: "1,429", delta: "−8% MoM",   color: "#0F766E" },
    { label: "Compliance Rate", display: "99.4%", delta: "↑ 0.2 pts", color: "#7C3AED" },
    { label: "Uptime SLA",      display: "99.9%", delta: "30-day avg", color: "#16A34A" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[560px] ml-auto"
    >
      {/* Ambient glow behind panel */}
      <div className="absolute -inset-10 bg-brand-primary/8 blur-[80px] rounded-[80px] pointer-events-none animate-drift-slow" />
      <div className="absolute -inset-6 bg-[#60A5FA]/4 blur-2xl rounded-[60px] pointer-events-none" />

      <div className="relative rounded-[28px] bg-white overflow-hidden" style={{ border: "1px solid #E2E8F0", boxShadow: "0 32px 80px rgba(15,23,42,0.12), 0 4px 24px rgba(37,99,235,0.08), inset 0 0 0 1px rgba(37,99,235,0.06)" }}>

        {/* Dashboard chrome bar */}
        <div className="flex items-center gap-3 px-5 py-3.5 bg-[#0F172A] border-b border-[#1E293B]">
          <div className="flex gap-1.5">
            {["#FF5F57","#FEBC2E","#28C840"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="flex-1 mx-3 bg-white/6 rounded-md px-3 py-1 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full border border-white/20" />
            <span className="text-[9px] font-mono text-white/50 tracking-widest">mission.codicetech.com</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#22C55E]/15 border border-[#22C55E]/25 rounded-full px-2.5 py-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-[8px] font-bold text-[#22C55E] uppercase tracking-widest">Live</span>
          </div>
        </div>

        {/* Metrics 2×2 — static, no JS animation */}
        <div className="grid grid-cols-2 border-b border-[#E2E8F0]">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`px-5 py-5 cursor-default ${
                i % 2 === 0 ? "border-r border-[#E2E8F0]" : ""} ${i < 2 ? "border-b border-[#E2E8F0]" : ""}`}
            >
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#64748B", marginBottom: 6 }}>
                {m.label}
              </p>
              <p style={{ fontSize: 26, fontWeight: 900, lineHeight: 1, color: m.color, marginBottom: 6, fontVariantNumeric: "tabular-nums" }}>
                {m.display}
              </p>
              <p style={{ fontSize: 9, fontWeight: 600, color: m.color, display: "flex", alignItems: "center", gap: 3 }}>
                <TrendingUp size={8} /> {m.delta}
              </p>
              <div style={{ height: 2, width: "100%", marginTop: 10, borderRadius: 9999, backgroundColor: m.color, opacity: 0.2 }} />
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="px-4 py-3.5">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#64748B] flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#22C55E] animate-pulse" />
              Live Activity
            </span>
            <span className="text-[8px] text-[#94A3B8]">12 agencies online</span>
          </div>

          <div className="rounded-xl border border-[#F1F5F9] overflow-hidden">
            {activityFeed.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <motion.div
                  key={item.id}
                  animate={{
                    backgroundColor: isActive ? "#F8FAFC" : "#FFFFFF",
                    opacity: isActive ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-3 px-3.5 py-2.5 border-b border-[#F8FAFC] last:border-0"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300"
                    style={{ backgroundColor: item.color, boxShadow: isActive ? `0 0 6px ${item.color}80` : "none" }}
                  />
                  <span className="text-[8px] font-black tracking-wider shrink-0 uppercase" style={{ color: item.color }}>
                    {item.agency}
                  </span>
                  <span className="text-[9px] text-[#334155] flex-1 truncate">{item.action}</span>
                  <span className="text-[8px] text-[#94A3B8] shrink-0 flex items-center gap-1">
                    <Clock size={7} /> {item.time}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer strip */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5">
            <Zap size={10} className="text-brand-primary shrink-0" />
            <span className="text-[9px] font-semibold text-[#64748B] tracking-wide">
              12+ DC agencies · FedRAMP aligned · 99.9% SLA · HIPAA compliant
            </span>
          </div>
        </div>
      </div>

      {/* Floating badge — top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="hidden sm:flex absolute -top-5 -right-5 bg-white border border-[#E2E8F0] shadow-[0_8px_32px_rgba(15,23,42,0.14),0_2px_8px_rgba(37,99,235,0.08)] rounded-2xl px-4 py-2.5 items-center gap-2.5 z-20"
      >
        <div className="w-7 h-7 rounded-full bg-[#F0FDF4] border border-emerald-100 flex items-center justify-center">
          <CheckCircle size={14} className="text-emerald-500" />
        </div>
        <div>
          <p className="text-[9px] font-bold text-[#0F172A] leading-tight">100% Client Retention</p>
          <p className="text-[8px] text-[#94A3B8] mt-0.5">16 consecutive years</p>
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#0F172A] border border-[#1E293B] shadow-[0_8px_32px_rgba(0,0,0,0.25)] rounded-2xl px-4 py-2.5 items-center gap-2.5 z-20"
      >
        <div className="w-7 h-7 rounded-full bg-brand-primary/15 border border-brand-primary/25 flex items-center justify-center">
          <Award size={13} className="text-[#60A5FA]" />
        </div>
        <div>
          <p className="text-[9px] font-bold text-white leading-tight">DC Small Business</p>
          <p className="text-[8px] text-[#94A3B8] mt-0.5">of the Year 2025</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Hero ─── */
function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const wordId = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(wordId);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-white overflow-hidden">

      {/* ── Layer 1: DC aerial photo — actually visible ── */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1800&q=60"
          alt="Washington DC"
          fill
          className="object-cover object-center"
          style={{ opacity: 0.06 }}
          sizes="100vw"
          priority
          unoptimized
        />
        {/* Photo fade mask — white at bottom so it blends */}
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/40" />
      </div>

      {/* ── Layer 2: Very soft gradient orbs — barely visible, just atmosphere ── */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[700px] h-[600px] rounded-full pointer-events-none animate-drift"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.055) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-15%] right-[-5%] w-[600px] h-[500px] rounded-full pointer-events-none animate-drift-slow"
        style={{ background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%)" }}
      />

      {/* ── Layer 3: Dot grid ── */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* ── Layer 4: Subtle corner rings ── */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-80px] right-[-80px] w-[340px] h-[340px] border border-brand-primary/10 rounded-full" />
        <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] border border-brand-primary/6 rounded-full" />
      </div>

      {/* ── Bottom rule ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#E2E8F0] to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-48 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: copy ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Live status pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] px-4 py-2 rounded-full shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-emerald-600">12 Agencies Online</span>
                </div>
                <div className="w-px h-3 bg-[#E2E8F0]" />
                <div className="flex items-center gap-1.5">
                  <Shield size={10} className="text-brand-primary" />
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#475569]">GSA Schedule Holder</span>
                </div>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              {/* Accent rule */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-brand-primary rounded-full" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-primary">Washington DC · Est. 2009</span>
              </div>

              <h1 className="text-[clamp(40px,5.5vw,76px)] font-extrabold tracking-tighter leading-[0.90] text-[#0F172A]">
                <motion.span
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="inline font-(family-name:--font-dm-mono) text-brand-primary"
                >
                  Modernizing
                </motion.span>{" "}
                <span className="relative inline-block">
                  Public Service
                  {/* Underline accent — scoped to inline-block so it never bleeds to adjacent lines */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-linear-to-r from-brand-primary to-[#60A5FA] rounded-full origin-left"
                  />
                </span>{" "}
                at the Speed of Mission.
              </h1>
            </motion.div>

            {/* Dynamic word + subheadline */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2 text-[#64748B] text-base font-medium">
                <span>Government technology that is</span>
                <span className="relative inline-flex items-center min-w-[140px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute font-bold text-brand-primary"
                    >
                      {words[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="invisible font-bold">{words.reduce((a, b) => a.length > b.length ? a : b)}</span>
                </span>
              </div>
              <p className="text-lg text-[#475569] max-w-lg leading-relaxed">
                Washington DC&apos;s premier partner for{" "}
                <span className="text-[#0F172A] font-semibold">high-fidelity government technology</span>.{" "}
                16 years of delivery. 100% client retention.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-1">
              <MagneticButton strength={0.28}>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 bg-brand-primary text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_8px_32px_rgba(37,99,235,0.30)] hover:shadow-[0_12px_48px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 overflow-hidden"
                >
                  {/* Shimmer sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/15 to-transparent" />
                  Schedule a Briefing
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.22}>
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white border border-[#E2E8F0] hover:border-brand-primary/35 text-[#0F172A] font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(37,99,235,0.10)] hover:-translate-y-0.5"
                >
                  Explore Services
                  <ChevronRight size={16} className="text-brand-primary group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Trust chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
              {[
                { icon: Award,        text: "DC Small Business of the Year 2025" },
                { icon: CheckCircle,  text: "GSA Schedule Holder" },
                { icon: Shield,       text: "NIST 800-53 Aligned" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-2 bg-white border border-[#E2E8F0] hover:border-brand-primary/30 px-4 py-2 rounded-full transition-colors duration-200 cursor-default shadow-sm"
                >
                  <Icon size={11} className="text-brand-primary" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#64748B]">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#E2E8F0] pt-8 mt-1"
            >
              {[
                { label: "Client Retention", val: "100%" },
                { label: "Years of Service",  val: "16+"  },
                { label: "Platforms Built",   val: "8"    },
                { label: "Gov Agencies",      val: "12+"  },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                  className="flex flex-col gap-1 group cursor-default"
                >
                  <span className="text-2xl lg:text-3xl font-bold text-[#0F172A] tracking-tighter font-(family-name:--font-dm-mono) group-hover:text-brand-primary transition-colors duration-300">
                    {s.val}
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Mission Dashboard ── */}
          <div className="hidden lg:flex items-center justify-center py-12">
            <MissionDashboard />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[8px] font-bold tracking-[0.5em] uppercase text-[#CBD5E1]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-brand-primary/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

export { Hero };
