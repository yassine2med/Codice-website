"use client";

import { caseStudies } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

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
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as const 
    } 
  },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Case Studies"
          title="Mission-Critical Outcomes"
          subtitle="Real results for real agencies. Outcomes that speak louder than promises."
        />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {caseStudies.slice(0, 4).map((study, i) => (
            <motion.div key={i} variants={item}>
              <SpotlightCard 
                className="h-full group flex flex-col p-8 md:p-10 border-l-4 border-l-blue-600/30 hover:border-l-blue-500 transition-all duration-500 bg-slate-900/40 backdrop-blur-md"
                spotlightColor="rgba(37, 99, 235, 0.08)"
              >
                <div className="flex flex-col h-full">
                  <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500 mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                    {study.product}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {study.client}
                  </h3>
                  
                  <div className="text-4xl md:text-5xl font-black tracking-tighter mb-8 bg-linear-to-br from-white via-slate-200 to-blue-400 bg-clip-text text-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                    {study.metric}
                  </div>
                  
                  <div className="mt-auto space-y-6 pt-6 border-t border-white/5">
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">The Challenge</div>
                      <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Strategic Outcome</div>
                      <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-16">
          <Link
            href="/case-studies"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase relative z-10">
              View All Mission Profiles
            </span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300 text-blue-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
