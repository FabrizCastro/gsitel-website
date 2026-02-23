"use client";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type GalaxyProps = {
  mouseRepulsion?: boolean;
  mouseInteraction?: boolean;
  density?: number;
  glowIntensity?: number;
  saturation?: number;
  hueShift?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  repulsionStrength?: number;
  autoCenterRepulsion?: number;
  starSpeed?: number;
  speed?: number;
  className?: string;
};

type Star = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkle: number;
  vx: number;
  vy: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const Galaxy = ({
  mouseRepulsion = true,
  mouseInteraction = true,
  density = 1,
  glowIntensity = 0.3,
  saturation = 0,
  hueShift = 140,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  repulsionStrength = 2,
  autoCenterRepulsion = 0,
  starSpeed = 0.5,
  speed = 1,
  className,
}: GalaxyProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });
  const sizeRef = useRef({ width: 0, height: 0 });
  const rotationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const setupStars = () => {
      const { width, height } = sizeRef.current;
      const baseCount = (width * height) / 9000;
      const count = Math.max(120, Math.floor(baseCount * density));
      const nextStars: Star[] = [];

      for (let i = 0; i < count; i += 1) {
        nextStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 0.6 + Math.random() * 1.8,
          alpha: 0.3 + Math.random() * 0.6,
          twinkle: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * starSpeed,
          vy: (Math.random() - 0.5) * starSpeed,
        });
      }

      starsRef.current = nextStars;
    };

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { width: rect.width, height: rect.height };
      setupStars();
    };

    updateSize();

    const handlePointerMove = (event: MouseEvent) => {
      if (!mouseInteraction) {
        return;
      }
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!mouseInteraction) {
        return;
      }
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

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    const handleResize = () => updateSize();
    const resizeObserver = new ResizeObserver(() => updateSize());
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave, { passive: true });
    window.addEventListener("resize", handleResize);

    let animationId = 0;
    let lastTime = performance.now();

    const render = (time: number) => {
      const { width, height } = sizeRef.current;
      const delta = Math.min(0.05, (time - lastTime) / 1000);
      lastTime = time;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      rotationRef.current += rotationSpeed * speed * delta;
      const rotation = rotationRef.current;
      const pointer = pointerRef.current;
      const hue = hueShift;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      ctx.translate(-centerX, -centerY);

      for (const star of starsRef.current) {
        star.x += star.vx * speed * delta * 30;
        star.y += star.vy * speed * delta * 30;

        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;
        if (star.y < -10) star.y = height + 10;
        if (star.y > height + 10) star.y = -10;

        let dx = 0;
        let dy = 0;

        if (mouseRepulsion && pointer.active) {
          const distX = star.x - pointer.x;
          const distY = star.y - pointer.y;
          const dist = Math.hypot(distX, distY);
          const radius = 160;
          if (dist < radius) {
            const force = (1 - dist / radius) * repulsionStrength * 12;
            dx += (distX / (dist || 1)) * force;
            dy += (distY / (dist || 1)) * force;
          }
        }

        if (autoCenterRepulsion > 0) {
          const distX = star.x - centerX;
          const distY = star.y - centerY;
          const dist = Math.hypot(distX, distY);
          const force = clamp(dist / 400, 0, 1) * autoCenterRepulsion;
          dx += (distX / (dist || 1)) * force;
          dy += (distY / (dist || 1)) * force;
        }

        const twinkle = 1 + Math.sin(time * 0.002 + star.twinkle) * twinkleIntensity;
        const alpha = clamp(star.alpha * twinkle, 0.1, 1);

        ctx.fillStyle = `hsla(${hue}, ${saturation}%, 80%, ${alpha})`;
        ctx.shadowColor = `hsla(${hue}, ${Math.max(20, saturation)}%, 75%, ${glowIntensity})`;
        ctx.shadowBlur = glowIntensity * 18;
        ctx.beginPath();
        ctx.arc(star.x + dx, star.y + dy, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      animationId = window.requestAnimationFrame(render);
    };

    animationId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationId);
    };
  }, [
    autoCenterRepulsion,
    density,
    glowIntensity,
    hueShift,
    mouseInteraction,
    mouseRepulsion,
    repulsionStrength,
    rotationSpeed,
    saturation,
    speed,
    starSpeed,
    twinkleIntensity,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={twMerge("absolute inset-0 h-full w-full", className)}
    />
  );
};
