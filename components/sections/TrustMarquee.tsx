"use client";

import { clientLogos } from "@/data/codice";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustMarquee() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <div className="py-12 border-y border-gray-200 overflow-hidden bg-white">
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-[#64748B] mb-10">
        Trusted by Washington DC&apos;s Leading Agencies
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <motion.div
          className="flex items-center gap-12 px-8"
          style={{ width: "max-content" }}
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((logo, i) => (
            <div key={i} className="shrink-0 h-10 w-24 relative grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
              <Image
                src={logo}
                alt="Client logo"
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
