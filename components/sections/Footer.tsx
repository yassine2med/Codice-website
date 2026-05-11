"use client";

import Link from "next/link";
import Image from "next/image";
import { company, services, products } from "@/data/codice";

const socials = [
  {
    name: "LinkedIn", href: "https://www.linkedin.com/company/codicetech",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    name: "Instagram", href: "https://www.instagram.com/codicetech/",
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    name: "Twitter / X", href: "https://x.com/CodiceTech",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    name: "Facebook", href: "https://web.facebook.com/CodiceTechDC",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0F1E] overflow-hidden">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-primary/50 to-transparent" />

      {/* Subtle background glow — very soft */}
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)" }} />
      <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/6">

          {/* Brand — wider column */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/brand/codice-logo-red.png"
                alt="CODICE Technology"
                width={800}
                height={240}
                className="h-36 w-auto object-contain"
              />
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 max-w-xs">
              Washington DC&apos;s premier government technology partner. 16 years of delivery. 100% client retention.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ name, href, svg }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-xl border border-white/8 bg-white/4 flex items-center justify-center text-[#64748B] hover:text-white hover:border-brand-primary/50 hover:bg-brand-primary/10 transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-primary mb-6">Services</p>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-[#64748B] hover:text-white transition-colors duration-150">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div className="md:col-span-3">
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-primary mb-6">Platforms</p>
            <ul className="flex flex-col gap-3">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.slug}`} className="text-sm text-[#64748B] hover:text-white transition-colors duration-150">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-primary mb-6">Contact</p>
            <div className="flex flex-col gap-6">
              {company.offices.map((office) => (
                <div key={office.city + office.address}>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#475569] mb-1">
                    {office.city}{office.headquarters ? " — HQ" : ""}
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed">{office.address}</p>
                </div>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-white/6">
                <a href={`mailto:${company.email}`} className="text-sm text-[#64748B] hover:text-white transition-colors">
                  {company.email}
                </a>
                <a href={`tel:${company.phone}`} className="text-sm text-[#64748B] hover:text-white transition-colors">
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-medium text-[#334155] tracking-widest uppercase">
            © {year} {company.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-medium uppercase tracking-widest text-[#334155]">
            <a href="#" className="hover:text-[#64748B] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#64748B] transition-colors">Terms</a>
            <Link href="/contact" className="hover:text-[#64748B] transition-colors">Accessibility</Link>
            <span className="text-brand-primary/60">·</span>
            <span className="text-brand-primary font-bold">DC Small Business of the Year 2025</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
