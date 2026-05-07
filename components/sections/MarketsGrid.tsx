"use client";

import { markets } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import {
  Landmark,
  ShieldCheck,
  GraduationCap,
  Leaf,
  Train,
  CreditCard,
  Cloud,
  Users,
  Scale,
  HeartPulse,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  gov: Landmark,
  safety: ShieldCheck,
  education: GraduationCap,
  environment: Leaf,
  transport: Train,
  finance: CreditCard,
  cloud: Cloud,
  hr: Users,
  legal: Scale,
  healthcare: HeartPulse,
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
      <SectionHeader
        label="Sectors We Serve"
        title="Built for Every Corner of Government"
        subtitle="From justice systems to healthcare to infrastructure — we know your mission because we've lived it."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
      >
        {markets.map((market) => {
          const Icon = iconMap[market.id] ?? Landmark;
          return (
            <motion.div
              key={market.id}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-[#111827] border border-[#1E293B] rounded-2xl p-6 flex flex-col items-start gap-4 hover:border-[#2563EB]/50 hover:shadow-[0_0_24px_rgba(37,99,235,0.1)] transition-colors duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0A1628] border border-[#1E293B] flex items-center justify-center group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/10 transition-all duration-300">
                <Icon size={18} className="text-[#475569] group-hover:text-[#2563EB] transition-colors duration-300" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#2563EB] transition-colors duration-300 leading-snug mb-1">
                  {market.name}
                </p>
                <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                  {market.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
