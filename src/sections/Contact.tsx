"use client";

import type { SiteMode } from "@/lib/siteMode";
import Image from "next/image";
import {
  type ComponentType,
  useEffect,
  useRef,
  useState,
} from "react";

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

const ContactBackground = ({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [GalaxyComponent, setGalaxyComponent] =
    useState<ComponentType<GalaxyProps> | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px 0px", threshold: 0.01 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!isVisible || prefersReducedMotion) {
      return;
    }

    let cancelled = false;

    void import("@/components/Galaxy").then((module) => {
      if (!cancelled) {
        setGalaxyComponent(() => module.Galaxy);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [isVisible, prefersReducedMotion]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {prefersReducedMotion ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(47,158,219,0.22),transparent_40%)]"
        />
      ) : (
        GalaxyComponent && (
          <GalaxyComponent
            mouseRepulsion
            mouseInteraction
            density={0.55}
            glowIntensity={0.2}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.18}
            rotationSpeed={0.05}
            repulsionStrength={1.2}
            autoCenterRepulsion={0}
            starSpeed={0.3}
            speed={0.55}
            className="opacity-40"
          />
        )
      )}
    </div>
  );
};

export const Contact = ({ mode }: { mode: SiteMode }) => {
  const isTelecom = mode === "telecom";
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return (
    <section
      id="contacto"
      className="quiet-section quiet-section-dark relative bg-transparent px-4 section-shell scroll-mt-24 sm:px-6 md:scroll-mt-28"
    >
      <div
        className={`quiet-card-dark relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-6 text-center sm:p-8 md:p-10 ${
          isTelecom
            ? "bg-gradient-to-br from-[#211203] via-[#7a470d] to-[#1b5aa6]"
            : "bg-gradient-to-br from-[#0b1f3a] via-[#0d3b7a] to-[#1b5aa6]"
        }`}
      >
        <ContactBackground prefersReducedMotion={prefersReducedMotion} />
        <div className="pointer-events-none absolute inset-0 bg-[#081d3f]/55" />
        <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.04]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <div className="relative z-10">
          <p className="section-eyebrow-dark">
            {isTelecom ? "Soporte de red" : "Proyecto de software"}
          </p>
          <h2 className="section-title-dark">
            {isTelecom ? "Optimicemos tu red" : "Diseñemos tu sistema"}
          </h2>
          <p className="section-desc-dark mx-auto max-w-2xl text-center">
            {isTelecom
              ? "Integración, drive test, soporte OyM y automatización para tu operación móvil."
              : "Convirtamos procesos dispersos en una solución integral de software."}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-white/90">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Image
                src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png"
                alt="Gmail"
                width={16}
                height={16}
                className="h-4 w-4"
              />
            </span>
            <span className="break-all text-center sm:break-normal">soporte@gsitel-solutions.com</span>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:soporte@gsitel-solutions.com"
              className="w-full rounded-xl bg-black px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black sm:w-auto"
            >
              Contactar ahora
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdfgHkDApUgxqeuqpwoaJPVWo6nQjS7NI9wtpB_W7f0RCddpQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white/20 sm:w-auto"
            >
              Agendar reunión
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
