"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { team, stats, company } from "@/data/codice";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TeamModal } from "@/components/ui/TeamModal";
import { useState, useRef } from "react";
import {
  Award,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Leaf,
  Flame,
  Globe,
  Shield,
  TrendingUp,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

const timeline = [
  { year: "2009", title: "Founded in Washington DC", desc: "CODICE Technology is established with a vision to modernize government IT from the ground up — starting right here in Washington DC." },
  { year: "2012", title: "First Government Contract", desc: "Secured our first multi-year engagement with a DC agency — the beginning of what would become a 100% client retention record." },
  { year: "2016", title: "Product Division Launched", desc: "Began building proprietary platforms, moving beyond services into purpose-built government software owned entirely by CODICE." },
  { year: "2019", title: "PermiOne Goes Live", desc: "Launched PermiOne, our flagship cloud-agnostic permitting platform, now used across multiple DC agencies for inspections and approvals." },
  { year: "2023", title: "AI Products Released", desc: "Launched FortiMind.ai and Travo AI — bringing enterprise AI to government compliance monitoring and accessibility." },
  { year: "2024", title: "DC DOES UI Modernization", desc: "Delivered the landmark modernization of the DC Department of Employment Services Unemployment Insurance Benefits System, serving thousands of DC residents." },
  { year: "2025", title: "Small Business of the Year", desc: "Named Washington DC's Small Business of the Year — recognizing 16 years of government technology excellence and community impact." },
];

const values = [
  { icon: Lightbulb, title: "Excellence Without Exception", desc: "Every line of code, every client interaction, every deliverable — held to the highest standard. Our clients depend on results that work on day one." },
  { icon: Leaf, title: "Built for the Long Term", desc: "We build sustainable systems that last decades, not sprints. Every platform we ship is designed to outlive the administration that commissioned it." },
  { icon: Flame, title: "Purpose-Driven Culture", desc: "We're a community of passionate builders dedicated to public service technology. The mission matters as much as the code." },
];

const businessCerts = [
  "Certified Minority-Owned Small Business",
  "GSA Schedule Holder",
  "ISO Compliance Standards",
  "FISMA / FedRAMP Aligned",
];

const professionalCerts = [
  "PMP — Project Management Professional",
  "CSM — Certified Scrum Master",
  "CSPO — Certified Scrum Product Owner",
  "CPA — Certified Public Accountant",
  "CMA — Certified Management Accountant",
  "AWS Certified Cloud Practitioner",
];

const offices = company.offices.map((o) => ({
  city: o.city,
  country: o.country,
  address: o.address,
  flag: o.country === "USA" ? "🇺🇸" : "🇱🇰",
  hq: o.headquarters,
}));

type TeamMember = (typeof team)[number];

function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 85%", "end 15%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-28 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/20 px-4 py-2 rounded-full inline-block mb-6">
            16 Years of Impact
          </span>
          <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-[#0F172A] tracking-tight">Our Journey</h2>
          <div className="mt-6 w-16 h-[2px] bg-[#2563EB] mx-auto rounded-full opacity-60" />
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#E2E8F0] md:-translate-x-1/2" />
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-linear-to-b from-[#2563EB] to-[#3B82F6] md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-0">
            {timeline.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start md:items-center gap-8 pb-14 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row pl-16 md:pl-0`}
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center z-10">
                    <motion.div
                      whileInView={{ scale: [0.7, 1.12, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                      className="w-12 h-12 rounded-full bg-white border-2 border-[#2563EB] flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.2),0_0_0_5px_rgba(37,99,235,0.06)]"
                    >
                      <div className="w-3 h-3 rounded-full bg-[#2563EB]" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${isLeft ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div className="group/card bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#2563EB]/40 hover:shadow-[0_8px_40px_rgba(37,99,235,0.10)] transition-all duration-300 relative overflow-hidden">
                      {/* Blue accent line on hover */}
                      <div className={`absolute top-0 bottom-0 w-[3px] bg-[#2563EB] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-full ${isLeft ? "right-0" : "left-0"}`} />
                      <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#2563EB] bg-[#F0F6FF] border border-[#2563EB]/20 px-3 py-1 rounded-full mb-3 font-[family-name:var(--font-dm-mono)]">
                        {event.year}
                      </span>
                      <h3 className="text-base font-bold text-[#0F172A] mb-2 leading-snug group-hover/card:text-[#2563EB] transition-colors duration-300">{event.title}</h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">{event.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OurStoryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <main id="main-content" className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <TeamModal isOpen={modalOpen} onClose={() => setModalOpen(false)} member={selectedMember} />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0A0F1E]">
        {/* Background photo */}
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1600&q=60" alt="" className="w-full h-full object-cover object-center" style={{ opacity: 0.08 }} />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0F1E]/40 via-transparent to-[#0A0F1E]/70" />
        </div>
        <div className="absolute inset-0 dot-grid opacity-[0.15] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2563EB]/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[900px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 65%)" }} />

        {/* Geometric accents */}
        <div className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none overflow-hidden">
          <div className="absolute top-[-80px] right-[-80px] w-[360px] h-[360px] border border-[#2563EB]/15 rounded-full" />
          <div className="absolute top-[-40px] right-[-40px] w-[240px] h-[240px] border border-[#2563EB]/10 rounded-full" />
        </div>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-28 sm:pt-40 pb-16 sm:pb-24"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#60A5FA] bg-[#2563EB]/10 border border-[#2563EB]/25 px-4 py-2 rounded-full mb-8">
              <Award size={11} /> Est. 2009 · Washington, DC
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-[clamp(36px,8vw,88px)] font-extrabold text-white leading-[0.95] tracking-tighter mb-8">
            More Than Technology.
            <br />
            <span style={{ color: "#60A5FA" }}>A Mission.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-12">
            For 16 years, CODICE Technology has been the trusted partner that Washington DC&apos;s
            government agencies call when the mission is too important to get wrong.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            {[
              { icon: Shield, text: "100% Client Retention" },
              { icon: TrendingUp, text: "16+ Years of Service" },
              { icon: Globe, text: "DC HQ · Colombo Office" },
              { icon: Award, text: "Minority-Owned Business" },
              { icon: CheckCircle2, text: "GSA Schedule Holder" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2 text-sm text-[#94A3B8] font-medium bg-white/[0.05] border border-white/[0.10] px-4 py-2 rounded-full hover:border-[#2563EB]/30 hover:text-white transition-colors duration-200">
                <Icon size={13} className="text-[#60A5FA]" /> {text}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. FOUNDING STORY ────────────────────────────────────────────────── */}
      <section className="py-28 px-6 border-t border-[#E2E8F0] relative overflow-hidden">
        {/* DC streetscape background */}
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1600&q=60" alt="" className="w-full h-full object-cover object-center" style={{ opacity: 0.055 }} />
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.p variants={fadeUp} className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-4">The Origin</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#0F172A] mb-6 leading-tight tracking-tight">
              Built to Solve Government&apos;s Hardest Technology Problems
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-[#64748B] text-base md:text-lg leading-relaxed">
              <p>
                In 2009, CODICE Technology was founded with a clear conviction: government agencies deserved
                better software than what the market offered — solutions built specifically for their missions,
                their compliance requirements, and their people.
              </p>
              <p>
                Starting with a small team in Washington DC, CODICE earned its first government contract
                and never looked back. Over 16 years, that trust compounded — every engagement delivered,
                every client retained, every mission supported.
              </p>
              <p>
                Today, CODICE is both a services firm and a product company — building 8 proprietary
                platforms that over a dozen DC agencies rely on every day. As a{" "}
                <strong className="text-[#0F172A]">certified minority-owned small business</strong> and{" "}
                <strong className="text-[#0F172A]">GSA Schedule holder</strong>, CODICE brings
                mission-aligned delivery to every engagement.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col gap-2 hover:border-[#2563EB]/35 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all duration-300"
              >
                <span className="text-[clamp(36px,5vw,52px)] font-bold text-[#0F172A] font-[family-name:var(--font-dm-mono)] tracking-tighter leading-none tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[11px] font-bold text-[#2563EB] tracking-[0.2em] uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. TIMELINE ─────────────────────────────────────────────────────── */}
      <TimelineSection />

      {/* ── 4. VALUES ───────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/20 px-4 py-2 rounded-full inline-block mb-6">What We Stand For</span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-[#0F172A] tracking-tight mb-4">Our Mission & Values</h2>
            <p className="text-[#64748B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Empowering digital services across government — fast, secure, and built to last.</p>
            <div className="mt-6 w-16 h-[2px] bg-[#2563EB] mx-auto rounded-full opacity-60" />
          </motion.div>

          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} variants={fadeUp}>
                  <SpotlightCard className="p-8 h-full hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.10)] transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300">
                      <Icon size={22} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors duration-300">{v.title}</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">{v.desc}</p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 5. LEADERSHIP TEAM ──────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/20 px-4 py-2 rounded-full inline-block mb-6">The People Behind It</span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-[#0F172A] tracking-tight mb-4">Leadership Team</h2>
            <p className="text-[#64748B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Decades of combined experience across government technology, finance, engineering, and operations.</p>
            <div className="mt-6 w-16 h-[2px] bg-[#2563EB] mx-auto rounded-full opacity-60" />
          </motion.div>

          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.filter((m) => m.photo).map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all duration-300"
              >
                <div
                  className="relative w-full aspect-3/4 bg-[#F8FAFC] overflow-hidden cursor-pointer"
                  onClick={() => { setSelectedMember(member); setModalOpen(true); }}
                >
                  <Image src={member.photo} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-all duration-500" sizes="(max-width: 640px) 100vw, 50vw" />
                  {/* Gradient fade at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/60 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-[#E2E8F0] text-[#0F172A] text-sm font-bold tracking-widest uppercase shadow-lg cursor-pointer">
                      Read Bio
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#0F172A] mb-1 group-hover:text-[#2563EB] transition-colors duration-300">{member.name}</h3>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#2563EB] mb-3">{member.title}</p>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-4">{member.bio}</p>
                  {member.education && (
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed border-t border-[#F1F5F9] pt-4">{member.education}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {team.filter((m) => !m.photo).length > 0 && (
            <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {team.filter((m) => !m.photo).map((member) => (
                <motion.div key={member.name} variants={fadeUp} className="bg-white border border-[#E2E8F0] rounded-xl px-6 py-5 flex items-center gap-4 hover:border-[#2563EB]/35 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#F0F6FF] border border-[#2563EB]/20 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-[#2563EB]">{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">{member.name}</p>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-[#2563EB] mt-0.5">{member.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── 6. CERTIFICATIONS ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/20 px-4 py-2 rounded-full inline-block mb-6">Credentials</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-[#0F172A] tracking-tight">Certifications & Compliance</h2>
            <div className="mt-6 w-16 h-[2px] bg-[#2563EB] mx-auto rounded-full opacity-60" />
          </motion.div>

          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#94A3B8] mb-5 text-center">Business</p>
          <motion.div variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-3 justify-center mb-10">
            {businessCerts.map((cert) => (
              <motion.div key={cert} variants={fadeUp} className="inline-flex items-center gap-2.5 bg-[#F0F6FF] border border-[#2563EB]/20 hover:border-[#2563EB]/50 text-[#1D4ED8] text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-300 cursor-default">
                <CheckCircle2 size={14} className="text-[#2563EB] shrink-0" /> {cert}
              </motion.div>
            ))}
          </motion.div>

          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#94A3B8] mb-5 text-center">Team Credentials</p>
          <motion.div variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-3 justify-center">
            {professionalCerts.map((cert) => (
              <motion.div key={cert} variants={fadeUp} className="inline-flex items-center gap-2.5 bg-white border border-[#E2E8F0] hover:border-[#2563EB]/35 text-[#64748B] text-sm font-medium px-5 py-3 rounded-xl transition-colors duration-300 cursor-default">
                <CheckCircle2 size={14} className="text-[#2563EB] shrink-0" /> {cert}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. OFFICES ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/20 px-4 py-2 rounded-full inline-block mb-6">Where We Are</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-[#0F172A] tracking-tight">Our Offices</h2>
            <div className="mt-6 w-16 h-[2px] bg-[#2563EB] mx-auto rounded-full opacity-60" />
          </motion.div>

          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offices.map((office) => (
              <motion.div key={office.city} variants={fadeUp} className="bg-white border border-[#E2E8F0] rounded-2xl p-7 hover:border-[#2563EB]/35 hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{office.flag}</span>
                  <div>
                    {office.hq && (
                      <span className="inline-block text-[9px] font-black tracking-[0.3em] uppercase text-[#2563EB] bg-[#F0F6FF] border border-[#2563EB]/20 px-2 py-0.5 rounded-full mb-2">
                        Headquarters
                      </span>
                    )}
                    <h3 className="text-base font-bold text-[#0F172A] mb-1">{office.city}, {office.country}</h3>
                    <p className="text-sm text-[#64748B] flex items-start gap-1.5">
                      <MapPin size={13} className="text-[#2563EB] mt-0.5 shrink-0" /> {office.address}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(37,99,235,0.18),transparent)]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2563EB]/40 to-transparent" />

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,52px)] font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to Work With<br />
            <span className="text-[#60A5FA]">Washington DC&apos;s Best?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#64748B] text-lg mb-10 leading-relaxed">
            Whether you need a custom platform, a modernization plan, or a trusted technology partner — we&apos;ve done it before and we&apos;ll do it for you.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_32px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-3 bg-transparent border border-[#334155] hover:border-[#2563EB]/50 text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5">
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
