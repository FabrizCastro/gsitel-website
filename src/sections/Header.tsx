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

const navLinks = [
  { href: "/aboutus", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#contacto", label: "Contacto" },
];

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
      className="relative inline-flex h-9 shrink-0 items-center rounded-full border border-white/20 bg-black/30 p-0.5 text-[9px] font-black uppercase tracking-[0.14em] text-white/80 backdrop-blur-md transition hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 sm:text-[10px]"
      aria-label={`Cambiar a modo ${isTelecom ? "software" : "telecom"}`}
      aria-pressed={isTelecom}
    >
      <span
        className={`relative z-10 rounded-full px-3 py-1.5 transition ${
          !isTelecom ? "text-[#0b1d3a]" : "text-white/65"
        }`}
      >
        Software
      </span>
      <span
        className={`relative z-10 rounded-full px-3 py-1.5 transition ${
          isTelecom ? "text-white" : "text-white/65"
        }`}
      >
        Telecom
      </span>
      <span
        className={`absolute inset-y-0.5 w-[calc(50%-2px)] rounded-full transition-all duration-300 ${
          isTelecom
            ? "left-[calc(50%+1px)] bg-[#f39c36] shadow-[0_0_16px_rgba(243,156,54,0.5)]"
            : "left-0.5 bg-white shadow-[0_0_16px_rgba(255,255,255,0.25)]"
        }`}
        aria-hidden="true"
      />
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
    const handleScroll = () => setIsAtTop(window.scrollY <= 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 z-20 w-full">
      <div
        className={`border-b transition-all duration-300 ${
          isAtTop
            ? "border-transparent bg-transparent"
            : isTelecom
              ? "border-amber-200/15 bg-[linear-gradient(90deg,rgba(5,5,6,0.94),rgba(35,19,7,0.9),rgba(83,45,14,0.86))] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "border-cyan-200/10 bg-[rgba(8,22,48,0.88)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        }`}
      >
        <div className="container py-3 md:py-3.5">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/#acerca"
              className="group flex shrink-0 items-center rounded-xl border border-white/30 bg-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition hover:shadow-[0_6px_28px_rgba(0,0,0,0.35)]"
              aria-label="Ir al inicio"
            >
              <Image
                src={Logo}
                alt="GSITEL Logo"
                height={180}
                width={180}
                className="h-8 w-auto md:h-9"
              />
            </Link>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            <nav
              className={`hidden items-center gap-1 rounded-2xl border border-white/10 bg-black/25 px-2 py-1.5 backdrop-blur-md md:flex ${
                isAtTop ? "text-shadow-hero" : ""
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3.5 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <div className="ml-1 border-l border-white/10 pl-2">
                <ModeToggle mode={activeMode} onModeChange={handleModeChange} />
              </div>
            </nav>
          </div>

          <div
            className={`md:hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <nav className="mt-3 flex flex-col gap-1 rounded-2xl border border-white/15 bg-[rgba(8,20,42,0.92)] p-3 text-white/90 backdrop-blur-xl">
              <div className="mb-2 flex justify-center">
                <ModeToggle mode={activeMode} onModeChange={handleModeChange} />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {isAtTop && (
        <div
          className={`hidden border-b text-center md:block ${
            isTelecom
              ? "border-amber-200/10 bg-[rgba(30,18,6,0.55)] text-amber-100/80"
              : "border-cyan-200/10 bg-[rgba(6,18,40,0.55)] text-cyan-100/75"
          } backdrop-blur-sm`}
        >
          <p className="container py-2 text-xs font-semibold tracking-wide">
            {isTelecom
              ? "Ingeniería RAN, integración multivendor y soporte para redes críticas"
              : "Desarrollo de software integral para operaciones críticas"}
          </p>
        </div>
      )}
    </header>
  );
};
