"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, HelpCircle, BookOpen, Layers, Rocket, RefreshCw, Sparkles, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const HowIThinkSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(PORTFOLIO_DATA.howIThink[0].id);

  const cardIcons: Record<string, React.ElementType> = {
    "problem-first": HelpCircle,
    "research": BookOpen,
    "architecture": Layers,
    "prototype": Rocket,
    "iteration": RefreshCw,
    "reflection": Sparkles,
  };

  return (
    <section id="how-i-think" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gold-400 uppercase tracking-widest">
        <Cpu className="w-4 h-4 text-gold-400" />
        <span>SECTION • HOW I THINK</span>
      </div>

      <div className="mb-16">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Mental Engineering Framework
        </h2>
        <p className="font-sans text-starlight-400 font-light text-base sm:text-lg mt-3 max-w-2xl">
          Building resilient systems requires a disciplined sequence of inquiry, design, speed, and continuous reflection.
        </p>
      </div>

      {/* 6 Elegant Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.howIThink.map((item, index) => {
          const Icon = cardIcons[item.id] || Sparkles;
          const isSelected = activeCard === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveCard(isSelected ? null : item.id)}
              className={`cursor-pointer rounded-2xl p-7 transition-all duration-300 border ${
                isSelected
                  ? "glass-panel border-gold-500/50 box-glow-gold bg-slate-900/80"
                  : "glass-panel border-white/10 glass-panel-hover"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-gold-500 text-cosmos-950 font-bold"
                      : "bg-white/5 border border-white/10 text-gold-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-starlight-400">0{index + 1}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-starlight-200 font-medium mb-4">
                {item.summary}
              </p>

              <p className="font-sans text-xs text-starlight-400 font-light leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Deliverables Drawer */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between font-mono text-[11px] text-gold-400 uppercase tracking-wider">
                  <span>KEY DELIVERABLES</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isSelected ? "rotate-90 text-gold-400" : "text-starlight-400"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 space-y-1.5"
                    >
                      {item.deliverables.map((deliv, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 font-mono text-xs text-starlight-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
