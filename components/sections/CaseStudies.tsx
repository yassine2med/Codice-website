"use client";

import { caseStudies } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Case Studies"
        title="Mission-Critical Outcomes"
        subtitle="Real results for real agencies. Outcomes that speak louder than promises."
      />
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {caseStudies.map((study, i) => (
          <motion.div 
            key={i} 
            variants={item}
            className="group bg-[#111827] border border-[#1E293B] border-l-4 border-l-[#2563EB] rounded-2xl p-10 hover:bg-[#0A1628] transition-all duration-300"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-4">
              {study.product}
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-white transition-colors">
              {study.client}
            </h3>
            <div className="text-4xl md:text-5xl font-bold text-[#F8FAFC] font-mono tracking-tighter mb-8 bg-gradient-to-r from-white to-[#64748B] bg-clip-text text-transparent">
              {study.metric}
            </div>
            
            <div className="space-y-4">
              <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                <strong className="text-[#F8FAFC] font-semibold">Challenge:</strong> {study.challenge}
              </p>
              <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                <strong className="text-[#F8FAFC] font-semibold">Solution:</strong> {study.solution}
              </p>
              <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                <strong className="text-[#F8FAFC] font-semibold">Outcome:</strong> {study.outcome}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
