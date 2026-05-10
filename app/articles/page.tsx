"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Building2,
  CloudCog,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

const articles = [
  {
    title: "Transforming Legacy Systems Using Microservices",
    source: "CODICE article",
    href: "https://codicetech.com/transforming-legacy-systems-using-microservices/",
    icon: CloudCog,
    summary:
      "A practical modernization approach for moving monolithic systems into modular, cloud-native services without disrupting operations.",
    points: ["Domain-driven design", "DevOps and CI/CD", "API gateways and service integration"],
  },
  {
    title: "FortiMind and the Future of Regulatory Intelligence",
    source: "CODICE launch article",
    href: "https://codicetech.com/fortimindlaunch/",
    icon: BrainCircuit,
    summary:
      "How AI can help agencies and regulated organizations search federal, state, municipal, and international rules with cited answers.",
    points: ["Natural-language research", "Multi-jurisdiction coverage", "90% faster research positioning"],
  },
  {
    title: "CelerKost: Medicaid Cost Reporting and Fraud Prevention",
    source: "CODICE product article",
    href: "https://codicetech.com/medicaid-fraud-prevention/",
    icon: ShieldCheck,
    summary:
      "A look at digital cost reporting, audit trails, validation, and transparency for healthcare providers and government agencies.",
    points: ["Automated validation", "Auditor transparency", "HIPAA-compliant controls"],
  },
  {
    title: "CODICE Capability Statement",
    source: "CODICE capability page",
    href: "https://codicetech.com/capability/",
    icon: FileText,
    summary:
      "A compact overview of CODICE services, markets, credentials, NAICS codes, and government-ready delivery capabilities.",
    points: ["Legacy modernization", "Cybersecurity and compliance", "Health IT and public sector apps"],
  },
  {
    title: "Attending the Annual DC Economic Partnership Meeting",
    source: "CODICE news",
    href: "https://codicetech.com/attending-the-annual-dc-economic-partnership-meeting/",
    icon: Building2,
    summary:
      "CODICE had the pleasure of attending the annual DC Economic Partnership meeting — connecting with agency leaders, business owners, and public-sector innovators shaping Washington DC's economic future.",
    points: ["Government partnerships", "DC economic ecosystem", "Community engagement"],
  },
  {
    title: "CFO Emmash Sudusinghe Welcomed by Sri Lanka Engineering Team",
    source: "CODICE news",
    href: "https://codicetech.com/a-quick-throwback-to-our-cfo/",
    icon: Users,
    summary:
      "A look at the international reach of CODICE's operations as CFO Emmash Sudusinghe visits the Colombo engineering and finance center — strengthening the global team behind DC's government technology.",
    points: ["International engineering hub", "Sri Lanka operations", "Global talent strategy"],
  },
];

const editorialThemes = [
  "Legacy system modernization",
  "AI and regulatory intelligence",
  "Health IT and Medicaid operations",
  "Cloud, data, and cybersecurity",
  "Public-sector workflow automation",
  "Digital services and citizen experience",
];

export default function ArticlesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#0A0F1E]">
        {/* Background photo */}
        <div className="absolute inset-0 pointer-events-none">
          <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=60" alt="" fill className="object-cover object-center" style={{ opacity: 0.07 }} />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0F1E]/30 via-transparent to-[#0A0F1E]/60" />
        </div>
        <div className="absolute inset-0 dot-grid opacity-[0.15] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2563EB]/40 to-transparent" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 border border-[#2563EB]/25 bg-[#2563EB]/10">
              <BookOpen size={14} className="text-[#60A5FA]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#60A5FA]">Knowledge Hub</span>
            </div>
            <h1 className="text-[clamp(36px,8vw,88px)] font-extrabold tracking-tighter leading-[0.92] mb-8 text-white">
              Field Notes from{" "}
              <span style={{ color: "#60A5FA" }}>The Mission.</span>
            </h1>
            <p className="text-xl text-[#94A3B8] leading-relaxed max-w-xl">
              Curated thinking on legacy transformation, AI compliance, and the high-fidelity future of public sector operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 rounded-3xl border border-[#1E293B] bg-[#0F172A] shadow-[0_8px_48px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#2563EB]/3 pointer-events-none" />
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-[#60A5FA] mb-6 border-b border-white/[0.06] pb-4">Editorial Strategy</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {editorialThemes.map((theme) => (
                <div key={theme} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-[#2563EB]/30 hover:bg-[#2563EB]/5 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                  <span className="text-sm font-semibold text-[#64748B] hover:text-white transition-colors">{theme}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map(({ icon: Icon, ...article }, idx) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group bg-white border border-[#E2E8F0] p-8 rounded-3xl hover:border-[#2563EB]/40 hover:shadow-[0_8px_40px_rgba(37,99,235,0.10)] transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300 group-hover:text-white group-hover:scale-110">
                    <Icon size={26} />
                  </div>
                  <span className="px-3 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">
                    {article.source}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-4 group-hover:text-[#2563EB] transition-colors leading-tight text-[#0F172A]">
                  {article.title}
                </h2>
                <p className="text-[#64748B] leading-relaxed mb-6 flex-1">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {article.points.map((p) => (
                    <span key={p} className="px-3 py-1 rounded-lg bg-[#F0F6FF] border border-[#2563EB]/15 text-[11px] font-semibold text-[#1D4ED8]">
                      {p}
                    </span>
                  ))}
                </div>

                <Link
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2563EB] font-bold text-[11px] tracking-widest uppercase group/link"
                >
                  Explore Insight <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto rounded-3xl border border-[#E2E8F0] bg-white p-16 md:p-20 text-center relative overflow-hidden shadow-[0_4px_40px_rgba(15,23,42,0.05)]">
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#2563EB]/4 blur-[100px] rounded-full pointer-events-none" />

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#2563EB] mb-6">Architect the Future</p>
            <h2 className="text-[clamp(32px,5vw,60px)] font-bold mb-6 leading-none tracking-tighter text-[#0F172A]">
              Transform your mission{" "}
              <span className="text-[#2563EB]">with CODICE.</span>
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Bring your most complex legacy challenges. Let&apos;s build a high-fidelity roadmap for modernization together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#2563EB] text-white font-bold px-10 py-5 rounded-2xl shadow-[0_8px_32px_rgba(37,99,235,0.25)] hover:bg-[#1D4ED8] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Briefing <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
