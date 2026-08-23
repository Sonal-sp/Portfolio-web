"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, HelpCircle, Lightbulb, Clock, BookOpen, ChevronRight, X } from "lucide-react";
import { PORTFOLIO_DATA, ThoughtNote } from "@/data/portfolioData";

export const ThoughtArchiveSection: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<ThoughtNote | null>(null);

  return (
    <section id="thought-archive" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gold-400 uppercase tracking-widest">
        <FileText className="w-4 h-4 text-gold-400" />
        <span>SECTION • THE THOUGHT ARCHIVE</span>
      </div>

      <div className="mb-16">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Research Notes & Inquiries
        </h2>
        <p className="font-sans text-starlight-400 font-light text-base sm:text-lg mt-3 max-w-2xl">
          Not software projects—raw ideas, hypotheses, research questions, and cognitive notes on how technology shapes human understanding.
        </p>
      </div>

      {/* Research Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.thoughtArchive.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedNote(note)}
            className="glass-panel p-8 rounded-3xl border border-white/10 glass-panel-hover cursor-pointer space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-gold-400">
                <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30">
                  {note.category}
                </span>
                <span className="flex items-center gap-1 text-starlight-400">
                  <Clock className="w-3.5 h-3.5" />
                  {note.readTime}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white group-hover:text-gold-400 transition-colors leading-snug">
                {note.title}
              </h3>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-mono text-[10px] text-starlight-400 uppercase flex items-center gap-1">
                  <HelpCircle className="w-3 h-3 text-gold-400" />
                  <span>RESEARCH QUESTION</span>
                </div>
                <p className="font-sans text-sm text-starlight-200 italic">
                  &ldquo;{note.question}&rdquo;
                </p>
              </div>

              <p className="font-sans text-xs text-starlight-400 line-clamp-3 leading-relaxed">
                {note.hypothesis}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gold-400 group-hover:translate-x-1 transition-transform">
              <span>READ RESEARCH HYPOTHESIS & INSIGHTS</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Research Note Modal */}
      <AnimatePresence>
        {selectedNote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cosmos-950/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel w-full max-w-2xl rounded-3xl border border-gold-500/40 p-6 sm:p-10 space-y-6 relative box-glow-gold text-starlight-100"
            >
              <button
                onClick={() => setSelectedNote(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-starlight-300 hover:text-white transition-colors"
                aria-label="Close note"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 font-mono text-xs text-gold-400">
                <BookOpen className="w-4 h-4" />
                <span>RESEARCH NOTE • {selectedNote.date}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                {selectedNote.title}
              </h2>

              <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-500/30">
                <span className="font-mono text-xs text-gold-400 font-bold uppercase block mb-1">
                  CENTRAL RESEARCH QUESTION:
                </span>
                <p className="font-sans text-base text-starlight-100 italic">
                  &ldquo;{selectedNote.question}&rdquo;
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xs text-starlight-400 uppercase mb-2">HYPOTHESIS SUMMARY</h3>
                <p className="font-sans text-sm text-starlight-200 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                  {selectedNote.hypothesis}
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xs text-starlight-400 uppercase mb-2">KEY DERIVED INSIGHTS</h3>
                <div className="space-y-2">
                  {selectedNote.insights.map((ins, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs font-sans text-starlight-200 bg-white/5 p-3 rounded-xl border border-white/10">
                      <Lightbulb className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{ins}</span>
                    </div>
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
