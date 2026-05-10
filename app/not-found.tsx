"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />

      <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/4 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2563EB]/3 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* 404 number */}
            <div className="font-[family-name:var(--font-dm-mono)] text-[clamp(100px,20vw,200px)] font-black leading-none tracking-tighter bg-linear-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] bg-clip-text text-transparent select-none mb-4">
              404
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/20 bg-[#F0F6FF] mb-8">
              <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2563EB]">Page Not Found</span>
            </div>

            <h1 className="text-[clamp(28px,5vw,52px)] font-extrabold tracking-tighter leading-tight text-[#0F172A] mb-5">
              This page doesn&apos;t exist.
            </h1>
            <p className="text-lg text-[#64748B] leading-relaxed max-w-md mx-auto mb-12">
              The page you&apos;re looking for may have moved, been renamed, or no longer exists. Let&apos;s get you back on mission.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-3 bg-[#2563EB] text-white font-bold px-8 py-4 rounded-2xl shadow-[0_8px_32px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Home size={17} /> Back to Home
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:border-[#2563EB]/40 hover:shadow-[0_4px_16px_rgba(37,99,235,0.10)] font-bold px-8 py-4 rounded-2xl transition-all duration-300"
              >
                Contact Us <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick links */}
            <div className="mt-16 pt-10 border-t border-[#F1F5F9]">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#94A3B8] mb-6">Or explore</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "Products", href: "/products" },
                  { label: "Services", href: "/services" },
                  { label: "Case Studies", href: "/case-studies" },
                  { label: "Our Story", href: "/our-story" },
                  { label: "Capability", href: "/capability" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-5 py-2.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-sm font-semibold text-[#64748B] hover:border-[#2563EB]/30 hover:text-[#0F172A] hover:bg-white transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
