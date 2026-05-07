import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CloudCog,
  FileText,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { company } from "@/data/codice";

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
    <main className="min-h-screen overflow-x-hidden bg-[#0A1628] text-[#F8FAFC]">
      <Navbar />

      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.22),transparent_34%),linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-size-[auto,4rem_4rem,4rem_4rem] opacity-35" />
        <div className="absolute right-[-14%] top-16 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
              Articles
            </p>
            <h1 className="text-[clamp(44px,7vw,84px)] font-bold leading-[1.02] tracking-tight">
              Field notes from government modernization.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
              Curated CODICE thinking on legacy transformation, compliance, health IT,
              AI, cloud architecture, and public-sector operations.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[#1E293B] bg-[#0F172A]/86 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.38)]">
            <div className="mb-6 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-[#60A5FA]" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#60A5FA]">
                Editorial Focus
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {editorialThemes.map((theme) => (
                <div key={theme} className="rounded-xl border border-[#1E293B] bg-[#0A1628] px-4 py-3 text-sm font-semibold text-[#CBD5E1]">
                  {theme}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1E293B] bg-[#0F172A] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {articles.map(({ icon: Icon, ...article }) => (
              <article
                key={article.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#1E293B] bg-[#0A1628] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#60A5FA]/60"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-transparent" />
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/14 text-[#60A5FA]">
                    <Icon size={24} />
                  </div>
                  <p className="rounded-full border border-[#1E293B] px-3 py-1 font-mono text-xs text-[#64748B]">
                    {article.source}
                  </p>
                </div>
                <h2 className="text-2xl font-bold leading-tight text-white">{article.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">{article.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {article.points.map((point) => (
                    <span key={point} className="rounded-full bg-[#111827] px-3 py-1.5 text-xs font-semibold text-[#CBD5E1]">
                      {point}
                    </span>
                  ))}
                </div>
                <Link
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#60A5FA] hover:text-white"
                >
                  Read Source
                  <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#2563EB]/10" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#93C5FD]">
            More from {company.name}
          </p>
          <h2 className="text-[clamp(34px,5vw,58px)] font-bold leading-tight tracking-tight">
            Need a deeper technical discussion?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#CBD5E1]">
            Bring a legacy system, compliance challenge, or digital-service workflow.
            CODICE can help turn the problem into a practical modernization plan.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#0A1628]"
          >
            Talk to CODICE
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
