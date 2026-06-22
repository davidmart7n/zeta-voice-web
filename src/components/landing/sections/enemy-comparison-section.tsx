"use client";

import { motion, useReducedMotion } from "framer-motion";
import { enemyComparison, enemyComparisonSection } from "../landing-data";
import { easeOut, useScrollReveal, useStaggerGridVariants } from "../landing-motion";
import { SectionTitle } from "../ui/section-title";
import { hoverEase, sectionClass } from "./constants";

function ContrastCard({
  contrast,
  index,
  variants,
  reduceMotion,
}: {
  contrast: (typeof enemyComparison)["contrasts"][number];
  index: number;
  variants: ReturnType<typeof useStaggerGridVariants>["item"];
  reduceMotion: boolean | null;
}) {
  return (
    <motion.article
      variants={variants}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={hoverEase}
      className="group/row relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/80 p-6 shadow-lg shadow-zinc-950/40 transition-colors duration-300"
    >
      <div
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/55 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/12 blur-3xl opacity-50 group-hover/row:opacity-90 transition-opacity duration-300"
        aria-hidden
      />
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
          {contrast.label}
        </h3>
        <span
          className="shrink-0 font-mono text-[11px] tabular-nums text-zinc-600"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="relative mt-4 grid gap-3">
        <div className="group/now relative overflow-hidden rounded-xl border border-rose-500/15 bg-rose-500/[0.04] px-4 py-3.5 transition-colors duration-300 group-hover/row:bg-rose-500/[0.06]">
          <div
            className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full bg-rose-500/10 blur-2xl opacity-60"
            aria-hidden
          />
          <p className="relative text-[11px] font-semibold uppercase tracking-[0.12em] text-rose-300/90">
            Ahora
          </p>
          <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">
            {contrast.now}
          </p>
        </div>
        <div className="group/zeta relative overflow-hidden rounded-xl border border-l border-cyan-500/25 bg-cyan-500/[0.07] px-4 py-3.5 transition-colors duration-300 group-hover/row:bg-cyan-500/[0.1]">
          <div
            className="pointer-events-none absolute -right-8 -bottom-8 h-20 w-20 rounded-full bg-cyan-400/12 blur-2xl opacity-70"
            aria-hidden
          />
          <p className="relative text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300">
            Con Zeta Voice
          </p>
          <p className="relative mt-2 flex gap-2 text-sm leading-relaxed text-cyan-50">
            <span
              className="mt-0.5 shrink-0 font-semibold text-cyan-400"
              aria-hidden
            >
              ✓
            </span>
            <span>{contrast.zeta}</span>
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function EnemyComparisonSection() {
  const scrollReveal = useScrollReveal();
  const stagger = useStaggerGridVariants(0.08);
  const reduce = useReducedMotion();

  return (
    <motion.section className={`${sectionClass} relative`} {...scrollReveal}>
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[min(440px,72%)] -translate-y-1/2 bg-[radial-gradient(ellipse_55%_48%_at_72%_50%,rgba(34,211,238,0.07),transparent_70%)]"
        aria-hidden
      />

      <SectionTitle
        eyebrow={enemyComparisonSection.eyebrow}
        title={enemyComparisonSection.title}
        subtitle={enemyComparisonSection.subtitle}
      />

      <motion.div
        className="relative max-w-2xl overflow-hidden rounded-2xl border border-l-2 border-cyan-500/40 bg-zinc-950/40 pl-6 pr-5 py-5"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/55 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-10 top-0 h-28 w-44 rounded-full bg-cyan-500/10 blur-3xl"
          aria-hidden
        />
        <div className="relative space-y-4">
          {enemyComparison.intro.map((p) => (
            <p
              key={p}
              className="text-base leading-relaxed text-zinc-300 md:text-lg"
            >
              {p}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.article
        className="group relative mt-8 max-w-2xl overflow-hidden rounded-2xl border border-cyan-500/25 bg-zinc-950/80 p-7 shadow-xl shadow-cyan-950/30"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: easeOut }}
        whileHover={reduce ? undefined : { y: -4 }}
      >
        <div
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan-500/18 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden
        />
        <div className="relative flex items-start gap-4">
          <span
            className="inline-flex shrink-0 rounded-lg border border-cyan-400/35 bg-cyan-400/10 px-3 py-2 text-xl leading-none text-cyan-200"
            aria-hidden
          >
            ✓
          </span>
          <p className="text-lg font-medium leading-relaxed text-white md:text-xl">
            {enemyComparison.bridge}
          </p>
        </div>
      </motion.article>

      <div className="mb-6 mt-14 flex items-center gap-4">
        <div
          className="h-px flex-1 bg-gradient-to-r from-transparent to-zinc-700/60"
          aria-hidden
        />
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
          La diferencia, punto por punto
        </p>
        <div
          className="h-px flex-1 bg-gradient-to-l from-transparent to-zinc-700/60"
          aria-hidden
        />
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={stagger.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {enemyComparison.contrasts.map((contrast, index) => (
          <ContrastCard
            key={contrast.label}
            contrast={contrast}
            index={index}
            variants={stagger.item}
            reduceMotion={reduce}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}