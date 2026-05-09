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
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
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
    <main className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[900px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] bg-[#F0F6FF] border border-[#2563EB]/20 px-4 py-2 rounded-full mb-8 shadow-sm">
              Government Sectors
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-[clamp(48px,8vw,92px)] font-bold leading-[0.95] tracking-tighter mb-8 text-[#0F172A]">
              Impact Across<br />
              <span className="text-gradient">Government.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              From local DC agencies to federal health departments — CODICE delivers technology that scales to meet the mission across every corner of government.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sector highlight stat cards */}
      <section className="py-16 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3"
          >
            {sectorHighlights.map(({ Icon, label, stat }) => (
              <motion.div key={label} variants={fadeUp}>
                <SpotlightCard className="group p-5 rounded-2xl hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col gap-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300">
                    <Icon size={18} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-dm-mono)] text-xl font-bold text-[#0F172A] mb-1">{stat}</p>
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

      {/* Case studies */}
      <div className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <CaseStudies />
      </div>

      <CTABanner />
      <Footer />
    </main>
  );
}
