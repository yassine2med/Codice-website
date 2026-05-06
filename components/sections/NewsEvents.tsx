import { news } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";

export default function NewsEvents() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="News & Events"
        title="Latest from CODICE"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, i) => (
          <a
            key={i}
            href={item.slug}
            className="group bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#2563EB] transition-colors block"
          >
            <p className="text-xs text-[#64748B] mb-3">{new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            <h3 className="text-base font-semibold text-[#F8FAFC] mb-3 group-hover:text-[#3B82F6] transition-colors leading-snug">{item.title}</h3>
            <p className="text-sm text-[#64748B] leading-relaxed mb-4">{item.excerpt}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB]">
              Read more <ArrowRight size={12} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
