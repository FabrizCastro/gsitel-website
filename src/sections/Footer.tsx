import Image from "next/image";
import logo from "@/assets/logo_gsitel.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div
          className="inline-flex relative 
    before:content-[''] before:top-2 before:bottom-0 before:w-full 
    before:blur before:bg-[linear-gradient(to_right,#2563EB,#3B82F6,#60A5FA,#38BDF8,#06B6D4)] 
    before:absolute before:rounded-full"
        >
          <Image
            src={logo}
            height={40}
            alt="Gsitel logo"
            className="relative bg-white rounded-full p-1"
          />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="/aboutus">Acerca de nosotros</a>
          <a href="/#servicios">Servicios</a>
          <a href="/#clientes">Clientes</a>
          <a href="/#proyectos">Proyectos</a>
          <a href="/blog">Noticias</a>
          <a href="/#contacto">Contacto</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          {/*<SocialX />
          <SocialInsta />*/}
          <SocialLinkedIn />
          {/*<SocialPin />*/}
          {/*<SocialYoutube />*/}
        </div>
        <p className="mt-6">
          &copy; 2026 GSITEL Services S.A.C. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
