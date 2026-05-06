import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProductsShowcase from "@/components/sections/ProductsShowcase";
import MarketsGrid from "@/components/sections/MarketsGrid";
import StatsSection from "@/components/sections/StatsSection";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import TechStack from "@/components/sections/TechStack";
import CTABanner from "@/components/sections/CTABanner";
import NewsEvents from "@/components/sections/NewsEvents";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="trust"><TrustMarquee /></section>
      <section id="services"><ServicesGrid /></section>
      <section id="products"><ProductsShowcase /></section>
      <section id="markets"><MarketsGrid /></section>
      <section id="stats"><StatsSection /></section>
      <section id="case-studies"><CaseStudies /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="tech-stack"><TechStack /></section>
      <section id="cta"><CTABanner /></section>
      <section id="news"><NewsEvents /></section>
      <Footer />
    </main>
  );
}
