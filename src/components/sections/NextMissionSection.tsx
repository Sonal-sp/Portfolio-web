"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Mail, Linkedin, Github, BookOpen, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const NextMissionSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gold-400 uppercase tracking-widest">
        <Rocket className="w-4 h-4 text-gold-400" />
        <span>FINAL SECTION • TRANSMISSION</span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="font-mono text-xs text-gold-400 uppercase tracking-widest">
          THE NEXT MISSION
        </h2>
        <h3 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none">
          The best ideas are still waiting to be built.
        </h3>
        <p className="font-sans text-starlight-400 font-light text-base sm:text-lg">
          Have an ambitious project, research proposal, or engineering role? Let&apos;s build something extraordinary together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Direct Connections Card (5 cols) */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <h4 className="font-mono text-xs text-gold-400 uppercase tracking-wider">
            DIRECT SIGNAL CHANNELS
          </h4>

          <div className="space-y-4 font-mono text-xs">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/40 text-starlight-200 hover:text-white flex items-center gap-3 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-starlight-400">EMAIL DIRECT</span>
                <span className="font-bold text-sm text-starlight-100">{PORTFOLIO_DATA.personal.email}</span>
              </div>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/40 text-starlight-200 hover:text-white flex items-center gap-3 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-starlight-400">LINKEDIN PROFILE</span>
                <span className="font-bold text-sm text-starlight-100">linkedin.com/in/sonal-parmar</span>
              </div>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/40 text-starlight-200 hover:text-white flex items-center gap-3 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-starlight-400">MEDIUM ARTICLES</span>
                <span className="font-bold text-sm text-starlight-100">medium.com/@airryaxolotl2607</span>
              </div>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/40 text-starlight-200 hover:text-white flex items-center gap-3 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-starlight-200 group-hover:scale-110 transition-transform">
                <Github className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-starlight-400">GITHUB PROFILE</span>
                <span className="font-bold text-sm text-starlight-100">github.com/Sonal-sp</span>
              </div>
            </a>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-starlight-400">BASE LOCATION</span>
                <span className="font-bold text-sm text-starlight-100">{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-gold-500/30 box-glow-gold">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-3xl font-bold text-white">Transmission Received</h4>
              <p className="font-sans text-sm text-starlight-300 max-w-md mx-auto">
                Thank you for reaching out! Your message has been logged in the Observatory queue. Sonal will reply shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormState({ name: "", email: "", message: "" });
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-starlight-100"
              >
                Send Another Transmission
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-mono text-xs text-gold-400 uppercase">TRANSMIT MESSAGE</span>
                <span className="font-mono text-[10px] text-starlight-400">ENCRYPTED & DIRECT</span>
              </div>

              <div className="space-y-4 font-sans text-sm">
                <div>
                  <label className="block font-mono text-xs text-starlight-300 mb-1.5">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Dr. Eleanor Arroway"
                    className="w-full px-4 py-3 rounded-xl bg-cosmos-950/80 border border-white/10 text-white placeholder-starlight-400 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-starlight-300 mb-1.5">YOUR EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. eleanor@observatory.org"
                    className="w-full px-4 py-3 rounded-xl bg-cosmos-950/80 border border-white/10 text-white placeholder-starlight-400 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-starlight-300 mb-1.5">TRANSMISSION DETAILS</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe the mission, project concept, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-cosmos-950/80 border border-white/10 text-white placeholder-starlight-400 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-cosmos-950 font-display font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>INITIATE TRANSMISSION</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
