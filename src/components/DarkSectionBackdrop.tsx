"use client";

import flutterIcon from "@/assets/apps-icon/FLUTTER.png";
import javaIcon from "@/assets/apps-icon/JAVA.png";
import mongoIcon from "@/assets/apps-icon/MONGO DB.png";
import nodeIcon from "@/assets/apps-icon/NODE JS.png";
import pythonIcon from "@/assets/apps-icon/PYTHON.png";
import reactIcon from "@/assets/apps-icon/REACT.png";
import typescriptIcon from "@/assets/apps-icon/TYPESCRIPT.png";
import { DotGrid } from "@/components/DotGrid";
import { getModeTheme } from "@/lib/modeTheme";
import type { SiteMode } from "@/lib/siteMode";
import Image from "next/image";

const stackFloatIcons = [
  { icon: reactIcon, label: "React", top: "12%", left: "8%", size: 44, delay: "0s" },
  { icon: pythonIcon, label: "Python", top: "22%", right: "10%", size: 40, delay: "1.2s" },
  { icon: nodeIcon, label: "Node", top: "58%", left: "5%", size: 38, delay: "0.6s" },
  { icon: flutterIcon, label: "Flutter", top: "68%", right: "7%", size: 42, delay: "1.8s" },
  { icon: typescriptIcon, label: "TS", top: "38%", right: "18%", size: 36, delay: "0.3s" },
  { icon: javaIcon, label: "Java", top: "78%", left: "22%", size: 34, delay: "2.1s" },
  { icon: mongoIcon, label: "Mongo", top: "18%", left: "28%", size: 32, delay: "1.5s" },
];

type DarkSectionBackdropProps = {
  mode: SiteMode;
  bottomBridge?: "software" | "telecom" | false;
};

export const DarkSectionBackdrop = ({
  mode,
  bottomBridge = false,
}: DarkSectionBackdropProps) => {
  const theme = getModeTheme(mode);
  const useSoftwareMask = !theme.isTelecom;

  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 ${
          theme.isTelecom
            ? "services-mesh-telecom"
            : "services-mesh-software services-deco-mask"
        }`}
      />
      <DotGrid
        dotSize={4}
        gap={18}
        baseColor="#15304f"
        activeColor={theme.accent}
        proximity={140}
        shockRadius={260}
        shockStrength={3}
        resistance={800}
        returnDuration={1.4}
        className={`opacity-20 ${useSoftwareMask ? "services-deco-mask" : ""}`}
      />
      <div
        className={`pointer-events-none absolute inset-0 grid-fine opacity-40 ${
          useSoftwareMask ? "services-deco-mask" : ""
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-0 ${
          theme.isTelecom
            ? "services-stack-glow"
            : "services-stack-glow-linear services-deco-mask"
        }`}
      />

      {!theme.isTelecom &&
        stackFloatIcons.map((item) => (
          <div
            key={item.label}
            className="pointer-events-none absolute hidden opacity-[0.07] animate-float lg:block"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              animationDelay: item.delay,
            }}
          >
            <Image
              src={item.icon}
              alt=""
              width={item.size}
              height={item.size}
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        ))}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020408] via-[#020408]/60 to-transparent" />

      {bottomBridge === "software" && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-52 services-bridge-software" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-4 bg-[#1e4fad]" />
        </>
      )}
      {bottomBridge === "telecom" && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 services-bridge-telecom" />
      )}
    </>
  );
};
