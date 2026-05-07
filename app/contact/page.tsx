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

  return (
    <main className="min-h-screen bg-brand-navy text-white selection:bg-brand-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden mesh-gradient">
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 glass-card px-4 py-2 rounded-full mb-8 border-white/20">
              <Mail size={14} className="text-brand-accent" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent">Mission Coordination</span>
            </div>
            <h1 className="text-[clamp(48px,8vw,92px)] font-extrabold tracking-tighter leading-[0.9] mb-8">
              Let&apos;s Modernize <br />
              <span className="text-gradient text-glow">Together.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-12">
              Ready to architect your agency&apos;s next success? Our team of high-fidelity technical experts is standing by for your briefing.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 -mt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Column: Mission Control Info */}
          <div className="flex flex-col gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Secure. Scalable. <br />
                <span className="text-brand-primary">Mission-Critical.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you are looking to modernize legacy government systems or implement AI governance, CODICE Technology has the technical depth to deliver with precision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Contact Tiles */}
              <div className="glass-card p-10 rounded-[2.5rem] border-white/10 group hover:border-brand-primary/40 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Mail className="text-brand-primary" size={28} />
                </div>
                <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.4em] uppercase mb-3">Direct Email</h3>
                <a href={`mailto:${company.email}`} className="text-white font-bold hover:text-brand-primary transition-colors text-lg break-all leading-tight">
                  {company.email}
                </a>
              </div>

              <div className="glass-card p-10 rounded-[2.5rem] border-white/10 group hover:border-brand-primary/40 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Phone className="text-brand-primary" size={28} />
                </div>
                <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.4em] uppercase mb-3">Priority Line</h3>
                <a href={`tel:${company.phone}`} className="text-white font-bold hover:text-brand-primary transition-colors text-lg leading-tight">
                  {company.phone}
                </a>
              </div>

              {/* Office Locations */}
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {company.offices.map((office, idx) => (
                  <div key={idx} className="glass-card p-10 rounded-[2.5rem] border-white/10 group hover:border-brand-primary/40 transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <MapPin className="text-brand-primary" size={28} />
                    </div>
                    <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.4em] uppercase mb-3">
                      {office.headquarters ? 'The Hub — HQ' : 'Regional Intelligence'}
                    </h3>
                    <p className="text-white font-black text-2xl mb-2 tracking-tight">
                      {office.city}
                    </p>
                    <p className="text-gray-500 font-medium text-sm">
                      {office.country}
                    </p>
                    {office.headquarters && (
                      <div className="mt-8 pt-8 border-t border-white/5">
                        <p className="text-gray-400 font-medium text-sm leading-relaxed">
                          {company.address}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Deployment Form */}
          <div className="relative">
            
            <div className="glass-card p-12 md:p-16 rounded-[3rem] border-white/10 relative z-10">
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Initiate Briefing</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Submit your mission details and our strategy team will coordinate a technical briefing.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="peer w-full bg-black/40 border border-white/10 rounded-2xl px-6 pt-8 pb-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40 transition-all placeholder-transparent"
                      placeholder="Name"
                    />
                    <label className="absolute left-6 top-6 text-xs font-bold tracking-[0.2em] uppercase text-gray-600 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-3 peer-focus:text-[10px] peer-focus:uppercase peer-focus:text-brand-primary">
                      Full Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="peer w-full bg-black/40 border border-white/10 rounded-2xl px-6 pt-8 pb-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40 transition-all placeholder-transparent"
                      placeholder="Email"
                    />
                    <label className="absolute left-6 top-6 text-xs font-bold tracking-[0.2em] uppercase text-gray-600 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-3 peer-focus:text-[10px] peer-focus:uppercase peer-focus:text-brand-primary">
                      Work Email
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <input 
                    type="text" 
                    value={formState.agency}
                    onChange={(e) => setFormState({...formState, agency: e.target.value})}
                    className="peer w-full bg-black/40 border border-white/10 rounded-2xl px-6 pt-8 pb-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40 transition-all placeholder-transparent"
                    placeholder="Agency"
                  />
                  <label className="absolute left-6 top-6 text-xs font-bold tracking-[0.2em] uppercase text-gray-600 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-3 peer-focus:text-[10px] peer-focus:uppercase peer-focus:text-brand-primary">
                    Agency or Organization
                  </label>
                </div>

                <div className="relative group">
                  <textarea 
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="peer w-full bg-black/40 border border-white/10 rounded-2xl px-6 pt-10 pb-4 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40 transition-all resize-none placeholder-transparent"
                    placeholder="Message"
                  />
                  <label className="absolute left-6 top-6 text-xs font-bold tracking-[0.2em] uppercase text-gray-600 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-3 peer-focus:text-[10px] peer-focus:uppercase peer-focus:text-brand-primary">
                    Mission Requirements
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className={`relative overflow-hidden group w-full flex items-center justify-center gap-4 font-black px-10 py-6 rounded-2xl text-lg transition-all duration-500 ${
                    isSubmitted 
                      ? "bg-green-500/10 text-green-500 border border-green-500/30" 
                      : "bg-brand-primary text-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:-translate-y-1 disabled:opacity-70"
                  }`}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center gap-4">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : isSubmitted ? (
                      "Mission Logged Successfully"
                    ) : (
                      <>
                        Coordinate Briefing <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
