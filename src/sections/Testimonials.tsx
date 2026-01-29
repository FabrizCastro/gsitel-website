"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion";
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
  Telecom: "bg-[#0f2a2f] text-[#22c55e]",
  Software: "bg-[#0f2a2f] text-[#38bdf8]",
};

const testimonials: Testimonial[] = [
  {
    text: "La integración RAN/TX se ejecutó con orden y sin reprocesos. Las MOP estuvieron claras para el equipo de campo.",
    imageSrc: avatar1.src,
    name: "Daniela Torres",
    role: "PM RAN · Operador móvil",
    tag: "Telecom",
  },
  {
    text: "En refarming 850/1900 mantuvimos continuidad del servicio gracias al seguimiento diario del plan.",
    imageSrc: avatar2.src,
    name: "Carlos M.",
    role: "Jefe de Refarming · Telefónica Perú",
    tag: "Telecom",
  },
  {
    text: "La validación de rutas TX y los eventos RAN salieron a tiempo con reportes claros al cierre de cada jornada.",
    imageSrc: avatar3.src,
    name: "Paul Rojas",
    role: "Coordinador de Eventos · Entel Perú",
    tag: "Telecom",
  },
  {
    text: "El soporte OYM/NOC redujo tiempos de atención y nos dio visibilidad del estado de red.",
    imageSrc: avatar4.src,
    name: "Luis Herrera",
    role: "NOC Manager · Operador móvil",
    tag: "Telecom",
  },
  {
    text: "El dashboard de KPIs nos ahorró horas de consolidación y facilitó decisiones operativas.",
    imageSrc: avatar9.src,
    name: "André Salas",
    role: "Jefe de Operaciones · Telecom",
    tag: "Software",
  },
  {
    text: "Automatizar reportes y alertas nos dio trazabilidad y menos errores manuales.",
    imageSrc: avatar8.src,
    name: "Juliana P.",
    role: "Analista de Procesos · Servicios TI",
    tag: "Software",
  },
  {
    text: "La plataforma web a medida ordenó nuestros flujos de aprobación y seguimiento de proyectos.",
    imageSrc: avatar7.src,
    name: "Renzo Vidal",
    role: "PMO · Integrador TI",
    tag: "Software",
  },
  {
    text: "La app móvil para equipos de campo mejoró el registro de avances y evidencias.",
    imageSrc: avatar6.src,
    name: "Fiorella S.",
    role: "Coordinadora de Campo · Infraestructura",
    tag: "Software",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, role, tag }) => {
            const tagClass = tagStyles[tag];

            return (
              <div
                key={`${name}-${role}`}
                className="card relative overflow-hidden border-white/10 bg-[#0f1419] shadow-[0_24px_50px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${tagClass}`}
                  >
                    {tag}
                  </span>
                  <span className="text-xs text-white/50">Testimonio</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {text}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border border-white/15"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm font-semibold tracking-tight text-white">
                      {name}
                    </div>
                    <div className="text-xs tracking-tight text-white/50">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section
      id="clientes"
      className="relative overflow-hidden bg-[#f5f7ff] py-24 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.14),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="container relative z-10">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonios</div>
          </div>
          <h2 className="section-title mt-5">Lo que dicen nuestros clientes</h2>
          <p className="section-description mt-5">
            Resultados en implementación RAN/TX y software que mejora el control
            operativo y la velocidad de respuesta.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[760px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
