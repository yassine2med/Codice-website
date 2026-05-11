"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { company } from "@/data/codice";
import { ArrowRight, Clock, ExternalLink, Mail, MapPin, Phone, ShieldCheck, CalendarCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [dcTime, setDcTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: "America/New_York", 
        hour: "2-digit", 
        minute: "2-digit", 
        hour12: true 
      };
      setDcTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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

      {/* ── Background Decorative Layer ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 dot-grid opacity-[0.25]" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 40, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-primary/6 blur-[140px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0], 
            y: [0, 40, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-brand-accent/4 blur-[120px] rounded-full" 
        />
        
        {/* Floating background glyphs or shapes for "life" */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                y: [0, -100, 0],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 15 + i * 5, 
                repeat: Infinity, 
                delay: i * 2,
                ease: "linear"
              }}
              className="absolute text-[200px] font-black"
              style={{ 
                top: `${20 * i}%`, 
                left: `${15 * i}%`,
                color: "#2563EB"
              }}
            >
              +
            </motion.div>
          ))}
        </div>

        {/* Subtle top rule gradient */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-[#F8FAFC] to-white pointer-events-none" />
      </div>

      <section className="relative z-10 pt-32 sm:pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-28 items-start">

          {/* ── Left Column: Branding & Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-12"
          >
            {/* Status & Time Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl border border-brand-primary/10 bg-[#F0F6FF]/60 backdrop-blur-md w-fit shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-primary">Nexus Connection</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl border border-[#E2E8F0] bg-white/60 backdrop-blur-md w-fit shadow-sm"
              >
                <Clock size={12} className="text-[#64748B]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#64748B]">DC Local: {dcTime}</span>
              </motion.div>
            </div>

            {/* Main Typography */}
            <div className="space-y-8">
              <h1 className="text-[clamp(44px,7.5vw,84px)] font-black tracking-tighter leading-[0.92] text-[#0F172A]">
                Let&apos;s build<br />
                <span className="relative inline-block text-brand-primary">
                  something that lasts.
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 1, ease: "circOut" }}
                    className="absolute -bottom-2 left-0 right-0 h-[4px] bg-linear-to-r from-brand-primary to-brand-accent rounded-full origin-left"
                  />
                </span>
              </h1>
              <p className="text-xl text-[#475569] leading-relaxed max-w-lg font-medium">
                CODICE has supported Washington DC agencies for 16 years. Tell us your mission — we&apos;ll tell you how we&apos;d approach it.
              </p>
            </div>

            {/* Contact Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <a
                href={`mailto:${company.email}`}
                className="group flex items-center gap-5 p-5 rounded-[24px] border border-[#E2E8F0] bg-white/50 backdrop-blur-sm hover:bg-white hover:border-brand-primary/30 hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F0F6FF] border border-brand-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500">
                  <Mail size={18} className="text-brand-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#94A3B8] mb-1">Electronic Mail</p>
                  <p className="text-base font-bold text-[#0F172A] truncate group-hover:text-brand-primary transition-colors">{company.email}</p>
                </div>
              </a>

              <a
                href={`tel:${company.phone}`}
                className="group flex items-center gap-5 p-5 rounded-[24px] border border-[#E2E8F0] bg-white/50 backdrop-blur-sm hover:bg-white hover:border-brand-primary/30 hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F0F6FF] border border-brand-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500">
                  <Phone size={18} className="text-brand-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#94A3B8] mb-1">Direct Line</p>
                  <p className="text-base font-bold text-[#0F172A] group-hover:text-brand-primary transition-colors">{company.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 rounded-[24px] border border-[#E2E8F0] bg-white/40 backdrop-blur-sm col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F6FF] border border-brand-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#94A3B8] mb-1">Washington, DC — HQ</p>
                  <p className="text-sm font-bold text-[#334155] leading-snug">{company.address}</p>
                </div>
              </div>
            </div>

            {/* Trust Signals & Socials */}
            <div className="flex flex-wrap items-center gap-3">
              {trustSignals.map(({ icon: Icon, text }, idx) => (
                <motion.div 
                  key={text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-[#E2E8F0] bg-white/60 text-[11px] font-bold tracking-wide text-[#64748B] hover:border-brand-primary/20 transition-colors"
                >
                  <Icon size={14} className="text-brand-primary" /> {text}
                </motion.div>
              ))}
              <Link
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-[#0A66C2] text-white text-[11px] font-bold shadow-lg shadow-[#0A66C2]/20 hover:scale-105 transition-all"
              >
                <ExternalLink size={14} /> LinkedIn
              </Link>
            </div>
          </motion.div>

          {/* ── Right Column: Interactive Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative p-1 md:p-1.5 rounded-[40px] bg-linear-to-br from-[#E2E8F0] via-white to-[#E2E8F0] shadow-[0_32px_80px_rgba(15,23,42,0.14)]">
              <div className="p-8 md:p-12 rounded-[36px] bg-white/90 backdrop-blur-2xl relative overflow-hidden">
                {/* Form Background Accent */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/3 blur-[60px] rounded-full pointer-events-none" />
                
                <div className="mb-10 relative">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">Request a Briefing</h2>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                      <span className="text-[10px] font-bold text-[#166534] uppercase tracking-wider">Accepting Inquiries</span>
                    </div>
                  </div>
                  <p className="text-[#64748B] text-lg font-medium leading-relaxed max-w-sm">Schedule a technical consultation with our architecture team within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field
                      label="Full Name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(v) => setFormState({ ...formState, name: v })}
                    />
                    <Field
                      label="Inquiry Email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(v) => setFormState({ ...formState, email: v })}
                    />
                  </div>
                  <Field
                    label="Goverment Agency / Organization"
                    type="text"
                    value={formState.agency}
                    onChange={(v) => setFormState({ ...formState, agency: v })}
                  />
                  <div className="relative group">
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="peer w-full bg-[#F8FAFC]/50 border-2 border-[#F1F5F9] rounded-3xl px-6 pt-10 pb-6 text-[#0F172A] text-base font-medium focus:outline-none focus:border-brand-primary focus:bg-white transition-all resize-none placeholder-transparent"
                      placeholder="Message"
                    />
                    <label className="absolute left-6 top-3.5 text-[10px] font-bold tracking-[0.25em] uppercase text-[#94A3B8] transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-3.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.25em] peer-focus:text-brand-primary">
                      Mission Requirements & Context
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`group relative w-full flex items-center justify-center gap-3 font-bold px-10 py-5 rounded-3xl text-base tracking-wide transition-all duration-500 overflow-hidden ${
                      isSubmitted
                        ? "bg-emerald-50 text-emerald-700 border-2 border-emerald-200"
                        : "bg-[#0F172A] text-white hover:bg-brand-primary shadow-[0_20px_48px_rgba(15,23,42,0.2)] hover:shadow-[0_20px_48px_rgba(37,99,235,0.3)] hover:-translate-y-1 disabled:opacity-70"
                    }`}
                  >
                    {/* Shimmer Effect */}
                    {!isSubmitted && !isSubmitting && (
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                    )}

                    {isSubmitting ? (
                      <><div className="w-5 h-5 border-3 border-white/20 border-t-white rounded-full animate-spin" />Processing...</>
                    ) : isSubmitted ? (
                      "✓ Message Dispatched Successfully"
                    ) : (
                      <>
                        Initiate Connection 
                        <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-500" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label, type, required, value, onChange,
}: {
  label: string; type: string; required?: boolean; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="relative group">
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full bg-[#F8FAFC]/50 border-2 border-[#F1F5F9] rounded-[24px] px-6 pt-9 pb-4 text-[#0F172A] text-base font-bold focus:outline-none focus:border-brand-primary focus:bg-white transition-all placeholder-transparent"
        placeholder={label}
      />
      <label className="absolute left-6 top-3.5 text-[10px] font-bold tracking-[0.25em] uppercase text-[#94A3B8] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-3.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.25em] peer-focus:text-brand-primary">
        {label}
      </label>
    </div>
  );
}
