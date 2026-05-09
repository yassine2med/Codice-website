"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef } from "react";

interface GlobeProps {
  className?: string;
  config?: Partial<COBEOptions>;
}

const DEFAULT_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  phi: 0.6,
  theta: 0.35,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [37 / 255, 99 / 255, 235 / 255],
  glowColor: [0.8, 0.88, 1],
  devicePixelRatio: 2,
  markers: [
    { location: [38.9072, -77.0369], size: 0.12 }, // Washington DC
    { location: [6.9271, 79.8612], size: 0.08 },   // Colombo
    { location: [40.7128, -74.006], size: 0.05 },   // New York
    { location: [51.5074, -0.1278], size: 0.05 },   // London
    { location: [1.3521, 103.8198], size: 0.04 },   // Singapore
    { location: [35.6762, 139.6503], size: 0.04 },  // Tokyo
    { location: [-33.8688, 151.2093], size: 0.04 }, // Sydney
  ],
};

export default function Globe({ className = "", config = {} }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<{ down: boolean; x: number }>({ down: false, x: 0 });
  const phiRef = useRef(config.phi ?? DEFAULT_CONFIG.phi);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const merged: COBEOptions = { ...DEFAULT_CONFIG, ...config };
    let width = canvas.offsetWidth;
    let rotationDelta = 0;

    const globe = createGlobe(canvas, {
      ...merged,
      width: width * 2,
      height: width * 2,
    });

    // Fade in
    canvas.style.opacity = "0";
    requestAnimationFrame(() => {
      canvas.style.transition = "opacity 0.6s ease";
      canvas.style.opacity = "1";
    });

    // Animation loop
    function animate() {
      if (!pointerRef.current.down) {
        phiRef.current += 0.003;
      } else {
        phiRef.current += rotationDelta * 0.002;
        rotationDelta *= 0.9;
      }
      globe.update({ phi: phiRef.current });
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    // Resize
    const ro = new ResizeObserver(() => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      globe.update({ width: width * 2, height: width * 2 });
    });
    ro.observe(canvas);

    // Pointer drag
    function onPointerDown(e: PointerEvent) {
      pointerRef.current = { down: true, x: e.clientX };
      canvas!.style.cursor = "grabbing";
    }
    function onPointerMove(e: PointerEvent) {
      if (!pointerRef.current.down) return;
      rotationDelta = e.clientX - pointerRef.current.x;
      pointerRef.current.x = e.clientX;
    }
    function onPointerUp() {
      pointerRef.current.down = false;
      canvas!.style.cursor = "grab";
    }

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      globe.destroy();
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab"
        style={{ opacity: 0, contain: "layout style size" }}
      />
    </div>
  );
}
