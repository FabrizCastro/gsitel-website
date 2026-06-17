"use client";

import { motion, type Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

type MotionInViewProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export const MotionInView = ({
  children,
  className,
  delay = 0,
  y = 24,
}: MotionInViewProps) => (
  <motion.div
    className={twMerge(className)}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-48px" }}
    transition={{
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    {children}
  </motion.div>
);

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};
