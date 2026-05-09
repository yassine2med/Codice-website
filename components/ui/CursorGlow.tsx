"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springX = useSpring(cursorX, { stiffness: 80, damping: 18, mass: 0.4 });
  const springY = useSpring(cursorY, { stiffness: 80, damping: 18, mass: 0.4 });

  const dotX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const dotY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  const isVisible = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible.current) isVisible.current = true;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Large soft aura */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 420,
          height: 420,
          background: "radial-gradient(circle, rgba(37,99,235,0.055) 0%, transparent 70%)",
        }}
      />
      {/* Small precise dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          backgroundColor: "rgba(37,99,235,0.55)",
          boxShadow: "0 0 12px rgba(37,99,235,0.5)",
        }}
      />
    </>
  );
}
