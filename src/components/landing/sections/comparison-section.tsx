"use client";

import { motion, useReducedMotion } from "framer-motion";
import { comparisonRows, comparisonSection } from "../landing-data";
import { easeOut, useScrollReveal, useStaggerGridVariants } from "../landing-motion";
import { SectionTitle } from "../ui/section-title";
import { sectionClass } from "./constants";

const altCell =
  "border-rose-500/15 bg-rose-500/[0.04] text-zinc-400 group-hover/row:text-zinc-300";
const zetaCell =
  "border-l border-cyan-500/25 bg-cyan-500/[0.07] text-cyan-50 group-hover/row:bg-cyan-500/[0.1]";

function ComparisonMobileCards() {
  const stagger = useStaggerGridVariants(0.07);

  return (
    <motion.div
      className="flex flex-col gap-4 md:hidden"
      variants={stagger.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      aria-label="Comparativa Zeta Voice vs alternativas sueltas"
    >
      {comparisonRows.map((row, index) => (
        <motion.article
          key={row.criterion}
          variants={stagger.item}
          className="group/row relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/80 p-5 shadow-lg shadow-zinc-950/40"
        >
          <div
            className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-zinc-600/50 to-transparent"
            aria-hidden
          />
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold tracking-tight text-white">
              {row.criterion}
            </h3>
            <span
              className="shrink-0 font-mono text-[11px] tabular-nums text-zinc-600"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="mt-4 grid gap-3">
            <div
              className={`rounded-xl border px-4 py-3.5 transition-colors duration-300 ${altCell}`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-rose-300/90">
                Alternativas sueltas
              </p>
              <p className="mt-2 text-sm leading-relaxed">{row.alternatives}</p>
            </div>
            <div
              className={`rounded-xl border px-4 py-3.5 transition-colors duration-300 ${zetaCell}`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300">
                Ecosistema Zeta Voice
              </p>
              <p className="mt-2 flex gap-2 text-sm leading-relaxed">
                <span className="shrink-0 font-medium text-cyan-400" aria-hidden>
                  ✓
                </span>
                <span>{row.zetaVoice}</span>
              </p>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

export function ComparisonSection() {
  const scrollReveal = useScrollReveal();
  const rowStagger = useStaggerGridVariants(0.05);
  const reduce = useReducedMotion();

  return (
    <motion.section className={`${sectionClass} relative`} {...scrollReveal}>
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[min(440px,72%)] -translate-y-1/2 bg-[radial-gradient(ellipse_55%_48%_at_72%_50%,rgba(34,211,238,0.07),transparent_70%)]"
        aria-hidden
      />

      <SectionTitle
        eyebrow={comparisonSection.eyebrow}
        title={comparisonSection.title}
        subtitle={comparisonSection.subtitle}
      />

      <ComparisonMobileCards />

      <motion.div
        className="group/table relative hidden overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/70 shadow-xl shadow-zinc-950/50 ring-1 ring-white/[0.03] md:block"
        aria-label="Comparativa Zeta Voice vs alternativas sueltas"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          opacity: { duration: 0.9, ease: easeOut },
          y: { duration: 0.75, ease: easeOut },
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-r from-transparent via-cyan-400/55 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/12 blur-3xl transition-opacity duration-500 group-hover/table:opacity-100 opacity-70"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-40 w-40 rounded-full bg-rose-500/8 blur-3xl"
          aria-hidden
        />

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-800/90 bg-zinc-900/80">
                <th
                  scope="col"
                  className="sticky left-0 z-20 bg-zinc-900/95 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 backdrop-blur-sm"
                >
                  Criterio
                </th>
                <th scope="col" className="px-5 py-4">
                  <span className="inline-flex rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-rose-200">
                    Alternativas sueltas
                  </span>
                </th>
                <th
                  scope="col"
                  className="border-l border-cyan-500/20 bg-cyan-500/[0.06] px-5 py-4"
                >
                  <span className="inline-flex rounded-full border border-cyan-400/35 bg-cyan-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-100 shadow-sm shadow-cyan-950/40">
                    Ecosistema Zeta Voice
                  </span>
                </th>
              </tr>
            </thead>
            <motion.tbody
              className="text-zinc-200"
              variants={rowStagger.container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-24px" }}
            >
              {comparisonRows.map((row, index) => (
                <motion.tr
                  key={row.criterion}
                  variants={rowStagger.item}
                  className="group/row border-t border-zinc-800/80 transition-colors hover:bg-zinc-900/40"
                >
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-zinc-950/95 px-5 py-4 font-medium text-white backdrop-blur-sm transition-colors group-hover/row:bg-zinc-900/90"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="font-mono text-[11px] tabular-nums text-zinc-600"
                        aria-hidden
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {row.criterion}
                    </span>
                  </th>
                  <td className={`px-5 py-4 leading-relaxed ${altCell}`}>
                    {row.alternatives}
                  </td>
                  <td className={`px-5 py-4 leading-relaxed ${zetaCell}`}>
                    <span className="flex gap-2.5">
                      <span
                        className="mt-0.5 shrink-0 text-sm font-semibold text-cyan-400"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span>{row.zetaVoice}</span>
                    </span>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </motion.div>
    </motion.section>
  );
}
