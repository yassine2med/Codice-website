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
import { PageHero } from "@/components/ui/PageHero";
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
    <main className="min-h-screen overflow-x-hidden bg-white text-[#0F172A]">
      <Navbar />

      <PageHero
        label="Clients & Partners"
        title="The network behind durable public systems."
        subtitle="CODICE supports agencies modernizing essential services — from permitting and healthcare finance to public safety, compliance, and workforce systems."
        bgImage="https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1600&q=70"
      />

      {/* Stats + CTAs row */}
      <section className="py-12 px-6 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-[#2563EB]/40 pl-4">
                <p className="font-mono text-2xl font-semibold text-[#0F172A] md:text-3xl">
                  {stat.value}{stat.suffix}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/case-studies" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#2563EB] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-[0_4px_20px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              View Case Studies <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#E2E8F0] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-[#64748B] transition-all hover:border-[#2563EB]/40 hover:text-[#0F172A]">
              Discuss a Project
            </Link>
          </div>
        </div>
      </section>

      {/* Agency map + logo constellation panel */}
      <section className="py-16 px-6 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="rounded-[2rem] border border-[#E2E8F0] bg-white p-4 shadow-[0_8px_60px_rgba(15,23,42,0.08)]">
              <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                  <div className="rounded-[1.35rem] border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                    <div className="mb-8 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2563EB]">
                        Agency Map
                      </p>
                      <Building2 className="h-6 w-6 text-[#2563EB]" />
                    </div>
                    <div className="space-y-3">
                      {featuredClientNames.map((name) => (
                        <div key={name} className="flex items-start gap-3">
                          <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                          <p className="text-sm font-semibold leading-snug text-[#334155]">{name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.35rem] border border-[#E2E8F0] bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
                    <Quote className="mb-5 h-7 w-7 text-[#2563EB]" />
                    <p className="text-sm leading-relaxed text-[#334155]">
                      &ldquo;{testimonials[0].quote}&rdquo;
                    </p>
                    <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
                      {testimonials[0].name}
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[500px] overflow-hidden rounded-[1.35rem] border border-[#E2E8F0] bg-[radial-gradient(circle_at_50%_38%,rgba(37,99,235,0.07),transparent_60%),#F8FAFC] p-5">
                  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/15" />
                  <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/10" />
                  <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#2563EB]/20 bg-white p-5 shadow-[0_0_40px_rgba(37,99,235,0.12)]">
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
                        className={`absolute ${positions[index]} flex h-16 w-24 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-[0_4px_16px_rgba(15,23,42,0.08)] animate-float`}
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
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-[#E2E8F0] bg-white/90 backdrop-blur p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563EB]">
                      Public-sector trust graph
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                      Agencies, delivery partners, and CODICE product teams connected around long-running systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos grid */}
      <section className="relative border-y border-[#E2E8F0] bg-[#F8FAFC] py-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#2563EB]">
              Proven Relationships
            </p>
            <h2 className="text-[clamp(34px,5vw,60px)] font-bold leading-tight tracking-tight text-[#0F172A]">
              A trusted partner for federal and local agencies.
            </h2>
          </div>

          <div className="space-y-24">
            {clients.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px flex-1 bg-[#E2E8F0]" />
                  <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#2563EB] whitespace-nowrap">
                    {category.category}
                  </h3>
                  <div className="h-px flex-1 bg-[#E2E8F0]" />
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
                      className="group flex flex-col items-center justify-center rounded-3xl border border-[#E2E8F0] bg-white p-8 transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)]"
                    >
                      <div className="relative w-full aspect-2/1 mb-4 bg-[#F8FAFC] rounded-xl p-4 flex items-center justify-center border border-[#E2E8F0]">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={240}
                          height={120}
                          className="max-h-12 w-auto object-contain"
                        />
                      </div>
                      <p className="text-[11px] font-bold text-[#94A3B8] text-center group-hover:text-[#334155] transition-colors leading-tight">
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

      {/* How trust is built */}
      <section className="relative py-28 bg-white">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#2563EB]">
              How Trust Is Built
            </p>
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight text-[#0F172A]">
              The difference is not just who CODICE serves. It is how the work holds together.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {deliverySignals.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="relative rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:border-[#2563EB]/40 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all"
              >
                <span className="absolute right-5 top-5 font-mono text-xs text-[#CBD5E1]">
                  0{index + 1}
                </span>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F6FF] border border-[#2563EB]/15 text-[#2563EB]">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#64748B]">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {proofPoints.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 hover:border-[#2563EB]/40 transition-all">
                <Icon className="mb-5 h-7 w-7 text-[#2563EB]" />
                <h3 className="text-xl font-bold text-[#0F172A]">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#64748B]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#2563EB]">
                Engagement Highlights
              </p>
              <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight text-[#0F172A]">
                Outcomes across the work CODICE is trusted to handle.
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="group inline-flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#2563EB] hover:text-[#1D4ED8]"
            >
              See the work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={`${study.client}-${study.product}`}
                className="group relative flex min-h-[410px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_8px_40px_rgba(37,99,235,0.10)]"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-[#2563EB] via-[#3B82F6] to-transparent" />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2563EB]/5 blur-3xl transition duration-300 group-hover:bg-[#2563EB]/10" />
                <div>
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563EB]">
                        {study.product}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">{study.client}</h3>
                    </div>
                    <span className="rounded-full border border-[#2563EB]/20 bg-[#F0F6FF] px-4 py-2 font-mono text-xs text-[#2563EB]">
                      {study.metric}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#64748B]">{study.challenge}</p>
                  <div className="mt-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">Solution</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#334155]">{study.solution}</p>
                  </div>
                </div>
                <div className="mt-8 border-t border-[#E2E8F0] pt-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#2563EB]">Outcome</p>
                  <p className="text-sm font-semibold text-[#0F172A]">{study.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#2563EB]">
              Client Voice
            </p>
            <h2 className="max-w-xl text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight text-[#0F172A]">
              Trusted because the delivery teams stay accountable.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#64748B]">
              The strongest proof is repeat trust: calm delivery, clear communication, and teams that stay close to the mission.
            </p>
          </div>

          <div className="space-y-5">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="rounded-[1.5rem] border border-[#E2E8F0] bg-white p-7 hover:border-[#2563EB]/30 hover:shadow-[0_4px_20px_rgba(37,99,235,0.06)] transition-all"
              >
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  <Quote className="h-9 w-9 text-[#2563EB]" />
                  <div>
                    <blockquote className="text-lg leading-relaxed text-[#334155]">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 border-t border-[#E2E8F0] pt-5">
                      <p className="font-bold text-[#0F172A]">{item.name}</p>
                      <p className="mt-1 text-sm text-[#64748B]">
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

      {/* Industry Partners */}
      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#2563EB]">
                Industry Partners
              </p>
              <h2 className="text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">
                Built to collaborate with the broader technology ecosystem.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {industryPartnerLogos.map((logo, index) => (
                <div
                  key={logo}
                  className="flex aspect-[2.2] items-center justify-center rounded-xl border border-[#E2E8F0] bg-white p-5 hover:border-[#2563EB]/30 hover:shadow-[0_4px_16px_rgba(37,99,235,0.06)] transition-all"
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

      {/* CTA */}
      <section className="relative overflow-hidden py-24 bg-white">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/5 blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#2563EB]">
            Work With {company.name}
          </p>
          <h2 className="text-[clamp(34px,5vw,60px)] font-bold leading-tight tracking-tight text-[#0F172A]">
            Bring CODICE into your next public-sector modernization program.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#64748B]">
            Talk with a team that understands mission pressure, procurement realities,
            sensitive data, and the operational detail needed to ship durable systems.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_8px_32px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
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
