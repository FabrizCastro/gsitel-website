"use client";

import { useMemo, useState } from "react";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

type BlogCategory = "Todos" | "Telecom" | "Automatización" | "Corporativo";

type NewsItem = {
  image: string;
  date: string;
  category: BlogCategory | "Telecom" | "Automatización" | "Corporativo";
  title: string;
  excerpt: string;
  link: string;
};

const newsItems: NewsItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    date: "AUG 01, 2025",
    category: "Automatización",
    title: "SAP NOW AI Tour Colombia 2025: IA y nube para transformar negocios",
    excerpt:
      "El evento reunió a más de 900 asistentes y 80 sesiones sobre IA, nube y datos para acelerar la transformación empresarial.",
    link: "https://news.sap.com/latinamerica/2025/08/sap-now-ai-tour-colombia-2025-la-inteligencia-artificial-toma-el-mando-en-los-negocios/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200",
    date: "OCT 06, 2025",
    category: "Automatización",
    title:
      "SAP integra IA, datos y aplicaciones en su Business Suite",
    excerpt:
      "La compañía presentó avances para conectar IA, datos y apps en una experiencia unificada para decisiones más inteligentes.",
    link: "https://news.sap.com/latinamerica/2025/10/la-suite-de-negocios-de-sap-integra-la-ia-datos-y-aplicaciones-para-liderar-la-transformacion-empresarial-del-futuro/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200",
    date: "JUN 02, 2025",
    category: "Automatización",
    title:
      "DXC relanza Fast RISE con SAP en México sobre Azure",
    excerpt:
      "El relanzamiento busca acelerar migraciones a SAP S/4HANA Cloud con residencia local de datos y procesos más ágiles.",
    link: "https://investors.dxc.com/investor-news/news-details/2025/DXC-relaunches-SAP-Fast-RISE-offering-in-Mexico-powered-by-Microsoft-Azure-to-accelerate-secure-and-local-digital-transformation/default.aspx",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    date: "DEC 12, 2024",
    category: "Corporativo",
    title:
      "Perú impulsa transformación digital inclusiva para MYPEs y mercados",
    excerpt:
      "UNDP apoyó una misión de aprendizaje para modernizar mercados tradicionales con herramientas digitales.",
    link: "https://www.undp.org/policy-centre/seoul/news/peru-explores-koreas-inclusive-digital-transformation-strategies-empower-msmes-and-traditional-markets",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
    date: "SEP 09, 2025",
    category: "Telecom",
    title:
      "Entel anuncia inversión de US$640 millones para 4G/5G en Chile y Perú",
    excerpt:
      "El plan 2025 prioriza expansión móvil, fibra hogar y servicios digitales en ambos países.",
    link: "https://www.entel.pe/noticias/junta-accionistas-entel-inverte-red-movil-4g-y-5g-chile-peru-tambien-apuesta-por-direct-to-cell-de-starlink",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    date: "SEP 15, 2025",
    category: "Telecom",
    title: "Perú adjudica espectro 5G a cuatro operadores",
    excerpt:
      "Bitel, Claro, Entel e Integratel obtienen bloques 3.3–3.8 GHz con compromisos de inversión y cobertura.",
    link: "https://developingtelecoms.com/telecom-business/telecom-regulation/19066-four-operators-win-5g-spectrum-in-peru.html",
  },
];

// NewsCard Component
function NewsCard({
  image,
  date,
  title,
  excerpt,
  category,
  link,
}: {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`${title} (abre en una nueva pestaña)`}
      className="group block"
    >
      <article className="cursor-pointer bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden transition-all hover:-translate-y-4 hover:border-cyan-500/30 hover:shadow-2xl backdrop-blur-sm min-w-0">
        <div className="h-64 overflow-hidden relative">
          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <span className="bg-black/90 backdrop-blur-md text-[9px] font-black text-cyan-400 tracking-[0.3em] uppercase px-4 py-2 rounded-full border border-white/10">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6 sm:p-10 min-w-0">
          <span className="text-[9px] sm:text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 block">
            {date}
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-white mb-5 sm:mb-6 leading-tight group-hover:text-cyan-400 transition-colors uppercase tracking-tighter break-words">
            {title}
          </h4>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 sm:mb-10 font-medium line-clamp-3 break-words">
            {excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[9px] sm:text-[10px] font-black text-white uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            Continuar leyendo <span className="text-cyan-400">→</span>
          </div>
        </div>
      </article>
    </a>
  );
}

export default function BlogPage() {
  const [blogCategory, setBlogCategory] = useState<BlogCategory>("Todos");
  const featuredItem = newsItems[0];

  const filteredNews = useMemo(() => {
    if (blogCategory === "Todos") {
      return newsItems;
    }
    return newsItems.filter((item) => item.category === blogCategory);
  }, [blogCategory]);

  return (
    <>
      <Header />
      {/* Blog & News Section */}
      <section
        id="noticias"
        className="py-32 sm:py-48 px-6 bg-[#03060c] relative border-b border-white/5 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 sm:mb-24 gap-10 sm:gap-12">
            <div className="max-w-3xl min-w-0">
              <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.5em] mb-6 block">
                Insights & Actualidad
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] break-words">
                PORTAL DE <br />{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
                  CONOCIMIENTO
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-xl gap-2 max-w-full">
              {([
                "Todos",
                "Telecom",
                "Automatización",
                "Corporativo",
              ] as BlogCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setBlogCategory(cat)}
                  className={`px-4 py-3 sm:px-8 sm:py-4 rounded-xl font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-widest transition-all ${
                    blogCategory === cat
                      ? "bg-white text-black shadow-lg"
                      : "text-slate-500 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post (Noticia Importante) */}
          {blogCategory === "Todos" && (
            <div className="mb-24 group cursor-pointer overflow-hidden rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-cyan-500/40 transition-all">
              <a
                href={featuredItem.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${featuredItem.title} (abre en una nueva pestaña)`}
                className="grid lg:grid-cols-2"
              >
                <div className="relative h-56 sm:h-[320px] lg:h-auto overflow-hidden">
                  <img
                    src={featuredItem.image}
                    alt={featuredItem.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-cyan-500 text-black px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest">
                      Destacado
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-12 lg:p-20 flex flex-col justify-center min-w-0">
                  <span className="text-slate-500 font-black text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6">
                    {featuredItem.category} | {featuredItem.date}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-6 sm:mb-8 leading-tight uppercase tracking-tighter group-hover:text-cyan-400 transition-colors break-words">
                    {featuredItem.title}
                  </h3>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 font-medium">
                    {featuredItem.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-[12px] font-black text-white uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                    Leer Artículo Completo{" "}
                    <span className="text-cyan-400 animate-bounce">→</span>
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredNews.map((item, idx) => (
              <NewsCard
                key={idx}
                image={item.image}
                date={item.date}
                category={item.category}
                title={item.title}
                excerpt={item.excerpt}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
