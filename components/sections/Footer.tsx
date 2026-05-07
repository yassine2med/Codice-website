"use client";

import Link from "next/link";
import Image from "next/image";
import { company, services, products } from "@/data/codice";
import { Award } from "lucide-react";

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
    <footer className="bg-brand-dark border-t border-white/5 py-24 px-6 relative overflow-hidden mesh-gradient">
      {/* Immersive Glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-8 transition-transform hover:scale-105">
              <Image
                src="/images/brand/codice-logo-full.png"
                alt="CODICE Technology"
                width={1536}
                height={1024}
                className="h-12 w-56 object-contain"
              />
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xs">
              {company.tagline}. <br />
              <span className="text-gray-500 text-sm">{company.subtagline.split('.')[0]}.</span>
            </p>
            <div className="flex gap-4">
              {socials.map(({ name, href, svg }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-500 hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-300"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links: Services */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-8">Expertise</h4>
            <ul className="flex flex-col gap-4">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-gray-400 hover:text-brand-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links: Products */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-8">Platforms</h4>
            <ul className="flex flex-col gap-4">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.slug}`} className="text-sm text-gray-400 hover:text-brand-primary transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connection Hub */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-8">Contact</h4>
            <div className="flex flex-col gap-8">
               <div className="space-y-4">
                 {company.offices.map((office) => (
                   <div key={office.city + office.address} className="space-y-1 group">
                     <p className="text-[9px] font-bold uppercase text-brand-primary tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">
                       {office.city} {office.headquarters && "— HQ"}
                     </p>
                     <p className="text-sm text-gray-400 leading-relaxed">{office.address}</p>
                   </div>
                 ))}
               </div>
               <div className="space-y-2">
                 <a href={`mailto:${company.email}`} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                   {company.email}
                 </a>
                 <a href={`tel:${company.phone}`} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                   {company.phone}
                 </a>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-600">
              © {year} {company.fullName}
            </p>
            <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-600">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <Link href="/contact" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.3em] uppercase text-brand-accent bg-brand-primary/10 border border-brand-primary/20 px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              <Award size={12} className="text-brand-primary" /> DC Small Business of the Year 2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
