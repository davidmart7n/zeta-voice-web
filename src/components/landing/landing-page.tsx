import Image from "next/image";
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

export function LandingPage() {
  return (
    <main className="bg-[#07090d] text-zinc-100">
      <section className={`${sectionClass} pb-10 pt-20`}>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Content Operations. Scaled.
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              La plataforma de operacion de contenido multi-cliente para agencias.
            </h1>
            <p className="max-w-2xl text-lg text-zinc-300 md:text-xl">
              Produce contenido para varios clientes sin mezclar marcas, sin rehacer prompts cada dia y sin perder
              control de aprobacion.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300">
                Solicitar demo
              </button>
              <button className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900">
                Ver como funciona
              </button>
            </div>
            <p className="text-sm text-zinc-400">{microcopy.trustLine}</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-3 shadow-2xl shadow-cyan-900/20">
            <Image
              src="/landing/client-hub.png"
              alt="Vista principal del dashboard de clientes"
              width={1200}
              height={800}
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <SectionTitle
          eyebrow="Posicionamiento"
          title="Mensaje central y recomendacion de salida a mercado"
          subtitle="Narrativa orientada a operacion real de agencias, no a promesas de IA generica."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Posicionamiento central</h3>
            <p className="mt-3 text-zinc-300">{positioning.central}</p>
            <p className="mt-4 rounded-lg border border-cyan-400/30 bg-cyan-500/10 p-3 text-sm text-cyan-100">
              Recomendacion principal: {positioning.recommendation}
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
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
          </article>
        </div>
      </section>

      <section className={sectionClass}>
        <SectionTitle
          eyebrow="Versiones del hero"
          title="Tres enfoques listos para test de conversion"
          subtitle="Incluye version recomendada para agencias de marketing/social media y version para copy/contenidos."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {heroVariants.map((variant, idx) => (
            <article key={variant.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
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
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <SectionTitle
          eyebrow="Dolor real"
          title="No faltan ideas: falta sistema para operar varias marcas sin friccion"
          subtitle="Cuando el contexto vive en herramientas sueltas, el equipo repite trabajo y la calidad se vuelve inestable."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Informacion repartida entre Drive, Notion, PDFs, chats y documentos.",
            "Prompts e instrucciones repetidas para cada cliente y cada formato.",
            "Riesgo constante de mezclar tono, posicionamiento y objetivos entre marcas.",
            "Revision interna lenta y poco trazable antes de publicar.",
          ].map((pain) => (
            <p key={pain} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-zinc-200">
              {pain}
            </p>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <SectionTitle
          eyebrow="Como funciona"
          title="Del contexto a la publicacion con un flujo unico"
          subtitle="Cuatro pasos para convertir operacion dispersa en produccion consistente."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {howItWorks.map((item) => (
            <article key={item.step} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
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
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <SectionTitle
          eyebrow="Beneficios para agencias"
          title="Mas capacidad operativa, menos retrabajo y mejor control editorial"
          subtitle="La ventaja no es solo generar mas rapido, sino operar mejor cada cuenta."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Productividad: menos tiempo en recopilar contexto y rehacer instrucciones.",
            "Consistencia: cada cliente trabaja sobre su propia base de marca.",
            "Control: cada pieza pasa por revision clara antes de publicarse.",
            "Escalabilidad: agregar clientes no implica multiplicar caos interno.",
            "Calidad: plantillas y parametros reducen variabilidad entre entregables.",
            "Margen: menos iteraciones operativas y mejor uso del tiempo senior.",
          ].map((benefit) => (
            <p key={benefit} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-200">
              {benefit}
            </p>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <SectionTitle
          eyebrow="Comparativa"
          title="Por que no es lo mismo que ChatGPT + Notion + Drive"
          subtitle="Las herramientas sueltas generan piezas. Zetavoice organiza una operacion de contenido completa."
        />
        <div className="overflow-hidden rounded-2xl border border-zinc-800">
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
                <tr key={row[0]} className="border-t border-zinc-800">
                  <td className="px-4 py-3">{row[0]}</td>
                  <td className="px-4 py-3 text-zinc-400">{row[1]}</td>
                  <td className="px-4 py-3 text-cyan-100">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={sectionClass}>
        <SectionTitle
          eyebrow="No es otro generador de IA"
          title="Es infraestructura operativa para producir sin perder criterio humano"
          subtitle="El valor esta en el sistema de trabajo: contexto por marca, estandarizacion y control de calidad."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Image
            src="/landing/edicion-marca.png"
            alt="Edicion de lineamientos de marca por cliente"
            width={1200}
            height={760}
            className="h-auto w-full rounded-2xl border border-zinc-800"
          />
          <Image
            src="/landing/preview-post.png"
            alt="Vista previa de contenido antes de aprobacion"
            width={1200}
            height={760}
            className="h-auto w-full rounded-2xl border border-zinc-800"
          />
        </div>
      </section>

      <section className={sectionClass}>
        <SectionTitle
          eyebrow="Casos de uso"
          title="Cinco escenarios reales de operacion diaria"
          subtitle="Diseñado para equipos pequenos y medianos que necesitan orden y velocidad."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <article key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-400">Dolor: {item.pain}</p>
              <p className="mt-2 text-sm text-cyan-100">Resultado: {item.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <SectionTitle
          eyebrow="FAQ"
          title="Objeciones reales antes de pedir una demo"
          subtitle="Preguntas frecuentes para evaluar encaje operativo sin promesas infladas."
        />
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details key={item.q} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-white">{item.q}</summary>
              <p className="mt-3 text-sm text-zinc-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <SectionTitle
          eyebrow="Biblioteca de copy"
          title="Entregables de titular, subtitulos, CTAs y microcopy"
          subtitle="Material listo para iteracion de mensaje y tests A/B."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h3 className="text-lg font-semibold text-white">15 titulares para Hero</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {heroHeadlines.map((headline) => (
                <li key={headline}>- {headline}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h3 className="text-lg font-semibold text-white">10 subtitulos para Hero</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {heroSubtitles.map((subtitle) => (
                <li key={subtitle}>- {subtitle}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h3 className="text-lg font-semibold text-white">CTAs principales (trafico frio)</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {primaryCtas.map((cta) => (
                <li key={cta}>- {cta}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
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
              {microcopy.trialMessages.map((item) => (
                <p key={item}>- {item}</p>
              ))}
              {microcopy.secondaryButtons.map((item) => (
                <p key={item}>- {item}</p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className={`${sectionClass} pt-6`}>
        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Cierre y recomendacion de CTA</h2>
          <p className="mt-3 max-w-3xl text-zinc-200">
            Mejor CTA para trafico frio: <strong>Solicitar demo</strong>. Mejor CTA para trafico caliente:{" "}
            <strong>Reservar una llamada</strong>. Mensaje para captar demos sin agresividad:{" "}
            <strong>
              Veamos tu flujo actual y te mostramos en 20 minutos donde puedes reducir retrabajo sin perder control
              editorial.
            </strong>
          </p>
        </div>
      </section>
    </main>
  );
}
