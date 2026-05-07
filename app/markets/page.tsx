"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import MarketsGrid from "@/components/sections/MarketsGrid";
import CaseStudies from "@/components/sections/CaseStudies";
import CTABanner from "@/components/sections/CTABanner";
import { motion } from "framer-motion";
import { Building2, HeartPulse, Bus, Shield, Users, Hammer, GraduationCap, Scale, DollarSign } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const sectorHighlights = [
  { Icon: Building2, label: "Government", stat: "12+", desc: "DC agencies served across permits, finance, and public safety." },
  { Icon: HeartPulse, label: "Health IT", stat: "3", desc: "Healthcare platforms for Medicaid, transitions, and patient finance." },
  { Icon: GraduationCap, label: "Education", stat: "DCPS", desc: "Serving DC Public Schools with custom software and IT support." },
  { Icon: Bus, label: "Transportation", stat: "DDOT", desc: "PermiOne powers DC transportation permitting infrastructure." },
  { Icon: Shield, label: "Public Safety", stat: "CJCC", desc: "Case management for the Criminal Justice Coordinating Council." },
  { Icon: Scale, label: "Legal", stat: "OAG", desc: "FortiMind.ai powers regulatory research for the DC AG's office." },
  { Icon: Users, label: "Unemployment", stat: "DOES", desc: "Modernized DC UI Benefits System launched February 2024." },
  { Icon: Hammer, label: "Facilities", stat: "DOB", desc: "End-to-end permit modernization for DC's Department of Buildings." },
  { Icon: DollarSign, label: "Finance", stat: "PCI", desc: "Fraud-resistant payment processing and financial audit platforms." },
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
          <motion.div initial="hidden" animate="show" variants={stagger}>
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
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3"
          >
            {sectorHighlights.map(({ Icon, label, stat, desc }) => (
              <motion.div key={label} variants={fadeUp}>
                <SpotlightCard
                  className="group p-5 rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col gap-3 h-full"
                  spotlightColor="rgba(37, 99, 235, 0.05)"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
                    <Icon size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="font-mono text-xl font-bold text-white mb-1">{stat}</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#2563EB]">{label}</p>
                  </div>
                </SpotlightCard>
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
