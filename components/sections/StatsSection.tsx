"use client";

import { stats } from "@/data/codice";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section id="stats" className="py-24 px-6 bg-[#0A1628] border-y border-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center gap-4 text-center px-4"
            >
              {/* Blue Glow Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#2563EB]/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="text-[clamp(48px,8vw,96px)] font-bold text-[#F8FAFC] font-mono tracking-tighter leading-none relative z-10">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <span className="text-xs md:text-sm font-bold text-[#2563EB] tracking-[0.2em] uppercase max-w-[140px] relative z-10">
                {stat.label}
              </span>

              {/* Vertical Divider (Desktop Only) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-gradient-to-b from-transparent via-[#1E293B] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
