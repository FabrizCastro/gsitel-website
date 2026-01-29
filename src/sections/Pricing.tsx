"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import CheckIcon from "@/assets/check.svg";
import entelLogo from "@/assets/entel-logo.png";
import internetTodosLogo from "@/assets/internettodos-logo.png";
import mobileAppImage from "@/assets/mobileapp.png";
import n8nLogo from "@/assets/n8n logo.png";
import pichangaAppLogo from "@/assets/pichangapplogo.png";
import telradChileLogo from "@/assets/telradchile.png";
import telecomImage from "@/assets/telecom.png";
import telefonicaLogo from "@/assets/telefonica-logo.png";
import webAppImage from "@/assets/webapp.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const softwareProjects = [
  {
    title: "Automatización de ventas, compras y cobranzas",
    tag: "Estudios contables",
    description:
      "Sistema integral para controlar operaciones, flujo de caja y reportes con trazabilidad total.",
    highlights: [
      "Flujos end-to-end y conciliación",
      "Reportes financieros automatizados",
      "Integraciones contables y dashboards",
    ],
    image: n8nLogo,
    imageAlt: "n8n logo",
    imageClass:
      "absolute -right-4 -top-4 w-28 opacity-90 sm:w-32 md:w-36 lg:w-40",
    accent: "#7fb7ff",
    gradient: "linear-gradient(135deg,#0b1d3a,#0f274d 55%,#173b6f)",
    glow: "radial-gradient(circle at 20% 20%,rgba(127,183,255,0.25),transparent 60%)",
    patternClass:
      "opacity-35 mix-blend-soft-light [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18)_1px,transparent_1px,transparent_12px)]",
  },
  {
    title: "Aplicaciones web a medida",
    tag: "Plataformas web",
    description:
      "Soluciones web para gestión interna, clientes y procesos con foco en usabilidad y rendimiento.",
    highlights: [
      "Paneles administrativos personalizados",
      "APIs seguras e integraciones",
      "Arquitectura escalable",
    ],
    image: webAppImage,
    imageAlt: "Web app",
    imageClass:
      "absolute -right-0 -top-0 w-10 opacity-90 sm:w-24 md:w-24 lg:w-24",
    accent: "#9ac7ff",
    gradient: "linear-gradient(135deg,#0b1d3a,#122e5a 55%,#1d4b86)",
    glow: "radial-gradient(circle at 70% 15%,rgba(154,199,255,0.28),transparent 60%)",
    patternClass:
      "opacity-35 mix-blend-soft-light [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18)_1px,transparent_1px,transparent_14px)]",
  },
  {
    title: "Automatización para servicios RAN",
    tag: "Telecom",
    description:
      "Herramientas para optimizar y acelerar tareas de redes móviles multivendor.",
    highlights: [
      "Automatización de KPIs y alarmas",
      "Soporte a troubleshooting",
      "Scripts y orquestación operativa",
    ],
    image: telecomImage,
    imageAlt: "Telecom",
    imageClass:
      "absolute -right-0 -top-0 w-28 opacity-90 sm:w-24 md:w-24 lg:w-24",
    accent: "#7fb7ff",
    gradient: "linear-gradient(135deg,#0b1d3a,#11305c 55%,#1a467e)",
    glow: "radial-gradient(circle at 25% 80%,rgba(127,183,255,0.25),transparent 60%)",
    patternClass:
      "opacity-35 mix-blend-soft-light bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] [background-size:22px_22px]",
  },
  {
    title: "Aplicaciones móviles",
    tag: "iOS / Android",
    description:
      "Apps enfocadas en experiencia de usuario, performance y conectividad con servicios back-end.",
    highlights: [
      "Notificaciones y mensajería",
      "Integración con servicios web",
      "Analítica y seguimiento de uso",
    ],
    image: mobileAppImage,
    imageAlt: "Mobile app",
    imageClass:
      "absolute -right-4 -top-4 w-32 opacity-90 sm:w-36 md:w-40 lg:w-40",
    accent: "#8dbbff",
    gradient: "linear-gradient(135deg,#0b1d3a,#10315f 55%,#1a4b8c)",
    glow: "radial-gradient(circle at 70% 75%,rgba(141,187,255,0.25),transparent 60%)",
    patternClass:
      "opacity-35 mix-blend-soft-light [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18)_1px,transparent_1px,transparent_10px)]",
  },
  {
    title: "Plataforma de alquiler de canchas",
    tag: "Grass sintético",
    description:
      "Sistema de reservas para canchas deportivas con disponibilidad en tiempo real.",
    highlights: [
      "Calendario de reservas y pagos",
      "Gestión de clientes y membresías",
      "Reportes de ocupación",
    ],
    image: pichangaAppLogo,
    imageAlt: "Pichanga app",
    imageClass:
      "absolute -right-2 -top-2 w-28 opacity-90 sm:w-32 md:w-36 lg:w-40",
    accent: "#7fb7ff",
    gradient: "linear-gradient(135deg,#0b1d3a,#11305a 55%,#1a4a82)",
    glow: "radial-gradient(circle at 18% 35%,rgba(127,183,255,0.22),transparent 60%)",
    patternClass:
      "opacity-35 mix-blend-soft-light bg-[linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:18px_18px]",
  },
];

const telecomImageClass =
  "absolute right-4 top-4 w-28 opacity-90 sm:w-32 md:w-36 lg:w-40";

const telecomProjects = [
  {
    title: "Refarming 2G/3G/4G banda 850/1900",
    tag: "Telefónica Perú",
    description:
      "Seguimiento y control del refarming con soporte a comisionamiento e integración multivendor.",
    highlights: [
      "Control y seguimiento del proyecto de refarming",
      "Comisionamiento e integración 2G/3G/4G/5G",
      "Procesos ENM/TAISHAN y parametrización",
    ],
    image: telefonicaLogo,
    imageAlt: "Telefónica logo",
    imageClass: telecomImageClass,
    accent: "#8ab4ff",
    gradient: "linear-gradient(130deg,#0b1f3a,#1f3b8b 55%,#2f9edb)",
    glow: "radial-gradient(circle at 20% 20%,rgba(47,158,219,0.55),transparent 60%)",
    patternClass:
      "opacity-30 mix-blend-soft-light [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.2),rgba(255,255,255,0.2)_1px,transparent_1px,transparent_12px)]",
  },
  {
    title: "Eventos RAN Entel Perú",
    tag: "Entel Perú",
    description:
      "Coordinación de implementación e integración para eventos RAN con supervisión de estándar Huawei.",
    highlights: [
      "Supervisión de instalación 2G/3G/4G/5G",
      "Revisiones y pruebas de enrutamiento TX",
      "Monitoreo y validación de servicios RAN",
    ],
    image: entelLogo,
    imageAlt: "Entel logo",
    imageClass: telecomImageClass,
    accent: "#7be0ff",
    gradient: "linear-gradient(130deg,#07253f,#0d5aa5 60%,#36d1dc)",
    glow: "radial-gradient(circle at 70% 15%,rgba(54,209,220,0.45),transparent 60%)",
    patternClass:
      "opacity-25 mix-blend-soft-light [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18)_1px,transparent_1px,transparent_14px)]",
  },
  {
    title: "RAN consolidado Entel Chile",
    tag: "Telrad Chile",
    description:
      "Soporte de comisionamiento e integración en proyecto RAN consolidado.",
    highlights: [
      "Comisionamiento e integración Ericsson 4G-5G",
      "SWAP y Modernización RANCO",
      "Expansión Portadoras AWS, APT e Implementación VOLTE",
    ],
    image: telradChileLogo,
    imageAlt: "Telrad Chile logo",
    imageClass: telecomImageClass,
    accent: "#f7c948",
    gradient: "linear-gradient(130deg,#1a1b4b,#4c2d8f 55%,#8a5bff)",
    glow: "radial-gradient(circle at 25% 80%,rgba(247,201,72,0.35),transparent 60%)",
    patternClass:
      "opacity-30 mix-blend-soft-light bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] [background-size:22px_22px]",
  },
  {
    title: "Puesta ON AIR RAN rural",
    tag: "Internet Para Todos",
    description:
      "Planificación, coordinación y ejecución de estaciones rurales 2G/3G/4G.",
    highlights: [
      "Puesta en servicio de estaciones rurales móviles",
      "Proyectos especiales CRAN y RAN Sharing",
      "Coordinación multivendor Ericsson/Huawei",
      "Soporte Ingeniería RAN y averías OyM NOC",
    ],
    image: internetTodosLogo,
    imageAlt: "Internet Para Todos logo",
    imageClass: telecomImageClass,
    accent: "#62e291",
    gradient: "linear-gradient(130deg,#0b2f2b,#0f6b4b 55%,#26c281)",
    glow: "radial-gradient(circle at 18% 35%,rgba(38,194,129,0.5),transparent 60%)",
    patternClass:
      "opacity-25 mix-blend-soft-light bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:18px_18px]",
  },
  {
    title: "Rollout, expansión y modernización RAN/TX",
    tag: "Entel Perú",
    description:
      "Planificación y ejecución de proyectos de rollout, expansión, swap y modernización RAN/TX.",
    highlights: [
      "Soporte Implementación RAN/TX Huawei",
      "Comisionamiento e Integración BBU5900 2G/3G/4G APT,PCS,AWS,NR 5G",
      "Consultoría Diseño RAN",
    ],
    image: entelLogo,
    imageAlt: "Entel logo",
    imageClass: telecomImageClass,
    accent: "#f2b45b",
    gradient: "linear-gradient(130deg,#2d1b0b,#7a3d0f 55%,#d97706)",
    glow: "radial-gradient(circle at 70% 75%,rgba(217,119,6,0.45),transparent 60%)",
    patternClass:
      "opacity-25 mix-blend-soft-light [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.2),rgba(255,255,255,0.2)_1px,transparent_1px,transparent_10px)]",
  },
];

export const Pricing = () => {
  const [projectTrack, setProjectTrack] = useState<"software" | "telecom">(
    "software",
  );
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const activeProjects =
    projectTrack === "software" ? softwareProjects : telecomProjects;

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) {
      return;
    }

    const centerSecondCard = () => {
      const cards = container.querySelectorAll<HTMLElement>("[data-card]");
      if (cards.length < 2) {
        return;
      }

      const target = cards[1];
      const containerWidth = container.clientWidth;
      const targetWidth = target.offsetWidth;
      const offset = target.offsetLeft - (containerWidth - targetWidth) / 2;

      container.scrollLeft = Math.max(0, offset);
    };

    const raf = requestAnimationFrame(centerSecondCard);
    window.addEventListener("resize", centerSecondCard);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", centerSecondCard);
    };
  }, [projectTrack]);

  const scrollByCard = (direction: number) => {
    const container = scrollerRef.current;
    if (!container) {
      return;
    }

    const firstCard = container.querySelector<HTMLElement>("[data-card]");
    const cardWidth = firstCard?.offsetWidth ?? 520;
    const gap = 32;

    container.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="proyectos"
      className="bg-[#081d3f] py-24 text-white overflow-x-hidden relative scroll-mt-24 md:scroll-mt-28"
    >
      <div className="container">
        <div className="relative flex flex-col items-center text-center">
          <div className="relative inline-flex items-center justify-center">
            <h2 className="text-center text-3xl font-bold tracking-tighter text-white md:text-[54px] md:leading-[60px]">
              Proyectos
            </h2>
          </div>
          <p className="section-description mt-5 text-white/70 text-center">
            Alterna entre proyectos de software y telecom.
          </p>
          <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 text-sm">
            <button
              type="button"
              onClick={() => setProjectTrack("software")}
              className={`rounded-full px-4 py-2 font-semibold transition ${
                projectTrack === "software"
                  ? "bg-white text-[#081d3f] shadow"
                  : "text-white/70 hover:text-white"
              }`}
              aria-pressed={projectTrack === "software"}
            >
              Software
            </button>
            <button
              type="button"
              onClick={() => setProjectTrack("telecom")}
              className={`rounded-full px-4 py-2 font-semibold transition ${
                projectTrack === "telecom"
                  ? "bg-white text-[#081d3f] shadow"
                  : "text-white/70 hover:text-white"
              }`}
              aria-pressed={projectTrack === "telecom"}
            >
              Telecom
            </button>
          </div>
        </div>

        <div className="relative mt-12">
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
            <div
              ref={scrollerRef}
              className="flex gap-8 overflow-x-auto px-6 pb-6 snap-x snap-mandatory scroll-smooth scroll-px-6 md:px-12 md:scroll-px-12 lg:px-20 lg:scroll-px-20 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {activeProjects.map((project) => (
                <article
                  key={project.title}
                  data-card
                  className="group relative w-[82vw] shrink-0 snap-center sm:w-[68vw] lg:w-[44vw]"
                >
                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 px-8 py-10 shadow-[0_18px_60px_rgba(5,8,30,0.6)] md:px-10 md:py-12">
                    <div
                      className="absolute inset-0"
                      style={{ backgroundImage: project.gradient }}
                    />
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{ backgroundImage: project.glow }}
                    />
                    <div
                      className={`absolute inset-0 ${project.patternClass}`}
                    />
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.imageAlt ?? ""}
                        className={`pointer-events-none ${project.imageClass ?? ""}`}
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative z-10">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                        {project.tag}
                      </span>
                      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-base text-white/80 md:text-lg">
                        {project.description}
                      </p>
                      <ul className="mt-6 grid gap-3 text-sm text-white/85">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3"
                          >
                            <span
                              className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/10"
                              style={{ color: project.accent }}
                            >
                              <CheckIcon className="h-4 w-4" />
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Ver proyecto anterior"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Ver siguiente proyecto"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
