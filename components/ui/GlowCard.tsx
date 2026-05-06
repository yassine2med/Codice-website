"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 0 32px rgba(37,99,235,0.2)" }}
      transition={{ duration: 0.2 }}
      className={`bg-[#111827] border border-[#1E293B] rounded-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
