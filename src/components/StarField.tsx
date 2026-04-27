import { useEffect, useRef } from "react";

/**
 * Subtle drifting particle field, inspired by eyrinkim.com's <night-sky>.
 * Renders tiny squares across multiple parallax layers, slowly moving across
 * the viewport. Pure canvas, fixed behind page content, respects reduced motion.
 */
type Star = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
};

interface StarFieldProps {
  layers?: number;
  density?: number; // stars per layer per 100k px²
  velocityX?: number; // px/sec at base layer
  velocityY?: number;
  color?: string;
}

export function StarField({
  layers = 5,
  density = 30,
  velocityX = 20,
  velocityY = 25,
  color = "26, 60, 40", // forest green rgb
}: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    let raf = 0;
    let last = performance.now();

    const buildStars = () => {
      stars = [];
      const area = width * height;
      // density per 100,000 px² per layer
      const perLayer = Math.max(8, Math.floor((area / 100000) * density));
      for (let layer = 0; layer < layers; layer++) {
        // Deeper layers: smaller, dimmer, slower
        const depth = (layer + 1) / layers; // 0..1
        const speedScale = 0.25 + depth * 0.9;
        for (let i = 0; i < perLayer; i++) {
          const size = depth < 0.5 ? 1 : depth < 0.85 ? 2 : 3;
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size,
            vx: (velocityX / 60) * speedScale * (Math.random() * 0.6 + 0.7),
            vy: (velocityY / 60) * speedScale * (Math.random() * 0.6 + 0.7),
            alpha: 0.12 + depth * 0.45,
          });
        }
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    };

    const draw = (now: number) => {
      const dt = Math.min(64, now - last); // cap delta
      last = now;
      ctx.clearRect(0, 0, width, height);
      const step = dt / 16.67; // normalize to ~60fps frames

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx * step;
        s.y += s.vy * step;
        // wrap
        if (s.x > width + 4) s.x = -4;
        else if (s.x < -4) s.x = width + 4;
        if (s.y > height + 4) s.y = -4;
        else if (s.y < -4) s.y = height + 4;

        ctx.fillStyle = `rgba(${color}, ${s.alpha})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    if (prefersReduced) {
      // Render one static frame
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        ctx.fillStyle = `rgba(${color}, ${s.alpha})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [layers, density, velocityX, velocityY, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen"
    />
  );
}
