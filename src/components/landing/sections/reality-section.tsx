"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type RealityTruth, realitySection, realityTruths } from "../landing-data";
import { useScrollReveal, useStaggerGridVariants } from "../landing-motion";
import { SectionTitle } from "../ui/section-title";
import { sectionClass } from "./constants";

function TruthItem({
  truth,
  variants,
  reduceMotion,
  isLast,
}: {
  truth: RealityTruth;
  variants: ReturnType<typeof useStaggerGridVariants>["item"];
  reduceMotion: boolean | null;
  isLast: boolean;
}) {
  return (
    <motion.div
      variants={variants}
      className={`flex gap-x-8 gap-y-2 md:flex-row flex-col ${isLast ? "" : "pb-10 md:pb-14"}`}
    >
      <span
        className="shrink-0 text-5xl font-extrabold tracking-tighter text-zinc-700/60 md:text-6xl select-none leading-none"
        aria-hidden
      >
        {truth.step}
      </span>
      <div className="flex flex-col gap-2 max-w-xl">
        <h3 className="text-xl font-bold leading-snug tracking-tight text-white md:text-2xl">
          {truth.hook}
        </h3>
        <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
          {truth.body}
        </p>
      </div>
    </motion.div>
  );
}

export function RealitySection() {
  const scrollReveal = useScrollReveal();
  const stagger = useStaggerGridVariants(0.13);
  const reduce = useReducedMotion();

  return (
    <motion.section className={sectionClass} {...scrollReveal}>
      <SectionTitle
        eyebrow={realitySection.eyebrow}
        title={realitySection.title}
        subtitle={realitySection.subtitle}
      />
      <motion.div
        className="flex flex-col"
        variants={stagger.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {realityTruths.map((truth, i) => (
          <TruthItem
            key={truth.step}
            truth={truth}
            variants={stagger.item}
            reduceMotion={reduce}
            isLast={i === realityTruths.length - 1}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}