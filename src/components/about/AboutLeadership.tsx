import { MotionInView } from "@/components/MotionInView";

const leaders = [
  {
    name: "Marco Castro Rodas",
    role: "CEO · Líder de estrategia de proyectos",
    specialty: "Ingeniero de Telecomunicaciones",
    description:
      "Especialista en redes móviles con experiencia internacional liderando proyectos para los principales operadores del Perú.",
  },
  {
    name: "Fabrizzio Castro",
    role: "Chief Technology Officer",
    specialty: "Ingeniero de Software",
    description:
      "Arquitecto de soluciones enfocado en desarrollo de productos, automatización y sistemas de datos escalables.",
  },
];

export const AboutLeadership = () => {
  return (
    <section className="relative bg-[#020408] px-4 py-20 text-white sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute inset-0 mesh-dark opacity-50" />

      <div className="relative mx-auto max-w-7xl">
        <MotionInView className="max-w-2xl">
          <p className="section-eyebrow-dark">Liderazgo</p>
          <h2 className="section-title-dark">Experiencia técnica en cada decisión.</h2>
          <p className="section-desc-dark">
            La dirección participa de forma activa en la estrategia y ejecución
            de cada proyecto.
          </p>
        </MotionInView>

        <div className="mt-12 grid border-y border-white/15 md:grid-cols-2">
          {leaders.map((leader, index) => (
            <MotionInView
              key={leader.name}
              delay={index * 0.08}
              x={index === 0 ? -28 : 28}
              y={0}
              className="group py-9 md:px-10 md:py-12 md:first:pl-0 md:last:border-l md:last:border-white/15 md:last:pr-0"
            >
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                {leader.name}
              </h3>
              <div className="mt-6 grid gap-5 border-t border-white/10 pt-5 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.22em] text-white/35">
                    Cargo
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-cyan-300">
                    {leader.role}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.22em] text-white/35">
                    Especialidad
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-white/85">
                    {leader.specialty}
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                {leader.description}
              </p>
              <div className="mt-8 h-px w-10 bg-white/20 transition-all duration-500 group-hover:w-20 group-hover:bg-cyan-300" />
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  );
};
