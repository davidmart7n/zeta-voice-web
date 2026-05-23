"use client";

import Image from "next/image";

type PhoneMockupProps = {
  /** Cuando exista public/landing/zeta-app-mobile.png, pásala aquí o vía landing-data. */
  screenshotSrc?: string;
};

export function PhoneMockup({ screenshotSrc }: PhoneMockupProps) {
  return (
    <div className="mx-auto w-full max-w-[320px]">
      <div className="relative rounded-[2.25rem] border border-zinc-700 bg-zinc-950 p-3 shadow-2xl shadow-cyan-900/30 ring-1 ring-cyan-400/20">
        <div
          className="pointer-events-none absolute -inset-4 rounded-[2.75rem] bg-cyan-400/10 blur-2xl"
          aria-hidden
        />
        <div className="relative overflow-hidden rounded-[1.75rem] bg-zinc-900">
          <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-zinc-800" aria-hidden />

          {screenshotSrc ? (
            <Image
              src={screenshotSrc}
              alt="Captura de Zeta App en móvil"
              width={390}
              height={844}
              className="h-auto w-full"
            />
          ) : (
            <div className="space-y-3 p-4 pb-6">
              <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-100">
                Tienes 3 nuevos posts listos para revisar
              </div>

              <article className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950">
                <div className="h-28 bg-gradient-to-br from-zinc-800 to-zinc-900" aria-hidden />
                <div className="space-y-2 p-3">
                  <p className="text-xs font-semibold text-white">Post listo para LinkedIn</p>
                  <p className="line-clamp-3 text-[11px] leading-relaxed text-zinc-400">
                    Tu sector ya investiga antes de escribirte. Este post refuerza autoridad sin
                    que tengas que redactar desde cero…
                  </p>
                  <div className="flex gap-2 pt-1" aria-hidden>
                    <span className="rounded-md border border-zinc-600 px-2 py-1 text-[10px] text-zinc-300">
                      Editar
                    </span>
                    <span className="rounded-md bg-cyan-400/90 px-2 py-1 text-[10px] font-semibold text-zinc-950">
                      Aprobar y Programar
                    </span>
                  </div>
                </div>
              </article>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
