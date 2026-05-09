"use client";

import { markets } from "@/data/codice";
import { motion } from "framer-motion";
import { Building2, HeartPulse, Bus, Shield, Users, Hammer, GraduationCap, Scale, DollarSign, Leaf, Users2, type LucideIcon } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";

const iconMap: Record<string, LucideIcon> = {
  Building2, HeartPulse, Bus, Shield, Users, Hammer, GraduationCap, Scale, DollarSign, Leaf, Users2,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function MarketsGrid() {
  return (
    <section id="markets" className="py-24 px-6 max-w-7xl mx-auto relative">
      <SectionHeader
        label="Sectors We Serve"
        title="Built for Every Corner of Government"
        subtitle="From local DC agencies to federal health departments, our solutions scale to meet the mission with absolute precision."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {markets.map((market) => {
          const Icon = iconMap[market.icon] || Building2;
          return (
            <motion.div key={market.id} variants={item} className="group">
              <TiltCard intensity={4} className="h-full">
              <SpotlightCard className="p-8 h-full flex flex-col hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.10)] transition-all duration-500 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <div className="relative z-10 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300">
                    <Icon size={22} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors">
                    {market.name}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                    {market.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#F1F5F9] group-hover:border-[#2563EB]/15 transition-colors mt-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <p className="text-[9px] font-bold tracking-widest uppercase text-[#94A3B8]">Mission Impact</p>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed italic">
                    &ldquo;{market.details}&rdquo;
                  </p>
                </div>
              </SpotlightCard>
              </TiltCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
