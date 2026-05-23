"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  type ResultOutcome,
  type ResultOutcomeAccent,
  resultsOutcomes,
  resultsSection,
} from "../landing-data";
import { useScrollReveal, useStaggerGridVariants } from "../landing-motion";
import { SectionTitle } from "../ui/section-title";
import { hoverEase, sectionClass } from "./constants";

const accentStyles: Record<
  ResultOutcomeAccent,
  {
    card: string;
    hover: string;
    glow: string;
    icon: string;
    pillar: string;
    topLine: string;
    orb: string;
    check: string;
  }
> = {
  cyan: {
    card: "border-cyan-500/20 bg-zinc-950/80",
    hover: "hover:border-cyan-400/45 hover:shadow-cyan-900/25",
    glow: "shadow-lg shadow-cyan-950/30",
    icon: "border-cyan-400/30 bg-cyan-400/10",
    pillar: "text-cyan-300/90",
    topLine: "from-transparent via-cyan-400/60 to-transparent",
    orb: "bg-cyan-500/20",
    check: "text-cyan-400",
  },
  emerald: {
    card: "border-emerald-500/20 bg-zinc-950/80",
    hover: "hover:border-emerald-400/45 hover:shadow-emerald-900/25",
    glow: "shadow-lg shadow-emerald-950/30",
    icon: "border-emerald-400/30 bg-emerald-400/10",
    pillar: "text-emerald-300/90",
    topLine: "from-transparent via-emerald-400/60 to-transparent",
    orb: "bg-emerald-500/20",
    check: "text-emerald-400",
  },
  amber: {
    card: "border-amber-500/20 bg-zinc-950/80",
    hover: "hover:border-amber-400/45 hover:shadow-amber-900/25",
    glow: "shadow-lg shadow-amber-950/30",
    icon: "border-amber-400/30 bg-amber-400/10",
    pillar: "text-amber-300/90",
    topLine: "from-transparent via-amber-400/60 to-transparent",
    orb: "bg-amber-500/20",
    check: "text-amber-400",
  },
  violet: {
    card: "border-violet-500/20 bg-zinc-950/80",
    hover: "hover:border-violet-400/45 hover:shadow-violet-950/25",
    glow: "shadow-lg shadow-violet-950/30",
    icon: "border-violet-400/30 bg-violet-400/10",
    pillar: "text-violet-300/90",
    topLine: "from-transparent via-violet-400/55 to-transparent",
    orb: "bg-violet-500/18",
    check: "text-violet-400",
  },
};

function ResultOutcomeCard({
  outcome,
  index,
  variants,
  reduceMotion,
}: {
  outcome: ResultOutcome;
  index: number;
  variants: Variants;
  reduceMotion: boolean | null;
}) {
  const styles = accentStyles[outcome.accent];

  return (
    <motion.article
      variants={variants}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 transition-[border-color,box-shadow] duration-300 md:p-6 ${styles.card} ${styles.glow} ${styles.hover}`}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={hoverEase}
    >
      <div
        className={`pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r md:inset-x-6 ${styles.topLine}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 ${styles.orb} opacity-50 group-hover:opacity-90`}
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-3">
        <span
          className={`inline-flex shrink-0 rounded-lg border px-3 py-2 text-lg leading-none ${styles.icon}`}
          aria-hidden
        >
          {outcome.icon}
        </span>
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${styles.pillar}`}
        >
          {outcome.pillar}
        </span>
      </div>

      <h3 className="relative mt-4 text-base font-semibold tracking-tight text-white md:text-lg">
        {outcome.title}
      </h3>
      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
        {outcome.body}
      </p>

      <div
        className="relative mt-5 flex items-center gap-2 border-t border-zinc-800/80 pt-4"
        aria-hidden
      >
        <span className={`text-sm font-medium ${styles.check}`}>✓</span>
        <span className="font-mono text-[11px] tabular-nums text-zinc-600">
          {String(index + 1).padStart(2, "0")} / {String(resultsOutcomes.length).padStart(2, "0")}
        </span>
      </div>
    </motion.article>
  );
}

export function ResultsSection() {
  const scrollReveal = useScrollReveal();
  const stagger = useStaggerGridVariants(0.08);
  const reduce = useReducedMotion();

  return (
    <motion.section className={`${sectionClass} relative`} {...scrollReveal}>
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[min(400px,65%)] -translate-y-1/2 bg-[radial-gradient(ellipse_65%_45%_at_50%_50%,rgba(34,211,238,0.07),transparent_70%)]"
        aria-hidden
      />

      <SectionTitle
        eyebrow={resultsSection.eyebrow}
        title={resultsSection.title}
        subtitle={resultsSection.subtitle}
      />

      <motion.div
        className="grid gap-4 sm:grid-cols-2 sm:gap-5"
        variants={stagger.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {resultsOutcomes.map((outcome, index) => (
          <ResultOutcomeCard
            key={outcome.title}
            outcome={outcome}
            index={index}
            variants={stagger.item}
            reduceMotion={reduce}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
