"use client";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type DotGridProps = {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  shockRadius?: number;
  shockStrength?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const hexToRgb = (hex: string) => {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

export const DotGrid = ({
  dotSize = 4,
  gap = 16,
  baseColor = "#0b1d3a",
  activeColor = "#2f9edb",
  proximity = 120,
  shockRadius = 240,
  shockStrength = 3,
  resistance = 750,
  returnDuration = 1.5,
  className,
}: DotGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });
  const smoothRef = useRef({ x: -9999, y: -9999 });
  const shockRef = useRef<{ x: number; y: number; start: number } | null>(
    null,
  );
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const base = hexToRgb(baseColor);
    const active = hexToRgb(activeColor);
    const ease = clamp(150 / resistance, 0.05, 0.2);

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { width: rect.width, height: rect.height, dpr };
    };

    updateSize();

    const handlePointerMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
        active: true,
      };
    };

    const handlePointerDown = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      shockRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        start: performance.now(),
      };
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const rect = canvas.getBoundingClientRect();
      shockRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
        start: performance.now(),
      };
    };

    const handleResize = () => updateSize();

    const resizeObserver = new ResizeObserver(() => updateSize());
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mousedown", handlePointerDown, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("resize", handleResize);

    let animationId = 0;
    const draw = () => {
      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);

      const pointer = pointerRef.current;
      const smooth = smoothRef.current;

      if (pointer.active) {
        smooth.x += (pointer.x - smooth.x) * ease;
        smooth.y += (pointer.y - smooth.y) * ease;
      }

      const shock = shockRef.current;
      const now = performance.now();
      let shockDecay = 0;
      if (shock) {
        const elapsed = (now - shock.start) / 1000;
        if (elapsed <= returnDuration) {
          shockDecay = 1 - elapsed / returnDuration;
        } else {
          shockRef.current = null;
        }
      }

      for (let y = gap / 2; y < height; y += gap) {
        for (let x = gap / 2; x < width; x += gap) {
          let intensity = 0;

          if (pointer.active) {
            const dx = x - smooth.x;
            const dy = y - smooth.y;
            const dist = Math.hypot(dx, dy);
            if (dist < proximity) {
              intensity += Math.pow(1 - dist / proximity, 2);
            }
          }

          if (shockRef.current && shockDecay > 0) {
            const dx = x - shockRef.current.x;
            const dy = y - shockRef.current.y;
            const dist = Math.hypot(dx, dy);
            if (dist < shockRadius) {
              intensity +=
                shockStrength * (1 - dist / shockRadius) * shockDecay;
            }
          }

          intensity = clamp(intensity, 0, 1);

          const r = Math.round(base.r + (active.r - base.r) * intensity);
          const g = Math.round(base.g + (active.g - base.g) * intensity);
          const b = Math.round(base.b + (active.b - base.b) * intensity);
          const alpha = 0.25 + intensity * 0.7;
          const size = dotSize + intensity * 1.6;

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = window.requestAnimationFrame(draw);
    };

    animationId = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationId);
    };
  }, [
    activeColor,
    baseColor,
    dotSize,
    gap,
    proximity,
    resistance,
    returnDuration,
    shockRadius,
    shockStrength,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={twMerge("absolute inset-0 h-full w-full", className)}
    />
  );
};
