"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "../landing-motion";

export function MotionButton({
  variant,
  children,
  className,
  onClick,
  href,
  type = "button",
}: {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}) {
  const reduce = useReducedMotion();
  const base =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:cursor-pointer hover:bg-cyan-300"
      : "inline-flex items-center justify-center rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:cursor-pointer hover:border-zinc-500 hover:bg-zinc-900";
  const hover =
    reduce === true
      ? undefined
      : variant === "primary"
        ? { scale: 1.02, boxShadow: "0 12px 40px -8px rgba(34, 211, 238, 0.35)" }
        : { scale: 1.02 };

  const motionProps = {
    className: `${base} ${className ?? ""}`,
    onClick,
    whileHover: hover,
    whileTap: reduce ? undefined : { scale: 0.98 } as const,
    transition: { duration: 0.45, ease: easeOut },
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} {...motionProps}>
      {children}
    </motion.button>
  );
}
