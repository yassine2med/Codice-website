"use client";

import { markets } from "@/data/codice";
import { motion } from "framer-motion";
import { Building2, HeartPulse, Bus, Shield, Users, Hammer, GraduationCap, Scale, DollarSign, Leaf, Users2, type LucideIcon } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

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

import { SectionHeader } from "@/components/ui/SectionHeader";

export default function MarketsGrid() {
  return (
    <section id="markets" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {markets.map((market) => {
          const Icon = iconMap[market.icon] || Building2;
          return (
            <motion.div
              key={market.id}
              variants={item}
              className="group"
            >
              <SpotlightCard className="p-8 rounded-[2.5rem] glass-card hover:border-brand-primary/30 transition-all duration-500 overflow-hidden h-full flex flex-col shadow-xl">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl -mr-16 -mt-16 group-hover:w-48 group-hover:h-48 transition-all duration-500" />
                
                <div className="relative z-10 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                    <Icon size={24} className="text-brand-navy group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-primary transition-colors">
                    {market.name}
                  </h3>
                  
                  <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium">
                    {market.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-black/5 group-hover:border-brand-primary/20 transition-colors mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Mission Impact</p>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed italic font-medium">
                    &ldquo;{market.details}&rdquo;
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
