"use client";

import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

export default function MouseEffect() {
  const spotRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripples = useRef<Ripple[]>([]);
  const animRef = useRef<number>(0);
  const mouse = useRef({ x: -500, y: -500 });

  useEffect(() => {
    // ── Spotlight follows mouse ──────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (spotRef.current) {
        spotRef.current.style.background = `radial-gradient(
          400px circle at ${e.clientX}px ${e.clientY}px,
          rgba(80, 47, 254, 0.10) 0%,
          rgba(80, 47, 254, 0.04) 40%,
          transparent 70%
        )`;
      }
    };

    // ── Ripple on click ──────────────────────────────────────
    const onClick = (e: MouseEvent) => {
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        alpha: 0.7,
      });
    };

    // ── Canvas resize ────────────────────────────────────────
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Animation loop for ripples ───────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.current = ripples.current.filter((r) => r.alpha > 0.01);

      for (const r of ripples.current) {
        // Outer ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(80, 47, 254, ${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner faint ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(160, 130, 255, ${r.alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        r.radius += 5;
        r.alpha *= 0.92;
      }

      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Spotlight layer — sits behind all content */}
      <div
        ref={spotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9997,
          transition: "background 0.05s linear",
        }}
      />

      {/* Ripple canvas — sits on top of spotlight, below UI */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />

      <style>{`
        @media (pointer: coarse) {
          canvas { display: none !important; }
        }
      `}</style>
    </>
  );
}
