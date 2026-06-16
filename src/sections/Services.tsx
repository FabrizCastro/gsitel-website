"use client";

import CheckIcon from "@/assets/icons/check.svg";
import automateBackground from "@/assets/backgrounds/services_background_automate.png";
import telecomBackground from "@/assets/backgrounds/services_background_telecom.png";
import { DotGrid } from "@/components/DotGrid";
import TypeText from "@/components/TypeText";
import type { SiteMode } from "@/lib/siteMode";
import Image from "next/image";
import { useState } from "react";

type ServiceItem = {
  id: string;
  label: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  activities: string[];
  ctaClass: string;
  background: typeof automateBackground;
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
    icon: <AutomationIcon className="h-6 w-6 text-[#ff7a7a]" />,
    title: (
      <>
        Automatización y software para operaciones{" "}
        <span className="text-[#ff7a7a]">críticas</span>.
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
    ctaClass: "bg-[#e25555] hover:bg-[#cc4a4a]",
    background: automateBackground,
  },
  {
    id: "ran",
    label: "Ingeniería RAN",
    imageAlt: "Ilustración de ingeniería RAN para redes móviles",
    icon: <RanIcon className="h-6 w-6 text-[#ffc266]" />,
    title: (
      <>
        Integración y configuración{" "}
        <span className="text-[#ffc266]">RAN</span> multivendor.
      </>
    ),
    description:
      "Servicios especializados para despliegue, optimización y soporte en redes móviles 2G/3G/4G/5G.",
    activities: [
      "Comisionamiento y capacitación de BBU",
      "Integración y configuración de nodos RAN",
      "Diseño Drive Test & Site Survey",
      "Soporte, optimización y monitoreo OyM RAN",
      "Consultoría de implementación de controladores",
    ],
    ctaClass: "bg-[#f39c36] hover:bg-[#da862b] text-black",
    background: telecomBackground,
  },
  {
    id: "consultoria",
    label: "Consultoría de Software",
    imageAlt: "Ilustración de consultoría de proyectos de software",
    icon: <ConsultingIcon className="h-6 w-6 text-[#7fb7ff]" />,
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
    ctaClass: "bg-[#2f9edb] hover:bg-[#2583b8]",
    background: automateBackground,
  },
];

export const Services = ({ mode }: { mode: SiteMode }) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const isTelecom = mode === "telecom";
  const orderedServices = isTelecom
    ? [services[1], services[0], services[2]]
    : [services[0], services[2]];
  const focusTags = isTelecom
    ? ["RAN", "Drive test", "OyM", "Automatización"]
    : ["Apps web", "Dashboards", "APIs", "IA aplicada"];

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#020408] px-4 py-20 text-white scroll-mt-24 sm:px-6 md:py-28 md:scroll-mt-28"
    >
      <DotGrid
        dotSize={4}
        gap={18}
        baseColor="#15304f"
        activeColor={isTelecom ? "#f39c36" : "#2f9edb"}
        proximity={140}
        shockRadius={260}
        shockStrength={3}
        resistance={800}
        returnDuration={1.4}
        className="opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(47,158,219,0.18),transparent_34%),radial-gradient(circle_at_84%_14%,rgba(243,156,54,0.14),transparent_28%),linear-gradient(180deg,rgba(2,4,8,0.98)_0%,rgba(2,4,8,0.94)_34%,rgba(5,14,28,0.92)_72%,rgba(12,26,46,0.88)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#020408] via-[#020408]/92 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#1b3354]/55 to-[#EAEEFE]" />

      <div className="container relative">
        <div className="section-heading max-w-4xl">
          <div className="flex justify-center">
            <div className="tag border-white/20 bg-white/10 text-white">
              Especificación de servicios
            </div>
          </div>
          <h2 className="mt-5">
            <TypeText
              text={
                isTelecom
                  ? "Soluciones telecom y RAN"
                  : "Soluciones integrales de software"
              }
              className="block text-center text-3xl font-black uppercase leading-[0.95] text-white drop-shadow-[0_4px_22px_rgba(0,0,0,0.45)] sm:text-4xl md:text-6xl"
              speed={28}
              startDelay={200}
              cursor
            />
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base font-medium leading-7 text-white/80 sm:text-lg md:text-xl">
            {isTelecom
              ? "Servicios especializados para despliegue, integración, soporte y optimización de redes móviles."
              : "Diseñamos, integramos y automatizamos sistemas para que tu operación funcione como una sola plataforma."}
          </p>
          <div className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-white/80">
            {focusTags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-2">
          {orderedServices.map((service) => (
            <article
              key={service.id}
              className="group relative flex min-h-[430px] overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#0a1627] shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_34px_90px_rgba(0,0,0,0.48)] focus-within:-translate-y-1 focus-within:border-white/35 sm:min-h-[460px]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.26),transparent_42%)]" />
              </div>
              <div className="absolute inset-0">
                <Image
                  src={service.background}
                  alt={service.imageAlt}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,17,0.38)_0%,rgba(3,8,17,0.74)_38%,rgba(3,8,17,0.98)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,17,0.55),transparent_55%)]" />
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] [background-size:22px_22px]" />
              </div>

              <div className="relative z-10 flex w-full flex-col justify-between p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-black/35 shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur">
                    {service.icon}
                  </div>
                  <span className="rounded-full border border-white/15 bg-black/35 px-3 py-2 text-right text-[10px] font-black uppercase tracking-[0.18em] text-white/85 backdrop-blur">
                    {service.label}
                  </span>
                </div>

                <div className="mt-auto rounded-3xl border border-white/15 bg-[#030817]/70 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.42)] backdrop-blur-md sm:p-6">
                  <h3 className="text-2xl font-black leading-tight text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)] sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-6 text-white/80 sm:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.activities.slice(0, 3).map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2 text-xs font-semibold leading-5 text-white/80 sm:text-sm"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-white transition hover:brightness-110 sm:w-auto ${service.ctaClass}`}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </article>
          ))}
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
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>
            <ul className="mt-8 space-y-4">
              {activeService.activities.map((activity) => (
                <li
                  key={activity}
                  className="flex items-start gap-3 text-white/85"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
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
