"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/data/codice";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navbar />
      <PageHero 
        label="Get in Touch"
        title="Let's Modernize Together"
        subtitle="Ready to discuss your agency's next mission? Our team of experts is standing by."
      />
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Email */}
          <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-10 text-center hover:border-[#2563EB]/50 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-[#0A1628] border border-[#1E293B] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
              <Mail className="text-[#2563EB]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Email Us</h3>
            <p className="text-[#64748B] mb-6">For general inquiries and partnerships.</p>
            <a href={`mailto:${company.email}`} className="text-[#2563EB] font-bold hover:underline text-lg">
              {company.email}
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-10 text-center hover:border-[#2563EB]/50 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-[#0A1628] border border-[#1E293B] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
              <Phone className="text-[#2563EB]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Call Us</h3>
            <p className="text-[#64748B] mb-6">Speak directly with our strategy team.</p>
            <a href={`tel:${company.phone}`} className="text-[#2563EB] font-bold hover:underline text-lg">
              {company.phone}
            </a>
          </div>

          {/* Location */}
          <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-10 text-center hover:border-[#2563EB]/50 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-[#0A1628] border border-[#1E293B] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
              <MapPin className="text-[#2563EB]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Our Office</h3>
            <p className="text-[#64748B] mb-6">Headquartered in the heart of DC.</p>
            <p className="text-[#F8FAFC] font-semibold leading-relaxed">
              {company.address}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
