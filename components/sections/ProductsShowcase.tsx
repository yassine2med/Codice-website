import { products } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsShowcase() {
  return (
    <section id="products" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Proprietary Tech"
        title="Solutions Built for the Public Sector"
        subtitle="Purpose-built platforms that agencies rely on — not off-the-shelf software."
      />
      
      <Tabs defaultValue={products[0].id} className="w-full">
        <TabsList className="flex flex-wrap gap-3 h-auto bg-transparent mb-12 justify-center">
          {products.map((product) => (
            <TabsTrigger
              key={product.id}
              value={product.id}
              className="text-xs font-bold tracking-widest uppercase data-[state=active]:bg-[#2563EB] data-[state=active]:text-white text-[#64748B] border border-[#1E293B] rounded-full px-6 py-3 transition-all duration-300 hover:border-[#2563EB]/50"
            >
              {product.name}
              {product.isNew && <span className="ml-2 text-[10px] text-[#FF6B00]">NEW</span>}
            </TabsTrigger>
          ))}
        </TabsList>

        <AnimatePresence>
          {products.map((product) => (
            <TabsContent key={product.id} value={product.id}>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden"
              >
                {/* Subtle Glow Background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 blur-[100px] rounded-full -mr-64 -mt-64 pointer-events-none" />

                <div className="flex-1 relative z-10 text-center lg:text-left">
                  <Badge className="mb-6 bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {product.category}
                  </Badge>
                  <h3 className="text-[clamp(32px,5vw,48px)] font-bold text-[#F8FAFC] mb-6 leading-tight tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-[#64748B] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                    {product.description}
                  </p>
                  <a
                    href={product.slug}
                    className="inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1"
                  >
                    Explore Product <ArrowRight size={18} />
                  </a>
                </div>

                {/* Abstract Visual Placeholder */}
                <div className="w-full lg:w-1/3 aspect-square bg-[#0A1628] rounded-2xl border border-[#1E293B] flex items-center justify-center relative z-10 group overflow-hidden">
                   <div className="absolute inset-0 bg-linear-to-br from-[#2563EB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <span className="text-6xl group-hover:scale-110 transition-transform duration-500">🚀</span>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>
    </section>
  );
}
