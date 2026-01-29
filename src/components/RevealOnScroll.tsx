"use client";

import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const RevealOnScroll = ({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={twMerge("reveal-on-scroll", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
