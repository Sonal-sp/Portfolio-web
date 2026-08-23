"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export const AmbientAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Ambient deep space synth pad (55Hz sub tone & 110Hz harmonic)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = "sine";
        osc1.frequency.setValueAtTime(55, ctx.currentTime); // A1 note

        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(110, ctx.currentTime); // A2 note

        // Soft lowpass filter
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(220, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        osc1Ref.current = osc1;
        osc2Ref.current = osc2;
        gainRef.current = gain;

        setIsPlaying(true);
      } catch (e) {
        console.warn("AudioContext error", e);
      }
    } else {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1);
        setTimeout(() => {
          osc1Ref.current?.stop();
          osc2Ref.current?.stop();
          audioCtxRef.current?.close();
          setIsPlaying(false);
        }, 1000);
      } else {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      aria-label="Toggle ambient space audio"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-full glass-panel border border-white/10 text-xs font-mono text-starlight-300 hover:text-white hover:border-gold-500/40 transition-all duration-300 shadow-xl"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span className="hidden sm:inline">AMBIENCE: ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-starlight-400" />
          <span className="hidden sm:inline">AMBIENCE: OFF</span>
        </>
      )}
    </button>
  );
};
