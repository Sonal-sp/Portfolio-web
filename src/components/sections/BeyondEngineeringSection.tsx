"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Camera, Trophy, HelpCircle, Star, ExternalLink, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const BeyondEngineeringSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Competitions" | "Certifications" | "Books" | "CuriosityLog">("Competitions");

  return (
    <section id="beyond" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gold-400 uppercase tracking-widest">
        <Trophy className="w-4 h-4 text-gold-400" />
        <span>SECTION • COMPETITIONS, CERTIFICATIONS & BEYOND</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Competitions, Honors & Certifications
          </h2>
          <p className="font-sans text-starlight-400 font-light text-base sm:text-lg mt-3 max-w-xl">
            National achievements, intercollegiate coding contests, industry certifications, and literature.
          </p>
        </div>

        {/* Sub-tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 font-mono text-xs">
          <button
            onClick={() => setActiveTab("Competitions")}
            className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTab === "Competitions" ? "bg-gold-500 text-cosmos-950 font-bold" : "text-starlight-300 hover:text-white"
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Contests ({PORTFOLIO_DATA.competitions.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("Certifications")}
            className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTab === "Certifications" ? "bg-gold-500 text-cosmos-950 font-bold" : "text-starlight-300 hover:text-white"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Certifications ({PORTFOLIO_DATA.certifications.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("Books")}
            className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTab === "Books" ? "bg-gold-500 text-cosmos-950 font-bold" : "text-starlight-300 hover:text-white"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Books</span>
          </button>
          <button
            onClick={() => setActiveTab("CuriosityLog")}
            className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTab === "CuriosityLog" ? "bg-gold-500 text-cosmos-950 font-bold" : "text-starlight-300 hover:text-white"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Curiosity</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Competitions Showcase */}
      {activeTab === "Competitions" && (
        <div className="space-y-6">
          {PORTFOLIO_DATA.competitions.map((comp, index) => {
            const isNational = comp.badge === "National Top 45";
            return (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                  isNational
                    ? "border-gold-500/50 box-glow-gold bg-slate-900/90"
                    : "border-white/10 glass-panel-hover"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider ${
                        isNational
                          ? "bg-gold-500 text-cosmos-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                          : "bg-white/10 border border-white/15 text-gold-400"
                      }`}
                    >
                      🏆 {comp.badge}
                    </span>
                    <span className="font-mono text-xs text-starlight-400">• {comp.date}</span>
                  </div>
                  <span className="font-mono text-xs text-starlight-300">{comp.event}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  {comp.title}
                </h3>
                <p className="font-mono text-xs text-gold-400 mb-3">
                  Organized by: {comp.organizer}
                </p>
                <p className="font-sans text-sm text-starlight-300 font-light leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                  {comp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Tab 2: Industry Certifications */}
      {activeTab === "Certifications" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-3 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-bold">
                    {cert.issuer}
                  </span>
                  {cert.date && <span className="text-starlight-400">{cert.date}</span>}
                </div>
                <h3 className="font-display text-xl font-bold text-white">{cert.title}</h3>
                {cert.desc && <p className="font-sans text-xs text-starlight-300 font-light">{cert.desc}</p>}
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>VERIFIED CERTIFICATE CREDENTIAL</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Tab 3: Books */}
      {activeTab === "Books" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.beyondEngineering.books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-gold-400 font-bold">LITERATURE</span>
                <span className="flex items-center gap-1 font-mono text-xs text-amber-400 bg-white/5 px-2.5 py-0.5 rounded-full">
                  <Star className="w-3 h-3 fill-amber-400" />
                  {book.rating}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                {book.title}
              </h3>
              <p className="font-mono text-xs text-starlight-400">By {book.author}</p>
              <p className="font-sans text-xs text-starlight-300 font-light leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                &ldquo;{book.notes}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Tab 4: Curiosity Log */}
      {activeTab === "CuriosityLog" && (
        <div className="space-y-4">
          {PORTFOLIO_DATA.beyondEngineering.curiosityLog.map((query, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-5 rounded-2xl border border-white/10 glass-panel-hover flex items-center gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 font-mono text-xs font-bold">
                ?
              </div>
              <p className="font-sans text-sm text-starlight-100 font-light italic">
                &ldquo;{query}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};
