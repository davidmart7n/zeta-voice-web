import { NextResponse } from "next/server";

const PROFILE_VALUES = new Set([
  "empresa",
  "agencia",
  "freelancer",
  "business_owner",
  "interesado",
]);

type Body = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  profileType?: unknown;
  source?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Falta GOOGLE_SHEETS_WEBHOOK_URL en el servidor." },
      { status: 503 },
    );
  }

  let json: Body;
  try {
    json = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const fullName = typeof json.fullName === "string" ? json.fullName.trim() : "";
  const email = typeof json.email === "string" ? json.email.trim() : "";
  const phone = typeof json.phone === "string" ? json.phone.trim() : "";
  const profileType = typeof json.profileType === "string" ? json.profileType : "";
  const source =
    typeof json.source === "string" && json.source.length <= 64 ? json.source.trim() : "";

  if (!isNonEmptyString(fullName) || !isNonEmptyString(email) || !isNonEmptyString(phone)) {
    return NextResponse.json({ error: "Faltan nombre, correo o teléfono." }, { status: 400 });
  }
  if (!PROFILE_VALUES.has(profileType)) {
    return NextResponse.json({ error: "Tipo de perfil no válido." }, { status: 400 });
  }

  const ingestSecret = process.env.GOOGLE_SHEETS_INGEST_SECRET?.trim();
  const payload = {
    fullName,
    email,
    phone,
    profileType,
    ...(source ? { source } : {}),
    ...(ingestSecret ? { ingestSecret } : {}),
  };

  let sheetRes: Response;
  try {
    sheetRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    return NextResponse.json({ error: "No se pudo contactar con Google Sheets." }, { status: 502 });
  }

  const raw = await sheetRes.text();
  let parsed: { ok?: boolean; error?: string };
  try {
    parsed = JSON.parse(raw) as { ok?: boolean; error?: string };
  } catch {
    return NextResponse.json({ error: "Respuesta inválida del webhook de Sheets." }, { status: 502 });
  }

  if (parsed.ok !== true) {
    const msg =
      parsed.error === "unauthorized"
        ? "Token del webhook incorrecto (revisa GOOGLE_SHEETS_INGEST_SECRET y INGEST_SECRET en Apps Script)."
        : "El script de Sheets rechazó el envío.";
    return NextResponse.json({ error: msg }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
