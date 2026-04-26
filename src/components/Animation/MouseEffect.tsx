"use client";

import { useEffect, useRef } from "react";

interface Dot {
  ox: number; // original x
  oy: number; // original y
  x: number;  // current x
  y: number;  // current y
}

const SPACING = 38;
const RADIUS = 1.4;
const PULL_RADIUS = 130;
const PULL_STRENGTH = 0.28;

export default function MouseEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dots = useRef<Dot[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // ── Build grid ───────────────────────────────────────────
    const buildGrid = () => {
      dots.current = [];
      const cols = Math.ceil(window.innerWidth / SPACING) + 1;
      const rows = Math.ceil(window.innerHeight / SPACING) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = c * SPACING;
          const oy = r * SPACING;
          dots.current.push({ ox, oy, x: ox, y: oy });
        }
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildGrid();
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // ── Detect dark mode ─────────────────────────────────────
    const isDark = () =>
      document.documentElement.classList.contains("dark");

    // ── Animation loop ───────────────────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const dark = isDark();

      // Check if mouse is in hero
      let heroOpacity = 1;
      const hero = document.getElementById("hero");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        if (
          mx >= rect.left &&
          mx <= rect.right &&
          my >= rect.top &&
          my <= rect.bottom
        ) {
          heroOpacity = 0;
        }
      }

      for (const d of dots.current) {
        const dx = mx - d.ox;
        const dy = my - d.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < PULL_RADIUS) {
          const force = (1 - dist / PULL_RADIUS) * PULL_STRENGTH;
          d.x += (d.ox + dx * force - d.x) * 0.18;
          d.y += (d.oy + dy * force - d.y) * 0.18;
        } else {
          // Spring back to origin
          d.x += (d.ox - d.x) * 0.12;
          d.y += (d.oy - d.y) * 0.12;
        }

        // Color based on proximity
        const proximity = Math.max(0, 1 - dist / PULL_RADIUS);
        const alpha =
          (dark ? 0.12 + proximity * 0.75 : 0.18 + proximity * 0.65) *
          heroOpacity;
        const r = Math.round(80 + proximity * 120);
        const g = Math.round(47 + proximity * 40);
        const b = Math.round(254);
        const size = RADIUS + proximity * 2.5;

        if (alpha > 0) {
          ctx.beginPath();
          ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
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
