"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Cpu, Globe, Layers, Search } from "lucide-react";
import { navigation } from "@/data/codice";
import { motion, AnimatePresence } from "framer-motion";
import { DropdownNavigation } from "@/components/ui/dropdown-navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoIdx, setLogoIdx] = useState(0);
  const pathname = usePathname();

  const cyclingLogos = [
    "/images/brand/codice-logo-blue.png",
    "/images/brand/codice-logo-green.png",
    "/images/brand/codice-logo-red.png",
    "/images/brand/codice-logo-orange.png",
  ];

  const pillBgs = [
    { bg: "linear-gradient(135deg, #020818 0%, #0a1628 50%, #0f2044 100%)", glow: "0 0 32px rgba(37,99,235,0.5), 0 4px 16px rgba(0,0,0,0.4)", border: "#2563EB, #3B82F6, #2563EB" },
    { bg: "linear-gradient(135deg, #011208 0%, #052014 50%, #083d1c 100%)", glow: "0 0 32px rgba(34,197,94,0.5), 0 4px 16px rgba(0,0,0,0.4)",  border: "#16A34A, #22C55E, #16A34A" },
    { bg: "linear-gradient(135deg, #160205 0%, #2a0510 50%, #3d0714 100%)", glow: "0 0 32px rgba(239,68,68,0.5), 0 4px 16px rgba(0,0,0,0.4)",   border: "#DC2626, #EF4444, #DC2626" },
    { bg: "linear-gradient(135deg, #150800 0%, #2a1200 50%, #3d1a00 100%)", glow: "0 0 32px rgba(249,115,22,0.5), 0 4px 16px rgba(0,0,0,0.4)",  border: "#EA580C, #F97316, #EA580C" },
  ];

  useEffect(() => {
    if (!scrolled) return;
    const id = setInterval(() => setLogoIdx(i => (i + 1) % 4), 1000);
    return () => clearInterval(id);
  }, [scrolled]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ── Full navbar — visible only at top ── */}
      <motion.nav
        initial={false}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -20 : 0, pointerEvents: scrolled ? "none" : "auto" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 z-[70] py-6"
        style={{ top: "var(--banner-h, 0px)" }}
      >
        <div className="max-w-7xl mx-auto pr-6">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center pl-0 pr-4 sm:pr-6 py-3.5 rounded-2xl bg-transparent">
            {/* Logo */}
            <Link href="/" className="flex items-center relative z-50 group justify-self-start -ml-44">
              <div className="relative h-24 w-[26rem] md:h-28 md:w-[36rem] transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/brand/codice-logo-full.png"
                  alt="CODICE Technology"
                  fill
                  className="object-contain"
                  loading="eager"
                  priority
                  sizes="576px"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center">
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
            <div className="hidden lg:flex items-center gap-3 justify-self-end">
              <button
                onClick={() => window.dispatchEvent(new Event("codice:open-palette"))}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/20 text-[#94A3B8] hover:border-white/40 hover:text-[#0F172A] bg-white/80 transition-all duration-300"
                aria-label="Search"
              >
                <Search size={13} />
                <span className="text-[10px] font-bold tracking-wider hidden xl:block">Search</span>
                <kbd className="hidden xl:flex items-center px-1.5 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[9px] font-bold text-[#B0BEC5]">⌘K</kbd>
              </button>
              <Link
                href="/contact"
                className="bg-brand-primary text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-xl hover:bg-brand-accent transition-all duration-300 shadow-[0_4px_16px_rgba(37,99,235,0.25)]"
              >
                Consultation
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden justify-self-end relative z-50 p-2 rounded-xl w-11 h-11 flex items-center justify-center border bg-white/10 border-white/20 text-[#0F172A] transition-all duration-300"
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
      </motion.nav>

      {/* ── Scrolled: floating logo pill ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="logo-pill"
            initial={{ opacity: 0, y: -44, scale: 0.82 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -32, scale: 0.88 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="fixed left-0 right-0 z-[70] flex justify-center pointer-events-none"
            style={{ top: "calc(var(--banner-h, 0px) + 14px)" }}
          >

            {/* Soft ambient glow that matches logo color */}
            <motion.div
              animate={{ background: `radial-gradient(ellipse, ${pillBgs[logoIdx].border.split(",")[0].trim()}55 0%, transparent 70%)` }}
              transition={{ duration: 0.8 }}
              style={{
                position: "absolute",
                width: "260px", height: "60px",
                filter: "blur(18px)",
                pointerEvents: "none",
                top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />

            {/* Pill */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Back to top"
              className="pointer-events-auto relative overflow-hidden"
              style={{
                borderRadius: "9999px",
                padding: "9px 32px",
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
              animate={{
                background: pillBgs[logoIdx].bg,
                boxShadow: pillBgs[logoIdx].glow + ", inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Subtle top-edge highlight */}
              <div style={{
                position: "absolute", top: 0, left: "15%", right: "15%", height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                pointerEvents: "none",
              }} />

              {/* Logo crossfade */}
              <div style={{ position: "relative", height: "30px", width: "150px", transform: "scale(3.5) translateY(1px)", transformOrigin: "center" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={logoIdx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <Image src={cyclingLogos[logoIdx]} alt="CODICE Technology" fill className="object-contain" sizes="200px" priority />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="fixed inset-0 bg-white z-[65] flex flex-col p-8 overflow-y-auto"
          >
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
                  <p className="text-[10px] font-bold tracking-[0.4em] text-brand-primary uppercase border-b border-[#E2E8F0] pb-3">
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
                                className={`text-xl font-bold transition-colors ${pathname === item.href ? "text-brand-primary" : "text-[#0F172A] hover:text-brand-primary"}`}
                                onClick={() => setMobileOpen(false)}
                                aria-current={pathname === item.href ? "page" : undefined}
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
                        className={`text-2xl font-bold transition-colors ${pathname === item.href ? "text-brand-primary" : "text-[#0F172A] hover:text-brand-primary"}`}
                        onClick={() => setMobileOpen(false)}
                        aria-current={pathname === item.href ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="bg-brand-primary text-white text-center font-bold py-5 rounded-2xl text-lg shadow-[0_8px_32px_rgba(37,99,235,0.25)] mt-6 hover:bg-brand-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Schedule a Briefing
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
