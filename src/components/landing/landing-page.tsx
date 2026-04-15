"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { DemoRequestModal } from "./demo-request-modal";
import { HowItWorksModal } from "./how-it-works-modal";
import {
  faqItems,
  heroHeadlines,
  heroSubtitles,
  heroVariants,
  howItWorks,
  microcopy,
  positioning,
  primaryCtas,
  secondaryCtas,
  useCases,
} from "./landing-data";
import {
  easeOut,
  useHeroImageMotion,
  useHeroStaggerVariants,
  useScrollReveal,
  useStaggerGridVariants,
} from "./landing-motion";

const hoverEase = { duration: 0.55, ease: easeOut };

const sectionClass = "mx-auto w-full max-w-6xl px-6 py-16 md:px-10";

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10 max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="text-base text-zinc-300 md:text-lg">{subtitle}</p>
    </div>
  );
}

function MotionButton({
  variant,
  children,
  className,
  onClick,
}: {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const reduce = useReducedMotion();
  const base =
    variant === "primary"
      ? "rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-cyan-300"
      : "rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900";
  const hover =
    reduce === true
      ? undefined
      : variant === "primary"
        ? { scale: 1.02, boxShadow: "0 12px 40px -8px rgba(34, 211, 238, 0.35)" }
        : { scale: 1.02 };
  return (
    <motion.button
      type="button"
      className={`${base} ${className ?? ""}`}
      onClick={onClick}
      whileHover={hover}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      {children}
    </motion.button>
  );
}

export function LandingPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [howItWorksModalOpen, setHowItWorksModalOpen] = useState(false);
  const [demoModalFromTutorial, setDemoModalFromTutorial] = useState(false);
  const scrollReveal = useScrollReveal();
  const heroStagger = useHeroStaggerVariants();
  const heroImageMotion = useHeroImageMotion();
  const painStagger = useStaggerGridVariants(0.09);
  const howStagger = useStaggerGridVariants(0.12);
  const benefitStagger = useStaggerGridVariants(0.09);
  const variantCardsStagger = useStaggerGridVariants(0.12);
  const useCaseStagger = useStaggerGridVariants(0.11);
  const copyLibStagger = useStaggerGridVariants(0.1);
  const faqStagger = useStaggerGridVariants(0.08);
  const reduce = useReducedMotion();

  return (
    <main className="relative overflow-hidden bg-[#07090d] text-zinc-100">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(70vh,720px)] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.12),transparent_55%)]"
        aria-hidden
      />

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
              Content Operations. Scaled.
            </motion.p>
            <motion.h1
              variants={heroStagger.item}
              className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
            >
              La plataforma operativa de creación de contenido multi-cliente con IA.
            </motion.h1>
            <motion.p
              variants={heroStagger.item}
              className="max-w-2xl text-lg text-zinc-300 md:text-xl"
            >
              Produce contenido para varios clientes sin mezclar marcas, sin rehacer prompts cada dia y sin perder
              control de aprobacion.
            </motion.p>
            <motion.div variants={heroStagger.item} className="flex flex-col gap-3 sm:flex-row">
              <MotionButton variant="primary" onClick={() => setDemoModalOpen(true)}>
                Solicitar demo
              </MotionButton>
              <MotionButton variant="secondary" onClick={() => setHowItWorksModalOpen(true)}>
                Ver como funciona
              </MotionButton>
            </motion.div>
            <motion.p variants={heroStagger.item} className="text-sm text-zinc-400">
              {microcopy.trustLine}
            </motion.p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-3 shadow-2xl shadow-cyan-900/20 ring-1 ring-cyan-400/10"
            {...heroImageMotion}
          >
            <Image
              src="/landing/client-hub.png"
              alt="Vista principal del dashboard de clientes"
              width={1200}
              height={800}
              className="h-auto w-full rounded-xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      <motion.section className={sectionClass} {...scrollReveal}>
        <SectionTitle
          eyebrow="Dolor real"
          title="No faltan ideas: falta sistema para operar varias marcas sin friccion"
          subtitle="Cuando el contexto vive en herramientas sueltas, el equipo repite trabajo y la calidad se vuelve inestable."
        />
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={painStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {[
            "Informacion repartida entre Drive, Notion, PDFs, chats y documentos.",
            "Prompts e instrucciones repetidas para cada cliente y cada formato.",
            "Riesgo constante de mezclar tono, posicionamiento y objetivos entre marcas.",
            "Revision interna lenta y poco trazable antes de publicar.",
          ].map((pain) => (
            <motion.p
              key={pain}
              variants={painStagger.item}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-zinc-200 transition-colors hover:border-zinc-600"
            >
              {pain}
            </motion.p>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className={sectionClass} {...scrollReveal}>
        <SectionTitle
          eyebrow="Como funciona"
          title="Del contexto a la publicacion con un flujo unico"
          subtitle="Cuatro pasos para convertir operacion dispersa en produccion consistente."
        />
        <motion.div
          className="grid gap-5 md:grid-cols-2"
          variants={howStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {howItWorks.map((item) => (
            <motion.article
              key={item.step}
              variants={howStagger.item}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors hover:border-zinc-600"
              whileHover={reduce ? undefined : { y: -3 }}
              transition={hoverEase}
            >
              <p className="text-xs font-semibold text-cyan-300">Paso {item.step}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.body}</p>
              <Image
                src={item.image}
                alt={item.title}
                width={960}
                height={600}
                className="mt-4 h-auto w-full rounded-lg border border-zinc-800"
              />
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className={sectionClass} {...scrollReveal}>
        <SectionTitle
          eyebrow="Beneficios para agencias"
          title="Mas capacidad operativa, menos retrabajo y mejor control editorial"
          subtitle="La ventaja no es solo generar mas rapido, sino operar mejor cada cuenta."
        />
        <motion.div
          className="grid gap-4 md:grid-cols-3"
          variants={benefitStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {[
            "Productividad: menos tiempo en recopilar contexto y rehacer instrucciones.",
            "Consistencia: cada cliente trabaja sobre su propia base de marca.",
            "Control: cada pieza pasa por revision clara antes de publicarse.",
            "Escalabilidad: agregar clientes no implica multiplicar caos interno.",
            "Calidad: plantillas y parametros reducen variabilidad entre entregables.",
            "Margen: menos iteraciones operativas y mejor uso del tiempo senior.",
          ].map((benefit) => (
            <motion.p
              key={benefit}
              variants={benefitStagger.item}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-200 transition-colors hover:border-zinc-600"
            >
              {benefit}
            </motion.p>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className={sectionClass} {...scrollReveal}>
        <SectionTitle
          eyebrow="Comparativa"
          title="Por que no es lo mismo que ChatGPT + Notion + Drive"
          subtitle="Las herramientas sueltas generan piezas. Zetavoice organiza una operacion de contenido completa."
        />
        <motion.div
          className="overflow-hidden rounded-2xl border border-zinc-800"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.9, ease: easeOut },
            y: { duration: 0.75, ease: easeOut },
          }}
        >
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-zinc-900">
              <tr>
                <th className="px-4 py-3 text-zinc-300">Criterio</th>
                <th className="px-4 py-3 text-zinc-300">Stack fragmentado</th>
                <th className="px-4 py-3 text-cyan-200">Zetavoice</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-950/80 text-zinc-200">
              {[
                ["Contexto por cliente", "Manual y disperso", "Aislado y centralizado"],
                ["Plantillas reutilizables", "Parcial y desordenado", "Biblioteca operativa por objetivo"],
                ["Generacion parametrizada", "Dependiente de prompts sueltos", "Parametros consistentes por marca"],
                ["Aprobacion editorial", "Sin cola unificada", "Pendiente -> Revisado -> Publicado"],
                ["Escalabilidad multi-cliente", "Mas herramientas, mas friccion", "Un flujo unico para todo el equipo"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-zinc-800 transition-colors hover:bg-zinc-900/50">
                  <td className="px-4 py-3">{row[0]}</td>
                  <td className="px-4 py-3 text-zinc-400">{row[1]}</td>
                  <td className="px-4 py-3 text-cyan-100">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.section>

      <motion.section className={sectionClass} {...scrollReveal}>
        <SectionTitle
          eyebrow="No es otro generador de IA"
          title="Es infraestructura operativa para producir sin perder criterio humano"
          subtitle="El valor esta en el sistema de trabajo: contexto por marca, estandarizacion y control de calidad."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              opacity: { duration: 0.9, ease: easeOut },
              y: { duration: 0.65, ease: easeOut },
            }}
            whileHover={reduce ? undefined : { y: -2 }}
            className="overflow-hidden rounded-2xl border border-zinc-800"
          >
            <Image
              src="/landing/edicion-marca.png"
              alt="Edición de plantilla estructurada por objetivo"
              width={1200}
              height={760}
              className="h-auto w-full"
            />
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              opacity: { duration: 0.9, delay: 0.14, ease: easeOut },
              y: { duration: 0.65, delay: 0.14, ease: easeOut },
            }}
            whileHover={reduce ? undefined : { y: -2 }}
            className="overflow-hidden rounded-2xl border border-zinc-800"
          >
            <Image
              src="/landing/preview-post.png"
              alt="Vista previa de contenido antes de aprobacion"
              width={1200}
              height={760}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section className={sectionClass} {...scrollReveal}>
        <SectionTitle
          eyebrow="Casos de uso"
          title="Cinco escenarios reales de operacion diaria"
          subtitle="Diseñado para equipos pequenos y medianos que necesitan orden y velocidad."
        />
        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={useCaseStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {useCases.map((item) => (
            <motion.article
              key={item.title}
              variants={useCaseStagger.item}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors hover:border-zinc-600"
              whileHover={reduce ? undefined : { y: -3 }}
              transition={hoverEase}
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-400">Dolor: {item.pain}</p>
              <p className="mt-2 text-sm text-cyan-100">Resultado: {item.outcome}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className={sectionClass} {...scrollReveal}>
        <SectionTitle
          eyebrow="FAQ"
          title="Objeciones reales antes de pedir una demo"
          subtitle="Preguntas frecuentes para evaluar encaje operativo sin promesas infladas."
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
                  <motion.span
                    className="text-cyan-400/80"
                    initial={false}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.45, ease: easeOut }}
                  >
                    <span className="inline-block transition-transform duration-500 ease-out group-open:rotate-45">+</span>
                  </motion.span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-zinc-300">{item.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className={`${sectionClass} pt-6`} {...scrollReveal}>
        <motion.div
          className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-8"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: easeOut }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white">CTA final para cerrar la landing</h2>
          <p className="mt-3 max-w-3xl text-zinc-200">
            Mejor CTA para trafico frio: <strong>Solicitar demo</strong>. Mejor CTA para trafico caliente:{" "}
            <strong>Ver como funciona</strong>. Mensaje para captar demos sin agresividad:{" "}
            <strong>
              Veamos tu flujo actual y te mostramos en 20 minutos donde puedes reducir retrabajo sin perder control
              editorial.
            </strong>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <MotionButton variant="primary" onClick={() => setDemoModalOpen(true)}>
              Solicitar demo
            </MotionButton>
            <MotionButton variant="secondary" onClick={() => setHowItWorksModalOpen(true)}>
              Ver como funciona
            </MotionButton>
          </div>
        </motion.div>
      </motion.section>

      {/* 
      <motion.section className={`${sectionClass} pt-10`} {...scrollReveal}>
        <SectionTitle
          eyebrow="Anexo estrategico"
          title="Recomendaciones y opciones fuera del flujo principal de la web"
          subtitle="Este bloque queda al final para revisar posibilidades de mensaje sin afectar la lectura de la landing."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80"
            whileHover={reduce ? undefined : { y: -2 }}
            transition={hoverEase}
          >
            <h3 className="text-lg font-semibold text-white">Posicionamiento central</h3>
            <p className="mt-3 text-zinc-300">{positioning.central}</p>
            <p className="mt-4 rounded-lg border border-cyan-400/30 bg-cyan-500/10 p-3 text-sm text-cyan-100">
              Recomendacion principal: {positioning.recommendation}
            </p>
          </motion.article>
          <motion.article
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80"
            whileHover={reduce ? undefined : { y: -2 }}
            transition={hoverEase}
          >
            <h3 className="text-lg font-semibold text-white">Alternativas de posicionamiento</h3>
            <ul className="mt-3 space-y-3 text-zinc-300">
              {positioning.alternatives.map((alternative) => (
                <li key={alternative} className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2">
                  {alternative}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-zinc-400">
              What it is / who it&apos;s for / outcome: {positioning.whatItIs}
            </p>
          </motion.article>
        </div>
      </motion.section>

      <motion.section className={sectionClass} {...scrollReveal}>
        <SectionTitle
          eyebrow="Versiones del giro"
          title="Tres enfoques de hero listos para test de conversion"
          subtitle="Incluye version recomendada para agencias de marketing/social media y version para copy/contenidos."
        />
        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={variantCardsStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {heroVariants.map((variant, idx) => (
            <motion.article
              key={variant.title}
              variants={variantCardsStagger.item}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors hover:border-zinc-600"
              whileHover={reduce ? undefined : { y: -4, borderColor: "rgba(63, 63, 70, 1)" }}
              transition={hoverEase}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
                {idx === 0 ? "Recomendada para salida" : `Version ${idx + 1}`}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{variant.title}</h3>
              <p className="mt-3 text-sm text-zinc-300">{variant.subtitle}</p>
              <div className="mt-4 flex gap-2 text-xs">
                <span className="rounded-md border border-cyan-400/40 bg-cyan-500/10 px-2 py-1 text-cyan-100">
                  {variant.primaryCta}
                </span>
                <span className="rounded-md border border-zinc-700 px-2 py-1 text-zinc-300">{variant.secondaryCta}</span>
              </div>
              <Image
                src={variant.visual}
                alt={`Captura de apoyo para ${variant.title}`}
                width={960}
                height={640}
                className="mt-4 h-auto w-full rounded-lg border border-zinc-800"
              />
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className={sectionClass} {...scrollReveal}>
        <SectionTitle
          eyebrow="Biblioteca de copy"
          title="Entregables de titular, subtitulos, CTAs y microcopy"
          subtitle="Material listo para iteracion de mensaje y tests A/B."
        />
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={copyLibStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.article variants={copyLibStagger.item} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h3 className="text-lg font-semibold text-white">15 titulares para Hero</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {heroHeadlines.map((headline) => (
                <li key={headline}>- {headline}</li>
              ))}
            </ul>
          </motion.article>
          <motion.article variants={copyLibStagger.item} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h3 className="text-lg font-semibold text-white">10 subtitulos para Hero</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {heroSubtitles.map((subtitle) => (
                <li key={subtitle}>- {subtitle}</li>
              ))}
            </ul>
          </motion.article>
          <motion.article variants={copyLibStagger.item} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h3 className="text-lg font-semibold text-white">CTAs principales (trafico frio)</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {primaryCtas.map((cta) => (
                <li key={cta}>- {cta}</li>
              ))}
            </ul>
          </motion.article>
          <motion.article variants={copyLibStagger.item} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h3 className="text-lg font-semibold text-white">CTAs secundarios y microcopy</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {secondaryCtas.map((cta) => (
                <li key={cta}>- {cta}</li>
              ))}
            </ul>
            <div className="mt-4 space-y-2 text-sm text-zinc-400">
              <p>Placeholder formulario: {microcopy.placeholder}</p>
              <p>Boton demo: {microcopy.demoButton}</p>
              <p>Waitlist: {microcopy.waitlist}</p>
              {microcopy.trialMessages.map((msg) => (
                <p key={msg}>- {msg}</p>
              ))}
              {microcopy.secondaryButtons.map((btn) => (
                <p key={btn}>- {btn}</p>
              ))}
            </div>
          </motion.article>
        </motion.div>
      </motion.section>
      */}

      <HowItWorksModal
        open={howItWorksModalOpen}
        onClose={() => setHowItWorksModalOpen(false)}
        onNotifyMe={() => {
          setDemoModalFromTutorial(true);
          setDemoModalOpen(true);
        }}
      />
      <DemoRequestModal
        open={demoModalOpen}
        onClose={() => {
          setDemoModalOpen(false);
          setDemoModalFromTutorial(false);
        }}
        title={demoModalFromTutorial ? "Te avisamos y te enseñamos el flujo" : undefined}
        description={
          demoModalFromTutorial
            ? "Deja tus datos: te contactamos para la demo y, cuando publiquemos el mini tutorial, te lo haremos saber."
            : undefined
        }
        onSubmit={async (data) => {
          const r = await fetch("/api/demo-request", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...data,
              source: demoModalFromTutorial ? "tutorial_avisame" : "demo_cta",
            }),
          });
          const body = (await r.json().catch(() => ({}))) as { error?: string };
          if (!r.ok) {
            throw new Error(
              typeof body.error === "string" ? body.error : "No se pudo enviar. Inténtalo de nuevo.",
            );
          }
        }}
      />
    </main>
  );
}
