"use client";

import { clientLogos } from "@/data/codice";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function TrustMarquee() {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const doubled = [...clientLogos, ...clientLogos, ...clientLogos];

  useEffect(() => {
    controls.start({
      x: "-33.33%",
      transition: { 
        duration: 40, 
        repeat: Infinity, 
        ease: "linear",
      }
    });
  }, [controls]);

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: "-33.33%",
        transition: { 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear",
        }
      });
    }
  }, [isHovered, controls]);

  return (
    <div className="py-12 border-y border-[#1E293B] overflow-hidden bg-[#0A1628]">
      <p className="text-center text-[10px] font-bold tracking-[0.3em] uppercase text-[#64748B] mb-10">
        Trusted by Washington DC&apos;s Leading Agencies
      </p>

      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-r from-[#0A1628] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-l from-[#0A1628] to-transparent pointer-events-none" />

        <motion.div
          className="flex items-center gap-16 px-8"
          style={{ width: "max-content" }}
          animate={controls}
        >
          {doubled.map((logo, i) => (
            <div key={i} className="shrink-0 h-12 w-32 relative grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
              <Image
                src={logo}
                alt="Client logo"
                fill
                className="object-contain mix-blend-screen"
                sizes="128px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
