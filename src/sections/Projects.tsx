"use client";

import CheckIcon from "@/assets/icons/check.svg";
import { AppModal } from "@/components/AppModal";
import { DotGrid } from "@/components/DotGrid";
import { MotionInView, staggerContainer, staggerItem } from "@/components/MotionInView";
import type {
  ProjectCardData,
  ProjectDetailImage,
} from "@/data/projects/types";
import { softwareProjects } from "@/data/projects/software";
import { telecomProjects } from "@/data/projects/telecom";
import type { SiteMode } from "@/lib/siteMode";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const renderTechIcon = (tech: string, sizeClass = "h-3.5 w-3.5") => {
  const key = tech.toLowerCase();
  switch (key) {
    case "python":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3c3.314 0 3 2.238 3 2.238v2.32h-6V5.238S9 3 12 3zm3 6.762H9a3 3 0 0 0-3 3v2.5A3 3 0 0 0 9 18h1.2v-2.4H9a.9.9 0 0 1-.9-.9v-2.5a.9.9 0 0 1 .9-.9h6a.9.9 0 0 1 .9.9v.6H18v-.6a3 3 0 0 0-3-3zM12 21c-3.314 0-3-2.238-3-2.238v-2.32h6v2.32S15 21 12 21z"
          />
        </svg>
      );
    case "sql":
    case "mysql":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3C7.582 3 4 4.79 4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7c0-2.21-3.582-4-8-4zm0 2c3.866 0 6 .96 6 2s-2.134 2-6 2-6-.96-6-2 2.134-2 6-2zm0 6c3.866 0 6 .96 6 2s-2.134 2-6 2-6-.96-6-2 2.134-2 6-2zm0 6c3.866 0 6 .96 6 2s-2.134 2-6 2-6-.96-6-2 2.134-2 6-2z"
          />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M5 12c2.5-4.33 11.5-4.33 14 0-2.5 4.33-11.5 4.33-14 0z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M12 5c4.33 2.5 4.33 11.5 0 14-4.33-2.5-4.33-11.5 0-14z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M6.2 7.2c4.2-1.2 8.4 3 7.2 7.2-4.2 1.2-8.4-3-7.2-7.2z"
          />
        </svg>
      );
    case ".net core":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9zm0 3a6 6 0 1 1-6 6 6.01 6.01 0 0 1 6-6zm-1.2 3.5h1.2l2 5h-1.3l-.4-1.1h-1.8l-.4 1.1h-1.3l2-5zm-.2 2.2h1l-.5-1.4z"
          />
        </svg>
      );
    case "n8n":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM7 15a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
          />
          <path
            fill="currentColor"
            d="M9 7h6v2H9zM9 15h6v2H9zM7 9h2v6H7zM15 9h2v6h-2z"
          />
        </svg>
      );
    case "apis":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <path
            fill="currentColor"
            d="M8.5 6a3.5 3.5 0 0 0 0 7H11v-2H8.5a1.5 1.5 0 1 1 0-3H11V6H8.5zm4.5 7h2.5a3.5 3.5 0 0 0 0-7H13v2h2.5a1.5 1.5 0 1 1 0 3H13v2z"
          />
          <path fill="currentColor" d="M9 11h6v2H9z" />
        </svg>
      );
    case "ui/ux":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 5h16v10H4zM6 7v6h6V7H6zm8 0v2h4V7h-4zm0 4v2h4v-2h-4zM4 17h7v2H4z"
          />
        </svg>
      );
    case "web design":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <path fill="currentColor" d="M4 5h16v10H4zM2 17h20v2H2z" />
        </svg>
      );
    case "seo":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <path
            fill="currentColor"
            d="M10 4a6 6 0 1 0 3.7 10.7l3.9 3.9 1.4-1.4-3.9-3.9A6 6 0 0 0 10 4zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
          />
        </svg>
      );
    case "spring boot":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4c-3 2-5 5-5 8a5 5 0 0 0 10 0c0-3-2-6-5-8zm-1 6h2v6h-2z"
          />
        </svg>
      );
    case "microservices":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6zM10 10h4v4h-4z"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} aria-hidden="true">
          <circle cx="12" cy="12" r="6" fill="currentColor" />
        </svg>
      );
  }
};

const ProjectCard = ({
  title,
  desc,
  tags,
  techTags,
  accent,
  image,
  imageAlt,
  tag,
  onOpen,
  isSoftware = false,
}: {
  title: string;
  desc: string;
  tags: string[];
  techTags?: string[];
  accent: string;
  image: StaticImageData;
  imageAlt: string;
  tag: string;
  onOpen: () => void;
  isSoftware?: boolean;
}) => {
  const previewTech = techTags?.slice(0, 3) ?? [];
  const techIconSize = isSoftware ? "h-5 w-5" : "h-3.5 w-3.5";

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className="group relative flex flex-col overflow-hidden rounded-[1.35rem] border border-white/80 bg-white shadow-[0_16px_48px_rgba(15,23,42,0.1)] transition-shadow duration-500 hover:border-[#2f9edb]/25 hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]"
    >
      <div
        className="absolute inset-x-0 top-0 h-1 opacity-70 transition group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      <div
        className={`relative flex items-center gap-4 border-b border-[#0b1d3a]/6 bg-[linear-gradient(135deg,#f8faff_0%,#eef3ff_100%)] ${
          isSoftware ? "px-5 py-5" : "px-5 py-4"
        }`}
      >
        <div
          className={`flex shrink-0 items-center justify-center rounded-2xl ring-1 ring-[#0b1d3a]/8 ${
            isSoftware ? "h-14 w-14" : "h-12 w-12"
          }`}
          style={{ background: `linear-gradient(135deg, ${accent}18, ${accent}08)` }}
        >
          <Image
            src={image}
            alt={imageAlt}
            loading="lazy"
            className={`object-contain transition duration-500 group-hover:scale-110 ${
              isSoftware ? "h-8 w-8" : "h-7 w-7"
            }`}
          />
        </div>
        <div className="min-w-0 flex-1">
          <span
            className={`font-black uppercase tracking-[0.24em] text-[#0b1d3a]/50 ${
              isSoftware ? "text-[11px]" : "text-[9px]"
            }`}
          >
            {tag}
          </span>
          <h4
            className={`mt-0.5 line-clamp-2 font-black uppercase leading-tight tracking-tight text-[#0b1d3a] ${
              isSoftware ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg"
            }`}
          >
            {title}
          </h4>
        </div>
        <span
          className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0b1d3a]/10 bg-white text-[#1b5aa6] opacity-0 transition duration-300 group-hover:opacity-100 sm:flex"
          aria-hidden="true"
        >
          →
        </span>
      </div>

      <div className={`flex flex-1 flex-col ${isSoftware ? "p-5 sm:p-6" : "p-5"}`}>
        <p
          className={`line-clamp-2 text-[#0b1d3a]/70 ${
            isSoftware ? "text-base leading-7" : "text-sm leading-6"
          }`}
        >
          {desc}
        </p>

        <div className={`mt-4 flex flex-wrap ${isSoftware ? "gap-2" : "gap-1.5"}`}>
          {tags.slice(0, 2).map((tagItem) => (
            <span
              key={tagItem}
              className={`inline-flex items-center gap-1.5 rounded-lg border border-[#0b1d3a]/8 bg-[#f5f7ff] font-bold uppercase tracking-wide text-[#0b1d3a]/65 ${
                isSoftware
                  ? "px-3 py-1.5 text-xs"
                  : "px-2.5 py-1 text-[9px]"
              }`}
            >
              <CheckIcon
                className={`text-[#1b5aa6] ${isSoftware ? "h-3.5 w-3.5" : "h-2.5 w-2.5"}`}
              />
              <span className="line-clamp-1">{tagItem}</span>
            </span>
          ))}
        </div>

        {previewTech.length > 0 && (
          <div className={`mt-4 flex flex-wrap ${isSoftware ? "gap-2" : "gap-1.5"}`}>
            {previewTech.map((tech) => (
              <span
                key={tech}
                className={`inline-flex items-center rounded-full border border-[#0b1d3a]/8 bg-white font-bold uppercase tracking-wide text-[#0b1d3a]/60 ${
                  isSoftware
                    ? "gap-2 px-3 py-1.5 text-xs"
                    : "gap-1.5 px-2.5 py-1 text-[9px]"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center rounded-full bg-[#0b1d3a]/6 text-[#1b5aa6] ${
                    isSoftware ? "h-7 w-7" : "h-4 w-4"
                  }`}
                >
                  {renderTechIcon(tech, techIconSize)}
                </span>
                {tech}
              </span>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={onOpen}
          className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#0b1d3a]/10 bg-[#0b1d3a]/[0.03] font-black uppercase tracking-[0.18em] text-[#0b1d3a]/70 transition hover:border-[#2f9edb]/30 hover:bg-[#2f9edb]/8 hover:text-[#1b5aa6] sm:w-auto ${
            isSoftware ? "px-5 py-3.5 text-xs" : "px-4 py-3 text-[10px]"
          }`}
        >
          Ver detalle técnico
          <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
            →
          </span>
        </button>
      </div>
    </motion.article>
  );
};

export const Projects = ({ mode }: { mode: SiteMode }) => {
  const [projects, setProjects] = useState<ProjectCardData[]>([]);
  const [activeProject, setActiveProject] = useState<ProjectCardData | null>(
    null,
  );
  const [detailImages, setDetailImages] = useState<ProjectDetailImage[]>([]);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [activeImage, setActiveImage] = useState<ProjectDetailImage | null>(
    null,
  );
  const isTelecom = mode === "telecom";

  useEffect(() => {
    setProjects(isTelecom ? telecomProjects : softwareProjects);
  }, [isTelecom]);

  const handleOpenProject = async (project: ProjectCardData) => {
    setActiveProject(project);
    setDetailImages([]);
    setActiveImage(null);

    if (!project.detailImagesKey) {
      return;
    }

    setIsLoadingDetails(true);
    try {
      const { loadProjectDetailImages } = await import(
        "@/data/projects/detailImages"
      );
      const images = await loadProjectDetailImages(project.detailImagesKey);
      setDetailImages(images);
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const handleCloseProject = () => {
    setActiveProject(null);
    setDetailImages([]);
    setActiveImage(null);
  };

  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-[#EAEEFE] px-4 section-shell scroll-mt-24 sm:px-6 md:scroll-mt-28"
    >
      <DotGrid
        dotSize={4}
        gap={18}
        baseColor="#9eb3d8"
        activeColor={isTelecom ? "#f39c36" : "#2f9edb"}
        proximity={140}
        shockRadius={260}
        shockStrength={3}
        resistance={800}
        returnDuration={1.4}
        className="opacity-20"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(234,238,254,0.96),rgba(234,238,254,0.88))]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionInView className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="section-eyebrow-light">Proyectos</p>
            <h2 className="section-title-light">
              {isTelecom ? "Experiencia telecom" : "Casos de software"}
            </h2>
            <p className="section-desc-light">
              {isTelecom
                ? "RAN, rollout y soporte con operadores regionales."
                : "Plataformas y automatizaciones con impacto medible."}
            </p>
          </div>
          <span className="w-fit rounded-full border border-[#0b1d3a]/10 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#0b1d3a]/65 backdrop-blur">
            {isTelecom ? "Modo telecom" : "Modo software"}
          </span>
        </MotionInView>

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              desc={project.description}
              tags={project.highlights}
              techTags={project.techTags}
              accent={project.accent}
              image={project.image}
              imageAlt={project.imageAlt}
              tag={project.tag}
              isSoftware={!isTelecom}
              onOpen={() => void handleOpenProject(project)}
            />
          ))}
        </motion.div>
      </div>

      <AppModal
        isOpen={!!activeProject}
        onClose={handleCloseProject}
        ariaLabel={
          activeProject
            ? `Detalle técnico de ${activeProject.title}`
            : "Detalle técnico"
        }
        maxWidth="3xl"
        panelClassName="border-white/20 bg-white p-6 sm:p-10"
      >
        {activeProject && (
          <>
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
              style={{
                background: `radial-gradient(circle, ${activeProject.accent}30, transparent 70%)`,
              }}
            />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1b5aa6]/70">
                  Detalle técnico
                </span>
                <h3 className="mt-3 break-words text-2xl font-black uppercase tracking-tight text-[#0b1d3a] sm:text-3xl">
                  {activeProject.title}
                </h3>
                <p className="mt-4 whitespace-pre-line text-sm font-medium leading-7 text-[#0b1d3a]/80 sm:text-base">
                  {activeProject.detail ?? activeProject.description}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseProject}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0b1d3a]/15 bg-[#0b1d3a]/5 text-[#0b1d3a] transition hover:bg-[#0b1d3a]/10"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            {activeProject.techTags && activeProject.techTags.length > 0 && (
              <motion.div
                className="relative mt-8 flex flex-wrap gap-2.5"
                initial="hidden"
                animate="show"
                variants={staggerContainer}
              >
                {activeProject.techTags.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={staggerItem}
                    className="inline-flex items-center gap-2 rounded-2xl border border-[#0b1d3a]/12 bg-[#f5f7ff] px-4 py-2 text-[11px] font-black uppercase tracking-widest text-[#0b1d3a]/70"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b1d3a]/10 text-[#1b5aa6]">
                      {renderTechIcon(tech)}
                    </span>
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {isLoadingDetails && (
              <div className="relative mt-8 flex items-center gap-3">
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-[#2f9edb]/30 border-t-[#2f9edb]" />
                <p className="text-sm font-semibold text-[#0b1d3a]/60">
                  Cargando capturas...
                </p>
              </div>
            )}

            {detailImages.length > 0 && (
              <motion.div
                className="relative mt-8 grid gap-4 sm:grid-cols-2"
                initial="hidden"
                animate="show"
                variants={staggerContainer}
              >
                {detailImages.map((imageItem) => (
                  <motion.button
                    key={imageItem.alt}
                    type="button"
                    variants={staggerItem}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveImage(imageItem)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#0b1d3a]/10 bg-[#f5f7ff] focus:outline-none focus:ring-2 focus:ring-[#2f9edb]/60"
                    aria-label={`Ampliar ${imageItem.alt}`}
                  >
                    <Image
                      src={imageItem.src}
                      alt={imageItem.alt}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0b1d3a]/0 transition group-hover:bg-[#0b1d3a]/20">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#0b1d3a] opacity-0 transition group-hover:opacity-100">
                        Ampliar
                      </span>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}

            <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleCloseProject}
                className="w-full rounded-xl border border-[#0b1d3a]/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0b1d3a]/80 transition hover:bg-[#0b1d3a]/5 sm:w-auto"
              >
                Cerrar
              </button>
            </div>
          </>
        )}
      </AppModal>

      <AppModal
        isOpen={!!activeImage}
        onClose={() => setActiveImage(null)}
        ariaLabel={activeImage?.alt ?? "Imagen ampliada"}
        maxWidth="5xl"
        panelClassName="border-white/20 bg-[#0a0f1a] p-4 sm:p-6"
      >
        {activeImage && (
          <>
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Cerrar imagen"
            >
              ×
            </button>
            <div className="relative h-[55vh] w-full sm:h-[65vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              {activeImage.alt}
            </p>
          </>
        )}
      </AppModal>
    </section>
  );
};
