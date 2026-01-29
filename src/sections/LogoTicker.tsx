"use client";
import ascensoresLogo from "@/assets/ascensores-logo.png";
import gsitelServicesLogo from "@/assets/gsitel_services 1.png";
import integratelPeruLogo from "@/assets/integratel_peru.png";
import telefonicaLogo from "@/assets/telefonica-logo.png";
import internetLogo from "@/assets/internettodos-logo.png";
import entelLogo from "@/assets/entel-logo.png";
import vaLogo from "@/assets/va-profesionales.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};
