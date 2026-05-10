"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { company } from "@/data/codice";
import { ArrowRight, Clock, ExternalLink, Mail, MapPin, Phone, Send, ShieldCheck, CalendarCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const trustSignals = [
  { icon: ShieldCheck, text: "100% client retention" },
  { icon: Clock,       text: "Response within 1 business day" },
  { icon: CalendarCheck, text: "Available for FY2026 projects" },
  { icon: Users,       text: "137 professionals on staff" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", agency: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Website Inquiry from ${formState.name}${formState.agency ? ` — ${formState.agency}` : ""}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nAgency: ${formState.agency || "Not provided"}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", agency: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 800);
  };

  return (
    <main id="main-content" className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />

      {/* ── Main: 2-col hero + form ── */}
      <section className="relative pt-28 sm:pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2563EB]/4 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2563EB]/3 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-16 lg:gap-24 items-start">

          {/* ── Left: copy + contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/20 bg-[#F0F6FF] w-fit">
              <Mail size={12} className="text-[#2563EB]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB]">Get in Touch</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-[clamp(40px,7vw,80px)] font-extrabold tracking-tighter leading-[0.95] text-[#0F172A] mb-6">
                Let&apos;s build<br />
                <span className="text-[#2563EB]">something that lasts.</span>
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed max-w-md">
                CODICE has supported Washington DC agencies for 16 years. Tell us your mission — we&apos;ll tell you how we&apos;d approach it.
              </p>
            </div>

            {/* Contact channels — compact */}
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${company.email}`}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300">
                  <Mail size={16} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] mb-0.5">Email</p>
                  <p className="text-sm font-bold text-[#0F172A] truncate group-hover:text-[#2563EB] transition-colors">{company.email}</p>
                </div>
                <ArrowRight size={14} className="text-[#CBD5E1] group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>

              <a
                href={`tel:${company.phone}`}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300">
                  <Phone size={16} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] mb-0.5">Phone</p>
                  <p className="text-sm font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">{company.phone}</p>
                </div>
                <ArrowRight size={14} className="text-[#CBD5E1] group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#E2E8F0] bg-white">
                <div className="w-10 h-10 rounded-xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] mb-0.5">Headquarters</p>
                  <p className="text-sm font-bold text-[#0F172A]">Washington, DC</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">{company.address}</p>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-3">
              {trustSignals.map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-sm font-semibold text-[#64748B]">
                  <Icon size={13} className="text-[#2563EB]" /> {text}
                </span>
              ))}
              <Link
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-sm font-semibold text-[#64748B] hover:border-[#2563EB]/40 hover:text-[#0F172A] transition-all"
              >
                <ExternalLink size={13} className="text-[#2563EB]" /> LinkedIn
              </Link>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-8 md:p-10 rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_8px_48px_rgba(15,23,42,0.07)] relative overflow-hidden">
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-[#2563EB]/30 to-transparent" />

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight">Request a Briefing</h2>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available
                  </span>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">Share your challenge and our team will schedule a technical briefing within one business day.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Full Name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(v) => setFormState({ ...formState, name: v })}
                  />
                  <Field
                    label="Work Email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(v) => setFormState({ ...formState, email: v })}
                  />
                </div>
                <Field
                  label="Agency or Organization"
                  type="text"
                  value={formState.agency}
                  onChange={(v) => setFormState({ ...formState, agency: v })}
                />
                <div className="relative">
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="peer w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 pt-8 pb-4 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all resize-none placeholder-transparent"
                    placeholder="Message"
                  />
                  <label className="absolute left-5 top-2.5 text-[9px] font-bold tracking-[0.2em] uppercase text-[#94A3B8] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2.5 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#2563EB]">
                    Mission Requirements
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`group w-full flex items-center justify-center gap-3 font-bold px-8 py-4 rounded-2xl text-sm tracking-wide transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-[0_8px_32px_rgba(37,99,235,0.22)] hover:-translate-y-0.5 disabled:opacity-70"
                  }`}
                >
                  {isSubmitting ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                  ) : isSubmitted ? (
                    "✓ Message received — we'll be in touch"
                  ) : (
                    <>Send Briefing Request <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ── Reusable input field ── */
function Field({
  label, type, required, value, onChange,
}: {
  label: string; type: string; required?: boolean; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 pt-7 pb-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all placeholder-transparent"
        placeholder={label}
      />
      <label className="absolute left-5 top-2.5 text-[9px] font-bold tracking-[0.2em] uppercase text-[#94A3B8] transition-all peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2.5 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#2563EB]">
        {label}
      </label>
    </div>
  );
}
