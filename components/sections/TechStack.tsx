"use client";

import { techStack } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export default function TechStack() {
  const doubled = [...techStack, ...techStack, ...techStack];

  return (
    <section id="tech-stack" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionHeader
        label="Technology"
        title="Built on What You Trust"
        subtitle="We work across the full modern stack — cloud, web, data, and enterprise systems."
      />
      
      <div className="relative w-full">
        {/* Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-[#0A1628] to-transparent pointer-events-none md:block hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-[#0A1628] to-transparent pointer-events-none md:block hidden" />

        <motion.div 
          className="flex gap-6 whitespace-nowrap px-4"
          initial={{ x: 0 }}
          animate={{ x: "-33.333%" }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear" as any,
          }}
          whileHover={{ transition: { duration: 120 } }}
        >
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="shrink-0 bg-gray-50 border border-[#1E293B] rounded-2xl px-8 py-4 text-base font-bold text-[#64748B] hover:text-[#2563EB] hover:border-[#2563EB]/50 transition-all cursor-default whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
