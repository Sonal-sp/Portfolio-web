"use client";

import React from "react";
import { motion } from "framer-motion";
import { Radio, BookOpen, Hammer, Search, HelpCircle, GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const CurrentlyExploringSection: React.FC = () => {
  const items = [
    { label: "CURRENTLY LEARNING", value: PORTFOLIO_DATA.currentlyExploring.learning, icon: GraduationCap, color: "text-blue-400" },
    { label: "CURRENTLY READING", value: PORTFOLIO_DATA.currentlyExploring.reading, icon: BookOpen, color: "text-amber-400" },
    { label: "CURRENTLY BUILDING", value: PORTFOLIO_DATA.currentlyExploring.building, icon: Hammer, color: "text-emerald-400" },
    { label: "CURRENTLY RESEARCHING", value: PORTFOLIO_DATA.currentlyExploring.researching, icon: Search, color: "text-purple-400" },
    { label: "CURRENTLY WONDERING", value: PORTFOLIO_DATA.currentlyExploring.wondering, icon: HelpCircle, color: "text-gold-400" },
  ];

  return (
    <section id="exploring" className="py-28 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Telemetry Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gold-400 uppercase tracking-widest">
        <Radio className="w-4 h-4 text-gold-400 animate-pulse" />
        <span>LIVE TELEMETRY DASHBOARD</span>
      </div>

      <div className="mb-12">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Currently Exploring
        </h2>
        <p className="font-sans text-starlight-400 font-light text-base sm:text-lg mt-3 max-w-xl">
          Real-time snapshot of active focus areas, books, software builds, and curiosity inquiries.
        </p>
      </div>

      {/* Live Status Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-xs text-starlight-400 tracking-wider">
                    {item.label}
                  </span>
                </div>
                <Icon className={`w-4 h-4 ${item.color}`} />
              </div>

              <p className="font-sans text-base font-medium text-white leading-snug">
                {item.value}
              </p>

              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-starlight-400 border-t border-white/5">
                <span>STATUS: ACTIVE RADAR</span>
                <span className="text-gold-400">UPDATED RECENTLY</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
