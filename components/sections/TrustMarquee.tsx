"use client";

import { clientLogos } from "@/data/codice";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function TrustMarquee() {
  const controls = useAnimationControls();
  const [hovered, setHovered] = useState(false);
  const tripled = [...clientLogos, ...clientLogos, ...clientLogos];

  useEffect(() => {
    controls.start({
      x: "-33.33%",
      transition: { duration: 45, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  useEffect(() => {
    if (hovered) {
      controls.stop();
    } else {
      controls.start({
        x: "-33.33%",
        transition: { duration: 45, repeat: Infinity, ease: "linear" },
      });
    }
  }, [hovered, controls]);

  return (
    <div className="py-14 border-y border-[#1E293B] bg-[#0A1628] overflow-hidden">
      <p className="text-center text-[10px] font-bold tracking-[0.35em] uppercase text-[#475569] mb-10">
        Trusted by Washington DC&apos;s Leading Agencies
      </p>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Fade masks match dark bg */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-r from-[#0A1628] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-l from-[#0A1628] to-transparent pointer-events-none" />

        <motion.div
          className="flex items-center gap-16 px-8"
          style={{ width: "max-content" }}
          animate={controls}
        >
          {tripled.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 relative h-10 w-28 opacity-30 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src={logo}
                alt="Client logo"
                fill
                className="object-contain mix-blend-screen"
                sizes="112px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
