/**
 * 1) Hoja nueva. Fila 1 (cabeceras sugeridas): fecha | nombre | email | telefono | perfil | origen
 * 2) Extensiones > Apps Script, pega este código.
 * 3) Ajustes del proyecto (engranaje) > Propiedades del script > INGEST_SECRET
 *    (misma cadena que GOOGLE_SHEETS_INGEST_SECRET en .env; opcional pero recomendado).
 * 4) Implementar > Nueva implementación > Aplicación web
 *    - Ejecutar como: Yo
 *    - Quién tiene acceso: Cualquiera
 * 5) URL de la aplicación web → GOOGLE_SHEETS_WEBHOOK_URL en .env.local
 */
function doPost(e) {
  var props = PropertiesService.getScriptProperties();
  var expected = props.getProperty("INGEST_SECRET");
  var data = JSON.parse(e.postData.contents);

  if (expected && data.ingestSecret !== expected) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "unauthorized" })).setMimeType(
      ContentService.MimeType.JSON,
    );
  }

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var when = new Date();
  sheet.appendRow([
    when,
    data.fullName || "",
    data.email || "",
    data.phone || "",
    data.profileType || "",
    data.source || "",
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
