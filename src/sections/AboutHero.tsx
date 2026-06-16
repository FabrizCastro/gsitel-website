"use client";

import backgroundHeroImage from "@/assets/backgrounds/backgroundhero1.png";
import telecomBackgroundHeroImage from "@/assets/backgrounds/telecombackgroundhero.png";
import botDarkIcon from "@/assets/tech-icon/bot-dark.png";
import hackerDarkIcon from "@/assets/tech-icon/hacker-dark.png";
import monitorDarkIcon from "@/assets/tech-icon/monitor-dark.png";
import antenaDarkIcon from "@/assets/tech-icon/antena-dark.png";
import routerDarkIcon from "@/assets/tech-icon/router-dark.png";
import sateliteDarkIcon from "@/assets/tech-icon/satelite-dark.png";
import type { SiteMode } from "@/lib/siteMode";
import Image, { type StaticImageData } from "next/image";

type AboutHeroProps = {
  mode: SiteMode;
};

type HeroConfig = {
  eyebrow: string;
  modeLabel: string;
  lines: string[];
  description: string;
  chips: string[];
  primary: string;
  secondary: string;
  overlay: string;
  button: string;
  panel: string;
  iconGlow: string;
  iconBorder: string;
  icons: { src: StaticImageData; alt: string; label: string }[];
};

const heroCopy: Record<SiteMode, HeroConfig> = {
  software: {
    eyebrow: "Soluciones integrales de software",
    modeLabel: "Software",
    lines: ["Construimos", "software que", "mueve empresas"],
    description:
      "Disenamos plataformas, automatizaciones e integraciones que ordenan procesos, conectan datos y aceleran decisiones.",
    chips: [
      "Aplicaciones web",
      "Automatizacion",
      "Integraciones API",
      "Consultoria TI",
    ],
    primary: "Agendar diagnostico",
    secondary: "Ver soluciones",
    overlay:
      "bg-[linear-gradient(90deg,rgba(4,15,34,0.96)_0%,rgba(7,22,46,0.86)_26%,rgba(7,22,46,0.52)_46%,rgba(7,22,46,0.16)_63%,rgba(7,22,46,0)_78%)]",
    button:
      "bg-[#1e63c6] hover:bg-[#1955a8] ring-cyan-300/70 shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:shadow-[0_0_40px_rgba(34,211,238,0.65)]",
    panel:
      "border-cyan-200/18 bg-[linear-gradient(145deg,rgba(5,18,39,0.86),rgba(7,27,58,0.68)_56%,rgba(5,18,39,0.48))] shadow-[0_26px_80px_rgba(0,10,30,0.46)]",
    iconGlow: "shadow-[0_0_32px_rgba(59,130,246,0.28)]",
    iconBorder: "border-cyan-300/18",
    icons: [
      { src: hackerDarkIcon, alt: "Arquitectura de software", label: "Arquitectura" },
      { src: monitorDarkIcon, alt: "Monitor de aplicaciones", label: "Apps web" },
      { src: botDarkIcon, alt: "Automatizacion inteligente", label: "Automatizacion" },
    ],
  },
  telecom: {
    eyebrow: "Modo telecom activo",
    modeLabel: "Telecom",
    lines: ["Ingenieria", "RAN para", "redes criticas"],
    description:
      "Integramos, configuramos y optimizamos redes moviles 2G/3G/4G/5G con experiencia multivendor y foco operativo.",
    chips: [
      "Integracion RAN",
      "Drive Test",
      "Optimizacion OyM",
      "Soporte multivendor",
    ],
    primary: "Coordinar soporte",
    secondary: "Ver telecom",
    overlay:
      "bg-[linear-gradient(270deg,rgba(31,14,3,0.94)_0%,rgba(40,21,4,0.86)_18%,rgba(12,25,45,0.54)_42%,rgba(7,22,46,0.14)_62%,rgba(7,22,46,0)_78%)]",
    button:
      "bg-[#f39c36] hover:bg-[#da862b] text-white ring-amber-200/70 shadow-[0_0_25px_rgba(243,156,54,0.45)] hover:shadow-[0_0_40px_rgba(243,156,54,0.62)]",
    panel:
      "border-amber-100/18 bg-[linear-gradient(145deg,rgba(26,13,4,0.84),rgba(9,24,48,0.66)_56%,rgba(5,18,39,0.48))] shadow-[0_26px_80px_rgba(20,8,2,0.44)]",
    iconGlow: "shadow-[0_0_32px_rgba(243,156,54,0.24)]",
    iconBorder: "border-amber-200/18",
    icons: [
      { src: routerDarkIcon, alt: "Router telecom", label: "Core y TX" },
      { src: antenaDarkIcon, alt: "Antena telecom", label: "RAN" },
      { src: sateliteDarkIcon, alt: "Enlace satelital", label: "Backhaul" },
    ],
  },
};

export const AboutHero = ({ mode }: AboutHeroProps) => {
  const copy = heroCopy[mode];
  const isTelecom = mode === "telecom";
  const heroBackground = isTelecom
    ? telecomBackgroundHeroImage
    : backgroundHeroImage;
  const heroAlt = isTelecom
    ? "Fondo telecom con infraestructura de red GSITEL"
    : "Fondo tecnologico con tonos azules de GSITEL";

  return (
    <section
      id="acerca"
      className="relative min-h-[100svh] overflow-hidden bg-[#0b1d3a] pt-24 pb-6 scroll-mt-24 md:h-[100svh] md:min-h-0 md:pt-28 md:pb-6 md:scroll-mt-28"
    >
      <Image
        src={heroBackground}
        alt={heroAlt}
        fill
        priority
        quality={100}
        sizes="100vw"
        className={`object-cover ${isTelecom ? "object-[58%_center]" : "object-[70%_center]"}`}
      />
      <div className={`pointer-events-none absolute inset-0 ${copy.overlay}`} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.16),transparent_32%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] w-full max-w-[1440px] items-center px-6 sm:px-8 lg:px-12 xl:px-16 md:min-h-[calc(100svh-7.5rem)]">
        <div
          className={`grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 ${
            isTelecom ? "" : ""
          }`}
        >
          <div
            className={`${
              isTelecom
                ? "lg:col-start-7 lg:col-span-6 lg:justify-self-end"
                : "lg:col-start-1 lg:col-span-6 lg:justify-self-start"
            }`}
          >
            <div
              className={`relative w-full max-w-[40rem] overflow-hidden rounded-[1.5rem] border px-5 py-5 backdrop-blur-xl ring-1 ring-white/10 sm:px-6 sm:py-6 lg:px-7 lg:py-7 ${copy.panel}`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <div
                className={`pointer-events-none absolute -top-24 h-48 w-48 rounded-full blur-3xl ${
                  isTelecom
                    ? "right-8 bg-[#f39c36]/18"
                    : "left-8 bg-[#2f9edb]/18"
                }`}
              />

              <div
                className={`relative z-10 flex items-center gap-3 ${
                  isTelecom ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex min-w-0 items-center gap-2 rounded-full border border-white/18 bg-white/[0.08] px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_10px_26px_rgba(0,0,0,0.22)] backdrop-blur ${
                    isTelecom ? "flex-row-reverse" : ""
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_14px_currentColor] ${
                      isTelecom ? "bg-[#f39c36] text-[#f39c36]" : "bg-cyan-300 text-cyan-300"
                    }`}
                  />
                  <span className="truncate text-white">{copy.eyebrow}</span>
                </div>
              </div>

              <h1
                className={`relative z-10 mt-4 space-y-0.5 text-[3rem] font-black leading-[0.92] tracking-tight text-white drop-shadow-[0_4px_22px_rgba(0,0,0,0.55)] sm:text-[3.45rem] lg:text-[4.55rem] ${
                  isTelecom ? "text-right" : "text-left"
                }`}
              >
                {copy.lines.map((line) => (
                  <span key={`${mode}-${line}`} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p
                className={`relative z-10 mt-4 text-base leading-7 text-white/84 sm:text-lg ${
                  isTelecom ? "ml-auto max-w-[34rem] text-right" : "max-w-[34rem]"
                }`}
              >
                {copy.description}
              </p>

              <div
                className={`relative z-10 mt-4 flex flex-wrap gap-2 text-xs sm:text-sm ${
                  isTelecom ? "md:justify-end" : ""
                }`}
              >
                {copy.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/18 bg-white/[0.08] px-3 py-1.5 text-white/90 shadow-inner"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div
                className={`relative z-10 mt-6 flex flex-wrap items-center gap-3 ${
                  isTelecom ? "md:justify-end" : ""
                }`}
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdfgHkDApUgxqeuqpwoaJPVWo6nQjS7NI9wtpB_W7f0RCddpQ/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noreferrer"
                  className={`btn btn-primary relative overflow-hidden ring-2 transition duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] ${copy.button}`}
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-white/18" />
                  <span className="relative z-10 text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
                    {copy.primary}
                  </span>
                </a>
                <a
                  href="#servicios"
                  className="btn border border-white/28 bg-white/[0.08] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_14px_30px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-white/14 hover:text-white active:translate-y-0 active:scale-[0.98]"
                >
                  {copy.secondary}
                </a>
              </div>

              <div
                className={`relative z-10 mt-6 grid grid-cols-3 gap-2.5 ${
                  isTelecom ? "md:ml-auto md:max-w-[28rem]" : "md:max-w-[28rem]"
                }`}
              >
                {copy.icons.map((icon) => (
                  <div
                    key={icon.label}
                    className="group flex min-h-[5.5rem] flex-col items-center justify-center rounded-[1rem] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] px-2.5 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_16px_34px_rgba(0,0,0,0.24)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.13] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_24px_44px_rgba(0,0,0,0.34)]"
                  >
                    <div
                      className={`relative flex h-12 w-12 items-center justify-center rounded-[0.9rem] border bg-[linear-gradient(145deg,rgba(255,255,255,1),rgba(216,231,255,0.92))] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_24px_rgba(0,0,0,0.28)] transition duration-300 group-hover:scale-105 ${
                        isTelecom ? "border-amber-100/70" : "border-cyan-100/70"
                      } ${copy.iconGlow}`}
                    >
                      <span className="pointer-events-none absolute inset-x-2 top-1 h-3 rounded-full bg-white/55 blur-sm" />
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={34}
                        height={34}
                        className="relative z-10 h-8 w-8 object-contain drop-shadow-[0_7px_10px_rgba(0,0,0,0.35)]"
                      />
                    </div>
                    <div className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/82 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
                      {icon.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`hidden lg:block ${
              isTelecom ? "lg:col-start-1 lg:col-span-5" : "lg:col-start-8 lg:col-span-5"
            }`}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};
