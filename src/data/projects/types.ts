import type { StaticImageData } from "next/image";

export type ProjectCardData = {
  id: string;
  title: string;
  tag: string;
  description: string;
  detail?: string;
  highlights: string[];
  image: StaticImageData;
  imageAlt: string;
  accent: string;
  techTags?: string[];
  detailImagesKey?: string;
};

export type ProjectDetailImage = {
  src: StaticImageData;
  alt: string;
};
