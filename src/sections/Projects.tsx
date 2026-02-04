"use client";

import entelLogo from "@/assets/entel-logo.png";
import internetTodosLogo from "@/assets/internettodos-logo.png";
import mobileAppImage from "@/assets/mobileapp.png";
import n8nLogo from "@/assets/n8n logo.png";
import pichangaAppLogo from "@/assets/pichangapplogo.png";
import telradChileLogo from "@/assets/telradchile.png";
import telecomImage from "@/assets/telecom.png";
import telefonicaLogo from "@/assets/telefonica-logo.png";
import webAppImage from "@/assets/webapp.png";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

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
    accent: "#7fb7ff",
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
    accent: "#9ac7ff",
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
    accent: "#7fb7ff",
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
    accent: "#8dbbff",
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
    accent: "#7fb7ff",
  },
];

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
    accent: "#8ab4ff",
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
    accent: "#7be0ff",
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
    accent: "#f7c948",
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
    accent: "#62e291",
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
    accent: "#f2b45b",
  },
];

const ProjectCard = ({
  title,
  desc,
  tags,
  accent,
  image,
  imageAlt,
  tag,
}: {
  title: string;
  desc: string;
  tags: string[];
  accent: string;
  image: StaticImageData;
  imageAlt: string;
  tag: string;
}) => {
  return (
    <article className="group relative overflow-hidden rounded-[2.5rem] border border-[#0b1d3a]/15 bg-white/80 p-10 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-md transition-all hover:-translate-y-3 hover:bg-white">
      <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#2f9edb] to-[#1b5aa6]" />
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b1d3a]/10">
          <Image
            src={image}
            alt={imageAlt}
            className="h-7 w-7 object-contain"
          />
        </div>
        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#0b1d3a]/60">
          {tag}
        </span>
      </div>
      <h4
        className="mt-6 text-3xl font-black uppercase tracking-tight leading-none text-[#0b1d3a]"
        style={{ color: accent }}
      >
        {title}
      </h4>
      <p className="mt-6 text-lg font-medium leading-relaxed text-[#0b1d3a]/70">
        {desc}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-2xl border border-[#0b1d3a]/15 bg-white px-5 py-2 text-[11px] font-black uppercase tracking-widest text-[#0b1d3a]/60 transition-colors hover:border-[#2f9edb]/40 hover:text-[#1b5aa6]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-10 flex items-center gap-4 text-[12px] font-black uppercase tracking-[0.4em] text-[#0b1d3a]/70">
        Ver detalle técnico <span className="text-[#1b5aa6] text-xl">→</span>
      </div>
    </article>
  );
};

export const Projects = () => {
  const [projectTrack, setProjectTrack] = useState<"software" | "telecom">(
    "software",
  );
  const activeProjects =
    projectTrack === "software" ? softwareProjects : telecomProjects;

  return (
    <section
      id="proyectos"
      className="relative bg-[#EAEEFE] px-6 pt-20 pb-32 text-[#0b1d3a] scroll-mt-24 md:scroll-mt-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex justify-center">
          <div className="tag mb-6">Proyectos</div>
        </div>
        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="section-title mb-6 text-left text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] break-words">
              Historial de éxito
            </h2>
            <p className="max-w-2xl text-xl font-medium tracking-wide text-slate-500">
              Resultados tangibles entregados a líderes de la industria bajo
              estándares internacionales.
            </p>
          </div>
          <div className="flex items-end justify-center lg:col-span-4 lg:justify-end">
            <div className="flex rounded-2xl border border-[#0b1d3a]/10 bg-[#0b1d3a]/5 p-2 backdrop-blur-xl">
              <button
                role="tab"
                aria-selected={projectTrack === "software"}
                onClick={() => setProjectTrack("software")}
                className={`px-10 py-5 text-xs font-black uppercase tracking-widest transition-all ${
                  projectTrack === "software"
                    ? "rounded-xl bg-gradient-to-r from-[#2f9edb] to-[#1b5aa6] text-white shadow-lg shadow-cyan-500/20"
                    : "text-slate-500 hover:text-[#0b1d3a]"
                }`}
              >
                Software
              </button>
              <button
                role="tab"
                aria-selected={projectTrack === "telecom"}
                onClick={() => setProjectTrack("telecom")}
                className={`px-10 py-5 text-xs font-black uppercase tracking-widest transition-all ${
                  projectTrack === "telecom"
                    ? "rounded-xl bg-gradient-to-r from-[#2f9edb] to-[#1b5aa6] text-white shadow-lg shadow-cyan-500/20"
                    : "text-slate-500 hover:text-[#0b1d3a]"
                }`}
              >
                Telecom
              </button>
            </div>
          </div>
        </div>

        <div className="mt-32 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {activeProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.description}
              tags={project.highlights}
              accent={project.accent}
              image={project.image}
              imageAlt={project.imageAlt}
              tag={project.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
