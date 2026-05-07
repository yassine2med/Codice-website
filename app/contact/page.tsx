"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/data/codice";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { SocialIcons } from "@/components/ui/social-icons";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    agency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Website Inquiry from ${formState.name}${formState.agency ? ` — ${formState.agency}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nAgency: ${formState.agency || 'Not provided'}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', agency: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 800);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <main className="min-h-screen bg-[#0A1628] overflow-hidden">
      <Navbar />
      <PageHero 
        label="Get in Touch"
        title="Let's Modernize Together"
        subtitle="Ready to discuss your agency's next mission? Our team of experts is standing by."
      />
      
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          
          {/* Left Column: Info & Context */}
          <div className="flex flex-col gap-12">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6 leading-tight">
                Secure. Scalable. <span className="text-[#2563EB]">Mission-Critical.</span>
              </h2>
              <p className="text-[#64748B] text-lg leading-relaxed">
                Whether you are looking to modernize legacy government systems, implement AI governance, or scale your enterprise IT infrastructure, CODICE Technology has the expertise to deliver. Reach out today to schedule a technical consultation.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Card */}
              <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-[#2563EB]/50 hover:bg-[#1E293B]/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Mail className="text-[#2563EB]" size={24} />
                </div>
                <h3 className="text-sm font-bold text-[#64748B] tracking-widest uppercase mb-2">Email</h3>
                <a href={`mailto:${company.email}`} className="text-[#F8FAFC] font-semibold hover:text-[#2563EB] transition-colors text-lg break-all">
                  {company.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-[#2563EB]/50 hover:bg-[#1E293B]/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Phone className="text-[#2563EB]" size={24} />
                </div>
                <h3 className="text-sm font-bold text-[#64748B] tracking-widest uppercase mb-2">Phone</h3>
                <a href={`tel:${company.phone}`} className="text-[#F8FAFC] font-semibold hover:text-[#2563EB] transition-colors text-lg">
                  {company.phone}
                </a>
              </div>

              {/* Location Cards (Full Width Grid) */}
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {company.offices.map((office, idx) => (
                  <div key={idx} className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-[#2563EB]/50 hover:bg-[#1E293B]/30 transition-all duration-300 group">
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <MapPin className="text-[#2563EB]" size={24} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#64748B] tracking-widest uppercase mb-2">
                          {office.headquarters ? 'Headquarters' : 'Global Office'}
                        </h3>
                        <p className="text-[#F8FAFC] font-bold text-xl mb-1">
                          {office.city}
                        </p>
                        <p className="text-[#64748B] font-medium">
                          {office.country}
                        </p>
                        {office.headquarters && (
                          <p className="text-[#F8FAFC] font-semibold leading-relaxed mt-4 text-sm pt-4 border-t border-[#1E293B]">
                            {company.address}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6 border-t border-[#1E293B]">
              <p className="text-sm font-bold text-[#64748B] tracking-widest uppercase mb-6">Connect Across Platforms</p>
              <SocialIcons />
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div variants={itemVariants} className="relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2563EB]/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-8 md:p-12 relative z-10 shadow-2xl">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3">Send a Message</h3>
                <p className="text-[#64748B]">Fill out the form below and our strategy team will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="peer w-full bg-[#0A1628] border border-[#1E293B] rounded-xl px-4 pt-6 pb-2 text-[#F8FAFC] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all placeholder-transparent"
                      placeholder="Full Name"
                    />
                    <label htmlFor="name" className="absolute left-4 top-4 text-xs font-bold tracking-widest uppercase text-[#64748B] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#2563EB]">
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="peer w-full bg-[#0A1628] border border-[#1E293B] rounded-xl px-4 pt-6 pb-2 text-[#F8FAFC] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all placeholder-transparent"
                      placeholder="Work Email"
                    />
                    <label htmlFor="email" className="absolute left-4 top-4 text-xs font-bold tracking-widest uppercase text-[#64748B] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#2563EB]">
                      Work Email
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input 
                    type="text" 
                    id="agency"
                    value={formState.agency}
                    onChange={(e) => setFormState({...formState, agency: e.target.value})}
                    className="peer w-full bg-[#0A1628] border border-[#1E293B] rounded-xl px-4 pt-6 pb-2 text-[#F8FAFC] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all placeholder-transparent"
                    placeholder="Agency or Company"
                  />
                  <label htmlFor="agency" className="absolute left-4 top-4 text-xs font-bold tracking-widest uppercase text-[#64748B] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#2563EB]">
                    Agency or Company
                  </label>
                </div>

                <div className="relative">
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="peer w-full bg-[#0A1628] border border-[#1E293B] rounded-xl px-4 pt-8 pb-4 text-[#F8FAFC] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none placeholder-transparent"
                    placeholder="Project Details"
                  />
                  <label htmlFor="message" className="absolute left-4 top-4 text-xs font-bold tracking-widest uppercase text-[#64748B] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-3 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#2563EB]">
                    Project Details
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className={`mt-4 w-full flex items-center justify-center gap-3 font-bold px-8 py-4 rounded-xl text-base transition-all ${
                    isSubmitted 
                      ? "bg-green-500/10 text-green-500 border border-green-500/20" 
                      : "bg-[#2563EB] hover:bg-[#3B82F6] text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    "Message Sent Successfully"
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
