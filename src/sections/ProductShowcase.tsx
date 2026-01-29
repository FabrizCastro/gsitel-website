"use client";

import CheckIcon from "@/assets/check.svg";
import automateBackground from "@/assets/services_background_automate.png";
import telecomBackground from "@/assets/services_background_telecom.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const services = [
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
      "bg-[linear-gradient(90deg,rgba(6,16,32,0.9),rgba(6,16,32,0.6),rgba(6,16,32,0.1))]",
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
      "bg-[linear-gradient(270deg,rgba(6,16,32,0.92),rgba(6,16,32,0.6),rgba(6,16,32,0.1))]",
  },
];

export const ProductShowcase = () => {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  useEffect(() => {
    if (!activeModalId) {
      return;
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveModalId(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeModalId]);

  return (
    <section
      id="servicios"
      className="pt-12 pb-24 scroll-mt-24 md:pt-16 md:pb-24 md:scroll-mt-28"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Especificación de servicios</div>
          </div>
          <h2 className="section-title mt-5">
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
              <React.Fragment key={service.id}>
                <article
                  className="group relative min-h-[360px] overflow-hidden rounded-3xl border border-white/20 shadow-[0_18px_50px_rgba(8,18,40,0.35)] transition-shadow transition-colors duration-300 hover:border-white/60 hover:ring-2 hover:ring-white/70 hover:shadow-[0_22px_60px_rgba(8,18,40,0.45)] focus-within:border-white/60 focus-within:ring-2 focus-within:ring-white/70 sm:min-h-[460px] lg:min-h-[480px] hover:z-10 focus-within:z-10"
                  style={{ perspective: "1200px" }}
                >
                  <div className="relative h-full w-full transition-transform duration-500 md:[transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] md:group-focus-within:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 md:[backface-visibility:hidden] p-6 sm:p-8 md:p-10 lg:p-12">
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
                          <button
                            type="button"
                            onClick={() => setActiveModalId(service.id)}
                            className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white sm:text-xs"
                            aria-haspopup="dialog"
                            aria-controls={`activities-modal-${service.id}`}
                          >
                            Ver más →
                          </button>
                        </div>
                        <span className="hidden md:inline text-sm font-semibold text-white/80">
                          Ver más para actividades
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 hidden md:block md:[transform:rotateY(180deg)] md:[backface-visibility:hidden] p-6 sm:p-8 md:p-10 lg:p-12">
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
                        <button
                          className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors ${
                            service.ctaClass
                          }`}
                        >
                          {service.cta}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                {activeModalId === service.id && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1d3a]/70 px-4"
                    role="dialog"
                    aria-modal="true"
                    id={`activities-modal-${service.id}`}
                    onClick={() => setActiveModalId(null)}
                  >
                    <div
                      className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/20 bg-[#0b1d3a] shadow-[0_24px_60px_rgba(8,18,40,0.6)]"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <div
                        className={`absolute inset-0 ${service.backClass}`}
                      />
                      <div className="relative z-10 p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                            Actividades incluidas
                          </span>
                          <button
                            type="button"
                            onClick={() => setActiveModalId(null)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/80"
                            aria-label="Cerrar"
                          >
                            ✕
                          </button>
                        </div>
                        <h3 className="mt-4 text-2xl font-bold text-white leading-tight">
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
                              <span className="text-sm">{activity}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={() => setActiveModalId(null)}
                          className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
