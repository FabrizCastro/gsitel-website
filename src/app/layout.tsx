import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gsitelservices.com"),
  title: {
    default: "GSITEL Services S.A.C.",
    template: "%s | GSITEL Services S.A.C.",
  },
  description:
    "GSITEL Services S.A.C. ofrece soluciones en software, automatización e ingeniería RAN para redes móviles y operaciones críticas.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "GSITEL",
    "telecomunicaciones",
    "RAN",
    "ingeniería RAN",
    "automatización",
    "software a medida",
    "integración RAN",
    "optimización de redes",
    "proyectos telecom",
    "Perú",
  ],
  applicationName: "GSITEL Services",
  authors: [{ name: "GSITEL Services S.A.C." }],
  creator: "GSITEL Services S.A.C.",
  publisher: "GSITEL Services S.A.C.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "GSITEL Services S.A.C.",
    description:
      "Soluciones en software y telecom: automatización, integración y soporte RAN multivendor.",
    type: "website",
    locale: "es_PE",
    siteName: "GSITEL Services S.A.C.",
    url: "https://gsitelservices.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSITEL Services S.A.C.",
    description:
      "Soluciones en software y telecom: automatización, integración y soporte RAN multivendor.",
  },
  category: "Technology",
};

export const viewport: Viewport = {
  themeColor: "#0b1d3a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
