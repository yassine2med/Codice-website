"use client";

import { news } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function NewsEvents() {
  return (
    <section id="news" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader label="News & Insights" title="Latest from CODICE" />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {news.map((article, i) => (
          <motion.a
            key={i}
            variants={item}
            href={article.slug}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#2563EB]/50 hover:shadow-lg transition-all duration-300 block"
          >
            {article.image && (
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}
            <div className="p-8">
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#64748B] mb-4">
                {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h3 className="text-xl font-bold text-[#0A1628] mb-4 group-hover:text-[#2563EB] transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#2563EB]">
                Read more <ArrowRight size={14} />
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
