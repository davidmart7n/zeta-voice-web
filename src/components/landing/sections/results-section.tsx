"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  type ResultOutcome,
  type ResultOutcomeAccent,
  resultsOutcomes,
  resultsSection,
} from "../landing-data";
import { useScrollReveal, useStaggerGridVariants } from "../landing-motion";
import { sectionClass } from "./constants";

const accentStyles: Record<
  ResultOutcomeAccent,
  { card: string; icon: string; topLine: string; orb: string; title: string }
> = {
  cyan: {
    card: "border-cyan-500/20 bg-zinc-950/80",
    icon: "border-cyan-400/30 bg-cyan-400/10",
    topLine: "from-transparent via-cyan-400/60 to-transparent",
    orb: "bg-cyan-500/15",
    title: "text-white",
  },
  emerald: {
    card: "border-emerald-500/20 bg-zinc-950/80",
    icon: "border-emerald-400/30 bg-emerald-400/10",
    topLine: "from-transparent via-emerald-400/60 to-transparent",
    orb: "bg-emerald-500/15",
    title: "text-white",
  },
  amber: {
    card: "border-amber-500/20 bg-zinc-950/80",
    icon: "border-amber-400/30 bg-amber-400/10",
    topLine: "from-transparent via-amber-400/60 to-transparent",
    orb: "bg-amber-500/15",
    title: "text-white",
  },
};

function ResultCard({
  outcome,
  variants,
  reduceMotion,
}: {
  outcome: ResultOutcome;
  variants: ReturnType<typeof useStaggerGridVariants>["item"];
  reduceMotion: boolean | null;
}) {
  const s = accentStyles[outcome.accent];
  return (
    <motion.article
      variants={variants}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-colors duration-300 ${s.card}`}
    >
      <div
        className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r ${s.topLine}`}
      />
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 ${s.orb} opacity-50 group-hover:opacity-90`}
      />
      <span
        className={`relative inline-flex w-fit shrink-0 rounded-lg border px-3 py-2 text-xl leading-none ${s.icon}`}
      >
        {outcome.icon}
      </span>
      <h3 className={`relative mt-5 text-lg font-semibold tracking-tight ${s.title}`}>
        {outcome.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
        {outcome.body}
      </p>
    </motion.article>
  );
}

export function ResultsSection() {
  const scrollReveal = useScrollReveal();
  const stagger = useStaggerGridVariants(0.09);
  const reduce = useReducedMotion();

  return (
    <motion.section className={sectionClass} {...scrollReveal}>
      <div className="mb-10 max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
          {resultsSection.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {resultsSection.title}
        </h2>
        {resultsSection.subtitle ? (
          <p className="text-base text-zinc-300 md:text-lg">{resultsSection.subtitle}</p>
        ) : null}
      </div>
      <motion.div
        className="grid gap-5 md:grid-cols-3"
        variants={stagger.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {resultsOutcomes.map((outcome) => (
          <ResultCard
            key={outcome.title}
            outcome={outcome}
            variants={stagger.item}
            reduceMotion={reduce}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}