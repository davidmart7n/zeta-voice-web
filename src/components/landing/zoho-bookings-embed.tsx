"use client";

import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";
import {
  ZOHO_BOOKINGS_EMBED_HEIGHT,
  ZOHO_BOOKINGS_EMBED_SCRIPT,
  type ZohoBookingPrefill,
  buildZohoBookingEmbedUrl,
} from "@/lib/zoho-bookings";

declare global {
  interface Window {
    Bookings?: {
      inlineEmbed: (options: {
        url: string;
        parent: string | HTMLElement;
        height?: string;
      }) => void;
    };
  }
}

type ZohoBookingsEmbedProps = {
  prefill?: ZohoBookingPrefill;
  height?: string;
  className?: string;
};

export function ZohoBookingsEmbed({
  prefill,
  height = ZOHO_BOOKINGS_EMBED_HEIGHT,
  className,
}: ZohoBookingsEmbedProps) {
  const containerId = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(
    () => typeof window !== "undefined" && Boolean(window.Bookings),
  );
  const embedUrl = buildZohoBookingEmbedUrl(prefill);

  useEffect(() => {
    if (!scriptReady || !containerRef.current || !window.Bookings) return;

    window.Bookings.inlineEmbed({
      url: embedUrl,
      parent: containerRef.current,
      height,
    });
  }, [scriptReady, embedUrl, height]);

  return (
    <>
      <Script
        src={ZOHO_BOOKINGS_EMBED_SCRIPT}
        strategy="lazyOnload"
        onLoad={() => setScriptReady(true)}
        onReady={() => setScriptReady(true)}
      />
      <div className="relative min-h-[12rem]">
        {!scriptReady ? (
          <p className="absolute inset-0 flex items-center justify-center text-sm text-zinc-400">
            Cargando calendario…
          </p>
        ) : null}
        <div
          id={containerId}
          ref={containerRef}
          className={className}
          aria-label="Calendario de reservas"
        />
      </div>
    </>
  );
}
