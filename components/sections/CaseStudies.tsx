"use client";

import { caseStudies } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function CaseStudies({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="case-studies" className="py-24 px-6 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {showHeader && (
          <SectionHeader
            label="Case Studies"
            title="Mission-Critical Outcomes"
            subtitle="Real results for real agencies. Outcomes that speak louder than promises."
          />
        )}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {caseStudies.slice(0, 4).map((study, i) => (
            <motion.div key={i} variants={item}>
              <SpotlightCard
                className="h-full group flex flex-col p-8 md:p-10 border-l-4 border-l-[#2563EB]/25 hover:border-l-[#2563EB] transition-all duration-500 shadow-[0_2px_12px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.10)]"
                spotlightColor="rgba(37, 99, 235, 0.05)"
              >
                <div className="flex flex-col h-full">
                  <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-5 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full shadow-[0_0_6px_rgba(37,99,235,0.6)]" />
                    {study.product}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                    {study.client}
                  </h3>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.4, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                    className="text-4xl md:text-5xl font-black tracking-tighter mb-8 bg-linear-to-br from-[#0F172A] via-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent group-hover:opacity-100 transition-opacity font-[family-name:var(--font-dm-mono)]"
                  >
                    {study.metric}
                  </motion.div>

                  <div className="mt-auto space-y-5 pt-6 border-t border-[#F1F5F9] group-hover:border-[#2563EB]/10 transition-colors">
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold uppercase text-[#94A3B8] tracking-wider">The Challenge</div>
                      <p className="text-sm md:text-base text-[#64748B] leading-relaxed group-hover:text-[#475569] transition-colors">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold uppercase text-[#94A3B8] tracking-wider">Strategic Outcome</div>
                      <p className="text-sm md:text-base text-[#64748B] leading-relaxed group-hover:text-[#475569] transition-colors">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-14">
          <Link
            href="/case-studies"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:border-[#2563EB]/40 hover:shadow-[0_4px_16px_rgba(37,99,235,0.10)] transition-all duration-300"
          >
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
              View All Case Studies
            </span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300 text-[#2563EB]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
