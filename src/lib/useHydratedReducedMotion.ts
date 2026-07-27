"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Keeps the first client render equal to the server render.
 * The media-query result is intentionally applied only after hydration.
 */
export const useHydratedReducedMotion = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated && !!prefersReducedMotion;
};
