import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias y Blog",
  description:
    "Noticias y actualidad en software, automatización y telecom en LATAM: inversiones, transformación digital y redes móviles.",
  alternates: {
    canonical: "/blog",
  },
  keywords: [
    "noticias",
    "software",
    "automatización",
    "telecom",
    "LATAM",
    "innovación",
    "tecnología",
  ],
  openGraph: {
    title: "Noticias y Blog | GSITEL Services S.A.C.",
    description:
      "Actualidad de software, automatización y telecom en LATAM: inversiones, cloud, data centers y redes móviles.",
    url: "https://gsitelservices.com/blog",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noticias y Blog GSITEL Services S.A.C.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noticias y Blog | GSITEL Services S.A.C.",
    description:
      "Actualidad de software, automatización y telecom en LATAM: inversiones, cloud, data centers y redes móviles.",
    images: ["/og-image.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
