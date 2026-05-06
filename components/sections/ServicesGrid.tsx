import { services } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="What We Do"
        title="Government Technology Services"
        subtitle="End-to-end technology solutions purpose-built for the public sector."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <GlowCard key={service.id}>
            <h3 className="text-base font-semibold text-[#F8FAFC] mb-3 leading-snug">{service.title}</h3>
            <p className="text-sm text-[#64748B] leading-relaxed mb-4">{service.description}</p>
            <a
              href={service.slug}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#3B82F6] transition-colors"
            >
              Learn more <ArrowRight size={12} />
            </a>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
