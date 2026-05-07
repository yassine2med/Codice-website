"use client";

import { testimonials } from "@/data/codice";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by over 12 government agencies for 16+ years."
        />

        <Carousel
          className="w-full"
          plugins={[Autoplay({ delay: 5000 })]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-12 md:p-16 text-center group transition-all duration-500 hover:border-[#2563EB]/50">
                  <div className="absolute top-8 left-8 text-[#2563EB]/10 group-hover:text-[#2563EB]/20 transition-colors">
                    <Quote size={120} fill="currentColor" strokeWidth={0} />
                  </div>

                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl text-[#0A1628] leading-relaxed mb-10 italic font-medium">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-1 bg-[#2563EB] mb-6 rounded-full" />
                      {t.photo && (
                        <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
                          <Image
                            src={t.photo}
                            alt={t.name}
                            width={56}
                            height={56}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <p className="text-lg font-bold text-[#0A1628]">{t.name}</p>
                      <p className="text-sm font-semibold text-[#64748B] tracking-wide uppercase mt-1">
                        {t.title} <span className="text-[#2563EB] mx-2">/</span> {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-200 hover:bg-[#2563EB] transition-colors cursor-pointer" />
          ))}
        </div>
      </div>
    </section>
  );
}
