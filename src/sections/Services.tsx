"use client";

import CheckIcon from "@/assets/icons/check.svg";
import automateBackground from "@/assets/backgrounds/services_background_automate.png";
import telecomBackground from "@/assets/backgrounds/services_background_telecom.png";
import Image from "next/image";
import { useState } from "react";
import { DotGrid } from "@/components/DotGrid";
import TypeText from "@/components/TypeText";

type ServiceItem = {
  id: string;
  label: string;
  imageAlt: string;
  icon: React.ReactNode;
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

const AutomationIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
    <path d="M3 12h2m14 0h2M12 3v2m0 14v2M5.6 5.6l1.4 1.4m10 10 1.4 1.4M18.4 5.6 17 7m-10 10-1.4 1.4" />
  </svg>
);

const RanIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3v6" />
    <path d="M9 9h6" />
    <path d="M5 20h14" />
    <path d="M8 20l4-7 4 7" />
    <path d="M4.5 9a7.5 7.5 0 0 1 15 0" />
  </svg>
);

const ConsultingIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 7h6M9 11h6M9 15h4" />
  </svg>
);

const services: ServiceItem[] = [
  {
    id: "automation",
    label: "Automatización & Software",
    imageAlt:
      "Ilustración de automatización y software para operaciones críticas",
    icon: <AutomationIcon className="h-6 w-6 text-[#e25555]" />,
    title: (
      <>
        Automatización y software para operaciones{" "}
        <span className="text-[#e25555]">críticas</span>.
      </>
    ),
    description:
      "Diseñamos soluciones a medida para automatizar procesos, centralizar información y acelerar la toma de decisiones.",
    activities: [
      "Automatización de ventas, compras y cobranzas",
      "Desarrollo de aplicaciones web, páginas web y diseño web",
      "Reportes simples y paneles para microempresas y empresas",
      "Control de clientes, inventario y operaciones diarias",
      "Alertas y flujos de trabajo para reducir errores",
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
    icon: <RanIcon className="h-6 w-6 text-[#f39c36]" />,
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
    icon: <ConsultingIcon className="h-6 w-6 text-[#2f9edb]" />,
    title: (
      <>
        Consultoría para{" "}
        <span className="text-[#7fb7ff]">proyectos de software</span>.
      </>
    ),
    description:
      "Acompañamos a empresas grandes y microempresas en la planificación y ejecución de iniciativas digitales con foco en impacto y eficiencia.",
    activities: [
      "Diagnóstico claro de procesos y oportunidades",
      "Plan paso a paso para digitalizarse sin complicaciones",
      "Automatización con IA para ahorrar tiempo y errores",
      "Implementación y acompañamiento en cada etapa del proceso",
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
      className="pt-12 pb-24 scroll-mt-24 md:pt-16 md:pb-24 md:scroll-mt-28 relative overflow-hidden"
    >
      <DotGrid
        dotSize={4}
        gap={18}
        baseColor="#0b1d3a"
        activeColor="#2f9edb"
        proximity={140}
        shockRadius={260}
        shockStrength={3}
        resistance={800}
        returnDuration={1.4}
        className="opacity-40"
      />
      <div className="container relative">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Especificación de servicios</div>
          </div>
          <h2 className="mt-5">
            <TypeText
              text="Soluciones de software y telecom"
              className="section-title text-left text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] break-words"
              speed={28}
              startDelay={200}
              cursor
            />
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
                className={`group relative min-h-[320px] overflow-hidden rounded-3xl border-2 border-white/10 bg-[#0f1419] shadow-[0_24px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:border-white/40 hover:ring-2 hover:ring-white/50 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55)] focus-within:-translate-y-3 focus-within:scale-[1.02] focus-within:border-white/40 focus-within:ring-2 focus-within:ring-white/50 sm:min-h-[440px] lg:min-h-[480px] hover:z-10 focus-within:z-10 backdrop-blur-sm ${
                  service.id === "consultoria" ? "lg:col-span-2" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_55%)]" />
                </div>
                <div className="absolute inset-0">
                  <Image
                    src={service.background}
                    alt={service.imageAlt}
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 ${service.overlayClass}`} />
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.22)_1px,transparent_0)] [background-size:22px_22px]" />
                </div>
                <div
                  className={`relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 items-center text-center ${
                    isRight
                      ? "md:items-end md:text-right"
                      : "md:items-start md:text-left"
                  }`}
                >
                  <div
                    className={`max-w-[440px] w-full ${
                      isRight ? "md:ml-auto" : ""
                    }`}
                  >
                    <div
                      className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 mx-auto ${
                        isRight ? "md:ml-auto" : "md:ml-0"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <span className="block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-wide text-white/80 break-words">
                      {service.label}
                    </span>
                    <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight break-words">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base md:text-lg text-white/80 break-words">
                      {service.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className={`mt-6 sm:mt-8 inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/30 bg-white/15 px-5 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/95 transition hover:bg-white/25 text-center`}
                  >
                    Ver más
                  </button>
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
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#0b1322] p-6 sm:p-10 shadow-2xl"
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
                <li
                  key={activity}
                  className="flex items-start gap-3 text-white/85"
                >
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
