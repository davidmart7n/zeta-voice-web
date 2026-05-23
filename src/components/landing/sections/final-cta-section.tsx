"use client";

import { motion, useReducedMotion } from "framer-motion";
import { finalCta } from "../landing-data";
import { easeOut, useScrollReveal } from "../landing-motion";
import { MotionButton } from "../ui/motion-button";
import { sectionClass } from "./constants";

type FinalCtaSectionProps = {
  onOpenDemo: () => void;
};

export function FinalCtaSection({ onOpenDemo }: FinalCtaSectionProps) {
  const scrollReveal = useScrollReveal();
  const reduce = useReducedMotion();

  return (
    <motion.section className={`${sectionClass} pt-6`} {...scrollReveal}>
      <motion.div
        className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-8"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95, ease: easeOut }}
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {finalCta.title}
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-200">{finalCta.body}</p>
        <div className="mt-6">
          <MotionButton variant="primary" onClick={onOpenDemo}>
            {finalCta.cta}
          </MotionButton>
        </div>
      </motion.div>
    </motion.section>
  );
}
