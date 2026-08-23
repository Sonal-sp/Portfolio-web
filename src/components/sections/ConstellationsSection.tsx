"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Network, Terminal, CheckCircle2, FolderGit2, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const ConstellationsSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    PORTFOLIO_DATA.constellationCategories[0].id
  );
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    whereUsed: string;
    experienceNotes: string;
    whatLearned: string;
    relatedMissions?: string[];
  } | null>(PORTFOLIO_DATA.constellationCategories[0].skills[0]);

  const activeCategory =
    PORTFOLIO_DATA.constellationCategories.find((c) => c.id === selectedCategoryId) ||
    PORTFOLIO_DATA.constellationCategories[0];

  return (
    <section id="constellations" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gold-400 uppercase tracking-widest">
        <Network className="w-4 h-4 text-gold-400" />
        <span>SECTION • KNOWLEDGE CONSTELLATIONS</span>
      </div>

      <div className="mb-12">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Technical Orbit & Competency Graph
        </h2>
        <p className="font-sans text-starlight-400 font-light text-base sm:text-lg mt-3 max-w-2xl">
          Skills are not numbers or arbitrary percentages. Skills are living nodes of experience, continuous practice, and conceptual clarity.
        </p>
      </div>

      {/* Category Tabs Carousel / Filter pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8">
        {PORTFOLIO_DATA.constellationCategories.map((cat) => {
          const isCatSelected = cat.id === selectedCategoryId;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategoryId(cat.id);
                setActiveSkill(cat.skills[0]);
              }}
              className={`px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                isCatSelected
                  ? "bg-gold-500 text-cosmos-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.35)] scale-105"
                  : "glass-panel border border-white/10 text-starlight-300 hover:text-white hover:border-white/20"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isCatSelected ? "bg-cosmos-950" : "bg-gold-400"}`} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Constellation Viewer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Skill Stars Grid (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-xs text-gold-400 uppercase tracking-wider">
                CONSTELLATION • {activeCategory.name}
              </span>
              <p className="font-sans text-xs text-starlight-400 mt-1">
                {activeCategory.description}
              </p>
            </div>
            <span className="font-mono text-xs text-starlight-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              {activeCategory.skills.length} NODES
            </span>
          </div>

          {/* Interactive Nodes constellation network */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
            {activeCategory.skills.map((skill, index) => {
              const isNodeActive = activeSkill?.name === skill.name;
              return (
                <motion.button
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onClick={() => setActiveSkill(skill)}
                  className={`p-4 rounded-xl border text-left font-mono text-xs transition-all duration-300 relative group ${
                    isNodeActive
                      ? "bg-slate-900/90 border-gold-400 text-white shadow-[0_0_25px_rgba(245,158,11,0.25)]"
                      : "bg-white/5 border-white/10 text-starlight-200 hover:border-gold-500/40 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${
                        isNodeActive
                          ? "bg-gold-400 shadow-[0_0_8px_#f59e0b]"
                          : "bg-starlight-400 group-hover:bg-gold-400"
                      }`}
                    />
                    <span className="font-semibold text-sm truncate">{skill.name}</span>
                  </div>
                  <span className="text-[10px] text-starlight-400 line-clamp-1">
                    {skill.whereUsed}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-starlight-400">
            <span>HOVER OR TAP A STAR NODE FOR DEEP TELEMETRY</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          </div>
        </div>

        {/* Right Detail Telemetry Panel (5 cols) */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {activeSkill ? (
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold-500/30 box-glow-gold space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-gold-400 font-mono text-xs">
                    <Terminal className="w-4 h-4" />
                    <span>NODE TELEMETRY</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 font-mono text-xs text-gold-400 font-bold">
                    QUALITATIVE MASTERY
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-3xl font-extrabold text-white mb-2">
                    {activeSkill.name}
                  </h3>
                  <div className="flex items-start gap-2 text-xs font-mono text-starlight-300 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gold-400 font-bold">Applied Context: </span>
                      {activeSkill.whereUsed}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-mono text-xs text-starlight-400 uppercase tracking-wider mb-1">
                      DEPTH OF EXPERIENCE
                    </h4>
                    <p className="font-sans text-sm text-starlight-200 font-light leading-relaxed">
                      {activeSkill.experienceNotes}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs text-starlight-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                      <span>CORE LESSON LEARNED</span>
                    </h4>
                    <p className="font-sans text-sm text-starlight-100 italic bg-slate-900/60 p-4 rounded-xl border border-white/10">
                      &ldquo;{activeSkill.whatLearned}&rdquo;
                    </p>
                  </div>

                  {activeSkill.relatedMissions && (
                    <div>
                      <h4 className="font-mono text-xs text-starlight-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <FolderGit2 className="w-3.5 h-3.5 text-gold-400" />
                        <span>FEATURED IN MISSIONS</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeSkill.relatedMissions.map((mName, mIdx) => (
                          <a
                            key={mIdx}
                            href="#missions"
                            className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-mono text-gold-400 hover:bg-gold-500/20 transition-colors"
                          >
                            {mName}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
