"use client";

import React from "react";
import { motion } from "framer-motion";
import { Telescope, Compass, Users, CheckCircle, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gold-400 uppercase tracking-widest">
        <Telescope className="w-4 h-4 text-gold-400" />
        <span>SECTION • MY VISION</span>
      </div>

      {/* Main Vision Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 sm:p-14 rounded-3xl border border-gold-500/40 relative overflow-hidden box-glow-gold mb-12"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-mono text-xs font-bold uppercase tracking-wider">
            LONG-TERM PLATFORM ARCHITECTURE
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {PORTFOLIO_DATA.vision.title}
          </h2>

          <p className="font-sans text-lg sm:text-2xl text-starlight-200 font-light italic leading-relaxed">
            &ldquo;{PORTFOLIO_DATA.vision.quote}&rdquo;
          </p>

          <p className="font-sans text-sm sm:text-base text-starlight-400 leading-relaxed">
            The fundamental challenge facing young engineers is not a lack of tutorials or software frameworks. It is <strong className="text-white">uncertainty</strong>. My dream is to engineer an observatory platform that transforms confusion into structured direction.
          </p>
        </div>
      </motion.div>

      {/* 6 Vision Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.vision.pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-7 rounded-2xl border border-white/10 glass-panel-hover space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              {pillar.title}
            </h3>
            <p className="font-sans text-xs text-starlight-300 font-light leading-relaxed">
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
