"use client";

import { motion, type Variants } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

type MotionInViewProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
};

export const MotionInView = ({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0,
}: MotionInViewProps) => {
  const prefersReducedMotion = useHydratedReducedMotion();

  return (
    <motion.div
      className={twMerge(className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] },
  },
};
