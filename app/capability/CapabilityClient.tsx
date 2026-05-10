"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company } from "@/data/codice";
import { ArrowRight, Award, CheckCircle2, FileText, ShieldCheck, Printer } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const naicsCodes = [
  { code: "541511", label: "Custom Computer Programming Services" },
  { code: "541512", label: "Computer Systems Design Services" },
  { code: "541513", label: "Computer Facilities Management Services" },
  { code: "541519", label: "Other Computer Related Services" },
  { code: "541611", label: "Management Consulting Services" },
  { code: "541690", label: "Other Scientific and Technical Consulting" },
  { code: "518210", label: "Data Processing and Hosting Services" },
  { code: "541330", label: "Engineering Services" },
];

const certifications = [
  { label: "Certified Minority-Owned Small Business", body: "MBE Certified" },
  { label: "GSA Multiple Award Schedule (MAS)", body: "GSA Schedule 70 — IT" },
  { label: "SBA 8(a) Program Eligible", body: "Small Business Administration" },
  { label: "NIST 800-53 Aligned", body: "Security & Privacy Controls" },
  { label: "HIPAA Compliant Architecture", body: "Healthcare Data Security" },
  { label: "PCI-DSS Compliant Payment Systems", body: "Payment Card Industry" },
  { label: "FedRAMP-Ready Cloud Deployments", body: "Federal Cloud Security" },
  { label: "DC Small Business of the Year 2025", body: "DSLBD Award" },
];

const differentiators = [
  { stat: "100%", label: "Client Retention", desc: "Every agency we've served has stayed with CODICE across 16 years." },
  { stat: "16+", label: "Years in Government IT", desc: "Deep institutional knowledge of DC procurement, compliance, and agency missions." },
  { stat: "12+", label: "Government Agencies", desc: "Across DC — DOB, DDOT, DOES, DHCF, DCPS, CJCC, CFSA, OAG, and more." },
  { stat: "8", label: "Proprietary Platforms", desc: "We own every line of code — no third-party dependency, full control." },
];

export default function CapabilityClient() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-48 pb-20 sm:pb-32 overflow-hidden bg-[#0A0F1E]">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=60" alt="" className="w-full h-full object-cover object-center" style={{ opacity: 0.07 }} />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0F1E]/30 via-transparent to-[#0A0F1E]/70" />
        </div>
        <div className="absolute inset-0 dot-grid opacity-[0.15] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2563EB]/40 to-transparent" />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 bg-[#2563EB]/10 border border-[#2563EB]/25 px-4 py-2 rounded-full mb-8">
              <ShieldCheck size={14} className="text-[#60A5FA]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#60A5FA]">Procurement Ready</span>
            </div>
            <h1 className="text-[clamp(36px,8vw,88px)] font-extrabold tracking-tighter leading-[0.9] mb-8 text-white">
              Government-Ready. <br />
              <span style={{ color: "#60A5FA" }}>Mission-Proven.</span>
            </h1>
            <p className="text-xl text-[#94A3B8] leading-relaxed max-w-2xl mb-12">
              Everything procurement officers and agency program managers need to evaluate CODICE Technology as a premier technology partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="https://codicetech.com/capability/"
                target="_blank"
                className="group relative inline-flex items-center justify-center gap-3 bg-[#2563EB] text-white font-bold px-10 py-5 rounded-2xl text-base transition-all duration-300 shadow-[0_8px_32px_rgba(37,99,235,0.30)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.45)] hover:-translate-y-0.5"
              >
                <FileText size={18} /> Download Statement
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/10 hover:border-white/25 text-[#94A3B8] hover:text-white font-bold px-10 py-5 rounded-2xl text-base transition-all duration-300 hover:-translate-y-0.5"
              >
                Procurement Briefing <ArrowRight size={18} />
              </Link>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-3 border border-white/10 hover:border-white/25 text-[#94A3B8] hover:text-white font-bold px-10 py-5 rounded-2xl text-base transition-all duration-300 hover:-translate-y-0.5"
              >
                <Printer size={18} /> Print / Save PDF
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-6 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((d, idx) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <SpotlightCard className="p-8 rounded-2xl h-full flex flex-col justify-center text-center group hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.10)] transition-all shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                  <span className="text-5xl font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-3 tracking-tighter font-[family-name:var(--font-dm-mono)]">{d.stat}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-3">{d.label}</span>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{d.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-28 px-6 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Compliance"
            title="Certifications & Standards"
            subtitle="CODICE maintains the rigorous compliance posture required for mission-critical government operations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert) => (
              <SpotlightCard key={cert.label} className="p-7 h-full group hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <div className="w-11 h-11 rounded-2xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center mb-6 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-2 leading-tight">{cert.label}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">{cert.body}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS Section */}
      <section className="py-28 px-6 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Procurement Data"
            title="NAICS Codes & Vehicles"
            subtitle="Simplifying procurement through established contract vehicles and standardized classification."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {naicsCodes.map((n) => (
              <div key={n.code} className="p-6 rounded-2xl bg-white border border-[#E2E8F0] group hover:border-[#2563EB]/30 hover:shadow-[0_4px_16px_rgba(37,99,235,0.08)] transition-all">
                <span className="block text-2xl font-bold text-[#2563EB] mb-2 tracking-tighter font-[family-name:var(--font-dm-mono)]">{n.code}</span>
                <span className="text-sm text-[#64748B] group-hover:text-[#0F172A] transition-colors">{n.label}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "GSA MAS Contract", value: "Schedule 70", detail: "IT Products & Services vehicle for rapid agency procurement." },
              { label: "DUNS Number", value: "Verified in SAM", detail: "Active and registered for federal procurement systems." },
              { label: "CAGE Code", value: "Active Status", detail: "Ready for DoD and federal contracting office verification." },
            ].map((item) => (
              <div key={item.label} className="p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/30 hover:shadow-[0_4px_16px_rgba(37,99,235,0.08)] transition-all">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2563EB] mb-4">{item.label}</p>
                <p className="text-2xl font-bold text-[#0F172A] mb-3">{item.value}</p>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="py-28 px-6 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Evidence of Delivery"
            title="Government Agencies Served"
            subtitle="Deep institutional experience across 12+ DC agencies with a 100% successful delivery record."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "DC Department of Buildings (DOB)",
              "DC Department of Transportation (DDOT)",
              "DC Department of General Services (DGS)",
              "DC Public Schools (DCPS)",
              "DC Department of Employment Services (DOES)",
              "DC Department of Health Care Finance (DHCF)",
              "Criminal Justice Coordinating Council (CJCC)",
              "DC Child and Family Services Agency (CFSA)",
              "Metropolitan Police Department (MPD)",
              "Office of the Attorney General (OAG)",
              "Office of the Chief Technology Officer (OCTO)",
              "DC Department of Human Services (DHS)",
            ].map((agency) => (
              <div key={agency} className="flex items-center gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/30 hover:bg-white hover:shadow-[0_4px_16px_rgba(37,99,235,0.07)] transition-all group">
                <div className="w-8 h-8 rounded-full bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-sm font-semibold text-[#334155] group-hover:text-[#0F172A] transition-colors">{agency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-[#E2E8F0] p-14 md:p-20 text-center relative overflow-hidden shadow-[0_4px_32px_rgba(15,23,42,0.06)]">
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-linear-to-r from-transparent via-[#2563EB]/40 to-transparent rounded-full" />
          <Award className="mx-auto mb-8 h-14 w-14 text-[#2563EB] animate-float" />
          <h2 className="text-[clamp(32px,5.5vw,60px)] font-bold text-[#0F172A] mb-6 leading-tight tracking-tight">
            Architect your next <br /> mission success.
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto mb-12 leading-relaxed">
            CODICE is ready to respond to RFPs, capability inquiries, and teaming opportunities with high-fidelity technical depth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/contact"
              className="bg-[#2563EB] text-white font-bold px-10 py-5 rounded-2xl text-lg shadow-[0_8px_32px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.35)] transition-all"
            >
              Request a Briefing
            </Link>
            <a
              href={`mailto:${company.email}`}
              className="bg-white border-2 border-[#E2E8F0] hover:border-[#2563EB]/40 text-[#0F172A] font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:-translate-y-0.5"
            >
              Email Procurement
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
