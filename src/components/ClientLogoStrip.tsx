import cuadraiAppLogo from "@/assets/logos/cuadrailogo.png";
import entelLogo from "@/assets/logos/entel-logo.png";
import integratelPeruLogo from "@/assets/logos/integratel_peru.png";
import internetLogo from "@/assets/logos/internettodos-logo.png";
import telradChileLogo from "@/assets/logos/telradchile.png";
import telefonicaLogo from "@/assets/logos/telefonica-logo.png";
import vaLogo from "@/assets/logos/va-profesionales.png";
import vsfLogo from "@/assets/logos/vsf_logo.png";
import type { SiteMode } from "@/lib/siteMode";
import Image, { type StaticImageData } from "next/image";

type ClientLogo = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

const softwareLogos: ClientLogo[] = [
  { src: vaLogo, alt: "V&A Profesionales", className: "h-8 max-w-[115px] sm:h-9 sm:max-w-[135px]" },
  { src: vsfLogo, alt: "Villa Sin Fronteras", className: "h-9 max-w-[115px] sm:h-10 sm:max-w-[135px]" },
  { src: cuadraiAppLogo, alt: "CuadrAI", className: "h-10 w-10 sm:h-11 sm:w-11" },
];

const telecomLogos: ClientLogo[] = [
  { src: telefonicaLogo, alt: "Telefónica" },
  { src: entelLogo, alt: "Entel" },
  { src: internetLogo, alt: "Internet para Todos" },
  { src: integratelPeruLogo, alt: "Integratel Perú" },
  { src: telradChileLogo, alt: "Telrad Chile" },
];

export const ClientLogoStrip = ({ mode }: { mode: SiteMode }) => {
  const logos = mode === "telecom" ? telecomLogos : softwareLogos;

  return (
    <div className="relative z-20 mx-auto mt-10 w-full max-w-7xl border-t border-[#0b1d3a]/10 pt-6 sm:mt-12 sm:pt-7">
      <div className="mx-auto flex w-fit items-center gap-3">
        <span className="h-px w-7 bg-[#0b1d3a]/20" aria-hidden="true" />
        <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#0b1d3a]/60">
          Empresas que confían en nosotros
        </p>
        <span className="h-px w-7 bg-[#0b1d3a]/20" aria-hidden="true" />
      </div>

      <div
        className={`mx-auto mt-5 grid max-w-5xl items-center gap-x-7 gap-y-5 sm:mt-6 ${
          mode === "telecom" ? "grid-cols-3 sm:grid-cols-5" : "grid-cols-3"
        }`}
        aria-label="Empresas que confían en GSITEL"
      >
        {logos.map((logo) => (
          <div key={logo.alt} className="group flex h-10 items-center justify-center sm:h-12">
            <Image
              src={logo.src}
              alt={logo.alt}
              className={`w-auto object-contain grayscale opacity-55 transition duration-500 group-hover:-translate-y-0.5 group-hover:grayscale-0 group-hover:opacity-100 ${
                logo.className ?? "h-7 max-w-[100px] sm:h-8 sm:max-w-[120px]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
