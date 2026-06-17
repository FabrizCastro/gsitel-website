import type { DetailConfig } from "@/data/detailConfig";

export const TELECOM_CAPABILITY_DATA: Record<string, DetailConfig> = {
  "Rollout RAN": {
    solutions: [
      {
        name: "Comisionamiento BBU",
        provider: "Huawei / Ericsson",
        link: "https://www.huawei.com",
        summary: "Puesta en marcha de BBU multivendor con validación de servicios.",
      },
      {
        name: "Integración Multivendor",
        provider: "Nokia / ZTE",
        link: "https://www.nokia.com",
        summary: "Integración de nodos RAN 2G/3G/4G/5G en redes heterogéneas.",
      },
      {
        name: "Puesta ON AIR",
        provider: "GSITEL",
        link: "#contacto",
        summary: "Coordinación de sites, checklists y validación de puesta en servicio.",
      },
      {
        name: "Parametrización RAN",
        provider: "U2020 / ENM",
        link: "#contacto",
        summary: "Scripts, plantillas y validación de parámetros por vendor.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Site Survey",
        desc: "Relevamiento de sitio, accesos y condiciones de instalación.",
        iconKey: "globe",
      },
      {
        step: "02",
        title: "Instalación",
        desc: "Montaje de equipos, alimentación y conectividad.",
        iconKey: "settings",
      },
      {
        step: "03",
        title: "Integración",
        desc: "Comisionamiento BBU, rutas y pruebas de servicio.",
        iconKey: "radio",
      },
      {
        step: "04",
        title: "Validación ON AIR",
        desc: "Pruebas finales, KPIs iniciales y entrega operativa.",
        iconKey: "signal",
      },
    ],
  },
  Transmisión: {
    solutions: [
      {
        name: "Diseño de Rutas TX",
        provider: "GSITEL",
        link: "#contacto",
        summary: "Planificación de enlaces MW y fibra con validación de capacidad.",
      },
      {
        name: "Enlaces Microondas",
        provider: "Huawei / Ceragon",
        link: "https://www.huawei.com",
        summary: "Despliegue y alineación de enlaces punto a punto.",
      },
      {
        name: "Validación de Capacidad",
        provider: "Atoll / Planet",
        link: "#contacto",
        summary: "Simulación y verificación de rutas y redundancia.",
      },
      {
        name: "Aceptación de Enlaces",
        provider: "GSITEL",
        link: "#contacto",
        summary: "Pruebas de throughput, BER y documentación de entrega.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Relevamiento",
        desc: "Site survey de torres, línea de vista y restricciones.",
        iconKey: "globe",
      },
      {
        step: "02",
        title: "Diseño",
        desc: "Rutas, frecuencias y plan de redundancia.",
        iconKey: "layers",
      },
      {
        step: "03",
        title: "Implementación",
        desc: "Instalación, alineación y pruebas de enlace.",
        iconKey: "radio",
      },
      {
        step: "04",
        title: "Aceptación",
        desc: "Validación de capacidad y documentación de entrega.",
        iconKey: "user-check",
      },
    ],
  },
  Optimización: {
    solutions: [
      {
        name: "Análisis de Degradación",
        provider: "U2020 / ENM",
        link: "#contacto",
        summary: "Identificación de celdas y sectores con KPIs fuera de umbral.",
      },
      {
        name: "Tuning de Parámetros",
        provider: "GSITEL",
        link: "#contacto",
        summary: "Ajuste de parámetros RAN para mejorar cobertura y calidad.",
      },
      {
        name: "Benchmarking RF",
        provider: "TEMS / NEMO",
        link: "#contacto",
        summary: "Mediciones comparativas antes y después de optimización.",
      },
      {
        name: "SON & Automatización",
        provider: "Vendor OSS",
        link: "#contacto",
        summary: "Reglas automáticas para balanceo y mitigación de interferencia.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Baseline",
        desc: "Captura de KPIs y mapas de cobertura actuales.",
        iconKey: "bar-chart",
      },
      {
        step: "02",
        title: "Análisis",
        desc: "Identificación de degradaciones y cuellos de botella.",
        iconKey: "gauge",
      },
      {
        step: "03",
        title: "Ajuste",
        desc: "Tuning de parámetros y validación en campo.",
        iconKey: "settings",
      },
      {
        step: "04",
        title: "Monitoreo",
        desc: "Seguimiento continuo de KPIs y alarmas.",
        iconKey: "activity",
      },
    ],
  },
  "Drive Test": {
    solutions: [
      {
        name: "Mediciones RF",
        provider: "TEMS",
        link: "#contacto",
        summary: "Drive test y walk test con reportes de cobertura y calidad.",
      },
      {
        name: "Site Survey",
        provider: "GSITEL",
        link: "#contacto",
        summary: "Relevamiento de sitios con documentación fotográfica y GPS.",
      },
      {
        name: "Reportes Automatizados",
        provider: "GSITEL",
        link: "#contacto",
        summary: "Generación batch de reportes RF y comparativas.",
      },
      {
        name: "Validación Post-Swap",
        provider: "NEMO",
        link: "#contacto",
        summary: "Verificación de KPIs tras modernización o refarming.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Planificación",
        desc: "Rutas, escenarios y métricas a medir.",
        iconKey: "clipboard-list",
      },
      {
        step: "02",
        title: "Ejecución",
        desc: "Mediciones en campo con equipos calibrados.",
        iconKey: "truck",
      },
      {
        step: "03",
        title: "Análisis",
        desc: "Procesamiento de logs y mapas de calor.",
        iconKey: "bar-chart",
      },
      {
        step: "04",
        title: "Entrega",
        desc: "Reportes ejecutivos y plan de acción.",
        iconKey: "file-text",
      },
    ],
  },
  "Soporte OyM": {
    solutions: [
      {
        name: "NOC 24/7",
        provider: "GSITEL",
        link: "#contacto",
        summary: "Monitoreo proactivo de alarmas y escalamiento multivendor.",
      },
      {
        name: "Gestión de Averías",
        provider: "GSITEL",
        link: "#contacto",
        summary: "Troubleshooting remoto y coordinación de campo.",
      },
      {
        name: "Escalamiento Multivendor",
        provider: "Huawei / Ericsson / Nokia",
        link: "#contacto",
        summary: "Coordinación con TAC y proveedores para resolución.",
      },
      {
        name: "Post-Mortem",
        provider: "GSITEL",
        link: "#contacto",
        summary: "Análisis de causa raíz y acciones preventivas.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Monitoreo",
        desc: "Dashboards de alarmas y KPIs en tiempo real.",
        iconKey: "gauge",
      },
      {
        step: "02",
        title: "Diagnóstico",
        desc: "Análisis remoto y clasificación de incidencias.",
        iconKey: "brain",
      },
      {
        step: "03",
        title: "Resolución",
        desc: "Coordinación de campo y validación de servicio.",
        iconKey: "wrench",
      },
      {
        step: "04",
        title: "Post-Mortem",
        desc: "Documentación y mejora de procesos OyM.",
        iconKey: "clipboard-list",
      },
    ],
  },
  Automatización: {
    solutions: [
      {
        name: "Scripts CIQ/XML",
        provider: "GSITEL",
        link: "#contacto",
        summary: "Generación y validación de scripts de configuración masiva.",
      },
      {
        name: "Reportes Batch",
        provider: "Python / OSS",
        link: "#contacto",
        summary: "Extracción automatizada de KPIs y alarmas.",
      },
      {
        name: "Integración OSS",
        provider: "U2020 / ENM / NetAct",
        link: "#contacto",
        summary: "Conexión entre herramientas de gestión y reporting.",
      },
      {
        name: "Workflows Operativos",
        provider: "GSITEL",
        link: "#contacto",
        summary: "Automatización de tareas repetitivas de ingeniería.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Mapeo",
        desc: "Identificación de procesos manuales repetitivos.",
        iconKey: "clipboard-list",
      },
      {
        step: "02",
        title: "Scripts",
        desc: "Desarrollo de automatizaciones y plantillas.",
        iconKey: "zap",
      },
      {
        step: "03",
        title: "Validación",
        desc: "Pruebas en entorno controlado antes de producción.",
        iconKey: "user-check",
      },
      {
        step: "04",
        title: "Operación",
        desc: "Despliegue, monitoreo y mejora continua.",
        iconKey: "workflow",
      },
    ],
  },
};

export const TELECOM_CAPABILITIES = [
  { icon: "5G", title: "Rollout RAN", desc: "Sites, BBU y puesta ON AIR" },
  { icon: "TX", title: "Transmisión", desc: "Rutas, enlaces y validación" },
  { icon: "KPI", title: "Optimización", desc: "KPIs, alarmas y performance" },
  { icon: "DT", title: "Drive Test", desc: "Site survey y mediciones" },
  { icon: "OyM", title: "Soporte OyM", desc: "NOC, averias y monitoreo" },
  { icon: "AUTO", title: "Automatización", desc: "Scripts, XML y reportes" },
] as const;

export const SOFTWARE_PHASE2_FEATURES = [
  {
    title: "Orquestación con Workflows",
    desc: "Conectamos tus herramientas (n8n, Make, APIs) en flujos automáticos sin errores.",
  },
  {
    title: "Inteligencia Artificial Aplicada",
    desc: "Modelos de IA para análisis predictivo, chatbots expertos y visión computacional.",
  },
  {
    title: "Dashboards de Misión Crítica",
    desc: "Visualización de KPIs en tiempo real para decisiones basadas en datos.",
  },
] as const;

export const TELECOM_PHASE2_FEATURES = [
  {
    title: "Correlación de Alarmas NOC",
    desc: "Agrupamos alarmas, priorizamos incidencias y reducimos tiempos de respuesta en operación.",
  },
  {
    title: "Dashboards KPI Multivendor",
    desc: "Visibilidad en tiempo real desde U2020, ENM y plataformas OSS en un solo panel.",
  },
  {
    title: "Reportes Automatizados RF",
    desc: "Generación batch de drive test, site survey y entregables CIQ/XML sin trabajo manual.",
  },
  {
    title: "Optimización y Troubleshooting RAN",
    desc: "Tuning de parámetros, análisis de degradación y soporte a redes de misión crítica.",
  },
] as const;
