import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Rocket,
  Users,
} from "lucide-react";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { company } from "@/data/codice";

const culture = [
  {
    icon: HeartHandshake,
    title: "Collaborative by design",
    text: "CODICE describes a collaborative, diverse, growth-driven environment where professionals can thrive.",
  },
  {
    icon: GraduationCap,
    title: "Learning culture",
    text: "The careers page emphasizes learning, development, and opportunities for both experienced and early-career talent.",
  },
  {
    icon: Rocket,
    title: "Impact work",
    text: "Teams work on technology, finance, healthcare operations, and consulting programs for government agencies and beyond.",
  },
];

const hiringAreas = [
  "Software engineering",
  "Cloud and infrastructure",
  "Data analytics and BI",
  "Cybersecurity and compliance",
  "Health IT operations",
  "Project delivery",
  "Business analysis",
  "IT staffing and support",
];

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A1628] text-[#F8FAFC]">
      <Navbar />

      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(37,99,235,0.22),transparent_36%),linear-gradient(to_right,#1E293B_1px,transparent_1px)] bg-size-[auto,4rem_4rem] opacity-35" />
        <div className="absolute left-[-12%] top-28 h-[520px] w-[520px] rounded-full bg-[#2563EB]/18 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#60A5FA]">
              Careers
            </p>
            <h1 className="text-[clamp(44px,7vw,86px)] font-bold leading-[1.01] tracking-tight">
              Build technology that keeps public services moving.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
              CODICE is shaping technology with innovation and expertise,
              serving government agencies and mission-driven organizations from Washington, DC.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://www.ziprecruiter.com/c/Codice/Jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#0A1628]"
              >
                View Openings
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center rounded-full border border-[#334155] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#CBD5E1] hover:border-[#60A5FA] hover:text-white"
              >
                Send Resume
              </Link>
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-[#1E293B] bg-[#0F172A]/88 p-6 shadow-[0_40px_110px_rgba(2,6,23,0.42)]">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">CODICE team</p>
                <p className="mt-2 text-sm text-[#94A3B8]">Washington, DC headquarters with international engineering reach.</p>
              </div>
              <Users className="h-8 w-8 text-[#60A5FA]" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {hiringAreas.map((area) => (
                <div key={area} className="rounded-xl border border-[#1E293B] bg-[#0A1628] p-4">
                  <BriefcaseBusiness className="mb-4 h-5 w-5 text-[#60A5FA]" />
                  <p className="text-sm font-bold text-[#E2E8F0]">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1E293B] bg-[#0F172A] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">Why CODICE</p>
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight">
              A place for builders who care about outcomes.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {culture.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-[#1E293B] bg-[#0A1628] p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/14 text-[#60A5FA]">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#60A5FA]">Location</p>
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Work with a government-tech team rooted in Washington, DC.
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-[#1E293B] bg-[#111827] p-8">
            <MapPin className="mb-6 h-8 w-8 text-[#60A5FA]" />
            <p className="text-xl font-bold text-white">{company.fullName}</p>
            <p className="mt-3 text-[#94A3B8]">{company.address}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a className="rounded-xl border border-[#1E293B] px-4 py-3 text-sm font-semibold text-[#CBD5E1]" href={`tel:${company.phone}`}>
                {company.phone}
              </a>
              <a className="rounded-xl border border-[#1E293B] px-4 py-3 text-sm font-semibold text-[#CBD5E1]" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
