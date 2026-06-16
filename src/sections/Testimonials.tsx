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
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => (
  <div className={className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[0, 1].map((index) => (
        <React.Fragment key={index}>
          {testimonials.map(({ text, imageSrc, name, role, tag }) => (
            <article
              key={`${name}-${role}-${index}`}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/92 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.1)] backdrop-blur"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.78))]" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${tagStyles[tag]}`}
                  >
                    {tag}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Testimonio
                  </span>
                </div>
                <p className="mt-4 text-base font-medium leading-7 text-[#0b1d3a]/82">
                  {text}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full border border-white/80"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm font-bold tracking-tight text-slate-900">
                      {name}
                    </div>
                    <div className="text-sm font-medium leading-6 text-slate-500">
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
  const testimonials = isTelecom ? telecomTestimonials : softwareTestimonials;
  const [firstColumn, secondColumn, thirdColumn] =
    chunkTestimonials(testimonials);

  return (
    <section
      id="clientes"
      className="relative overflow-hidden bg-[#EAEEFE] px-4 py-20 scroll-mt-24 md:scroll-mt-28 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.14),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(234,238,254,0.96),rgba(234,238,254,0.82)_48%,rgba(234,238,254,0.96))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#081d3f]/18" />

      <div className="container relative z-10">
        <div className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="flex justify-start">
            <div className="tag mb-6 border-[#0b1d3a]/10 bg-[#0b1d3a]/5 text-[#0b1d3a]">
              Testimonios
            </div>
          </div>
          <div className="max-w-3xl">
            <h2 className="text-left text-3xl font-black uppercase leading-[0.92] tracking-tight text-[#06111f] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)] sm:text-4xl md:text-6xl">
              {isTelecom ? "Resultados en red" : "Resultados reales"}
            </h2>
            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-[#0b1d3a]/75 sm:text-lg md:text-xl">
              {isTelecom
                ? "Despliegue, soporte y continuidad operativa para redes moviles."
                : "Equipos con menos friccion, mas visibilidad y una solucion de software que acompana la operacion real."}
            </p>
          </div>
        </div>

        <div className="mt-14 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)] max-h-[760px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          {secondColumn.length > 0 && (
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={20}
            />
          )}
          {thirdColumn.length > 0 && (
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={18}
            />
          )}
        </div>
      </div>
    </section>
  );
};
