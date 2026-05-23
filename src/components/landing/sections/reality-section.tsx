"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  type RealityStat,
  type RealityStatAccent,
  realitySection,
  realityStats,
} from "../landing-data";
import { useScrollReveal, useStaggerGridVariants } from "../landing-motion";
import { SectionTitle } from "../ui/section-title";
import { hoverEase, sectionClass } from "./constants";

const accentStyles: Record<
  RealityStatAccent,
  {
    card: string;
    hover: string;
    glow: string;
    icon: string;
    metric: string;
    metricMuted: string;
    topLine: string;
    orb: string;
    divider: string;
  }
> = {
  cyan: {
    card: "border-cyan-500/20 bg-zinc-950/80",
    hover: "hover:border-cyan-400/45 hover:shadow-cyan-900/25",
    glow: "shadow-lg shadow-cyan-950/30",
    icon: "border-cyan-400/30 bg-cyan-400/10",
    metric: "text-cyan-200",
    metricMuted: "text-cyan-400/70",
    topLine: "from-transparent via-cyan-400/60 to-transparent",
    orb: "bg-cyan-500/20",
    divider: "border-cyan-500/25",
  },
  amber: {
    card: "border-amber-500/20 bg-zinc-950/80",
    hover: "hover:border-amber-400/45 hover:shadow-amber-900/25",
    glow: "shadow-lg shadow-amber-950/30",
    icon: "border-amber-400/30 bg-amber-400/10",
    metric: "text-amber-200",
    metricMuted: "text-amber-400/70",
    topLine: "from-transparent via-amber-400/60 to-transparent",
    orb: "bg-amber-500/20",
    divider: "border-amber-500/25",
  },
  emerald: {
    card: "border-emerald-500/20 bg-zinc-950/80",
    hover: "hover:border-emerald-400/45 hover:shadow-emerald-900/25",
    glow: "shadow-lg shadow-emerald-950/30",
    icon: "border-emerald-400/30 bg-emerald-400/10",
    metric: "text-emerald-200",
    metricMuted: "text-emerald-400/70",
    topLine: "from-transparent via-emerald-400/60 to-transparent",
    orb: "bg-emerald-500/20",
    divider: "border-emerald-500/25",
  },
};

function RealityStatCard({
  stat,
  variants,
  reduceMotion,
}: {
  stat: RealityStat;
  variants: Variants;
  reduceMotion: boolean | null;
}) {
  const styles = accentStyles[stat.accent];
  const metricValueClass =
    stat.metricTone === "negative" ? "text-rose-400" : styles.metric;
  const metricLabelClass =
    stat.metricTone === "negative" ? "text-rose-400/65" : styles.metricMuted;

  return (
    <motion.article
      variants={variants}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-[border-color,box-shadow,background-color] duration-300 ${styles.card} ${styles.glow} ${styles.hover}`}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={hoverEase}
    >
      <div
        className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r ${styles.topLine}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl transition-opacity duration-300 ${styles.orb} opacity-60 group-hover:opacity-90`}
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`inline-flex shrink-0 rounded-lg border px-3 py-2 text-xl leading-none ${styles.icon}`}
          aria-hidden
        >
          {stat.icon}
        </span>
        {stat.metric ? (
          <div className="min-w-0 text-right">
            {stat.metricSecondary ? (
              <div className="flex flex-col items-end gap-2">
                <div>
                  <p
                    className={`text-2xl font-semibold tabular-nums tracking-tight ${metricValueClass}`}
                  >
                    {stat.metric}
                  </p>
                  {stat.metricLabel ? (
                    <p className={`mt-0.5 text-[11px] leading-snug ${metricLabelClass}`}>
                      {stat.metricLabel}
                    </p>
                  ) : null}
                </div>
                <div
                  className={`w-full max-w-[9rem] border-t border-dashed pt-2 ${styles.divider}`}
                />
                <div>
                  <p className="text-2xl font-semibold tabular-nums tracking-tight text-emerald-300">
                    {stat.metricSecondary}
                  </p>
                  {stat.metricSecondaryLabel ? (
                    <p className="mt-0.5 text-[11px] leading-snug text-zinc-400">
                      {stat.metricSecondaryLabel}
                    </p>
                  ) : null}
                </div>
              </div>
            ) : (
              <>
                <p
                  className={`text-3xl font-semibold tabular-nums tracking-tight ${metricValueClass}`}
                >
                  {stat.metric}
                </p>
                {stat.metricLabel ? (
                  <p className={`mt-1 max-w-[10rem] text-xs leading-snug ${metricLabelClass}`}>
                    {stat.metricLabel}
                  </p>
                ) : null}
              </>
            )}
          </div>
        ) : null}
      </div>

      <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-white">
        {stat.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
        {stat.body}
      </p>
    </motion.article>
  );
}

export function RealitySection() {
  const scrollReveal = useScrollReveal();
  const statsStagger = useStaggerGridVariants(0.09);
  const reduce = useReducedMotion();

  return (
    <motion.section className={sectionClass} {...scrollReveal}>
      <SectionTitle
        eyebrow={realitySection.eyebrow}
        title={realitySection.title}
        subtitle={realitySection.subtitle}
      />
      <motion.div
        className="grid gap-5 md:grid-cols-3"
        variants={statsStagger.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {realityStats.map((stat) => (
          <RealityStatCard
            key={stat.title}
            stat={stat}
            variants={statsStagger.item}
            reduceMotion={reduce}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
