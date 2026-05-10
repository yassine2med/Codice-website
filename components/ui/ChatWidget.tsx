"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, ChevronRight, Sparkles, RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";

const QA = [
  {
    id: 1,
    question: "What services does CODICE offer?",
    answer: "CODICE delivers 8 core services: Custom Software Development, Cloud Migration, AI & ML Implementation, Cybersecurity, Data Analytics, Systems Integration, IT Consulting, and Managed Services — all purpose-built for government agencies.",
    cta: { label: "Explore Services", href: "/services" },
  },
  {
    id: 2,
    question: "Tell me about your products",
    answer: "CODICE has built 8 proprietary platforms powering DC agencies daily — including PermiOne (permitting), FortiMind (AI compliance), CelerKost (healthcare finance), Travo AI (logistics), and more.",
    cta: { label: "View All Products", href: "/products" },
  },
  {
    id: 3,
    question: "Which agencies has CODICE worked with?",
    answer: "CODICE serves 12+ DC government agencies including DCRA, DOH, DDOT, DOES, DSLBD, OCTO, DMV, ORM, OAG, and more — with 100% client retention over 16 years.",
    cta: { label: "See Our Clients", href: "/clients" },
  },
  {
    id: 4,
    question: "How do I start a project?",
    answer: "Starting is simple. Reach out with your agency's challenge, and our team will schedule a discovery call within 48 hours. We scope, plan, and deliver — no bureaucratic red tape.",
    cta: { label: "Contact Us", href: "/contact" },
  },
  {
    id: 5,
    question: "Is CODICE GSA Schedule authorized?",
    answer: "Yes. CODICE holds GSA IT Schedule 70 authorization and multiple NAICS codes covering software development, IT consulting, and systems integration — fully compliant for federal procurement.",
    cta: { label: "View Capability Statement", href: "/capability" },
  },
  {
    id: 6,
    question: "What makes CODICE different?",
    answer: "16 years embedded in DC government means we know the bureaucracy, the compliance requirements, and the stakeholders. We don't just build software — we build trust with the agencies that serve millions of residents.",
    cta: { label: "Our Story", href: "/our-story" },
  },
  {
    id: 7,
    question: "Can I see real results?",
    answer: "DCRA cut permit processing time by 60%. DOH achieved real-time compliance tracking. DDOT reduced freight violations by 40%. These aren't projections — they're live production systems.",
    cta: { label: "View Case Studies", href: "/case-studies" },
  },
  {
    id: 8,
    question: "What government sectors do you serve?",
    answer: "CODICE operates across 9 government sectors: Permitting & Licensing, Healthcare, Education, Transportation, Public Safety, Legal Services, Unemployment, Facilities Management, and Financial Services.",
    cta: { label: "Explore Markets", href: "/markets" },
  },
];

interface Message {
  role: "user" | "bot";
  text: string;
  cta?: { label: string; href: string };
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [answered, setAnswered] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setOpen(true);
    setHasOpened(true);
  };

  const handleSelect = (qa: (typeof QA)[0]) => {
    setMessages([
      { role: "user", text: qa.question },
      { role: "bot", text: qa.answer, cta: qa.cta },
    ]);
    setAnswered(true);
  };

  const handleReset = () => {
    setMessages([]);
    setAnswered(false);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[5.5rem] right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.45)] border border-white/[0.06]"
          >
            {/* Header */}
            <div className="bg-[#080D1A] px-5 py-4 flex items-center gap-3 border-b border-white/[0.06]">
              <div className="w-9 h-9 rounded-2xl bg-[#2563EB] flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(37,99,235,0.40)]">
                <Sparkles size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white leading-none">CODICE Assistant</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-medium text-emerald-400/80 tracking-wider uppercase">Online</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/[0.08] transition-all"
                aria-label="Close chat"
              >
                <X size={14} />
              </button>
            </div>

            {/* Body */}
            <div className="bg-[#0A0F1E] flex flex-col" style={{ height: answered ? 360 : 420 }}>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
                {messages.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-4"
                  >
                    {/* Bot intro bubble */}
                    <div className="flex items-end gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                        <Sparkles size={12} className="text-[#60A5FA]" />
                      </div>
                      <div className="bg-[#131B2E] border border-white/[0.06] rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-white/80 leading-relaxed">
                          Hi! I&apos;m your CODICE guide. What would you like to know?
                        </p>
                      </div>
                    </div>

                    {/* Option chips */}
                    <div className="space-y-2 pl-9">
                      {QA.map((qa, i) => (
                        <motion.button
                          key={qa.id}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                          onClick={() => handleSelect(qa)}
                          className="w-full flex items-center gap-2.5 text-left px-4 py-2.5 rounded-xl bg-[#131B2E] border border-white/[0.06] hover:border-[#2563EB]/50 hover:bg-[#1a2540] text-white/70 hover:text-white text-xs font-medium transition-all duration-200 group"
                        >
                          <ChevronRight size={12} className="text-[#2563EB] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                          {qa.question}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <AnimatePresence>
                    {messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`flex items-end gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                      >
                        {msg.role === "bot" && (
                          <div className="w-7 h-7 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center shrink-0 mb-0.5">
                            <Sparkles size={12} className="text-[#60A5FA]" />
                          </div>
                        )}
                        <div className={`max-w-[78%] ${msg.role === "user" ? "ml-auto" : ""}`}>
                          <div className={`rounded-2xl px-4 py-3 ${
                            msg.role === "user"
                              ? "bg-[#2563EB] rounded-br-sm"
                              : "bg-[#131B2E] border border-white/[0.06] rounded-bl-sm"
                          }`}>
                            <p className="text-sm text-white/90 leading-relaxed">{msg.text}</p>
                          </div>
                          {msg.cta && (
                            <motion.div
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              className="mt-2"
                            >
                              <Link
                                href={msg.cta.href}
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center gap-2 text-[11px] font-bold text-[#60A5FA] hover:text-white border border-[#2563EB]/30 hover:border-[#2563EB]/60 hover:bg-[#2563EB]/10 px-3 py-1.5 rounded-lg transition-all"
                              >
                                {msg.cta.label} <ArrowRight size={10} />
                              </Link>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-white/[0.05] bg-[#080D1A] flex items-center justify-between gap-3">
                {answered ? (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 text-[11px] font-bold text-white/40 hover:text-white/70 transition-colors"
                  >
                    <RotateCcw size={11} /> Ask another question
                  </button>
                ) : (
                  <p className="text-[10px] text-white/25 font-medium">Select a question above</p>
                )}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-[10px] font-bold text-[#2563EB] hover:text-[#60A5FA] transition-colors whitespace-nowrap"
                >
                  Talk to a real person →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        onClick={open ? () => setOpen(false) : handleOpen}
        className="fixed bottom-8 right-6 z-50 w-14 h-14 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-[0_8px_32px_rgba(37,99,235,0.45)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.60)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageSquare size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        {!hasOpened && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring", bounce: 0.6 }}
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center"
          >
            <span className="text-[7px] font-black text-[#0A0F1E]">8</span>
          </motion.span>
        )}
      </motion.button>
    </>
  );
}
