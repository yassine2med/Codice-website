"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Building2, Lock, HeartPulse, CreditCard, Trophy, FileCheck } from "lucide-react";
import Link from "next/link";

const certs = [
  { icon: Trophy,      label: "DC Small Business of the Year", sub: "DSLBD · 2025",         highlight: true },
  { icon: Building2,   label: "GSA Schedule 70",              sub: "Multiple Award Schedule" },
  { icon: Award,       label: "Certified Minority-Owned",      sub: "MBE Certified" },
  { icon: ShieldCheck, label: "FedRAMP-Ready",                 sub: "Cloud Deployments" },
  { icon: Lock,        label: "NIST 800-53 Aligned",           sub: "Security Controls" },
  { icon: HeartPulse,  label: "HIPAA Compliant",               sub: "Healthcare Data" },
  { icon: CreditCard,  label: "PCI-DSS Compliant",             sub: "Payment Systems" },
  { icon: FileCheck,   label: "SBA 8(a) Eligible",             sub: "Small Business Admin" },
];

export default function TrustStrip() {
  return (
    <section className="py-12 bg-white border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2" style={{ color: "#EA580C" }}>Certified & Compliant</p>
            <h2 className="text-2xl font-bold text-[#0F172A] leading-tight">
              Every credential government procurement requires.
            </h2>
          </div>
          <Link
            href="/capability"
            className="shrink-0 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#64748B] hover:text-brand-primary transition-colors"
          >
            View Capability Statement →
          </Link>
        </div>

        {/* Cert grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {certs.map(({ icon: Icon, label, sub, highlight }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex flex-col items-center gap-3 p-4 rounded-2xl border text-center transition-all duration-300 ${
                highlight
                  ? "bg-[#FFF7ED] border-orange-200 hover:border-orange-400 hover:shadow-[0_4px_20px_rgba(249,115,22,0.12)]"
                  : "bg-[#F8FAFC] border-[#E2E8F0] hover:border-brand-primary/40 hover:bg-[#F0F6FF] hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)]"
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                highlight
                  ? "bg-orange-100 border border-orange-200 group-hover:bg-orange-500 group-hover:border-orange-500"
                  : "bg-white border border-[#E2E8F0] group-hover:bg-brand-primary group-hover:border-brand-primary"
              }`}>
                <Icon size={16} className={highlight
                  ? "text-orange-500 group-hover:text-white transition-colors duration-300"
                  : "text-brand-primary group-hover:text-white transition-colors duration-300"
                } />
              </div>
              <div>
                <p className={`text-[10px] font-bold leading-tight mb-0.5 transition-colors duration-300 ${
                  highlight ? "text-orange-700 group-hover:text-orange-800" : "text-[#0F172A] group-hover:text-brand-primary"
                }`}>{label}</p>
                <p className="text-[9px] text-[#94A3B8] font-medium leading-tight">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
