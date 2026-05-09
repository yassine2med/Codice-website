"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { company } from "@/data/codice";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    agency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Website Inquiry from ${formState.name}${formState.agency ? ` — ${formState.agency}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nAgency: ${formState.agency || 'Not provided'}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', agency: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 border border-[#2563EB]/20 bg-[#F0F6FF]">
              <Mail size={14} className="text-[#2563EB]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB]">Mission Coordination</span>
            </div>
            <h1 className="text-[clamp(36px,8vw,92px)] font-extrabold tracking-tighter leading-[0.92] mb-8 text-[#0F172A]">
              Let&apos;s Modernize{" "}
              <span className="text-[#2563EB]">Together.</span>
            </h1>
            <p className="text-xl text-[#64748B] leading-relaxed max-w-2xl">
              Ready to architect your agency&apos;s next success? Our team of high-fidelity technical experts is standing by for your briefing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left: Info */}
          <div className="flex flex-col gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-[#0F172A]">
                Secure. Scalable.{" "}
                <span className="text-[#2563EB]">Mission-Critical.</span>
              </h2>
              <p className="text-[#64748B] text-lg leading-relaxed">
                Whether you are looking to modernize legacy government systems or implement AI governance, CODICE Technology has the technical depth to deliver with precision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email */}
              <div className="p-8 rounded-3xl border border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all">
                  <Mail className="text-[#2563EB] group-hover:text-white transition-colors" size={22} />
                </div>
                <h3 className="text-[10px] font-bold text-[#94A3B8] tracking-[0.4em] uppercase mb-3">Direct Email</h3>
                <a href={`mailto:${company.email}`} className="text-[#0F172A] font-bold hover:text-[#2563EB] transition-colors text-base break-all leading-tight">
                  {company.email}
                </a>
              </div>

              {/* Phone */}
              <div className="p-8 rounded-3xl border border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all">
                  <Phone className="text-[#2563EB] group-hover:text-white transition-colors" size={22} />
                </div>
                <h3 className="text-[10px] font-bold text-[#94A3B8] tracking-[0.4em] uppercase mb-3">Priority Line</h3>
                <a href={`tel:${company.phone}`} className="text-[#0F172A] font-bold hover:text-[#2563EB] transition-colors text-base leading-tight">
                  {company.phone}
                </a>
              </div>

              {/* Offices */}
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {company.offices.map((office, idx) => (
                  <div key={idx} className="p-8 rounded-3xl border border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all">
                      <MapPin className="text-[#2563EB] group-hover:text-white transition-colors" size={22} />
                    </div>
                    <h3 className="text-[10px] font-bold text-[#94A3B8] tracking-[0.4em] uppercase mb-3">
                      {office.headquarters ? 'Headquarters' : 'Regional Office'}
                    </h3>
                    <p className="text-[#0F172A] font-black text-2xl mb-1 tracking-tight">
                      {office.city}
                    </p>
                    <p className="text-[#94A3B8] font-medium text-sm">
                      {office.country}
                    </p>
                    {office.headquarters && (
                      <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                        <p className="text-[#64748B] text-sm leading-relaxed">
                          {company.address}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <div className="p-10 md:p-12 rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_4px_40px_rgba(15,23,42,0.06)]">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-[#0F172A] mb-3 tracking-tight">Initiate Briefing</h3>
                <p className="text-[#64748B] leading-relaxed">Submit your mission details and our strategy team will coordinate a technical briefing.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="peer w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 pt-7 pb-3 text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-all placeholder-transparent"
                      placeholder="Name"
                    />
                    <label className="absolute left-5 top-2.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#94A3B8] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#2563EB]">
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="peer w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 pt-7 pb-3 text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-all placeholder-transparent"
                      placeholder="Email"
                    />
                    <label className="absolute left-5 top-2.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#94A3B8] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#2563EB]">
                      Work Email
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={formState.agency}
                    onChange={(e) => setFormState({...formState, agency: e.target.value})}
                    className="peer w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 pt-7 pb-3 text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-all placeholder-transparent"
                    placeholder="Agency"
                  />
                  <label className="absolute left-5 top-2.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#94A3B8] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#2563EB]">
                    Agency or Organization
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="peer w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 pt-8 pb-4 text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-all resize-none placeholder-transparent"
                    placeholder="Message"
                  />
                  <label className="absolute left-5 top-2.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#94A3B8] transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#2563EB]">
                    Mission Requirements
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`relative overflow-hidden group w-full flex items-center justify-center gap-3 font-bold px-8 py-5 rounded-2xl text-base transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-50 text-green-600 border border-green-200"
                      : "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-[0_8px_32px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 disabled:opacity-70"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Transmitting...
                    </>
                  ) : isSubmitted ? (
                    "Mission Logged Successfully"
                  ) : (
                    <>
                      Coordinate Briefing
                      <Send size={17} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
