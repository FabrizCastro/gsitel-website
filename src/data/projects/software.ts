import n8nLogo from "@/assets/logos/n8n logo.png";
import cuadraiAppLogo from "@/assets/logos/cuadrailogo.png";
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
    title: "CUADRAI",
    tag: "Alquiler de canchas",
    description:
      "Plataforma para alquilar canchas deportivas, consultar disponibilidad y gestionar reservas desde una experiencia móvil.",
    detail:
      "CUADRAI es una plataforma de alquiler de canchas deportivas con disponibilidad, reservas y gestión operativa. Fue desarrollada con Python para la lógica de la plataforma y React Native para la experiencia móvil.",
    techTags: ["Python", "React Native"],
    detailImagesKey: "pichangapp",
    highlights: [
      "Disponibilidad de canchas en tiempo real",
      "Reservas desde la app móvil",
      "Gestión operativa de espacios deportivos",
    ],
    image: cuadraiAppLogo,
    imageAlt: "Logo de CUADRAI",
    accent: "#7fb7ff",
  },
];
