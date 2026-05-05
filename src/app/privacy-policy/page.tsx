import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad | Zeta Voice",
  description:
    "Información sobre el tratamiento de datos personales en Zeta Voice (Zeta Makers) y el uso de integraciones como LinkedIn.",
};

const lastUpdated = "5 de mayo de 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-full bg-[#07090d] text-zinc-100">
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[min(50vh,480px)] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.1),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Política de privacidad
        </h1>
        <p className="mt-2 text-sm text-zinc-400">Última actualización: {lastUpdated}</p>

        <div className="mt-10 max-w-none space-y-8 text-[15px] leading-relaxed text-zinc-300">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recogidos a través de este sitio web y de los
              servicios asociados a <strong className="font-medium text-zinc-200">Zeta Voice</strong> es{" "}
              <strong className="font-medium text-zinc-200">Zeta Makers</strong> (en adelante, &quot;nosotros&quot; o
              &quot;el responsable&quot;), en la medida en que actúe como titular del producto y del sitio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">2. Datos que podemos tratar</h2>
            <p>Según cómo interactúes con nosotros, podemos tratar, entre otros:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-medium text-zinc-200">Datos de contacto y perfil profesional</strong> que nos
                facilites al solicitar información, una demo o comunicarte con nosotros (por ejemplo: nombre, correo
                electrónico, teléfono, empresa y tipo de perfil).
              </li>
              <li>
                <strong className="font-medium text-zinc-200">Datos técnicos</strong> habituales de navegación
                (dirección IP, tipo de dispositivo o navegador, páginas visitadas de forma agregada) mediante cookies o
                mecanismos similares cuando estén activos y conforme a la información que mostremos en su momento en el
                banner o preferencias de cookies, si aplica.
              </li>
              <li>
                <strong className="font-medium text-zinc-200">Datos procedentes de LinkedIn</strong>, únicamente si
                utilizas una integración u OAuth de LinkedIn con nuestro producto: trataremos los datos que tú autorices
                mediante el consentimiento y los permisos (scopes) que apruebes en LinkedIn, dentro de lo permitido por
                la normativa y por las condiciones de la plataforma.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">3. Finalidades y base legal</h2>
            <p>Tratamos los datos para:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Gestionar solicitudes de información o demo, responder consultas y mantener la relación precontractual
                o comercial (interés legítimo y/o ejecución de medidas precontractuales a petición del interesado, según
                el caso).
              </li>
              <li>
                Prestar el servicio Zeta Voice, incluida la operación de funciones que dependan de cuentas conectadas
                (por ejemplo LinkedIn), cuando hayas activado esa conexión (ejecución contractual o consentimiento, según
                el tratamiento).
              </li>
              <li>
                Cumplir obligaciones legales aplicables y, en su caso, la seguridad del sitio y la prevención de abusos
                (interés legítimo u obligación legal).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">4. Conservación</h2>
            <p>
              Conservamos los datos el tiempo necesario para las finalidades indicadas y, en su caso, mientras dure la
              relación comercial o el plazo exigido por la ley. Los datos de solicitudes de contacto se conservarán
              mientras sean pertinentes para atender tu petición y un periodo razonable posterior, salvo obligación de
              conservación distinta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">5. Destinatarios y encargados</h2>
            <p>
              Podemos recurrir a proveedores de servicios que traten datos en nuestro nombre (por ejemplo alojamiento,
              correo, herramientas de productividad o analítica), con las garantías exigidas por la normativa. Algunos
              proveedores pueden estar fuera del Espacio Económico Europeo; en ese caso aplicaremos las salvaguardas
              adecuadas cuando corresponda.
            </p>
            <p>
              Cuando utilices <strong className="font-medium text-zinc-200">LinkedIn</strong>, el tratamiento por parte
              de LinkedIn se rige por la{" "}
              <a
                href="https://www.linkedin.com/legal/privacy-policy"
                rel="noopener noreferrer"
                target="_blank"
                className="text-cyan-300 hover:underline"
              >
                política de privacidad de LinkedIn
              </a>
              . Nosotros solo accedemos a la información que tú autorices en el flujo de permisos de la aplicación.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">6. Tus derechos</h2>
            <p>
              Si te encuentras en el ámbito del Reglamento (UE) 2016/679 (RGPD) o normativa equivalente, puedes
              ejercer los derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad cuando
              proceda, así como retirar el consentimiento en cualquier momento sin afectar a la licitud del tratamiento
              previo.
            </p>
            <p>
              Para ejercer tus derechos o plantear dudas sobre privacidad, puedes contactarnos a través del{" "}
              <Link href="/" className="text-cyan-300 hover:underline">
                formulario de solicitud de información
              </Link>{" "}
              en la página principal, indicando que tu mensaje se refiere a protección de datos, o por el canal que te
              hayamos facilitado en comunicaciones comerciales.
            </p>
            <p>
              Tienes derecho a presentar una reclamación ante la autoridad de control que corresponda (en España, la{" "}
              <a
                href="https://www.aepd.es"
                rel="noopener noreferrer"
                target="_blank"
                className="text-cyan-300 hover:underline"
              >
                Agencia Española de Protección de Datos
              </a>
              ).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">7. Menores</h2>
            <p>
              Nuestros servicios no están dirigidos a menores de edad. Si detectamos datos de menores sin el respaldo
              legal adecuado, procederemos a su eliminación.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">8. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política para reflejar cambios legales o en el servicio. La fecha de
              &quot;Última actualización&quot; indicada arriba identificará la versión vigente. Te recomendamos revisarla
              periódicamente; en cambios relevantes podremos informarte por medios razonables cuando la ley lo exija.
            </p>
          </section>
        </div>

        <p className="mt-14 text-sm text-zinc-500">
          <Link href="/" className="text-cyan-400/90 hover:text-cyan-300 hover:underline">
            Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
}
