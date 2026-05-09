"use client";

import { services } from "@/data/codice";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import { BorderBeam } from "@/components/ui/BorderBeam";

/**
 * ServicesBento — asymmetric bento grid for the homepage services section.
 *
 * Layout (4-col grid):
 *   [  Featured (2×2)  ] [ Normal ] [ Normal ]
 *   [  Featured (2×2)  ] [ Normal ] [ Normal ]
 *   [ Normal ] [ Normal ] [ Wide (2×1)        ]
 */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// Bento slot config: which services get which sizes
// index 0 → featured hero (2-col, 2-row); indices 1–2 → stack right; 3–6 → 4-wide row
// indices 3–4 → normal; index 5 → wide (2-col); index 6–7 → normal
type SlotSize = "featured" | "wide" | "normal";
const SLOT_SIZES: SlotSize[] = [
  "featured", // Custom Software — hero
  "normal",   // Permit System
  "normal",   // Cloud & Infrastructure
  "normal",   // Cybersecurity
  "normal",   // Data Analytics
  "wide",     // Health IT — wide
  "normal",   // Logistics
  "normal",   // Program Management
];

interface CardProps {
  service: (typeof services)[number];
  size: SlotSize;
  delay?: number;
}

function FeaturedCard({ service, delay = 0 }: { service: CardProps["service"]; delay?: number }) {
  return (
    <motion.div {...fadeUp(delay)} className="col-span-2 row-span-2">
      <TiltCard intensity={4} className="h-full">
        <div className="relative h-full min-h-[380px] bg-[#0F172A] rounded-3xl overflow-hidden border border-[#1E293B] flex flex-col p-10 hover:border-[#2563EB]/40 transition-all duration-300 shadow-[0_4px_32px_rgba(15,23,42,0.15)] group">
          <BorderBeam duration={10} colorFrom="#2563EB" colorTo="#60A5FA" bg="#0F172A" />

          {/* Background glow */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2563EB]/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#3B82F6]/5 blur-[60px] rounded-full pointer-events-none" />

          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/15 border border-[#2563EB]/30 flex items-center justify-center p-3 mb-8 relative z-10">
            <div className="relative w-full h-full">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-contain brightness-0 invert"
                sizes="32px"
              />
            </div>
          </div>

          {/* Category */}
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-4 relative z-10">
            Flagship Service
          </p>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight relative z-10 group-hover:text-[#60A5FA] transition-colors duration-300">
            {service.title}
          </h3>

          {/* Desc */}
          <p className="text-[#64748B] text-sm leading-relaxed mb-8 flex-1 relative z-10">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-col gap-2 mb-8 relative z-10">
            {service.features?.slice(0, 3).map((f) => (
              <div key={f} className="flex items-center gap-2.5">
                <CheckCircle2 size={13} className="text-[#2563EB] shrink-0" />
                <span className="text-[12px] text-[#94A3B8]">{f}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#60A5FA] transition-colors group/link relative z-10 mt-auto"
          >
            Learn More <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </TiltCard>
    </motion.div>
  );
}

function WideCard({ service, delay = 0 }: { service: CardProps["service"]; delay?: number }) {
  return (
    <motion.div {...fadeUp(delay)} className="col-span-2">
      <TiltCard intensity={3} className="h-full">
        <div className="group relative h-full bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden p-8 hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.10)] transition-all duration-300 flex items-center gap-8 shadow-[0_2px_8px_rgba(15,23,42,0.05)]">

          {/* Left: icon + meta */}
          <div className="shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center p-3 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300">
              <div className="relative w-full h-full">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  style={{ filter: "saturate(0) opacity(0.5)" }}
                  sizes="32px"
                />
              </div>
            </div>
          </div>

          {/* Middle: content */}
          <div className="flex-1 min-w-0">
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-1.5">
              {service.features?.length ?? 0} Core Capabilities
            </p>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors duration-300 leading-snug">
              {service.title}
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed line-clamp-2">{service.description}</p>
          </div>

          {/* Right: CTA */}
          <Link
            href={`/services/${service.slug}`}
            className="shrink-0 inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#1D4ED8] transition-colors group/link"
          >
            <span className="hidden sm:inline">Explore</span>
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>

          {/* Accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#2563EB]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </TiltCard>
    </motion.div>
  );
}

function NormalCard({ service, delay = 0 }: { service: CardProps["service"]; delay?: number }) {
  return (
    <motion.div {...fadeUp(delay)}>
      <TiltCard intensity={6} className="h-full">
        <div className="group relative h-full bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden p-7 hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.10)] transition-all duration-300 flex flex-col shadow-[0_2px_8px_rgba(15,23,42,0.05)]">
          {/* Icon */}
          <div className="w-11 h-11 rounded-xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center p-2.5 mb-5 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300">
            <div className="relative w-full h-full">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                style={{ filter: "saturate(0) opacity(0.5)" }}
                sizes="24px"
              />
            </div>
          </div>

          <h3 className="text-base font-bold text-[#0F172A] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-[#64748B] text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
            {service.description}
          </p>

          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#1D4ED8] transition-colors group/link mt-auto"
          >
            Learn more
            <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function ServicesBento() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div {...fadeUp(0)} className="text-center mb-14">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-4">Our Expertise</p>
        <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-[#0F172A] tracking-tight">
          Government Technology Services
        </h2>
        <p className="mt-4 text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
          End-to-end solutions purpose-built for the public sector — from custom software to cloud migration.
        </p>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
        {services.map((service, i) => {
          const size = SLOT_SIZES[i] ?? "normal";
          const delay = Math.min(i * 0.06, 0.4);
          if (size === "featured") return <FeaturedCard key={service.id} service={service} delay={delay} />;
          if (size === "wide") return <WideCard key={service.id} service={service} delay={delay} />;
          return <NormalCard key={service.id} service={service} delay={delay} />;
        })}
      </div>
    </section>
  );
}
