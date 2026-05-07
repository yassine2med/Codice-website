import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { company, services, products } from "@/data/codice";
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
    <main className="min-h-screen overflow-x-hidden bg-[#0A1628] text-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(37,99,235,0.22),transparent_36%),linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-size-[auto,4rem_4rem,4rem_4rem] opacity-35" />
        <div className="absolute left-[-10%] top-16 h-[500px] w-[500px] rounded-full bg-[#2563EB]/18 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
              Capability Statement
            </p>
            <h1 className="text-[clamp(44px,7vw,82px)] font-bold leading-[1.02] tracking-tight">
              Government-Ready.
              <br />
              <span className="text-[#2563EB]">Mission-Proven.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
              Everything procurement officers, contracting vehicles, and agency program managers
              need to evaluate CODICE Technology as a trusted technology partner.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://codicetech.com/capability/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#0A1628]"
              >
                <FileText size={16} /> Download Capability Statement
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-[#334155] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#CBD5E1] hover:border-[#60A5FA] hover:text-white transition-colors"
              >
                Contact for Procurement <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company snapshot */}
      <section className="border-y border-[#1E293B] bg-[#0F172A] py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {differentiators.map((d) => (
              <SpotlightCard key={d.label} className="p-7 hover:border-[#2563EB]/40 transition-colors h-full">
                <p className="font-mono text-4xl font-bold text-[#2563EB] mb-2">{d.stat}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#60A5FA] mb-3">{d.label}</p>
                <p className="text-xs text-[#475569] leading-relaxed">{d.desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">Credentials & Compliance</p>
            <h2 className="text-[clamp(32px,5vw,52px)] font-bold leading-tight tracking-tight">
              Certifications & Standards
            </h2>
            <p className="mt-4 text-[#64748B] leading-relaxed">
              CODICE maintains the certifications and compliance posture required by government procurement officers and program managers.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <SpotlightCard key={cert.label} className="p-6 hover:border-[#2563EB]/40 transition-colors h-full">
                <ShieldCheck className="mb-4 h-6 w-6 text-[#2563EB]" />
                <p className="text-sm font-bold text-[#F8FAFC] mb-2 leading-snug">{cert.label}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#475569]">{cert.body}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS Codes */}
      <section className="border-y border-[#1E293B] bg-[#0F172A] py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">Procurement</p>
            <h2 className="text-[clamp(32px,5vw,52px)] font-bold leading-tight tracking-tight">
              NAICS Codes & Contract Vehicles
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {naicsCodes.map((n) => (
              <SpotlightCard key={n.code} className="p-5 hover:border-[#2563EB]/40 transition-colors h-full">
                <p className="font-mono text-xl font-bold text-[#2563EB] mb-2">{n.code}</p>
                <p className="text-sm text-[#94A3B8] leading-snug">{n.label}</p>
              </SpotlightCard>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { label: "GSA MAS Contract", value: "Schedule 70 — IT Products and Services", detail: "Simplifies procurement for federal and local agencies." },
              { label: "DUNS Number", value: "Available on request", detail: "For verification in SAM.gov and federal procurement systems." },
              { label: "CAGE Code", value: "Available on request", detail: "For DoD and federal contracting office verification." },
            ].map((item) => (
              <SpotlightCard key={item.label} className="p-7 hover:border-[#2563EB]/40 transition-colors h-full">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] mb-2">{item.label}</p>
                <p className="text-base font-bold text-[#F8FAFC] mb-2">{item.value}</p>
                <p className="text-xs text-[#475569] leading-relaxed">{item.detail}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">Services</p>
            <h2 className="text-[clamp(32px,5vw,52px)] font-bold leading-tight tracking-tight">
              Core Capabilities
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.id} href={`/services/${s.slug}`} className="group h-full">
                <SpotlightCard className="p-6 hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col gap-3 h-full">
                  <p className="text-base font-bold text-[#F8FAFC] group-hover:text-[#2563EB] transition-colors leading-snug">{s.title}</p>
                  <p className="text-xs text-[#475569] leading-relaxed flex-1">{s.description}</p>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] inline-flex items-center gap-1 mt-auto">
                    Learn More <ArrowRight size={10} />
                  </span>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="border-y border-[#1E293B] bg-[#0F172A] py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">Past Performance</p>
            <h2 className="text-[clamp(32px,5vw,52px)] font-bold leading-tight tracking-tight">
              Government Agencies Served
            </h2>
            <p className="mt-4 text-[#64748B] leading-relaxed">
              12+ DC government agencies across permitting, health IT, employment, public safety, and youth services.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
              <div key={agency} className="flex items-start gap-3 rounded-xl border border-[#1E293B] bg-[#0A1628] px-5 py-4">
                <CheckCircle2 size={14} className="text-[#2563EB] mt-0.5 shrink-0" />
                <p className="text-sm text-[#94A3B8] leading-snug">{agency}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for procurement */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#2563EB]/8" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Award className="mx-auto mb-6 h-10 w-10 text-[#2563EB]" />
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">Ready to Partner</p>
          <h2 className="text-[clamp(34px,5vw,58px)] font-bold leading-tight tracking-tight">
            Start the conversation.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#64748B]">
            CODICE is ready to respond to RFPs, capability inquiries, and teaming opportunities.
            Contact us directly for a capability briefing.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#0A1628]"
            >
              Contact for Procurement <ArrowRight size={17} />
            </Link>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#334155] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#CBD5E1] hover:border-[#60A5FA] hover:text-white transition-colors"
            >
              {company.email} <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
