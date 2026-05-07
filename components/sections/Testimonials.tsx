"use client";

import { testimonials } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24 px-6 bg-[#060E1A] border-y border-[#1E293B] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Client Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by government agencies across Washington DC for over 16 years."
        />

        <div className="relative">
          {/* Quote background */}
          <Quote
            size={180}
            className="absolute -top-6 -left-6 text-[#1E293B] pointer-events-none"
            fill="currentColor"
            strokeWidth={0}
          />

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 bg-[#111827] border border-[#1E293B] rounded-2xl p-10 md:p-14 hover:border-[#2563EB]/30 transition-colors duration-300"
          >
            <p className="text-xl md:text-2xl text-[#CBD5E1] leading-relaxed italic font-medium mb-10">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-5">
              {t.photo && (
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#1E293B] shrink-0">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div>
                <p className="text-base font-bold text-[#F8FAFC]">{t.name}</p>
                <p className="text-sm text-[#64748B] mt-0.5">
                  {t.title}
                  <span className="text-[#2563EB] mx-2">·</span>
                  {t.company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-[#2563EB] w-6"
                    : "bg-[#1E293B] hover:bg-[#334155]"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
