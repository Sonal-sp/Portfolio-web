# 🌌 Sonal Parmar | Digital Observatory

<div align="center">

![Observatory Banner](https://raw.githubusercontent.com/Sonal-sp/observatory-portfolio/main/public/banner.png)

### **"FINITE LIFE. INFINITE CURIOSITY."**

*The digital observatory of a curious engineer—exploring software systems, AI pipelines, spatial computing, and human curiosity.*

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-0.169-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://observatory-portfolio.vercel.app)

[🌐 **Live Digital Observatory**](https://observatory-portfolio.vercel.app) • [📄 **Walkthrough Documentation**](https://github.com/Sonal-sp/observatory-portfolio)

</div>

---

## 📌 Design Philosophy

> *"The greatest technology isn't AI, AR, Robotics or Software. It's human curiosity."*

Inspired by ***Interstellar***, **Apple**, **Linear**, **Vercel**, **Framer**, **Stripe**, and **NASA telemetry interfaces**, this is not a standard portfolio resume. It is an interactive digital observatory that captures how an engineer thinks, learns, fails, and continuously builds systems over decades.

- **Theme Palette**: Deep Space Black (`#030712`), Dark Blue (`#0f172a`), Soft Silver (`#cbd5e1`), Starlight Gold (`#f59e0b`).
- **Typography**: Outfit / Inter + JetBrains Mono.
- **Aesthetic**: Minimalist, timeless, scientific, hopeful, cinematic. **No cyberpunk neon, no gaming UI**.

---

## ✨ Features & Key Sections

### 1. 🌌 Landing Prologue & Hero Reveal (`LandingIntro.tsx`)
- **Cinematic Text Fades**: Starts with a pure black screen, ambient stars, and a glowing ignition particle:
  1. *"Every great innovation begins with curiosity."*
  2. *"The future belongs to people who never stop asking why."*
- **Constellation Expansion**: Ignition particle slowly expands into a star network before revealing **SONAL PARMAR** (`Engineer. Builder. Lifelong Learner.`) with *Explore My Universe* and *View Projects* CTAs (with a prologue skip option).

### 2. 🛰️ Ambient Space Canvas Engine (`SpaceBackground.tsx`)
- High-performance 60fps WebGL/Canvas 2D starfield rendering ambient magnitude variations, moving nebula gradients, animated star constellations, interactive cursor gravity particle physics, and passing shooting stars.

### 3. 🎵 Deep Space Web Audio (`AmbientAudio.tsx`)
- Synthetic deep space ambient soundscape (55Hz sub tone & 110Hz harmonic) generated natively via the browser's Web Audio API.

### 4. 🧭 Origins (`OriginsSection.tsx`)
- Storytelling narrative timeline tracing curiosity from secondary school leadership to Computer Engineering at K. J. Somaiya Polytechnic (94.00%) and IT Infrastructure Support operations at KJSSC.

### 5. 📜 Engineering Manifesto (`ManifestoSection.tsx`)
- 6 elegant manifesto statements highlighting core values (*"Technology should reduce uncertainty"*, *"Curiosity over comfort"*, *"Learning over knowing"*, *"Progress over perfection"*), ending with:
  > *"If one project inspires another person to build something even better, then I've succeeded."*

### 6. 🧠 How I Think (`HowIThinkSection.tsx`)
- 6 mental framework cards (**Problem First**, **Research**, **Architecture**, **Prototype**, **Iteration**, **Reflection**) with expandable key deliverables.

### 7. 🌌 Knowledge Constellations (`ConstellationsSection.tsx`)
- Interactive competency graph spanning **11 technical orbit categories**:
  - *Programming Languages, Frontend, Backend, Mobile & Embedded IoT, AI & Data Science, Databases, Cloud & Security, DevOps & Infrastructure, Design & UI/UX, Developer Tools, Engineering Concepts.*
- **Zero progress bars or arbitrary percentages**—hovering any node reveals applied context, qualitative experience notes, core lessons, and related missions.

### 8. 🚀 Missions & Case Studies (`MissionsSection.tsx`)
- Interactive project showcase with full-screen Case Study modals detailing:
  - **SafeStep Capstone**: Smart Elderly Fall Detection Wearable (ESP32 C3 + MPU6050 + Flutter + n8n WhatsApp SOS).
  - **Cine-AI**: Real-time movie NLP review sentiment data science app.
  - **Pokemon AR Simulator**: MediaPipe 3D hand tracking gesture AR app.
  - **CyberGuard Pro**: Flask AI password entropy security analyzer.
  - **Geo-Insights**: 3D WebGL geospatial discovery tool.
  - **My Cute Photobooth**: Japanese purikara WebRTC digital photobooth.
  - **SwiftShift**: Conversion-optimized relocation landing app.

### 9. 📓 The Thought Archive (`ThoughtArchiveSection.tsx`)
- Research notes & hypotheses (*"Can AI become a mentor instead of just a chatbot?"*, *"How can software reduce human uncertainty?"*).

### 10. 📡 Currently Exploring (`CurrentlyExploringSection.tsx`)
- Live telemetry dashboard tracking active learning, reading (*Operating System Concepts*), building, and researching.

### 11. 🛡️ Failure Log & Retrospective (`FailureLogSection.tsx`)
- Vulnerable, transparent timeline documenting setbacks, root causes, lessons learned, and systemic architecture improvements.

### 12. 🏆 Competitions & Certifications (`BeyondEngineeringSection.tsx`)
- **GDG Pixelverse National Top 45 Finalist** (March 2026).
- Intercollegiate IT Fest competitions: *Bug Busters*, *Pixel Perfection*, *Geeks for Geeks*.
- 7 Verified Industry Certifications (*Cisco Data Science*, *Forage Cybersecurity Analyst*, *Coursera Pandas/NumPy*, *Coursera ChatGPT Chatbot*, *Coursera MS Excel*, *Infosys Springboard Dart & Business Comm*).

---

## 💻 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Canvas / 3D**: Three.js & HTML5 Canvas 2D Engine
- **Icons**: Lucide React
- **API Sync**: GitHub REST API
- **Deployment**: Vercel

---

## 🛠️ Local Development & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sonal-sp/observatory-portfolio.git
   cd observatory-portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📬 Contact & Signals

- **Email**: [sonal.parmar@somaiya.edu](mailto:sonal.parmar@somaiya.edu)
- **LinkedIn**: [linkedin.com/in/sonal-parmar-8898752a2](https://www.linkedin.com/in/sonal-parmar-8898752a2)
- **Medium**: [medium.com/@airryaxolotl2607](https://medium.com/@airryaxolotl2607)
- **GitHub**: [github.com/Sonal-sp](https://github.com/Sonal-sp)

---

<div align="center">

*Designed with intention for curious minds worldwide • Sonal Parmar Observatory • **Still Learning.***

</div>
