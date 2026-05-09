"use client";

import { techStack } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export default function TechStack() {
  const doubled = [...techStack, ...techStack, ...techStack];

  return (
    <section id="tech-stack" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionHeader
        label="Technology"
        title="Built on What You Trust"
        subtitle="We work across the full modern stack — cloud, web, data, and enterprise systems."
      />
      
      <div className="relative w-full">
        {/* Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-white via-white/80 to-transparent pointer-events-none md:block hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-white via-white/80 to-transparent pointer-events-none md:block hidden" />

        <motion.div 
          className="flex gap-6 whitespace-nowrap px-4"
          initial={{ x: 0 }}
          animate={{ x: "-33.333%" }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="shrink-0 bg-white border border-[#E2E8F0] rounded-2xl px-8 py-4 text-base font-bold text-[#64748B] hover:text-[#0F172A] hover:border-[#2563EB]/40 hover:shadow-[0_4px_16px_rgba(37,99,235,0.08)] transition-all cursor-default whitespace-nowrap shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

