import n8nLogo from "@/assets/logos/n8n logo.png";
import pichangaAppLogo from "@/assets/logos/pichangapplogo.png";
import mobileAppImage from "@/assets/illustrations/mobileapp.png";
import webAppImage from "@/assets/illustrations/webapp.png";
import type { ProjectCardData } from "@/data/projects/types";

export const softwareProjects: ProjectCardData[] = [
  {
    id: "sunat",
    title: "Automatización contable con SUNAT",
    tag: "Estudios contables",
    description:
      "Sistema integral para controlar operaciones, flujo de caja y reportes con trazabilidad total.",
    detail:
      "Automatización de procesos contables para estudios contables y sus clientes, integrando APIs de SUNAT para extraer datos de ventas, compras y cobranzas. El sistema permite generar reportes personalizados por cliente y facilita validaciones y ajustes para una gestión financiera eficiente.",
    techTags: ["n8n", "Python", "APIs"],
    detailImagesKey: "sunat",
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
    id: "ascensores",
    title: "Aplicaciones web a medida",
    tag: "Plataformas web",
    description:
      "Soluciones web para gestión interna, clientes y procesos con foco en usabilidad y rendimiento.",
    detail:
      "Aplicación desarrollada para Ascensores S.A. con el objetivo de reemplazar procesos dispersos en Microsoft Office y SharePoint. El sistema unificó información comercial, seguimiento por proyecto y catálogos operativos en una sola herramienta.",
    techTags: ["React", ".NET Core", "MySQL"],
    detailImagesKey: "ascensores",
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
    id: "ong",
    title: "Diseño y desarrollo web",
    tag: "Web & UX",
    description:
      "Sitios modernos optimizados para conversión, rendimiento y accesibilidad.",
    detail:
      "Página web diseñada para una ONG enfocada en apoyar a la juventud mediante becas deportivas. El sitio comunica propósito, muestra resultados e historias, y facilita el contacto con aliados y beneficiarios.",
    techTags: ["UI/UX", "Web Design", "SEO"],
    detailImagesKey: "ong",
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
    id: "pichangapp",
    title: "Plataforma de alquiler de canchas",
    tag: "Reservas online",
    description:
      "Sistema de reservas con disponibilidad en tiempo real, pagos y control operativo.",
    detail:
      "Plataforma de gestión para canchas deportivas que permite controlar reservas, disponibilidad en tiempo real, pagos y administración de usuarios. Incluye módulos para horarios, pagos y reportes operativos.",
    techTags: ["React", "Spring Boot", "MySQL", "Microservices"],
    detailImagesKey: "pichangapp",
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
