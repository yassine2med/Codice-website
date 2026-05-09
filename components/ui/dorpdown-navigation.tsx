"use client";

import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

type NavItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      href?: string;
    }[];
  }[];
  link?: string;
};

type Props = {
  navItems: NavItem[];
};

export function DropdownNavigation({ navItems }: Props) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  return (
    <div className="relative flex items-center px-2">
      <ul className="flex items-center gap-0.5">
        {navItems.map((navItem) => {
          const isOpen = openMenu === navItem.label;
          const isMegaMenu = navItem.subMenus && navItem.subMenus.length > 1;

          return (
            <li
              key={navItem.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(navItem.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* ── Nav button / link ── */}
              {navItem.link ? (
                <Link
                  href={navItem.link}
                  onMouseEnter={() => setIsHover(navItem.id)}
                  onMouseLeave={() => setIsHover(null)}
                  className="relative flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[#475569] hover:text-[#0F172A] transition-colors duration-200 rounded-lg"
                >
                  <span className="relative z-10">{navItem.label}</span>
                  {isHover === navItem.id && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </Link>
              ) : (
                <button
                  onMouseEnter={() => setIsHover(navItem.id)}
                  onMouseLeave={() => setIsHover(null)}
                  className="relative flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[#475569] hover:text-[#0F172A] transition-colors duration-200 rounded-lg"
                >
                  <span className="relative z-10">{navItem.label}</span>
                  {navItem.subMenus && (
                    <ChevronDown
                      size={12}
                      className={`relative z-10 text-[#94A3B8] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}
                  {(isHover === navItem.id || isOpen) && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </button>
              )}

              {/* ── Dropdown Panel ── */}
              <AnimatePresence>
                {isOpen && navItem.subMenus && (
                  <div
                    className={`absolute top-full pt-3 z-50 ${
                      isMegaMenu ? "left-1/2 -translate-x-1/2" : "left-0"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className={`bg-white/97 backdrop-blur-2xl border border-[#E2E8F0] rounded-2xl shadow-[0_8px_40px_rgba(15,23,42,0.10),0_2px_8px_rgba(15,23,42,0.06)] overflow-hidden ${
                        isMegaMenu ? "p-6" : "p-2 min-w-[220px]"
                      }`}
                      style={{ width: isMegaMenu ? "min(90vw, 980px)" : undefined }}
                    >
                      {isMegaMenu ? (
                        /* ── SOLUTIONS mega menu — 3 columns ── */
                        <div className="grid grid-cols-3 gap-6">
                          {navItem.subMenus.map((sub) => {
                            const overviewItem = sub.items.find(i => i.label.toLowerCase().includes("overview"));
                            const restItems = sub.items.filter(i => !i.label.toLowerCase().includes("overview"));
                            return (
                              <div key={sub.title} className="flex flex-col">
                                {/* Section header */}
                                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#F1F5F9]">
                                  <div className="w-1 h-4 bg-[#2563EB] rounded-full" />
                                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#2563EB]">
                                    {sub.title}
                                  </span>
                                </div>

                                {/* Overview link */}
                                {overviewItem && (
                                  <a
                                    href={overviewItem.href || "#"}
                                    className="group flex items-center justify-between bg-[#F0F6FF] hover:bg-[#2563EB] border border-[#2563EB]/15 hover:border-[#2563EB] rounded-xl px-3.5 py-3 mb-3 transition-all duration-200"
                                  >
                                    <span className="text-sm font-bold text-[#1D4ED8] group-hover:text-white transition-colors">
                                      {overviewItem.label}
                                    </span>
                                    <ArrowRight size={13} className="text-[#2563EB] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                                  </a>
                                )}

                                {/* Rest of items */}
                                <ul className="flex flex-col gap-0.5">
                                  {restItems.slice(0, 5).map((item) => (
                                    <li key={item.label}>
                                      <a
                                        href={item.href || "#"}
                                        className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-[#F8FAFC] group transition-colors duration-150"
                                      >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] group-hover:bg-[#2563EB] transition-colors shrink-0" />
                                        <span className="text-sm text-[#475569] group-hover:text-[#0F172A] font-medium transition-colors truncate">
                                          {item.label}
                                        </span>
                                      </a>
                                    </li>
                                  ))}
                                  {restItems.length > 5 && (
                                    <li>
                                      <a
                                        href={overviewItem?.href || "#"}
                                        className="flex items-center gap-2 px-2.5 py-1.5 text-[11px] font-bold text-[#2563EB] hover:text-[#1D4ED8] uppercase tracking-widest transition-colors"
                                      >
                                        +{restItems.length - 5} more <ArrowRight size={10} />
                                      </a>
                                    </li>
                                  )}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        /* ── Simple dropdown (COMPANY, CONNECT) ── */
                        <>
                          <div className="px-3 pt-1.5 pb-2">
                            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#94A3B8]">
                              {navItem.subMenus[0].title}
                            </p>
                          </div>
                          {navItem.subMenus[0].items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href || "#"}
                              className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F0F6FF] transition-all duration-150"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] group-hover:bg-[#2563EB] transition-colors shrink-0" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-[#334155] group-hover:text-[#0F172A] transition-colors truncate">
                                  {item.label}
                                </p>
                                {item.description && (
                                  <p className="text-[11px] text-[#94A3B8] truncate mt-0.5 group-hover:text-[#64748B] transition-colors">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                              <ArrowRight
                                size={12}
                                className="text-transparent group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all shrink-0"
                              />
                            </a>
                          ))}
                        </>
                      )}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
