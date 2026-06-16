"use client";

import angularIcon from "@/assets/apps-icon/ANGULAR.png";
import bootstrapIcon from "@/assets/apps-icon/BOOTSTRAP.png";
import firebaseIcon from "@/assets/apps-icon/FIREBASE.png";
import flutterIcon from "@/assets/apps-icon/FLUTTER.png";
import gitIcon from "@/assets/apps-icon/GIT.png";
import githubIcon from "@/assets/apps-icon/GITHUB.png";
import htmlIcon from "@/assets/apps-icon/HTML5.png";
import javaIcon from "@/assets/apps-icon/JAVA.png";
import javascriptIcon from "@/assets/apps-icon/JAVASCRIPT.png";
import jiraIcon from "@/assets/apps-icon/JIRA.png";
import kotlinIcon from "@/assets/apps-icon/KOTLIN.png";
import mongoIcon from "@/assets/apps-icon/MONGO DB.png";
import nodeIcon from "@/assets/apps-icon/NODE JS.png";
import npmIcon from "@/assets/apps-icon/NPM.png";
import pythonIcon from "@/assets/apps-icon/PYTHON.png";
import reactIcon from "@/assets/apps-icon/REACT.png";
import redisIcon from "@/assets/apps-icon/REDIS.png";
import reduxIcon from "@/assets/apps-icon/REDUX.png";
import stripeIcon from "@/assets/apps-icon/STRIPE.png";
import swiftIcon from "@/assets/apps-icon/SWIFT.png";
import tailwindIcon from "@/assets/apps-icon/TAILWIND.png";
import typescriptIcon from "@/assets/apps-icon/TYPESCRIPT.png";
import ubuntuIcon from "@/assets/apps-icon/UBUNTU.png";
import vueIcon from "@/assets/apps-icon/VUE JS.png";
import type { SiteMode } from "@/lib/siteMode";
import Image, { type StaticImageData } from "next/image";

type ToolIcon = {
  name: string;
  icon: StaticImageData;
};

const frontendTools: ToolIcon[] = [
  { name: "React", icon: reactIcon },
  { name: "Angular", icon: angularIcon },
  { name: "Vue", icon: vueIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "HTML5", icon: htmlIcon },
];

const backendTools: ToolIcon[] = [
  { name: "Node", icon: nodeIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Java", icon: javaIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Redis", icon: redisIcon },
  { name: "Firebase", icon: firebaseIcon },
];

const productTools: ToolIcon[] = [
  { name: "GitHub", icon: githubIcon },
  { name: "Git", icon: gitIcon },
  { name: "Jira", icon: jiraIcon },
  { name: "NPM", icon: npmIcon },
  { name: "Ubuntu", icon: ubuntuIcon },
  { name: "Stripe", icon: stripeIcon },
];

const mobileTools: ToolIcon[] = [
  { name: "Flutter", icon: flutterIcon },
  { name: "Swift", icon: swiftIcon },
  { name: "Kotlin", icon: kotlinIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "Redux", icon: reduxIcon },
];

const capabilityRows = [
  ["Web apps", "Dashboards", "APIs"],
  ["Automatizacion", "Pagos", "Mobile apps"],
  ["Cloud", "Integraciones", "Soporte"],
];

const IconGrid = ({ title, tools }: { title: string; tools: ToolIcon[] }) => (
  <div className="rounded-[1rem] border border-[#08245f]/10 bg-white/[0.9] p-3 shadow-[0_16px_34px_rgba(8,36,95,0.18)] backdrop-blur-md">
    <div className="mb-3 flex items-center justify-between gap-3">
      <h3 className="text-sm font-black tracking-tight text-[#071425]">
        {title}
      </h3>
      <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] shadow-[0_0_12px_rgba(37,99,235,0.8)]" />
    </div>
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="group flex min-h-[4.75rem] flex-col items-center justify-center gap-1.5 rounded-[0.7rem] border border-[#071425]/[0.08] bg-white px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_16px_rgba(7,20,37,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_22px_rgba(7,20,37,0.18)]"
          title={tool.name}
        >
          <Image
            src={tool.icon}
            alt={tool.name}
            width={38}
            height={38}
            className="h-6 w-6 object-contain drop-shadow-[0_6px_8px_rgba(7,20,37,0.16)] transition duration-300 group-hover:scale-110 sm:h-7 sm:w-7"
          />
          <span className="max-w-full truncate text-[10px] font-black uppercase tracking-[0.04em] text-[#071425]/72">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const KnowledgeStack = ({ mode }: { mode: SiteMode }) => {
  const isTelecom = mode === "telecom";

  return (
    <section
      id="conocimientos"
      className="relative overflow-hidden bg-[#EAEEFE] px-4 pt-10 pb-4 text-[#071425] sm:px-6 md:pt-12 md:pb-5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(234,238,254,0.96),rgba(234,238,254,0.82)_48%,rgba(234,238,254,0.96))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(37,99,235,0.12),transparent_34%),radial-gradient(circle_at_84%_88%,rgba(56,189,248,0.1),transparent_34%)]" />
      <div className="container relative z-10">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.18] bg-[linear-gradient(135deg,#2563eb_0%,#2f9edb_52%,#60a5fa_100%)] p-4 shadow-[0_18px_46px_rgba(8,36,95,0.24)] sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:18px_18px]" />
          <div className="relative grid gap-6 lg:grid-cols-[0.66fr_1.48fr] lg:items-center">
            <div className="max-w-sm">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-white/75">
                {isTelecom ? "Stack operativo" : "Conocimientos"}
              </div>
              <h2 className="mt-4 text-3xl font-black leading-[0.94] tracking-tight text-white drop-shadow-[0_3px_18px_rgba(7,20,37,0.24)] sm:text-4xl md:text-5xl">
                Todo lo que conectamos para construir software real.
              </h2>
              <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-white/82 sm:text-base">
                Desde interfaces, APIs y automatizaciones hasta apps moviles,
                bases de datos, cloud, pagos y herramientas de operacion.
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-flex rounded-full border border-white/[0.55] bg-white/[0.92] px-5 py-2.5 text-sm font-black text-[#0b1d3a] shadow-[0_12px_22px_rgba(7,20,37,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_30px_rgba(7,20,37,0.24)]"
              >
                Hablemos del stack
              </a>
            </div>

            <div className="grid gap-3">
              <div className="grid gap-3 xl:grid-cols-2">
                <IconGrid title="Frontend & UI" tools={frontendTools} />
                <IconGrid title="Backend & datos" tools={backendTools} />
              </div>

              <div className="rounded-[1rem] border border-[#08245f]/10 bg-white/[0.9] p-3 shadow-[0_16px_34px_rgba(8,36,95,0.18)] backdrop-blur-md">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-black tracking-tight text-[#071425]">
                    Lo convertimos en productos
                  </h3>
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#1d4ed8]/70">
                    Delivery
                  </span>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  {capabilityRows.flat().map((item) => (
                    <div
                      key={item}
                      className="rounded-[0.75rem] bg-[#bfdbfe] px-3 py-2 text-center text-xs font-black text-[#0b1d3a] shadow-[inset_0_1px_0_rgba(255,255,255,0.38)] sm:text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 xl:grid-cols-2">
                <IconGrid title="Producto & DevOps" tools={productTools} />
                <IconGrid title="Mobile & lenguajes" tools={mobileTools} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
