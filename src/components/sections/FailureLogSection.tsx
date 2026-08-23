"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertOctagon, Lightbulb, RefreshCcw, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const FailureLogSection: React.FC = () => {
  return (
    <section id="failure-log" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-rose-400 uppercase tracking-widest">
        <AlertOctagon className="w-4 h-4 text-rose-400" />
        <span>SECTION • FAILURE LOG & RETROSPECTIVE</span>
      </div>

      <div className="mb-16">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Normalized Failure Log
        </h2>
        <p className="font-sans text-starlight-400 font-light text-base sm:text-lg mt-3 max-w-2xl">
          Engineers who never fail are engineers who never push boundaries. True mastery comes from studying root causes and applying lessons to future missions.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="space-y-8">
        {PORTFOLIO_DATA.failureLog.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-rose-500/20 glass-panel-hover space-y-6 relative overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center font-mono text-xs font-bold">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {entry.title}
                  </h3>
                  <p className="font-mono text-xs text-starlight-400">{entry.context}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-rose-400">
                {entry.timeline}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
              <div className="space-y-2 bg-rose-500/5 p-4 rounded-2xl border border-rose-500/20">
                <span className="font-mono text-[11px] text-rose-400 font-bold uppercase block">
                  WHAT FAILED & ROOT CAUSE
                </span>
                <p className="text-starlight-200 leading-relaxed mb-2">
                  {entry.whatFailed}
                </p>
                <div className="font-mono text-[11px] text-starlight-300 bg-cosmos-950/80 p-2.5 rounded-xl border border-rose-500/20">
                  <span className="text-rose-400 font-bold">Root Cause: </span>
                  {entry.rootCause}
                </div>
              </div>

              <div className="space-y-2 bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/20">
                <span className="font-mono text-[11px] text-emerald-400 font-bold uppercase flex items-center gap-1 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-gold-400" />
                  <span>WHAT I LEARNED & HOW IT CHANGED FUTURE MISSIONS</span>
                </span>
                <p className="text-starlight-200 leading-relaxed mb-2">
                  {entry.whatILearned}
                </p>
                <div className="font-mono text-[11px] text-emerald-300 bg-cosmos-950/80 p-2.5 rounded-xl border border-emerald-500/20">
                  <span className="text-gold-400 font-bold flex items-center gap-1">
                    <RefreshCcw className="w-3 h-3" /> Systemic Shift:
                  </span>
                  {entry.howItChangedNextProject}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
