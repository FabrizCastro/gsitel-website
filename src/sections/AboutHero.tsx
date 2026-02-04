"use client";

import backgroundHeroImage from "@/assets/backgroundhero1.png";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <section
      id="acerca"
      className="relative flex-1 min-h-[520px] pt-36 pb-14 md:min-h-[640px] md:pt-40 md:pb-12 overflow-hidden bg-[#0b1d3a] scroll-mt-24 md:scroll-mt-28"
    >
      <Image
        src={backgroundHeroImage}
        alt="Fondo tecnológico con tonos azules de GSITEL"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(8,29,63,0.9),rgba(8,29,63,0.65),rgba(8,29,63,0.25),rgba(8,29,63,0))]" />
      <div className="container relative z-10">
        <div className="md:flex items-center">
          <div className="md:w-[578px]">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90 backdrop-blur">
              Soluciones que transforman
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight bg-gradient-to-b from-white to-[#9fc9ff] text-transparent bg-clip-text mt-5">
              Simplifica tu trabajo de verdad
            </h1>
            <p className="text-xl text-white/85 tracking-tight mt-5 max-w-2xl mx-auto">
              ¡Adáptate a la tecnología! Optimiza tus servicios sin duplicar
              esfuerzos.
            </p>
            <div className="flex flex-wrap gap-2 mt-5 text-sm text-white/80">
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                Desarrollo de Software
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                Soporte Implementación RAN
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                Automatización
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                Consultoría TI
              </span>
            </div>
            <div className="flex flex-wrap gap-3 items-center mt-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfgHkDApUgxqeuqpwoaJPVWo6nQjS7NI9wtpB_W7f0RCddpQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-[#1e63c6] hover:bg-[#1955a8] transition-colors"
              >
                Agendar una reunión
              </a>
              <a
                href="#servicios"
                className="btn border border-white/40 text-white/90 hover:bg-white/10 transition-colors"
              >
                Ver servicios
              </a>
            </div>
          </div>
          <div className="hidden md:block md:flex-1" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
