"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, ExternalLink, Newspaper, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import Lightbox from "@/components/ui/Lightbox";
import { company, news } from "@/data/codice";
import { motion } from "framer-motion";

const featuredUpdates = [
  {
    type: "LinkedIn update",
    title: "Benefits Eligibility & Document Verification Tool for DC DHS",
    date: "Recent LinkedIn update",
    summary: "CODICE built a secure, mobile-responsive benefits eligibility and document verification tool with DC DHS to help residents understand TANF, SNAP, and Medicaid eligibility.",
    href: company.social.linkedin,
    icon: ShieldCheck,
  },
  {
    type: "Product launch",
    title: "FortiMind: AI-Driven Regulatory Intelligence",
    date: "November 5, 2025",
    summary: "CODICE announced FortiMind as an AI platform for cited answers across federal, state, municipal, and global regulations — positioned for agencies and regulated industries.",
    href: "https://codicetech.com/fortimindlaunch/",
    icon: Sparkles,
  },
];

const sourceItems = [
  ...news,
  {
    title: "CelerKost: Revolutionizing Medicaid Cost Reporting",
    date: "CODICE article",
    excerpt: "Automated validation, auditor transparency, HIPAA-compliant controls, predictive analytics, and fraud alerts for Medicaid cost reporting.",
    image: "/images/news/news-2.jpg",
    slug: "https://codicetech.com/medicaid-fraud-prevention/",
  },
  {
    title: "CODICE Capability Statement",
    date: "Capability overview",
    excerpt: "A public overview of CODICE services, government markets, certifications, GSA schedule details, NAICS codes, and modernization capabilities.",
    image: "/images/news/news-3.jpg",
    slug: "https://codicetech.com/capability/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function NewsPage() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; alt: string } | null>(null);

  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-white text-[#0F172A]">
      <Lightbox images={lightbox?.images ?? []} initialIndex={lightbox?.index ?? 0} isOpen={!!lightbox} onClose={() => setLightbox(null)} altText={lightbox?.alt} />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-40 pb-16 sm:pb-24 bg-[#0A0F1E]">
        {/* Background photo */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1600&q=60"
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.07 }}
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0F1E]/30 via-transparent to-[#0A0F1E]/60" />
        </div>
        <div className="absolute inset-0 dot-grid opacity-[0.15] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2563EB]/40 to-transparent" />
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#60A5FA]">News & Events</motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(40px,6vw,80px)] font-bold leading-[1.01] tracking-tighter text-white">
              Updates from the front lines of public-sector technology.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
              Product launches, agency modernization work, capability updates, and CODICE community news.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-3xl border border-[#1E293B] bg-[#0F172A] p-6 shadow-[0_8px_48px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#2563EB]/3 pointer-events-none" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                  <Newspaper className="h-4 w-4 text-[#60A5FA]" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#60A5FA]">Featured Updates</p>
              </div>
              <div className="space-y-4">
                {featuredUpdates.map(({ icon: Icon, ...item }) => (
                  <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="group block rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#2563EB]/30 hover:bg-[#2563EB]/5"
                  >
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-[#60A5FA]" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-[#475569] group-hover:text-[#60A5FA] transition-colors" />
                    </div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#60A5FA] mb-1">{item.type}</p>
                    <h2 className="text-base font-bold leading-tight text-white">{item.title}</h2>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#475569]">{item.date}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{item.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#2563EB]">Latest Collection</p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-[#0F172A]">
              Announcements, product stories, and capability notes.
            </h2>
          </div>

          {/* Featured first article */}
          {sourceItems[0] && (() => {
            const item = sourceItems[0];
            const external = item.slug.startsWith("http");
            return (
              <Link href={item.slug} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col md:flex-row rounded-3xl border border-[#E2E8F0] bg-white overflow-hidden mb-6 transition-all duration-300 hover:border-[#2563EB]/35 hover:shadow-[0_12px_48px_rgba(37,99,235,0.10)] hover:-translate-y-0.5"
              >
                {item.image && (
                  <div className="relative md:w-2/5 h-56 md:h-auto shrink-0 overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0" sizes="(max-width: 768px) 100vw, 40vw" />
                    <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/10" />
                  </div>
                )}
                <div className="flex flex-col justify-between p-8 md:p-10 flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full bg-[#2563EB] text-white text-[9px] font-black tracking-widest uppercase">Featured</span>
                      <span className="flex items-center gap-1.5 text-[#94A3B8] text-xs font-medium"><CalendarDays size={11} />{item.date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight mb-4 group-hover:text-[#2563EB] transition-colors duration-300">{item.title}</h3>
                    <p className="text-[#64748B] leading-relaxed">{item.excerpt}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2563EB] group-hover:text-[#1D4ED8]">
                    Read Full Story <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })()}

          {/* Remaining articles */}
          <div className="grid gap-6 lg:grid-cols-3">
            {sourceItems.slice(1).map((item) => {
              const external = item.slug.startsWith("http");
              const tagConfig: Record<string, { label: string; color: string }> = {
                "Product launch":     { label: "Product Launch", color: "bg-violet-50 border-violet-200 text-violet-600" },
                "CODICE article":     { label: "Article",        color: "bg-[#F0F6FF] border-[#2563EB]/20 text-[#2563EB]" },
                "Capability overview":{ label: "Capability",     color: "bg-emerald-50 border-emerald-200 text-emerald-600" },
              };
              const tag = tagConfig[item.date];
              return (
                <article key={item.title} className="group flex flex-col rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/35 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)]">
                  {item.image && (
                    <button type="button" className="relative w-full h-48 overflow-hidden cursor-zoom-in shrink-0"
                      onClick={() => setLightbox({ images: [item.image!], index: 0, alt: item.title })}>
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" sizes="(max-width: 1024px) 100vw, 33vw" />
                    </button>
                  )}
                  <div className="flex flex-1 flex-col justify-between p-7">
                    <div>
                      <div className="mb-4 flex items-center gap-2 flex-wrap">
                        {tag && (
                          <span className={`px-2.5 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest ${tag.color}`}>{tag.label}</span>
                        )}
                        <span className="flex items-center gap-1.5 text-[#94A3B8]"><CalendarDays size={11} /><span className="font-[family-name:var(--font-dm-mono)] text-[10px] uppercase tracking-widest">{item.date}</span></span>
                      </div>
                      <h3 className="text-lg font-bold leading-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-300">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{item.excerpt}</p>
                    </div>
                    <Link href={item.slug} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                      className="group/link mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2563EB] hover:text-[#1D4ED8]"
                    >
                      Read More <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Follow CTA */}
      <section className="py-24 bg-white border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#2563EB]">Follow {company.name}</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-[#0F172A]">
            Keep up with CODICE across public channels.
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={company.social.linkedin} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2563EB] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#1D4ED8] transition-colors shadow-[0_4px_20px_rgba(37,99,235,0.25)]"
            >
              LinkedIn <ExternalLink size={15} />
            </Link>
            <Link href="/articles"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#E2E8F0] hover:border-[#2563EB]/40 px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#64748B] hover:text-[#0F172A] transition-all"
            >
              Read Articles <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
