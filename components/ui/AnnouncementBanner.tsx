"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

const BANNER_H = "44px";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty("--banner-h", BANNER_H);
    return () => document.documentElement.style.setProperty("--banner-h", "0px");
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--banner-h", visible ? BANNER_H : "0px");
  }, [visible]);

  const dismiss = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: BANNER_H, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-60 overflow-hidden"
        >
          <div className="h-full bg-[#0F172A] flex items-center justify-center gap-2 px-4 sm:px-10 relative">
            {/* Subtle shimmer line */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-primary/40 to-transparent" />

            <Trophy size={12} className="text-[#F59E0B] shrink-0" />
            <p className="text-[11px] font-semibold text-white/80 leading-none">
              <span className="text-white font-black">Washington DC&apos;s Small Business of the Year 2025</span>
              <span className="mx-2 text-white/25">·</span>
              <span className="hidden sm:inline">Now accepting FY2026 agency partnerships.</span>
            </p>
            <Link
              href="/contact"
              onClick={dismiss}
              className="hidden sm:flex items-center gap-1.5 text-[10px] font-black text-[#60A5FA] hover:text-white border border-brand-primary/40 hover:border-brand-primary/80 hover:bg-brand-primary/10 px-3 py-1.5 rounded-full transition-all whitespace-nowrap"
            >
              Get Started <ArrowRight size={9} />
            </Link>

            <button
              onClick={dismiss}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/[0.07] transition-all"
              aria-label="Dismiss"
            >
              <X size={12} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
