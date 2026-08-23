"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle gravity/parallax
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Generate Stars
    let stars: Star[] = [];
    const starCount = Math.floor((width * height) / 3200);

    const initStars = () => {
      stars = [];
      const colors = ["#ffffff", "#cbd5e1", "#94a3b8", "#f59e0b", "#93c5fd"];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 2 + 0.5,
          size: Math.random() * 1.6 + 0.4,
          baseAlpha: Math.random() * 0.7 + 0.2,
          alpha: Math.random() * 0.7 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    initStars();

    // Shooting Stars setup
    const shootingStars: ShootingStar[] = [];
    for (let i = 0; i < 3; i++) {
      shootingStars.push({
        x: 0,
        y: 0,
        length: 0,
        speed: 0,
        angle: 0,
        alpha: 0,
        active: false
      });
    }

    const spawnShootingStar = (sStar: ShootingStar) => {
      sStar.x = Math.random() * width * 0.8;
      sStar.y = Math.random() * height * 0.4;
      sStar.length = Math.random() * 80 + 60;
      sStar.speed = Math.random() * 10 + 12;
      sStar.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2;
      sStar.alpha = 1;
      sStar.active = true;
    };

    let shootingStarTimer = 0;

    // Render loop
    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      const parallaxX = (mouse.x - width / 2) * 0.015;
      const parallaxY = (mouse.y - height / 2) * 0.015;

      // Clear with deep space gradient
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, width, height);

      // Render subtle nebula clouds
      const g1 = ctx.createRadialGradient(
        width * 0.3 + parallaxX * 2,
        height * 0.3 + parallaxY * 2,
        50,
        width * 0.3,
        height * 0.3,
        width * 0.55
      );
      g1.addColorStop(0, "rgba(30, 58, 138, 0.12)");
      g1.addColorStop(0.5, "rgba(88, 28, 135, 0.05)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const g2 = ctx.createRadialGradient(
        width * 0.75 - parallaxX,
        height * 0.65 - parallaxY,
        40,
        width * 0.75,
        height * 0.65,
        width * 0.45
      );
      g2.addColorStop(0, "rgba(245, 158, 11, 0.06)");
      g2.addColorStop(0.6, "rgba(15, 23, 42, 0.08)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // Render Stars
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move star slightly
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Twinkle effect
        star.alpha += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
        const currentAlpha = Math.max(0.1, Math.min(0.9, star.alpha));

        const renderX = star.x - parallaxX * star.z;
        const renderY = star.y - parallaxY * star.z;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size * (star.z * 0.6), 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby stars with delicate constellation lines
        for (let j = i + 1; j < Math.min(i + 12, stars.length); j++) {
          const s2 = stars[j];
          const dx = renderX - (s2.x - parallaxX * s2.z);
          const dy = renderY - (s2.y - parallaxY * s2.z);
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            ctx.strokeStyle = "rgba(148, 163, 184, " + (0.12 * (1 - dist / 85)) + ")";
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(s2.x - parallaxX * s2.z, s2.y - parallaxY * s2.z);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;

      // Handle Shooting Stars
      shootingStarTimer++;
      if (shootingStarTimer % 180 === 0) {
        const inactive = shootingStars.find((s) => !s.active);
        if (inactive) spawnShootingStar(inactive);
      }

      shootingStars.forEach((sStar) => {
        if (!sStar.active) return;

        sStar.x += Math.cos(sStar.angle) * sStar.speed;
        sStar.y += Math.sin(sStar.angle) * sStar.speed;
        sStar.alpha -= 0.012;

        if (sStar.alpha <= 0 || sStar.x > width || sStar.y > height) {
          sStar.active = false;
          return;
        }

        const headX = sStar.x;
        const headY = sStar.y;
        const tailX = sStar.x - Math.cos(sStar.angle) * sStar.length;
        const tailY = sStar.y - Math.sin(sStar.angle) * sStar.length;

        const sGrad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        sGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
        sGrad.addColorStop(0.7, "rgba(245, 158, 11, " + sStar.alpha * 0.6 + ")");
        sGrad.addColorStop(1, "rgba(255, 255, 255, " + sStar.alpha + ")");

        ctx.strokeStyle = sGrad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
      style={{ opacity: 0.85 }}
    />
  );
};
