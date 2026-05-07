"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, GraduationCap, Briefcase } from "lucide-react";
import { useEffect } from "react";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  education?: string;
  photo?: string;
}

interface TeamModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0A1628]/95 backdrop-blur-2xl p-4 md:p-6"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10000 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.02, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl bg-[#0F172A] border border-[#1E293B] rounded-[2rem] overflow-hidden shadow-[0_40px_120px_rgba(2,6,23,0.8)] flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Image */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-[#0A1628] shrink-0">
              {member.photo ? (
                <>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#1E293B] to-[#0A1628]">
                  <span className="text-6xl font-bold text-[#2563EB]/20">{member.name.charAt(0)}</span>
                </div>
              )}
            </div>

            {/* Right: Content */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar relative z-10 -mt-8 md:mt-0 bg-linear-to-t md:bg-linear-to-r from-[#0F172A] via-[#0F172A] to-transparent md:to-transparent rounded-t-[2rem] md:rounded-t-none">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-1.5 rounded-full mb-6">
                  Leadership Team
                </span>
                
                <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-2 tracking-tight">
                  {member.name}
                </h2>
                <p className="text-[#60A5FA] font-semibold text-lg md:text-xl mb-8">
                  {member.title}
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#64748B] uppercase tracking-widest flex items-center gap-2 mb-3">
                      <Briefcase size={16} className="text-[#2563EB]" /> Biography
                    </h3>
                    <p className="text-[#CBD5E1] leading-relaxed text-base md:text-lg">
                      {member.bio}
                    </p>
                  </div>

                  {member.education && (
                    <div className="pt-8 border-t border-[#1E293B]">
                      <h3 className="text-sm font-bold text-[#64748B] uppercase tracking-widest flex items-center gap-2 mb-3">
                        <GraduationCap size={16} className="text-[#2563EB]" /> Education & Credentials
                      </h3>
                      <p className="text-[#94A3B8] leading-relaxed">
                        {member.education}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
