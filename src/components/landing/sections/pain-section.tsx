"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type PainSymptom, painSection, painSymptoms } from "../landing-data";
import { useScrollReveal, useStaggerGridVariants } from "../landing-motion";
import { SectionTitle } from "../ui/section-title";
import { hoverEase, sectionClass } from "./constants";

const symptomTheme = {
  card: "border-violet-500/20 bg-zinc-950/80",
  hover: "hover:border-violet-400/45 hover:shadow-violet-950/30",
  glow: "shadow-lg shadow-violet-950/25",
  topLine: "from-transparent via-violet-400/55 to-transparent",
  orb: "bg-violet-500/18",
  icon: "border-violet-400/30 bg-violet-400/10",
  index: "text-violet-400/55",
  title: "text-white",
  body: "text-zinc-400 group-hover:text-zinc-300",
  connector: "border-violet-500/20 bg-violet-500/5",
  scanDot: "bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.65)]",
  scanLabel: "text-violet-300/90",
  scanMeta: "text-zinc-500",
} as const;

function PainSymptomCard({
  symptom,
  index,
  variants,
  reduceMotion,
}: {
  symptom: PainSymptom;
  index: number;
  variants: Variants;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.article
      variants={variants}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 transition-[border-color,box-shadow,background-color] duration-300 md:p-6 ${symptomTheme.card} ${symptomTheme.glow} ${symptomTheme.hover}`}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={hoverEase}
    >
      <div
        className={`pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r md:inset-x-6 ${symptomTheme.topLine}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 ${symptomTheme.orb} opacity-50 group-hover:opacity-90`}
        aria-hidden
      />

      <div className="relative flex items-start gap-4">
        <span
          className={`inline-flex shrink-0 rounded-lg border px-3 py-2 text-lg leading-none ${symptomTheme.icon}`}
          aria-hidden
        >
          {symptom.icon}
        </span>
        <span
          className={`ml-auto font-mono text-xs font-medium tabular-nums ${symptomTheme.index}`}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className={`relative mt-4 text-base font-semibold tracking-tight md:text-lg ${symptomTheme.title}`}
      >
        {symptom.title}
      </h3>
      <p className={`relative mt-2.5 flex-1 text-sm leading-relaxed ${symptomTheme.body}`}>
        {symptom.body}
      </p>
    </motion.article>
  );
}

export function PainSection() {
  const scrollReveal = useScrollReveal();
  const painStagger = useStaggerGridVariants(0.08);
  const reduce = useReducedMotion();

  return (
    <motion.section className={`${sectionClass} relative`} {...scrollReveal}>
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[min(420px,70%)] -translate-y-1/2 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(139,92,246,0.08),transparent_70%)]"
        aria-hidden
      />

      <SectionTitle
        eyebrow={painSection.eyebrow}
        title={painSection.title}
        subtitle={painSection.subtitle}
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,17rem)_1fr] lg:items-stretch lg:gap-8">
        <motion.aside
          className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 ${symptomTheme.connector}`}
          initial={{ opacity: 0, x: reduce ? 0 : -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"
            aria-hidden
          />
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className={`relative flex h-2.5 w-2.5 shrink-0 rounded-full ${symptomTheme.scanDot}`}
                aria-hidden
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-violet-400/40" />
              </span>
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${symptomTheme.scanLabel}`}
              >
                Análisis operativo
              </p>
            </div>
            <p className="mt-5 text-2xl font-semibold tracking-tight text-white">
              {painSymptoms.length} síntomas
              <span className="block text-lg font-medium text-violet-200/80">
                sin sistema
              </span>
            </p>
            <p className={`mt-4 text-sm leading-relaxed ${symptomTheme.scanMeta}`}>
              No es falta de talento: es fricción entre contexto, producción y publicación.
            </p>
          </div>
          <ul className="mt-8 space-y-2 border-t border-violet-500/15 pt-6" aria-hidden>
            {painSymptoms.map((s, i) => (
              <li
                key={s.title}
                className="flex items-center gap-2 text-xs text-zinc-500"
              >
                <span className={`font-mono tabular-nums ${symptomTheme.index}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="truncate">{s.title}</span>
              </li>
            ))}
          </ul>
        </motion.aside>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          variants={painStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {painSymptoms.map((symptom, index) => (
            <PainSymptomCard
              key={symptom.title}
              symptom={symptom}
              index={index}
              variants={painStagger.item}
              reduceMotion={reduce}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
