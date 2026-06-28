"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { founders, foundersSection } from "../landing-data";
import { useScrollReveal } from "../landing-motion";
import { sectionClass } from "./constants";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const grabandoPhoto = founders.scenePhotos.find(
  (p) => p.src === "/landing/grabando-corporativo-vertical.png",
)!;

function ScenePhotoStrip() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.95 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group/scene relative mt-6 w-full overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900 ring-1 ring-white/[0.03]"
    >
      <div className="relative aspect-[3/4] w-full sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]">
        <Image
          src={grabandoPhoto.src}
          alt={grabandoPhoto.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 80vw, 400px"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-50" />
      </div>
      <span className="absolute bottom-3 left-3 rounded-full border border-cyan-400/25 bg-zinc-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-300/90 backdrop-blur-sm">
        {grabandoPhoto.label}
      </span>
    </motion.div>
  );
}

function FounderPortrait() {
  return (
    <div className="relative flex min-w-0 flex-col items-center lg:items-stretch">
      <ScenePhotoStrip />
    </div>
  );
}

export function FounderSection() {
  const scrollReveal = useScrollReveal();
  const reduce = useReducedMotion();

  return (
    <motion.section className={sectionClass} {...scrollReveal} id="founders">
      {foundersSection.eyebrow ? (
        <p className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/80 md:mb-14">
          {foundersSection.eyebrow}
        </p>
      ) : null}

      <div className="grid items-center gap-14 lg:overflow-hidden lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <FounderPortrait />

        <motion.article
          className="relative lg:pl-4 xl:pl-8"
          initial={reduce ? false : { opacity: 0, x: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="pointer-events-none absolute -left-px top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-zinc-700/60 to-transparent lg:block"
            aria-hidden
          />

          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-[1.65rem]">
            {founders.noteTitle}
          </h3>

          <div className="mt-6 space-y-5 text-base leading-[1.75] text-zinc-300 md:text-[1.0625rem]">
            {founders.noteParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <footer className="mt-10 border-t border-zinc-800/80 pt-8">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-zinc-700/80 ring-2 ring-cyan-500/20">
                <Image
                  src="/landing/foto-david.jpg"
                  alt="David Martín"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p
                  className="font-signature text-3xl text-zinc-200 transition-colors duration-500 hover:text-cyan-100 md:text-4xl"
                  aria-label={`Firmado por ${founders.founder.signature}`}
                >
                  {founders.founder.signature}
                </p>
                <p className="mt-1 text-sm text-zinc-500">Fundador de Zeta Makers</p>
              </div>
            </div>
            <a
              href={founders.founder.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/80 px-3 py-2 text-xs font-medium text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-950/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <LinkedInIcon className="h-3.5 w-3.5 shrink-0" />
              <span>LinkedIn de {founders.founder.name}</span>
            </a>
          </footer>
        </motion.article>
      </div>
    </motion.section>
  );
}