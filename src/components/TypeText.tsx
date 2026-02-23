"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type TypeTextProps = {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  cursor?: boolean;
  cursorClassName?: string;
};

export default function TypeText({
  text,
  className,
  speed = 35,
  startDelay = 0,
  cursor = true,
  cursorClassName,
}: TypeTextProps) {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(startDelay === 0);

  useEffect(() => {
    setIndex(0);
    setStarted(startDelay === 0);
  }, [text, startDelay]);

  useEffect(() => {
    if (started) {
      return;
    }
    const timer = window.setTimeout(() => setStarted(true), startDelay);
    return () => window.clearTimeout(timer);
  }, [startDelay, started]);

  useEffect(() => {
    if (!started || index >= text.length) {
      return;
    }
    const timer = window.setTimeout(() => setIndex((prev) => prev + 1), speed);
    return () => window.clearTimeout(timer);
  }, [index, speed, started, text.length]);

  return (
    <span
      className={twMerge("inline-block", className)}
      aria-label={text}
      role="text"
    >
      {text.slice(0, index)}
      {cursor ? (
        <span className={twMerge("type-cursor", cursorClassName)} />
      ) : null}
    </span>
  );
}
