"use client";

import { MotionInView } from "@/components/MotionInView";
import { getModeTheme } from "@/lib/modeTheme";
import type { SiteMode } from "@/lib/siteMode";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Análisis",
    description: "Evaluamos el contexto, los objetivos y las restricciones del proyecto.",
  },
  {
    title: "Diseño",
    description: "Definimos el alcance, la arquitectura y el plan de implementación.",
  },
  {
    title: "Ejecución",
    description: "Implementamos la solución con control técnico y validación continua.",
  },
  {
    title: "Operación",
    description: "Aseguramos continuidad, soporte y mejora sostenida de la solución.",
  },
];

export const WorkProcess = ({ mode }: { mode: SiteMode }) => {
  const theme = getModeTheme(mode);

  return (
    <section
      id="metodologia"
      className="relative scroll-mt-24 px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24 md:scroll-mt-28"
      aria-labelledby="work-process-title"
    >
      <div className="mx-auto max-w-6xl">
        <MotionInView className="max-w-2xl">
          <p className="section-eyebrow-dark">Metodología</p>
          <h2 id="work-process-title" className="section-title-dark">
            Un proceso estructurado para ejecutar con precisión.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Cuatro etapas, un único objetivo: convertir cada requerimiento en un resultado verificable.
          </p>
        </MotionInView>

        <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-28">
          {steps.map((step, index) => {
            const visualOnLeft = index % 2 === 0;

            return (
              <motion.article
                key={step.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20"
                initial={{ opacity: 0, x: visualOnLeft ? -56 : 56 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={visualOnLeft ? "lg:order-1" : "lg:order-2"}>
                  <div
                    className="aspect-[16/10] rounded-2xl border border-white/10 bg-white/[0.015]"
                    aria-hidden="true"
                  />
                </div>

                <div className={visualOnLeft ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[10px] font-black tracking-[0.24em]"
                      style={{ color: theme.accent }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-white/15" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-8 text-white/60">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
