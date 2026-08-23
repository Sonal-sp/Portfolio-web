"use client";

import React, { useState, useEffect } from "react";
import { Telescope, Menu, X, Compass, Radio } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const NAV_ITEMS = [
  { label: "Origins", href: "#origins" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "How I Think", href: "#how-i-think" },
  { label: "Constellations", href: "#constellations" },
  { label: "Missions", href: "#missions" },
  { label: "Thought Archive", href: "#thought-archive" },
  { label: "Exploring", href: "#exploring" },
  { label: "Failure Log", href: "#failure-log" },
  { label: "Vision", href: "#vision" },
  { label: "Timeline", href: "#life-timeline" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPct = (winScroll / height) * 100;
      setScrollProgress(scrolledPct);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-gold-500 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-6xl transition-all duration-500 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="glass-panel rounded-full px-5 py-2.5 flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-xl">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:border-gold-400 group-hover:scale-105 transition-all">
              <Telescope className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-wider text-sm text-starlight-100 group-hover:text-gold-400 transition-colors">
                SONAL PARMAR
              </span>
              <span className="font-mono text-[10px] text-starlight-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                OBSERVATORY
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 text-xs font-mono">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-starlight-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Status Badge & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-starlight-300">
              <Radio className="w-3 h-3 text-gold-400 animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.stats.status}</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full text-starlight-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-cosmos-950/95 backdrop-blur-2xl xl:hidden flex flex-col justify-center items-center p-6 space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 mb-6 text-gold-400 font-mono text-sm">
            <Compass className="w-5 h-5 animate-spin" />
            <span>CELESTIAL NAVIGATION</span>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-center rounded-xl glass-panel border border-white/10 font-mono text-sm text-starlight-200 hover:text-gold-400 hover:border-gold-500/40 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 px-6 py-2 rounded-full border border-white/20 text-xs font-mono text-starlight-400"
          >
            Close Navigation
          </button>
        </div>
      )}
    </>
  );
};
