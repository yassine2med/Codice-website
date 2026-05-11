"use client";

import { stats } from "@/data/codice";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";

const descriptions: Record<string, string> = {
  "Years of Excellence": "Serving DC government since 2009",
  "Government Agencies": "Active client relationships",
  "Proprietary Products": "Purpose-built platforms",
  "Client Retention": "Every client, every year",
};

export default function StatsSection() {
  return (
    <section id="stats" className="py-14 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[10px] font-bold tracking-[0.3em] uppercase mb-14" style={{ color: "#EA580C" }}>
          By the Numbers
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center gap-2 text-center px-6"
            >
              <div
                className="text-[clamp(44px,7vw,80px)] font-bold text-[#0F172A] font-(family-name:--font-dm-mono) tracking-tighter leading-none relative z-10 tabular-nums"
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <span className="text-[11px] font-bold text-brand-primary tracking-[0.2em] uppercase relative z-10">
                {stat.label}
              </span>

              <span className="text-xs text-[#94A3B8] relative z-10 mt-0.5">
                {descriptions[stat.label]}
              </span>

              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-linear-to-b from-transparent via-[#E2E8F0] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
