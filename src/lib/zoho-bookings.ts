export const ZOHO_BOOKINGS_EMBED_SCRIPT =
  "https://bookings.nimbuspop.com/assets/embed.js";

export const ZOHO_BOOKINGS_SERVICE_URL =
  "https://zetamakers.zohobookings.eu/portal-embed#/263535000000041009";

export const ZOHO_BOOKINGS_EMBED_HEIGHT = "600px";

export type ZohoBookingPrefill = {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
};

/** Prefill de contacto en la URL del iframe (Zoho Bookings). */
export function buildZohoBookingEmbedUrl(prefill?: ZohoBookingPrefill): string {
  const base = ZOHO_BOOKINGS_SERVICE_URL;
  if (!prefill) return base;

  const [path, hash = ""] = base.split("#");
  const params = new URLSearchParams();
  params.set("Name", prefill.fullName);
  params.set("Email", prefill.email);
  params.set("Phone", prefill.phone);
  if (prefill.companyName) {
    params.set("Company", prefill.companyName);
  }

  const query = params.toString();
  const withQuery = query ? `${path}?${query}` : path;
  return hash ? `${withQuery}#${hash}` : withQuery;
}
