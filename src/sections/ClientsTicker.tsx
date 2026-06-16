"use client";
import ascensoresLogo from "@/assets/logos/ascensores-logo.png";
import gsitelServicesLogo from "@/assets/logos/gsitel_services 1.png";
import integratelPeruLogo from "@/assets/logos/integratel_peru.png";
import telefonicaLogo from "@/assets/logos/telefonica-logo.png";
import internetLogo from "@/assets/logos/internettodos-logo.png";
import entelLogo from "@/assets/logos/entel-logo.png";
import vaLogo from "@/assets/logos/va-profesionales.png";
import Image from "next/image";
import vsfLogo from "@/assets/logos/vsf_logo.png";
import { motion } from "framer-motion";

export const ClientsTicker = () => {
  return (
    <div className="relative overflow-hidden bg-white py-8 md:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(250,251,255,0.98)_72%,rgba(240,244,251,0.96)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-transparent to-[#020408]/22" />
      <div className="container relative z-10">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={vaLogo} alt="va Logo" className="logo-ticker-image" />
            <Image
              src={ascensoresLogo}
              alt="Ascensores Logo"
              className="logo-ticker-image"
            />
            <Image
              src={integratelPeruLogo}
              alt="Integratel Perú Logo"
              className="logo-ticker-image"
            />
            <Image
              src={telefonicaLogo}
              alt="Telefónica Logo"
              className="logo-ticker-image"
            />
            <Image
              src={internetLogo}
              alt="Internet Todos Logo"
              className="logo-ticker-image"
            />
            <Image
              src={entelLogo}
              alt="Entel Logo"
              className="logo-ticker-image"
            />
            <Image
              src={vsfLogo}
              alt="Villa Sin Fronteras Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos for animation */}
            <Image src={vaLogo} alt="va Logo" className="logo-ticker-image" />
            <Image
              src={ascensoresLogo}
              alt="Ascensores Logo"
              className="logo-ticker-image"
            />
            <Image
              src={integratelPeruLogo}
              alt="Integratel Perú Logo"
              className="logo-ticker-image"
            />
            <Image
              src={telefonicaLogo}
              alt="Telefónica Logo"
              className="logo-ticker-image"
            />
            <Image
              src={internetLogo}
              alt="Internet Todos Logo"
              className="logo-ticker-image"
            />
            <Image
              src={entelLogo}
              alt="Entel Logo"
              className="logo-ticker-image"
            />
            <Image
              src={vsfLogo}
              alt="Villa Sin Fronteras Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
