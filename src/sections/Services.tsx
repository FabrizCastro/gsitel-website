"use client";

import CheckIcon from "@/assets/icons/check.svg";
import automateBackground from "@/assets/backgrounds/services_background_automate.png";
import telecomBackground from "@/assets/backgrounds/services_background_telecom.png";
import { AppModal } from "@/components/AppModal";
import { MotionInView, staggerContainer, staggerItem } from "@/components/MotionInView";
import TypeText from "@/components/TypeText";
import { getModeTheme } from "@/lib/modeTheme";
import type { SiteMode } from "@/lib/siteMode";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type ServiceItem = {
  id: string;
  label: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  activities: string[];
  accent: string;
  accentRgb: string;
  background: typeof automateBackground;
};

const AutomationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
    <path d="M3 12h2m14 0h2M12 3v2m0 14v2M5.6 5.6l1.4 1.4m10 10 1.4 1.4M18.4 5.6 17 7m-10 10-1.4 1.4" />
  </svg>
);

const RanIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v6" /><path d="M9 9h6" /><path d="M5 20h14" /><path d="M8 20l4-7 4 7" /><path d="M4.5 9a7.5 7.5 0 0 1 15 0" />
  </svg>
);

const ConsultingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 7h6M9 11h6M9 15h4" />
  </svg>
);

const services: ServiceItem[] = [
  {
    id: "automation",
    label: "Automatización & Software",
    imageAlt: "Ilustración de automatización y software para operaciones críticas",
    icon: <AutomationIcon className="h-6 w-6 text-[#ff8a8a]" />,
    title: (
      <>
        Automatización y software para operaciones{" "}
        <span className="text-[#ff8a8a]">críticas</span>.
      </>
    ),
    description:
      "Diseñamos soluciones a medida para automatizar procesos, centralizar información y acelerar la toma de decisiones.",
    activities: [
      "Automatización de ventas, compras y cobranzas",
      "Desarrollo de aplicaciones web, páginas web y diseño web",
      "Apps móviles con Flutter/React Native y APIs backend",
      "Reportes simples y paneles para microempresas y empresas",
      "Control de clientes, inventario y operaciones diarias",
      "Alertas y flujos de trabajo para reducir errores",
    ],
    accent: "#e25555",
    accentRgb: "226, 85, 85",
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
      "Transmisión y backhaul: rutas MW, enlaces y validación",
      "Soporte, optimización y monitoreo OyM RAN",
      "Consultoría de implementación de controladores",
    ],
    accent: "#f39c36",
    accentRgb: "243, 156, 54",
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
    accent: "#2f9edb",
    accentRgb: "47, 158, 219",
    background: automateBackground,
  },
];

export const Services = ({ mode }: { mode: SiteMode }) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const theme = getModeTheme(mode);
  const orderedServices = theme.isTelecom
    ? [services[1], services[0], services[2]]
    : [services[0], services[2]];
  const focusTags = theme.isTelecom
    ? ["RAN", "Drive test", "OyM", "Automatización"]
    : ["Apps web", "Dashboards", "APIs", "IA aplicada"];

  return (
    <section
      id="servicios"
      className="relative bg-transparent px-4 section-shell scroll-mt-24 sm:px-6 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl">
        <MotionInView className="max-w-2xl">
          <p className="section-eyebrow-dark">Especificación de servicios</p>
          <h2 className="section-title-dark">
            <TypeText
              text={
                theme.isTelecom
                  ? "Soluciones telecom y RAN"
                  : "Soluciones integrales de software"
              }
              className="block"
              speed={28}
              startDelay={200}
              cursor
            />
          </h2>
          <p className="section-desc-dark">
            {theme.isTelecom
              ? "Servicios especializados para despliegue, integración, soporte y optimización de redes móviles."
              : "Diseñamos, integramos y automatizamos sistemas para que tu operación funcione como una sola plataforma."}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {focusTags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/75 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.08]"
              >
                {item}
              </span>
            ))}
          </div>
        </MotionInView>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {orderedServices.map((service, index) => (
            <motion.article
              key={service.id}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="group relative flex min-h-[300px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#060d18] shadow-[0_20px_50px_rgba(0,0,0,0.4)] sm:min-h-[360px] md:min-h-[400px]"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 opacity-80 transition group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
                }}
              />

              <div className="absolute inset-0">
                <Image
                  src={service.background}
                  alt={service.imageAlt}
                  fill
                  quality={75}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,14,0.2)_0%,rgba(2,6,14,0.55)_35%,rgba(2,6,14,0.97)_100%)]" />
                <div
                  className="absolute inset-0 opacity-40 transition duration-500 group-hover:opacity-60"
                  style={{
                    background: `radial-gradient(circle at 20% 0%, rgba(${service.accentRgb}, 0.25), transparent 50%)`,
                  }}
                />
              </div>

              <div className="relative z-10 flex w-full flex-col p-5 sm:p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.28em]"
                      style={{ color: service.accent }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur-md"
                      style={{
                        borderColor: `rgba(${service.accentRgb}, 0.35)`,
                        background: `rgba(${service.accentRgb}, 0.12)`,
                      }}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                    {service.label}
                  </span>
                </div>

                <div className="mt-auto rounded-[1.35rem] border border-white/10 bg-[#030817]/75 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-6">
                  <h3 className="text-xl font-black leading-tight text-white sm:text-2xl lg:text-[1.65rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.activities.slice(0, 3).map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2.5 text-xs font-medium leading-5 text-slate-300 sm:text-sm"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: service.accent }}
                        />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                    style={{
                      background: `linear-gradient(135deg, ${service.accent}, rgba(${service.accentRgb}, 0.7))`,
                      boxShadow: `0 12px 32px rgba(${service.accentRgb}, 0.35)`,
                    }}
                  >
                    Ver más
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AppModal
        isOpen={!!activeService}
        onClose={() => setActiveService(null)}
        ariaLabel={activeService ? `Detalles de ${activeService.label}` : "Detalles"}
        maxWidth="2xl"
        panelClassName="glass-panel border-white/15 p-6 sm:p-10"
      >
        {activeService && (
          <>
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl"
              style={{
                background: `radial-gradient(circle, rgba(${activeService.accentRgb}, 0.25), transparent 70%)`,
              }}
            />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <span
                  className="text-[10px] font-black uppercase tracking-[0.3em]"
                  style={{ color: activeService.accent }}
                >
                  Actividades incluidas
                </span>
                <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                  {activeService.label}
                </h3>
                <p className="mt-3 text-sm text-slate-400 sm:text-base">
                  {activeService.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white hover:bg-white/12"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            <ul className="relative mt-8 space-y-3">
              {activeService.activities.map((activity, i) => (
                <li
                  key={activity}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4"
                >
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white"
                    style={{
                      background: `rgba(${activeService.accentRgb}, 0.15)`,
                      color: activeService.accent,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-slate-200 sm:text-base">{activity}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="btn-ghost-light flex-1 sm:flex-none"
              >
                Cerrar
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfgHkDApUgxqeuqpwoaJPVWo6nQjS7NI9wtpB_W7f0RCddpQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className="btn-accent flex-1 sm:flex-none"
                style={{
                  background: `linear-gradient(135deg, ${activeService.accent}, rgba(${activeService.accentRgb}, 0.75))`,
                  boxShadow: `0 12px 32px rgba(${activeService.accentRgb}, 0.3)`,
                }}
              >
                Agendar reunión
              </a>
            </div>
          </>
        )}
      </AppModal>
    </section>
  );
};
