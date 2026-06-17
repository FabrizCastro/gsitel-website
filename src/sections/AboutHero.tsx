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
import dynamic from "next/dynamic";
import Image, { type StaticImageData } from "next/image";

const ConnectedEcosystemVisual = dynamic(
  () =>
    import("@/components/ConnectedEcosystemVisual").then(
      (module) => module.ConnectedEcosystemVisual,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-full min-h-[420px] w-full rounded-3xl bg-white/[0.03] ring-1 ring-white/10 sm:min-h-[480px] lg:min-h-[560px]"
        aria-hidden="true"
      />
    ),
  },
);

type AboutHeroProps = {
  mode: SiteMode;
};

type HeroConfig = {
  eyebrow: string;
  headline: string;
  description: string;
  chips: string[];
  primary: string;
  secondary: string;
  overlay: string;
  button: string;
  panel: string;
  icons: { src: StaticImageData; alt: string; label: string }[];
};

const heroCopy: Record<SiteMode, HeroConfig> = {
  software: {
    eyebrow: "Soluciones integrales de software",
    headline: "Construimos software que mueve empresas",
    description:
      "Plataformas, automatizaciones e integraciones que ordenan procesos y aceleran decisiones.",
    chips: ["Apps web", "Automatización", "APIs", "Consultoría TI"],
    primary: "Agendar diagnóstico",
    secondary: "Ver soluciones",
    overlay:
      "bg-[linear-gradient(270deg,rgba(4,15,34,0.96)_0%,rgba(7,22,46,0.86)_30%,rgba(7,22,46,0.4)_55%,rgba(7,22,46,0)_78%)]",
    button:
      "bg-[#1e63c6] hover:bg-[#1955a8] ring-cyan-300/70 shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:shadow-[0_0_40px_rgba(34,211,238,0.65)]",
    panel:
      "border-cyan-200/20 bg-[linear-gradient(145deg,rgba(5,18,39,0.88),rgba(7,27,58,0.72)_56%,rgba(5,18,39,0.52))] shadow-[0_20px_60px_rgba(0,10,30,0.42)]",
    icons: [
      { src: hackerDarkIcon, alt: "Arquitectura de software", label: "Arquitectura" },
      { src: monitorDarkIcon, alt: "Monitor de aplicaciones", label: "Apps web" },
      { src: botDarkIcon, alt: "Automatización inteligente", label: "Automatización" },
    ],
  },
  telecom: {
    eyebrow: "Ingeniería RAN multivendor",
    headline: "Ingeniería RAN para redes críticas",
    description:
      "Integración y optimización 2G/3G/4G/5G con foco operativo y soporte en campo.",
    chips: ["Integración RAN", "Drive Test", "OyM", "Multivendor"],
    primary: "Coordinar soporte",
    secondary: "Ver telecom",
    overlay:
      "bg-[linear-gradient(270deg,rgba(31,14,3,0.94)_0%,rgba(40,21,4,0.86)_22%,rgba(12,25,45,0.5)_48%,rgba(7,22,46,0)_78%)]",
    button:
      "bg-[#f39c36] hover:bg-[#da862b] text-white ring-amber-200/70 shadow-[0_0_25px_rgba(243,156,54,0.45)] hover:shadow-[0_0_40px_rgba(243,156,54,0.62)]",
    panel:
      "border-amber-100/20 bg-[linear-gradient(145deg,rgba(26,13,4,0.86),rgba(9,24,48,0.68)_56%,rgba(5,18,39,0.5))] shadow-[0_20px_60px_rgba(20,8,2,0.4)]",
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

  return (
    <section
      id="acerca"
      className="relative flex flex-1 flex-col justify-center overflow-hidden bg-[#0b1d3a] scroll-mt-20 pt-24 sm:pt-28 md:scroll-mt-24"
    >
      <Image
        src={backgroundHeroImage}
        alt="Fondo tecnológico con tonos azules de GSITEL"
        fill
        priority
        quality={85}
        sizes="100vw"
        className={`object-cover object-[70%_center] transition-opacity duration-700 ease-out ${
          isTelecom ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={telecomBackgroundHeroImage}
        alt="Fondo telecom con infraestructura de red GSITEL"
        fill
        priority
        quality={85}
        sizes="100vw"
        className={`object-cover object-[58%_center] transition-opacity duration-700 ease-out ${
          isTelecom ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className={`pointer-events-none absolute inset-0 ${copy.overlay}`} />
      <div
        className={`pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(34,211,238,0.08),transparent_55%)] ${
          isTelecom
            ? "lg:bg-[radial-gradient(ellipse_at_80%_50%,rgba(34,211,238,0.08),transparent_55%)]"
            : "lg:bg-[radial-gradient(ellipse_at_20%_50%,rgba(34,211,238,0.08),transparent_55%)]"
        }`}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 sm:py-10 lg:px-12 xl:px-16">
        <div
          className={`mx-auto w-full ${
            isTelecom
              ? "max-w-3xl lg:max-w-4xl"
              : "grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14"
          }`}
        >
          {!isTelecom && (
            <div className="relative order-2 flex h-[min(420px,75vw)] items-center justify-center sm:h-[480px] lg:order-1 lg:h-[min(600px,52vw)] lg:max-h-[600px]">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(29,111,255,0.12),transparent_70%)]" />
              <div className="relative mx-auto w-full max-w-[600px] origin-center scale-[0.78] sm:scale-[0.88] lg:scale-100">
                <ConnectedEcosystemVisual />
              </div>
            </div>
          )}

          <div
            className={`relative order-1 overflow-hidden rounded-2xl border px-5 py-5 backdrop-blur-xl ring-1 ring-white/10 sm:px-8 sm:py-8 lg:order-2 lg:ml-auto ${copy.panel}`}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <div className="flex flex-wrap items-center gap-2 justify-start lg:justify-end">
              <div
                className={`flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.1] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] !text-white backdrop-blur ${
                  isTelecom ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    isTelecom ? "bg-[#f39c36]" : "bg-cyan-300"
                  }`}
                />
                <span className="!text-white">{copy.eyebrow}</span>
              </div>
            </div>

            <h1 className="mt-4 text-2xl font-black leading-[0.95] tracking-tight !text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] text-left lg:text-right">
              {copy.headline}
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 !text-[#eaf3ff]/90 sm:text-base md:text-lg text-left lg:ml-auto lg:max-w-md lg:text-right">
              {copy.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 justify-start lg:justify-end">
              {copy.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/20 bg-white/[0.08] px-3 py-1.5 text-[10px] font-bold !text-white sm:text-xs"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 justify-start lg:justify-end">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfgHkDApUgxqeuqpwoaJPVWo6nQjS7NI9wtpB_W7f0RCddpQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className={`btn relative w-full overflow-hidden px-5 py-3 text-sm !text-white ring-2 transition hover:-translate-y-0.5 sm:w-auto sm:text-base ${copy.button}`}
              >
                {copy.primary}
              </a>
              <a
                href="#servicios"
                className="btn w-full border border-white/30 bg-white/[0.08] px-5 py-3 text-sm !text-white transition hover:bg-white/[0.14] sm:w-auto sm:text-base"
              >
                {copy.secondary}
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5 justify-start lg:justify-end">
              {copy.icons.map((icon) => (
                <div
                  key={icon.label}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-3 py-2 transition hover:border-white/30 hover:bg-white/[0.1]"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wide !text-white sm:text-xs">
                    {icon.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
