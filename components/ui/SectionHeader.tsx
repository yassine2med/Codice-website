export function SectionHeader({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      {label && <p className="text-xs font-semibold tracking-widest uppercase text-[#2563EB] mb-4">{label}</p>}
      <h2 className="text-4xl md:text-5xl font-semibold text-[#F8FAFC] mb-4">{title}</h2>
      {subtitle && <p className="text-[#64748B] text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
