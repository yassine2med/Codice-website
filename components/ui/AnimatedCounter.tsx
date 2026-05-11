"use client";
import CountUp from "react-countup";
import { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", duration = 2.5 }: AnimatedCounterProps) {
  const [done, setDone] = useState(false);

  return (
    <motion.span
      animate={{ color: done ? "#22C55E" : "#0F172A" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <CountUp
        end={value}
        suffix={suffix}
        duration={duration}
        enableScrollSpy
        scrollSpyDelay={200}
        onEnd={() => setDone(true)}
      />
    </motion.span>
  );
}
