"use client";

import Link from "next/link";
import Image from "next/image";
import { company, services, products } from "@/data/codice";

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
                width={160}
                height={40}
                className="mix-blend-screen"
              />
            </Link>
            <p className="text-base text-[#64748B] leading-relaxed mb-8 max-w-xs">
              {company.tagline}. {company.subtagline.split('.')[0]}.
            </p>
            <div className="flex gap-5">
              {Object.entries(company.social).map(([name, url]) => (
                <a 
                  key={name} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-widest uppercase text-[#64748B] hover:text-[#2563EB] transition-colors"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F8FAFC] mb-8">Services</h4>
            <ul className="flex flex-col gap-4">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link href={s.slug} className="text-sm md:text-base text-[#64748B] hover:text-[#2563EB] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F8FAFC] mb-8">Products</h4>
            <ul className="flex flex-col gap-4">
              {products.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link href={p.slug} className="text-sm md:text-base text-[#64748B] hover:text-[#2563EB] transition-colors">
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
               <div className="space-y-1">
                 <p className="text-xs font-bold uppercase text-[#2563EB] tracking-widest">Office</p>
                 <p className="text-sm md:text-base text-[#64748B] leading-relaxed">{company.address}</p>
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
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B]">
            © {year} {company.fullName}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#2563EB]">
              Washington DC Small Business of the Year 🏆
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
