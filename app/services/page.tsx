"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-48 pb-20 sm:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2563EB]/4 blur-[140px] rounded-full animate-pulse-slow" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-3 bg-[#F0F6FF] border border-[#2563EB]/20 px-4 py-2 rounded-full mb-8">
                <CheckCircle2 size={14} className="text-[#2563EB]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB]">Mission Critical Expertise</span>
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-[clamp(36px,8vw,88px)] font-extrabold tracking-tighter leading-[0.9] mb-8 text-[#0F172A]">
              Eight Services. <br />
              <span className="text-gradient">One Mission.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-[#64748B] leading-relaxed max-w-2xl mb-12">
              End-to-end technology solutions purpose-built for the public sector — from custom software and AI compliance to high-fidelity cloud infrastructure.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-14 gap-y-8 border-t border-[#E2E8F0] pt-12">
              {stats.map((s) => (
                <div key={s.label} className="group">
                  <p className="text-4xl font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors tracking-tighter mb-1 font-[family-name:var(--font-dm-mono)]">
                    {s.value}{s.suffix}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#94A3B8] group-hover:text-[#2563EB]/60 transition-colors">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-28 px-6 bg-[#F8FAFC] border-t border-[#E2E8F0]">
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
                className="group relative bg-white border border-[#E2E8F0] rounded-3xl p-10 hover:border-[#2563EB]/40 hover:shadow-[0_8px_40px_rgba(37,99,235,0.10)] transition-all duration-500 flex flex-col shadow-[0_2px_8px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-start gap-7 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center p-4 shrink-0 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-500">
                    <div className="relative w-full h-full">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
                        style={{ filter: "saturate(0) opacity(0.5)" }}
                        sizes="32px"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-[#64748B] text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 flex-1">
                  {service.features?.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                      <p className="text-sm font-medium text-[#475569]">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-7 border-t border-[#F1F5F9] mt-auto">
                  <div className="flex gap-2">
                    {service.techStack?.slice(0, 2).map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] font-bold tracking-widest uppercase text-[#94A3B8]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[#2563EB] font-bold text-xs tracking-[0.2em] uppercase group/link"
                  >
                    View Details <ArrowRight size={14} className="group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why CODICE Section */}
      <section className="py-28 px-6 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            label="The CODICE Difference"
            title="Engineered for Public Service"
            subtitle="16 years of delivery means we know the compliance, security, and operational realities of government that generic vendors overlook."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { label: "100% Agency Retention", desc: "Every agency partner has stayed with CODICE. Our track record is our strongest proposal." },
              { label: "GSA Schedule Authorized", desc: "Rapid procurement through simplified contracting vehicles for federal and local agencies." },
              { label: "Platform-First Delivery", desc: "We deploy proprietary high-fidelity platforms that give agencies total control and reliability." },
            ].map((item) => (
              <div key={item.label} className="p-10 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/30 hover:shadow-[0_4px_24px_rgba(37,99,235,0.08)] transition-all duration-300 group">
                <div className="w-1.5 h-12 bg-[#2563EB] mb-8 rounded-full group-hover:scale-y-125 transition-transform origin-top" />
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 leading-tight">{item.label}</h3>
                <p className="text-[#64748B] text-base leading-relaxed">{item.desc}</p>
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
