"use client";

import ascensoresLogo from "@/assets/logos/ascensores-logo.png";
import integratelPeruLogo from "@/assets/logos/integratel_peru.png";
import pichangaAppLogo from "@/assets/logos/pichangapplogo.png";
import telefonicaLogo from "@/assets/logos/telefonica-logo.png";
import internetLogo from "@/assets/logos/internettodos-logo.png";
import entelLogo from "@/assets/logos/entel-logo.png";
import telradChileLogo from "@/assets/logos/telradchile.png";
import vaLogo from "@/assets/logos/va-profesionales.png";
import vsfLogo from "@/assets/logos/vsf_logo.png";
import { getModeTheme } from "@/lib/modeTheme";
import type { SiteMode } from "@/lib/siteMode";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

type ClientLogo = {
  src: StaticImageData;
  alt: string;
};

const telecomClientLogos: ClientLogo[] = [
  { src: telefonicaLogo, alt: "Telefónica" },
  { src: entelLogo, alt: "Entel" },
  { src: internetLogo, alt: "Internet para Todos" },
  { src: integratelPeruLogo, alt: "Integratel Perú" },
  { src: telradChileLogo, alt: "Telrad Chile" },
];

const softwareClientLogos: ClientLogo[] = [
  { src: ascensoresLogo, alt: "Ascensores" },
  { src: vaLogo, alt: "V&A Profesionales" },
  { src: vsfLogo, alt: "Villa Sin Fronteras" },
  { src: pichangaAppLogo, alt: "Pichanga App" },
];

const LogoCard = ({
  src,
  alt,
  isTelecom,
}: ClientLogo & { isTelecom: boolean }) => (
  <div
    className={`logo-ticker-card group flex h-12 w-32 shrink-0 items-center justify-center rounded-xl border bg-white px-4 shadow-[0_4px_18px_rgba(0,0,0,0.25)] transition duration-300 sm:h-14 sm:w-40 sm:px-5 md:h-16 md:w-44 ${
      isTelecom
        ? "border-white/15 hover:border-amber-400/40 hover:shadow-[0_8px_24px_rgba(243,156,54,0.2)]"
        : "border-white/15 hover:border-[#2f9edb]/40 hover:shadow-[0_8px_24px_rgba(47,158,219,0.2)]"
    }`}
  >
    <Image
      src={src}
      alt={alt}
      className="h-7 w-auto max-w-[96px] object-contain opacity-90 transition duration-300 group-hover:opacity-100 sm:h-8 sm:max-w-[120px] md:h-9"
    />
  </div>
);

export const ClientsTicker = ({ mode }: { mode: SiteMode }) => {
  const theme = getModeTheme(mode);
  const clientLogos = theme.isTelecom ? telecomClientLogos : softwareClientLogos;
  const marqueeItems = [...clientLogos, ...clientLogos];

  return (
    <div
      id="clientes-ticker"
      className="relative shrink-0 border-b border-white/[0.06] bg-transparent px-4 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-7"
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
        <div className="mb-4 flex flex-col items-center gap-2 text-center sm:mb-5 sm:flex-row sm:items-center sm:justify-between sm:text-left">
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

        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="flex gap-3 pr-3 sm:gap-4 sm:pr-4 md:gap-5"
            animate={{ translateX: "-50%" }}
            initial={{ translateX: "0%" }}
            transition={{
              duration: theme.isTelecom ? 34 : 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {marqueeItems.map((logo, index) => (
              <LogoCard
                key={`${logo.alt}-${index}`}
                {...logo}
                isTelecom={theme.isTelecom}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
