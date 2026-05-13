import { useEffect, useRef } from "react";

interface SpeckleTextProps {
  text: string;
  /** CSS font shorthand used for sampling (controls letter shapes). */
  font?: string;
  /** Density: lower = more dots. Pixel sample step. */
  step?: number;
  /** Palette of dot colors (sage/blue greens by default). */
  colors?: string[];
  className?: string;
}

type Dot = {
  x: number; // base x in css px (relative to canvas)
  y: number; // base y
  r: number; // radius
  color: string;
  alpha: number;
  // animation
  phase: number;
  speed: number;
  amp: number;
};

export function SpeckleText({
  text,
  font = "700 1em 'Iowan Old Style', 'Palatino Linotype', Palatino, Garamond, Georgia, serif",
  step = 4,
  colors = [
    "rgba(96, 140, 96, ALPHA)",   // forest
    "rgba(120, 170, 130, ALPHA)", // moss
    "rgba(70, 110, 90, ALPHA)",   // deep forest
    "rgba(140, 180, 160, ALPHA)", // sage
    "rgba(110, 150, 175, ALPHA)", // dusty blue
    "rgba(160, 195, 170, ALPHA)", // pale sage
    "rgba(85, 130, 110, ALPHA)",  // pine
  ],
  className,
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
    let start = performance.now();

    const buildDots = () => {
      const containerW = container.clientWidth;
      // Pick a font size so the text fills ~92% of container width.
      // We measure at a base size, then scale.
      const probeSize = 200;
      ctx.font = font.replace("1em", `${probeSize}px`);
      const metrics = ctx.measureText(text);
      const probeWidth = metrics.width;
      const targetWidth = containerW * 0.92;
      const fontSize = Math.min(
        Math.max((probeSize * targetWidth) / probeWidth, 60),
        320,
      );

      ctx.font = font.replace("1em", `${fontSize}px`);
      const m = ctx.measureText(text);
      const ascent = m.actualBoundingBoxAscent || fontSize * 0.8;
      const descent = m.actualBoundingBoxDescent || fontSize * 0.25;
      const textW = Math.ceil(m.width);
      const textH = Math.ceil(ascent + descent);

      // Pad for dot bleed
      const pad = Math.ceil(fontSize * 0.15);
      cssW = textW + pad * 2;
      cssH = textH + pad * 2;

      // Set canvas size
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;

      // Offscreen mask
      const mask = document.createElement("canvas");
      mask.width = cssW;
      mask.height = cssH;
      const mctx = mask.getContext("2d", { willReadFrequently: true });
      if (!mctx) return;
      mctx.fillStyle = "#000";
      mctx.textBaseline = "alphabetic";
      mctx.font = font.replace("1em", `${fontSize}px`);
      mctx.fillText(text, pad, pad + ascent);
      const data = mctx.getImageData(0, 0, cssW, cssH).data;

      const newDots: Dot[] = [];
      for (let y = 0; y < cssH; y += step) {
        for (let x = 0; x < cssW; x += step) {
          const idx = (y * cssW + x) * 4 + 3; // alpha
          if (data[idx] > 128) {
            // jitter position within sample cell
            const jx = x + (Math.random() - 0.5) * step * 1.6;
            const jy = y + (Math.random() - 0.5) * step * 1.6;
            const r = (fontSize / 38) * (0.6 + Math.random() * 0.9);
            const color = colors[Math.floor(Math.random() * colors.length)];
            const alpha = 0.35 + Math.random() * 0.45;
            newDots.push({
              x: jx,
              y: jy,
              r,
              color,
              alpha,
              phase: Math.random() * Math.PI * 2,
              speed: 0.4 + Math.random() * 0.8,
              amp: 0.6 + Math.random() * 1.6,
            });
          }
        }
      }
      // Add some extra scatter dots near the text for organic feel
      const extras = Math.floor(newDots.length * 0.18);
      for (let i = 0; i < extras; i++) {
        const seed = newDots[Math.floor(Math.random() * newDots.length)];
        if (!seed) break;
        const ang = Math.random() * Math.PI * 2;
        const dist = Math.random() * fontSize * 0.08;
        newDots.push({
          ...seed,
          x: seed.x + Math.cos(ang) * dist,
          y: seed.y + Math.sin(ang) * dist,
          r: seed.r * (0.5 + Math.random() * 0.6),
          alpha: seed.alpha * 0.6,
          color: colors[Math.floor(Math.random() * colors.length)],
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 0.8,
          amp: 0.8 + Math.random() * 2,
        });
      }
      dots = newDots;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, cssW, cssH);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const ox = Math.cos(t * d.speed + d.phase) * d.amp;
        const oy = Math.sin(t * d.speed * 1.1 + d.phase) * d.amp;
        ctx.beginPath();
        ctx.fillStyle = d.color.replace("ALPHA", d.alpha.toFixed(3));
        ctx.arc(d.x + ox, d.y + oy, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
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
      if (prefersReduced) renderStatic();
      else {
        cancelAnimationFrame(raf);
        start = performance.now();
        raf = requestAnimationFrame(draw);
      }
    };

    init();

    let resizeT: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeT) clearTimeout(resizeT);
      resizeT = setTimeout(init, 120);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (resizeT) clearTimeout(resizeT);
      cancelAnimationFrame(raf);
    };
  }, [text, font, step, colors]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ display: "flex", justifyContent: "center" }}
      aria-label={text}
      role="img"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
