"use client";

import { motion } from "framer-motion";
import { faqItems, faqSection } from "../landing-data";
import { useScrollReveal, useStaggerGridVariants } from "../landing-motion";
import { SectionTitle } from "../ui/section-title";
import { sectionClass } from "./constants";

export function FaqSection() {
  const scrollReveal = useScrollReveal();
  const faqStagger = useStaggerGridVariants(0.08);

  return (
    <motion.section className={sectionClass} {...scrollReveal}>
      <SectionTitle
        eyebrow={faqSection.eyebrow}
        title={faqSection.title}
        subtitle={faqSection.subtitle}
      />
      <motion.div
        className="space-y-3"
        variants={faqStagger.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {faqItems.map((item) => (
          <motion.details
            key={item.q}
            variants={faqStagger.item}
            className="group rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 open:border-zinc-600 open:bg-zinc-900/80"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-3">
                {item.q}
                <span className="text-cyan-400/80">
                  <span className="inline-block transition-transform duration-500 ease-out group-open:rotate-45">
                    +
                  </span>
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-300">{item.a}</p>
          </motion.details>
        ))}
      </motion.div>
    </motion.section>
  );
}
