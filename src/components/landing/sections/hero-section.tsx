"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { hero } from "../landing-data";
import { useHeroImageMotion, useHeroStaggerVariants } from "../landing-motion";
import { MotionButton } from "../ui/motion-button";
import { sectionClass } from "./constants";

type HeroSectionProps = {
  onOpenDemo: () => void;
};

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const heroStagger = useHeroStaggerVariants();
  const heroImageMotion = useHeroImageMotion();

  return (
    <section className={`${sectionClass} relative pb-10 pt-20`}>
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="space-y-6"
          variants={heroStagger.container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={heroStagger.item}
            className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200"
          >
            {hero.preheader}
          </motion.p>
          <motion.h1
            variants={heroStagger.item}
            className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            variants={heroStagger.item}
            className="max-w-2xl text-lg text-zinc-300 md:text-xl"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div variants={heroStagger.item} className="flex flex-col gap-3 sm:flex-row">
            <MotionButton variant="primary" onClick={onOpenDemo}>
              {hero.cta}
            </MotionButton>
          </motion.div>
          <motion.p variants={heroStagger.item} className="text-sm text-zinc-400">
            {hero.ctaSubtext}
          </motion.p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-3 shadow-2xl shadow-cyan-900/20 ring-1 ring-cyan-400/10"
          {...heroImageMotion}
        >
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            width={1200}
            height={800}
            className="h-auto w-full rounded-xl"
            priority
            unoptimized // <-- AÑADE ESTA LÍNEA AQUÍ
          />
        </motion.div>
      </div>
    </section>
  );
}
