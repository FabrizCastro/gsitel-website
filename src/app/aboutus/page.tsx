import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de Nosotros",
  description:
    "Conoce a GSITEL Services S.A.C.: liderazgo en proyectos de telecomunicaciones, automatización y software para operaciones críticas en LATAM.",
  alternates: {
    canonical: "/aboutus",
  },
  keywords: [
    "GSITEL",
    "proyectos telecom",
    "automatización",
    "software a medida",
    "ingeniería RAN",
    "Perú",
    "LATAM",
  ],
  openGraph: {
    title: "Acerca de Nosotros | GSITEL Services S.A.C.",
    description:
      "Equipo, misión y visión de GSITEL: ingeniería RAN, automatización y software para redes y operaciones críticas.",
    url: "https://gsitelservices.com/aboutus",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acerca de GSITEL Services S.A.C.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acerca de Nosotros | GSITEL Services S.A.C.",
    description:
      "Equipo, misión y visión de GSITEL: ingeniería RAN, automatización y software para redes y operaciones críticas.",
    images: ["/og-image.png"],
  },
};

const MissionIcon = () => (
  <svg
    className="h-8 w-8 text-cyan-500"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M13 10V3L4 14h7v7l9-11h-7z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VisionIcon = () => (
  <svg
    className="h-8 w-8 text-blue-500"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" />
    <path
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ProfileCard({
  name,
  role,
  detail,
}: {
  name: string;
  role: string;
  detail: string;
}) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10 shadow-xl transition-all group hover:bg-white/[0.05]">
      <h4 className="mb-3 text-xl sm:text-2xl font-black uppercase tracking-tight leading-none text-white group-hover:text-cyan-400 break-words">
        {name}
      </h4>
      <p className="mb-6 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-widest text-cyan-400 opacity-80 break-words">
        {role}
      </p>
      <p className="text-sm font-medium leading-relaxed text-slate-400 break-words">
        {detail}
      </p>
    </article>
  );
}

export default function AboutUsPage() {
  return (
    <>
      <Header />
      {/* ¿Quienes Somos? Section */}
      <section
        id="acerca"
        className="relative bg-[#03060c] px-6 py-24 sm:py-32 lg:py-48 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:gap-24 lg:grid-cols-2">
            <div>
              <span className="mb-8 block text-xs font-black uppercase tracking-[0.5em] text-cyan-400">
                Sobre Nosotros
              </span>
              <h2 className="mb-8 text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white break-words">
                INGENIERÍA <br /> SIN LÍMITES
              </h2>
              <p className="mb-10 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-slate-400">
                GSITel Services S.A.C. emerge como el puente entre la
                infraestructura física y el potencial digital. Optimizamos redes
                nacionales y orquestamos flujos de software críticos para el
                país.
              </p>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 transition-all group hover:bg-white/[0.04]">
                  <MissionIcon />
                  <h3 className="mb-3 mt-6 text-2xl font-black uppercase tracking-tighter text-white group-hover:text-cyan-400">
                    Misión
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-500">
                    Impulsar la conectividad nacional mediante soluciones de
                    ingeniería de alto impacto y eficiencia operativa.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 transition-all group hover:bg-white/[0.04]">
                  <VisionIcon />
                  <h3 className="mb-3 mt-6 text-2xl font-black uppercase tracking-tighter text-white group-hover:text-blue-400">
                    Visión
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-500">
                    Ser el referente latinoamericano en despliegue de redes
                    móviles inteligentes y automatización industrial.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-6 sm:space-y-8">
                <ProfileCard
                  name="MARCO CASTRO RODAS"
                  role="CEO - Project Strategy Lead"
                  detail="Experto en redes móviles con trayectoria internacional liderando proyectos para los principales carriers del Perú."
                />
                <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-cyan-500 to-blue-600 p-8 sm:p-10 text-black shadow-2xl">
                  <span className="mb-2 block text-4xl sm:text-5xl font-black">
                    20+
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-80">
                    Años de Liderazgo
                  </span>
                </div>
              </div>
              <div className="space-y-6 sm:space-y-8 lg:mt-16">
                <ProfileCard
                  name="FABRIZZIO CASTRO"
                  role="Chief Technology Officer"
                  detail="Arquitecto de soluciones Full-Stack enfocado en automatización RPA y orquestación de datos escalables."
                />
                <div className="rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 bg-white/5 p-8 sm:p-10 shadow-xl backdrop-blur-md">
                  <span className="mb-2 block text-4xl sm:text-5xl font-black text-white break-words">
                    devops
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Software Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
