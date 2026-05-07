"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CircleDot,
  Handshake,
  Landmark,
  Layers3,
  Network,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import {
  caseStudies,
  clientLogos,
  clients,
  company,
  industryPartnerLogos,
  stats,
  testimonials,
} from "@/data/codice";

const trustedLogos = clientLogos;

const proofPoints = [
  {
    icon: ShieldCheck,
    title: "Mission-critical delivery",
    text: "Government technology programs delivered across health, transportation, education, public safety, legal, and workforce operations.",
  },
  {
    icon: BadgeCheck,
    title: "Long-term confidence",
    text: "Relationships built on responsive teams, practical delivery, and systems that keep operating after launch.",
  },
  {
    icon: Sparkles,
    title: "Product-backed execution",
    text: "Custom delivery strengthened by CODICE platforms for permits, reporting, payments, case management, and regulatory intelligence.",
  },
];

const featuredClientNames = [
  "DC Department of Health Care Finance",
  "DC Department of Transportation",
  "Office of the Chief Technology Officer",
  "DC Public Schools",
];

const logoConstellation = trustedLogos.slice(0, 9);

const deliverySignals = [
  {
    icon: Landmark,
    title: "Agency-aware",
    text: "Built around procurement, compliance, reporting, and operational realities.",
  },
  {
    icon: Network,
    title: "Cross-department",
    text: "Designed for workflows that move between teams, offices, and stakeholders.",
  },
  {
    icon: Layers3,
    title: "Platform plus services",
    text: "Combines custom delivery with proven CODICE product foundations.",
  },
  {
    icon: Handshake,
    title: "Partner-ready",
    text: "Works with primes, agencies, and delivery partners without adding friction.",
  },
];

export default function ClientsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A1628] text-[#F8FAFC]">
      <Navbar />

      <section className="relative isolate overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.24),transparent_32%),linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-size-[auto,4rem_4rem,4rem_4rem] opacity-35" />
        <div className="absolute left-[-10%] top-24 h-[520px] w-[520px] rounded-full bg-[#2563EB]/20 blur-[120px]" />
        <div className="absolute right-[-18%] top-0 h-[640px] w-[640px] rounded-full bg-[#38BDF8]/12 blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#0A1628] to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-[#60A5FA]">
              Clients & Partners
            </p>
            <h1 className="text-[clamp(44px,7vw,88px)] font-bold leading-[0.98] tracking-tight">
              The client network behind durable public systems.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#94A3B8] md:text-xl">
              CODICE supports agencies and partners modernizing essential services,
              from permitting and healthcare finance to education operations,
              public safety, compliance, and workforce systems.
            </p>
            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-[#2563EB]/45 pl-4">
                  <p className="font-mono text-2xl font-semibold text-white md:text-3xl">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/case-studies"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#0A1628] shadow-[0_18px_60px_rgba(255,255,255,0.12)] transition-all hover:-translate-y-0.5"
              >
                View Case Studies
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#334155] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#CBD5E1] transition-colors hover:border-[#60A5FA] hover:text-white"
              >
                Discuss a Project
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[2.5rem] bg-linear-to-br from-[#2563EB]/28 via-[#0F172A] to-cyan-400/12 blur-3xl" />
            <div className="relative rounded-[2rem] border border-[#334155]/80 bg-[#0F172A]/82 p-4 shadow-[0_40px_120px_rgba(2,6,23,0.55)] backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                  <div className="rounded-[1.35rem] border border-[#1E293B] bg-[#08111F] p-5">
                    <div className="mb-8 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">
                        Agency Map
                      </p>
                      <Building2 className="h-6 w-6 text-[#60A5FA]" />
                    </div>
                    <div className="space-y-3">
                      {featuredClientNames.map((name) => (
                        <div key={name} className="flex items-start gap-3">
                          <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-[#60A5FA]" />
                          <p className="text-sm font-semibold leading-snug text-[#E2E8F0]">{name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.35rem] border border-[#1E293B] bg-[#111827] p-5">
                    <Quote className="mb-5 h-7 w-7 text-[#2563EB]" />
                    <p className="text-sm leading-relaxed text-[#CBD5E1]">
                      &ldquo;{testimonials[0].quote}&rdquo;
                    </p>
                    <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#64748B]">
                      {testimonials[0].name}
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[500px] overflow-hidden rounded-[1.35rem] border border-[#1E293B] bg-[radial-gradient(circle_at_50%_38%,rgba(37,99,235,0.22),transparent_42%),#08111F] p-5">
                  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/25" />
                  <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#60A5FA]/20" />
                  <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#60A5FA]/40 bg-[#0F172A] p-5 shadow-[0_0_70px_rgba(37,99,235,0.22)]">
                    <Image
                      src="/images/brand/codice-logo-wtitle.png"
                      alt="CODICE mark"
                      width={1536}
                      height={1024}
                      className="h-full w-full rounded-full object-cover object-center"
                      priority
                    />
                  </div>
                  {logoConstellation.map((logo, index) => {
                    const positions = [
                      "left-[8%] top-[8%]",
                      "right-[10%] top-[10%]",
                      "left-[5%] top-[42%]",
                      "right-[5%] top-[42%]",
                      "left-[13%] bottom-[10%]",
                      "right-[14%] bottom-[11%]",
                      "left-[37%] top-[5%]",
                      "left-[39%] bottom-[4%]",
                      "right-[34%] top-[67%]",
                    ];

                    return (
                      <div
                        key={logo}
                        className={`absolute ${positions[index]} flex h-16 w-24 items-center justify-center rounded-xl border border-white/10 bg-white p-3 shadow-[0_16px_35px_rgba(2,6,23,0.3)] animate-float`}
                        style={{ animationDelay: `${index * 0.4}s` }}
                      >
                        <Image
                          src={logo}
                          alt={`CODICE client constellation logo ${index + 1}`}
                          width={240}
                          height={120}
                          className="max-h-10 w-auto max-w-full object-contain"
                        />
                      </div>
                    );
                  })}
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-[#1E293B] bg-[#0A1628]/86 p-4 backdrop-blur">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#60A5FA]">
                      Public-sector trust graph
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                      Agencies, delivery partners, and CODICE product teams connected around long-running systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-[#1E293B] bg-[#0F172A] py-24">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.08),transparent_36%,rgba(14,165,233,0.07))]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">
              Proven Relationships
            </p>
            <h2 className="text-[clamp(34px,5vw,60px)] font-bold leading-tight tracking-tight">
              A trusted partner for federal and local agencies.
            </h2>
          </div>

          <div className="space-y-24">
            {clients.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px flex-1 bg-[#1E293B]" />
                  <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#2563EB] whitespace-nowrap">
                    {category.category}
                  </h3>
                  <div className="h-px flex-1 bg-[#1E293B]" />
                </div>
                
                <motion.div 
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.08 } }
                  }}
                  className="grid grid-cols-2 gap-4 md:grid-cols-4"
                >
                  {category.items.map((client) => (
                    <motion.div
                      key={client.name}
                      variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 20 },
                        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                      }}
                      className="group flex flex-col items-center justify-center rounded-3xl border border-[#1E293B] bg-white/5 p-8 transition-all duration-300 hover:border-[#2563EB]/40 hover:bg-white/10"
                    >
                      <div className="relative w-full aspect-2/1 mb-4 bg-white rounded-xl p-4 flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={240}
                          height={120}
                          className="max-h-12 w-auto object-contain"
                        />
                      </div>
                      <p className="text-[11px] font-bold text-[#94A3B8] text-center group-hover:text-[#F8FAFC] transition-colors leading-tight">
                        {client.name}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-[#2563EB]/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">
              How Trust Is Built
            </p>
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight">
              The difference is not just who CODICE serves. It is how the work holds together.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {deliverySignals.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="relative rounded-2xl border border-[#1E293B] bg-[#111827]/80 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.22)]"
              >
                <span className="absolute right-5 top-5 font-mono text-xs text-[#475569]">
                  0{index + 1}
                </span>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/14 text-[#60A5FA]">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {proofPoints.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-[#1E293B] bg-[#0F172A] p-7">
                <Icon className="mb-5 h-7 w-7 text-[#60A5FA]" />
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#1E293B] bg-[#111827] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">
              Engagement Highlights
            </p>
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight">
              Outcomes across the work CODICE is trusted to handle.
            </h2>
            </div>
            <Link
              href="/case-studies"
              className="group inline-flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#60A5FA] hover:text-white"
            >
              See the work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={`${study.client}-${study.product}`}
                className="group relative flex min-h-[410px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#1E293B] bg-[#0A1628] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#60A5FA]/60"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#2563EB] via-[#38BDF8] to-transparent" />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2563EB]/10 blur-3xl transition duration-300 group-hover:bg-[#2563EB]/20" />
                <div>
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#60A5FA]">
                        {study.product}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-white">{study.client}</h3>
                    </div>
                    <span className="rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 px-4 py-2 font-mono text-xs text-[#BFDBFE]">
                      {study.metric}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{study.challenge}</p>
                  <div className="mt-6 rounded-2xl border border-[#1E293B] bg-[#111827] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Solution</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">{study.solution}</p>
                  </div>
                </div>
                <div className="mt-8 border-t border-[#1E293B] pt-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#60A5FA]">Outcome</p>
                  <p className="text-sm font-semibold text-[#E2E8F0]">{study.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">
              Client Voice
            </p>
            <h2 className="max-w-xl text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight">
              Trusted because the delivery teams stay accountable.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#94A3B8]">
              The strongest proof is repeat trust: calm delivery, clear communication, and teams that stay close to the mission.
            </p>
          </div>

          <div className="space-y-5">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="rounded-[1.5rem] border border-[#1E293B] bg-[#0F172A] p-7"
              >
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  <Quote className="h-9 w-9 text-[#2563EB]" />
                  <div>
                    <blockquote className="text-lg leading-relaxed text-[#CBD5E1]">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 border-t border-[#1E293B] pt-5">
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="mt-1 text-sm text-[#94A3B8]">
                        {item.title}, {item.company}
                      </p>
                    </figcaption>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#1E293B] bg-[#0F172A] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">
                Industry Partners
              </p>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                Built to collaborate with the broader technology ecosystem.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {industryPartnerLogos.map((logo, index) => (
                <div
                  key={logo}
                  className="flex aspect-[2.2] items-center justify-center rounded-xl border border-[#1E293B] bg-white p-5"
                >
                  <Image
                    src={logo}
                    alt={`CODICE industry partner logo ${index + 1}`}
                    width={360}
                    height={120}
                    className="max-h-12 w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#2563EB]/10" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/20 blur-[130px]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#93C5FD]">
            Work With {company.name}
          </p>
          <h2 className="text-[clamp(34px,5vw,60px)] font-bold leading-tight tracking-tight">
            Bring CODICE into your next public-sector modernization program.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#CBD5E1]">
            Talk with a team that understands mission pressure, procurement realities,
            sensitive data, and the operational detail needed to ship durable systems.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#0A1628] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(255,255,255,0.12)]"
            >
              Start the Conversation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

