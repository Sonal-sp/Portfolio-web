"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Lightbulb, Cpu, Network, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const OriginsSection: React.FC = () => {
  const icons = [Lightbulb, Cpu, Network, Compass];

  return (
    <section id="origins" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Section Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gold-400 uppercase tracking-widest">
        <Sparkles className="w-4 h-4 text-gold-400" />
        <span>SECTION • ORIGINS</span>
      </div>

      <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight">
        {PORTFOLIO_DATA.origins.heading}
      </h2>

      {/* Storytelling Timeline */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-16">
        {PORTFOLIO_DATA.origins.narrative.map((item, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-9 h-9 sm:w-11 sm:h-11 rounded-full glass-panel border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:border-gold-400 group-hover:box-glow-gold transition-all duration-300">
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Story Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 glass-panel-hover transition-all">
                <div className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 font-mono text-xs text-gold-400 mb-3">
                  {item.year}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-starlight-300 font-light text-base sm:text-lg leading-relaxed">
                  {item.story}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
