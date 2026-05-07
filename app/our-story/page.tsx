"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { team, stats, company } from "@/data/codice";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const timeline = [
  { year: "2009", title: "Founded in Washington DC", desc: "CODICE Technology is established with a vision to modernize government IT from the ground up — starting in Washington DC." },
  { year: "2012", title: "First Government Contract", desc: "Secured our first multi-year engagement with a DC agency — the beginning of 100% client retention." },
  { year: "2016", title: "Product Division Launched", desc: "Began building proprietary platforms, moving beyond services into purpose-built government software." },
  { year: "2019", title: "PermiOne Goes Live", desc: "Launched PermiOne, our flagship cloud-agnostic permitting platform, now used across DC agencies." },
  { year: "2023", title: "AI Products Released", desc: "Launched FortiMind.ai and Travo AI — bringing enterprise AI to government compliance and accessibility." },
  { year: "2024", title: "DC DOES UI System Modernization", desc: "Launched the modernized DC Department of Employment Services Unemployment Insurance Benefits System — a landmark project serving thousands of DC residents." },
  { year: "2025", title: "Small Business of the Year", desc: "Named Washington DC's Small Business of the Year — recognizing 16 years of government technology excellence." },
];

const values = [
  {
    icon: Lightbulb,
    title: "Excellence Without Exception",
    desc: "Every line of code, every client interaction, every deliverable — held to the highest standard. Our clients depend on us for results that work on day one.",
  },
  {
    icon: Leaf,
    title: "Sustainability at the Core",
    desc: "Sustainability isn't a checkbox — it's woven into how we build, how we operate, and how we grow. We build for the long term, not the next sprint.",
  },
  {
    icon: Flame,
    title: "Purpose-Driven Culture",
    desc: "We're a community of passionate builders dedicated to pushing what's possible for public sector technology. The mission matters as much as the code.",
  },
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] overflow-x-hidden">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(to right,#1E293B 1px,transparent 1px),linear-gradient(to bottom,#1E293B 1px,transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%,#000 40%,transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%,#000 40%,transparent 100%)",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#2563EB]/10 blur-[150px] rounded-full pointer-events-none" />

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-40 pb-24"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20 px-4 py-2 rounded-full mb-8">
            <Award size={11} /> Est. 2009 · Washington, DC
          </motion.span>

          <motion.h1 variants={fadeUp} className="text-[clamp(44px,8vw,88px)] font-bold text-[#F8FAFC] leading-[1.05] tracking-tight mb-8">
            More Than Technology.
            <br />
            <span className="text-[#2563EB]">A Mission.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed mb-12">
            For 16 years, CODICE Technology has been the trusted partner that Washington DC&apos;s
            government agencies call when the mission is too important to get wrong.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-6 justify-center">
            {[
              { icon: Shield, text: "100% Client Retention" },
              { icon: TrendingUp, text: "16+ Years of Service" },
              { icon: Globe, text: "DC HQ · Colombo Office" },
              { icon: Award, text: "Minority-Owned Business" },
              { icon: CheckCircle2, text: "GSA Schedule Holder" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2 text-sm text-[#94A3B8] font-medium">
                <Icon size={14} className="text-[#2563EB]" /> {text}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. FOUNDING STORY ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-4">
              The Origin
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#F8FAFC] mb-6 leading-tight tracking-tight">
              Built to Solve Government&apos;s Hardest Technology Problems
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-[#64748B] text-base md:text-lg leading-relaxed">
              <p>
                In 2009, CODICE Technology was founded with a clear conviction:
                government agencies deserved better software than what the market offered — solutions
                built specifically for their missions, their compliance requirements, and their people.
              </p>
              <p>
                Starting with a small team in Washington DC, CODICE earned its first government contract
                and never looked back. Over 16 years, that trust compounded — every engagement delivered,
                every client retained, every mission supported.
              </p>
              <p>
                Today, CODICE is both a services firm and a product company — building 8 proprietary
                platforms that over a dozen DC agencies rely on every day. As a <strong className="text-[#94A3B8]">certified minority-owned small business</strong> and <strong className="text-[#94A3B8]">GSA Schedule holder</strong>, CODICE brings mission-aligned delivery to every engagement. From permit modernization to AI-powered legal compliance, the mission has always been the same: <em className="text-[#94A3B8]">technology that actually works for government.</em>
              </p>
            </motion.div>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="bg-[#111827] border border-[#1E293B] rounded-2xl p-7 flex flex-col gap-2 hover:border-[#2563EB]/40 transition-colors duration-300"
              >
                <span className="text-[clamp(36px,5vw,56px)] font-bold text-[#F8FAFC] font-mono tracking-tighter leading-none tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[11px] font-bold text-[#2563EB] tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. TIMELINE ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#060E1A] border-y border-[#1E293B]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-4">16 Years of Impact</p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-[#F8FAFC] tracking-tight">Our Journey</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#1E293B] to-transparent md:-translate-x-1/2" />

            <div className="flex flex-col gap-0">
              {timeline.map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={event.year}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className={`relative flex items-start md:items-center gap-8 pb-12 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-row pl-16 md:pl-0`}
                  >
                    {/* Year pill — desktop center, mobile left */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#0A1628] border-2 border-[#2563EB] flex items-center justify-center z-10">
                        <div className="w-3 h-3 rounded-full bg-[#2563EB]" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`w-full md:w-[calc(50%-3rem)] ${isLeft ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                      <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-1 rounded-full mb-3">
                        {event.year}
                      </span>
                      <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 leading-snug">{event.title}</h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">{event.desc}</p>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MISSION & VALUES ──────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-4">What We Stand For</p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-[#F8FAFC] tracking-tight mb-4">
              Our Mission & Values
            </h2>
            <p className="text-[#64748B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Empowering digital services across government — fast, secure, and built to last.
            </p>
          </motion.div>

          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className="group bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-[#2563EB]/50 hover:shadow-[0_0_32px_rgba(37,99,235,0.1)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] border border-[#1E293B] flex items-center justify-center mb-6 group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/10 transition-all duration-300">
                    <Icon size={22} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 5. LEADERSHIP TEAM ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#060E1A] border-y border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-4">The People Behind It</p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-[#F8FAFC] tracking-tight mb-4">
              Leadership Team
            </h2>
            <p className="text-[#64748B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Decades of combined experience across government technology, finance, engineering, and operations.
            </p>
          </motion.div>

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {team.filter((m) => m.photo).map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden hover:border-[#2563EB]/40 hover:shadow-[0_0_32px_rgba(37,99,235,0.1)] transition-colors duration-300"
              >
                <div className="relative w-full h-56 bg-[#0A1628] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#111827] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#F8FAFC] mb-1 group-hover:text-[#2563EB] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#2563EB] mb-3">
                    {member.title}
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-4">{member.bio}</p>
                  {member.education && (
                    <p className="text-[11px] text-[#475569] leading-relaxed border-t border-[#1E293B] pt-4">
                      {member.education}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional leadership — no photo available */}
          {team.filter((m) => !m.photo).length > 0 && (
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {team.filter((m) => !m.photo).map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  className="bg-[#111827] border border-[#1E293B] rounded-xl px-6 py-5 flex items-center gap-4 hover:border-[#2563EB]/40 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-[#2563EB]">{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#F8FAFC]">{member.name}</p>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-[#2563EB] mt-0.5">{member.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── 6. CERTIFICATIONS ────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-4">Credentials</p>
            <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-[#F8FAFC] tracking-tight">
              Certifications & Compliance
            </h2>
          </motion.div>

          {/* Business certifications */}
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#475569] mb-4 text-center">Business</p>
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            {businessCerts.map((cert) => (
              <motion.div
                key={cert}
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 bg-[#2563EB]/10 border border-[#2563EB]/25 hover:border-[#2563EB]/60 text-[#93C5FD] text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-300 cursor-default"
              >
                <CheckCircle2 size={14} className="text-[#2563EB] shrink-0" />
                {cert}
              </motion.div>
            ))}
          </motion.div>

          {/* Professional certifications */}
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#475569] mb-4 text-center">Team Credentials</p>
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {professionalCerts.map((cert) => (
              <motion.div
                key={cert}
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 bg-[#111827] border border-[#1E293B] hover:border-[#2563EB]/40 text-[#94A3B8] text-sm font-medium px-5 py-3 rounded-xl transition-colors duration-300 cursor-default"
              >
                <CheckCircle2 size={14} className="text-[#2563EB] shrink-0" />
                {cert}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. OFFICES ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#060E1A] border-y border-[#1E293B]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-4">Where We Are</p>
            <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-[#F8FAFC] tracking-tight">Our Offices</h2>
          </motion.div>

          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {offices.map((office) => (
              <motion.div
                key={office.city}
                variants={fadeUp}
                className="bg-[#111827] border border-[#1E293B] rounded-2xl p-7 hover:border-[#2563EB]/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{office.flag}</span>
                  <div>
                    {office.hq && (
                      <span className="inline-block text-[9px] font-black tracking-[0.3em] uppercase text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20 px-2 py-0.5 rounded-full mb-2">
                        Headquarters
                      </span>
                    )}
                    <h3 className="text-base font-bold text-[#F8FAFC] mb-1">
                      {office.city}, {office.country}
                    </h3>
                    <p className="text-sm text-[#64748B] flex items-start gap-1.5">
                      <MapPin size={13} className="text-[#2563EB] mt-0.5 shrink-0" />
                      {office.address}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0D1F3C] to-[#0A1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(37,99,235,0.15),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right,#F8FAFC 1px,transparent 1px),linear-gradient(to bottom,#F8FAFC 1px,transparent 1px)`,
            backgroundSize: "3rem 3rem",
          }}
        />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#2563EB]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#2563EB]/10 blur-[100px] rounded-full pointer-events-none" />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,52px)] font-bold text-[#F8FAFC] mb-6 tracking-tight leading-tight">
            Ready to Work With
            <br />
            <span className="text-[#2563EB]">Washington DC&apos;s Best?</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#64748B] text-lg mb-10 leading-relaxed">
            Whether you need a custom platform, a modernization plan, or a trusted technology partner — we&apos;ve done it before and we&apos;ll do it for you.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_32px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-[#1E293B] hover:border-[#2563EB]/40 text-[#F8FAFC] font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

