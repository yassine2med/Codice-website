"use client";

import { clientLogos, clients, industryPartnerLogos } from "@/data/codice";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { Building2, ShieldCheck, Sparkles } from "lucide-react";

const trustedLogos = [...clientLogos, ...industryPartnerLogos];

const firstRow = trustedLogos.filter((_, index) => index % 2 === 0);
const secondRow = trustedLogos.filter((_, index) => index % 2 !== 0);
const firstLoop = [...firstRow, ...firstRow, ...firstRow];
const secondLoop = [...secondRow, ...secondRow, ...secondRow];

const featuredSignals = [
  {
    icon: ShieldCheck,
    label: "Government delivery",
    value: "16+ years",
  },
  {
    icon: Building2,
    label: "Agency relationships",
    value: "12+ agencies",
  },
  {
    icon: Sparkles,
    label: "Retention record",
    value: "100%",
  },
];

export default function TrustMarquee() {
  const firstControls = useAnimationControls();
  const secondControls = useAnimationControls();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    firstControls.start({
      x: "-33.33%",
      transition: { duration: 56, repeat: Infinity, ease: "linear" },
    });
    secondControls.start({
      x: "0%",
      transition: { duration: 62, repeat: Infinity, ease: "linear" },
    });
  }, [firstControls, secondControls]);

  useEffect(() => {
    if (hovered) {
      firstControls.stop();
      secondControls.stop();
    } else {
      firstControls.start({
        x: "-33.33%",
        transition: { duration: 56, repeat: Infinity, ease: "linear" },
      });
      secondControls.start({
        x: "0%",
        transition: { duration: 62, repeat: Infinity, ease: "linear" },
      });
    }
  }, [hovered, firstControls, secondControls]);

  return (
    <section className="relative overflow-hidden border-y border-[#1E293B] bg-[#071121] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.22),transparent_42%),linear-gradient(to_right,#1E293B_1px,transparent_1px)] bg-size-[auto,4rem_4rem] opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#60A5FA]/70 to-transparent" />

      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
              Trusted by Washington DC&apos;s Leading Agencies
            </p>
            <h2 className="max-w-3xl text-[clamp(30px,4vw,52px)] font-bold leading-tight tracking-tight text-white">
              Real agencies, real programs, and a network built through delivery.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {featuredSignals.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-[#1E293B] bg-[#0F172A]/86 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.22)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB]/14 text-[#60A5FA]">
                  <Icon size={20} />
                </div>
                <p className="font-mono text-2xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-linear-to-r from-[#071121] to-transparent md:w-44" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-linear-to-l from-[#071121] to-transparent md:w-44" />

        <div
          className="space-y-4"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            className="flex w-max items-center gap-4 px-6"
            animate={firstControls}
          >
            {firstLoop.map((logo, i) => (
              <LogoCard key={`${logo}-first-${i}`} logo={logo} index={i} />
            ))}
          </motion.div>
          <motion.div
            className="flex w-max items-center gap-4 px-6"
            initial={{ x: "-33.33%" }}
            animate={secondControls}
          >
            {secondLoop.map((logo, i) => (
              <LogoCard key={`${logo}-second-${i}`} logo={logo} index={i + firstLoop.length} compact />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 max-w-7xl px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {clients.flatMap(c => c.items).slice(0, 10).map((client) => (
            <span
              key={client.name}
              className="rounded-full border border-[#1E293B] bg-[#0F172A]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#475569] shadow-sm backdrop-blur-sm"
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoCard({
  logo,
  index,
  compact = false,
}: {
  logo: string;
  index: number;
  compact?: boolean;
}) {
  return (
    <div
      className={`group relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-5 shadow-[0_18px_50px_rgba(2,6,23,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#60A5FA]/70 ${
        compact ? "h-24 w-44" : "h-28 w-52"
      }`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white via-white to-[#E2E8F0]" />
      <Image
        src={logo}
        alt={`CODICE client and partner logo ${index + 1}`}
        fill
        className="relative object-contain p-5 transition duration-300 group-hover:scale-[1.04]"
        sizes={compact ? "176px" : "208px"}
      />
    </div>
  );
}

