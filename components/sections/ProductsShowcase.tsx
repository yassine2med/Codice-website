import { products } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function ProductsShowcase() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto bg-[#111827] rounded-2xl my-6">
      <SectionHeader
        label="Our Products"
        title="8 Proprietary Government Platforms"
        subtitle="Purpose-built software that agencies rely on — not off-the-shelf."
      />
      <Tabs defaultValue={products[0].id} className="w-full">
        <TabsList className="flex flex-wrap gap-2 h-auto bg-transparent mb-8 justify-center">
          {products.map((product) => (
            <TabsTrigger
              key={product.id}
              value={product.id}
              className="text-xs font-medium data-[state=active]:bg-[#2563EB] data-[state=active]:text-white text-[#64748B] border border-[#1E293B] rounded-lg px-4 py-2"
            >
              {product.name}
              {product.isNew && <span className="ml-2 text-[10px] text-[#FF6B00] font-bold">NEW</span>}
            </TabsTrigger>
          ))}
        </TabsList>
        {products.map((product) => (
          <TabsContent key={product.id} value={product.id}>
            <div className="bg-[#0A1628] border border-[#1E293B] rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <Badge className="mb-4 bg-[#1E293B] text-[#2563EB] border-none text-xs">{product.category}</Badge>
                <h3 className="text-3xl font-bold text-[#F8FAFC] mb-4">{product.name}</h3>
                <p className="text-[#64748B] text-base leading-relaxed mb-6">{product.description}</p>
                <a
                  href={product.slug}
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
