import { company } from "@/data/codice";

export default function CTABanner() {
  return (
    <div className="py-24 px-6 bg-[#2563EB]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Modernize Your Agency?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Let&apos;s talk about your mission. We&apos;ve delivered for 12+ agencies — yours is next.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${company.email}`}
            className="bg-white text-[#2563EB] font-semibold px-8 py-4 rounded-lg text-base hover:bg-blue-50 transition-colors"
          >
            Schedule a Consultation
          </a>
          <a
            href={`tel:${company.phone}`}
            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-white/10 transition-colors"
          >
            {company.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
