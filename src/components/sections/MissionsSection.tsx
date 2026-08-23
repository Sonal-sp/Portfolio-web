"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, ExternalLink, Github, Layers, ShieldAlert, CheckCircle, Cpu, X, Workflow, Database, Network, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA, ProjectMission } from "@/data/portfolioData";

export const MissionsSection: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState<ProjectMission | null>(null);

  return (
    <section id="missions" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gold-400 uppercase tracking-widest">
        <Rocket className="w-4 h-4 text-gold-400" />
        <span>SECTION • ACTIVE MISSIONS</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Missions & Case Studies
          </h2>
          <p className="font-sans text-starlight-400 font-light text-base sm:text-lg mt-3 max-w-2xl">
            Projects are not just code repositories. They are targeted missions designed to solve real human problems and eliminate uncertainty.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.missions.map((mission, index) => (
          <motion.div
            key={mission.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-panel rounded-3xl p-7 border border-white/10 glass-panel-hover flex flex-col justify-between space-y-6 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-gold-500/15 transition-all" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-gold-400">
                  {mission.category}
                </span>
                <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {mission.status}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                {mission.title}
              </h3>
              <p className="font-sans text-xs text-starlight-300 font-light leading-relaxed mb-4">
                {mission.tagline}
              </p>

              <div className="space-y-2 py-4 border-y border-white/10">
                <div className="font-mono text-[11px] text-starlight-400 uppercase">PROBLEM STATEMENT</div>
                <p className="font-sans text-xs text-starlight-200 line-clamp-3">
                  {mission.problem}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-4">
                {mission.techStack.slice(0, 5).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-full bg-white/5 text-[11px] font-mono text-starlight-300"
                  >
                    {tech}
                  </span>
                ))}
                {mission.techStack.length > 5 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-[11px] font-mono text-starlight-400">
                    +{mission.techStack.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* CTA Button to open Case Study Modal */}
            <div className="pt-2">
              <button
                onClick={() => setSelectedMission(mission as ProjectMission)}
                className="w-full py-3 rounded-2xl bg-white/5 hover:bg-gold-500 hover:text-cosmos-950 border border-white/10 hover:border-gold-400 text-starlight-100 font-display text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <span>OPEN MISSION CASE STUDY</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Comprehensive Case Study Modal */}
      <AnimatePresence>
        {selectedMission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cosmos-950/90 backdrop-blur-2xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="glass-panel w-full max-w-4xl max-h-[90vh] rounded-3xl border border-gold-500/40 p-6 sm:p-10 overflow-y-auto space-y-8 relative box-glow-gold text-starlight-100 my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMission(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-starlight-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-bold">
                    MISSION CASE STUDY • {selectedMission.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    {selectedMission.status}
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                  {selectedMission.title}
                </h2>
                <p className="font-sans text-base sm:text-lg text-starlight-300 font-light">
                  {selectedMission.tagline}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-4 pt-2 border-b border-white/10 pb-6">
                <a
                  href={selectedMission.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                {selectedMission.liveUrl && (
                  <a
                    href={selectedMission.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-gold-500 text-cosmos-950 font-bold text-xs font-mono flex items-center gap-2 hover:bg-gold-400 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Operational Demo</span>
                  </a>
                )}
              </div>

              {/* Mission Overview & Problem */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2">
                  <h3 className="font-mono text-xs text-gold-400 uppercase tracking-wider">
                    MISSION OVERVIEW & WHY IT EXISTS
                  </h3>
                  <p className="font-sans text-sm text-starlight-200 leading-relaxed">
                    {selectedMission.summary}
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2">
                  <h3 className="font-mono text-xs text-gold-400 uppercase tracking-wider">
                    PROBLEM STATEMENT & WHO IT HELPS
                  </h3>
                  <p className="font-sans text-sm text-starlight-200 leading-relaxed mb-2">
                    {selectedMission.problem}
                  </p>
                  <div className="text-xs font-mono text-starlight-300 bg-slate-900/60 p-2.5 rounded-xl border border-white/10">
                    <span className="text-gold-400">Target User: </span>
                    {selectedMission.whoItHelps}
                  </div>
                </div>
              </div>

              {/* System Architecture Section */}
              <div className="space-y-4 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-gold-400 font-mono text-sm uppercase">
                  <Layers className="w-4 h-4" />
                  <span>SYSTEM ARCHITECTURE & DATA FLOW</span>
                </div>

                <p className="font-sans text-sm text-starlight-200">
                  {selectedMission.architecture.overview}
                </p>

                {/* Flowchart Steps */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-xs text-starlight-400 uppercase">DATA PIPELINE FLOW:</span>
                  <div className="space-y-2 font-mono text-xs">
                    {selectedMission.architecture.flowchart.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-starlight-200"
                      >
                        <span className="w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500 text-gold-400 flex items-center justify-center shrink-0 font-bold text-[10px]">
                          {sIdx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Database & API Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-gold-400 font-mono mb-1">
                      <Database className="w-3.5 h-3.5" />
                      <span>Database Design</span>
                    </div>
                    <p className="text-starlight-300">{selectedMission.architecture.databaseDesign}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-gold-400 font-mono mb-1">
                      <Network className="w-3.5 h-3.5" />
                      <span>API & Protocol Design</span>
                    </div>
                    <p className="text-starlight-300">{selectedMission.architecture.apiDesign}</p>
                  </div>
                </div>
              </div>

              {/* Key Features & Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-mono text-xs text-gold-400 uppercase tracking-wider">
                    CORE FEATURES
                  </h3>
                  <div className="space-y-2">
                    {selectedMission.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-sans text-starlight-200">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs text-gold-400 uppercase tracking-wider">
                    MEASURED METRICS & IMPACT
                  </h3>
                  <div className="space-y-2">
                    {selectedMission.metrics.map((met, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs font-mono text-gold-300">
                        {met}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-3">
                <h3 className="font-mono text-xs text-gold-400 uppercase tracking-wider flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-gold-400" />
                  <span>CHALLENGES & ARCHITECTURAL SOLUTIONS</span>
                </h3>
                <div className="space-y-3">
                  {selectedMission.challenges.map((chal, cIdx) => (
                    <div key={cIdx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <p className="font-mono text-xs text-rose-400">
                        <span className="font-bold">Challenge: </span>
                        {chal.problem}
                      </p>
                      <p className="font-sans text-xs text-emerald-300">
                        <span className="font-mono font-bold text-emerald-400">Solution: </span>
                        {chal.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lessons Learned */}
              <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-2">
                <h3 className="font-mono text-xs text-gold-400 uppercase tracking-wider">
                  LESSONS LEARNED & RETROSPECTIVE
                </h3>
                <ul className="list-disc list-inside space-y-1 font-sans text-xs text-starlight-300">
                  {selectedMission.lessonsLearned.map((less, lIdx) => (
                    <li key={lIdx}>{less}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h3 className="font-mono text-xs text-starlight-400 uppercase mb-2">FULL TECHNOLOGICAL STACK</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMission.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-xs text-starlight-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
