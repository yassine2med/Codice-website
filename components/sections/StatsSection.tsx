import { stats } from "@/data/codice";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export default function StatsSection() {
  return (
    <div className="py-24 px-6 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <div className="text-6xl md:text-7xl font-bold text-[#F8FAFC] font-[family-name:var(--font-dm-mono)] leading-none">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-sm text-[#64748B] tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
