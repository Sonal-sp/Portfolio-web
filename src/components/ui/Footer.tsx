"use client";

import React from "react";
import { Telescope, Radio, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-cosmos-950/80 backdrop-blur-xl py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-xs font-mono text-starlight-400">
        {/* Left Telemetry Badges */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-starlight-300">
            <Telescope className="w-3.5 h-3.5 text-gold-400" />
            <span>VERSION: {PORTFOLIO_DATA.personal.version}</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-starlight-300">
            <span>PROJECTS BUILT: {PORTFOLIO_DATA.personal.stats.projectsBuilt}</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-starlight-300">
            <span>IDEAS WAITING: {PORTFOLIO_DATA.personal.stats.ideasWaiting}</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-starlight-300">
            <span>BOOKS READ: {PORTFOLIO_DATA.personal.stats.booksReadThisYear}</span>
          </div>
        </div>

        {/* Center / Right Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-bold box-glow-gold">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>CURRENT STATUS: {PORTFOLIO_DATA.personal.stats.status}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center font-sans text-xs text-starlight-400 font-light flex items-center justify-center gap-1">
        <span>Designed with intention for curious minds worldwide • Sonal Parmar Observatory</span>
      </div>
    </footer>
  );
};
