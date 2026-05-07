"use client";

import { caseStudies } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 max-w-7xl mx-auto">
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {caseStudies.slice(0, 4).map((study, i) => (
          <motion.div 
            key={i} 
            variants={item}
            className="group bg-[#111827] border border-[#1E293B] border-l-4 border-l-[#2563EB] rounded-2xl p-10 hover:border-[#2563EB] hover:shadow-[0_0_50px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-4">
              {study.product}
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 transition-colors">
              {study.client}
            </h3>
            <div className="text-4xl md:text-5xl font-bold font-mono tracking-tighter mb-8 bg-linear-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
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

      <div className="flex justify-center mt-12">
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest uppercase text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1E293B] hover:border-[#2563EB]/50 bg-[#111827] hover:bg-[#0D1F3C] px-6 py-3 rounded-full transition-all duration-300"
        >
          View All Case Studies
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 text-[#2563EB]" />
        </Link>
      </div>
    </section>
  );
}
