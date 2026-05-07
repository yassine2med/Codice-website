"use client";

import { stats } from "@/data/codice";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export default function StatsSection() {
  return (
    <section id="stats" className="py-32 px-6 bg-[#0A1628] border-y border-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative flex flex-col items-center gap-4 text-center px-4">
              {/* Blue Glow Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#2563EB]/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="text-6xl md:text-8xl font-bold text-[#F8FAFC] font-mono tracking-tighter leading-none relative z-10">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <span className="text-xs md:text-sm font-semibold text-[#64748B] tracking-[0.2em] uppercase max-w-[120px] relative z-10">
                {stat.label}
              </span>

              {/* Vertical Divider (Desktop Only) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px bg-gradient-to-b from-transparent via-[#1E293B] to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
