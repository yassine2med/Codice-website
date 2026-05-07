"use client";

import { news } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } },
};

export default function NewsEvents() {
  return (
    <section id="news" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="News & Insights"
        title="Latest from CODICE"
      />
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {news.map((item_data, i) => (
          <motion.a
            key={i}
            variants={item}
            href={item_data.slug}
            className="group bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-[#2563EB]/50 hover:bg-[#0A1628] transition-all duration-300 block relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-[#2563EB]/10 transition-colors" />
            
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#64748B] mb-4">
              {new Date(item_data.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-4 group-hover:text-[#2563EB] transition-colors leading-tight">
              {item_data.title}
            </h3>
            <p className="text-[#64748B] text-sm md:text-base leading-relaxed mb-8">
              {item_data.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#2563EB]">
              Read more <ArrowRight size={14} />
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
