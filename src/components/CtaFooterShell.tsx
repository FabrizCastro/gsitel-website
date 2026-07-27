"use client";

import type { ReactNode } from "react";

type CtaFooterShellProps = {
  children: ReactNode;
};

export const CtaFooterShell = ({ children }: CtaFooterShellProps) => {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#0a2348_0%,#081d3f_38%,#06172f_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(47,158,219,0.12),transparent_50%),radial-gradient(ellipse_at_80%_100%,rgba(37,99,235,0.08),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 grid-fine opacity-30" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
