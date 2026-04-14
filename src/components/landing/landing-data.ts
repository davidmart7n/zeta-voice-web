export type HeroVariant = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  visual: string;
};

export const positioning = {
  central:
    "Plataforma de operacion de contenido multi-cliente para agencias que centraliza contexto, generacion asistida y aprobacion en un solo flujo.",
  alternatives: [
    "Sistema operativo editorial para agencias que producen para varias marcas.",
    "Infraestructura de contenido multi-marca para reducir retrabajo y mantener consistencia.",
    "Centro de control para escalar produccion sin perder criterio humano en revision.",
  ],
  whatItIs:
    "Zetavoice es una plataforma para agencias que organiza el contexto por cliente y convierte el flujo contexto -> borrador -> revision en produccion predecible.",
  recommendation:
    "Salir primero con el angulo de agencias de marketing y social media: el dolor multi-cliente es mas visible, urgente y facil de demostrar en demo.",
};

export const heroHeadlines = [
  "Produce para varios clientes sin mezclar una sola marca.",
  "Escala contenido multi-cliente con orden, no con mas caos.",
  "La operacion de contenido de tu agencia, en un solo sistema.",
  "De prompts sueltos a produccion editorial predecible.",
  "Coordina contexto, borradores y aprobacion desde un mismo dashboard.",
  "Menos retrabajo por marca. Mas entregables por semana.",
  "Centraliza la operacion diaria de contenido para todos tus clientes.",
  "La forma seria de producir contenido multi-marca.",
  "Controla la voz de cada cliente mientras aceleras produccion.",
  "Convierte procesos dispersos en un flujo operativo unico.",
  "Produccion de contenido para agencias sin perder control editorial.",
  "Una base operativa para crecer sin rehacer prompts cada dia.",
  "Gestiona mas cuentas sin romper tu calidad de entrega.",
  "Del caos entre Drive, Notion y chats a un flujo claro.",
  "Infraestructura de contenido para agencias que operan de verdad.",
];

export const heroSubtitles = [
  "Guarda contexto por cliente, reutiliza plantillas y revisa cada pieza antes de publicar.",
  "Zetavoice organiza el trabajo multi-cliente para que tu equipo produzca mas con consistencia.",
  "Cada marca con su contexto, cada pieza con su flujo de revision y aprobacion.",
  "Centraliza fuentes, lineamientos y borradores en una sola operacion editorial.",
  "No es otro generador de posts: es un sistema para producir con control.",
  "Alinea velocidad y calidad con un flujo unico para todo tu equipo.",
  "Evita repetir prompts y reduce iteraciones con estructura operativa por cliente.",
  "Desde onboarding de marca hasta cola de aprobacion en un solo lugar.",
  "Haz que la produccion dependa menos de memoria y mas de sistema.",
  "Escala cuentas activas sin multiplicar friccion interna.",
];

export const primaryCtas = [
  "Solicitar demo",
  "Ver demo guiada",
  "Reservar una llamada",
  "Quiero ver el flujo completo",
  "Evaluar Zetavoice con mi equipo",
  "Empezar diagnostico operativo",
];

export const secondaryCtas = [
  "Ver como funciona",
  "Comparar con ChatGPT + Notion + Drive",
  "Explorar casos de uso",
  "Revisar FAQ",
  "Ver ejemplo de flujo multi-cliente",
  "Descargar checklist operativo",
];

export const heroVariants: HeroVariant[] = [
  {
    title: "La operacion de contenido multi-cliente de tu agencia, por fin en orden.",
    subtitle:
      "Centraliza contexto de marca, genera borradores alineados y revisa en una cola unica antes de publicar.",
    primaryCta: "Solicitar demo",
    secondaryCta: "Ver como funciona",
    visual: "/landing/client-hub.png",
  },
  {
    title: "Produce mas para cada cliente sin sacrificar voz de marca.",
    subtitle:
      "Configura onboarding por marca, aplica plantillas reutilizables y controla revision editorial de punta a punta.",
    primaryCta: "Ver demo guiada",
    secondaryCta: "Comparar alternativas",
    visual: "/landing/generacion-parametros.png",
  },
  {
    title: "De herramientas sueltas a un flujo de contenido realmente operable.",
    subtitle:
      "Conecta fuentes, reglas y aprobacion en un unico sistema pensado para equipos de agencia.",
    primaryCta: "Reservar llamada",
    secondaryCta: "Explorar casos de uso",
    visual: "/landing/mapa-producto.png",
  },
];

export const howItWorks = [
  {
    step: "1",
    title: "Onboarding por cliente",
    body: "Sube notas, PDFs, referencias y lineamientos para que cada marca tenga contexto aislado.",
    image: "/landing/onboarding-fuentes.png",
  },
  {
    step: "2",
    title: "Plantillas por objetivo",
    body: "Estandariza formatos reutilizables para educacion, autoridad, promocion y mas.",
    image: "/landing/plantillas.png",
  },
  {
    step: "3",
    title: "Generacion parametrizada",
    body: "Ajusta tono, red, longitud, formato y creatividad para cada pieza sin rehacer prompts.",
    image: "/landing/generacion-parametros.png",
  },
  {
    step: "4",
    title: "Revision y aprobacion",
    body: "Pasa los borradores por una cola clara de pendientes, revisados y publicados.",
    image: "/landing/cola-aprobacion.png",
  },
];

export const useCases = [
  {
    title: "Agencia de social media multi-cuenta",
    pain: "Muchos calendarios, multiples tonos y deadlines simultaneos.",
    outcome: "Centraliza contexto por cuenta y acelera entrega semanal sin mezclar marcas.",
  },
  {
    title: "Agencia de contenidos",
    pain: "Briefings dispersos y retrabajo por falta de estructura editorial.",
    outcome: "Convierte lineamientos en plantillas y crea un flujo repetible por cliente.",
  },
  {
    title: "Agencia de copywriting",
    pain: "Cada pieza depende demasiado de memoria y talento individual.",
    outcome: "Estandariza calidad con contexto vivo, revision y versionado editorial.",
  },
  {
    title: "Estudio creativo",
    pain: "Cambios de direccion frecuentes y aprobaciones desordenadas.",
    outcome: "Mantiene trazabilidad de decisiones y reduce friccion entre estrategia y ejecucion.",
  },
  {
    title: "Freelance con cartera recurrente",
    pain: "Crecimiento bloqueado por administracion manual del contexto.",
    outcome: "Escala volumen mensual con una base operativa que sostiene consistencia.",
  },
];

export const faqItems = [
  {
    q: "No puedo hacer esto con ChatGPT y ya?",
    a: "Con ChatGPT generas piezas sueltas. Zetavoice organiza contexto por cliente, plantillas, flujo editorial y aprobacion en un sistema unico.",
  },
  {
    q: "Que pasa con la voz de marca de cada cliente?",
    a: "Cada cliente tiene onboarding y contexto aislado para evitar mezcla de tono, mensajes y posicionamiento.",
  },
  {
    q: "Sirve si llevo pocos clientes?",
    a: "Si, sobre todo para construir proceso desde temprano y evitar caos cuando aumente tu cartera.",
  },
  {
    q: "Hace falta entrenar un modelo?",
    a: "No. Configuras contexto y lineamientos operativos; no necesitas entrenar infraestructura propia.",
  },
  {
    q: "Sustituye al copywriter o estratega?",
    a: "No. Acelera produccion y ordena la operacion, pero la decision editorial sigue en tu equipo.",
  },
  {
    q: "Como se revisa el contenido?",
    a: "La cola de aprobacion organiza piezas por estado para revisar, ajustar y aprobar antes de publicar.",
  },
  {
    q: "Puedo usar mis propias plantillas?",
    a: "Si. Puedes crear y reutilizar plantillas segun objetivos, canales y estilo de cada cliente.",
  },
  {
    q: "Que tipo de agencias aprovechan mas la plataforma?",
    a: "Agencias de marketing, social media, contenido, copy y estudios creativos con varias cuentas activas.",
  },
  {
    q: "Que pasa si un cliente cambia su enfoque de marca?",
    a: "Actualizas el contexto del cliente y el equipo mantiene consistencia en nuevas piezas desde ese cambio.",
  },
  {
    q: "Como evita el retrabajo interno?",
    a: "Porque concentra contexto, reglas y flujo de revision en un mismo lugar, reduciendo idas y vueltas.",
  },
  {
    q: "Puedo usarlo con mi stack actual?",
    a: "Si. Zetavoice funciona como capa operativa para centralizar la produccion, aunque uses otras herramientas.",
  },
  {
    q: "Cuanto tarda en verse impacto?",
    a: "Normalmente en las primeras semanas ya se nota menos friccion, menos repeticion y mayor consistencia.",
  },
];

export const microcopy = {
  placeholder: "Tu email de trabajo",
  demoButton: "Solicitar demo personalizada",
  waitlist: "Te avisamos cuando abramos nuevos espacios de onboarding.",
  trialMessages: [
    "Empieza con un cliente piloto y valida el flujo en menos de una semana.",
    "Prueba el proceso completo antes de decidir despliegue total.",
    "Sin compromiso inicial, con acompanamiento de implementacion.",
  ],
  secondaryButtons: ["Ver mapa del producto", "Hablar con ventas", "Ver comparativa completa"],
  trustLine: "Sin promesas infladas: demo enfocada en tu operacion real y tus cuentas activas.",
};
