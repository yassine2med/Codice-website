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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-[#0A1628]/85 backdrop-blur-xl border-[#2563EB]/20 py-3 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)]" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-50">
          <Image
            src="/images/brand/codice-logo-full.png"
            alt="CODICE Technology"
            width={1536}
            height={1024}
            className="hidden md:block h-10 w-44 rounded-md object-cover object-center lg:h-12 lg:w-52"
            loading="eager"
            fetchPriority="high"
          />
          <Image
            src="/images/brand/codice-logo-wtitle.png"
            alt="CODICE"
            width={1536}
            height={1024}
            className="md:hidden h-10 w-10 rounded-md object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <DropdownNavigation navItems={navigation.map((group, idx) => ({
            id: idx,
            label: group.title,
            // Handle both flat items and nested sections
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

        {/* CTA */}
        <div className="hidden md:flex items-center gap-8 min-w-max">
          <SocialIcons compact={true} />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative z-50 text-[#F8FAFC] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0A1628] z-40 flex flex-col p-12 overflow-y-auto"
          >
            <motion.div 
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } }
              }}
              className="mt-20 flex flex-col gap-12"
            >
              <div className="flex flex-col gap-12">
              {navigation.map((group) => (
                <motion.div 
                  key={group.title} 
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
                  }}
                  className="space-y-6"
                >
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[#2563EB] uppercase border-b border-[#1E293B] pb-2">
                    {group.title}
                  </p>
                  <div className="flex flex-col gap-6">
                    {/* Handle nested sections for mobile */}
                    {group.sections ? (
                      group.sections.map(section => (
                        <div key={section.title} className="space-y-4">
                          <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest">{section.title}</p>
                          <div className="flex flex-col gap-4 pl-4 border-l border-[#1E293B]">
                            {section.items.map(item => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="text-lg font-bold text-[#F8FAFC] hover:text-[#2563EB] transition-colors"
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
                        className="text-2xl font-bold text-[#F8FAFC] hover:text-[#2563EB] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
              </div>

              <Link
                href="/contact"
                className="bg-[#2563EB] text-white text-lg font-bold px-8 py-5 rounded-2xl text-center mt-4 shadow-[0_0_32px_rgba(37,99,235,0.2)]"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
