import React from "react";
import { SpaceBackground } from "@/components/canvas/SpaceBackground";
import { AmbientAudio } from "@/components/audio/AmbientAudio";
import { Navigation } from "@/components/ui/Navigation";
import { LandingIntro } from "@/components/sections/LandingIntro";
import { OriginsSection } from "@/components/sections/OriginsSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { HowIThinkSection } from "@/components/sections/HowIThinkSection";
import { ConstellationsSection } from "@/components/sections/ConstellationsSection";
import { MissionsSection } from "@/components/sections/MissionsSection";
import { ThoughtArchiveSection } from "@/components/sections/ThoughtArchiveSection";
import { CurrentlyExploringSection } from "@/components/sections/CurrentlyExploringSection";
import { FailureLogSection } from "@/components/sections/FailureLogSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { LifeTimelineSection } from "@/components/sections/LifeTimelineSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { BeyondEngineeringSection } from "@/components/sections/BeyondEngineeringSection";
import { NextMissionSection } from "@/components/sections/NextMissionSection";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cosmos-950 text-starlight-100 selection:bg-gold-500/30 selection:text-white">
      {/* 60FPS Space background canvas */}
      <SpaceBackground />

      {/* Web Audio ambient sound toggle */}
      <AmbientAudio />

      {/* Floating telemetry navigation dock */}
      <Navigation />

      {/* Landing Experience with cinematic intro state machine */}
      <LandingIntro />

      {/* Section 1: Origins */}
      <OriginsSection />

      {/* Section 2: Manifesto */}
      <ManifestoSection />

      {/* Section 3: How I Think */}
      <HowIThinkSection />

      {/* Section 4: Knowledge Constellations */}
      <ConstellationsSection />

      {/* Section 5: Missions */}
      <MissionsSection />

      {/* Section 6: Thought Archive */}
      <ThoughtArchiveSection />

      {/* Section 7: Currently Exploring */}
      <CurrentlyExploringSection />

      {/* Section 8: Failure Log */}
      <FailureLogSection />

      {/* Section 9: My Vision */}
      <VisionSection />

      {/* Section 10: Life Timeline */}
      <LifeTimelineSection />

      {/* Section 11: GitHub Telemetry */}
      <GitHubSection />

      {/* Section 12: Beyond Engineering */}
      <BeyondEngineeringSection />

      {/* Section 13: The Next Mission (Contact) */}
      <NextMissionSection />

      {/* Telemetry Footer */}
      <Footer />
    </main>
  );
}
