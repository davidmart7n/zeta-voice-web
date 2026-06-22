"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { hero } from "../landing-data";
import { useHeroImageMotion, useHeroStaggerVariants } from "../landing-motion";
import { MotionButton } from "../ui/motion-button";
import { sectionClass } from "./constants";

export function HeroSection() {
  const heroStagger = useHeroStaggerVariants();
  const heroImageMotion = useHeroImageMotion();

  return (
    <section className={`${sectionClass} relative overflow-visible pb-14 pt-20`}>
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_auto] lg:gap-11">
        <motion.div
          className="space-y-6 lg:max-w-[34rem] lg:pr-4"
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
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            variants={heroStagger.item}
            className="max-w-xl text-lg text-zinc-300 md:text-xl"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div variants={heroStagger.item} className="flex flex-col gap-3 sm:flex-row">
            <MotionButton variant="primary" href="#apuntarme">
              {hero.cta}
            </MotionButton>
          </motion.div>
          <motion.p variants={heroStagger.item} className="text-sm text-zinc-400">
            {hero.ctaSubtext}
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-[min(100%,340px)] origin-center scale-[1.08] sm:max-w-[360px] sm:scale-[1.12] lg:ml-auto lg:max-w-[380px] lg:origin-right lg:scale-[1.28] lg:translate-x-1 xl:max-w-[400px] xl:scale-[1.32] xl:translate-x-2"
          {...heroImageMotion}
        >
          <div className="rounded-[1.35rem] border border-zinc-800 bg-zinc-950/70 p-1.5 shadow-2xl shadow-cyan-900/20 ring-1 ring-cyan-400/10">
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              width={1200}
              height={800}
              className="h-auto w-full rounded-xl"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}