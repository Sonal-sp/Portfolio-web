"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, ShieldCheck, Zap, BookOpen, Target, Infinity } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const ManifestoSection: React.FC = () => {
  const icons = [ShieldCheck, Zap, Compass, BookOpen, Target, Infinity];

  return (
    <section id="manifesto" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gold-400 uppercase tracking-widest">
        <Compass className="w-4 h-4 text-gold-400" />
        <span>SECTION • MANIFESTO</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Finite Life. Infinite Curiosity.
          </h2>
          <p className="font-sans text-starlight-400 font-light text-base sm:text-lg mt-3 max-w-xl">
            Technology changes continuously. The underlying mindset behind how we build systems never does.
          </p>
        </div>
      </div>

      {/* Manifesto Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.manifesto.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between space-y-6"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Icon className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-2 leading-snug">
                  {item.statement}
                </h3>
                <p className="font-sans text-sm text-starlight-400 font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Signature Ending Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 p-8 sm:p-12 rounded-3xl glass-panel border border-gold-500/30 text-center relative overflow-hidden box-glow-gold"
      >
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <p className="font-display text-xl sm:text-3xl text-starlight-100 font-light italic max-w-3xl mx-auto leading-relaxed">
          &ldquo;{PORTFOLIO_DATA.manifestoClosing}&rdquo;
        </p>
        <p className="font-mono text-xs text-gold-400 uppercase tracking-widest mt-6">
          — SONAL PARMAR
        </p>
      </motion.div>
    </section>
  );
};
