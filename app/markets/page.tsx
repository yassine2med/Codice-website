"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import MarketsGrid from "@/components/sections/MarketsGrid";
import CaseStudies from "@/components/sections/CaseStudies";
import CTABanner from "@/components/sections/CTABanner";
import { motion } from "framer-motion";
import { Building2, HeartPulse, Bus, Shield, Users, Hammer } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const sectorHighlights = [
  {
    Icon: Building2,
    label: "Government Agencies",
    stat: "12+",
    desc: "DC agencies served across permits, finance, workforce, and public safety.",
  },
  {
    Icon: HeartPulse,
    label: "Health IT",
    stat: "3",
    desc: "Healthcare platforms operating across Medicaid, transitions, and patient finance.",
  },
  {
    Icon: Bus,
    label: "Transportation",
    stat: "1M+",
    desc: "Permit applications processed through PermiOne for DC transportation infrastructure.",
  },
  {
    Icon: Shield,
    label: "Public Safety",
    stat: "CJCC",
    desc: "Supporting the Criminal Justice Coordinating Council with case management technology.",
  },
  {
    Icon: Users,
    label: "Unemployment Insurance",
    stat: "2024",
    desc: "Modernized DC DOES UI benefits system, serving thousands of DC residents.",
  },
  {
    Icon: Hammer,
    label: "Facilities",
    stat: "DOB",
    desc: "End-to-end permit modernization for DC's Department of Buildings.",
  },
];

export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F8FAFC] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: `linear-gradient(to right,#1E293B 1px,transparent 1px),linear-gradient(to bottom,#1E293B 1px,transparent 1px)`,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%,#000 40%,transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%,#000 40%,transparent 100%)",
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563EB]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-6">
              Sectors We Serve
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(44px,7vw,86px)] font-bold leading-[1.02] tracking-tight mb-8">
              Impact Across Government
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              From local DC agencies to federal health departments — CODICE delivers technology that scales to meet the mission across every corner of government.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sector highlight stat cards */}
      <section className="py-16 px-6 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {sectorHighlights.map(({ Icon, label, stat, desc }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="group p-6 rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
                  <Icon size={18} className="text-[#2563EB]" />
                </div>
                <p className="font-mono text-2xl font-bold text-white">{stat}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB]">{label}</p>
                <p className="text-xs text-[#475569] leading-relaxed hidden lg:block">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full markets grid */}
      <MarketsGrid />

      {/* Case studies in context */}
      <div className="bg-[#111827] border-t border-[#1E293B]">
        <CaseStudies />
      </div>

      <CTABanner />
      <Footer />
    </main>
  );
}
