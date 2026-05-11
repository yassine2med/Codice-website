"use client";

import { useParams, notFound } from "next/navigation";
import { services, products } from "@/data/codice";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Box } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Map service slug → related product slugs
const SERVICE_PRODUCTS: Record<string, string[]> = {
  "software-development":  ["permione", "fortimind", "cypms", "celercase"],
  "permit-modernization":  ["permione"],
  "data-analytics":        ["celerkost", "celercase", "codicepay"],
  "cloud-migration":       ["fortimind", "permione", "travo"],
  "it-security":           ["fortimind"],
  "payment-systems":       ["codicepay", "celerkost"],
  "it-consulting":         ["fortimind", "cypms"],
  "workforce-management":  ["cypms", "celercase", "celermed"],
};

export default function ServiceDetailPage() {
  const params = useParams();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) notFound();

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } } };

  const relatedProductSlugs = SERVICE_PRODUCTS[service!.slug] ?? [];
  const relatedProducts = products.filter((p) => relatedProductSlugs.includes(p.slug));

  return (
    <main id="main-content" className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-48 pb-20 sm:pb-32 overflow-hidden bg-[#0A0F1E]">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=60"
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.07 }}
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0F1E]/30 via-transparent to-[#0A0F1E]/70" />
        </div>
        <div className="absolute inset-0 dot-grid opacity-[0.15] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2563EB]/40 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 65%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.3em] uppercase text-[#60A5FA] bg-[#2563EB]/10 border border-[#2563EB]/25 px-4 py-2 rounded-full mb-8">
              Service Detail
            </span>
            <h1 className="text-[clamp(36px,7vw,80px)] font-extrabold tracking-tighter leading-[0.95] mb-8 text-white">
              {service!.title}
            </h1>
            <p className="text-xl text-[#94A3B8] leading-relaxed max-w-2xl">
              {service!.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-16">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-3 text-[#0F172A]">
                <span className="w-8 h-1 bg-[#2563EB] rounded-full" /> Key Features
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service!.features?.map((feature, idx) => (
                  <motion.div key={idx} variants={itemVariants}
                    className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)] transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="text-[#2563EB] mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                      <p className="text-[#334155] font-medium leading-relaxed">{feature}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-10 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/5 blur-[80px] -mr-32 -mt-32 pointer-events-none" />
              <h3 className="text-2xl font-bold mb-6 text-[#0F172A]">Our Approach</h3>
              <p className="text-[#64748B] leading-relaxed mb-6">
                At CODICE, we don&apos;t just deliver technology; we deliver mission success. Our approach to {service!.title.toLowerCase()} is rooted in deep government domain expertise and a commitment to modern, scalable, and secure architectures.
              </p>
              <div className="flex flex-wrap gap-3">
                {service!.techStack?.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-lg bg-[#F0F6FF] border border-[#2563EB]/20 text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Related Products — cross-link */}
            {relatedProducts.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold mb-2 text-[#0F172A] flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#2563EB] rounded-full" /> Powered by These Platforms
                </h3>
                <p className="text-[#64748B] text-sm mb-6">CODICE proprietary products built specifically for this service area.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.slug}`}
                      className="group flex items-center gap-4 p-5 rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)] transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#F0F6FF] border border-[#2563EB]/15 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all duration-300">
                        <Box size={16} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-0.5">{p.category}</p>
                        <p className="text-sm font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors truncate">{p.name}</p>
                      </div>
                      <ArrowRight size={15} className="text-[#CBD5E1] group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div className="p-8 rounded-3xl bg-[#2563EB] text-white shadow-[0_8px_40px_rgba(37,99,235,0.25)]">
                <h3 className="text-2xl font-bold mb-4">Ready to Modernize?</h3>
                <p className="text-white/85 mb-8 leading-relaxed">
                  Learn how CODICE can transform your agency&apos;s operations with our {service!.title.toLowerCase()} expertise.
                </p>
                <Link href="/contact" className="w-full flex items-center justify-center gap-3 bg-white text-[#2563EB] font-bold py-4 rounded-xl hover:bg-white/90 transition-colors">
                  Schedule a Consultation <ArrowRight size={18} />
                </Link>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_2px_12px_rgba(15,23,42,0.05)]">
                <h4 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-6">Related Services</h4>
                <div className="space-y-2">
                  {services.filter(s => s.id !== service!.id).slice(0, 4).map((s) => (
                    <Link key={s.id} href={`/services/${s.slug}`}
                      className="flex items-center justify-between group p-3 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                    >
                      <span className="text-[#334155] font-medium group-hover:text-[#2563EB] transition-colors text-sm">{s.title}</span>
                      <ArrowRight size={15} className="text-[#CBD5E1] group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
