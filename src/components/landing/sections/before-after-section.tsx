"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  type BeforeAfterCard,
  beforeAfter,
  beforeAfterSection,
} from "../landing-data";
import { useScrollReveal } from "../landing-motion";
import { SectionTitle } from "../ui/section-title";
import { hoverEase, sectionClass } from "./constants";

const cardThemes = {
  manual: {
    card: "border-rose-500/25 bg-zinc-950/85",
    hover: "hover:border-rose-400/50 hover:shadow-rose-950/35",
    glow: "shadow-lg shadow-rose-950/25",
    topLine: "from-transparent via-rose-400/55 to-transparent",
    orb: "bg-rose-500/15",
    badge: "border-rose-400/35 bg-rose-500/10 text-rose-200",
    icon: "border-rose-400/35 bg-rose-500/10 text-rose-100",
    item: "border-rose-500/20 bg-zinc-950/60 group-hover/item:border-rose-400/35",
    lead: "text-rose-100",
    body: "text-zinc-400 group-hover/item:text-zinc-300",
    index: "text-rose-400/50",
  },
  zeta: {
    card: "border-cyan-500/25 bg-zinc-950/85",
    hover: "hover:border-cyan-400/50 hover:shadow-cyan-950/35",
    glow: "shadow-lg shadow-cyan-950/25",
    topLine: "from-transparent via-cyan-400/60 to-transparent",
    orb: "bg-cyan-500/15",
    badge: "border-cyan-400/35 bg-cyan-500/10 text-cyan-200",
    icon: "border-cyan-400/35 bg-cyan-400/10 text-cyan-100",
    item: "border-cyan-500/20 bg-zinc-950/50 group-hover/item:border-cyan-400/40",
    lead: "text-cyan-100",
    body: "text-zinc-400 group-hover/item:text-zinc-300",
    index: "text-cyan-400/55",
  },
} as const;

function BeforeAfterCardPanel({
  data,
  variant,
  reduceMotion,
}: {
  data: BeforeAfterCard;
  variant: keyof typeof cardThemes;
  reduceMotion: boolean | null;
}) {
  const theme = cardThemes[variant];

  return (
    <motion.article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-[border-color,box-shadow,background-color] duration-300 md:p-7 ${theme.card} ${theme.glow} ${theme.hover}`}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={hoverEase}
    >
      <div
        className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r ${theme.topLine}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl transition-opacity duration-300 ${theme.orb} opacity-50 group-hover:opacity-85`}
        aria-hidden
      />

      <div className="relative flex flex-wrap items-center gap-3">
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${theme.badge}`}
        >
          {data.badge}
        </span>
        <span
          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-base leading-none ${theme.icon}`}
          aria-hidden
        >
          {data.icon}
        </span>
      </div>

      <h3 className="relative mt-5 text-lg font-semibold leading-snug tracking-tight text-white md:text-xl">
        {data.title}
      </h3>

      <ul className="relative mt-6 flex flex-1 flex-col gap-3">
        {data.items.map((item, index) => (
          <li
            key={item.lead}
            className={`group/item rounded-xl border px-4 py-3.5 transition-colors duration-300 ${theme.item}`}
          >
            <div className="flex gap-3">
              <span
                className={`mt-0.5 shrink-0 font-mono text-xs font-medium tabular-nums ${theme.index}`}
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className={`text-sm font-semibold leading-snug ${theme.lead}`}>
                  {item.lead}
                  <span className="font-normal text-zinc-500">:</span>
                </p>
                <p className={`mt-1.5 text-sm leading-relaxed ${theme.body}`}>{item.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function BeforeAfterSection() {
  const scrollReveal = useScrollReveal();
  const reduce = useReducedMotion();

  return (
    <motion.section className={sectionClass} {...scrollReveal}>
      <SectionTitle
        eyebrow={beforeAfterSection.eyebrow}
        title={beforeAfterSection.title}
        subtitle={beforeAfterSection.subtitle}
      />
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <BeforeAfterCardPanel data={beforeAfter.manual} variant="manual" reduceMotion={reduce} />
        <BeforeAfterCardPanel data={beforeAfter.zeta} variant="zeta" reduceMotion={reduce} />
      </div>
    </motion.section>
  );
}
