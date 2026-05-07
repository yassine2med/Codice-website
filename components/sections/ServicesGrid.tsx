"use client";

import { services } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Our Expertise"
        title="Government Technology Services"
        subtitle="End-to-end solutions purpose-built for the public sector — from custom software to cloud migration."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={card}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group bg-[#111827] border border-[#1E293B] rounded-2xl p-7 flex flex-col hover:border-[#2563EB]/50 hover:shadow-[0_0_32px_rgba(37,99,235,0.12)] transition-colors duration-300"
          >
            {/* Icon container */}
            <div className="w-11 h-11 mb-6 rounded-xl bg-[#0A1628] border border-[#1E293B] flex items-center justify-center p-2.5 group-hover:border-[#2563EB]/40 transition-colors">
              <div className="relative w-full h-full">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  sizes="28px"
                />
              </div>
            </div>

            <h3 className="text-base font-bold text-[#F8FAFC] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-[#64748B] text-sm leading-relaxed mb-6 grow">
              {service.description}
            </p>

            <Link
              href={service.slug}
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#3B82F6] transition-colors mt-auto group/link"
            >
              Learn more
              <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
