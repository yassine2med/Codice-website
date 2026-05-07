"use client";

import { markets } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as any } },
};

export default function MarketsGrid() {
  return (
    <section id="markets" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Sectors"
        title="Built for Every Corner of Government"
        subtitle="From justice to healthcare to infrastructure — we know your mission."
      />
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {markets.map((market) => (
          <motion.div
            key={market.id}
            variants={item}
            className="group bg-[#111827] border border-[#1E293B] rounded-2xl p-6 flex items-center gap-6 hover:border-[#2563EB] hover:bg-[#0A1628] transition-all duration-300 cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0A1628] border border-[#1E293B] flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-[#2563EB]/50 transition-all">
              {market.icon}
            </div>
            <span className="text-base font-bold text-[#F8FAFC] group-hover:text-[#2563EB] transition-colors">
              {market.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
