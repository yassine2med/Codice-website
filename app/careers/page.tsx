"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GraduationCap, HeartHandshake, MapPin, Rocket, Users, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { company } from "@/data/codice";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useState } from "react";

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

const roleOptions = ["Senior Software Engineer", "Cloud & DevOps Engineer", "Business Analyst", "Data Analyst", "Cybersecurity Specialist", "Project Manager", "Other"];

function QuickApplyForm() {
  const [form, setForm] = useState({ name: "", email: "", role: "", note: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Job Application — ${form.role} — ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nRole of Interest: ${form.role}\n\n${form.note}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setTimeout(() => { setSending(false); setSubmitted(true); }, 800);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4 py-12 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
          <CheckCircle2 size={26} className="text-emerald-500" />
        </div>
        <p className="text-xl font-bold text-white">Application sent!</p>
        <p className="text-[#64748B] text-sm max-w-xs">We review every application personally. Expect a response within 3–5 business days.</p>
        <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", role: "", note: "" }); }}
          className="text-[11px] font-bold text-[#60A5FA] hover:text-white transition-colors mt-2">Apply for another role →</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { label: "Full Name", key: "name", type: "text" },
          { label: "Email Address", key: "email", type: "email" },
        ].map(({ label, key, type }) => (
          <div key={key} className="relative">
            <input
              type={type} required value={form[key as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              placeholder={label}
              className="peer w-full bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.15] focus:border-[#2563EB]/60 rounded-2xl px-5 pt-7 pb-3 text-white text-sm outline-none transition-all placeholder-transparent"
            />
            <label className="absolute left-5 top-2.5 text-[9px] font-bold tracking-[0.2em] uppercase text-[#475569] peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2.5 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#60A5FA] transition-all">{label}</label>
          </div>
        ))}
      </div>
      <div className="relative">
        <select required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.15] focus:border-[#2563EB]/60 rounded-2xl px-5 py-3.5 text-sm text-white outline-none transition-all appearance-none cursor-pointer">
          <option value="" disabled className="bg-[#0F172A]">Role of Interest</option>
          {roleOptions.map((r) => <option key={r} value={r} className="bg-[#0F172A]">{r}</option>)}
        </select>
        <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#475569]">▾</div>
      </div>
      <textarea rows={3} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })}
        placeholder="Brief intro (optional)"
        className="w-full bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.15] focus:border-[#2563EB]/60 rounded-2xl px-5 py-4 text-white text-sm outline-none transition-all resize-none placeholder:text-[#334155]" />
      <button type="submit" disabled={sending}
        className="group flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3.5 rounded-2xl text-sm transition-all shadow-[0_4px_24px_rgba(37,99,235,0.30)] hover:-translate-y-0.5 disabled:opacity-70">
        {sending ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</> : <><Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> Submit Application</>}
      </button>
    </form>
  );
}

export default function CareersPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-white text-[#0F172A]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-40 pb-16 sm:pb-24 bg-[#0A0F1E]">
        {/* Background photo */}
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=60" alt="" className="w-full h-full object-cover object-center" style={{ opacity: 0.07 }} />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0F1E]/20 via-transparent to-[#0A0F1E]/60" />
        </div>
        <div className="absolute inset-0 dot-grid opacity-[0.15] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2563EB]/40 to-transparent" />
        <div className="absolute left-0 top-28 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#60A5FA]">Careers at CODICE</motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(40px,6vw,80px)] font-bold leading-[1.01] tracking-tighter text-white">
              Build technology that keeps public services moving.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
              CODICE is shaping technology with innovation and expertise, serving government agencies and mission-driven organizations from Washington, DC.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="https://www.ziprecruiter.com/c/Codice/Jobs" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#2563EB] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#3B82F6] shadow-[0_4px_24px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all"
              >
                View Openings <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center rounded-full border border-white/10 hover:border-white/25 px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#94A3B8] hover:text-white transition-all"
              >
                Send Resume
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <div className="rounded-3xl p-8 bg-[#0F172A] border border-[#1E293B] shadow-[0_8px_48px_rgba(0,0,0,0.3)]">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#60A5FA]">CODICE team</p>
                  <p className="mt-2 text-sm text-[#64748B]">Washington, DC headquarters with international engineering reach.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#60A5FA]" />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {hiringAreas.map((area) => (
                  <div key={area} className="group/item rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 hover:border-[#2563EB]/30 hover:bg-[#2563EB]/5 transition-all duration-200">
                    <BriefcaseBusiness className="mb-3 h-4 w-4 text-[#475569] group-hover/item:text-[#60A5FA] transition-colors" />
                    <p className="text-sm font-semibold text-[#64748B] group-hover/item:text-white transition-colors">{area}</p>
                  </div>
                ))}
              </div>
            </div>
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

      {/* Quick Apply */}
      <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.12] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] bg-[#2563EB]/6 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-[10px] font-black tracking-[0.3em] uppercase mb-6">Quick Apply</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight tracking-tight mb-4">Don&apos;t see the right role?</h2>
            <p className="text-[#64748B] text-base leading-relaxed">Send us your background. We hire for talent first — roles are often created around exceptional people.</p>
          </div>
          <QuickApplyForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
