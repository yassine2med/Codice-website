import { caseStudies } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function CaseStudies() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Case Studies"
        title="Mission-Critical Outcomes"
        subtitle="Real results for real agencies. Outcomes that speak louder than promises."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study, i) => (
          <div key={i} className="bg-[#111827] border border-[#1E293B] border-l-4 border-l-[#2563EB] rounded-xl p-8">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#2563EB] mb-2">{study.product}</div>
            <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1">{study.client}</h3>
            <div className="text-3xl font-bold text-[#F8FAFC] font-[family-name:var(--font-dm-mono)] mb-4">{study.metric}</div>
            <p className="text-sm text-[#64748B] mb-2"><strong className="text-[#F8FAFC]">Challenge:</strong> {study.challenge}</p>
            <p className="text-sm text-[#64748B] mb-2"><strong className="text-[#F8FAFC]">Solution:</strong> {study.solution}</p>
            <p className="text-sm text-[#64748B]"><strong className="text-[#F8FAFC]">Outcome:</strong> {study.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
