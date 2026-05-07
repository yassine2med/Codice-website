import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ExternalLink,
  Newspaper,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { company, news } from "@/data/codice";

const featuredUpdates = [
  {
    type: "LinkedIn update",
    title: "Benefits Eligibility & Document Verification Tool for DC DHS",
    date: "Recent LinkedIn update",
    summary:
      "CODICE shared a secure, mobile-responsive benefits eligibility and document verification tool built with the District of Columbia Department of Human Services to help residents understand potential TANF, SNAP, and Medicaid eligibility and required documentation.",
    href: company.social.linkedin,
    icon: ShieldCheck,
  },
  {
    type: "Product launch",
    title: "FortiMind: AI-Driven Regulatory Intelligence",
    date: "November 5, 2025",
    summary:
      "CODICE announced FortiMind as an AI platform for cited answers across federal, state, municipal, and global regulations, positioned for agencies and regulated industries.",
    href: "https://codicetech.com/fortimindlaunch/",
    icon: Sparkles,
  },
];

const sourceItems = [
  ...news,
  {
    title: "CelerKost: Revolutionizing Medicaid Cost Reporting",
    date: "CODICE article",
    excerpt:
      "A product-focused article on automated validation, auditor transparency, HIPAA-compliant controls, predictive analytics, and fraud alerts for Medicaid cost reporting.",
    image: "/images/news/news-2.jpg",
    slug: "https://codicetech.com/medicaid-fraud-prevention/",
  },
  {
    title: "CODICE Capability Statement",
    date: "Capability overview",
    excerpt:
      "A public overview of CODICE services, government markets, certifications, GSA schedule details, NAICS codes, and modernization capabilities.",
    image: "/images/news/news-3.jpg",
    slug: "https://codicetech.com/capability/",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A1628] text-[#F8FAFC]">
      <Navbar />

      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(37,99,235,0.24),transparent_34%),linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-size-[auto,4rem_4rem,4rem_4rem] opacity-35" />
        <div className="absolute right-[-12%] top-16 h-[540px] w-[540px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
              News & Events
            </p>
            <h1 className="text-[clamp(44px,7vw,86px)] font-bold leading-[1.01] tracking-tight">
              Updates from the front lines of public-sector technology.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
              Product launches, agency modernization work, capability updates, and
              CODICE community news gathered from CODICE public channels.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-[#1E293B] bg-[#0F172A]/88 p-6 shadow-[0_38px_100px_rgba(2,6,23,0.42)]">
            <div className="mb-6 flex items-center gap-3">
              <Newspaper className="h-6 w-6 text-[#60A5FA]" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#60A5FA]">
                Featured Updates
              </p>
            </div>
            <div className="space-y-4">
              {featuredUpdates.map(({ icon: Icon, ...item }) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-[#1E293B] bg-[#0A1628] p-5 transition-colors hover:border-[#60A5FA]/60"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <Icon className="h-6 w-6 text-[#60A5FA]" />
                    <ExternalLink className="h-4 w-4 text-[#475569] transition-colors group-hover:text-[#60A5FA]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#60A5FA]">{item.type}</p>
                  <h2 className="mt-2 text-xl font-bold leading-tight text-white">{item.title}</h2>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#64748B]">{item.date}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1E293B] bg-[#0F172A] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">
              Latest Collection
            </p>
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight">
              Announcements, product stories, and capability notes.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {sourceItems.map((item) => {
              const external = item.slug.startsWith("http");
              return (
                <article key={item.title} className="group flex min-h-[340px] flex-col justify-between rounded-[1.5rem] border border-[#1E293B] bg-[#0A1628] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#60A5FA]/60">
                  <div>
                    <div className="mb-8 flex items-center gap-3 text-[#64748B]">
                      <CalendarDays size={17} />
                      <p className="font-mono text-xs uppercase tracking-widest">{item.date}</p>
                    </div>
                    <h3 className="text-2xl font-bold leading-tight text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">{item.excerpt}</p>
                  </div>
                  <Link
                    href={item.slug}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group/link mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#60A5FA] hover:text-white"
                  >
                    Read More
                    <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#2563EB]/10" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#93C5FD]">
            Follow {company.name}
          </p>
          <h2 className="text-[clamp(34px,5vw,58px)] font-bold leading-tight tracking-tight">
            Keep up with CODICE updates across public channels.
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#0A1628]"
            >
              LinkedIn
              <ExternalLink size={17} />
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#334155] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#CBD5E1] hover:border-[#60A5FA] hover:text-white"
            >
              Read Articles
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
