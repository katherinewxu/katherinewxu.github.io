import { useEffect, useRef } from "react";

interface SpeckleTextProps {
  text: string;
  font?: string;
  step?: number;
  colors?: string[];
  className?: string;
  /** repulsion radius in css px */
  pushRadius?: number;
  /** repulsion strength */
  pushStrength?: number;
}

type Dot = {
  hx: number; // home x
  hy: number; // home y
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  alpha: number;
};

export function SpeckleText({
  text,
  font = "700 1em 'Iowan Old Style', 'Palatino Linotype', Palatino, Garamond, Georgia, serif",
  step = 4,
  colors = [
    "rgba(96, 140, 96, ALPHA)",
    "rgba(120, 170, 130, ALPHA)",
    "rgba(70, 110, 90, ALPHA)",
    "rgba(140, 180, 160, ALPHA)",
    "rgba(110, 150, 175, ALPHA)",
    "rgba(160, 195, 170, ALPHA)",
    "rgba(85, 130, 110, ALPHA)",
  ],
  className,
  pushRadius = 110,
  pushStrength = 1400,
}: SpeckleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let dots: Dot[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cssW = 0;
    let cssH = 0;
    let raf = 0;
    let last = performance.now();
    const mouse = { x: -9999, y: -9999, active: false };

    const buildDots = () => {
      const containerW = window.innerWidth;
      const containerH = window.innerHeight;
      const probeSize = 200;
      ctx.font = font.replace("1em", `${probeSize}px`);
      const probeWidth = ctx.measureText(text).width;
      const targetWidth = containerW * 0.82;
      const fontSize = Math.min(
        Math.max((probeSize * targetWidth) / probeWidth, 60),
        360,
      );

      ctx.font = font.replace("1em", `${fontSize}px`);
      const m = ctx.measureText(text);
      const ascent = m.actualBoundingBoxAscent || fontSize * 0.8;
      const descent = m.actualBoundingBoxDescent || fontSize * 0.25;
      const textW = Math.ceil(m.width);
      const textH = Math.ceil(ascent + descent);

      // Make the canvas span the full container so dots can drift freely
      // without hitting a visible rectangular boundary.
      cssW = containerW;
      cssH = Math.max(containerH, textH + fontSize * 2);
      const offsetX = Math.floor((cssW - textW) / 2);
      const offsetY = Math.floor((cssH - textH) / 2);

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;

      const mask = document.createElement("canvas");
      mask.width = cssW;
      mask.height = cssH;
      const mctx = mask.getContext("2d", { willReadFrequently: true });
      if (!mctx) return;
      mctx.fillStyle = "#000";
      mctx.textBaseline = "alphabetic";
      mctx.font = font.replace("1em", `${fontSize}px`);
      mctx.fillText(text, offsetX, offsetY + ascent);
      const data = mctx.getImageData(0, 0, cssW, cssH).data;

      const newDots: Dot[] = [];
      for (let y = 0; y < cssH; y += step) {
        for (let x = 0; x < cssW; x += step) {
          const idx = (y * cssW + x) * 4 + 3;
          if (data[idx] > 128) {
            const jx = x + (Math.random() - 0.5) * step * 1.6;
            const jy = y + (Math.random() - 0.5) * step * 1.6;
            const r = (fontSize / 38) * (0.6 + Math.random() * 0.9);
            const color = colors[Math.floor(Math.random() * colors.length)];
            const alpha = 0.4 + Math.random() * 0.45;
            newDots.push({
              hx: jx,
              hy: jy,
              x: jx,
              y: jy,
              vx: 0,
              vy: 0,
              r,
              color,
              alpha,
            });
          }
        }
      }
      // organic scatter
      const extras = Math.floor(newDots.length * 0.15);
      for (let i = 0; i < extras; i++) {
        const seed = newDots[Math.floor(Math.random() * newDots.length)];
        if (!seed) break;
        const ang = Math.random() * Math.PI * 2;
        const dist = Math.random() * fontSize * 0.07;
        const hx = seed.hx + Math.cos(ang) * dist;
        const hy = seed.hy + Math.sin(ang) * dist;
        newDots.push({
          hx,
          hy,
          x: hx,
          y: hy,
          vx: 0,
          vy: 0,
          r: seed.r * (0.5 + Math.random() * 0.6),
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: seed.alpha * 0.6,
        });
      }
      dots = newDots;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      ctx.clearRect(0, 0, cssW, cssH);

      const pr = pushRadius;
      const pr2 = pr * pr;
      const spring = 0.9; // very gentle return — lets you reshape the letters
      const damping = 1.6; // light damping so motion feels fluid

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        // repulsion from mouse
        if (mouse.active) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < pr2 && d2 > 0.01) {
            const dist = Math.sqrt(d2);
            const f = (1 - dist / pr) * pushStrength;
            d.vx += (dx / dist) * f * dt;
            d.vy += (dy / dist) * f * dt;
          }
        }
        // spring back to home
        d.vx += (d.hx - d.x) * spring * dt;
        d.vy += (d.hy - d.y) * spring * dt;
        // damp
        d.vx -= d.vx * Math.min(1, damping * dt);
        d.vy -= d.vy * Math.min(1, damping * dt);
        d.x += d.vx * dt;
        d.y += d.vy * dt;

        ctx.beginPath();
        ctx.fillStyle = d.color.replace("ALPHA", d.alpha.toFixed(3));
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    const renderStatic = () => {
      ctx.clearRect(0, 0, cssW, cssH);
      for (const d of dots) {
        ctx.beginPath();
        ctx.fillStyle = d.color.replace("ALPHA", d.alpha.toFixed(3));
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const init = () => {
      buildDots();
      cancelAnimationFrame(raf);
      if (prefersReduced) {
        renderStatic();
      } else {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onPointerLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    init();
    // Listen on window so cursor interaction works even when other layers sit on top.
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    let resizeT: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeT) clearTimeout(resizeT);
      resizeT = setTimeout(init, 120);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      if (resizeT) clearTimeout(resizeT);
      cancelAnimationFrame(raf);
    };
  }, [text, font, step, colors, pushRadius, pushStrength]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
      aria-label={text}
      role="img"
    >
      <canvas ref={canvasRef} style={{ touchAction: "none", display: "block" }} />
    </div>
  );
}
