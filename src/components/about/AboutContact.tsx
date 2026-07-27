import { MotionInView } from "@/components/MotionInView";
import Link from "next/link";

export const AboutContact = () => {
  return (
    <section className="section-shell px-4 sm:px-6">
      <MotionInView className="mx-auto max-w-7xl border-b border-white/10 pb-12 sm:pb-16">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="section-eyebrow-dark text-cyan-300">Trabajemos juntos</p>
            <h2 className="section-title-dark max-w-3xl">
              Conversemos sobre tu próximo proyecto.
            </h2>
            <p className="section-desc-dark">
              Software, automatización o ingeniería telecom con un equipo que
              entiende la operación.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:soporte@gsitel-solutions.com"
              className="btn-accent bg-[#1e63c6] hover:bg-[#1955a8]"
            >
              Contactar ahora
            </a>
            <Link href="/#servicios" className="btn-ghost-light">
              Ver servicios
            </Link>
          </div>
        </div>
      </MotionInView>
    </section>
  );
};
