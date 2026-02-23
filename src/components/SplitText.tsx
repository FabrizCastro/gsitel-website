"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type SplitTextState = {
  opacity?: number;
  x?: number;
  y?: number;
  rotate?: number;
  scale?: number;
};

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  from?: SplitTextState;
  to?: SplitTextState;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  onLetterAnimationComplete?: () => void;
  showCallback?: boolean;
  preserveGradient?: boolean;
};

const easeMap: Record<string, string> = {
  "power3.out": "cubic-bezier(0.22, 1, 0.36, 1)",
  "power2.out": "cubic-bezier(0.22, 0.61, 0.36, 1)",
  "power1.out": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  "power4.out": "cubic-bezier(0.16, 1, 0.3, 1)",
};

const buildTransform = (state: SplitTextState) => {
  const x = state.x ?? 0;
  const y = state.y ?? 0;
  const rotate = state.rotate ?? 0;
  const scale = state.scale ?? 1;
  return `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`;
};

export default function SplitText({
  text,
  className,
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "left",
  onLetterAnimationComplete,
  showCallback = false,
  preserveGradient = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [gradientStyle, setGradientStyle] = useState<{
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
  } | null>(null);

  const { segments, lettersCount } = useMemo(() => {
    const words = text.split(" ");

    if (splitType === "words") {
      const wordSegments = words.map((word, index) => ({
        type: "word",
        value: index === words.length - 1 ? word : `${word} `,
      }));

      return {
        segments: wordSegments,
        lettersCount: wordSegments.length,
      };
    }

    const charSegments = words.map((word, index) => ({
      type: "chars",
      value: word,
      addSpace: index < words.length - 1,
    }));

    return {
      segments: charSegments,
      lettersCount: words.reduce((sum, word) => sum + word.length, 0),
    };
  }, [text, splitType]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (!preserveGradient) {
      return;
    }
    const element = containerRef.current;
    if (!element) {
      return;
    }
    const styles = window.getComputedStyle(element);
    setGradientStyle({
      backgroundImage: styles.backgroundImage,
      backgroundSize: styles.backgroundSize,
      backgroundPosition: styles.backgroundPosition,
      backgroundRepeat: styles.backgroundRepeat,
    });
  }, [preserveGradient, text, className]);

  useEffect(() => {
    if (!isVisible || !showCallback || !onLetterAnimationComplete) {
      return;
    }

    const totalDelay = delay * Math.max(lettersCount - 1, 0);
    const totalDuration = duration * 1000;
    const timer = window.setTimeout(
      () => onLetterAnimationComplete(),
      totalDelay + totalDuration
    );

    return () => window.clearTimeout(timer);
  }, [delay, duration, isVisible, onLetterAnimationComplete, segments, showCallback]);

  const timing = easeMap[ease] ?? ease;
  const fromTransform = buildTransform(from);
  const toTransform = buildTransform(to);
  const inheritedBackground =
    preserveGradient && gradientStyle
      ? {
          backgroundImage: gradientStyle.backgroundImage,
          backgroundSize: gradientStyle.backgroundSize,
          backgroundPosition: gradientStyle.backgroundPosition,
          backgroundRepeat: gradientStyle.backgroundRepeat,
        }
      : {};

  return (
    <span
      ref={containerRef}
      className={twMerge("inline-block", className)}
      style={{ textAlign }}
      aria-label={text}
    >
      {splitType === "words"
        ? segments.map((segment, index) => {
            const content =
              segment.type === "word" ? segment.value : String(segment.value);

            return (
              <span
                key={`${content}-${index}`}
                aria-hidden="true"
                className="inline-block will-change-transform"
                style={{
                  opacity: isVisible ? to.opacity ?? 1 : from.opacity ?? 0,
                  transform: isVisible ? toTransform : fromTransform,
                  transitionProperty: "transform, opacity",
                  transitionDuration: `${duration}s`,
                  transitionTimingFunction: timing,
                  transitionDelay: `${delay * index}ms`,
                  ...(preserveGradient ? inheritedBackground : {}),
                  WebkitBackgroundClip: preserveGradient ? "text" : undefined,
                  backgroundClip: preserveGradient ? "text" : undefined,
                  color: preserveGradient ? "transparent" : "inherit",
                  WebkitTextFillColor: preserveGradient ? "transparent" : undefined,
                }}
              >
                {content}
              </span>
            );
          })
        : (() => {
            let letterIndex = 0;

            return segments.map((segment, index) => {
              if (segment.type !== "chars") {
                return null;
              }

              const letters = Array.from(segment.value);

              return (
                <span
                  key={`${segment.value}-${index}`}
                  aria-hidden="true"
                  className="inline-block whitespace-nowrap"
                >
                  {letters.map((letter, letterOffset) => {
                    const animationIndex = letterIndex++;
                    return (
                      <span
                        key={`${letter}-${letterOffset}`}
                        className="inline-block will-change-transform"
                        style={{
                          opacity: isVisible ? to.opacity ?? 1 : from.opacity ?? 0,
                          transform: isVisible ? toTransform : fromTransform,
                          transitionProperty: "transform, opacity",
                          transitionDuration: `${duration}s`,
                          transitionTimingFunction: timing,
                          transitionDelay: `${delay * animationIndex}ms`,
                          ...(preserveGradient ? inheritedBackground : {}),
                          WebkitBackgroundClip: preserveGradient ? "text" : undefined,
                          backgroundClip: preserveGradient ? "text" : undefined,
                          color: preserveGradient ? "transparent" : "inherit",
                          WebkitTextFillColor: preserveGradient
                            ? "transparent"
                            : undefined,
                        }}
                      >
                        {letter}
                      </span>
                    );
                  })}
                  {segment.addSpace ? (
                    <span className="inline-block" aria-hidden="true">
                      {"\u00A0"}
                    </span>
                  ) : null}
                </span>
              );
            });
          })()}
    </span>
  );
}
