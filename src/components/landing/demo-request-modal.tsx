"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type FormEvent, useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { easeOut } from "./landing-motion";

const profileOptions = [
  { value: "empresa", label: "Empresa" },
  { value: "founder_ceo", label: "Founder / CEO" },
  { value: "director_clevel", label: "Director / C-Level" },
  { value: "marketing_lead", label: "Responsable de marketing" },
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
  const [profileType, setProfileType] = useState<DemoProfileType>("empresa");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setFullName("");
    setEmail("");
    setPhone("");
    setCompanyName("");
    setProfileType("empresa");
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

  const fieldClass =
    "mt-1.5 w-full min-w-0 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-base text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 sm:py-2.5 sm:text-sm";

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
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
        className="relative z-10 flex max-h-[min(92dvh,100%)] w-full max-w-md flex-col overflow-hidden rounded-t-2xl border border-zinc-700 border-b-0 bg-zinc-900 shadow-2xl shadow-cyan-900/20 ring-1 ring-cyan-400/10 sm:max-h-[min(90dvh,40rem)] sm:rounded-2xl sm:border-b"
        initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-zinc-800/80 px-4 pb-3 pt-4 sm:border-b-0 sm:px-6 sm:pb-0 sm:pt-6">
          <div className="min-w-0 pr-1">
            <h2 id={titleId} className="text-base font-semibold text-white sm:text-lg">
              {title ?? "Solicitar demo"}
            </h2>
            <p id={descId} className="mt-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">
              {description ?? "Déjanos tus datos y te contactamos para coordinar la sesión."}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-mr-1 shrink-0 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
            aria-label="Cerrar formulario"
          >
            <span aria-hidden className="text-xl leading-none sm:text-lg">
              ×
            </span>
          </button>
        </div>

        {done ? (
          <div className="overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-6">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-4 text-sm text-cyan-100">
              Gracias. Hemos recibido tu solicitud; en breve nos pondremos en contacto por correo o teléfono.
            </div>
            <div className="mt-4 flex justify-stretch sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-cyan-300 sm:w-auto sm:py-2.5"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <form
            className="flex min-h-0 flex-1 flex-col"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-3 sm:space-y-4 sm:px-6 sm:py-4">
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
                  className={fieldClass}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="demo-company" className="block text-xs font-medium uppercase tracking-wide text-zinc-400">
                  Empresa <span className="normal-case text-zinc-500">(opcional)</span>
                </label>
                <input
                  id="demo-company"
                  name="companyName"
                  type="text"
                  autoComplete="organization"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className={fieldClass}
                  placeholder="Tu empresa"
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
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldClass}
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
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={fieldClass}
                  placeholder="+34 …"
                />
              </div>
              <fieldset className="space-y-2">
                <legend className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                  ¿Cómo te defines?
                </legend>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {profileOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex min-h-[2.75rem] cursor-pointer items-start gap-1.5 rounded-lg border px-2 py-2 text-xs leading-snug transition-colors sm:min-h-0 sm:items-center sm:gap-2 sm:px-3 sm:py-2.5 sm:text-sm ${
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
                        className="mt-0.5 shrink-0 border-zinc-600 text-cyan-400 focus:ring-cyan-400 sm:mt-0"
                      />
                      <span className="min-w-0 break-words">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="shrink-0 space-y-2 border-t border-zinc-800 bg-zinc-900 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-4">
              {error ? <p className="text-sm text-red-400">{error}</p> : null}
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-cyan-300 disabled:opacity-60 sm:w-auto sm:py-2.5"
                >
                  {submitting ? "Enviando…" : "Enviar solicitud"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full rounded-xl border border-zinc-600 px-4 py-3 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 sm:w-auto sm:py-2.5"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        )}
      </motion.div>
    </div>,
    document.body,
  );
}
