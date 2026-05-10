"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full bg-[#0F172A] text-white shadow-[0_4px_24px_rgba(15,23,42,0.25)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.35)] hover:bg-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center border border-white/10"
          aria-label="Scroll to top"
        >
          <ArrowUp size={17} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
