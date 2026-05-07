"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { services, stats } from "@/data/codice";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-brand-navy selection:bg-brand-primary/10">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden mesh-gradient">
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-3 glass-card px-4 py-2 rounded-full mb-8 border-black/5 shadow-sm">
                <CheckCircle2 size={14} className="text-brand-primary" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-primary">Mission Critical Expertise</span>
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-[clamp(48px,8vw,92px)] font-extrabold tracking-tighter leading-[0.9] mb-8 text-brand-navy">
              Eight Services. <br />
              <span className="text-gradient text-glow">One Mission.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-12 font-medium">
              End-to-end technology solutions purpose-built for the public sector — from custom software and AI compliance to high-fidelity cloud infrastructure.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-16 gap-y-8 border-t border-black/5 pt-12">
              {stats.map((s) => (
                <div key={s.label} className="group">
                  <p className="text-4xl font-black text-brand-navy group-hover:text-brand-primary transition-colors tracking-tighter mb-1">
                    {s.value}{s.suffix}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-hover:text-brand-primary transition-colors">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group relative glass-card rounded-[3rem] p-10 border-black/5 hover:border-brand-primary/30 hover:shadow-2xl transition-all duration-500 flex flex-col shadow-xl"
              >
                <div className="flex items-start gap-8 mb-10">
                  <div className="w-20 h-20 rounded-[2rem] bg-slate-100 border border-black/5 flex items-center justify-center p-5 shrink-0 group-hover:bg-brand-primary transition-all duration-500 shadow-sm">
                    <div className="relative w-full h-full">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain brightness-0 group-hover:invert transition-all"
                        sizes="40px"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-brand-navy mb-3 group-hover:text-brand-primary transition-colors leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed font-medium">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 flex-1">
                  {service.features?.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      <p className="text-sm font-bold text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-black/5 mt-auto">
                  <div className="flex gap-2">
                    {service.techStack?.slice(0, 2).map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-slate-100 border border-black/5 text-[10px] font-bold tracking-widest uppercase text-gray-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-3 text-brand-primary font-bold text-xs tracking-[0.2em] uppercase group/link"
                  >
                    View Details <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why CODICE Section */}
      <section className="py-32 bg-white border-y border-black/5 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            label="The CODICE Difference"
            title="Engineered for Public Service"
            subtitle="16 years of delivery means we know the compliance, security, and operational realities of government that generic vendors overlook."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { label: "100% Agency Retention", desc: "Every agency partner has stayed with CODICE. Our track record is our strongest proposal." },
              { label: "GSA Schedule Authorized", desc: "Rapid procurement through simplified contracting vehicles for federal and local agencies." },
              { label: "Platform-First Delivery", desc: "We deploy proprietary high-fidelity platforms that give agencies total control and reliability." },
            ].map((item) => (
              <div key={item.label} className="p-12 rounded-[3rem] glass-card border-black/5 hover:border-brand-primary/30 transition-all group shadow-xl">
                <div className="w-2 h-12 bg-brand-primary mb-8 rounded-full group-hover:scale-y-125 transition-transform origin-top" />
                <h3 className="text-2xl font-bold text-brand-navy mb-4 leading-tight group-hover:text-brand-primary transition-colors">{item.label}</h3>
                <p className="text-gray-500 text-base leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
