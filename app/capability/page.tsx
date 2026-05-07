import type { Metadata } from "next";
import Navbar from "@/components/nav/Navbar";

export const metadata: Metadata = {
  title: "Capability Statement",
  description: "CODICE Technology capability statement — certifications, NAICS codes, GSA schedule, past performance across 12+ DC agencies, and core government IT services.",
  openGraph: {
    title: "Capability Statement | CODICE Technology",
    description: "Government-ready. Mission-proven. Everything procurement officers need to evaluate CODICE Technology as a trusted partner.",
  },
};
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { company, services } from "@/data/codice";
import { ArrowRight, Award, CheckCircle2, ExternalLink, FileText, ShieldCheck } from "lucide-react";
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
  {
    stat: "100%",
    label: "Client Retention",
    desc: "Every agency we've served has stayed with CODICE across 16 years.",
  },
  {
    stat: "16+",
    label: "Years in Government IT",
    desc: "Deep institutional knowledge of DC procurement, compliance, and agency missions.",
  },
  {
    stat: "12+",
    label: "Government Agencies",
    desc: "Across DC — DOB, DDOT, DOES, DHCF, DCPS, CJCC, CFSA, OAG, and more.",
  },
  {
    stat: "8",
    label: "Proprietary Platforms",
    desc: "We own every line of code — no third-party dependency, full control.",
  },
];

export default function CapabilityPage() {
  return (
    <main className="min-h-screen bg-brand-navy text-white selection:bg-brand-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden mesh-gradient">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-brand-primary/10 blur-[150px] rounded-full animate-pulse-slow" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 glass-card px-4 py-2 rounded-full mb-8 border-white/20">
              <ShieldCheck size={14} className="text-brand-accent" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent">Procurement Ready</span>
            </div>
            <h1 className="text-[clamp(48px,8vw,92px)] font-extrabold tracking-tighter leading-[0.9] mb-8">
              Government-Ready. <br />
              <span className="text-gradient text-glow">Mission-Proven.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-12">
              Everything procurement officers and agency program managers need to evaluate CODICE Technology as a premier technology partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="https://codicetech.com/capability/"
                target="_blank"
                className="group relative inline-flex items-center justify-center gap-3 bg-white text-brand-navy font-bold px-10 py-5 rounded-2xl text-base transition-all duration-300 hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:-translate-y-1"
              >
                <FileText size={20} /> Download Statement
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 glass-card hover:bg-white/10 text-white font-bold px-10 py-5 rounded-2xl text-base transition-all duration-300 hover:-translate-y-1"
              >
                Procurement Briefing <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 px-6 relative z-10 -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, idx) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <SpotlightCard className="p-10 rounded-[2.5rem] glass-card border-white/10 h-full flex flex-col justify-center text-center group hover:border-brand-primary/40 transition-all">
                  <span className="text-5xl font-black text-white group-hover:text-brand-primary transition-colors mb-3 tracking-tighter">{d.stat}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">{d.label}</span>
                  <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="Compliance"
            title="Certifications & Standards"
            subtitle="CODICE maintains the rigorous compliance posture required for mission-critical government operations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <SpotlightCard key={cert.label} className="p-8 rounded-3xl glass-card border-white/5 h-full group hover:border-brand-primary/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 leading-tight">{cert.label}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{cert.body}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS Section */}
      <section className="py-32 bg-black/20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            label="Procurement Data"
            title="NAICS Codes & Vehicles"
            subtitle="Simplifying procurement through established contract vehicles and standardized classification."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {naicsCodes.map((n) => (
              <div key={n.code} className="p-6 rounded-2xl glass-card border-white/5 group hover:border-brand-primary/20 transition-all">
                <span className="block text-2xl font-bold text-brand-primary mb-2 tracking-tighter">{n.code}</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{n.label}</span>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "GSA MAS Contract", value: "Schedule 70", detail: "IT Products & Services vehicle for rapid agency procurement." },
              { label: "DUNS Number", value: "Verified in SAM", detail: "Active and registered for federal procurement systems." },
              { label: "CAGE Code", value: "Active Status", detail: "Ready for DoD and federal contracting office verification." },
            ].map((item) => (
              <div key={item.label} className="p-10 rounded-[2.5rem] glass-card border-brand-primary/10 hover:border-brand-primary/30 transition-all">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-4">{item.label}</p>
                <p className="text-2xl font-bold text-white mb-4">{item.value}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="py-32 px-6">
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
              <div key={agency} className="flex items-center gap-4 p-6 rounded-2xl glass-card border-white/5 hover:border-brand-primary/20 transition-all group">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{agency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Briefing CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[4rem] glass-card border-brand-primary/20 p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-40 pointer-events-none" />
          <Award className="mx-auto mb-8 h-16 w-16 text-brand-primary animate-float" />
          <h2 className="text-[clamp(36px,6vw,68px)] font-bold mb-8 leading-none tracking-tighter">
            Architect your next <br /> mission success.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            CODICE is ready to respond to RFPs, capability inquiries, and teaming opportunities with high-fidelity technical depth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-white text-brand-navy font-bold px-12 py-6 rounded-2xl text-lg shadow-2xl hover:-translate-y-1 transition-all"
            >
              Request a Briefing
            </Link>
            <a
              href={`mailto:${company.email}`}
              className="glass-card hover:bg-white/10 text-white font-bold px-12 py-6 rounded-2xl text-lg transition-all"
            >
              Email Procurement
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
