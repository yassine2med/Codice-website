import { clients } from "@/data/codice";

export default function TrustMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <div className="py-12 border-y border-[#1E293B] overflow-hidden">
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-[#64748B] mb-8">
        Trusted by Washington DC&apos;s Leading Agencies
      </p>
      <div className="relative flex">
        <div className="flex gap-16 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {doubled.map((client, i) => (
            <span key={i} className="text-sm font-medium text-[#64748B] hover:text-[#F8FAFC] transition-colors cursor-default flex-shrink-0">
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
