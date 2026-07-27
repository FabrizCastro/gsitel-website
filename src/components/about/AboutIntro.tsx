import { MotionInView } from "@/components/MotionInView";
import { Code2, RadioTower } from "lucide-react";

const capabilities = [
  { number: "01", label: "Desarrollo de software" },
  { number: "02", label: "Automatización de procesos" },
  { number: "03", label: "Ingeniería RAN" },
];

export const AboutIntro = () => {
  return (
    <section className="relative bg-[#020408] px-4 pb-20 pt-32 text-white sm:px-6 sm:pb-24 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 mesh-dark opacity-70" />
      <div className="pointer-events-none absolute inset-0 grid-fine opacity-20" />
      <div className="pointer-events-none absolute right-[-12rem] top-24 h-80 w-80 rounded-full bg-cyan-300/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <MotionInView className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-cyan-300" aria-hidden="true" />
              <p className="section-eyebrow-dark text-cyan-300">Sobre nosotros</p>
            </div>
            <h1 className="section-title-dark mt-5 max-w-3xl text-4xl sm:mt-6 sm:text-5xl lg:text-6xl">
              Tecnología que acompaña a la <span className="text-cyan-300">operación real.</span>
            </h1>
            <p className="section-desc-dark max-w-2xl sm:text-lg">
              GSITEL integra experiencia en telecomunicaciones y desarrollo de
              software para resolver necesidades operativas con soluciones
              claras, confiables y sostenibles.
            </p>
            <a
              href="#proposito"
              className="mt-8 inline-flex border-b border-cyan-300/60 pb-2 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300 transition hover:border-cyan-300 hover:text-white"
            >
              Conoce nuestro enfoque
            </a>
          </MotionInView>

          <MotionInView
            delay={0.12}
            x={28}
            y={0}
            className="relative overflow-hidden border border-white/15 bg-white/[0.035] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/40">
                Especialidades
              </p>
              <span className="text-[10px] font-black tracking-[0.2em] text-cyan-300">GSITEL</span>
            </div>
            <ul className="mt-2">
              {capabilities.map((capability) => (
                <li
                  key={capability.number}
                  className="group flex items-center gap-4 border-b border-white/10 py-5"
                >
                  <span className="text-[10px] font-black tracking-[0.18em] text-cyan-300/70">
                    {capability.number}
                  </span>
                  <span className="text-sm font-bold text-white/80 transition group-hover:text-white">
                    {capability.label}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-white/50">
              Un mismo equipo para conectar infraestructura, procesos y productos digitales.
            </p>
          </MotionInView>
        </div>

        <div className="mt-16 border-t border-white/15 pt-7 sm:mt-20">
          <div className="grid gap-6 sm:grid-cols-3">
            <MotionInView delay={0.05} y={18}>
              <p className="text-3xl font-black text-white sm:text-4xl">20+</p>
              <p className="mt-2 text-xs font-semibold text-white/50">
                Años de experiencia y liderazgo
              </p>
            </MotionInView>
            <MotionInView delay={0.12} y={18} className="sm:border-l sm:border-white/15 sm:pl-8">
              <div className="flex items-center gap-3">
                <Code2 className="h-5 w-5 text-cyan-300" strokeWidth={1.8} aria-hidden="true" />
                <p className="text-lg font-black text-white">Software</p>
              </div>
              <p className="mt-2 text-xs font-semibold text-white/50">
                Productos y automatización a medida
              </p>
            </MotionInView>
            <MotionInView delay={0.19} y={18} className="sm:border-l sm:border-white/15 sm:pl-8">
              <div className="flex items-center gap-3">
                <RadioTower className="h-5 w-5 text-cyan-300" strokeWidth={1.8} aria-hidden="true" />
                <p className="text-lg font-black text-white">Telecom</p>
              </div>
              <p className="mt-2 text-xs font-semibold text-white/50">
                Integración, soporte y optimización RAN
              </p>
            </MotionInView>
          </div>
        </div>
      </div>
    </section>
  );
};
