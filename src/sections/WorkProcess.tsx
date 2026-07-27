"use client";

import methodologyArchitecture from "@/assets/illustrations/methodology-architecture.webp";
import methodologyDiagnosis from "@/assets/illustrations/methodology-diagnosis.webp";
import methodologyOperation from "@/assets/illustrations/methodology-operation.webp";
import { MotionInView } from "@/components/MotionInView";
import { getModeTheme } from "@/lib/modeTheme";
import type { SiteMode } from "@/lib/siteMode";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos la operación antes de proponer tecnología. Separamos las señales importantes, las restricciones y las oportunidades que realmente justifican una decisión.",
    detail: ["Contexto", "Prioridades", "Oportunidades"],
    image: methodologyDiagnosis,
    imageAlt:
      "Diagnóstico técnico mediante señales, restricciones y prioridades",
    visualLabel: "Lectura del sistema",
  },
  {
    number: "02",
    title: "Diseño y ejecución",
    description:
      "Convertimos el diagnóstico en una arquitectura clara, un plan de implementación y entregables que pueden revisarse y validarse durante todo el proceso.",
    detail: ["Arquitectura", "Desarrollo", "Validación"],
    image: methodologyArchitecture,
    imageAlt:
      "Construcción modular de una arquitectura tecnológica",
    visualLabel: "Construcción precisa",
  },
  {
    number: "03",
    title: "Operación continua",
    description:
      "La puesta en marcha no es el final. Medimos el comportamiento del sistema, acompañamos la operación y priorizamos mejoras con evidencia.",
    detail: ["Indicadores", "Soporte", "Evolución"],
    image: methodologyOperation,
    imageAlt:
      "Monitoreo y evolución continua de una operación tecnológica",
    visualLabel: "Sistema en evolución",
  },
] as const;

const ProcessVisual = ({
  image,
  imageAlt,
  number,
  label,
  accent,
}: {
  image: StaticImageData;
  imageAlt: string;
  number: string;
  label: string;
  accent: string;
}) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useHydratedReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-14, 14],
  );

  return (
    <motion.div
      ref={frameRef}
      className="group relative isolate aspect-[4/3] w-full overflow-hidden rounded-[1.65rem] border border-white/90 bg-[#dfe7f8] shadow-[0_30px_90px_rgba(34,62,104,0.16)] sm:aspect-[16/10] sm:rounded-[2rem]"
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      <motion.div
        className="absolute -inset-y-6 inset-x-0"
        style={{ y: imageY }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          loading="lazy"
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 54vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,33,0.02)_45%,rgba(5,16,33,0.44)_100%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/35" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6">
        <div className="min-w-0">
          <p className="text-[8px] font-black uppercase tracking-[0.24em] text-white/60 sm:text-[9px]">
            Metodología · {number}
          </p>
          <p className="mt-1.5 truncate text-sm font-black text-white sm:text-base">
            {label}
          </p>
        </div>
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full ring-4 ring-white/15"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 22px ${accent}`,
          }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};

export const WorkProcess = ({ mode }: { mode: SiteMode }) => {
  const theme = getModeTheme(mode);
  const reduceMotion = useHydratedReducedMotion();

  return (
    <section
      id="metodologia"
      className="quiet-section relative isolate scroll-mt-24 overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 md:scroll-mt-28 lg:pb-40"
      aria-labelledby="work-process-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#EAEEFE_0%,#F7F9FF_13%,#F7F9FF_86%,#EAEEFE_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(ellipse_at_top,rgba(47,158,219,0.12),transparent_67%)]" />
      <div className="pointer-events-none absolute -left-40 top-[34%] -z-10 h-96 w-96 rounded-full bg-[#2f9edb]/[0.055] blur-3xl" />
      <div className="pointer-events-none absolute -right-48 bottom-[18%] -z-10 h-[28rem] w-[28rem] rounded-full bg-[#1b5aa6]/[0.045] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <MotionInView className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow-light">Metodología</p>
          <h2 id="work-process-title" className="section-title-light">
            Claridad antes, durante y después de construir.
          </h2>
          <p className="section-desc-light mx-auto">
            Tres etapas para reducir incertidumbre, tomar mejores decisiones y
            mantener cada solución útil cuando entra en operación.
          </p>
        </MotionInView>

        <div className="relative mt-16 space-y-24 sm:mt-24 sm:space-y-32 lg:mt-32 lg:space-y-44">
          <div className="pointer-events-none absolute bottom-16 left-1/2 top-16 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0b1d3a]/10 to-transparent lg:block" />

          {steps.map((step, index) => {
            const visualOnLeft = index % 2 === 0;

            return (
              <motion.article
                key={step.title}
                className="relative grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.72fr)] lg:gap-20 xl:gap-28"
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        y: 48,
                      }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.82,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  className={`min-w-0 ${
                    visualOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                  initial={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: visualOnLeft ? -34 : 34 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.86,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <ProcessVisual
                    image={step.image}
                    imageAlt={step.imageAlt}
                    number={step.number}
                    label={step.visualLabel}
                    accent={theme.accent}
                  />
                </motion.div>

                <div
                  className={`min-w-0 ${
                    visualOnLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <motion.span
                      className="text-[11px] font-black tracking-[0.24em]"
                      style={{ color: theme.accent }}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 24,
                        delay: 0.18,
                      }}
                    >
                      {step.number}
                    </motion.span>
                    <motion.span
                      className="h-px bg-[#0b1d3a]/20"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.22 }}
                      aria-hidden="true"
                    />
                    <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#0b1d3a]/42">
                      Etapa
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-md text-3xl font-black leading-[1.08] tracking-[-0.025em] text-[#0b1d3a] sm:text-4xl lg:text-[2.65rem]">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-8 text-[#0b1d3a]/68 sm:text-[1.05rem]">
                    {step.description}
                  </p>

                  <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#0b1d3a]/10 pt-5">
                    {step.detail.map((item, detailIndex) => (
                      <motion.li
                        key={item}
                        className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em] text-[#0b1d3a]/50"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.28 + detailIndex * 0.08 }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: theme.accent }}
                          aria-hidden="true"
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
