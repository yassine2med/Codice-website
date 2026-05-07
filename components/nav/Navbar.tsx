"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Cpu, Globe, Layers } from "lucide-react";
import { navigation } from "@/data/codice";
import { motion, AnimatePresence } from "framer-motion";
import { DropdownNavigation } from "@/components/ui/dorpdown-navigation";
import { SocialIcons } from "@/components/ui/social-icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? "py-4" 
          : "py-8"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
        scrolled ? "scale-95" : "scale-100"
      }`}>
        <div className={`flex items-center justify-between px-8 py-4 rounded-[2rem] transition-all duration-700 ${
          scrolled 
            ? "glass-morphism shadow-xl border-black/5" 
            : "bg-transparent border-transparent"
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-50 group">
            <div className="relative h-10 w-44 md:h-12 md:w-52 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/brand/codice-logo-full.png"
                alt="CODICE Technology"
                fill
                className="object-contain brightness-0" // Black logo for light theme
                loading="eager"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <DropdownNavigation navItems={navigation.map((group, idx) => ({
              id: idx,
              label: group.title,
              subMenus: group.sections 
                ? group.sections.map(section => ({
                    title: section.title,
                    items: section.items.map(item => ({
                      label: item.label,
                      description: item.description || "",
                      icon: section.title === "Services" ? Cpu : section.title === "Products" ? Layers : Globe,
                      href: item.href
                    }))
                  }))
                : group.items && group.items.length > 1 
                  ? [{
                      title: group.title,
                      items: group.items.map(item => ({
                        label: item.label,
                        description: item.description || "",
                        icon: group.title === "Services" ? Cpu : Globe,
                        href: item.href
                      }))
                    }] 
                  : undefined,
              link: group.items && group.items.length === 1 ? group.items[0].href : undefined
            }))} />
          </div>

          {/* CTA Group */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="text-brand-navy">
              <SocialIcons compact={true} />
            </div>
            <Link 
              href="/contact"
              className="bg-brand-primary text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-xl hover:bg-brand-secondary transition-all duration-300 shadow-lg shadow-brand-primary/20"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden relative z-50 text-brand-navy p-2 glass-card rounded-full w-12 h-12 flex items-center justify-center border-black/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* High-Fidelity Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-background z-40 flex flex-col p-8 overflow-y-auto mesh-gradient"
          >
            <motion.div 
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } }
              }}
              className="mt-24 flex flex-col gap-10"
            >
              {navigation.map((group) => (
                <motion.div 
                  key={group.title} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="space-y-6"
                >
                  <p className="text-[10px] font-bold tracking-[0.4em] text-brand-primary uppercase border-b border-black/5 pb-3">
                    {group.title}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                    {group.sections ? (
                      group.sections.map(section => (
                        <div key={section.title} className="space-y-4">
                          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{section.title}</p>
                          <div className="flex flex-col gap-4">
                            {section.items.map(item => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="text-xl font-bold text-brand-navy hover:text-brand-primary transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : group.items?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-2xl font-bold text-brand-navy hover:text-brand-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}

              <Link
                href="/contact"
                className="bg-brand-primary text-white text-center font-bold py-5 rounded-2xl text-lg shadow-xl shadow-brand-primary/20 mt-6"
                onClick={() => setMobileOpen(false)}
              >
                Launch Briefing
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
