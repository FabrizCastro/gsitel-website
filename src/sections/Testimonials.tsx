"use client";

import avatar1 from "@/assets/avatars/avatar-1.png";
import avatar2 from "@/assets/avatars/avatar-2.png";
import avatar3 from "@/assets/avatars/avatar-3.png";
import avatar4 from "@/assets/avatars/avatar-4.png";
import avatar6 from "@/assets/avatars/avatar-6.png";
import avatar7 from "@/assets/avatars/avatar-7.png";
import avatar8 from "@/assets/avatars/avatar-8.png";
import avatar9 from "@/assets/avatars/avatar-9.png";
import type { SiteMode } from "@/lib/siteMode";
import { motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";
import Image from "next/image";
import React from "react";

type TestimonialTag = "Telecom" | "Software";

type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  role: string;
  tag: TestimonialTag;
};

const tagStyles: Record<TestimonialTag, string> = {
  Telecom: "bg-[#f39c36]/14 text-[#8a4d00]",
  Software: "bg-[#1d4ed8]/10 text-[#1d4ed8]",
};

const softwareTestimonials: Testimonial[] = [
  {
    text: "El dashboard centralizo operaciones dispersas y hoy el equipo decide con la informacion correcta, sin perseguir hojas sueltas.",
    imageSrc: avatar9.src,
    name: "Andre Salas",
    role: "Jefe de Operaciones · Servicios empresariales",
    tag: "Software",
  },
  {
    text: "Automatizar reportes y alertas nos dio trazabilidad real y bastante menos trabajo manual en cierres y seguimiento.",
    imageSrc: avatar8.src,
    name: "Juliana P.",
    role: "Analista de Procesos · Servicios TI",
    tag: "Software",
  },
  {
    text: "La plataforma web a medida ordeno aprobaciones, responsables y tiempos. Ahora el flujo se entiende de punta a punta.",
    imageSrc: avatar7.src,
    name: "Renzo Vidal",
    role: "PMO · Integrador TI",
    tag: "Software",
  },
  {
    text: "La app movil para equipos de campo mejoro el registro de avances y evidencias sin friccion para la operacion.",
    imageSrc: avatar6.src,
    name: "Fiorella S.",
    role: "Coordinadora de Campo · Infraestructura",
    tag: "Software",
  },
];

const telecomTestimonials: Testimonial[] = [
  {
    text: "La integracion RAN/TX se ejecuto con orden y sin reprocesos. Las MOP estuvieron claras para el equipo de campo.",
    imageSrc: avatar1.src,
    name: "Daniela Torres",
    role: "PM RAN · Operador movil",
    tag: "Telecom",
  },
  {
    text: "En refarming 850/1900 mantuvimos continuidad del servicio gracias al seguimiento diario del plan.",
    imageSrc: avatar2.src,
    name: "Carlos M.",
    role: "Jefe de Refarming · Telefonica Peru",
    tag: "Telecom",
  },
  {
    text: "La validacion de rutas TX y los eventos RAN salieron a tiempo con reportes claros al cierre de cada jornada.",
    imageSrc: avatar3.src,
    name: "Paul Rojas",
    role: "Coordinador de Eventos · Entel Peru",
    tag: "Telecom",
  },
  {
    text: "El soporte OyM/NOC redujo tiempos de atencion y nos dio visibilidad continua del estado de red.",
    imageSrc: avatar4.src,
    name: "Luis Herrera",
    role: "NOC Manager · Operador movil",
    tag: "Telecom",
  },
];

const chunkTestimonials = (items: Testimonial[]) => {
  const columns = [[], [], []] as Testimonial[][];
  items.forEach((item, index) => {
    columns[index % 3].push(item);
  });
  return columns;
};

const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 16,
  reduceMotion = false,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  reduceMotion?: boolean;
}) => (
  <div className={className}>
    <motion.div
      animate={reduceMotion ? undefined : { translateY: "-50%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-4 pb-4"
    >
      {(reduceMotion ? [0] : [0, 1]).map((index) => (
        <React.Fragment key={index}>
          {testimonials.map(({ text, imageSrc, name, role, tag }) => (
            <article
              key={`${name}-${role}-${index}`}
              className="quiet-card relative overflow-hidden rounded-2xl p-4 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(27,61,107,0.14)] sm:p-5"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] ${tagStyles[tag]}`}
                  >
                    {tag}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-[#0b1d3a]/82 line-clamp-4">
                  {text}
                </p>
                <div className="mt-4 flex items-center gap-2.5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border border-white/80"
                  />
                  <div className="min-w-0">
                    <div className="truncate text-xs font-bold tracking-tight text-slate-900">
                      {name}
                    </div>
                    <div className="truncate text-[11px] font-medium text-slate-500">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = ({ mode }: { mode: SiteMode }) => {
  const isTelecom = mode === "telecom";
  const reduceMotion = useHydratedReducedMotion();
  const testimonials = isTelecom ? telecomTestimonials : softwareTestimonials;
  const [firstColumn, secondColumn, thirdColumn] =
    chunkTestimonials(testimonials);

  return (
    <section
      id="clientes"
      className="quiet-section quiet-surface relative overflow-hidden px-4 section-shell scroll-mt-24 sm:px-6 md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.1),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#081d3f]/14" />

      <div className="container relative z-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow-light">Testimonios</p>
            <h2 className="section-title-light">
              {isTelecom ? "Resultados en red" : "Resultados reales"}
            </h2>
            <p className="section-desc-light">
              {isTelecom
                ? "Despliegue, soporte y continuidad operativa para redes móviles."
                : "Equipos con menos fricción, más visibilidad y software que acompaña la operación."}
            </p>
          </div>
          <span className="w-fit rounded-full border border-[#0b1d3a]/10 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#0b1d3a]/65">
            {isTelecom ? "Modo telecom" : "Modo software"}
          </span>
        </div>

        <div className="mt-8 flex justify-center gap-3 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[380px] overflow-hidden sm:mt-8 sm:max-h-[480px] sm:gap-5">
          <TestimonialsColumn testimonials={firstColumn} duration={18} reduceMotion={!!reduceMotion} />
          {secondColumn.length > 0 && (
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={22}
              reduceMotion={!!reduceMotion}
            />
          )}
          {thirdColumn.length > 0 && (
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={20}
              reduceMotion={!!reduceMotion}
            />
          )}
        </div>
      </div>
    </section>
  );
};
