"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // 0–1, default 0.35
  onClick?: () => void;
  href?: string;
  as?: "button" | "div";
}

/**
 * MagneticButton — premium cursor magnetic pull effect.
 *
 * Wrap any CTA with this component. The element gently drifts toward the
 * cursor while it hovers nearby, snapping back with a spring when it leaves.
 *
 * Usage:
 *   <MagneticButton className="...your button styles...">
 *     Get Started
 *   </MagneticButton>
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 18, mass: 0.8 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  // Subtle scale on hover
  const scale = useSpring(hovered ? 1.04 : 1, { stiffness: 300, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rawX.set((e.clientX - cx) * strength);
    rawY.set((e.clientY - cy) * strength);
  }

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y, scale }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative inline-flex cursor-pointer select-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
