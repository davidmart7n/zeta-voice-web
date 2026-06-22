"use client";

import { motion } from "framer-motion";
import { notFor, notForSection } from "../landing-data";
import { useScrollReveal, useStaggerGridVariants } from "../landing-motion";
import { sectionClass } from "./constants";

export function NotForSection() {
  const scrollReveal = useScrollReveal();
  const stagger = useStaggerGridVariants(0.08);

  return (
    <motion.section className={sectionClass} {...scrollReveal}>
      <div className="mb-10 max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
          {notForSection.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {notForSection.title}
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex h-full flex-col gap-3 rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-7"
        >
          <h3 className="text-lg font-semibold tracking-tight text-rose-200">
            No entres si…
          </h3>
          {notFor.notThem.map((item) => (
            <motion.div
              key={item.text}
              variants={stagger.item}
              className="flex items-start gap-3 rounded-xl border border-rose-500/15 bg-zinc-950/40 p-4"
            >
              <span className="shrink-0 text-lg leading-none text-rose-400">{item.icon}</span>
              <p className="text-sm leading-relaxed text-zinc-300">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={stagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex h-full flex-col gap-3 rounded-2xl border border-cyan-500/25 bg-cyan-500/[0.06] p-7"
        >
          <h3 className="text-lg font-semibold tracking-tight text-cyan-100">
            Entra si…
          </h3>
          {notFor.yesThem.map((item) => (
            <motion.div
              key={item.text}
              variants={stagger.item}
              className="flex items-start gap-3 rounded-xl border border-cyan-500/20 bg-zinc-950/40 p-4"
            >
              <span className="shrink-0 text-lg leading-none text-cyan-400">{item.icon}</span>
              <p className="text-sm leading-relaxed text-zinc-200">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}