"use client";

import { useEffect } from "react";

export const ClientRuntimeGuard = () => {
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason instanceof Event) {
        event.preventDefault();
        console.warn("Ignored browser event rejection", event.reason.type);
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    return () =>
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection,
      );
  }, []);

  return null;
};
