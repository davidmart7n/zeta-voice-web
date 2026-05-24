"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { ZohoBookingsEmbed } from "./zoho-bookings-embed";
import { easeOut } from "./landing-motion";

type ModalStep = "booking" | "done";

type DemoRequestModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
};

export function DemoRequestModal({
  open,
  onClose,
  title = "Elige fecha y hora",
  description = "Confirma tu cita de 20 minutos. Recibirás la confirmación por correo.",
}: DemoRequestModalProps) {
  const reduce = useReducedMotion();
  const titleId = useId();
  const descId = useId();

  const [step, setStep] = useState<ModalStep>("booking");

  const reset = useCallback(() => {
    setStep("booking");
  }, []);

  useEffect(() => {
    if (!open) {
      reset();
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
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

  if (!open) return null;
  if (typeof document === "undefined") return null;

  const headerTitle = step === "done" ? "Reserva confirmada" : title;
  const headerDescription =
    step === "done"
      ? "Gracias. Recibirás la confirmación de la cita por correo."
      : description;

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
        className="relative z-10 flex max-h-[min(92dvh,100%)] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-zinc-700 border-b-0 bg-zinc-900 shadow-2xl shadow-cyan-900/20 ring-1 ring-cyan-400/10 sm:max-h-[min(90dvh,44rem)] sm:rounded-2xl sm:border-b"
        initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-zinc-800/80 px-4 pb-3 pt-4 sm:border-b-0 sm:px-6 sm:pb-0 sm:pt-6">
          <div className="min-w-0 pr-1">
            <h2 id={titleId} className="text-base font-semibold text-white sm:text-lg">
              {headerTitle}
            </h2>
            <p id={descId} className="mt-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">
              {headerDescription}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-mr-1 shrink-0 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
            aria-label="Cerrar"
          >
            <span aria-hidden className="text-xl leading-none sm:text-lg">
              ×
            </span>
          </button>
        </div>

        {step === "done" ? (
          <div className="overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-6">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-4 text-sm text-cyan-100">
              Hemos recibido tu reserva. Revisa tu correo para los detalles de la cita y nos
              pondremos en contacto si hace falta.
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
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3 sm:px-6 sm:py-4">
              <ZohoBookingsEmbed className="w-full overflow-hidden rounded-lg border border-zinc-800 bg-white" />
            </div>
            <div className="shrink-0 space-y-2 border-t border-zinc-800 bg-zinc-900 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-4">
              <p className="text-xs text-zinc-500">
                Completa la reserva en el calendario para confirmar la cita.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setStep("done")}
                  className="w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-cyan-300 sm:w-auto sm:py-2.5"
                >
                  He completado la reserva
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full rounded-xl border border-zinc-600 px-4 py-3 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 sm:w-auto sm:py-2.5"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>,
    document.body,
  );
}
