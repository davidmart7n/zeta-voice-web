"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "../landing-motion";

export function MotionButton({
  variant,
  children,
  className,
  onClick,
}: {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const reduce = useReducedMotion();
  const base =
    variant === "primary"
      ? "rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:cursor-pointer hover:bg-cyan-300"
      : "rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:cursor-pointer hover:border-zinc-500 hover:bg-zinc-900";
  const hover =
    reduce === true
      ? undefined
      : variant === "primary"
        ? { scale: 1.02, boxShadow: "0 12px 40px -8px rgba(34, 211, 238, 0.35)" }
        : { scale: 1.02 };
  return (
    <motion.button
      type="button"
      className={`${base} ${className ?? ""}`}
      onClick={onClick}
      whileHover={hover}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      {children}
    </motion.button>
  );
}
