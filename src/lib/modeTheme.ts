import type { SiteMode } from "@/lib/siteMode";

export const getModeTheme = (mode: SiteMode) => {
  const isTelecom = mode === "telecom";

  return {
    isTelecom,
    accent: isTelecom ? "#f39c36" : "#22d3ee",
    accentRgb: isTelecom ? "243, 156, 54" : "34, 211, 238",
    secondary: isTelecom ? "#fbbf24" : "#3b82f6",
    mesh: isTelecom ? "mesh-dark-telecom" : "mesh-dark",
    tagClass: isTelecom
      ? "border-amber-200/40 bg-amber-500/20 !text-amber-50"
      : "border-cyan-200/40 bg-cyan-500/20 !text-cyan-50",
    gradientText: isTelecom
      ? "from-white via-amber-100 to-amber-400"
      : "from-white via-cyan-100 to-[#7fb7ff]",
    phase1Border: isTelecom
      ? "border-amber-400/25 hover:border-amber-400/45"
      : "border-cyan-400/25 hover:border-cyan-400/45",
    phase1Glow: isTelecom
      ? "shadow-[0_0_60px_rgba(243,156,54,0.12)]"
      : "shadow-[0_0_60px_rgba(34,211,238,0.12)]",
    phase2Border: isTelecom
      ? "border-orange-500/25 hover:border-orange-500/45"
      : "border-blue-500/25 hover:border-blue-500/45",
    phase1Icon: isTelecom
      ? "bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-[0_0_40px_rgba(243,156,54,0.35)]"
      : "bg-gradient-to-br from-cyan-400 to-cyan-600 text-black shadow-[0_0_40px_rgba(34,211,238,0.35)]",
    phase2Icon: isTelecom
      ? "bg-gradient-to-br from-orange-500 to-amber-700 text-white shadow-[0_0_40px_rgba(234,88,12,0.35)]"
      : "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-[0_0_40px_rgba(37,99,235,0.35)]",
    ctaPrimary: isTelecom
      ? "bg-gradient-to-r from-amber-500 to-orange-600 shadow-[0_16px_40px_rgba(243,156,54,0.3)] hover:from-amber-400 hover:to-orange-500"
      : "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_16px_40px_rgba(37,99,235,0.3)] hover:from-blue-500 hover:to-cyan-400",
  };
};
