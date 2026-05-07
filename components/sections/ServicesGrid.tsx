"use client";

import { services } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Our Expertise"
        title="Government Technology Services"
        subtitle="End-to-end technology solutions purpose-built for the public sector."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <GlowCard key={service.id} className="flex flex-col group">
            <div className="w-12 h-12 mb-5 relative">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                sizes="48px"
              />
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors">
              {service.title}
            </h3>
            <p className="text-[#64748B] text-sm md:text-base leading-relaxed mb-6 grow">
              {service.description}
            </p>
            <a
              href={service.slug}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#3B82F6] transition-colors mt-auto"
            >
              Learn more <ArrowRight size={14} />
            </a>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
