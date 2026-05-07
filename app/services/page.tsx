"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { services, stats } from "@/data/codice";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F8FAFC] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: `linear-gradient(to right,#1E293B 1px,transparent 1px),linear-gradient(to bottom,#1E293B 1px,transparent 1px)`,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%,#000 40%,transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%,#000 40%,transparent 100%)",
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563EB]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl">
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-6">
              Our Expertise
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(44px,7vw,86px)] font-bold leading-[1.02] tracking-tight mb-8">
              Eight Services.<br />One Mission.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#64748B] max-w-2xl leading-relaxed mb-12">
              End-to-end technology solutions purpose-built for government — from custom software and AI compliance tools to cloud migration and workforce management.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-10 gap-y-4">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-[#2563EB]/50 pl-4">
                  <p className="font-mono text-2xl font-bold text-white">{s.value}{s.suffix}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services full grid */}
      <section className="py-24 px-6 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group bg-[#111827] border border-[#1E293B] rounded-3xl p-8 hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A1628] border border-[#1E293B] flex items-center justify-center p-3.5 shrink-0 group-hover:border-[#2563EB]/40 transition-colors">
                    <div className="relative w-full h-full">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        sizes="36px"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#F8FAFC] mb-2 leading-snug group-hover:text-[#2563EB] transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-[#64748B] text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 mb-8 flex-1">
                  {service.features?.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={14} className="text-[#2563EB] mt-0.5 shrink-0" />
                      <p className="text-sm text-[#94A3B8] leading-snug">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[#1E293B]">
                  <div className="flex flex-wrap gap-2">
                    {service.techStack?.slice(0, 2).map((tech) => (
                      <span key={tech} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-[#0A1628] border border-[#1E293B] text-[#475569]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2563EB] hover:text-[#3B82F6] transition-colors group/link"
                  >
                    Details
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why CODICE for services */}
      <section className="py-24 px-6 bg-[#111827] border-y border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-4">Why CODICE</p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight mb-4">Built Different for Government</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              16 years of DC government experience means we know the compliance requirements, procurement realities, and operational constraints that commercial vendors overlook.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "100% Client Retention", desc: "Every agency we've served has stayed. Our track record speaks louder than any proposal." },
              { label: "GSA Schedule Holder", desc: "Simplified procurement for federal and local agencies — no lengthy contracting hurdles." },
              { label: "8 Proprietary Platforms", desc: "We don't just consult — we build and operate production software that agencies depend on daily." },
            ].map((item) => (
              <div key={item.label} className="p-8 rounded-2xl bg-[#0A1628] border border-[#1E293B] hover:border-[#2563EB]/40 transition-colors">
                <p className="text-lg font-bold text-[#2563EB] mb-3">{item.label}</p>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
