import { techStack } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function TechStack() {
  const doubled = [...techStack, ...techStack];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Technology"
        title="Built on What You Trust"
        subtitle="We work across the full modern stack — cloud, web, data, and enterprise systems."
      />
      <div className="relative overflow-hidden">
        <div className="flex gap-8 animate-[marquee_20s_linear_infinite]">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-[#111827] border border-[#1E293B] rounded-lg px-6 py-3 text-sm font-medium text-[#64748B] hover:text-[#F8FAFC] hover:border-[#2563EB] transition-colors cursor-default whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
