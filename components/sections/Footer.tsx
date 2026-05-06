import Link from "next/link";
import Image from "next/image";
import { company, services, products } from "@/data/codice";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] border-t border-[#1E293B] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Image
              src="/images/brand/codice-logo-full.png"
              alt="CODICE Technology"
              width={140}
              height={36}
              className="mix-blend-screen mb-4"
            />
            <p className="text-sm text-[#64748B] leading-relaxed mb-4">{company.tagline}</p>
            <p className="text-xs text-[#64748B]">{company.address}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F8FAFC] mb-4">Services</h4>
            <ul className="flex flex-col gap-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href={s.slug} className="text-sm text-[#64748B] hover:text-[#F8FAFC] transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F8FAFC] mb-4">Products</h4>
            <ul className="flex flex-col gap-2">
              {products.map((p) => (
                <li key={p.id}>
                  <a href={p.slug} className="text-sm text-[#64748B] hover:text-[#F8FAFC] transition-colors">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F8FAFC] mb-4">Contact</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href={`tel:${company.phone}`} className="text-sm text-[#64748B] hover:text-[#F8FAFC] transition-colors">{company.phone}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="text-sm text-[#64748B] hover:text-[#F8FAFC] transition-colors">{company.email}</a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-[#64748B] hover:text-[#F8FAFC] transition-colors">LinkedIn</a>
              <a href={company.social.twitter} target="_blank" rel="noopener noreferrer" className="text-xs text-[#64748B] hover:text-[#F8FAFC] transition-colors">Twitter</a>
              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="text-xs text-[#64748B] hover:text-[#F8FAFC] transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E293B] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#64748B]">© {year} {company.fullName}. All rights reserved.</p>
          <p className="text-xs text-[#64748B]">Washington DC&apos;s Small Business of the Year</p>
        </div>
      </div>
    </footer>
  );
}
