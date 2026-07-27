"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";

import automationFlow from "@/assets/illustrations/hero-automation-flow.png";
import automationOutput from "@/assets/illustrations/hero-automation-output.png";
import crmSystem from "@/assets/illustrations/hero-crm-system.png";
import telecomIntegrations from "@/assets/illustrations/hero-telecom-integrations.png";
import telecomKpis from "@/assets/illustrations/hero-telecom-kpis.png";
import telecomMonitoring from "@/assets/illustrations/hero-telecom-monitoring.png";

const visualCards = [
  {
    alt: "Flujo de automatización conectado",
    className:
      "left-[-10%] top-[-25%] z-20 w-[50%] -rotate-[5deg] sm:w-[50%]",
    image: automationFlow,
  },
  {
    alt: "Integraciones sincronizadas",
    className:
      "bottom-[-12%] right-[-30%] z-20 w-[50%] rotate-[4deg] sm:w-[50%]",
    image: automationOutput,
  },
  {
    alt: "Panel CRM minimalista",
    className:
      "left-[9%] top-[2%] z-0 w-[82%] -rotate-[2deg] sm:w-[100%]",
    image: crmSystem,
  },
];

const telecomVisualCards = [
  
  {
    alt: "Monitoreo de red telecom",
    className: "left-[1%] top-[36%] z-0 w-[50%] -rotate-[5deg] sm:w-[100%]",
    image: telecomMonitoring,
  },
  {
    alt: "Integraciones móviles",
    className: "bottom-[1%] right-[-35%] z-20 w-[50%] rotate-[4deg] sm:w-[50%]",
    image: telecomIntegrations,
  },
  {
    alt: "Panel de KPIs y cobertura telecom",
    className: "left-[-20%] top-[2%] z-20 w-[82%] -rotate-[2deg] sm:w-[50%]",
    image: telecomKpis,
  },
  
  
];

type HeroAutomationShowcaseProps = {
  variant?: "software" | "telecom";
};

export const HeroAutomationShowcase = ({
  variant = "software",
}: HeroAutomationShowcaseProps) => {
  const cards = variant === "telecom" ? telecomVisualCards : visualCards;
  const reduceMotion = useHydratedReducedMotion();

  return (
  <div
    className="relative mx-auto h-[min(250px,70vw)] w-full max-w-[320px] sm:h-[280px] lg:h-[310px] lg:max-h-[310px]"
    aria-label="Automatización, integraciones y CRM"
  >
    <div className="pointer-events-none absolute inset-[8%] rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(29,111,255,0.17),transparent_68%)] blur-2xl" />
    {cards.map((card, index) => (
      <div
        key={card.alt}
        className={`absolute ${card.className}`}
      >
        <motion.div
          className="overflow-hidden rounded-[1.35rem] border border-white/85 bg-white shadow-[0_24px_54px_rgba(28,72,135,0.16)] transition-shadow duration-500 hover:shadow-[0_32px_70px_rgba(28,72,135,0.22)]"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, index % 2 === 0 ? -6 : 5, 0] }
          }
          transition={{
            duration: 7 + index * 0.8,
            delay: index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={reduceMotion ? undefined : { scale: 1.025 }}
        >
          <Image
            src={card.image}
            alt={card.alt}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 380px, 65vw"
            priority={index === 0}
          />
        </motion.div>
      </div>
    ))}
  </div>
  );
};
