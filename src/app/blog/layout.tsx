import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias y Blog",
  description:
    "Noticias y actualidad en software, automatización y telecom en LATAM: inversiones, transformación digital y redes móviles.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Noticias y Blog | GSITEL Services S.A.C.",
    description:
      "Actualidad de software, automatización y telecom en LATAM: inversiones, cloud, data centers y redes móviles.",
    url: "https://gsitelservices.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noticias y Blog | GSITEL Services S.A.C.",
    description:
      "Actualidad de software, automatización y telecom en LATAM: inversiones, cloud, data centers y redes móviles.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
