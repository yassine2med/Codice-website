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
    <footer className="bg-[#0A1628] border-t border-[#1E293B] py-24 px-6 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/images/brand/codice-logo-full.png"
                alt="CODICE Technology"
                width={1536}
                height={1024}
                className="h-12 w-56 rounded-md object-cover object-center"
              />
            </Link>
            <p className="text-base text-[#64748B] leading-relaxed mb-8 max-w-xs">
              {company.tagline}. {company.subtagline.split('.')[0]}.
            </p>
            <div className="flex gap-3">
              {socials.map(({ name, href, svg }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-lg border border-[#1E293B] bg-[#111827] flex items-center justify-center text-[#475569] hover:text-[#2563EB] hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 transition-all duration-300"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F8FAFC] mb-8">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors leading-snug">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F8FAFC] mb-8">Products</h4>
            <ul className="flex flex-col gap-3">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.slug}`} className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F8FAFC] mb-8">Contact</h4>
            <div className="flex flex-col gap-6">
               <div className="space-y-4">
                 {company.offices.map((office) => (
                   <div key={office.city + office.address} className="space-y-1">
                     <p className="text-[10px] font-bold uppercase text-[#2563EB] tracking-[0.2em]">
                       {office.city} {office.headquarters && "(HQ)"}
                     </p>
                     <p className="text-sm text-[#64748B] leading-relaxed">{office.address}</p>
                   </div>
                 ))}
               </div>
               <div className="space-y-1">
                 <p className="text-xs font-bold uppercase text-[#2563EB] tracking-widest">Inquiries</p>
                 <a href={`mailto:${company.email}`} className="text-sm md:text-base text-[#64748B] hover:text-[#2563EB] transition-colors block">
                   {company.email}
                 </a>
                 <a href={`tel:${company.phone}`} className="text-sm md:text-base text-[#64748B] hover:text-[#2563EB] transition-colors block">
                   {company.phone}
                 </a>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E293B] pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-xs font-bold tracking-widest uppercase text-[#64748B]">
              © {year} {company.fullName}
            </p>
            <div className="flex items-center gap-4 text-xs text-[#475569]">
              <span className="hidden md:block">·</span>
              <a href={`mailto:${company.email}`} className="hover:text-[#2563EB] transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href={`mailto:${company.email}`} className="hover:text-[#2563EB] transition-colors">Terms of Use</a>
              <span>·</span>
              <Link href="/contact" className="hover:text-[#2563EB] transition-colors">Accessibility</Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-1.5 rounded-full">
              <Award size={11} /> DC Small Business of the Year 2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
