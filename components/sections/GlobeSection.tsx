"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { MapPin, Globe2, Building2, Shield } from "lucide-react";

const DC: [number, number] = [38.9072, -77.0369];

const MARKERS: { location: [number, number]; size: number }[] = [
  { location: DC,                    size: 0.14 }, // Washington DC — main hub
  { location: [38.8977, -77.0366],   size: 0.05 }, // White House area
  { location: [38.8951, -77.0364],   size: 0.05 }, // Capitol Hill
  { location: [38.8048, -77.0469],   size: 0.05 }, // Alexandria, VA
  { location: [38.9897, -77.0278],   size: 0.04 }, // Silver Spring, MD
  { location: [51.5074,  -0.1278],   size: 0.04 }, // London
  { location: [48.8566,   2.3522],   size: 0.04 }, // Paris
  { location: [35.6762, 139.6503],   size: 0.04 }, // Tokyo
  { location: [ 1.3521, 103.8198],   size: 0.04 }, // Singapore
];

/* Arcs radiating out from DC */
const ARCS = [
  { from: DC, to: [51.5074,  -0.1278] as [number, number] },
  { from: DC, to: [48.8566,   2.3522] as [number, number] },
  { from: DC, to: [35.6762, 139.6503] as [number, number] },
  { from: DC, to: [ 1.3521, 103.8198] as [number, number] },
];

const GLOBE_SIZE = 500; // logical px — canvas renders at 2× for retina

function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phi       = useRef(0.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Let React own width/height via JSX props — don't set imperatively
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width:          GLOBE_SIZE * 2,
      height:         GLOBE_SIZE * 2,
      phi:            0.5,
      theta:          0.22,
      dark:           1,
      diffuse:        1.8,
      mapSamples:     20000,
      mapBrightness:  7,
      baseColor:      [0.06, 0.09, 0.18] as [number, number, number],
      markerColor:    [0.20, 0.52, 1.00] as [number, number, number],
      glowColor:      [0.10, 0.25, 0.70] as [number, number, number],
      markers:        MARKERS,
      arcs:           ARCS,
      arcColor:       [0.18, 0.45, 0.95] as [number, number, number],
      arcWidth:       2,
      arcHeight:      0.4,
    });

    let rafId: number;
    const animate = () => {
      phi.current += 0.0022;
      globe.update({ phi: phi.current });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={GLOBE_SIZE * 2}
      height={GLOBE_SIZE * 2}
      role="img"
      aria-label="Interactive 3D globe showing CODICE's global reach and Washington DC hub"
      style={{ width: "100%", maxWidth: GLOBE_SIZE, height: "auto", aspectRatio: "1 / 1" }}
    />
  );
}

const stats = [
  { icon: Building2, value: "12+",  label: "DC Agencies"    },
  { icon: Globe2,    value: "16+",  label: "Years Active"   },
  { icon: Shield,    value: "100%", label: "Retention"      },
  { icon: MapPin,    value: "3",    label: "Offices"        },
];

export default function GlobeSection() {
  return (
    <section className="relative bg-[#080D1A] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-primary/40 to-transparent" />

      {/* Soft ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 65% 55% at 65% 50%, rgba(37,99,235,0.09) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── Left: copy ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-full mb-6">
              <MapPin size={12} className="text-[#60A5FA]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#60A5FA]">Washington DC · The Hub</span>
            </div>

            <h2 className="text-[clamp(30px,4.5vw,56px)] font-extrabold tracking-tighter leading-[0.92] text-white mb-5">
              Rooted in DC.<br />
              <span style={{ color: "#60A5FA" }}>Built for Government.</span>
            </h2>

            <p className="text-[#94A3B8] text-base leading-relaxed max-w-sm">
              For 16 years, CODICE has operated exclusively in Washington DC — the most demanding government technology market in the world.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                className="flex items-center gap-3 bg-white/3 border border-white/[0.07] rounded-2xl px-4 py-3.5 hover:border-brand-primary/25 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-primary/15 border border-brand-primary/20 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-[#60A5FA]" />
                </div>
                <div>
                  <p className="text-lg font-black text-white leading-none tracking-tighter">{value}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#475569] mt-0.5">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Agency chips */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#334155] mb-3">Active Deployments</p>
            <div className="flex flex-wrap gap-2">
              {["DDOT","DOB","DHCF","DCPS","DOES","CJCC","OAG","MPD","DHS"].map((a) => (
                <motion.span
                  key={a}
                  variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } }}
                  transition={{ duration: 0.3, ease: "backOut" }}
                  className="text-[10px] font-bold px-3 py-1.5 rounded-lg border border-white/[0.07] bg-white/3 text-[#475569] hover:text-[#60A5FA] hover:border-brand-primary/25 transition-colors duration-150 cursor-default"
                >
                  {a}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: Globe ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center w-full"
        >
          <div className="relative inline-flex items-center justify-center w-full max-w-[500px]">
            {/* Glow ring */}
            <div
              className="absolute pointer-events-none"
              style={{ inset: "-40px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 65%)" }}
            />
            <GlobeCanvas />
            {/* DC label */}
            <div className="absolute pointer-events-none select-none" style={{ top: "38%", left: "41%" }}>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-brand-secondary animate-ping opacity-80" />
                <span className="text-[9px] font-black text-white/90 tracking-widest uppercase px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(10,15,30,0.65)" }}>DC</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
