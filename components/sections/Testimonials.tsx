"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Star } from "lucide-react";

const allTestimonials = [
  { quote: "CODICE transformed how DCRA handles permitting. What used to take weeks now takes hours. Their team understands government from the inside.", name: "Marcus Webb", title: "CIO", company: "DCRA", initials: "MW", color: "#2563EB" },
  { quote: "The HIPAA-compliant platform has been rock solid for three years. Zero incidents. The compliance team loves it.", name: "Dr. Priya Anand", title: "Deputy Director", company: "DC Dept. of Health", initials: "PA", color: "#0F766E" },
  { quote: "CODICE is the only vendor that delivered exactly what they promised, on time, every single time. Remarkable consistency.", name: "James Okafor", title: "Program Manager", company: "DDOT", initials: "JO", color: "#7C3AED" },
  { quote: "FortiMind cut our compliance review time by 60%. I genuinely don't know how we managed regulatory tracking before it.", name: "Sandra Liu", title: "Compliance Officer", company: "Office of the AG", initials: "SL", color: "#0369A1" },
  { quote: "They integrated with our legacy systems seamlessly — something three other vendors said was impossible.", name: "Robert Malone", title: "IT Director", company: "DOES", initials: "RM", color: "#16A34A" },
  { quote: "After 5 years, CODICE still feels like part of our internal team. That kind of partnership is rare in govtech.", name: "Angela Torres", title: "Chief of Staff", company: "DC Dept. of Human Services", initials: "AT", color: "#EA580C" },
  { quote: "The permitting portal launched ahead of schedule. Our citizens noticed the difference immediately — call volume dropped 40%.", name: "David Kim", title: "Director of IT", company: "DCOZ", initials: "DK", color: "#2563EB" },
  { quote: "CODICE's engineers are the best I've worked with in 20 years of government IT. They just get it.", name: "Renée Foster", title: "Operations Lead", company: "DMHHS", initials: "RF", color: "#7C3AED" },
  { quote: "We had a critical go-live in 6 weeks. Most vendors laughed. CODICE delivered with two days to spare.", name: "Thomas Grant", title: "Deputy CTO", company: "DC Office of the CTO", initials: "TG", color: "#0369A1" },
  { quote: "Their AI compliance tool flagged a regulatory gap our legal team missed. That single catch saved us from a major audit finding.", name: "Maria Santos", title: "General Counsel", company: "DC Housing Authority", initials: "MS", color: "#16A34A" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive(next);
  }, [active]);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setActive(i => (i + 1) % allTestimonials.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const t = allTestimonials[active];
  const prev = allTestimonials[(active - 1 + allTestimonials.length) % allTestimonials.length];
  const next = allTestimonials[(active + 1) % allTestimonials.length];

  return (
    <section id="testimonials" className="py-14 px-6 bg-white border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center text-[10px] font-bold tracking-[0.3em] uppercase mb-10" style={{ color: "#EA580C" }}
        >
          Client Testimonials
        </motion.p>

        {/* 3-card stage */}
        <div className="relative flex items-center justify-center gap-4 mb-8">

          {/* Prev card — ghost */}
          <motion.div
            key={`prev-${active}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => go((active - 1 + allTestimonials.length) % allTestimonials.length)}
            className="hidden md:flex w-56 shrink-0 rounded-2xl p-5 flex-col gap-3 cursor-pointer border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all duration-300 select-none"
            style={{ filter: "blur(0.5px)", opacity: 0.5 }}
          >
            <p className="text-[#64748B] text-xs leading-relaxed line-clamp-3">&ldquo;{prev.quote}&rdquo;</p>
            <div className="flex items-center gap-2 mt-auto pt-2 border-t border-[#F1F5F9]">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[8px] font-bold shrink-0" style={{ backgroundColor: prev.color }}>{prev.initials}</div>
              <p className="text-[10px] font-bold text-[#94A3B8] truncate">{prev.name}</p>
            </div>
          </motion.div>

          {/* Active card */}
          <div className="relative flex-1 max-w-xl rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #070D1A 0%, #0F172A 55%, #162035 100%)" }}>

            {/* Animated color glow */}
            <motion.div animate={{ backgroundColor: t.color }} transition={{ duration: 0.6 }}
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[90px] opacity-25 pointer-events-none" />
            <motion.div animate={{ backgroundColor: t.color }} transition={{ duration: 0.6 }}
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-[70px] opacity-10 pointer-events-none" />

            {/* Animated top border */}
            <motion.div
              animate={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 right-0 h-px"
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, y: direction * 24, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: direction * -24, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 p-7 md:p-9"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-current" style={{ color: t.color }} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/88 text-base md:text-lg leading-relaxed font-medium mb-7">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ backgroundColor: t.color, boxShadow: `0 0 16px ${t.color}60` }}
                      transition={{ duration: 0.4 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0 border-2 border-white/10"
                    >
                      {t.initials}
                    </motion.div>
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">{t.name}</p>
                      <p className="text-white/40 text-[11px] mt-0.5">{t.title} · {t.company}</p>
                    </div>
                  </div>

                  {/* Counter + progress */}
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-white/25 text-[9px] font-mono tracking-widest">
                      {String(active + 1).padStart(2, "0")} / {String(allTestimonials.length).padStart(2, "0")}
                    </span>
                    <div className="w-20 h-[2px] bg-white/8 rounded-full overflow-hidden">
                      <motion.div
                        key={active}
                        className="h-full rounded-full"
                        style={{ backgroundColor: t.color }}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4.5, ease: "linear" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next card — ghost */}
          <motion.div
            key={`next-${active}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => go((active + 1) % allTestimonials.length)}
            className="hidden md:flex w-56 shrink-0 rounded-2xl p-5 flex-col gap-3 cursor-pointer border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all duration-300 select-none"
            style={{ filter: "blur(0.5px)", opacity: 0.5 }}
          >
            <p className="text-[#64748B] text-xs leading-relaxed line-clamp-3">&ldquo;{next.quote}&rdquo;</p>
            <div className="flex items-center gap-2 mt-auto pt-2 border-t border-[#F1F5F9]">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[8px] font-bold shrink-0" style={{ backgroundColor: next.color }}>{next.initials}</div>
              <p className="text-[10px] font-bold text-[#94A3B8] truncate">{next.name}</p>
            </div>
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2">
          {allTestimonials.map((item, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Testimonial ${i + 1}`}>
              <motion.div
                animate={{ width: i === active ? 20 : 6, backgroundColor: i === active ? t.color : "#CBD5E1" }}
                transition={{ duration: 0.3 }}
                className="h-1.5 rounded-full"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
