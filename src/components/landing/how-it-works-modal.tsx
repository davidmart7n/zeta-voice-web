"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { easeOut } from "./landing-motion";

const tutorialVideoUrl = "https://youtu.be/TFfeSGQjMd0";
const tutorialVideoEmbedUrl = "https://www.youtube.com/embed/TFfeSGQjMd0";

type HowItWorksModalProps = {
  open: boolean;
  onClose: () => void;
  onNotifyMe: () => void;
};

export function HowItWorksModal({ open, onClose, onNotifyMe }: HowItWorksModalProps) {
  const reduce = useReducedMotion();
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-6">
      <motion.button
        type="button"
        aria-label="Cerrar"
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: easeOut }}
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative z-10 w-full max-w-3xl rounded-2xl border border-zinc-700 bg-zinc-900 p-6 shadow-2xl shadow-cyan-900/20 ring-1 ring-cyan-400/10"
        initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id={titleId} className="text-lg font-semibold text-white">
              Como funciona el ecosistema Zetavoice
            </h2>
            <p id={descId} className="mt-1 text-sm text-zinc-400">
              Mira el recorrido completo desde contexto de empresa hasta publicacion; si encaja con tu objetivo, agenda
              una sesion estrategica para tu negocio.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
            aria-label="Cerrar"
          >
            <span aria-hidden className="text-lg leading-none">
              ×
            </span>
          </button>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950">
          <iframe
            src={tutorialVideoEmbedUrl}
            title="Como funciona el ecosistema Zetavoice"
            className="aspect-video w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-zinc-600 px-4 py-2.5 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800"
          >
            Cerrar
          </button>
          <button
            type="button"
            onClick={() => window.open(tutorialVideoUrl, "_blank", "noopener,noreferrer")}
            className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-cyan-300"
          >
            Ver en YouTube
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onNotifyMe();
            }}
            className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 hover:border-cyan-300/60 hover:bg-cyan-500/20"
          >
            Solicitar demo personalizada
          </button>
        </div>
      </motion.div>
    </div>,
    document.body,
  );
}
