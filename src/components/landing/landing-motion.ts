"use client";

import { useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

/** Smooth deceleration — reads calmer and more “product” than snappy defaults. */
export const easeOut = [0.16, 1, 0.3, 1] as const;

/** Scroll reveal for full-width sections. Respects reduced motion. */
export function useScrollReveal(): Pick<
  HTMLMotionProps<"section">,
  "initial" | "whileInView" | "viewport" | "transition"
> {
  const reduce = useReducedMotion();
  if (reduce) {
    return {};
  }
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-30% 0px" },
    transition: { duration: 3, ease: easeOut },
  };
}

/** Hero column: staggered children on load. */
export function useHeroStaggerVariants() {
  const reduce = useReducedMotion();
  const stagger = reduce ? 0 : 0.14;
  const y = reduce ? 0 : 14;
  return {
    container: {
      hidden: { opacity: reduce ? 1 : 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: stagger, delayChildren: reduce ? 0 : 0.14 },
      },
    },
    item: {
      hidden: { opacity: reduce ? 1 : 0, y },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.95, ease: easeOut },
      },
    },
  };
}

/** Hero product shot: subtle scale + fade. */
export function useHeroImageMotion(): Pick<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "transition"
> {
  const reduce = useReducedMotion();
  if (reduce) {
    return {};
  }
  return {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.05, delay: 0.28, ease: easeOut },
  };
}

/** Stagger grid cards when section enters view. */
export function useStaggerGridVariants(staggerDelay = 0.1) {
  const reduce = useReducedMotion();
  const y = reduce ? 0 : 10;
  return {
    container: {
      hidden: {},
      visible: {
        transition: { staggerChildren: reduce ? 0 : staggerDelay },
      },
    },
    item: {
      hidden: { opacity: reduce ? 1 : 0, y },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: easeOut },
      },
    },
  };
}
