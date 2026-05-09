"use client";

import { testimonials } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

function randomRotation(seed: number) {
  const vals = [-6, -3, 2, 5, -8, 4];
  return vals[seed % vals.length];
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [go]);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-28 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Client Testimonials"
          title="Trusted by DC Government"
          subtitle="Real feedback from the agency leaders who rely on CODICE every day."
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Stacked photo stage */}
          <div className="relative w-[220px] h-[280px] shrink-0">
            {testimonials.map((item, idx) => {
              const offset = (idx - active + testimonials.length) % testimonials.length;
              const isActive = offset === 0;
              const isNext = offset === 1;
              const isPrev = offset === testimonials.length - 1;

              if (!isActive && !isNext && !isPrev) return null;

              return (
                <motion.div
                  key={item.name}
                  className="absolute inset-0 rounded-2xl overflow-hidden border-2 cursor-pointer"
                  initial={false}
                  animate={{
                    rotate: isActive ? 0 : isNext ? randomRotation(idx + 1) : randomRotation(idx - 1),
                    scale: isActive ? 1 : 0.9,
                    zIndex: isActive ? 3 : isNext ? 2 : 1,
                    x: isActive ? 0 : isNext ? 20 : -20,
                    y: isActive ? 0 : 8,
                    opacity: isActive ? 1 : 0.5,
                    borderColor: isActive ? "rgba(37,99,235,0.4)" : "rgba(226,232,240,1)",
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => {
                    const dir = offset <= testimonials.length / 2 ? 1 : -1;
                    go(dir);
                  }}
                >
                  {item.photo ? (
                    <Image
                      src={item.photo}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#F0F6FF] flex items-center justify-center">
                      <span className="text-5xl font-bold text-[#2563EB]">
                        {item.name[0]}
                      </span>
                    </div>
                  )}

                  {/* Active glow ring */}
                  {isActive && (
                    <motion.div
                      layoutId="photoRing"
                      className="absolute inset-0 rounded-2xl border-2 border-[#2563EB]/50 pointer-events-none shadow-[0_0_32px_rgba(37,99,235,0.18)]"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Quote + attribution */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Word-by-word reveal */}
                <div className="mb-8">
                  <span className="text-4xl text-[#2563EB]/20 font-serif leading-none select-none">&ldquo;</span>
                  <p className="text-xl md:text-2xl text-[#334155] leading-relaxed font-medium mt-1">
                    {t.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, filter: "blur(4px)", y: 4 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ delay: i * 0.025, duration: 0.35, ease: "easeOut" }}
                        className="inline-block mr-[0.25em]"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-linear-to-r from-[#2563EB]/20 to-transparent" />
                  <div className="text-right">
                    <p className="font-bold text-[#0F172A] text-sm">{t.name}</p>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      {t.title}
                      <span className="text-[#2563EB] mx-1.5">·</span>
                      {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-full border border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:shadow-[0_4px_16px_rgba(37,99,235,0.1)] flex items-center justify-center text-[#64748B] hover:text-[#2563EB] transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "bg-[#2563EB] w-6" : "bg-[#CBD5E1] w-1.5 hover:bg-[#94A3B8]"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                className="w-10 h-10 rounded-full border border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:shadow-[0_4px_16px_rgba(37,99,235,0.1)] flex items-center justify-center text-[#64748B] hover:text-[#2563EB] transition-all"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
