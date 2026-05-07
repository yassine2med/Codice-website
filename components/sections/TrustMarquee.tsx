"use client";

import { clients } from "@/data/codice";
import { motion } from "framer-motion";

export default function TrustMarquee() {
  const doubled = [...clients, ...clients, ...clients]; // Triple for smoother loop at high speeds

  return (
    <div className="py-12 border-y border-[#1E293B] overflow-hidden bg-[#0A1628]">
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-[#64748B] mb-10">
        Trusted by Washington DC&apos;s Leading Agencies
      </p>
      
      <div className="relative w-full overflow-hidden">
        {/* Fade Mask Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0A1628] to-transparent pointer-events-none" />
        
        {/* Fade Mask Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0A1628] to-transparent pointer-events-none" />

        <motion.div 
          className="flex gap-16 whitespace-nowrap px-8"
          initial={{ x: 0 }}
          animate={{ x: "-33.333%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear" as any,
          }}
          whileHover={{ transition: { duration: 80 } }} // Optional: slow down on hover instead of pause, or pause
        >
          {doubled.map((client, i) => (
            <span 
              key={i} 
              className="text-lg md:text-xl font-medium text-[#64748B]/60 hover:text-[#2563EB] transition-colors cursor-default flex-shrink-0"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
