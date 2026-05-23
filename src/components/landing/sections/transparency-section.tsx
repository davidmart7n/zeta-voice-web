"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useRef } from "react";
import {
  founders,
  foundersSection,
  type FounderProfile,
} from "../landing-data";
import { useScrollReveal } from "../landing-motion";
import { hoverEase, sectionClass } from "./constants";

const portraitSize = "w-[10.5rem] sm:w-[11.5rem]";

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

function FounderPortrait({
  member,
  tilt,
  baseRotate,
  offsetClass,
  zClass,
  priority,
}: {
  member: FounderProfile;
  tilt: number;
  baseRotate: number;
  offsetClass: string;
  zClass: string;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`group/photo relative shrink-0 ${portraitSize} ${offsetClass} ${zClass}`}
      style={{ rotate: baseRotate }}
      whileHover={
        reduce
          ? undefined
          : {
              y: -12,
              rotate: 0,
              scale: 1.04,
              zIndex: 40,
            }
      }
      transition={hoverEase}
    >
      <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-cyan-400/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover/photo:bg-cyan-400/25 group-hover/photo:opacity-100" />
      <div className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900 shadow-2xl shadow-black/50 ring-1 ring-white/5 transition-[border-color,box-shadow] duration-500 group-hover/photo:border-cyan-400/55 group-hover/photo:shadow-cyan-950/40">
        <motion.div
          className="relative aspect-[4/5] w-full overflow-hidden"
          style={reduce ? undefined : { rotate: tilt }}
          whileHover={reduce ? undefined : { scale: 1.07 }}
          transition={hoverEase}
        >
          <Image
            src={member.imageSrc}
            alt={member.imageAlt}
            width={280}
            height={350}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 640px) 42vw, 184px"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent opacity-60 transition-opacity duration-500 group-hover/photo:opacity-90" />
          <span className="absolute bottom-3 left-3 translate-y-1.5 rounded-full border border-cyan-400/30 bg-zinc-950/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-200 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover/photo:translate-y-0 group-hover/photo:opacity-100">
            {member.name}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function FoundersPhotoGallery() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);
  const rotateX = useSpring(0, { stiffness: 140, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 140, damping: 22 });
  const [david, adri] = founders.members;

  const spotlightBackground = useMotionTemplate`radial-gradient(420px circle at ${spotlightX}% ${spotlightY}%, rgba(34, 211, 238, 0.14), transparent 65%)`;

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (reduce || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const px = ((event.clientX - rect.left) / rect.width) * 100;
      const py = ((event.clientY - rect.top) / rect.height) * 100;
      spotlightX.set(px);
      spotlightY.set(py);
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      rotateY.set(nx * 14);
      rotateX.set(-ny * 11);
    },
    [reduce, rotateX, rotateY, spotlightX, spotlightY],
  );

  const handlePointerLeave = useCallback(() => {
    spotlightX.set(50);
    spotlightY.set(50);
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY, spotlightX, spotlightY]);

  return (
    <motion.div
      ref={containerRef}
      className="group/gallery relative mx-auto w-full max-w-sm [perspective:1200px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-3xl opacity-0 transition-opacity duration-700 group-hover/gallery:opacity-100"
        style={{ background: spotlightBackground }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -left-6 top-1/3 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-700 group-hover/gallery:bg-cyan-500/20 group-hover/gallery:scale-110"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-4 top-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-700 group-hover/gallery:bg-emerald-500/18 group-hover/gallery:scale-110"
        aria-hidden
      />

      <motion.div
        className="relative z-10"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative flex items-end justify-center">
          <FounderPortrait
            member={adri}
            tilt={-1.5}
            baseRotate={-2}
            offsetClass="-mr-5 sm:-mr-6"
            zClass="z-10"
          />
          <FounderPortrait
            member={david}
            tilt={1}
            baseRotate={1}
            offsetClass=""
            zClass="z-20"
            priority
          />
        </div>

        <motion.div
          className="group/team relative z-30 -mt-8 px-2 sm:-mt-10 sm:px-0"
          whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
          transition={hoverEase}
        >
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-900 shadow-2xl shadow-cyan-950/25 ring-1 ring-cyan-400/10 transition-[border-color,box-shadow] duration-500 group-hover/team:border-cyan-400/45 group-hover/team:shadow-cyan-500/20">
            <motion.div
              className="relative aspect-[16/10] w-full overflow-hidden"
              whileHover={reduce ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={founders.teamImageSrc}
                alt={founders.teamImageAlt}
                width={640}
                height={400}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-70 transition-opacity duration-500 group-hover/team:opacity-85" />
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover/team:translate-x-full"
                aria-hidden
              />
            </motion.div>

            <motion.div
              className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 opacity-0 transition-opacity duration-500 group-hover/team:opacity-100"
              initial={false}
            >
              <span className="rounded-full border border-cyan-400/35 bg-zinc-950/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200 backdrop-blur-md">
                2 founders · 1 visión
              </span>
              <span className="rounded-full border border-zinc-600/50 bg-zinc-950/75 px-2.5 py-1 text-[10px] font-medium text-zinc-400 backdrop-blur-md">
                Zeta Makers
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function TransparencySection() {
  const scrollReveal = useScrollReveal();
  const reduce = useReducedMotion();

  return (
    <motion.section className={sectionClass} {...scrollReveal} id="founders">
      {foundersSection.eyebrow ? (
        <p className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/80 md:mb-14">
          {foundersSection.eyebrow}
        </p>
      ) : null}

      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="flex flex-col items-center lg:items-stretch">
          <FoundersPhotoGallery />

          <motion.div
            className="mt-10 grid w-full max-w-md grid-cols-2 gap-6 sm:max-w-lg"
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {founders.members.map((member) => (
              <motion.div
                key={member.name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <p
                  className="font-signature text-2xl leading-none text-zinc-200 transition-colors duration-300 hover:text-cyan-100 md:text-3xl"
                  aria-hidden
                >
                  {member.signature}
                </p>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/80 px-3 py-2 text-xs font-medium text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-950/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  <LinkedInIcon className="h-3.5 w-3.5 shrink-0" />
                  <span>LinkedIn de {member.name}</span>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-8 text-center text-sm font-medium tracking-wide text-zinc-500 lg:text-left">
            {founders.caption}
          </p>
        </div>

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
            <p
              className="font-signature text-3xl text-zinc-200 transition-colors duration-500 hover:text-cyan-100 md:text-4xl"
              aria-label={`Firmado por ${founders.jointSignature}`}
            >
              {founders.jointSignature}
            </p>
            <p className="mt-2 text-sm text-zinc-500">Cofundadores, Zeta Makers</p>
          </footer>
        </motion.article>
      </div>
    </motion.section>
  );
}
