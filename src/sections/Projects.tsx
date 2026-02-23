"use client";

import entelLogo from "@/assets/logos/entel-logo.png";
import internetTodosLogo from "@/assets/logos/internettodos-logo.png";
import ascensoresLogin from "@/assets/projects/ascensores/loggin.png";
import ascensoresHome from "@/assets/projects/ascensores/home.jpeg";
import ascensoresChart from "@/assets/projects/ascensores/chart.jpeg";
import ascensoresNuevo1 from "@/assets/projects/ascensores/nuevo-1.jpeg";
import ascensoresNuevo2 from "@/assets/projects/ascensores/nuevo-2.jpeg";
import ascensoresNuevo3 from "@/assets/projects/ascensores/nuevo-3.jpeg";
import ascensoresEliminar from "@/assets/projects/ascensores/eliminar.jpeg";
import ascensoresConstructoras from "@/assets/projects/ascensores/constructoras.jpeg";
import ascensoresDistritos from "@/assets/projects/ascensores/distritos.jpeg";
import ascensoresSwagger from "@/assets/projects/ascensores/swagger.jpeg";
import n8nXmlAutomation from "@/assets/projects/n8n/xml-automatization.jpeg";
import n8nXmlResponse from "@/assets/projects/n8n/xml-response.png";
import n8nFactVentas from "@/assets/projects/n8n/fact-ventas-automatization.jpeg";
import n8nFactReport from "@/assets/projects/n8n/factreportresponsegmail.jpeg";
import pichangappOverview from "@/assets/projects/pichangapp/nuevo1c.png";
import pichangappOne from "@/assets/projects/pichangapp/1d.jpeg";
import pichangappB from "@/assets/projects/pichangapp/b.jpeg";
import pichangappC from "@/assets/projects/pichangapp/c.jpeg";
import pichangappE from "@/assets/projects/pichangapp/e.jpeg";
import pichangappF from "@/assets/projects/pichangapp/f.jpeg";
import paginasHero from "@/assets/projects/paginas/hero_vsf.png";
import paginasAbout from "@/assets/projects/paginas/about_vsf.png";
import paginasResults from "@/assets/projects/paginas/results_vsf.png";
import paginasTeam from "@/assets/projects/paginas/team_vsf.png";
import paginasNews from "@/assets/projects/paginas/news_vsf.png";
import paginasContact from "@/assets/projects/paginas/contact_vsf.png";
import mobileAppImage from "@/assets/illustrations/mobileapp.png";
import n8nLogo from "@/assets/logos/n8n logo.png";
import pichangaAppLogo from "@/assets/logos/pichangapplogo.png";
import telradChileLogo from "@/assets/logos/telradchile.png";
import telecomImage from "@/assets/illustrations/telecom.png";
import telefonicaLogo from "@/assets/logos/telefonica-logo.png";
import webAppImage from "@/assets/illustrations/webapp.png";
import CheckIcon from "@/assets/icons/check.svg";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { DotGrid } from "@/components/DotGrid";

type ProjectItem = {
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  image: StaticImageData;
  imageAlt: string;
  accent: string;
  detail?: string;
  techTags?: string[];
  detailImages?: { src: StaticImageData; alt: string }[];
};

const renderTechIcon = (tech: string) => {
  const key = tech.toLowerCase();
  switch (key) {
    case "python":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3c3.314 0 3 2.238 3 2.238v2.32h-6V5.238S9 3 12 3zm3 6.762H9a3 3 0 0 0-3 3v2.5A3 3 0 0 0 9 18h1.2v-2.4H9a.9.9 0 0 1-.9-.9v-2.5a.9.9 0 0 1 .9-.9h6a.9.9 0 0 1 .9.9v.6H18v-.6a3 3 0 0 0-3-3zM12 21c-3.314 0-3-2.238-3-2.238v-2.32h6v2.32S15 21 12 21z"
          />
        </svg>
      );
    case "sql":
    case "mysql":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3C7.582 3 4 4.79 4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7c0-2.21-3.582-4-8-4zm0 2c3.866 0 6 .96 6 2s-2.134 2-6 2-6-.96-6-2 2.134-2 6-2zm0 6c3.866 0 6 .96 6 2s-2.134 2-6 2-6-.96-6-2 2.134-2 6-2zm0 6c3.866 0 6 .96 6 2s-2.134 2-6 2-6-.96-6-2 2.134-2 6-2z"
          />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M5 12c2.5-4.33 11.5-4.33 14 0-2.5 4.33-11.5 4.33-14 0z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M12 5c4.33 2.5 4.33 11.5 0 14-4.33-2.5-4.33-11.5 0-14z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M6.2 7.2c4.2-1.2 8.4 3 7.2 7.2-4.2 1.2-8.4-3-7.2-7.2z"
          />
        </svg>
      );
    case ".net core":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9zm0 3a6 6 0 1 1-6 6 6.01 6.01 0 0 1 6-6zm-1.2 3.5h1.2l2 5h-1.3l-.4-1.1h-1.8l-.4 1.1h-1.3l2-5zm-.2 2.2h1l-.5-1.4z"
          />
        </svg>
      );
    case "n8n":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM7 15a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
          />
          <path
            fill="currentColor"
            d="M9 7h6v2H9zM9 15h6v2H9zM7 9h2v6H7zM15 9h2v6h-2z"
          />
        </svg>
      );
    case "apis":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M8.5 6a3.5 3.5 0 0 0 0 7H11v-2H8.5a1.5 1.5 0 1 1 0-3H11V6H8.5zm4.5 7h2.5a3.5 3.5 0 0 0 0-7H13v2h2.5a1.5 1.5 0 1 1 0 3H13v2z"
          />
          <path
            fill="currentColor"
            d="M9 11h6v2H9z"
          />
        </svg>
      );
    case "ui/ux":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 5h16v10H4zM6 7v6h6V7H6zm8 0v2h4V7h-4zm0 4v2h4v-2h-4zM4 17h7v2H4z"
          />
        </svg>
      );
    case "web design":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 5h16v10H4zM2 17h20v2H2z"
          />
        </svg>
      );
    case "seo":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M10 4a6 6 0 1 0 3.7 10.7l3.9 3.9 1.4-1.4-3.9-3.9A6 6 0 0 0 10 4zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
          />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M8 16l-4-4 4-4 1.4 1.4L6.8 12l2.6 2.6L8 16zm8 0-1.4-1.4L17.2 12l-2.6-2.6L16 8l4 4-4 4z"
          />
        </svg>
      );
    case "spring boot":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4c-3 2-5 5-5 8a5 5 0 0 0 10 0c0-3-2-6-5-8zm-1 6h2v6h-2z"
          />
        </svg>
      );
    case "microservices":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6zM10 10h4v4h-4z"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <circle cx="12" cy="12" r="6" fill="currentColor" />
        </svg>
      );
  }
};

const softwareProjects: ProjectItem[] = [
  {
    title: "Automatización contable con SUNAT",
    tag: "Estudios contables",
    description:
      "Es un sistema integral para controlar operaciones, flujo de caja y reportes con trazabilidad total.",
    detail:
      "Automatización de procesos contables para estudios contables y sus clientes, integrando APIs de SUNAT para extracción de datos de ventas, compras y cobranzas. El sistema permite generar reportes personalizados por cliente, facilitando la validación y ajustes necesarios para una gestión financiera eficiente. Este proyecto ha sido implementado con éxito en varios estudios contables, mejorando significativamente la eficiencia operativa y la precisión en el manejo de información financiera.",
    techTags: ["n8n", "Python", "APIs"],
    detailImages: [
      { src: n8nFactVentas, alt: "Automatización de ventas SUNAT" },
      { src: n8nFactReport, alt: "Reporte automatizado por correo" },
    ],
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
    detail:
      "Es una aplicación que desarrollada en Ascensores S.A.\nSu objetivo fue reemplazar el uso de Microsoft Office y SharePoint en la empresa. Buscábamos integrar herramientas en un software específico y el primer área que migarada fue el departamento de ventas.\n\nMuestra una bandeja personalizada para usuarios de ventas, analizada con los datos necesarios por proyecto. El proyecto también permite agregar y modificar DISTRITOS, PROPIETARIOS y EMPRESAS CONSTRUCTORAS. Este proyecto fue diseñado y aprobado por la Gerencia de Sistemas de Ascensores S.A.",
    techTags: ["React", ".NET Core", "MySQL"],
    detailImages: [
      { src: ascensoresLogin, alt: "Ascensores Tools login" },
      { src: ascensoresHome, alt: "Ascensores Tools home" },
      { src: ascensoresChart, alt: "Ascensores Tools charts" },
      { src: ascensoresNuevo1, alt: "Ascensores Tools nuevo 1" },
      { src: ascensoresNuevo2, alt: "Ascensores Tools nuevo 2" },
      { src: ascensoresNuevo3, alt: "Ascensores Tools nuevo 3" },
      { src: ascensoresEliminar, alt: "Ascensores Tools eliminar" },
      { src: ascensoresConstructoras, alt: "Ascensores Tools constructoras" },
      { src: ascensoresDistritos, alt: "Ascensores Tools distritos" },
      { src: ascensoresSwagger, alt: "Ascensores Tools swagger" },
    ],
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
    detail:
      "Automatizaciones que conectan archivos personales en la nube con APIs dinámicas de diferentes aplicaciones, incluyendo Google y Microsoft.\nEl objetivo es reducir esfuerzos aplicando automatización a tareas diarias rigurosas, integrando lógica de negocio con flujos que pueden automatizarse por módulos.\n\nTransformar un template XML CFGDATA y modificar sus valores internos según la información de un archivo Excel. Esto permite cargar automáticamente los valores requeridos cada vez que se agregan datos en Excel.",
    techTags: ["n8n", "Python", "Code"],
    detailImages: [
      { src: n8nXmlAutomation, alt: "Automatización XML en n8n" },
      { src: n8nXmlResponse, alt: "Respuesta XML procesada" },
    ],
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
    title: "Desarrollo y diseño de páginas web",
    tag: "Web & UX",
    description:
      "Diseño y desarrollo de sitios web modernos, optimizados para conversión, rendimiento y accesibilidad.",
    detail:
      "Página web diseñada para una ONG enfocada en apoyar a la juventud mediante becas deportivas. El sitio comunica su propósito, muestra resultados e historias, y facilita el contacto con potenciales aliados y beneficiarios.\n\nIncluye secciones de impacto, equipo, noticias y formularios de contacto para impulsar la participación comunitaria y las donaciones.",
    techTags: ["UI/UX", "Web Design", "SEO"],
    detailImages: [
      { src: paginasHero, alt: "ONG becas deportivas hero" },
      { src: paginasAbout, alt: "ONG becas deportivas acerca" },
      { src: paginasResults, alt: "ONG becas deportivas resultados" },
      { src: paginasTeam, alt: "ONG becas deportivas equipo" },
      { src: paginasNews, alt: "ONG becas deportivas noticias" },
      { src: paginasContact, alt: "ONG becas deportivas contacto" },
    ],
    highlights: [
      "UI/UX orientado a objetivos",
      "Performance y SEO técnico",
      "Integración con formularios y CRM",
    ],
    image: mobileAppImage,
    imageAlt: "Desarrollo web",
    accent: "#8dbbff",
  },
  {
    title: "Plataforma de alquiler de canchas",
    tag: "Grass sintético",
    description:
      "Sistema de reservas para canchas deportivas con disponibilidad en tiempo real.",
    detail:
      "Plataforma de gestión para canchas deportivas que permite controlar reservas, disponibilidad en tiempo real, pagos y administración de usuarios. Incluye módulos para horarios, pagos y reportes operativos orientados a optimizar la ocupación y la atención al cliente.",
    techTags: ["React", "Spring Boot", "MySQL", "Microservices"],
    detailImages: [
      { src: pichangappOverview, alt: "Plataforma de canchas vista general" },
      { src: pichangappOne, alt: "Reserva de canchas" },
      { src: pichangappB, alt: "Panel de administración" },
      { src: pichangappC, alt: "Gestión de horarios" },
      { src: pichangappE, alt: "Detalle de reservas" },
      { src: pichangappF, alt: "Vista móvil" },
    ],
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

const telecomProjects: ProjectItem[] = [
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
  onOpen,
}: {
  title: string;
  desc: string;
  tags: string[];
  accent: string;
  image: StaticImageData;
  imageAlt: string;
  tag: string;
  onOpen: () => void;
}) => {
  return (
    <article className="group relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/80 p-8 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-md transition-all hover:-translate-y-2 hover:bg-white hover:shadow-[0_32px_80px_rgba(15,23,42,0.2)]">
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(120deg, ${accent}22, transparent 60%)`,
        }}
      />
      <div
        className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accent}66 0%, transparent 70%)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b1d3a]/10 ring-1 ring-white/60 shadow-[0_12px_24px_rgba(15,23,42,0.12)]">
            <Image
              src={image}
              alt={imageAlt}
              className="h-7 w-7 object-contain"
            />
          </div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#0b1d3a]/60">
            {tag}
          </span>
        </div>
        <span
          className="hidden sm:inline-flex h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: accent }}
        />
      </div>
      <h4 className="relative z-10 mt-6 text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight text-[#0b1d3a]">
        {title}
      </h4>
      <div
        className="relative z-10 mt-3 h-1 w-16 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <p className="relative z-10 mt-5 text-base sm:text-lg font-medium leading-relaxed text-[#0b1d3a]/70">
        {desc}
      </p>
      <div className="relative z-10 mt-7 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-2 rounded-2xl border border-[#0b1d3a]/15 bg-white/90 px-4 py-2 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#0b1d3a]/60 transition-colors hover:border-[#2f9edb]/40 hover:text-[#1b5aa6]"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0b1d3a]/10 text-[#1b5aa6]">
              <CheckIcon className="h-3 w-3" />
            </span>
            {tag}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={onOpen}
        className="relative z-10 mt-8 inline-flex items-center gap-4 text-[11px] sm:text-[12px] font-black uppercase tracking-[0.3em] text-[#0b1d3a]/70 hover:text-[#1b5aa6]"
      >
        Ver detalle técnico <span className="text-[#1b5aa6] text-xl">→</span>
      </button>
    </article>
  );
};

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeImage, setActiveImage] = useState<{
    src: StaticImageData;
    alt: string;
  } | null>(null);
  const [projectTrack, setProjectTrack] = useState<"software" | "telecom">(
    "software",
  );
  const activeProjects =
    projectTrack === "software" ? softwareProjects : telecomProjects;
  const handleCloseProject = () => {
    setActiveProject(null);
    setActiveImage(null);
  };

  return (
    <section
      id="proyectos"
      className="relative bg-[#EAEEFE] px-6 pt-20 pb-32 text-[#0b1d3a] scroll-mt-24 md:scroll-mt-28 overflow-hidden"
    >
      <DotGrid
        dotSize={4}
        gap={18}
        baseColor="#9eb3d8"
        activeColor="#2f9edb"
        proximity={140}
        shockRadius={260}
        shockStrength={3}
        resistance={800}
        returnDuration={1.4}
        className="opacity-45"
      />
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
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalle técnico de ${activeProject.title}`}
          onClick={handleCloseProject}
        >
          <div
            className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/15 bg-white p-6 sm:p-10 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1b5aa6]/70">
                  Detalle técnico
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0b1d3a] break-words">
                  {activeProject.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#0b1d3a]/80 whitespace-pre-line">
                  {activeProject.detail ?? activeProject.description}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseProject}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0b1d3a]/20 bg-[#0b1d3a]/5 text-[#0b1d3a] hover:bg-[#0b1d3a]/10"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>
            {activeProject.techTags && activeProject.techTags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {activeProject.techTags.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 rounded-2xl border border-[#0b1d3a]/15 bg-[#f5f7ff] px-4 py-2 text-[11px] font-black uppercase tracking-widest text-[#0b1d3a]/70"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b1d3a]/10 text-[#1b5aa6]">
                      {renderTechIcon(tech)}
                    </span>
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {activeProject.detailImages &&
              activeProject.detailImages.length > 0 && (
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {activeProject.detailImages.map((imageItem) => (
                    <button
                      type="button"
                      onClick={() => setActiveImage(imageItem)}
                      key={imageItem.alt}
                      className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#0b1d3a]/10 bg-[#f5f7ff] focus:outline-none focus:ring-2 focus:ring-[#2f9edb]/60"
                      aria-label={`Ampliar ${imageItem.alt}`}
                    >
                      <Image
                        src={imageItem.src}
                        alt={imageItem.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[#0b1d3a]/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={handleCloseProject}
                className="w-full sm:w-auto rounded-xl border border-[#0b1d3a]/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0b1d3a]/80"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
      {activeImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-[95vw] sm:max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-black/80 p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveImage(null);
              }}
              onMouseDown={(event) => event.stopPropagation()}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20"
              aria-label="Cerrar imagen"
            >
              ✕
            </button>
            <div className="relative z-0 h-[55vh] sm:h-[60vh] w-full">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              {activeImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
