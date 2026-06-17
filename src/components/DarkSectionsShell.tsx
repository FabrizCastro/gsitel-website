"use client";

import { DarkSectionBackdrop } from "@/components/DarkSectionBackdrop";
import type { SiteMode } from "@/lib/siteMode";
import type { ReactNode } from "react";

type DarkSectionsShellProps = {
  mode: SiteMode;
  children: ReactNode;
};

export const DarkSectionsShell = ({ mode, children }: DarkSectionsShellProps) => {
  const isTelecom = mode === "telecom";

  return (
    <div className="relative overflow-hidden bg-[#020408] text-white">
      <DarkSectionBackdrop
        mode={mode}
        bottomBridge={isTelecom ? "telecom" : "software"}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
