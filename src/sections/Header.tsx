"use client";

import Logo from "@/assets/gsitel_services.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY <= 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-20">
      <div className="hidden md:flex justify-center items-center py-3 bg-black text-white/90 text-sm gap-3">
        <p className="text-white/80 hidden md:block font-semibold">
          Soluciones en software y telecom para operaciones críticas
        </p>
        {/* <div className="inline-flex gap-1 items-center">
          <p>Comience gratis</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div> */}
      </div>
      <div
        className={`py-4 md:py-5 transition-colors duration-300 ${
          isAtTop
            ? "bg-[rgba(12,33,66,0.35)] backdrop-blur-sm"
            : "bg-[rgba(18,45,88,0.72)] backdrop-blur-md"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <a
              href="/#acerca"
              className="rounded-2xl bg-white/90 p-2 shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:shadow-[0_10px_26px_rgba(0,0,0,0.45)]"
              aria-label="Ir al inicio"
            >
              <Image
                src={Logo}
                alt="GSITEL Logo"
                height={180}
                width={180}
                className="h-10 w-auto md:h-12"
              />
            </a>
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white md:hidden ${
                isAtTop ? "drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" : ""
              }`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            <nav
              className={`hidden md:flex gap-6 items-center text-white/80 font-semibold ${
                isAtTop ? "text-shadow-hero" : ""
              }`}
            >
              <a href="/aboutus">Acerca de nosotros</a>
              <a href="/#servicios">Servicios</a>
              <a href="/#clientes">Clientes</a>
              <a href="/#proyectos">Proyectos</a>
              <a href="/blog">Noticias</a>
              <a href="/#contacto">Contacto</a>
              {/* <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get for free
              </button>*/}
            </nav>
          </div>
          <div
            className={`md:hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <nav className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/15 bg-[rgba(11,29,58,0.85)] px-5 py-4 text-white/90 backdrop-blur">
              <a
                href="/aboutus"
                className="font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Acerca de nosotros
              </a>
              <a
                href="/#servicios"
                className="font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="/#clientes"
                className="font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Clientes
              </a>
              <a
                href="/#proyectos"
                className="font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </a>
              <a
                href="/blog"
                className="font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Noticias
              </a>
              <a
                href="/#contacto"
                className="font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
