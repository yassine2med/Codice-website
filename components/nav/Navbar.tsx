"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { company } from "@/data/codice";
import { motion, AnimatePresence } from "framer-motion";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-[#0A1628]/90 backdrop-blur-xl border-[#1E293B] py-3" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-50">
          <Image
            src="/images/brand/codice-logo-full.png"
            alt="CODICE Technology"
            width={160}
            height={40}
            className="hidden md:block w-auto h-8 lg:h-10"
            priority
          />
          <Image
            src="/images/brand/codice-logo.png"
            alt="CODICE"
            width={36}
            height={36}
            className="md:hidden w-8 h-8"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { href: "/services", label: "Services" },
            { href: "/products", label: "Products" },
            { href: "/markets", label: "Markets" },
            { href: "/case-studies", label: "Case Studies" },
            { href: "/news", label: "News" },
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-xs font-bold tracking-widest uppercase text-[#64748B] hover:text-[#2563EB] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2563EB] transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/contact"
            className="bg-[#2563EB] hover:bg-[#3B82F6] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative z-50 text-[#F8FAFC] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-12 gap-8"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/products", label: "Products" },
              { href: "/markets", label: "Markets" },
              { href: "/case-studies", label: "Case Studies" },
              { href: "/news", label: "News" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-3xl font-bold text-[#0A1628] hover:text-[#2563EB] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#2563EB] text-white text-lg font-bold px-8 py-5 rounded-2xl text-center mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
