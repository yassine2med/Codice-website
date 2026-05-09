"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GraduationCap, HeartHandshake, MapPin, Rocket, Users } from "lucide-react";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { company } from "@/data/codice";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const culture = [
  { icon: HeartHandshake, title: "Minority-owned, mission-driven", text: "As a certified minority-owned small business, we bring diverse perspectives to every engagement — and build teams that reflect the communities we serve." },
  { icon: GraduationCap, title: "Grow while you deliver", text: "Whether you're a senior engineer or an early-career analyst, CODICE invests in your credentials, certifications, and long-term career path alongside the work." },
  { icon: Rocket, title: "Work that actually ships", text: "You won't maintain a product no one uses. CODICE builds platforms that DC agencies depend on every day — from permitting systems to Medicaid finance to AI compliance tools." },
];

const hiringAreas = [
  "Software engineering", "Cloud and infrastructure", "Data analytics and BI",
  "Cybersecurity and compliance", "Health IT operations", "Project delivery",
  "Business analysis", "IT staffing and support",
];

const openRoles = [
  { title: "Senior Software Engineer", dept: "Engineering", location: "Washington, DC (Hybrid)", type: "Full Time", description: "Build and maintain government-grade web applications using React, Node.js, and cloud-native architectures. Work directly with DC agency stakeholders." },
  { title: "Cloud & DevOps Engineer", dept: "Cloud Infrastructure", location: "Washington, DC / Remote", type: "Full Time", description: "Lead AWS and Azure migrations for government clients. Design CI/CD pipelines, enforce FedRAMP-aligned security, and manage containerized workloads." },
  { title: "Business Analyst — Government IT", dept: "Project Delivery", location: "Washington, DC", type: "Full Time", description: "Bridge agency stakeholders and engineering teams. Translate mission requirements into technical specifications for modernization programs." },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#0F172A]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-40 pb-16 sm:pb-24 bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute left-0 top-28 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB]">Careers</motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(40px,6vw,80px)] font-bold leading-[1.01] tracking-tighter text-[#0F172A]">
              Build technology that keeps public services moving.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-relaxed text-[#64748B]">
              CODICE is shaping technology with innovation and expertise, serving government agencies and mission-driven organizations from Washington, DC.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="https://www.ziprecruiter.com/c/Codice/Jobs" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#2563EB] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#1D4ED8] shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 transition-all"
              >
                View Openings <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center rounded-full border border-[#E2E8F0] hover:border-[#2563EB]/40 px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#64748B] hover:text-[#0F172A] transition-all"
              >
                Send Resume
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <SpotlightCard className="rounded-3xl p-8 shadow-[0_4px_40px_rgba(15,23,42,0.07)]">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#2563EB]">CODICE team</p>
                  <p className="mt-2 text-sm text-[#64748B]">Washington, DC headquarters with international engineering reach.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#F0F6FF] border border-[#2563EB]/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#2563EB]" />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {hiringAreas.map((area) => (
                  <div key={area} className="group/item rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 hover:border-[#2563EB]/35 hover:bg-white transition-all duration-200">
                    <BriefcaseBusiness className="mb-3 h-4 w-4 text-[#94A3B8] group-hover/item:text-[#2563EB] transition-colors" />
                    <p className="text-sm font-semibold text-[#64748B] group-hover/item:text-[#0F172A] transition-colors">{area}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>

      {/* Why CODICE */}
      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#2563EB]">Why CODICE</p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-[#0F172A]">
              A place for builders who care about outcomes.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {culture.map(({ icon: Icon, title, text }) => (
              <SpotlightCard key={title} className="p-8 group hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all duration-300">
                <div className="mb-6 w-12 h-12 rounded-xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300">
                  <Icon size={22} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors duration-300">{title}</h3>
                <p className="text-sm leading-relaxed text-[#64748B]">{text}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-6 bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#2563EB]">Open Positions</p>
              <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-[#0F172A]">Current Opportunities</h2>
            </div>
            <Link href="https://www.ziprecruiter.com/c/Codice/Jobs" target="_blank" rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#E2E8F0] hover:border-[#2563EB]/40 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#64748B] hover:text-[#0F172A] transition-all"
            >
              View All on ZipRecruiter <ArrowRight size={13} />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            {openRoles.map((role) => (
              <SpotlightCard key={role.title} className="group flex flex-col gap-4 p-7 transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] md:flex-row md:items-center md:gap-8">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#F0F6FF] border border-[#2563EB]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#2563EB]">{role.dept}</span>
                    <span className="rounded-full border border-[#E2E8F0] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">{role.type}</span>
                    <span className="rounded-full border border-[#E2E8F0] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">{role.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">{role.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{role.description}</p>
                </div>
                <Link href="https://www.ziprecruiter.com/c/Codice/Jobs" target="_blank" rel="noopener noreferrer"
                  className="group/btn inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-bold text-white hover:bg-[#1D4ED8] transition-colors overflow-hidden shadow-[0_4px_16px_rgba(37,99,235,0.20)]"
                >
                  Apply
                  <div className="relative flex items-center justify-center w-4 h-4 overflow-hidden">
                    <ArrowRight size={15} className="absolute transition-transform duration-300 group-hover/btn:translate-x-6" />
                    <ArrowRight size={15} className="absolute -translate-x-6 transition-transform duration-300 group-hover/btn:translate-x-0" />
                  </div>
                </Link>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#2563EB]">Location</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,44px)] font-bold leading-tight text-[#0F172A]">
              Work with a government-tech team rooted in Washington, DC.
            </motion.h2>
          </motion.div>
          <SpotlightCard className="p-8 hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#F0F6FF] border border-[#2563EB]/20 flex items-center justify-center mb-6">
              <MapPin className="h-5 w-5 text-[#2563EB]" />
            </div>
            <p className="text-xl font-bold text-[#0F172A]">{company.fullName}</p>
            <p className="mt-3 text-[#64748B]">{company.address}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#2563EB]/35 px-4 py-3 text-sm font-semibold text-[#64748B] hover:text-[#0F172A] transition-all" href={`tel:${company.phone}`}>{company.phone}</a>
              <a className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#2563EB]/35 px-4 py-3 text-sm font-semibold text-[#64748B] hover:text-[#0F172A] transition-all" href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}
