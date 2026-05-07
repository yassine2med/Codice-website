"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";

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
    title: "CFO Emmash Sudusignhe Welcomed by Sri Lanka Engineering Team",
    source: "CODICE news",
    href: "https://codicetech.com/a-quick-throwback-to-our-cfo/",
    icon: Users,
    summary:
      "A look at the international reach of CODICE's operations as CFO Emmash Sudusignhe visits the Colombo engineering and finance center — strengthening the global team behind DC's government technology.",
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
    <main className="min-h-screen bg-background text-brand-navy selection:bg-brand-primary/10">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden mesh-gradient">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full animate-pulse-slow" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 glass-card px-4 py-2 rounded-full mb-8 border-black/5 shadow-sm">
              <BookOpen size={14} className="text-brand-primary" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-primary">Knowledge Hub</span>
            </div>
            <h1 className="text-[clamp(48px,8vw,92px)] font-extrabold tracking-tighter leading-[0.9] mb-8 text-brand-navy">
              Field Notes from <br />
              <span className="text-gradient text-glow">The Mission.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-xl font-medium">
              Curated thinking on legacy transformation, AI compliance, and the high-fidelity future of public sector operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-10 rounded-[3rem] border-black/5 relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-brand-primary mb-8 border-b border-black/5 pb-4">Editorial Strategy</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {editorialThemes.map((theme) => (
                <div key={theme} className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 border border-black/5 hover:border-brand-primary/20 transition-colors shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  <span className="text-sm font-bold text-gray-600">{theme}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map(({ icon: Icon, ...article }, idx) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative glass-card p-10 rounded-[2.5rem] border-black/5 hover:border-brand-primary/30 transition-all duration-500 flex flex-col h-full shadow-xl"
              >
                <div className="flex items-start justify-between mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-brand-navy group-hover:bg-brand-primary transition-all duration-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                    <Icon size={32} />
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-black/5 bg-slate-100 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    {article.source}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-brand-navy group-hover:text-brand-primary transition-colors leading-tight">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 flex-1 font-medium">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {article.points.map((p) => (
                    <span key={p} className="px-3 py-1 rounded-lg bg-slate-100 border border-black/5 text-[11px] font-bold text-gray-500 group-hover:border-brand-primary/20 transition-colors uppercase tracking-widest">
                      {p}
                    </span>
                  ))}
                </div>

                <Link
                  href={article.href}
                  target="_blank"
                  className="inline-flex items-center gap-3 text-brand-primary font-bold text-sm tracking-widest uppercase group/link"
                >
                  Explore Insight <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[4rem] glass-card border-black/5 p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-primary mb-8">Architect the Future</p>
            <h2 className="text-[clamp(36px,6vw,68px)] font-bold mb-8 leading-none tracking-tighter text-brand-navy">
              Transform your mission <br /> with CODICE.
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium">
              Bring your most complex legacy challenges. Let&apos;s build a high-fidelity roadmap for modernization together.
            </p>
            <Link
              href="/contact"
              className="bg-brand-primary text-white font-bold px-12 py-6 rounded-2xl text-lg shadow-xl hover:shadow-brand-primary/40 transition-all duration-300 hover:-translate-y-1 inline-block"
            >
              Request a Briefing
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
