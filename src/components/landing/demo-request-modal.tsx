"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type FormEvent, useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { easeOut } from "./landing-motion";

const profileOptions = [
  { value: "empresa", label: "Empresa" },
  { value: "agencia", label: "Agencia" },
  { value: "freelancer", label: "Freelancer" },
  { value: "business_owner", label: "Business owner" },
  { value: "interesado", label: "Interesado" },
] as const;

export type DemoProfileType = (typeof profileOptions)[number]["value"];

export type DemoRequestPayload = {
  fullName: string;
  email: string;
  phone: string;
  profileType: DemoProfileType;
  companyName?: string; // Opcional
};

type DemoRequestModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: DemoRequestPayload) => void | Promise<void>;
  /** Si se pasa, sustituye el título por defecto (p. ej. flujo “Avísame” / tutorial). */
  title?: string;
  /** Si se pasa, sustituye la descripción bajo el título. */
  description?: string;
};

export function DemoRequestModal({ open, onClose, onSubmit, title, description }: DemoRequestModalProps) {
  const reduce = useReducedMotion();
  const titleId = useId();
  const descId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [profileType, setProfileType] = useState<DemoProfileType>("agencia");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setFullName("");
    setEmail("");
    setPhone("");
    setCompanyName("");
    setProfileType("agencia");
    setSubmitting(false);
    setDone(false);
    setError(null);
  }, []);

  useEffect(() => {
    if (!open) {
      reset();
      return;
    }
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [open, reset]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Completa nombre, correo y teléfono.");
      return;
    }
    const payload: DemoRequestPayload = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      profileType,
      companyName: companyName.trim() || undefined,
    };
    setSubmitting(true);
    try {
      await onSubmit(payload);
      setDone(true);
    } catch (e) {
      setError(
        e instanceof Error && e.message
          ? e.message
          : "No se pudo enviar. Inténtalo de nuevo en unos minutos.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-6">
      <motion.button
        type="button"
        aria-label="Cerrar"
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduce ? undefined : { opacity: 0 }}
        transition={{ duration: 0.25, ease: easeOut }}
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative z-10 w-full max-w-md rounded-2xl border border-zinc-700 bg-zinc-900 p-6 shadow-2xl shadow-cyan-900/20 ring-1 ring-cyan-400/10"
        initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id={titleId} className="text-lg font-semibold text-white">
              {title ?? "Solicitar demo"}
            </h2>
            <p id={descId} className="mt-1 text-sm text-zinc-400">
              {description ?? "Déjanos tus datos y te contactamos para coordinar la sesión."}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
            aria-label="Cerrar formulario"
          >
            <span aria-hidden className="text-lg leading-none">
              ×
            </span>
          </button>
        </div>

        {done ? (
          <div className="mt-6 rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-4 text-sm text-cyan-100">
            Gracias. Hemos recibido tu solicitud; en breve nos pondremos en contacto por correo o teléfono.
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="demo-name" className="block text-xs font-medium uppercase tracking-wide text-zinc-400">
                Nombre y apellidos
              </label>
              <input
                ref={firstFieldRef}
                id="demo-name"
                name="fullName"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="demo-company" className="block text-xs font-medium uppercase tracking-wide text-zinc-400">
                Nombre de compañía o agencia (Opcional)
              </label>
              <input
                id="demo-company"
                name="companyName"
                type="text"
                autoComplete="organization"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                placeholder="Tu compañía o agencia"
              />
            </div>
            <div>
              <label htmlFor="demo-email" className="block text-xs font-medium uppercase tracking-wide text-zinc-400">
                Correo electrónico
              </label>
              <input
                id="demo-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                placeholder="tu@empresa.com"
              />
            </div>
            <div>
              <label htmlFor="demo-phone" className="block text-xs font-medium uppercase tracking-wide text-zinc-400">
                Teléfono
              </label>
              <input
                id="demo-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                placeholder="+34 …"
              />
            </div>
            <fieldset className="space-y-2">
              <legend className="text-xs font-medium uppercase tracking-wide text-zinc-400">¿Cómo te defines?</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {profileOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                      profileType === opt.value
                        ? "border-cyan-400/50 bg-cyan-500/10 text-cyan-100"
                        : "border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-zinc-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="profileType"
                      value={opt.value}
                      checked={profileType === opt.value}
                      onChange={() => setProfileType(opt.value)}
                      className="border-zinc-600 text-cyan-400 focus:ring-cyan-400"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {error ? <p className="text-sm text-red-400">{error}</p> : null}

            <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-zinc-600 px-4 py-2.5 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-cyan-300 disabled:opacity-60"
              >
                {submitting ? "Enviando…" : "Enviar solicitud"}
              </button>
            </div>
          </form>
        )}

        {done ? (
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-cyan-300"
            >
              Cerrar
            </button>
          </div>
        ) : null}
      </motion.div>
    </div>,
    document.body,
  );
}
