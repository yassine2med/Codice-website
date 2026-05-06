import { testimonials } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <div className="py-24 px-6 bg-[#111827]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="What Clients Say"
          title="Trusted. Proven. Retained."
        />
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <div className="bg-[#0A1628] border border-[#1E293B] rounded-xl p-10 text-center">
                  <p className="text-xl text-[#F8FAFC] leading-relaxed mb-8 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-semibold text-[#F8FAFC]">{t.name}</p>
                    <p className="text-xs text-[#64748B]">{t.title}, {t.company}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-[#1E293B] text-[#F8FAFC] hover:bg-[#111827]" />
          <CarouselNext className="border-[#1E293B] text-[#F8FAFC] hover:bg-[#111827]" />
        </Carousel>
      </div>
    </div>
  );
}
