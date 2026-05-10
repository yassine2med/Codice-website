"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CornerDownLeft, FileText, Box, Cpu, Clock } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { products, services } from "@/data/codice";

const RECENT_KEY = "codice-recent-pages";
const MAX_RECENT = 4;

const pages = [
  { label: "Home", href: "/", description: "Main homepage" },
  { label: "Services", href: "/services", description: "8 government-grade services" },
  { label: "Products", href: "/products", description: "8 proprietary platforms" },
  { label: "Our Story", href: "/our-story", description: "16 years in DC government tech" },
  { label: "Clients & Partners", href: "/clients", description: "12+ DC agencies served" },
  { label: "Case Studies", href: "/case-studies", description: "Real results, real agencies" },
  { label: "Markets", href: "/markets", description: "9 government sectors" },
  { label: "News & Events", href: "/news", description: "Latest updates from CODICE" },
  { label: "Careers", href: "/careers", description: "Join the CODICE team" },
  { label: "Capability Statement", href: "/capability", description: "GSA schedules & NAICS codes" },
  { label: "Contact", href: "/contact", description: "Schedule a briefing" },
  { label: "Articles", href: "/articles", description: "Insights & thought leadership" },
];

type Result = {
  label: string;
  href: string;
  description: string;
  type: "page" | "product" | "service" | "recent";
};

const allItems: Result[] = [
  ...pages.map((p) => ({ ...p, type: "page" as const })),
  ...products.map((p) => ({ label: p.name, href: `/products/${p.slug}`, description: p.description, type: "product" as const })),
  ...services.map((s) => ({ label: s.title, href: `/services/${s.slug}`, description: s.description, type: "service" as const })),
];

function getRecent(): Result[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    if (!raw) return [];
    const hrefs: string[] = JSON.parse(raw);
    return hrefs
      .map((h) => allItems.find((i) => i.href === h))
      .filter(Boolean)
      .map((i) => ({ ...i!, type: "recent" as const }));
  } catch { return []; }
}

function saveRecent(href: string) {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    const prev: string[] = raw ? JSON.parse(raw) : [];
    const next = [href, ...prev.filter((h) => h !== href)].slice(0, MAX_RECENT);
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  } catch { /* noop */ }
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [recent, setRecent] = useState<Result[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Track current page in recent
  useEffect(() => {
    saveRecent(pathname);
  }, [pathname]);

  // Open palette
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Navbar button fires this event
  useEffect(() => {
    const handler = () => { setOpen(true); };
    window.addEventListener("codice:open-palette", handler);
    return () => window.removeEventListener("codice:open-palette", handler);
  }, []);

  // Focus + load recents on open
  useEffect(() => {
    if (open) {
      setRecent(getRecent());
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  // Build results
  const filtered: Result[] = query.trim()
    ? allItems.filter(
        (r) =>
          r.label.toLowerCase().includes(query.toLowerCase()) ||
          r.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const showDefault = !query.trim();
  const grouped = showDefault
    ? {
        recent: recent.slice(0, 4),
        page: pages.map((p) => ({ ...p, type: "page" as const })).slice(0, 8),
        product: [] as Result[],
        service: [] as Result[],
      }
    : {
        recent: [] as Result[],
        page: filtered.filter((r) => r.type === "page"),
        product: filtered.filter((r) => r.type === "product"),
        service: filtered.filter((r) => r.type === "service"),
      };

  const flat = [...grouped.recent, ...grouped.page, ...grouped.product, ...grouped.service];

  const navigate = useCallback(
    (href: string) => {
      saveRecent(href);
      router.push(href);
      setOpen(false);
    },
    [router]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const keydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => {
          const next = Math.min(s + 1, flat.length - 1);
          scrollToItem(next);
          return next;
        });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => {
          const next = Math.max(s - 1, 0);
          scrollToItem(next);
          return next;
        });
      } else if (e.key === "Enter" && flat[selected]) {
        navigate(flat[selected].href);
      }
    };
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, [open, flat, selected, navigate]);

  const scrollToItem = (idx: number) => {
    if (!listRef.current) return;
    const el = listRef.current.querySelectorAll("[data-result]")[idx] as HTMLElement;
    el?.scrollIntoView({ block: "nearest" });
  };

  const typeConfig = (type: string) => {
    if (type === "recent") return { Icon: Clock, color: "text-[#94A3B8]", bg: "bg-[#F8FAFC] border-[#E2E8F0]" };
    if (type === "product") return { Icon: Box, color: "text-violet-500", bg: "bg-violet-50 border-violet-200/60" };
    if (type === "service") return { Icon: Cpu, color: "text-emerald-500", bg: "bg-emerald-50 border-emerald-200/60" };
    return { Icon: FileText, color: "text-[#2563EB]", bg: "bg-[#F0F6FF] border-[#2563EB]/20" };
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 bg-[#0A0F1E]/65 backdrop-blur-sm z-[100]"
            onClick={() => setOpen(false)}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -20 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[14vh] left-1/2 -translate-x-1/2 z-[101] w-full max-w-2xl px-4"
          >
            <div className="bg-white rounded-3xl shadow-[0_32px_80px_rgba(15,23,42,0.22),0_0_0_1px_rgba(15,23,42,0.05)] overflow-hidden">
              {/* Search bar */}
              <div className="flex items-center gap-3.5 px-5 py-4 border-b border-[#F1F5F9]">
                <Search size={17} className="text-[#94A3B8] shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                  placeholder="Search pages, products, services…"
                  className="flex-1 bg-transparent text-[#0F172A] text-[15px] placeholder:text-[#CBD5E1] outline-none"
                />
                <kbd className="hidden sm:flex items-center px-2 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] font-bold text-[#B0BEC5]">
                  ESC
                </kbd>
              </div>

              {/* Results list */}
              <div ref={listRef} className="max-h-[400px] overflow-y-auto py-2">
                {flat.length === 0 && query.trim() ? (
                  <div className="px-6 py-10 text-center">
                    <p className="text-[#94A3B8] text-sm">No results for <span className="font-semibold text-[#0F172A]">&ldquo;{query}&rdquo;</span></p>
                    <p className="text-[#CBD5E1] text-xs mt-1">Try a product name, service, or page</p>
                  </div>
                ) : (
                  <>
                    {[
                      { key: "recent", label: "Recently Visited", items: grouped.recent },
                      { key: "page", label: showDefault ? "All Pages" : "Pages", items: grouped.page },
                      { key: "product", label: "Products", items: grouped.product },
                      { key: "service", label: "Services", items: grouped.service },
                    ].map(
                      (group) =>
                        group.items.length > 0 && (
                          <div key={group.key} className="mb-1">
                            <p className="px-5 pt-3 pb-1.5 text-[9px] font-black tracking-[0.28em] uppercase text-[#D1D9E0]">
                              {group.label}
                            </p>
                            {group.items.map((item) => {
                              const globalIdx = flat.indexOf(item);
                              const { Icon, color, bg } = typeConfig(item.type);
                              const isSelected = selected === globalIdx;
                              return (
                                <button
                                  key={item.href + item.type}
                                  data-result
                                  onClick={() => navigate(item.href)}
                                  onMouseEnter={() => setSelected(globalIdx)}
                                  className={`w-full flex items-center gap-3.5 px-4 py-2.5 mx-1 rounded-xl transition-all duration-100 text-left group ${
                                    isSelected ? "bg-[#F0F6FF]" : "hover:bg-[#F8FAFC]"
                                  }`}
                                  style={{ width: "calc(100% - 8px)" }}
                                >
                                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${bg}`}>
                                    <Icon size={14} className={color} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className={`text-sm font-semibold leading-none mb-0.5 transition-colors ${isSelected ? "text-[#2563EB]" : "text-[#0F172A]"}`}>
                                      {item.label}
                                    </p>
                                    <p className="text-xs text-[#94A3B8] truncate">{item.description}</p>
                                  </div>
                                  <AnimatePresence>
                                    {isSelected && (
                                      <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="shrink-0 w-6 h-6 rounded-lg bg-[#2563EB]/10 flex items-center justify-center"
                                      >
                                        <CornerDownLeft size={11} className="text-[#2563EB]" />
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </button>
                              );
                            })}
                          </div>
                        )
                    )}
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-[#F1F5F9] flex items-center justify-between">
                <div className="flex items-center gap-3 text-[10px] text-[#CBD5E1] font-medium">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] font-bold text-[#94A3B8]">↑↓</kbd>
                    navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] font-bold text-[#94A3B8]">↵</kbd>
                    open
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[#D1D9E0]">
                  {flat.length} result{flat.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
