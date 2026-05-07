"use client";

import { markets } from "@/data/codice";
import { motion } from "framer-motion";
import { Building2, HeartPulse, Bus, Shield, Users, Hammer, GraduationCap, Scale, DollarSign, Leaf, Users2, type LucideIcon } from "lucide-react";

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
    <section id="markets" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-4 text-center md:text-left">Sectors We Serve</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold text-[#F8FAFC] tracking-tight leading-tight max-w-2xl text-center md:text-left">
            Built for Every Corner of Government
          </h2>
          <p className="text-[#64748B] text-lg max-w-sm text-center md:text-left">
            From local DC agencies to federal health departments, our solutions scale to meet the mission.
          </p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {markets.map((market) => (
          <motion.div
            key={market.id}
            variants={item}
            className="group relative p-8 rounded-[32px] bg-[#111827] border border-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-500 overflow-hidden"
          >
            {/* Hover background effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-3xl -mr-16 -mt-16 group-hover:bg-[#2563EB]/10 transition-all duration-500" />
            
            <div className="relative z-10">
              {iconMap[market.icon] && (() => { const Icon = iconMap[market.icon]; return <Icon size={22} className="text-[#2563EB] mb-5" />; })()}
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-4 group-hover:text-[#2563EB] transition-colors">
                {market.name}
              </h3>
              
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                {market.description}
              </p>

              <div className="pt-6 border-t border-[#1E293B] group-hover:border-[#2563EB]/20 transition-colors">
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#475569] mb-3">Mission Impact</p>
                <p className="text-xs text-[#64748B] leading-relaxed italic">
                  &ldquo;{market.details}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
