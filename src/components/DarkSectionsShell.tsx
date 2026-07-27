"use client";

import type { SiteMode } from "@/lib/siteMode";
import type { ReactNode } from "react";

type DarkSectionsShellProps = {
  mode: SiteMode;
  children: ReactNode;
};

export const DarkSectionsShell = ({ children }: DarkSectionsShellProps) => (
  <div className="relative overflow-hidden bg-[#EAEEFE]">
    <div className="quiet-texture pointer-events-none absolute inset-0 opacity-20" />
    <div className="relative z-10">{children}</div>
  </div>
);
