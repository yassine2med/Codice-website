"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Shield, Award, CheckCircle, TrendingUp, Zap, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import { TextScramble } from "@/components/ui/TextScramble";
import { BorderBeam } from "@/components/ui/BorderBeam";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

const PARTICLE_COUNT = 20;

function useClientParticles() {
  const [particles, setParticles] = useState<Array<{
    id: number; x: number; y: number; size: number; opacity: number; delay: number; duration: number;
  }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.3 + 0.05,
        delay: Math.random() * 8,
        duration: Math.random() * 6 + 8,
      }))
    );
  }, []);

  return particles;
}

/* ─── Live Activity Feed ─── */
const activityFeed = [
  { id: 1, agency: "DCRA", action: "Permit PM-4821 approved", time: "just now", color: "#22C55E", dot: "#22C55E" },
  { id: 2, agency: "DOH", action: "HIPAA audit completed", time: "2m ago", color: "#2563EB", dot: "#2563EB" },
  { id: 3, agency: "DDOT", action: "Route A — on schedule", time: "4m ago", color: "#0EA5E9", dot: "#0EA5E9" },
  { id: 4, agency: "OAG", action: "Regulation REG-003 indexed", time: "7m ago", color: "#7C3AED", dot: "#7C3AED" },
  { id: 5, agency: "DHS", action: "Case CASE-4401 escalated", time: "11m ago", color: "#F59E0B", dot: "#F59E0B" },
];

/* ─── Animated Counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / 40);
    const id = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(id); }
      else setVal(start);
    }, 40);
    return () => clearInterval(id);
  }, [to]);
  return <>{val.toLocaleString()}{suffix}</>;
}

/* ─── Mission Dashboard Panel ─── */
function MissionDashboard() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setActiveIdx((i) => (i + 1) % activityFeed.length), 3200);
    return () => clearInterval(id);
  }, []);

  const metrics = [
    { label: "Open Permits", value: 2847, suffix: "", delta: "+12%", color: "#2563EB", bg: "#F0F6FF" },
    { label: "Cases Active", value: 1429, suffix: "", delta: "-8% MoM", color: "#0F766E", bg: "#F0FDFA" },
    { label: "Compliance Rate", value: 99, suffix: ".4%", delta: "↑ 0.2", color: "#7C3AED", bg: "#F5F3FF" },
    { label: "Uptime", value: 99, suffix: ".9%", delta: "30-day avg", color: "#16A34A", bg: "#F0FDF4" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[540px] ml-auto"
    >
      {/* Outer glow */}
      <div className="absolute -inset-6 bg-[#2563EB]/6 blur-[60px] rounded-[60px] pointer-events-none" />

      <div className="relative rounded-[32px] border border-[#E2E8F0] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12),0_4px_16px_rgba(37,99,235,0.08)] overflow-hidden">
        <BorderBeam duration={12} colorFrom="#2563EB" colorTo="#93C5FD" />

        {/* Dashboard header bar */}
        <div className="flex items-center gap-3 px-5 py-4 bg-[#0F172A] border-b border-[#1E293B]">
          <div className="flex gap-1.5">
            {["#FF5F57","#FEBC2E","#28C840"].map((c) => (
              <div key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="flex-1 mx-2 bg-white/8 rounded-lg px-3 py-1.5 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-white/30" />
            <span className="text-[9px] font-bold text-white/60 tracking-widest uppercase">mission.codicetech.com</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#22C55E]/15 border border-[#22C55E]/30 rounded-full px-2.5 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-[8px] font-bold text-[#22C55E] uppercase tracking-widest">Live</span>
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 gap-0 border-b border-[#E2E8F0]">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className={`px-5 py-4 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""} border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors`}
              style={{ borderColor: "#E2E8F0" }}
            >
              <p className="text-[8px] font-bold uppercase tracking-widest text-[#94A3B8] mb-1">{m.label}</p>
              <div className="flex items-end gap-1.5">
                <span className="text-xl font-bold leading-none" style={{ color: m.color }}>
                  {mounted ? <Counter to={m.value} suffix={m.suffix} /> : `${m.value}${m.suffix}`}
                </span>
                <span className="text-[9px] font-bold text-[#94A3B8] mb-0.5 flex items-center gap-0.5">
                  <TrendingUp size={8} /> {m.delta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#64748B]">Live Activity</span>
            <span className="text-[8px] text-[#94A3B8]">12 agencies connected</span>
          </div>

          <div className="flex flex-col gap-0 overflow-hidden rounded-xl border border-[#E2E8F0]">
            <AnimatePresence mode="popLayout">
              {activityFeed.map((item, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: isActive ? 1 : 0.55, x: 0, backgroundColor: isActive ? "#F8FAFC" : "#FFFFFF" }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 px-3.5 py-2.5 border-b border-[#F1F5F9] last:border-0 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.dot }} />
                    <span className="text-[8px] font-bold tracking-wider shrink-0" style={{ color: item.dot }}>{item.agency}</span>
                    <span className="text-[9px] text-[#334155] flex-1 truncate">{item.action}</span>
                    <span className="text-[8px] text-[#94A3B8] shrink-0 flex items-center gap-1">
                      <Clock size={8} /> {item.time}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Agency trust strip */}
        <div className="px-5 pb-4">
          <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] px-4 py-3">
            <Zap size={11} className="text-[#2563EB] shrink-0" />
            <span className="text-[9px] font-bold text-[#64748B] tracking-wide">12+ DC agencies · FedRAMP aligned · 99.9% SLA · HIPAA compliant</span>
          </div>
        </div>
      </div>

      {/* Floating badge — top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5, ease: "backOut" }}
        className="absolute -top-4 -right-4 bg-white border border-[#E2E8F0] shadow-[0_8px_32px_rgba(15,23,42,0.12)] rounded-2xl px-4 py-2.5 flex items-center gap-2.5 z-10"
      >
        <div className="w-7 h-7 rounded-full bg-[#F0FDF4] border border-green-200 flex items-center justify-center">
          <CheckCircle size={14} className="text-green-500" />
        </div>
        <div>
          <p className="text-[9px] font-bold text-[#0F172A] leading-none">100% Client Retention</p>
          <p className="text-[8px] text-[#94A3B8] mt-0.5">16 consecutive years</p>
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5, ease: "backOut" }}
        className="absolute -bottom-4 -left-4 bg-[#0F172A] border border-[#1E293B] shadow-[0_8px_32px_rgba(15,23,42,0.25)] rounded-2xl px-4 py-2.5 flex items-center gap-2.5 z-10"
      >
        <div className="w-7 h-7 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 flex items-center justify-center">
          <Award size={14} className="text-[#2563EB]" />
        </div>
        <div>
          <p className="text-[9px] font-bold text-white leading-none">DC Small Business</p>
          <p className="text-[8px] text-[#94A3B8] mt-0.5">of the Year 2025</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Hero ─── */
function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const particles = useClientParticles();

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-white overflow-hidden">
      {/* Video background — data center / tech loop at ultra-low opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.035]"
          style={{ filter: "grayscale(100%)" }}
        >
          {/* Free Pexels video — server room / data center */}
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* DC aerial photography — fallback static layer */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1800&q=50"
          alt="Washington DC"
          fill
          className="object-cover object-center opacity-[0.03]"
          sizes="100vw"
          priority
        />
      </div>

      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#2563EB] animate-float"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Blue radial glow — left half */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2563EB]/6 blur-[120px] rounded-full pointer-events-none" />

      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none overflow-hidden">
        <div className="absolute top-[-80px] right-[-80px] w-[360px] h-[360px] border border-[#2563EB]/8 rounded-full" />
        <div className="absolute top-[-40px] right-[-40px] w-[240px] h-[240px] border border-[#2563EB]/6 rounded-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-[280px] h-[280px] pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-60px] left-[-60px] w-[200px] h-[200px] border border-[#2563EB]/6 rounded-full" />
      </div>

      {/* Thin top rule */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#2563EB]/25 to-transparent" />

      {/* ── 2-column layout ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: copy ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
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
              className="text-[clamp(40px,5.5vw,76px)] font-extrabold tracking-tighter leading-[0.92] text-[#0F172A]"
            >
              <TextScramble
                text="Modernizing"
                delay={400}
                duration={35}
                className="font-[family-name:var(--font-dm-mono)]"
              />{" "}
              <span className="text-gradient text-glow">Public Service</span>{" "}
              at the Speed of Mission.
            </motion.h1>

            {/* Dynamic word + subheadline */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
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
              <p className="text-lg text-[#475569] max-w-lg leading-relaxed">
                Washington DC&apos;s premier partner for{" "}
                <span className="text-[#0F172A] font-semibold">high-fidelity government technology</span>.{" "}
                16 years of delivery. 100% client retention.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <MagneticButton strength={0.28}>
                <Link
                  href="/services"
                  className="group relative inline-flex items-center justify-center gap-3 bg-[#2563EB] text-white font-bold text-base px-9 py-4 rounded-xl transition-all duration-300 shadow-[0_8px_32px_rgba(37,99,235,0.28)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.42)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  Explore Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.22}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white border-2 border-[#E2E8F0] hover:border-[#2563EB]/40 text-[#0F172A] font-bold text-base px-9 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(37,99,235,0.10)]"
                >
                  Schedule Briefing
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Credential chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
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
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#E2E8F0] pt-8 mt-2"
            >
              {[
                { label: "Client Retention", val: "100%" },
                { label: "Years of Service", val: "16+" },
                { label: "Platforms Built", val: "8" },
                { label: "Gov Agencies", val: "12+" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="text-2xl lg:text-3xl font-bold text-[#0F172A] tracking-tighter font-[family-name:var(--font-dm-mono)]">
                    {s.val}
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-[#2563EB]/70">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Mission Dashboard ── */}
          <div className="hidden lg:flex items-center justify-center py-10">
            <MissionDashboard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-[#94A3B8]">Scroll</span>
        <div className="w-[1px] h-8 bg-linear-to-b from-[#2563EB]/40 to-transparent" />
      </motion.div>
    </section>
  );
}

export { Hero };
