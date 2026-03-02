"use client";

import {
  Globe,
  Settings,
  Smartphone,
  Cpu,
  ShoppingBag,
  Layers,
  Users,
  Sparkles,
  FileText,
  Zap,
  UserCheck,
  Brain,
  Truck,
  BarChart3,
  Package,
  Activity,
  Scissors,
  Calendar,
  MessageSquare,
  Target,
  Workflow,
  PieChart,
} from "lucide-react";
import { type ReactNode, useMemo, useState } from "react";

type SectorConfig = {
  solutions: {
    name: string;
    provider: string;
    link: string;
    summary: string;
  }[];
  roadmap: {
    step: string;
    title: string;
    desc: string;
    icon: ReactNode;
  }[];
};

const SECTOR_DATA: Record<string, SectorConfig> = {
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
        icon: <Globe className="h-5 w-5" />,
      },
      {
        step: "02",
        title: "Gestión Operativa",
        desc: "Implementación de POS en la nube e inventario.",
        icon: <Settings className="h-5 w-5" />,
      },
      {
        step: "03",
        title: "Canal Propio",
        desc: "App de pedidos propia para evitar comisiones altas.",
        icon: <Smartphone className="h-5 w-5" />,
      },
      {
        step: "04",
        title: "IA Gastronómica",
        desc: "Predicción de demanda y personalización de ofertas.",
        icon: <Cpu className="h-5 w-5" />,
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
        icon: <ShoppingBag className="h-5 w-5" />,
      },
      {
        step: "02",
        title: "Sincronización",
        desc: "Unificar stock de tienda física y virtual.",
        icon: <Layers className="h-5 w-5" />,
      },
      {
        step: "03",
        title: "CRM Retail",
        desc: "Fidelización de clientes y marketing segmentado.",
        icon: <Users className="h-5 w-5" />,
      },
      {
        step: "04",
        title: "IA de Ventas",
        desc: "Recomendaciones inteligentes y chatbots de soporte.",
        icon: <Sparkles className="h-5 w-5" />,
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
        icon: <FileText className="h-5 w-5" />,
      },
      {
        step: "02",
        title: "Automatización",
        desc: "Sincronización bancaria y asientos automáticos.",
        icon: <Zap className="h-5 w-5" />,
      },
      {
        step: "03",
        title: "Portal Cliente",
        desc: "Acceso 24/7 para clientes a sus estados financieros.",
        icon: <UserCheck className="h-5 w-5" />,
      },
      {
        step: "04",
        title: "Asesoría IA",
        desc: "Análisis predictivo de impuestos y riesgos financieros.",
        icon: <Brain className="h-5 w-5" />,
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
        icon: <Truck className="h-5 w-5" />,
      },
      {
        step: "02",
        title: "Eficiencia",
        desc: "Algoritmos de optimización de rutas y combustible.",
        icon: <BarChart3 className="h-5 w-5" />,
      },
      {
        step: "03",
        title: "Almacén Digital",
        desc: "Control de inventario mediante RFID y escaneo.",
        icon: <Package className="h-5 w-5" />,
      },
      {
        step: "04",
        title: "Logística 4.0",
        desc: "Predicción de cuellos de botella mediante IA.",
        icon: <Activity className="h-5 w-5" />,
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
        icon: <Calendar className="h-5 w-5" />,
      },
      {
        step: "02",
        title: "Base de Datos",
        desc: "Historial de servicios y preferencias de clientes.",
        icon: <Users className="h-5 w-5" />,
      },
      {
        step: "03",
        title: "Marketing Auto",
        desc: "Recordatorios de citas y promos por WhatsApp.",
        icon: <MessageSquare className="h-5 w-5" />,
      },
      {
        step: "04",
        title: "IA Estética",
        desc: "Análisis de tendencias y gestión de stock predictiva.",
        icon: <Scissors className="h-5 w-5" />,
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
        icon: <Target className="h-5 w-5" />,
      },
      {
        step: "02",
        title: "Automatización",
        desc: "Workflows de nutrición de leads y email marketing.",
        icon: <Workflow className="h-5 w-5" />,
      },
      {
        step: "03",
        title: "Atribución",
        desc: "Medición exacta del ROI de cada canal digital.",
        icon: <PieChart className="h-5 w-5" />,
      },
      {
        step: "04",
        title: "Marketing GenAI",
        desc: "Personalización masiva de contenido mediante IA.",
        icon: <Brain className="h-5 w-5" />,
      },
    ],
  },
};

export const DigitalTransformation = () => {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [isSectorModalOpen, setIsSectorModalOpen] = useState(false);

  const activeSector = useMemo(() => {
    if (!selectedSector) {
      return null;
    }

    return {
      label: selectedSector,
      ...SECTOR_DATA[selectedSector],
    };
  }, [selectedSector]);

  return (
    <section
      id="digitalizacion"
      className="py-32 sm:py-40 px-6 bg-[#020408] relative overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 sm:mb-28 gap-12">
          <div className="section-heading max-w-3xl">
            <div className="flex justify-center lg:justify-start">
              <div className="tag border-white/15 text-white/80 bg-white/5">
                Estrategia de Crecimiento
              </div>
            </div>
            <h2 className="mt-5 text-left text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.95] break-words bg-gradient-to-b from-white to-[#7fb7ff] text-transparent bg-clip-text">
              Transformación inteligente
            </h2>
            <p className="mt-5 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-slate-400">
              Desde el primer paso digital hasta la optimización con IA.
              Acompañamos tu negocio en cada etapa de su evolución tecnológica.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="rounded-[3rem] border border-cyan-500/20 bg-white/[0.02] backdrop-blur-xl p-8 sm:p-12 md:p-16 transition-all hover:border-cyan-500/40">
            <div className="flex items-center gap-5 mb-10">
              <div className="h-16 w-16 sm:h-20 sm:w-20 bg-cyan-500 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter">
                  FASE 01: INICIAR
                </h3>
                <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Digitalización Integral
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed">
              Llevamos tu operación física al entorno digital. Ideal para
              negocios que buscan modernizar su atención y gestión interna.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <SectorItem
                icon="🍽️"
                title="Restaurantes"
                desc="Menús QR, Pedidos Online"
                onClick={() => {
                  setSelectedSector("Restaurantes");
                  setIsSectorModalOpen(true);
                }}
              />
              <SectorItem
                icon="🛍️"
                title="Comercio"
                desc="E-commerce & Inventario"
                onClick={() => {
                  setSelectedSector("Comercio");
                  setIsSectorModalOpen(true);
                }}
              />
              <SectorItem
                icon="📊"
                title="Estudios Contables"
                desc="Digitalización Documental"
                onClick={() => {
                  setSelectedSector("Estudios Contables");
                  setIsSectorModalOpen(true);
                }}
              />
              <SectorItem
                icon="🚚"
                title="Logística"
                desc="Tracking en Tiempo Real"
                onClick={() => {
                  setSelectedSector("Logística");
                  setIsSectorModalOpen(true);
                }}
              />
              <SectorItem
                icon="✨"
                title="Belleza"
                desc="Reservas & Agendas"
                onClick={() => {
                  setSelectedSector("Belleza");
                  setIsSectorModalOpen(true);
                }}
              />
              <SectorItem
                icon="📣"
                title="Marketing"
                desc="CRM & Gestión de Leads"
                onClick={() => {
                  setSelectedSector("Marketing");
                  setIsSectorModalOpen(true);
                }}
              />
            </div>

            <a
              href="#contacto"
              className="inline-flex px-5 py-3 sm:px-6 sm:py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest text-[10px] transition-all text-center hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 animate-pulse"
            >
              Empezar Digitalización
            </a>
          </div>

          <div className="rounded-[3rem] border border-blue-500/20 bg-white/[0.02] backdrop-blur-xl p-8 sm:p-12 md:p-16 transition-all hover:border-blue-500/40">
            <div className="flex items-center gap-5 mb-10">
              <div className="h-16 w-16 sm:h-20 sm:w-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9-.4-2.593-1.026l-.547-.547z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter">
                  FASE 02: EVOLUCIONAR
                </h3>
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  IA & Automatización
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed">
              Para empresas digitales que buscan competitividad internacional.
              Optimizamos flujos con IA y herramientas de vanguardia.
            </p>

            <div className="space-y-5 sm:space-y-6 mb-10">
              <FeatureItem
                title="Orquestación con Workflows"
                desc="Conectamos todas tus herramientas (Google, Shopify, Slack) en flujos automáticos sin errores."
              />
              <FeatureItem
                title="Inteligencia Artificial Aplicada"
                desc="Implementamos modelos de Gemini AI para análisis predictivo, chatbots expertos y visión computacional."
              />
              <FeatureItem
                title="Dashboards de Misión Crítica"
                desc="Visualización de KPIs en tiempo real para toma de decisiones basada en datos."
              />
            </div>

            <a
              href="#contacto"
              className="inline-flex px-5 py-3 sm:px-6 sm:py-3.5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl shadow-blue-900/20 text-center hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70"
            >
              Optimizar con IA
            </a>
          </div>
        </div>
      </div>

      {isSectorModalOpen && activeSector && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalles de ${activeSector.label}`}
          onClick={() => setIsSectorModalOpen(false)}
        >
          <div
            className="w-full max-w-3xl rounded-[2.5rem] border border-white/10 bg-[#0b1322] p-6 sm:p-10 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                  Sector
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {activeSector.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsSectorModalOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300 mb-4">
                  Soluciones sugeridas
                </h4>
                <ul className="space-y-3">
                  {activeSector.solutions.map((solution) => (
                    <li
                      key={solution.name}
                      className="group relative flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 overflow-visible"
                    >
                      <span className="text-white font-semibold">
                        {solution.name}
                      </span>
                      <a
                        href={solution.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300"
                        aria-label={`${solution.name}: ${solution.summary}`}
                        title={solution.summary}
                      >
                        {solution.provider}
                      </a>
                      <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 w-64 -translate-x-1/2 rounded-2xl border border-cyan-400/30 bg-[#0b1322] px-4 py-3 text-xs font-semibold text-white shadow-[0_20px_45px_rgba(6,182,212,0.18)] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-y-1 group-focus-within:opacity-100 group-focus-within:translate-y-1">
                        {solution.summary}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-blue-300 mb-4">
                  Roadmap recomendado
                </h4>
                <ul className="space-y-4">
                  {activeSector.roadmap.map((step) => (
                    <li
                      key={step.step}
                      className="flex gap-4 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-4 transition-all hover:border-blue-300/50 hover:shadow-[0_12px_30px_rgba(37,99,235,0.2)]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-500/10 text-blue-100 shadow-[0_0_16px_rgba(37,99,235,0.25)]">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-blue-200/80">
                          Paso {step.step}
                        </span>
                        <div className="text-white font-semibold">
                          {step.title}
                        </div>
                        <p className="text-sm text-slate-400">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setIsSectorModalOpen(false)}
                className="w-full sm:w-auto rounded-xl border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80"
              >
                Cerrar
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfgHkDApUgxqeuqpwoaJPVWo6nQjS7NI9wtpB_W7f0RCddpQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto rounded-xl bg-cyan-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black text-center"
              >
                Agendar reunión
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

function SectorItem({
  icon,
  title,
  desc,
  onClick,
}: {
  icon: string;
  title: string;
  desc: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-6 text-left bg-white/[0.03] border border-white/5 rounded-2xl transition-all group cursor-pointer hover:bg-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_14px_30px_rgba(6,182,212,0.2)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
    >
      <div className="text-3xl mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_18px_rgba(6,182,212,0.35)]">
        {icon}
      </div>
      <h4 className="text-sm font-black text-white uppercase tracking-tighter mb-1 group-hover:text-cyan-400 transition-colors">
        {title}
      </h4>
      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
        {desc}
      </p>
    </button>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-all group">
      <div className="mt-1">
        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)] group-hover:scale-125 transition-transform" />
      </div>
      <div>
        <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tighter mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-slate-400 leading-relaxed font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
}
