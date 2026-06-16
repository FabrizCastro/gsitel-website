import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logos/logo_gsitel.png";
import SocialLinkedIn from "@/assets/icons/social-linkedin.svg";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#081d3f] px-4 pb-12 pt-4 text-sm text-white/75 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[#081d3f]/90" />
      <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.04]" />

      <div className="container relative z-10">
        <div className="inline-flex relative before:absolute before:bottom-0 before:top-2 before:w-full before:rounded-full before:bg-[linear-gradient(to_right,#2563EB,#3B82F6,#60A5FA,#38BDF8,#06B6D4)] before:blur">
          <Image
            src={logo}
            height={40}
            alt="Gsitel logo"
            className="relative rounded-full bg-white p-1"
          />
        </div>

        <nav className="mt-8 flex flex-col gap-6 text-white/70 font-medium md:flex-row md:justify-center">
          <Link href="/aboutus" className="smooth-transition hover:text-white">
            Acerca de nosotros
          </Link>
          <Link href="/#servicios" className="smooth-transition hover:text-white">
            Servicios
          </Link>
          <Link href="/#clientes" className="smooth-transition hover:text-white">
            Clientes
          </Link>
          <Link href="/#proyectos" className="smooth-transition hover:text-white">
            Proyectos
          </Link>
          <Link href="/blog" className="smooth-transition hover:text-white">
            Noticias
          </Link>
          <Link href="/#contacto" className="smooth-transition hover:text-white">
            Contacto
          </Link>
        </nav>

        <div className="mt-8 flex justify-center gap-8">
          <a
            href="#"
            className="text-white/50 smooth-transition hover:scale-110 hover:text-cyan-300"
          >
            <SocialLinkedIn className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-8 mb-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="text-xs text-white/60">
          © 2026 GSITEL Services S.A.C. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
