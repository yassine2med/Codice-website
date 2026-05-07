import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  const [isHover, setIsHover] = useState<number | null>(null);
  
  return (
    <div className="relative w-full flex items-start md:items-center justify-center px-4">
      <div className="relative gap-5 flex flex-col items-center justify-center">
        <ul className="relative flex items-center space-x-0">
          {navItems.map((navItem) => (
            <li
              key={navItem.label}
              className="relative"
              onMouseEnter={() => handleHover(navItem.label)}
              onMouseLeave={() => handleHover(null)}
            >
              <button
                className="text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-[#64748B] hover:text-[#F8FAFC] relative"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                {navItem.subMenus && (
                  <ChevronDown
                    className={`h-3 w-3 group-hover:rotate-180 duration-300 transition-transform
                      ${openMenu === navItem.label ? "rotate-180" : ""}`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full bg-white/5"
                    style={{ borderRadius: 99 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {openMenu === navItem.label && navItem.subMenus && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50">
                    <motion.div
                      className="bg-[#111827]/95 backdrop-blur-2xl border border-[#1E293B] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                      style={{ borderRadius: 24, width: 'min(90vw, 1000px)' }}
                      layoutId="menu"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {navItem.subMenus.map((sub) => (
                          <div className="flex flex-col" key={sub.title}>
                            <div className="flex items-center gap-2 mb-6">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                                {sub.title}
                              </h3>
                            </div>
                            <ul className="space-y-1">
                              {sub.items.map((item) => {
                                const Icon = item.icon;
                                const isOverview = item.label.toLowerCase().includes('overview');
                                return (
                                  <li key={item.label}>
                                    <a
                                      href={item.href || "#"}
                                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group/item ${
                                        isOverview 
                                          ? "bg-[#2563EB]/5 border border-[#2563EB]/20 mb-3" 
                                          : "hover:bg-white/5"
                                      }`}
                                    >
                                      <div className={`flex items-center justify-center size-8 shrink-0 rounded-lg border border-[#1E293B] transition-colors duration-300 ${
                                        isOverview 
                                          ? "bg-[#2563EB] text-white border-transparent" 
                                          : "text-[#64748B] group-hover/item:border-[#2563EB]/50 group-hover/item:text-[#2563EB] group-hover/item:bg-[#2563EB]/10"
                                      }`}>
                                        <Icon className="h-4 w-4" />
                                      </div>
                                      <div className="flex flex-col min-w-0">
                                        <p className={`text-sm font-bold truncate transition-colors ${
                                          isOverview ? "text-[#F8FAFC]" : "text-[#94A3B8] group-hover/item:text-[#F8FAFC]"
                                        }`}>
                                          {item.label}
                                        </p>
                                        {isOverview && (
                                          <p className="text-[10px] text-[#64748B] truncate">
                                            {item.description}
                                          </p>
                                        )}
                                      </div>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Bottom decorative bar */}
                      <div className="mt-8 pt-6 border-t border-[#1E293B] flex items-center justify-between text-[10px] font-medium text-[#475569] uppercase tracking-widest">
                        <span>Built for the public sector</span>
                        <div className="flex gap-4">
                          <span>Secure</span>
                          <span>•</span>
                          <span>Scalable</span>
                          <span>•</span>
                          <span>Compliant</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
