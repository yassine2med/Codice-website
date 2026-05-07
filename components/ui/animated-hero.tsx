"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["innovative", "modern", "compliant", "scalable", "mission-driven"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length]);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-[#0A1628] overflow-hidden">
      {/* 1. Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 10%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 10%, transparent 100%)',
          }}
        />
      </div>

      {/* 2. Blue Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex gap-10 py-20 lg:py-40 items-center justify-center flex-col">
          <motion.div variants={itemVariants}>
            <Button variant="outline" size="sm" className="gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB] border-[#2563EB]/20 bg-[#2563EB]/5 hover:bg-[#2563EB]/10 transition-colors">
              DC&apos;s Small Business of the Year <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <div className="flex gap-6 flex-col items-center">
            <motion.h1 
              variants={itemVariants}
              className="text-[clamp(40px,8vw,80px)] font-bold tracking-tight text-center leading-[1.1] text-[#F8FAFC] max-w-4xl"
            >
              <span>Government tech that is</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 pt-1 min-h-[1.2em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-[#2563EB]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? -50 : 50,
                            opacity: 0,
                          }
                    }
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed tracking-tight text-[#64748B] max-w-2xl text-center font-medium"
            >
              16 years. 12+ agencies. 100% client retention. Codice Technology
              builds the mission-critical software that keeps Washington DC running.
            </motion.p>
          </div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button size="lg" className="h-14 px-10 gap-4 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-bold text-base transition-all hover:shadow-[0_0_24px_rgba(37,99,235,0.4)]">
              Explore Our Work <MoveRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 gap-4 border-[#1E293B] text-[#F8FAFC] font-bold text-base hover:bg-white/5 transition-all">
              View Services
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* 3. Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#64748B]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#2563EB] w-5 h-5" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export { Hero };
