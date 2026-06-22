"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { emailCta, microcopy } from "../landing-data";
import { easeOut, useScrollReveal } from "../landing-motion";
import { sectionClass } from "./constants";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailCtaSection() {
  const scrollReveal = useScrollReveal();
  const reduce = useReducedMotion();
  const titleId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setStatus("error");
      setErrorMsg("Ese correo no parece válido. Intenta de nuevo.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value, source: "landing-email" }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || data.ok !== true) {
        throw new Error(data.error ?? "No se pudo completar el alta.");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Algo falló. Inténtalo otra vez.");
    }
  }

  return (
    <motion.section
      id="apuntarme"
      className={`${sectionClass} scroll-mt-16 pt-6`}
      {...scrollReveal}
    >
      <motion.div
        className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-8 md:p-10"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95, ease: easeOut }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        <h2 id={titleId} className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {emailCta.title}
        </h2>
        <div className="mt-4 max-w-3xl space-y-3 text-zinc-200">
          {emailCta.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {status === "success" ? (
          <div
            role="status"
            className="mt-8 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-100"
          >
            Hecho. Revisa tu correo — el primero ya va de camino.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-3" noValidate>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="email-cta-input" className="sr-only">
                Tu correo electrónico
              </label>
              <input
                id="email-cta-input"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder={microcopy.placeholder}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") {
                    setStatus("idle");
                    setErrorMsg("");
                  }
                }}
                disabled={status === "loading"}
                aria-invalid={status === "error"}
                aria-describedby="email-cta-help"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 disabled:opacity-60"
              />
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="shrink-0 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:cursor-pointer hover:bg-cyan-300 disabled:cursor-default disabled:opacity-60"
              >
                {status === "loading" ? "Enviando…" : emailCta.button}
              </motion.button>
            </div>
            <p id="email-cta-help" className="text-sm text-zinc-300">
              {status === "error" ? (
                <span className="text-rose-300">{errorMsg}</span>
              ) : (
                microcopy.trustLine
              )}
            </p>
          </form>
        )}
      </motion.div>
    </motion.section>
  );
}