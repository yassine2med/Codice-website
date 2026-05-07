"use client";

import { stats } from "@/data/codice";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";

const descriptions: Record<string, string> = {
  "Years of Experience": "Serving DC government since 2009",
  "Government Agencies": "Active client relationships",
  "Proprietary Products": "Purpose-built platforms",
  "Client Retention": "Every client, every year",
};

export default function StatsSection() {
  return (
    <section id="stats" className="py-20 px-6 bg-[#060E1A] border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-14">
          By the Numbers
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative flex flex-col items-center gap-2 text-center px-6"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-[#2563EB]/5 blur-[60px] rounded-full pointer-events-none" />

              <div className="text-[clamp(44px,7vw,80px)] font-bold text-[#F8FAFC] font-mono tracking-tighter leading-none relative z-10 tabular-nums">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <span className="text-[11px] font-bold text-[#2563EB] tracking-[0.2em] uppercase relative z-10">
                {stat.label}
              </span>

              <span className="text-xs text-[#475569] relative z-10 mt-0.5">
                {descriptions[stat.label]}
              </span>

              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px bg-gradient-to-b from-transparent via-[#1E293B] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
