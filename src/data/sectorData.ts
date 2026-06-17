import type { DetailConfig } from "@/data/detailConfig";

export const SECTOR_DATA: Record<string, DetailConfig> = {
  Restaurantes: {
    solutions: [
      {
        name: "Menú Digital & Pedidos",
        provider: "GloriaFood",
        link: "https://www.gloriafood.com",
        summary: "Pedidos online y reservas desde tu web sin comisiones.",
      },
      {
        name: "Gestión de Reservas",
        provider: "TheFork",
        link: "https://www.thefork.com",
        summary: "Plataforma de reservas que atrae clientes y organiza mesas.",
      },
      {
        name: "POS & Inventario Cloud",
        provider: "Toast",
        link: "https://www.toasttab.com",
        summary: "POS y gestión de restaurante con reportes e insights.",
      },
      {
        name: "Automatización de Delivery",
        provider: "Flipdish",
        link: "https://www.flipdish.com",
        summary: "Pedidos directos, delivery y marketing en una sola plataforma.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Presencia Digital",
        desc: "Menú QR y perfil en Google Business.",
        iconKey: "globe",
      },
      {
        step: "02",
        title: "Gestión Operativa",
        desc: "Implementación de POS en la nube e inventario.",
        iconKey: "settings",
      },
      {
        step: "03",
        title: "Canal Propio",
        desc: "App de pedidos propia para evitar comisiones altas.",
        iconKey: "smartphone",
      },
      {
        step: "04",
        title: "IA Gastronómica",
        desc: "Predicción de demanda y personalización de ofertas.",
        iconKey: "cpu",
      },
    ],
  },
  Comercio: {
    solutions: [
      {
        name: "E-commerce Omnicanal",
        provider: "Shopify",
        link: "https://www.shopify.com",
        summary: "Crea tu tienda y vende online, social y en físico.",
      },
      {
        name: "ERP para Retail",
        provider: "Odoo",
        link: "https://www.odoo.com",
        summary: "ERP modular que integra ventas, inventario y contabilidad.",
      },
      {
        name: "Pasarela de Pagos Global",
        provider: "Stripe",
        link: "https://www.stripe.com",
        summary: "Pagos online y presenciales con una plataforma unificada.",
      },
      {
        name: "Logística de Última Milla",
        provider: "Shippify",
        link: "https://www.shippify.co",
        summary: "Gestión de entregas con rutas y seguimiento en tiempo real.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Tienda Online",
        desc: "Lanzamiento de catálogo digital y pagos online.",
        iconKey: "shopping-bag",
      },
      {
        step: "02",
        title: "Sincronización",
        desc: "Unificar stock de tienda física y virtual.",
        iconKey: "layers",
      },
      {
        step: "03",
        title: "CRM Retail",
        desc: "Fidelización de clientes y marketing segmentado.",
        iconKey: "users",
      },
      {
        step: "04",
        title: "IA de Ventas",
        desc: "Recomendaciones inteligentes y chatbots de soporte.",
        iconKey: "sparkles",
      },
    ],
  },
  "Estudios Contables": {
    solutions: [
      {
        name: "Gestión Documental",
        provider: "Holded",
        link: "https://www.holded.com",
        summary: "Facturación y gestión en la nube con contabilidad e inventario.",
      },
      {
        name: "Facturación Electrónica",
        provider: "Nubefact",
        link: "https://www.nubefact.com",
        summary: "Factura electrónica SUNAT con integración por API.",
      },
      {
        name: "Contabilidad Automatizada",
        provider: "QuickBooks",
        link: "https://quickbooks.intuit.com",
        summary: "Contabilidad simple para pymes: ingresos, gastos y facturas.",
      },
      {
        name: "Auditoría con IA",
        provider: "MindBridge",
        link: "https://www.mindbridge.ai",
        summary: "IA para detectar riesgos y anomalías en datos financieros.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Cero Papel",
        desc: "Digitalización de todos los archivos y facturas.",
        iconKey: "file-text",
      },
      {
        step: "02",
        title: "Automatización",
        desc: "Sincronización bancaria y asientos automáticos.",
        iconKey: "zap",
      },
      {
        step: "03",
        title: "Portal Cliente",
        desc: "Acceso 24/7 para clientes a sus estados financieros.",
        iconKey: "user-check",
      },
      {
        step: "04",
        title: "Asesoría IA",
        desc: "Análisis predictivo de impuestos y riesgos financieros.",
        iconKey: "brain",
      },
    ],
  },
  Logística: {
    solutions: [
      {
        name: "Optimización de Rutas",
        provider: "Routific",
        link: "https://routific.com",
        summary: "Optimiza rutas, reduce costos y da tracking en vivo.",
      },
      {
        name: "Gestión de Flotas IoT",
        provider: "Samsara",
        link: "https://www.samsara.com",
        summary: "Telemática y gestión de flota con GPS en tiempo real.",
      },
      {
        name: "WMS Inteligente",
        provider: "Oracle NetSuite",
        link: "https://www.netsuite.com",
        summary: "WMS móvil para recibir, almacenar, picking y envíos.",
      },
      {
        name: "Visibilidad de Carga",
        provider: "Project44",
        link: "https://www.project44.com",
        summary: "Visibilidad de envíos con ETAs y alertas proactivas.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Visibilidad",
        desc: "GPS y tracking básico de pedidos en tiempo real.",
        iconKey: "truck",
      },
      {
        step: "02",
        title: "Eficiencia",
        desc: "Algoritmos de optimización de rutas y combustible.",
        iconKey: "bar-chart",
      },
      {
        step: "03",
        title: "Almacén Digital",
        desc: "Control de inventario mediante RFID y escaneo.",
        iconKey: "package",
      },
      {
        step: "04",
        title: "Logística 4.0",
        desc: "Predicción de cuellos de botella mediante IA.",
        iconKey: "activity",
      },
    ],
  },
  Belleza: {
    solutions: [
      {
        name: "Agenda & Reservas",
        provider: "Fresha",
        link: "https://www.fresha.com",
        summary: "Agenda, clientes y pagos en una sola plataforma.",
      },
      {
        name: "Marketing para Salones",
        provider: "Treatwell",
        link: "https://www.treatwell.com",
        summary: "Gestión de reservas y clientes con recordatorios automáticos.",
      },
      {
        name: "Gestión de Clientes",
        provider: "Shedul",
        link: "https://www.shedul.com",
        summary: "Citas online, POS y gestión para salones y spas.",
      },
      {
        name: "Pagos Integrados",
        provider: "Square",
        link: "https://squareup.com",
        summary: "Cobros y POS integrados para servicios y retail.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Reserva 24/7",
        desc: "Habilitar citas online vía Instagram y Web.",
        iconKey: "calendar",
      },
      {
        step: "02",
        title: "Base de Datos",
        desc: "Historial de servicios y preferencias de clientes.",
        iconKey: "users",
      },
      {
        step: "03",
        title: "Marketing Auto",
        desc: "Recordatorios de citas y promos por WhatsApp.",
        iconKey: "message-square",
      },
      {
        step: "04",
        title: "IA Estética",
        desc: "Análisis de tendencias y gestión de stock predictiva.",
        iconKey: "scissors",
      },
    ],
  },
  Marketing: {
    solutions: [
      {
        name: "Inbound Marketing",
        provider: "HubSpot",
        link: "https://www.hubspot.com",
        summary: "CRM con marketing, ventas y servicio en un solo lugar.",
      },
      {
        name: "Generación de Contenido",
        provider: "Jasper AI",
        link: "https://www.jasper.ai",
        summary: "IA para crear y escalar contenido de marketing.",
      },
      {
        name: "Análisis de Datos",
        provider: "GA4",
        link: "https://analytics.google.com",
        summary: "Analítica basada en eventos para web y apps.",
      },
      {
        name: "Gestión de Proyectos",
        provider: "Monday.com",
        link: "https://monday.com",
        summary: "Gestión de proyectos con tableros y automatizaciones.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Centralización",
        desc: "Implementación de CRM para todos los contactos.",
        iconKey: "target",
      },
      {
        step: "02",
        title: "Automatización",
        desc: "Workflows de nutrición de leads y email marketing.",
        iconKey: "workflow",
      },
      {
        step: "03",
        title: "Atribución",
        desc: "Medición exacta del ROI de cada canal digital.",
        iconKey: "pie-chart",
      },
      {
        step: "04",
        title: "Marketing GenAI",
        desc: "Personalización masiva de contenido mediante IA.",
        iconKey: "brain",
      },
    ],
  },
  Salud: {
    solutions: [
      {
        name: "Agenda Médica Online",
        provider: "Doctoralia",
        link: "https://www.doctoralia.pe",
        summary: "Citas, recordatorios y visibilidad para consultorios y clínicas.",
      },
      {
        name: "Historia Clínica Digital",
        provider: "Hosix",
        link: "https://www.hosix.com",
        summary: "Gestión de pacientes, historias clínicas y facturación médica.",
      },
      {
        name: "Facturación Electrónica",
        provider: "Nubefact",
        link: "https://www.nubefact.com",
        summary: "Comprobantes electrónicos integrados con la operación clínica.",
      },
      {
        name: "Telemedicina",
        provider: "Zoom",
        link: "https://zoom.us",
        summary: "Consultas remotas con agenda y pagos integrados.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Expediente Digital",
        desc: "Digitalización de historias clínicas y consentimientos.",
        iconKey: "file-text",
      },
      {
        step: "02",
        title: "Agenda Inteligente",
        desc: "Reservas online, recordatorios y lista de espera.",
        iconKey: "calendar",
      },
      {
        step: "03",
        title: "Portal del Paciente",
        desc: "Resultados, recetas y pagos en un solo acceso.",
        iconKey: "user-check",
      },
      {
        step: "04",
        title: "IA de Apoyo",
        desc: "Triage inicial y análisis de indicadores clínicos.",
        iconKey: "brain",
      },
    ],
  },
  Educación: {
    solutions: [
      {
        name: "Plataforma LMS",
        provider: "Moodle",
        link: "https://moodle.org",
        summary: "Cursos, evaluaciones y seguimiento académico en la nube.",
      },
      {
        name: "Gestión Académica",
        provider: "Canvas",
        link: "https://www.instructure.com/canvas",
        summary: "Matrículas, contenidos y calificaciones centralizadas.",
      },
      {
        name: "Aula Virtual",
        provider: "Google Classroom",
        link: "https://classroom.google.com",
        summary: "Clases, tareas y comunicación con estudiantes.",
      },
      {
        name: "Pagos y Matrículas",
        provider: "Stripe",
        link: "https://www.stripe.com",
        summary: "Cobros de matrículas, cuotas y certificaciones online.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Matrícula Digital",
        desc: "Inscripciones online y pagos automatizados.",
        iconKey: "globe",
      },
      {
        step: "02",
        title: "Aula Virtual",
        desc: "Contenidos, evaluaciones y asistencia centralizada.",
        iconKey: "layers",
      },
      {
        step: "03",
        title: "Comunicación",
        desc: "Notificaciones a padres, alumnos y docentes.",
        iconKey: "message-square",
      },
      {
        step: "04",
        title: "Analítica Educativa",
        desc: "Seguimiento de rendimiento y alertas tempranas.",
        iconKey: "bar-chart",
      },
    ],
  },
  Manufactura: {
    solutions: [
      {
        name: "ERP Industrial",
        provider: "Odoo MRP",
        link: "https://www.odoo.com",
        summary: "Planificación de producción, inventario y órdenes de trabajo.",
      },
      {
        name: "Gestión Empresarial",
        provider: "SAP B1",
        link: "https://www.sap.com",
        summary: "Control de planta, costos y trazabilidad integrada.",
      },
      {
        name: "MES & Producción",
        provider: "Siemens Opcenter",
        link: "https://www.sw.siemens.com",
        summary: "Monitoreo de línea, calidad y eficiencia operativa.",
      },
      {
        name: "Trazabilidad",
        provider: "Project44",
        link: "https://www.project44.com",
        summary: "Visibilidad de insumos, lotes y entregas en cadena.",
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Digitalizar Planta",
        desc: "Registro de producción y control de inventario en tiempo real.",
        iconKey: "settings",
      },
      {
        step: "02",
        title: "Trazabilidad",
        desc: "Lotes, insumos y calidad con códigos y escaneo.",
        iconKey: "package",
      },
      {
        step: "03",
        title: "Mantenimiento",
        desc: "Alertas preventivas y órdenes de trabajo automatizadas.",
        iconKey: "wrench",
      },
      {
        step: "04",
        title: "Manufactura 4.0",
        desc: "Predicción de fallas y optimización de línea con datos.",
        iconKey: "activity",
      },
    ],
  },
};

export const SOFTWARE_SECTORS = [
  { icon: "🍽️", title: "Restaurantes", desc: "Menús QR, Pedidos Online" },
  { icon: "🛍️", title: "Comercio", desc: "E-commerce & Inventario" },
  { icon: "📊", title: "Estudios Contables", desc: "Digitalización Documental" },
  { icon: "🚚", title: "Logística", desc: "Tracking en Tiempo Real" },
  { icon: "✨", title: "Belleza", desc: "Reservas & Agendas" },
  { icon: "📣", title: "Marketing", desc: "CRM & Gestión de Leads" },
  { icon: "🏥", title: "Salud", desc: "Citas & Historia Clínica" },
  { icon: "🎓", title: "Educación", desc: "LMS & Matrículas" },
  { icon: "🏭", title: "Manufactura", desc: "MES & Trazabilidad" },
] as const;
