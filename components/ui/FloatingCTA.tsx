"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleMenu = (event: Event) => {
      if (event instanceof CustomEvent && typeof event.detail === "boolean") {
        setMenuOpen(event.detail);
      }
    };
    window.addEventListener("codice:mobile-menu", handleMenu);
    return () => window.removeEventListener("codice:mobile-menu", handleMenu);
  }, []);

  useEffect(() => {
    if (pathname === "/contact") return;
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname === "/contact" || dismissed || menuOpen) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 64 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 64 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 bg-[#0A0F1E] text-white pl-5 pr-2 py-2.5 rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.35)] border border-white/8 backdrop-blur-sm whitespace-nowrap"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-sm font-semibold text-white/80">Ready to modernize your agency?</span>
          <Link
            href="/contact"
            onClick={() => setDismissed(true)}
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-accent text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shadow-[0_4px_16px_rgba(37,99,235,0.35)]"
          >
            Let&apos;s Talk <ArrowRight size={13} />
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="w-7 h-7 rounded-full flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/8 transition-all ml-1"
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
