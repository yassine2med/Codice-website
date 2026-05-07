"use client";

import { news } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function NewsEvents() {
  return (
    <section id="news" className="py-16 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="News & Insights"
        title="Latest from CODICE"
        subtitle="Awards, product launches, and milestones from Washington DC's premier gov-tech firm."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {news.map((article, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden hover:border-[#2563EB]/50 hover:shadow-[0_0_32px_rgba(37,99,235,0.1)] transition-colors duration-300"
          >
            {/* Image */}
            {article.image && (
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#111827] via-transparent to-transparent" />
              </div>
            )}

            <div className="p-5">
              <div className="flex items-center gap-2 text-[#475569] mb-4">
                <CalendarDays size={12} />
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#F8FAFC] mb-3 group-hover:text-[#2563EB] transition-colors duration-300 leading-snug">
                {article.title}
              </h3>

              <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <Link
                href={article.slug}
                target={article.slug.startsWith('http') ? '_blank' : undefined}
                rel={article.slug.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#2563EB] hover:text-[#3B82F6] transition-colors group/link"
              >
                Read more
                <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

