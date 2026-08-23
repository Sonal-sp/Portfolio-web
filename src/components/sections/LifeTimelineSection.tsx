"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, GraduationCap, Award, Rocket, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const LifeTimelineSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | "Past" | "Present" | "Future">("All");

  const filteredItems = activeFilter === "All"
    ? PORTFOLIO_DATA.lifeTimeline
    : PORTFOLIO_DATA.lifeTimeline.filter((item) => item.period === activeFilter);

  const typeIcons: Record<string, React.ElementType> = {
    Education: GraduationCap,
    Internship: Compass,
    Hackathon: Award,
    "Major Project": Rocket,
    Aspiration: Sparkles,
  };

  return (
    <section id="life-timeline" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gold-400 uppercase tracking-widest">
        <Compass className="w-4 h-4 text-gold-400" />
        <span>SECTION • LIFE TIMELINE</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Past, Present & Future Trajectory
          </h2>
          <p className="font-sans text-starlight-400 font-light text-base sm:text-lg mt-3 max-w-xl">
            Tracing academic foundations, hackathon breakthroughs, major engineering projects, and future aspirations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 font-mono text-xs">
          {(["All", "Past", "Present", "Future"] as const).map((period) => (
            <button
              key={period}
              onClick={() => setActiveFilter(period)}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeFilter === period
                  ? "bg-gold-500 text-cosmos-950 font-bold shadow-md"
                  : "text-starlight-300 hover:text-white"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Timeline List */}
      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            const Icon = typeIcons[item.type] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 glass-panel-hover flex flex-col md:flex-row md:items-start justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-bold">
                      {item.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-starlight-300 flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-gold-400" />
                      {item.type}
                    </span>
                    <span className="text-starlight-400">• {item.period} Era</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-gold-400">
                    {item.subtitle}
                  </p>
                  <p className="font-sans text-sm text-starlight-300 font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.highlights.map((high, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5 text-xs font-mono text-starlight-300 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span>{high}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};
