"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip scroll-mt-24 md:scroll-mt-28"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-description mt-5">
            Cuéntanos tu reto y te respondemos con una propuesta clara y
            accionable en menos de 24 horas.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex flex-col items-center gap-4 mt-10">
          <a
            href="mailto:soporte@gsitel-solutions.com"
            className="text-[#0b1d3a] font-semibold tracking-tight"
          >
            soporte@gsitel-solutions.com
          </a>
          <div className="flex gap-2">
            <a
              href="mailto:soporte@gsitel-solutions.com"
              className="btn btn-primary"
            >
              Escríbenos
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdfgHkDApUgxqeuqpwoaJPVWo6nQjS7NI9wtpB_W7f0RCddpQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="btn btn-text gap-1 font-semibold"
            >
              <span>Agendar reunión</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
