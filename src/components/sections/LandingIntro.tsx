"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowDown, Rocket, Compass } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const LandingIntro: React.FC = () => {
  // Intro step state machine: 0 = particle, 1 = quote1, 2 = quote2, 3 = constellation expansion, 4 = reveal main hero
  const [introStep, setIntroStep] = useState(0);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Sequence timelines
    const t1 = setTimeout(() => setIntroStep(1), 1200);  // Fade in Quote 1
    const t2 = setTimeout(() => setIntroStep(2), 4800);  // Fade in Quote 2
    const t3 = setTimeout(() => setIntroStep(3), 8800);  // Particle expands into Constellation
    const t4 = setTimeout(() => {
      setIntroStep(4);
      setIntroFinished(true);
    }, 11500);                                            // Reveal Sonal Parmar Hero

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const skipIntro = () => {
    setIntroStep(4);
    setIntroFinished(true);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Intro Sequence Overlay */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            key="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 bg-cosmos-950 flex flex-col items-center justify-center px-6 text-center select-none"
          >
            {/* Skip Option */}
            <button
              onClick={skipIntro}
              className="absolute top-8 right-8 px-4 py-2 rounded-full border border-white/10 text-starlight-400 font-mono text-xs hover:text-white hover:border-gold-500/40 transition-all flex items-center gap-2"
            >
              <span>Skip Prologue</span>
              <Compass className="w-3.5 h-3.5 text-gold-400" />
            </button>

            {/* Glowing ignition particle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                introStep === 3
                  ? { scale: [1, 2.5, 4, 0], opacity: [1, 0.8, 0.9, 0] }
                  : { scale: [0.8, 1.2, 1], opacity: [0.3, 0.9, 0.6] }
              }
              transition={{
                duration: introStep === 3 ? 2.5 : 3,
                repeat: introStep === 3 ? 0 : Infinity,
                repeatType: "reverse",
              }}
              className="w-4 h-4 rounded-full bg-gold-400 box-glow-gold mb-12"
            />

            {/* Quote 1 */}
            <AnimatePresence mode="wait">
              {introStep === 1 && (
                <motion.p
                  key="quote1"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="font-display font-light text-2xl md:text-4xl text-starlight-100 max-w-2xl leading-relaxed tracking-wide"
                >
                  &ldquo;Every great innovation begins with curiosity.&rdquo;
                </motion.p>
              )}

              {/* Quote 2 */}
              {introStep === 2 && (
                <motion.p
                  key="quote2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="font-display font-light text-2xl md:text-4xl text-starlight-100 max-w-2xl leading-relaxed tracking-wide"
                >
                  &ldquo;The future belongs to people who never stop asking why.&rdquo;
                </motion.p>
              )}

              {/* Constellation expansion visual prompt */}
              {introStep === 3 && (
                <motion.div
                  key="constellation-forming"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="font-mono text-xs text-gold-400 uppercase tracking-widest flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Igniting Constellation...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Observatory Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 30 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="max-w-5xl text-center space-y-8 z-10 pt-16"
      >
        {/* Observatory Telemetry Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-gold-500/20 text-gold-400 text-xs font-mono tracking-widest uppercase box-glow-gold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>DIGITAL OBSERVATORY • {PORTFOLIO_DATA.personal.tagline}</span>
        </div>

        {/* Revealed Name */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight text-white drop-shadow-2xl">
          {PORTFOLIO_DATA.personal.name}
        </h1>

        {/* Revealed Roles */}
        <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs sm:text-base text-starlight-200">
          {PORTFOLIO_DATA.personal.roles.map((role, idx) => (
            <React.Fragment key={idx}>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold-400 font-semibold shadow-sm">
                {role}
              </span>
              {idx < PORTFOLIO_DATA.personal.roles.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 hidden sm:inline-block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Philosophy Intro */}
        <p className="max-w-2xl mx-auto font-sans text-base sm:text-lg text-starlight-400 font-light leading-relaxed">
          &ldquo;The greatest technology isn&apos;t AI, AR, Robotics or Software. It&apos;s human curiosity.&rdquo;
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="#origins"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-amber-600 text-cosmos-950 font-display font-semibold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore My Universe</span>
            <Rocket className="w-4 h-4" />
          </a>

          <a
            href="#missions"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-white/15 text-starlight-100 font-display font-medium text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 text-gold-400" />
          </a>
        </div>
      </motion.div>

      {/* Down indicator */}
      <motion.a
        href="#origins"
        initial={{ opacity: 0 }}
        animate={{ opacity: introFinished ? 1 : 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-starlight-400 hover:text-gold-400 text-xs font-mono transition-colors"
      >
        <span>SCROLL TO ORBIT</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-gold-400" />
      </motion.a>
    </section>
  );
};
