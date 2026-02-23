"use client";

import { Galaxy } from "@/components/Galaxy";

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="py-20 sm:py-28 px-6 scroll-mt-24 md:scroll-mt-28 bg-[#081d3f] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-[#0b1f3a] via-[#0d3b7a] to-[#1b5aa6] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_80px_rgba(47,158,219,0.35)]">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-[#081d3f]/60 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] pointer-events-none" />
        <div className="relative z-10 animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-8 sm:mb-10 tracking-tight uppercase leading-[0.95] break-words">
            DISEÑEMOS <br /> EL FUTURO
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto font-medium">
            Lleva tu infraestructura y tus procesos al siguiente nivel con
            ingeniería de clase mundial.
          </p>
          <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-3 text-white/90 font-semibold break-words">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <img
                src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png"
                alt="Gmail"
                className="h-5 w-5"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span>soporte@gsitel-solutions.com</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
            <a
              href="mailto:soporte@gsitel-solutions.com"
              className="w-full sm:w-auto px-6 sm:px-10 md:px-12 py-4 sm:py-5 bg-black text-white font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] rounded-2xl hover:bg-white hover:text-black hover:scale-105 transition-all shadow-2xl text-[11px] sm:text-[12px]"
            >
              Contactar ahora
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdfgHkDApUgxqeuqpwoaJPVWo6nQjS7NI9wtpB_W7f0RCddpQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 sm:px-10 md:px-12 py-4 sm:py-5 bg-white/10 text-white border-2 border-white/20 font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md text-[11px] sm:text-[12px]"
            >
              Agendar reunión
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
