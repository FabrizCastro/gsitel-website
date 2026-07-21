"use client";

import CheckIcon from "@/assets/icons/check.svg";
import automateBackground from "@/assets/backgrounds/services_background_automate.png";
import telecomBackground from "@/assets/backgrounds/services_background_telecom.png";
import { AppModal } from "@/components/AppModal";
import { MotionInView, staggerContainer, staggerItem } from "@/components/MotionInView";
import { getModeTheme } from "@/lib/modeTheme";
import type { SiteMode } from "@/lib/siteMode";
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
          <p className="section-eyebrow-dark">Servicios</p>
          <h2 className="section-title-dark">
            {theme.isTelecom
              ? "Capacidad técnica para infraestructura telecom"
              : "Soluciones digitales para operaciones exigentes"}
          </h2>
          <p className="section-desc-dark">
            {theme.isTelecom
              ? "Ingeniería, integración y soporte para redes móviles con altos estándares de operación."
              : "Diseño, desarrollo y automatización de sistemas alineados con la operación del negocio."}
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {focusTags.map((item) => (
              <span
                key={item}
                className="border-l border-white/15 pl-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/55"
              >
                {item}
              </span>
            ))}
          </div>
        </MotionInView>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-10 border-y border-white/10 py-10 md:grid-cols-2 md:gap-0 md:py-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {orderedServices.map((service, index) => (
            <motion.article
              key={service.id}
              variants={staggerItem}
              className="group relative flex flex-col md:border-r md:border-white/10 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="flex items-center justify-between gap-6">
                <span className="text-[10px] font-black tracking-[0.28em]" style={{ color: service.accent }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white/40">
                  {service.label}
                </span>
              </div>

              <div className="mt-10 inline-flex h-10 w-10 items-center justify-center text-white/80">
                {service.icon}
              </div>
              <h3 className="mt-6 text-2xl font-black leading-tight text-white sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                {service.description}
              </p>
              <ul className="mt-8 border-t border-white/10">
                {service.activities.slice(0, 3).map((activity) => (
                  <li key={activity} className="border-b border-white/[0.07] py-3 text-sm text-white/60">
                    {activity}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setActiveService(service)}
                className="mt-8 self-start text-[10px] font-black uppercase tracking-[0.22em] text-white transition hover:opacity-60"
              >
                Ver alcance
              </button>
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
