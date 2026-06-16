"use client";

import Logo from "@/assets/logos/gsitel_services.png";
import Image from "next/image";
import MenuIcon from "@/assets/icons/menu.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { SiteMode } from "@/lib/siteMode";

type HeaderProps = {
  mode?: SiteMode;
  onModeChange?: (mode: SiteMode) => void;
};

const ModeToggle = ({
  mode,
  onModeChange,
}: {
  mode: SiteMode;
  onModeChange: (mode: SiteMode) => void;
}) => {
  const isTelecom = mode === "telecom";

  return (
    <button
      type="button"
      onClick={() => onModeChange(isTelecom ? "software" : "telecom")}
      className="group inline-flex h-10 shrink-0 items-center rounded-full border border-white/25 bg-white/10 p-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/90 shadow-[0_8px_22px_rgba(0,0,0,0.25)] backdrop-blur transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
      aria-label={`Cambiar a modo ${isTelecom ? "software" : "telecom"}`}
      aria-pressed={isTelecom}
    >
      <span
        className={`rounded-full px-3 py-2 transition ${
          !isTelecom ? "bg-white text-[#0b1d3a]" : "text-white/70"
        }`}
      >
        Software
      </span>
      <span
        className={`rounded-full px-3 py-2 transition ${
          isTelecom ? "bg-[#f39c36] text-white" : "text-white/70"
        }`}
      >
        Telecom
      </span>
    </button>
  );
};

export const Header = ({ mode, onModeChange }: HeaderProps) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [localMode, setLocalMode] = useState<SiteMode>("software");
  const activeMode = mode ?? localMode;
  const handleModeChange = onModeChange ?? setLocalMode;
  const isTelecom = activeMode === "telecom";

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
          {isTelecom
            ? "Ingeniería RAN, integración multivendor y soporte para redes críticas"
            : "Desarrollo de software integral para operaciones críticas"}
        </p>
      </div>
      <div
        className={`py-4 md:py-5 transition-colors duration-300 ${
          isAtTop
            ? isTelecom
              ? "bg-[rgba(40,27,10,0.45)] backdrop-blur-sm"
              : "bg-[rgba(12,33,66,0.35)] backdrop-blur-sm"
            : isTelecom
              ? "bg-[rgba(64,39,12,0.78)] backdrop-blur-md"
              : "bg-[rgba(18,45,88,0.72)] backdrop-blur-md"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <Link
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
            </Link>
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
              className={`hidden md:flex gap-8 items-center text-white/85 font-medium ${
                isAtTop ? "text-shadow-hero" : ""
              }`}
            >
              <Link
                href="/aboutus"
                className="link-hover text-white/85 hover:text-white smooth-transition"
              >
                Nosotros
              </Link>
              <Link
                href="/#servicios"
                className="link-hover text-white/85 hover:text-white smooth-transition"
              >
                Servicios
              </Link>
              <Link
                href="/#clientes"
                className="link-hover text-white/85 hover:text-white smooth-transition"
              >
                Clientes
              </Link>
              <Link
                href="/#proyectos"
                className="link-hover text-white/85 hover:text-white smooth-transition"
              >
                Proyectos
              </Link>
              <Link
                href="/blog"
                className="link-hover text-white/85 hover:text-white smooth-transition"
              >
                Noticias
              </Link>
              <Link
                href="/#contacto"
                className="link-hover text-white/85 hover:text-white smooth-transition"
              >
                Contacto
              </Link>
              <ModeToggle mode={activeMode} onModeChange={handleModeChange} />
            </nav>
          </div>
          <div
            className={`md:hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <nav className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/15 bg-[rgba(11,29,58,0.85)] px-5 py-4 text-white/90 backdrop-blur">
              <ModeToggle mode={activeMode} onModeChange={handleModeChange} />
              <Link
                href="/aboutus"
                className="font-semibold underline underline-offset-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/#servicios"
                className="font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/#clientes"
                className="font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Clientes
              </Link>
              <Link
                href="/#proyectos"
                className="font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/blog"
                className="font-semibold underline underline-offset-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Noticias
              </Link>
              <Link
                href="/#contacto"
                className="font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
