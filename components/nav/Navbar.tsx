"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Cpu, Globe, Layers, Search } from "lucide-react";
import { navigation } from "@/data/codice";
import { motion, AnimatePresence } from "framer-motion";
import { DropdownNavigation } from "@/components/ui/dorpdown-navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
      style={{ top: "var(--banner-h, 0px)" }}
    >
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${scrolled ? "scale-[0.97]" : "scale-100"}`}>
        <div
          className={`flex items-center justify-between px-4 sm:px-8 py-3.5 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-white/92 backdrop-blur-2xl border border-[#E2E8F0] shadow-[0_4px_24px_rgba(15,23,42,0.08)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-50 group">
            <div className="relative h-11 w-48 md:h-12 md:w-56 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/brand/codice-logo-full.png"
                alt="CODICE Technology"
                fill
                className="object-contain"
                loading="eager"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <DropdownNavigation navItems={navigation.map((group, idx) => ({
              id: idx,
              label: group.title,
              subMenus: group.sections
                ? group.sections.map(section => ({
                    title: section.title,
                    items: section.items.map(item => ({
                      label: item.label,
                      description: item.description || "",
                      icon: section.title === "Services" ? Cpu : section.title === "Products" ? Layers : Globe,
                      href: item.href
                    }))
                  }))
                : group.items && group.items.length > 1
                  ? [{
                      title: group.title,
                      items: group.items.map(item => ({
                        label: item.label,
                        description: item.description || "",
                        icon: group.title === "Services" ? Cpu : Globe,
                        href: item.href
                      }))
                    }]
                  : undefined,
              link: group.items && group.items.length === 1 ? group.items[0].href : undefined
            }))} />
          </div>

          {/* CTA Group */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => window.dispatchEvent(new Event("codice:open-palette"))}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border transition-all duration-300 ${
                scrolled
                  ? "border-[#E2E8F0] text-[#94A3B8] hover:border-[#2563EB]/40 hover:text-[#0F172A] bg-white"
                  : "border-white/20 text-[#94A3B8] hover:border-white/40 hover:text-[#0F172A] bg-white/80"
              }`}
              aria-label="Search"
            >
              <Search size={13} />
              <span className="text-[10px] font-bold tracking-wider hidden xl:block">Search</span>
              <kbd className="hidden xl:flex items-center px-1.5 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[9px] font-bold text-[#B0BEC5]">⌘K</kbd>
            </button>
            <Link
              href="/contact"
              className="bg-[#2563EB] text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-xl hover:bg-[#1D4ED8] transition-all duration-300 shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_24px_rgba(37,99,235,0.35)]"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden relative z-50 p-2 rounded-xl w-11 h-11 flex items-center justify-center border transition-all duration-300 ${
              mobileOpen
                ? "bg-white border-[#E2E8F0] text-[#0F172A]"
                : scrolled
                  ? "bg-white border-[#E2E8F0] text-[#0F172A]"
                  : "bg-white/10 border-white/20 text-[#0F172A]"
            }`}
            onClick={() => {
              const newState = !mobileOpen;
              setMobileOpen(newState);
              window.dispatchEvent(new CustomEvent("codice:mobile-menu", { detail: newState }));
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — Precision White */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="fixed inset-0 bg-white z-40 flex flex-col p-8 overflow-y-auto"
          >
            {/* Subtle dot grid background */}
            <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="relative z-10 mt-24 flex flex-col gap-10"
            >
              {navigation.map((group) => (
                <motion.div
                  key={group.title}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                  className="space-y-5"
                >
                  <p className="text-[10px] font-bold tracking-[0.4em] text-[#2563EB] uppercase border-b border-[#E2E8F0] pb-3">
                    {group.title}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
                    {group.sections ? (
                      group.sections.map(section => (
                        <div key={section.title} className="space-y-3">
                          <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">{section.title}</p>
                          <div className="flex flex-col gap-3">
                            {section.items.map(item => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="text-xl font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : group.items?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-2xl font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}

              <Link
                href="/contact"
                className="bg-[#2563EB] text-white text-center font-bold py-5 rounded-2xl text-lg shadow-[0_8px_32px_rgba(37,99,235,0.25)] mt-6 hover:bg-[#1D4ED8] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Schedule a Briefing
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
