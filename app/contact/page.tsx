"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { company, team } from "@/data/codice";
import Image from "next/image";
import { ArrowRight, Mail, Phone, Clock, CalendarCheck, ShieldCheck, Users, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const steps = [
  { n: "01", title: "Submit Your Brief", desc: "Tell us your agency, timeline, and mission challenge. Takes 2 minutes." },
  { n: "02", title: "We Review & Match", desc: "Our solutions team reviews within 1 business day and assigns the right architect." },
  { n: "03", title: "Technical Briefing", desc: "A 30-minute call with a senior engineer — no sales pitch, just real answers." },
];


const faqs = [
  { q: "How quickly can CODICE start a new engagement?", a: "Typically 2–4 weeks from contract award. For urgent needs we can mobilize a core team in under 10 business days." },
  { q: "Do you work with agencies outside Washington DC?", a: "Yes — we serve federal agencies and state governments across the US, with active projects in MD, VA, and federal civilian agencies." },
  { q: "What contract vehicles do you hold?", a: "GSA Schedule 70 (Multiple Award Schedule), SBA 8(a), and we are eligible for sole-source and competitive set-aside awards." },
  { q: "Can we see a capability statement before the call?", a: "Absolutely. Download our full capability statement from the Capability page, or we can email it directly after you submit this form." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", agency: "", role: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dcTime, setDcTime] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      setDcTime(new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: true }).format(new Date()));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const subject = encodeURIComponent(`Website Inquiry — ${form.name}${form.agency ? ` · ${form.agency}` : ""}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nAgency: ${form.agency || "—"}\nRole: ${form.role || "—"}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: "", email: "", agency: "", role: "", message: "" });
      setTimeout(() => setSubmitted(false), 7000);
    }, 800);
  };

  return (
    <main id="main-content" className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#060D1C] overflow-hidden pt-40 pb-24">
        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#EA580C]/8 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none" />

        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-primary/40 to-transparent" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-[0.35em] uppercase mb-6"
            style={{ color: "#EA580C" }}
          >
            Get In Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(38px,7vw,80px)] font-black tracking-tighter leading-[0.92] text-white mb-6"
          >
            Let&apos;s build something<br />
            <span className="text-brand-primary">Washington DC</span> will use for years.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            16 years. 12+ agencies. 100% retention. Tell us your mission — we&apos;ll tell you exactly how we&apos;d approach it.
          </motion.p>

          {/* Live badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#22C55E]/25 bg-[#22C55E]/8 text-[11px] font-bold text-[#22C55E] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              Accepting FY2026 Engagements
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-white/50 tracking-wide">
              <Clock size={11} />
              DC Local: {dcTime}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-white/50 tracking-wide">
              <ShieldCheck size={11} />
              Response within 1 business day
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold tracking-[0.3em] uppercase mb-12" style={{ color: "#EA580C" }}>What Happens Next</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ n, title, desc }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white rounded-3xl border border-[#E2E8F0] p-8 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:border-brand-primary/30 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all duration-300"
              >
                <span className="text-[42px] font-black text-[#F1F5F9] leading-none block mb-4">{n}</span>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">{title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#E2E8F0]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main: Form + Info ── */}
      <section id="contact-form" className="pt-24 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-20 items-start">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h2 className="text-3xl font-black text-[#0F172A] tracking-tight mb-3">Reach us directly</h2>
              <p className="text-[#64748B] leading-relaxed">Every inquiry goes to a real person on our solutions team — not a ticketing queue.</p>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              <a href={`mailto:${company.email}`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#E2E8F0] bg-white hover:border-brand-primary/30 hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#F0F6FF] border border-brand-primary/15 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                  <Mail size={16} className="text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#94A3B8] mb-0.5">Email</p>
                  <p className="text-sm font-bold text-[#0F172A] group-hover:text-brand-primary transition-colors">{company.email}</p>
                </div>
              </a>

              <a href={`tel:${company.phone}`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#E2E8F0] bg-white hover:border-brand-primary/30 hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#F0F6FF] border border-brand-primary/15 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                  <Phone size={16} className="text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#94A3B8] mb-0.5">Phone</p>
                  <p className="text-sm font-bold text-[#0F172A] group-hover:text-brand-primary transition-colors">{company.phone}</p>
                </div>
              </a>

              <Link href="/capability"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#E2E8F0] bg-white hover:border-brand-primary/30 hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#F0F6FF] border border-brand-primary/15 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                  <CalendarCheck size={16} className="text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#94A3B8] mb-0.5">Capability Statement</p>
                  <p className="text-sm font-bold text-[#0F172A] group-hover:text-brand-primary transition-colors">Download our full GSA capability statement</p>
                </div>
                <ArrowRight size={14} className="text-[#94A3B8] group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: ShieldCheck, label: "100% Client Retention" },
                { icon: Users, label: "137 Professionals" },
                { icon: CalendarCheck, label: "FY2026 Available" },
                { icon: Clock, label: "24hr Response" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 p-3.5 rounded-xl border border-[#F1F5F9] bg-[#F8FAFC]">
                  <Icon size={14} className="text-brand-primary shrink-0" />
                  <span className="text-[11px] font-bold text-[#475569]">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-[0_8px_48px_rgba(15,23,42,0.08)] overflow-hidden">
              {/* Form header */}
              <div className="px-8 pt-8 pb-6 border-b border-[#F1F5F9]">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-black text-[#0F172A] tracking-tight">Request a Briefing</h2>
                    <p className="text-sm text-[#64748B] mt-1">We&apos;ll schedule a 30-min technical consultation within 24 hours.</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    <span className="text-[9px] font-bold text-[#166534] uppercase tracking-wider">Open</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name" type="text" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label="Work Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Agency / Organization" type="text" value={form.agency} onChange={(v) => setForm({ ...form, agency: v })} />
                  <Field label="Your Role / Title" type="text" value={form.role} onChange={(v) => setForm({ ...form, role: v })} />
                </div>
                <div className="relative">
                  <textarea
                    required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="peer w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 pt-9 pb-4 text-[#0F172A] text-sm font-medium focus:outline-none focus:border-brand-primary focus:bg-white transition-all resize-none placeholder-transparent"
                    placeholder="Message"
                  />
                  <label className="absolute left-5 top-3 text-[9px] font-bold tracking-[0.25em] uppercase text-[#94A3B8] peer-focus:text-brand-primary transition-colors">
                    Project Brief / Requirements
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting || submitted}
                  className={`group relative w-full flex items-center justify-center gap-3 font-bold px-8 py-4 rounded-2xl text-sm tracking-wide transition-all duration-400 overflow-hidden ${
                    submitted
                      ? "bg-[#22C55E]/10 text-[#166534] border border-[#22C55E]/30"
                      : "bg-[#0F172A] text-white hover:bg-brand-primary shadow-[0_4px_20px_rgba(15,23,42,0.2)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 disabled:opacity-60"
                  }`}
                >
                  {!submitted && (
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/8 to-transparent pointer-events-none" />
                  )}
                  {submitting ? (
                    <><div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : submitted ? (
                    <><CheckCircle2 size={16} /> Message sent — we&apos;ll be in touch within 24 hours</>
                  ) : (
                    <>Send Request <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" /></>
                  )}
                </button>

                <p className="text-center text-[10px] text-[#94A3B8]">
                  Or email us directly at{" "}
                  <a href={`mailto:${company.email}`} className="text-brand-primary font-bold hover:underline">{company.email}</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section className="py-20 px-6 border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3 text-center" style={{ color: "#EA580C" }}>Who You&apos;ll Work With</p>
          <h2 className="text-2xl font-black text-[#0F172A] tracking-tight text-center mb-12">Meet the leadership team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[team[1], team[0], ...team.slice(2)].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[#E2E8F0] bg-white hover:border-brand-primary/30 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all duration-300"
              >
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-4 border-2 border-[#F1F5F9] group-hover:border-brand-primary/30 transition-colors duration-300">
                  {member.photo ? (
                    <Image src={member.photo} alt={member.name} fill className={`object-cover ${member.name === "Dash Kiridena" ? "scale-[1.1]" : "object-top"}`} style={member.name === "Dash Kiridena" ? { objectPosition: "center 15%" } : undefined} sizes="80px" />
                  ) : (
                    <div className="w-full h-full bg-[#F0F6FF] flex items-center justify-center text-brand-primary font-black text-xl">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-1">{member.name}</h3>
                <p className="text-[11px] text-brand-primary font-semibold mb-3 leading-tight">{member.title}</p>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed line-clamp-3">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3 text-center" style={{ color: "#EA580C" }}>Find Us</p>
          <h2 className="text-2xl font-black text-[#0F172A] tracking-tight text-center mb-10">Washington, DC Headquarters</h2>
          <div className="rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-[0_4px_24px_rgba(15,23,42,0.08)]">
            <iframe
              title="CODICE Technology HQ"
              src="https://maps.google.com/maps?q=1101+Vermont+Avenue+NW+Washington+DC&output=embed&z=15"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-sm text-[#94A3B8] mt-4 font-medium">{company.address}</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3 text-center" style={{ color: "#EA580C" }}>FAQ</p>
          <h2 className="text-2xl font-black text-[#0F172A] tracking-tight text-center mb-10">Common questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map(({ q, a }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === i ? "border-brand-primary/30 shadow-[0_4px_20px_rgba(37,99,235,0.08)]" : "border-[#E2E8F0]"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-bold text-[#0F172A]">{q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown size={16} className="text-[#94A3B8] shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-5 text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9] pt-4">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({ label, type, required, value, onChange }: {
  label: string; type: string; required?: boolean; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <input
        type={type} required={required} value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 pt-8 pb-3 text-[#0F172A] text-sm font-medium focus:outline-none focus:border-brand-primary focus:bg-white transition-all placeholder-transparent"
        placeholder={label}
      />
      <label className="absolute left-5 top-2.5 text-[9px] font-bold tracking-[0.25em] uppercase text-[#94A3B8] peer-focus:text-brand-primary transition-colors">
        {label}
      </label>
    </div>
  );
}
