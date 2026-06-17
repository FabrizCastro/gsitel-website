"use client";

import type { DetailConfig } from "@/data/detailConfig";
import {
  SOFTWARE_PHASE2_FEATURES,
  TELECOM_CAPABILITIES,
  TELECOM_CAPABILITY_DATA,
  TELECOM_PHASE2_FEATURES,
} from "@/data/telecomCapabilities";
import { SECTOR_DATA, SOFTWARE_SECTORS } from "@/data/sectorData";
import { AppModal } from "@/components/AppModal";
import { MotionInView, staggerContainer, staggerItem } from "@/components/MotionInView";
import { getModeTheme } from "@/lib/modeTheme";
import { renderRoadmapIcon } from "@/lib/roadmapIcons";
import type { SiteMode } from "@/lib/siteMode";
import { Antenna, Brain, Gauge, Rocket, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { type ReactNode, useCallback, useState } from "react";

type ActiveDetail = {
  label: string;
  categoryLabel: string;
  solutions: DetailConfig["solutions"];
  roadmap: { step: string; title: string; desc: string; icon: ReactNode }[];
};

const PhaseIcon = ({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) => <Icon className={className} strokeWidth={2.25} aria-hidden="true" />;

export const DigitalTransformation = ({ mode }: { mode: SiteMode }) => {
  const [activeDetail, setActiveDetail] = useState<ActiveDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = getModeTheme(mode);
  const phase2Features = theme.isTelecom
    ? TELECOM_PHASE2_FEATURES
    : SOFTWARE_PHASE2_FEATURES;
  const sectorCount = theme.isTelecom
    ? TELECOM_CAPABILITIES.length
    : SOFTWARE_SECTORS.length;

  const openSoftwareSector = useCallback((title: string) => {
    const sector = SECTOR_DATA[title];
    if (!sector) {
      return;
    }

    setActiveDetail({
      label: title,
      categoryLabel: "Sector",
      solutions: sector.solutions,
      roadmap: sector.roadmap.map((step) => ({
        ...step,
        icon: renderRoadmapIcon(step.iconKey),
      })),
    });
    setIsModalOpen(true);
  }, []);

  const openTelecomCapability = useCallback((title: string) => {
    const capability = TELECOM_CAPABILITY_DATA[title];
    if (!capability) {
      return;
    }

    setActiveDetail({
      label: title,
      categoryLabel: "Capacidad",
      solutions: capability.solutions,
      roadmap: capability.roadmap.map((step) => ({
        ...step,
        icon: renderRoadmapIcon(step.iconKey),
      })),
    });
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveDetail(null);
  };

  const sectorItems = theme.isTelecom
    ? TELECOM_CAPABILITIES.map((item) => ({
        badge: item.icon,
        title: item.title,
        onClick: () => openTelecomCapability(item.title),
      }))
    : SOFTWARE_SECTORS.map((item) => ({
        badge: item.icon,
        title: item.title,
        onClick: () => openSoftwareSector(item.title),
      }));

  return (
    <section
      id="digitalizacion"
      className="relative bg-transparent px-4 pb-12 pt-4 scroll-mt-24 sm:px-6 sm:pb-16 sm:pt-5 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl">
        <MotionInView className="mb-8 flex flex-col gap-5 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <p className="section-eyebrow-dark">
                {theme.isTelecom ? "Estrategia de Red" : "Estrategia de Crecimiento"}
              </p>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                2 fases · {sectorCount} {theme.isTelecom ? "capacidades" : "sectores"}
              </span>
            </div>
            <h2 className="section-title-dark">
              {theme.isTelecom
                ? "Operación telecom inteligente"
                : "Software integral inteligente"}
            </h2>
            <p className="section-desc-dark">
              {theme.isTelecom
                ? "Despliegue, integración y soporte RAN con procesos claros."
                : "Diagnóstico, plataformas a medida, automatización e IA aplicada."}
            </p>
          </div>
        </MotionInView>

        <motion.div
          className="relative grid gap-5 lg:grid-cols-2 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-24 hidden h-[calc(100%-6rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block"
            aria-hidden="true"
          />

          <PhaseCard
            phase="01"
            title={theme.isTelecom ? "Desplegar" : "Iniciar"}
            subtitle={theme.isTelecom ? "Integración RAN" : "Digitalización integral"}
            description={
              theme.isTelecom
                ? "Rollout, comisionamiento y validación para acelerar la puesta en servicio."
                : "Modernizamos atención y gestión interna con un plan por sectores."
            }
            icon={
              theme.isTelecom ? (
                <PhaseIcon icon={Antenna} className="h-7 w-7 sm:h-8 sm:w-8" />
              ) : (
                <PhaseIcon icon={Rocket} className="h-7 w-7 sm:h-8 sm:w-8" />
              )
            }
            iconClass={theme.phase1Icon}
            borderClass={theme.phase1Border}
            glowClass={theme.phase1Glow}
            accentRgb={theme.accentRgb}
            ctaLabel={theme.isTelecom ? "Planificar despliegue" : "Empezar digitalización"}
            ctaClass="btn-ghost-light"
          >
            <div className="flex flex-wrap gap-2">
              {sectorItems.map((item) => (
                <SectorChip
                  key={item.title}
                  badge={item.badge}
                  title={item.title}
                  accentRgb={theme.accentRgb}
                  onClick={item.onClick}
                />
              ))}
            </div>
          </PhaseCard>

          <PhaseCard
            phase="02"
            title={theme.isTelecom ? "Optimizar" : "Evolucionar"}
            subtitle={theme.isTelecom ? "OyM & Automatización" : "IA & Automatización"}
            description={
              theme.isTelecom
                ? "Visibilidad, troubleshooting y KPIs en redes de misión crítica."
                : "IA, workflows y dashboards para escalar tu operación digital."
            }
            icon={
              theme.isTelecom ? (
                <PhaseIcon icon={Gauge} className="h-7 w-7 sm:h-8 sm:w-8" />
              ) : (
                <PhaseIcon icon={Brain} className="h-7 w-7 sm:h-8 sm:w-8" />
              )
            }
            iconClass={theme.phase2Icon}
            borderClass={theme.phase2Border}
            glowClass={theme.phase1Glow}
            accentRgb={theme.accentRgb}
            ctaLabel={theme.isTelecom ? "Optimizar red" : "Optimizar con IA"}
            ctaClass={`btn-accent ${theme.ctaPrimary}`}
          >
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {phase2Features.map((feature, index) => (
                <FeatureItem
                  key={feature.title}
                  index={index + 1}
                  title={feature.title}
                  desc={feature.desc}
                  accentRgb={theme.accentRgb}
                />
              ))}
            </div>
          </PhaseCard>
        </motion.div>
      </div>

      <AppModal
        isOpen={isModalOpen && !!activeDetail}
        onClose={closeModal}
        ariaLabel={activeDetail ? `Detalles de ${activeDetail.label}` : "Detalles"}
        panelClassName="glass-panel border-white/15 p-6 sm:p-10"
      >
        {activeDetail && (
          <>
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
              style={{
                background: `radial-gradient(circle, rgba(${theme.accentRgb}, 0.2), transparent 70%)`,
              }}
            />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span
                  className="text-[10px] font-black uppercase tracking-[0.3em]"
                  style={{ color: theme.accent }}
                >
                  {activeDetail.categoryLabel}
                </span>
                <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                  {activeDetail.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:bg-white/12"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <div className="relative mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                  Soluciones sugeridas
                </h4>
                <ul className="space-y-3">
                  {activeDetail.solutions.map((solution) => (
                    <li
                      key={solution.name}
                      className="group relative overflow-visible rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-4 transition hover:border-white/20"
                    >
                      <span className="font-semibold text-white">{solution.name}</span>
                      <a
                        href={solution.link}
                        target={solution.link.startsWith("#") ? undefined : "_blank"}
                        rel={solution.link.startsWith("#") ? undefined : "noreferrer"}
                        className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 transition hover:text-white"
                      >
                        {solution.provider}
                      </a>
                      <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0b1322] px-4 py-3 text-xs text-slate-300 opacity-0 shadow-2xl transition group-hover:opacity-100 group-hover:translate-y-1">
                        {solution.summary}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                  Roadmap recomendado
                </h4>
                <ul className="space-y-3">
                  {activeDetail.roadmap.map((step) => (
                    <li
                      key={step.step}
                      className="flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:bg-white/[0.06]"
                    >
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-white"
                        style={{
                          borderColor: `rgba(${theme.accentRgb}, 0.3)`,
                          background: `rgba(${theme.accentRgb}, 0.1)`,
                        }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                          Paso {step.step}
                        </span>
                        <div className="font-semibold text-white">{step.title}</div>
                        <p className="text-sm text-slate-400">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={closeModal} className="btn-ghost-light flex-1 sm:flex-none">
                Cerrar
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfgHkDApUgxqeuqpwoaJPVWo6nQjS7NI9wtpB_W7f0RCddpQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className={`btn-accent flex-1 sm:flex-none ${theme.ctaPrimary}`}
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

function PhaseCard({
  phase,
  title,
  subtitle,
  description,
  icon,
  iconClass,
  borderClass,
  glowClass,
  accentRgb,
  ctaLabel,
  ctaClass,
  children,
}: {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  iconClass: string;
  borderClass: string;
  glowClass: string;
  accentRgb: string;
  ctaLabel: string;
  ctaClass: string;
  children: ReactNode;
}) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={`glass-panel group p-4 transition duration-500 sm:p-5 ${borderClass} ${glowClass}`}
    >
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full blur-3xl transition duration-500 group-hover:opacity-100 opacity-60"
        style={{
          background: `radial-gradient(circle, rgba(${accentRgb}, 0.14), transparent 70%)`,
        }}
      />

      <div className="relative flex items-center gap-4">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}>
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.24em]"
            style={{
              color: `rgb(${accentRgb})`,
              background: `rgba(${accentRgb}, 0.12)`,
              border: `1px solid rgba(${accentRgb}, 0.25)`,
            }}
          >
            Fase {phase}
          </span>
          <h3 className="mt-1 text-lg font-black uppercase tracking-tight text-white sm:text-xl">
            {title}
          </h3>
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-500">
            {subtitle}
          </p>
        </div>
      </div>

      <p className="relative mt-3 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      <div className="relative mt-4">{children}</div>

      <a href="#contacto" className={`relative mt-4 inline-flex text-[10px] ${ctaClass}`}>
        {ctaLabel}
      </a>
    </motion.article>
  );
}

function SectorChip({
  badge,
  title,
  accentRgb,
  onClick,
}: {
  badge: string;
  title: string;
  accentRgb: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-left transition hover:border-white/20 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:w-auto"
    >
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[9px] font-black uppercase text-white"
        style={{
          border: `1px solid rgba(${accentRgb}, 0.3)`,
          background: `rgba(${accentRgb}, 0.12)`,
        }}
      >
        {badge}
      </span>
      <span className="text-[11px] font-bold uppercase tracking-tight text-white">
        {title}
      </span>
    </button>
  );
}

function FeatureItem({
  index,
  title,
  desc,
  accentRgb,
}: {
  index: number;
  title: string;
  desc: string;
  accentRgb: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition hover:border-white/12 hover:bg-white/[0.05]">
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-black"
        style={{
          background: `rgba(${accentRgb}, 0.15)`,
          border: `1px solid rgba(${accentRgb}, 0.3)`,
          color: `rgb(${accentRgb})`,
        }}
      >
        {String(index).padStart(2, "0")}
      </div>
      <div className="min-w-0">
        <h4 className="text-xs font-black uppercase tracking-tight text-white sm:text-sm">
          {title}
        </h4>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
          {desc}
        </p>
      </div>
    </div>
  );
}
