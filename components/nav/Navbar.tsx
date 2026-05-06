"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { company, services, products } from "@/data/codice";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/90 backdrop-blur-md border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/brand/codice-logo-full.png"
            alt="CODICE Technology"
            width={160}
            height={40}
            className="mix-blend-screen hidden md:block"
            priority
          />
          <Image
            src="/images/brand/codice-logo.png"
            alt="CODICE"
            width={36}
            height={36}
            className="mix-blend-screen md:hidden"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm text-[#64748B] hover:text-[#F8FAFC] transition-colors">Services</Link>
          <Link href="#products" className="text-sm text-[#64748B] hover:text-[#F8FAFC] transition-colors">Products</Link>
          <Link href="#markets" className="text-sm text-[#64748B] hover:text-[#F8FAFC] transition-colors">Markets</Link>
          <Link href="#case-studies" className="text-sm text-[#64748B] hover:text-[#F8FAFC] transition-colors">Case Studies</Link>
          <Link href="#news" className="text-sm text-[#64748B] hover:text-[#F8FAFC] transition-colors">News</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${company.phone}`}
            className="text-sm text-[#64748B] hover:text-[#F8FAFC] transition-colors"
          >
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="bg-[#2563EB] hover:bg-[#3B82F6] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#F8FAFC]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-[#1E293B] px-6 py-6 flex flex-col gap-4">
          {[
            { href: "#services", label: "Services" },
            { href: "#products", label: "Products" },
            { href: "#markets", label: "Markets" },
            { href: "#case-studies", label: "Case Studies" },
            { href: "#news", label: "News" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[#F8FAFC] text-base"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href={`mailto:${company.email}`}
            className="bg-[#2563EB] text-white text-sm font-medium px-4 py-3 rounded-lg text-center mt-2"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
