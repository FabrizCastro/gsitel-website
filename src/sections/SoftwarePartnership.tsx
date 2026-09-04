"use client";

import { MotionInView } from "@/components/MotionInView";
import { scrollToSection } from "@/lib/smoothSectionScroll";
import { ArrowUpRight, Check, Code2, Compass, TrendingUp, type LucideIcon } from "lucide-react";

const partnershipSteps = [
  {
    number: "01",
    title: "Descubrimos",
    description: "El problema que más mueve tu negocio.",
    signal: "Estrategia",
    icon: Compass,
  },
  {
    number: "02",
    title: "Construimos",
    description: "El producto, plataforma o automatización que necesitas.",
    signal: "Producto",
    icon: Code2,
  },
  {
    number: "03",
    title: "Hacemos crecer",
    description: "Medimos y evolucionamos contigo.",
    signal: "Evolución",
    icon: TrendingUp,
  },
] satisfies Array<{
  number: string;
  title: string;
  description: string;
  signal: string;
  icon: LucideIcon;
}>;

export const SoftwarePartnership = () => {
  const goTo = (sectionId: string) => scrollToSection(sectionId);

  return (
    <section
      id="alianzas-software"
      className="software-partnership quiet-section relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="software-partnership-watermark" aria-hidden="true">
        PARTNER
      </div>

      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#79e4f2]">
            GSITEL / Partner estratégico de software
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/55">Pensar · construir · evolucionar</p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <MotionInView>
            <div className="max-w-xl">
              <h2 className="mt-4 max-w-xl text-2xl font-black leading-[1.04] text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Un partner para convertir problemas en{" "}
                <span className="text-[#79e4f2]">software que hace avanzar</span> tu negocio.
              </h2>
              <p className="section-desc-dark max-w-lg">
                Estrategia, producto y tecnología en un mismo equipo.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-7">
                <a
                  href="#contacto"
                  onClick={(event) => {
                    event.preventDefault();
                    goTo("contacto");
                  }}
                  className="group inline-flex items-center gap-2 border-b-2 border-[#79e4f2] pb-2 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-colors hover:text-[#79e4f2]"
                >
                  Conversemos sobre tu siguiente decisión
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#proyectos"
                  onClick={(event) => {
                    event.preventDefault();
                    goTo("proyectos");
                  }}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
                >
                  Ver casos de éxito
                </a>
              </div>
            </div>
          </MotionInView>

          <div>
            <MotionInView delay={0.08}>
              <div className="mb-2 flex items-end justify-between gap-6 border-b border-white/15 pb-5">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-white">Así trabajamos contigo</p>
                <p className="hidden text-right text-xs font-medium text-white/50 sm:block">De la idea a la operación</p>
              </div>
            </MotionInView>

            <div className="software-partnership-steps">
              {partnershipSteps.map((step, index) => (
                <MotionInView key={step.number} delay={0.12 + index * 0.08}>
                  <article className="software-partnership-step grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-start sm:gap-6">
                    <div className="software-partnership-step-number" aria-hidden="true">
                      <span>
                        <step.icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-[-0.02em] text-white sm:text-2xl">{step.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-white/65 sm:text-base">{step.description}</p>
                    </div>
                    <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#b5edf3] sm:max-w-[150px] sm:justify-end sm:text-right">
                      <Check className="h-4 w-4 shrink-0 text-[#79e4f2]" strokeWidth={2.4} />
                      {step.signal}
                    </p>
                  </article>
                </MotionInView>
              ))}
            </div>

            <MotionInView delay={0.35}>
              <div className="mt-8 border-l-2 border-[#79e4f2] pl-5">
                <p className="text-lg font-black text-white">No entregamos código y nos vamos.</p>
                <p className="mt-2 text-sm leading-6 text-white/60 sm:text-base">Nos quedamos para que la solución produzca resultados.</p>
              </div>
            </MotionInView>
          </div>
        </div>
      </div>
    </section>
  );
};
