"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedBeam } from "@/components/ui/AnimatedBeam";
import { Shield, Cpu, FileText, Globe2, Building2, HeartPulse, Landmark, Car } from "lucide-react";

interface NodeProps {
  icon: React.ElementType;
  label: string;
  color: string;
  bg: string;
  nodeRef: React.RefObject<HTMLDivElement | null>;
  delay?: number;
  tooltip?: string;
}

function Node({ icon: Icon, label, color, bg, nodeRef, delay = 0, tooltip }: NodeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "backOut" }}
      ref={nodeRef}
      className="relative flex flex-col items-center gap-2 z-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-14 h-14 rounded-2xl border flex items-center justify-center shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition-all hover:scale-110 duration-300 cursor-default"
        style={{ backgroundColor: hovered ? color + "18" : bg, borderColor: hovered ? color + "60" : color + "30" }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <span className="text-[9px] font-bold uppercase tracking-widest text-[#94A3B8] whitespace-nowrap">
        {label}
      </span>

      {/* Tooltip */}
      {tooltip && (
        <motion.div
          initial={false}
          animate={hovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 4, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-44 bg-[#0F172A] border border-[#1E293B] rounded-xl px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] pointer-events-none z-50"
        >
          <p className="text-[11px] text-[#CBD5E1] leading-snug text-center">{tooltip}</p>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#1E293B]" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default function BeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const codiceRef = useRef<HTMLDivElement>(null);

  // Left column — agencies
  const dcraRef = useRef<HTMLDivElement>(null);
  const dohRef = useRef<HTMLDivElement>(null);
  const ddotRef = useRef<HTMLDivElement>(null);
  const doesRef = useRef<HTMLDivElement>(null);

  // Right column — products
  const permioRef = useRef<HTMLDivElement>(null);
  const fortiRef = useRef<HTMLDivElement>(null);
  const celerRef = useRef<HTMLDivElement>(null);
  const travoRef = useRef<HTMLDivElement>(null);

  const leftNodes: NodeProps[] = [
    { icon: Building2,  label: "DCRA",  color: "#2563EB", bg: "#EFF6FF", nodeRef: dcraRef,  delay: 0.1, tooltip: "DC Dept. of Consumer & Regulatory Affairs — permit modernization & licensing systems." },
    { icon: HeartPulse, label: "DOH",   color: "#0F766E", bg: "#F0FDFA", nodeRef: dohRef,   delay: 0.2, tooltip: "DC Dept. of Health — healthcare data platforms and HIPAA-compliant reporting." },
    { icon: Car,        label: "DDOT",  color: "#0369A1", bg: "#F0F9FF", nodeRef: ddotRef,  delay: 0.3, tooltip: "DC Dept. of Transportation — PermiOne-powered permitting for all DC infrastructure." },
    { icon: Landmark,   label: "DOES",  color: "#7C3AED", bg: "#F5F3FF", nodeRef: doesRef,  delay: 0.4, tooltip: "DC Dept. of Employment Services — modernized UI Benefits System launched 2024." },
  ];

  const rightNodes: NodeProps[] = [
    { icon: FileText,   label: "PermiOne",  color: "#2563EB", bg: "#EFF6FF", nodeRef: permioRef, delay: 0.1, tooltip: "Cloud-agnostic permitting platform — digital plan review, mobile inspections, citizen portals." },
    { icon: Shield,     label: "FortiMind", color: "#7C3AED", bg: "#F5F3FF", nodeRef: fortiRef,  delay: 0.2, tooltip: "AI-powered regulatory intelligence — real-time compliance monitoring across all jurisdictions." },
    { icon: HeartPulse, label: "CelerKost", color: "#0F766E", bg: "#F0FDFA", nodeRef: celerRef,  delay: 0.3, tooltip: "Medicaid cost reporting with fraud detection, anomaly analysis, and audit trail management." },
    { icon: Globe2,     label: "Travo AI",  color: "#0369A1", bg: "#F0F9FF", nodeRef: travoRef,  delay: 0.4, tooltip: "AI accessibility and transit platform — making government services reachable for everyone." },
  ];

  const leftRefs = [dcraRef, dohRef, ddotRef, doesRef];
  const rightRefs = [permioRef, fortiRef, celerRef, travoRef];
  const beamDelays = [0, 0.8, 1.6, 2.4];

  return (
    <section className="py-28 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] bg-[#F0F6FF] border border-[#2563EB]/20 px-4 py-2 rounded-full inline-block mb-6">
            How It Works
          </span>
          <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-[#0F172A] tracking-tight">
            Agencies. Connected. Delivered.
          </h2>
          <p className="mt-4 text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
            CODICE sits at the center — routing technology, compliance, and data
            between Washington DC&apos;s agencies and the platforms that power them.
          </p>
        </motion.div>

        {/* Mobile fallback — simple two-column grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {[...leftNodes, ...rightNodes].map((n) => (
            <div key={n.label} className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-2xl p-4">
              <div className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0" style={{ backgroundColor: n.bg, borderColor: n.color + "30" }}>
                <n.icon size={18} style={{ color: n.color }} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">{n.label}</span>
            </div>
          ))}
        </div>

        {/* Desktop beam diagram */}
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="relative hidden md:flex items-center justify-between gap-8 min-h-[340px]"
        >
          {/* SVG beams layer */}
          {leftRefs.map((ref, i) => (
            <AnimatedBeam
              key={`left-${i}`}
              containerRef={containerRef}
              fromRef={ref}
              toRef={codiceRef}
              curvature={i % 2 === 0 ? -30 : 30}
              duration={3}
              delay={beamDelays[i]}
              gradientStartColor="#2563EB"
              gradientStopColor="#3B82F6"
              pathColor="#E2E8F0"
              pathOpacity={0.5}
            />
          ))}
          {rightRefs.map((ref, i) => (
            <AnimatedBeam
              key={`right-${i}`}
              containerRef={containerRef}
              fromRef={codiceRef}
              toRef={ref}
              curvature={i % 2 === 0 ? -30 : 30}
              duration={3}
              delay={beamDelays[i] + 0.4}
              gradientStartColor="#3B82F6"
              gradientStopColor="#60A5FA"
              pathColor="#E2E8F0"
              pathOpacity={0.5}
              reverse
            />
          ))}

          {/* Left column — agencies */}
          <div className="flex flex-col gap-8 shrink-0">
            {leftNodes.map((n) => (
              <Node key={n.label} {...n} />
            ))}
          </div>

          {/* Center — CODICE hub */}
          <motion.div
            ref={codiceRef as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: "backOut" }}
            className="relative flex flex-col items-center gap-3 z-10 shrink-0"
          >
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#2563EB]/20 animate-ping scale-150 pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-[#2563EB]/10 scale-[2] pointer-events-none" />

            <div className="w-20 h-20 rounded-full bg-[#2563EB] border-4 border-white flex items-center justify-center shadow-[0_8px_40px_rgba(37,99,235,0.35)] relative z-10">
              <Cpu size={30} className="text-white" />
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-2 shadow-[0_4px_16px_rgba(15,23,42,0.06)] text-center">
              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-[#2563EB]">CODICE</p>
              <p className="text-[8px] text-[#94A3B8] tracking-widest uppercase mt-0.5">Technology Hub</p>
            </div>
          </motion.div>

          {/* Right column — products */}
          <div className="flex flex-col gap-8 shrink-0">
            {rightNodes.map((n) => (
              <Node key={n.label} {...n} />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-[11px] font-bold tracking-[0.2em] uppercase text-[#94A3B8] mt-12"
        >
          12+ DC agencies · 8 proprietary platforms · 16 years of continuous delivery
        </motion.p>
      </div>
    </section>
  );
}
