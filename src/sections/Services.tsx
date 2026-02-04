"use client";

import CheckIcon from "@/assets/check.svg";
import automateBackground from "@/assets/services_background_automate.png";
import telecomBackground from "@/assets/services_background_telecom.png";
import Image from "next/image";
import { useState } from "react";

type ServiceItem = {
  id: string;
  label: string;
  imageAlt: string;
  title: React.ReactNode;
  description: string;
  activities: string[];
  cta: string;
  ctaClass: string;
  backClass: string;
  align: "left" | "right";
  background: typeof automateBackground;
  overlayClass: string;
};

const services: ServiceItem[] = [
  {
    id: "automation",
    label: "Automatización & Software",
    imageAlt:
      "Ilustración de automatización y software para operaciones críticas",
    title: (
      <>
        Automatización y software para operaciones{" "}
        <span className="text-[#e25555]">críticas</span>.
      </>
    ),
    description:
      "Diseñamos soluciones a medida para automatizar procesos, centralizar información y acelerar la toma de decisiones.",
    activities: [
      "Automatización de reportes y monitoreo",
      "Desarrollo de herramientas y aplicaciones",
      "Integraciones y APIs multivendor",
      "Alertas inteligentes y workflows",
    ],
    cta: "Conoce más",
    ctaClass: "bg-[#e25555] hover:bg-[#cc4a4a]",
    backClass: "bg-[linear-gradient(135deg,#e25555,#b73a3a)]",
    align: "left",
    background: automateBackground,
    overlayClass:
      "bg-[linear-gradient(90deg,rgba(8,12,18,0.92),rgba(8,12,18,0.75),rgba(8,12,18,0.35))]",
  },
  {
    id: "ran",
    label: "Ingenieria RAN",
    imageAlt: "Ilustración de ingeniería RAN para redes móviles",
    title: (
      <>
        Integración y configuración <span className="text-[#f39c36]">RAN</span>{" "}
        multivendor.
      </>
    ),
    description:
      "Servicios especializados para despliegue, optimización y soporte en redes móviles 2G/3G/4G/5G.",
    activities: [
      "Comisionamiento y Capacitación BBU's",
      "Integración y Configuración Nodos RAN",
      "Diseño DriveTest & Site Survey",
      "Soporte, Optimización y Monitoreo OyM RAN",
      "Consultoría Implementación Controladores",
    ],
    cta: "Conoce más",
    ctaClass: "bg-[#f39c36] hover:bg-[#da862b]",
    backClass: "bg-[linear-gradient(135deg,#f39c36,#c9751d)]",
    align: "right",
    background: telecomBackground,
    overlayClass:
      "bg-[linear-gradient(270deg,rgba(8,12,18,0.92),rgba(8,12,18,0.72),rgba(8,12,18,0.35))]",
  },
  {
    id: "consultoria",
    label: "Consultoría de Software",
    imageAlt: "Ilustración de consultoría de proyectos de software",
    title: (
      <>
        Consultoría para{" "}
        <span className="text-[#7fb7ff]">proyectos de software</span>.
      </>
    ),
    description:
      "Acompañamos la planificación y ejecución de iniciativas digitales con foco en impacto y eficiencia.",
    activities: [
      "Levantamiento y definición de requerimientos",
      "Roadmap técnico y priorización",
      "Gestión de riesgos y calidad",
      "Acompañamiento a equipos TI",
    ],
    cta: "Conoce más",
    ctaClass: "bg-[#2f9edb] hover:bg-[#2583b8]",
    backClass: "bg-[linear-gradient(135deg,#2f9edb,#1b5aa6)]",
    align: "left",
    background: automateBackground,
    overlayClass:
      "bg-[linear-gradient(90deg,rgba(8,12,18,0.92),rgba(8,12,18,0.72),rgba(8,12,18,0.35))]",
  },
];

export const Services = () => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section
      id="servicios"
      className="pt-12 pb-24 scroll-mt-24 md:pt-16 md:pb-24 md:scroll-mt-28"
    >
      <div className="container relative">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Especificación de servicios</div>
          </div>
          <h2 className="section-title mt-5 text-left text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] break-words">
            Soluciones de software y telecom
          </h2>
          <p className="section-description mt-5">
            Dos frentes de servicio para cubrir automatización de software e
            integración de redes móviles.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8 lg:-mx-12 xl:-mx-16">
          {services.map((service) => {
            const isRight = service.align === "right";

            return (
              <article
                key={service.id}
                className={`group relative min-h-[360px] overflow-hidden rounded-3xl border-2 border-white/10 bg-[#0f1419] shadow-[0_24px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-white/40 hover:ring-2 hover:ring-white/50 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55)] focus-within:-translate-y-3 focus-within:scale-[1.02] focus-within:border-white/40 focus-within:ring-2 focus-within:ring-white/50 sm:min-h-[460px] lg:min-h-[480px] hover:z-10 focus-within:z-10 backdrop-blur-sm ${
                  service.id === "consultoria" ? "lg:col-span-2" : ""
                }`}
                style={{ perspective: "1200px" }}
              >
                <div className="relative h-full w-full transition-transform duration-500 will-change-transform md:[transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] md:group-focus-within:[transform:rotateY(180deg)] [transform:translateZ(0)]">
                    <div className="absolute inset-0 md:[backface-visibility:hidden] [transform:translateZ(0)] p-6 sm:p-8 md:p-10 lg:p-12">
                      <Image
                        src={service.background}
                        alt={service.imageAlt}
                        fill
                        quality={100}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                      />
                      <div
                        className={`absolute inset-0 ${service.overlayClass}`}
                      />
                      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.22)_1px,transparent_0)] [background-size:22px_22px]" />
                      <div
                        className={`relative z-10 flex h-full flex-col justify-between ${
                          isRight
                            ? "items-end text-right"
                            : "items-start text-left"
                        }`}
                      >
                        <div
                          className={`max-w-[420px] ${isRight ? "ml-auto" : ""}`}
                        >
                          <span className="text-sm font-semibold uppercase tracking-wide text-white/80">
                            {service.label}
                          </span>
                          <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl leading-tight">
                            {service.title}
                          </h3>
                          <p className="mt-3 text-sm text-white/80 sm:text-base md:text-lg">
                            {service.description}
                          </p>
                        </div>
                        <div className="flex w-full items-center justify-between gap-4">
                          <span className="hidden md:inline text-sm font-semibold text-white/80">
                            Ver más para actividades
                          </span>
                          <button
                            type="button"
                            onClick={() => setActiveService(service)}
                            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/95 transition hover:bg-white/25"
                          >
                            Ver más
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 hidden md:block md:[transform:rotateY(180deg)] md:[backface-visibility:hidden] [transform:translateZ(0)] p-6 sm:p-8 md:p-10 lg:p-12">
                      <div
                        className={`absolute inset-0 ${service.backClass}`}
                      />
                      <div
                        className={`relative z-10 flex h-full flex-col justify-between ${
                          isRight
                            ? "items-end text-right"
                            : "items-start text-left"
                        }`}
                      >
                        <div
                          className={`max-w-[420px] ${isRight ? "ml-auto" : ""}`}
                        >
                          <span className="text-sm font-semibold uppercase tracking-wide text-white/70">
                            Actividades incluidas
                          </span>
                          <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl leading-tight">
                            {service.label}
                          </h3>
                          <ul className="mt-5 space-y-3 text-white/85">
                            {service.activities.map((activity) => (
                              <li
                                key={activity}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/10">
                                  <CheckIcon className="h-4 w-4" />
                                </span>
                                <span className="text-sm md:text-base">
                                  {activity}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <span className="mt-8 hidden md:inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white/80 border border-white/20">
                          {service.cta}
                        </span>
                      </div>
                    </div>
                  </div>
              </article>
            );
          })}
        </div>
      </div>
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalles de ${activeService.label}`}
          onClick={() => setActiveService(null)}
        >
          <div
            className="w-full max-w-2xl rounded-3xl border border-white/15 bg-[#0b1322] p-6 sm:p-10 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                  Actividades incluidas
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-black text-white uppercase tracking-tight break-words">
                  {activeService.label}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/75">
                  {activeService.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>
            <ul className="mt-8 space-y-4">
              {activeService.activities.map((activity) => (
                <li key={activity} className="flex items-start gap-3 text-white/85">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm sm:text-base break-words">
                    {activity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="w-full sm:w-auto rounded-xl border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80"
              >
                Cerrar
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfgHkDApUgxqeuqpwoaJPVWo6nQjS7NI9wtpB_W7f0RCddpQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto rounded-xl bg-cyan-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black text-center"
              >
                Agendar reunión
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
