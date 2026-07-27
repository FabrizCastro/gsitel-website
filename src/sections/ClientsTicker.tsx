"use client";

import integratelPeruLogo from "@/assets/logos/integratel_peru.png";
import cuadraiAppLogo from "@/assets/logos/cuadrailogo.png";
import telefonicaLogo from "@/assets/logos/telefonica-logo.png";
import internetLogo from "@/assets/logos/internettodos-logo.png";
import entelLogo from "@/assets/logos/entel-logo.png";
import telradChileLogo from "@/assets/logos/telradchile.png";
import vaLogo from "@/assets/logos/va-profesionales.png";
import vsfLogo from "@/assets/logos/vsf_logo.png";
import { getModeTheme } from "@/lib/modeTheme";
import type { SiteMode } from "@/lib/siteMode";
import { ArrowDownRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

type ClientLogo = {
  src: StaticImageData;
  alt: string;
  imageClassName?: string;
};

const telecomClientLogos: ClientLogo[] = [
  { src: telefonicaLogo, alt: "Telefónica" },
  { src: entelLogo, alt: "Entel" },
  { src: internetLogo, alt: "Internet para Todos" },
  { src: integratelPeruLogo, alt: "Integratel Perú" },
  { src: telradChileLogo, alt: "Telrad Chile" },
];

const softwareClientLogos: ClientLogo[] = [
  {
    src: vaLogo,
    alt: "V&A Profesionales",
    imageClassName: "h-9 max-w-[150px] sm:h-10 sm:max-w-[180px] md:h-12",
  },
  {
    src: vsfLogo,
    alt: "Villa Sin Fronteras",
    imageClassName: "h-10 max-w-[150px] sm:h-12 sm:max-w-[180px] md:h-14",
  },
  {
    src: cuadraiAppLogo,
    alt: "CuadrAI",
    imageClassName: "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16",
  },
];

const LogoCard = ({
  src,
  alt,
  imageClassName,
  isTelecom,
}: ClientLogo & { isTelecom: boolean }) => (
  <a
    href="#digitalizacion"
    aria-label={`Explorar la estrategia digital para ${alt}`}
    className={`logo-ticker-card group relative flex h-16 min-w-0 items-center justify-center rounded-2xl border bg-transparent px-4 transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020408] sm:h-20 sm:px-5 md:h-24 md:px-6 ${
      isTelecom
        ? "border-white/15 hover:border-amber-400/55 hover:bg-amber-400/[0.04] focus-visible:ring-amber-400/70"
        : "border-white/15 hover:border-cyan-400/55 hover:bg-cyan-400/[0.04] focus-visible:ring-cyan-400/70"
    }`}
  >
    <Image
      src={src}
      alt={alt}
      className={`object-contain opacity-100 brightness-125 contrast-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.12)] transition duration-300 group-hover:scale-105 ${
        imageClassName ?? "h-8 w-auto max-w-[120px] md:h-10"
      }`}
    />
    <ArrowDownRight
      className="absolute bottom-2 right-2 h-3.5 w-3.5 text-white/30 opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:opacity-100"
      aria-hidden="true"
    />
  </a>
);

export const ClientsTicker = ({ mode }: { mode: SiteMode }) => {
  const theme = getModeTheme(mode);
  const clientLogos = theme.isTelecom ? telecomClientLogos : softwareClientLogos;

  return (
    <div
      id="clientes-ticker"
      className="relative shrink-0 border-b border-white/[0.06] bg-transparent px-4 pb-7 pt-6 sm:px-6 sm:pb-8 sm:pt-7"
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${
          theme.isTelecom ? "via-amber-400/30" : "via-cyan-400/25"
        }`}
      />

      <motion.div
        key={mode}
        className="relative z-10 mx-auto w-full max-w-7xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-5 flex flex-col items-center gap-3 text-center sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="max-w-md text-[9px] font-black uppercase leading-relaxed tracking-[0.2em] text-white/50 sm:text-[10px] sm:tracking-[0.26em]">
            {theme.isTelecom
              ? "Operadores e integradores que confían en nosotros"
              : "Empresas que confían en nuestro software"}
          </p>
          <div className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                theme.isTelecom
                  ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                  : "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
              }`}
            />
            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/40 sm:text-[10px] sm:tracking-[0.2em]">
              <span className="sm:hidden">
                {theme.isTelecom ? "Operadores · RAN" : "Empresas · Software"}
              </span>
              <span className="hidden sm:inline">
                {theme.isTelecom
                  ? "Operadores · Integradores · RAN"
                  : "Empresas · Plataformas · Automatización"}
              </span>
            </span>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 ${
            theme.isTelecom ? "lg:grid-cols-5" : "lg:grid-cols-3"
          }`}
          role="list"
          aria-label="Clientes y aliados"
        >
          {clientLogos.map((logo) => (
            <div key={logo.alt} role="listitem">
              <LogoCard {...logo} isTelecom={theme.isTelecom} />
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};
