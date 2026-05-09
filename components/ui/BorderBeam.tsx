"use client";

import { motion } from "framer-motion";

interface BorderBeamProps {
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  /** Background color of the parent — the inner mask uses this to hide the center. Defaults to white. */
  bg?: string;
}

/**
 * BorderBeam — rotating conic-gradient border glow.
 *
 * The parent must have `position: relative` and `overflow: hidden`.
 * Set `bg` to match your parent's background color.
 *
 * Usage (white bg):
 *   <div className="relative overflow-hidden rounded-2xl">
 *     <BorderBeam />
 *     Your content
 *   </div>
 *
 * Usage (dark bg):
 *   <div className="relative overflow-hidden rounded-2xl bg-[#0F172A]">
 *     <BorderBeam bg="#0F172A" colorFrom="#2563EB" colorTo="#60A5FA" />
 *     Your content
 *   </div>
 */
export function BorderBeam({
  duration = 8,
  delay = 0,
  colorFrom = "#2563EB",
  colorTo = "#93C5FD",
  className = "",
  bg = "#ffffff",
}: BorderBeamProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Rotating conic gradient — clips to parent via overflow:hidden */}
      <motion.div
        className="absolute inset-[-100%]"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, transparent 55%, ${colorFrom} 65%, ${colorTo} 75%, transparent 85%)`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration,
          delay,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      />
      {/* Inner mask — same color as parent bg, hides center and leaves only the border strip */}
      <div
        className="absolute inset-[1.5px] rounded-[inherit]"
        style={{ backgroundColor: bg }}
      />
    </div>
  );
}
