import { MotionInView } from "@/components/MotionInView";

const purposeItems = [
  {
    number: "01",
    label: "Misión",
    title: "Mejorar operaciones mediante ingeniería y tecnología.",
    description:
      "Diseñamos soluciones que conectan personas, procesos e infraestructura con mayor control y eficiencia.",
  },
  {
    number: "02",
    label: "Visión",
    title: "Ser un socio tecnológico de referencia en Latinoamérica.",
    description:
      "Queremos impulsar organizaciones más conectadas, automatizadas y preparadas para crecer.",
  },
];

export const AboutPurpose = () => {
  return (
    <section id="proposito" className="bg-[#eaeefe] px-4 py-20 text-[#06111f] sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <MotionInView className="max-w-2xl">
          <p className="section-eyebrow-light">Nuestro propósito</p>
          <h2 className="section-title-light">Lo que guía nuestro trabajo.</h2>
        </MotionInView>

        <div className="mt-12 grid border-y border-[#06111f]/15 md:grid-cols-2">
          {purposeItems.map((item, index) => (
            <MotionInView
              key={item.label}
              delay={index * 0.08}
              x={index === 0 ? -28 : 28}
              y={0}
              className="py-9 md:px-10 md:py-12 md:first:pl-0 md:last:border-l md:last:border-[#06111f]/15 md:last:pr-0"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black tracking-[0.22em] text-[#1b5aa6]">
                  {item.number}
                </span>
                <span className="h-px w-8 bg-[#1b5aa6]/30" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0b1d3a]/50">
                  {item.label}
                </span>
              </div>
              <h3 className="mt-6 max-w-lg text-2xl font-black leading-tight text-[#06111f] sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#0b1d3a]/65 sm:text-base">
                {item.description}
              </p>
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  );
};
