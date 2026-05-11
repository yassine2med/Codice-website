"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle, Globe2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Globe from "@/components/ui/Globe";
import { BorderBeam } from "@/components/ui/BorderBeam";
import MagneticButton from "@/components/ui/MagneticButton";


const badges = [
  { icon: Shield, text: "FedRAMP Aligned" },
  { icon: CheckCircle, text: "GSA Schedule" },
  { icon: Globe2, text: "DC HQ" },
];

export default function CTABanner() {
  return (
    <section id="cta" className="relative overflow-hidden bg-brand-dark py-0">

      {/* ── Photography background layer ── */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1800&q=60"
          alt="Washington DC aerial"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
          unoptimized
        />
        {/* Dark overlay — keeps text readable, gives the dark premium feel */}
        <div className="absolute inset-0 bg-brand-dark/88" />
        {/* Blue radial glow from bottom */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(37,99,235,0.22),transparent)]" />
        {/* Left glow */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(37,99,235,0.12),transparent)]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-primary/50 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          {/* Badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#60A5FA] bg-brand-primary/12 border border-brand-primary/25 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
              Washington DC&apos;s Premier Gov-Tech Partner
            </span>
          </div>

          {/* Headline */}
          <div>
            <h2 className="text-[clamp(36px,5vw,62px)] font-bold text-white leading-[1.05] tracking-tight">
              Your Agency.
              <br />
              <span className="text-[#60A5FA]">Our Mission.</span>
            </h2>
            <p className="mt-6 text-[#64748B] text-lg leading-relaxed max-w-lg">
              Bring your most complex legacy challenge. CODICE delivers
              high-fidelity government technology — on time, on budget,
              with zero compromise.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
              >
                <Icon size={12} className="text-[#60A5FA]" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#94A3B8]">
                  {text}
                </span>
              </div>
            ))}
          </div>


          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <MagneticButton strength={0.3}>
              <Link
                href="/contact"
                className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold px-9 py-4 rounded-xl text-base transition-all duration-300 shadow-[0_8px_32px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
              >
                Schedule a Briefing <ArrowRight size={17} />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/15 hover:border-brand-primary/60 text-white font-bold px-9 py-4 rounded-xl text-base transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
              >
                Explore Services <ArrowRight size={17} />
              </Link>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right — Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-[520px] aspect-square">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-brand-primary/10 blur-[60px]" />

            {/* Globe container — dark card with BorderBeam */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/8">
              <BorderBeam
                colorFrom="#2563EB"
                colorTo="#60A5FA"
                duration={10}
                bg="#060E1A"
              />
              <Globe
                config={{
                  phi: 0.6,
                  theta: 0.35,
                  dark: 1,
                  diffuse: 1.2,
                  mapSamples: 20000,
                  mapBrightness: 6,
                  baseColor: [0.1, 0.14, 0.22] as [number, number, number],
                  markerColor: [0.37, 0.6, 0.92] as [number, number, number],
                  glowColor: [0.1, 0.25, 0.6] as [number, number, number],
                  markers: [
                    { location: [38.9072, -77.0369] as [number, number], size: 0.14 },
                    { location: [6.9271, 79.8612] as [number, number], size: 0.09 },
                    { location: [40.7128, -74.006] as [number, number], size: 0.05 },
                    { location: [51.5074, -0.1278] as [number, number], size: 0.05 },
                    { location: [1.3521, 103.8198] as [number, number], size: 0.04 },
                    { location: [35.6762, 139.6503] as [number, number], size: 0.04 },
                    { location: [48.8566, 2.3522] as [number, number], size: 0.04 },
                    { location: [-33.8688, 151.2093] as [number, number], size: 0.04 },
                  ],
                }}
              />
            </div>

            {/* DC label badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-8 right-0 bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">Washington, DC</span>
            </motion.div>

            {/* Colombo label badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute bottom-12 left-0 bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse" style={{ animationDelay: "0.5s" }} />
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">Colombo, LK</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom shimmer */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-primary/30 to-transparent" />
    </section>
  );
}
