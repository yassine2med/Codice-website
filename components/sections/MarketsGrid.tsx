import { markets } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function MarketsGrid() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Markets We Serve"
        title="Built for Every Corner of Government"
        subtitle="From justice to healthcare to infrastructure — we know your mission."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {markets.map((market) => (
          <div
            key={market.id}
            className="group bg-[#111827] border border-[#1E293B] rounded-xl p-6 flex items-center gap-4 hover:border-[#2563EB] hover:bg-[#0A1628] transition-all cursor-default"
          >
            <span className="text-2xl">{market.icon}</span>
            <span className="text-sm font-medium text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
              {market.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
