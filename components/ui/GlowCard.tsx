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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(37,99,235,0.25)", borderColor: "#2563EB" }}
      transition={{ duration: 0.3, ease: "easeOut" as any }}
      className={`bg-[#111827] border border-[#1E293B] rounded-2xl p-8 transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
