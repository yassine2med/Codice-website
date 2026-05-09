"use client";

import { motion } from "framer-motion";
import { RefObject, useEffect, useId, useState } from "react";

interface AnimatedBeamProps {
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

function getCoords(
  containerRef: RefObject<HTMLElement | null>,
  ref: RefObject<HTMLElement | null>,
  xOffset = 0,
  yOffset = 0
) {
  const container = containerRef.current;
  const el = ref.current;
  if (!container || !el) return { x: 0, y: 0 };
  const cRect = container.getBoundingClientRect();
  const eRect = el.getBoundingClientRect();
  return {
    x: eRect.left - cRect.left + eRect.width / 2 + xOffset,
    y: eRect.top - cRect.top + eRect.height / 2 + yOffset,
  };
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 2.5,
  delay = 0,
  pathColor = "#E2E8F0",
  pathWidth = 2,
  pathOpacity = 0.4,
  gradientStartColor = "#2563EB",
  gradientStopColor = "#3B82F6",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const id = useId();
  const [path, setPath] = useState("");
  const [svgDims, setSvgDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    function update() {
      const container = containerRef.current;
      if (!container) return;
      const { width, height } = container.getBoundingClientRect();
      setSvgDims({ w: width, h: height });

      const from = getCoords(containerRef, fromRef, startXOffset, startYOffset);
      const to = getCoords(containerRef, toRef, endXOffset, endYOffset);

      const cx = (from.x + to.x) / 2;
      const cy = (from.y + to.y) / 2 - curvature;

      setPath(`M ${from.x},${from.y} Q ${cx},${cy} ${to.x},${to.y}`);
    }

    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDims.w}
      height={svgDims.h}
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ transform: "translateZ(0)" }}
    >
      <defs>
        <linearGradient
          id={`${id}-grad`}
          x1="0%"
          x2="100%"
          y1="0%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" offset="0%" />
          <stop stopColor={gradientStartColor} offset="32.5%" />
          <stop stopColor={gradientStopColor} offset="67.5%" />
          <stop stopColor={gradientStopColor} stopOpacity="0" offset="100%" />
        </linearGradient>
      </defs>

      {/* Base path (static, dimmed) */}
      <path
        d={path}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        fill="none"
        strokeLinecap="round"
      />

      {/* Animated beam */}
      {path && (
        <motion.path
          d={path}
          stroke={`url(#${id}-grad)`}
          strokeWidth={pathWidth}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, pathOffset: reverse ? -1 : 1 }}
          animate={{ pathOffset: reverse ? 1 : -1 }}
          transition={{
            duration,
            delay,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
          style={{ pathLength: 0.25 }}
        />
      )}
    </svg>
  );
}
