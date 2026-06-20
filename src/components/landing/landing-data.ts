export type SectionMeta = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export const hero = {
  preheader: "El motor de contenido definitivo para LinkedIn",
  title:
    "Tu silencio en LinkedIn te está costando clientes cada día",
  subtitle:
    "El 90% de los compradores te investigan antes de comprar: tus cuentas están matando la confianza de tus clientes y cerrándote de nuevas oportunidades",
  cta: "Obtén 3 posts gratuitos para tu cuenta",
  ctaSubtext:
    "Vemos tu caso en 20 min y te llevas contenido real, sin compromiso",
  imageSrc: "/landing/antes-despues-voice.png",
  imageAlt: "Vista principal del hub de clientes de Zeta Voice",
};

export const realitySection: SectionMeta = {
  eyebrow: "El coste del silencio",
  title: "Cada día en silencio te está costando ventas",
  subtitle: "",
};

export type RealityStatAccent = "cyan" | "amber" | "emerald";

export type RealityStat = {
  icon: string;
  title: string;
  body: string;
  accent: RealityStatAccent;
  metric?: string;
  metricLabel?: string;
  metricTone?: "default" | "negative";
  metricSecondary?: string;
  metricSecondaryLabel?: string;
};

export const realityStats: RealityStat[] = [
  {
    icon: "🤫",
    title: "El comprador silencioso",
    metric: "90%",
    metricLabel: "te investigan antes de comprar",
    body: "El 90% de los decisores de compras te leen en la sombra sin dar like. Si tus cuentas están vacías, la venta se cae por desconfianza",
    accent: "cyan",
  },
  {
    icon: "📉",
    title: "El fin de la puerta fría",
    metric: "1,7%",
    metricLabel: "con outreach sin contenido",
    metricSecondary: "14,6%",
    metricSecondaryLabel: "con contenido y social selling",
    body: "Multiplicas por más de 8 tu tasa de éxito comercial cuando educas al cliente antes de intentar venderle",
    accent: "amber",
  },
  {
    icon: "🌊",
    title: "La oportunidad del 1,3%",
    metric: "98,7%",
    metricLabel: "no publican en español en LinkedIn",
    metricTone: "negative",
    body: "Nadie (1.3%) está en social selling: quien publica con consistencia hoy en día se queda con la demanda de su sector",
    accent: "emerald",
  },
];

export const painSection: SectionMeta = {
  eyebrow: "Diagnóstico",
  title: "Te falta un sistema para publicar con continuidad",
  subtitle:
    "Cuando el contexto vive en documentos sueltos y la subida es manual, ni el contenido ni los resultados escalan",
};

export type PainSymptom = {
  icon: string;
  title: string;
  body: string;
};

export const painSymptoms: PainSymptom[] = [
  {
    icon: "📉",
    title: "Publicación irregular",
    body: "Las cuentas de LinkedIn (del founder y la empresa) publican a trompicones o se detienen por semanas",
  },
  {
    icon: "⏳",
    title: "Cuello de botella directivo",
    body: "El contenido depende de la agenda saturada del equipo directivo: si no hay tiempo, no hay post",
  },
  {
    icon: "🎭",
    title: "Tono inconsistente",
    body: "El mensaje cambia según quién escriba. No hay una coherencia ni estabilidad en la voz de marca, por lo que no hay engagement",
  },
  {
    icon: "🧩",
    title: "Contexto disperso",
    body: "El conocimiento del negocio vive entre reuniones, notas y mensajes — no en un sistema que escale",
  },
];

export const beforeAfterSection: SectionMeta = {
  eyebrow: "Before / After",
  title: "Basta de copywriters y marketers que no suenan a ti",
  subtitle:
    "El cambio real llega cuando pasas de piezas sueltas a un sistema proactivo que aprende en cada iteración",
};

export type BeforeAfterItem = {
  lead: string;
  body: string;
};

export type BeforeAfterCard = {
  badge: string;
  icon: string;
  title: string;
  items: BeforeAfterItem[];
};

export const beforeAfter: { manual: BeforeAfterCard; zeta: BeforeAfterCard } = {
  manual: {
    badge: "Antes",
    icon: "❌",
    title: "El Modelo de las Agencias y Copywriters",
    items: [
      {
        lead: "Te persiguen cada semana",
        body: "Te exigen reuniones, briefs interminables y que les expliques tu negocio una y otra vez desde cero porque no entienden tu sector",
      },
      {
        lead: "El cuello de botella sigues siendo tú",
        body: "Tienes que revisar y corregir cada texto porque la calidad depende de redactores aislados que cambian constantemente",
      },
      {
        lead: "Precios inflados y cero especialización",
        body: "Pagas precio de experto a agencias que subcontratan a redactores genéricos. El mismo que escribe hoy sobre tu estrategia B2B, mañana hace edición de TikToks de gatitos",
      },
    ],
  },
  zeta: {
    badge: "Después",
    icon: "✓",
    title: "Modelo Zeta Voice",
    items: [
      {
        lead: "Brand Brain",
        body: "El contexto del negocio vive centralizado en tu Brand Brain (Cerebro de Marca)",
      },
      {
        lead: "La producción es proactiva",
        body: "Zeta Voice detecta tendencias y te genera los posts desde cero",
      },
      {
        lead: "Cada iteración suma",
        body: "Cada iteración mejora la operación y fortalece la autoridad del Founder y la Empresa",
      },
    ],
  },
};

export const appMockupSection: SectionMeta = {
  eyebrow: "Zeta App",
  title: "Olvídate del estrés. Zeta Voice entiende y crea por ti",
  subtitle:
    "Zeta Voice investiga, redacta y diseña. Te llega a la app, apruebas y tu autoridad crece mientras estás en reuniones",
};

export const appMockupScreenshotSrc = "/landing/captura-movil.png";

export const resultsSection: SectionMeta = {
  eyebrow: "Resultados reales",
  title: "Lo que consigues cada semana cuando empiezas con Zeta Voice",
  subtitle: "Autoridad, pipeline y operación alineados — sin depender de tu agenda para cada post",
};

export type ResultOutcomeAccent = "cyan" | "emerald" | "amber" | "violet";

export type ResultOutcome = {
  icon: string;
  title: string;
  body: string;
  accent: ResultOutcomeAccent;
  pillar: string;
};

export const resultsOutcomes: ResultOutcome[] = [
  {
    icon: "⚡",
    pillar: "Operación",
    title: "Publicación semanal sin fricción",
    body: "Piezas listas para aprobar cada semana. Tú no redactas desde cero ni persigues briefs",
    accent: "cyan",
  },
  {
    icon: "🎯",
    pillar: "Autoridad",
    title: "Referente en tu sector",
    body: "La consistencia en LinkedIn hace que decisores te reconozcan antes de la primera reunión",
    accent: "emerald",
  },
  {
    icon: "📥",
    pillar: "Pipeline",
    title: "Leads con contexto",
    body: "Entradas desde LinkedIn que ya te conocen por tu contenido y llegan a conversación comercial",
    accent: "amber",
  },
  {
    icon: "🧠",
    pillar: "Activo",
    title: "Conocimiento que vende",
    body: "El contexto interno del negocio se convierte en piezas que refuerzan confianza y cierre",
    accent: "violet",
  },
];

export const comparisonSection: SectionMeta = {
  eyebrow: "Comparativa",
  title: "Por qué no es lo mismo que ChatGPT + Notion + Drive + un copywriter suelto",
  subtitle:
    "Las herramientas fragmentadas producen piezas; Zeta Voice opera un sistema para Founder y Empresa",
};

export const comparisonRows = [
  {
    criterion: "Contexto de negocio",
    alternatives: "Disperso entre docs, chats y memoria",
    zetaVoice: "Centralizado y vivo en un Brand Brain único",
  },
  {
    criterion: "Generación de ideas",
    alternatives: "Depende de que a ti se te ocurra algo",
    zetaVoice: "Proactiva (buscamos trends y creamos desde cero)",
  },
  {
    criterion: "Flujo de aprobación",
    alternatives: "Cadenas de emails, WhatsApp o reuniones",
    zetaVoice: "Un clic desde la Zeta App: Revisado → Publicado",
  },
  {
    criterion: "IA aplicada",
    alternatives: "Prompts manuales genéricos y robóticos",
    zetaVoice: "IA entrenada con tu tono, casos de éxito y datos propios",
  },
];

export const foundersSection: SectionMeta = {
  eyebrow: "Del fundador",
  title: "",
  subtitle: "",
};

export type FounderProfile = {
  name: string;
  imageSrc: string;
  imageAlt: string;
  linkedIn: string;
  signature: string;
};

export type ScenePhoto = {
  src: string;
  alt: string;
  label: string;
  aspect: "horizontal" | "vertical";
  colSpan?: number;
};

export const founders = {
  noteTitle: "Por qué construí esto",
  noteParagraphs: [
    "Mi caso es tan peculiar, como, en el fondo, común: Me encantaba crear contenido en redes, pero cuando el día a día de la empresa me absorbió, tuve que dejarlo por falta de tiempo. Y obviamente, me dio mucha rabia. Pero eso me hizo, con el tiempo, decidir unir mis tres pasiones —la tecnología, las redes y el bussiness— para crear Zeta Voice. Porque nadie debería tener que elegir entre hacer crecer su proyecto o tener presencia donde se mueven sus clientes.",
    "Construí esto para que LinkedIn deje de ser un desierto o un desgaste sin calidad y pase a ser un canal de comunicación bajo tu control que te traiga oportunidades reales. Con IA aplicada a potenciar tu marca. Si tu perfil está en silencio, estás perdiendo seguidores y clientes ahora mismo. Si no, estás perdiendo tiempo y calidad en tus posts. Esa es la realidad.",
  ],
  founder: {
    name: "David",
    imageSrc: "/landing/grabando-corporativo-vertical.png",
    imageAlt: "David Martín, fundador de Zeta Makers, grabando contenido",
    linkedIn: "https://www.linkedin.com/in/david-mart%C3%ADn-encuentra",
    signature: "David Martín",
  } satisfies FounderProfile,
  scenePhotos: [
    {
      src: "/landing/grabando-horizontal.png",
      alt: "David grabando contenido de vídeo",
      label: "Grabando",
      aspect: "horizontal",
      colSpan: 2,
    },
    {
      src: "/landing/grabando-corporativo-vertical.png",
      alt: "David grabando contenido corporativo vertical",
      label: "Grabando",
      aspect: "vertical",
    },
    {
      src: "/landing/perfil-tiktok.PNG",
      alt: "Perfil de TikTok de David, creador de contenido",
      label: "TikTok Fútbol",
      aspect: "vertical",
    },
    {
      src: "/landing/programando-norrsken.jpg",
      alt: "David en un espacio de trabajo Norrsken",
      label: "Tech",
      aspect: "vertical",
    },
    {
      src: "/landing/programando-terraza.jpg",
      alt: "David programando al aire libre en una terraza",
      label: "Visión",
      aspect: "vertical",
    },
{
      src: "/landing/programando-cafeteria.jpg",
      alt: "David trabajando en una cafetería",
      label: "Pasión",
      aspect: "vertical",
    },
  ] satisfies ScenePhoto[],
};

export const faqSection: SectionMeta = {
  eyebrow: "FAQ",
  title: "Preguntas reales antes de empezar",
  subtitle: "Respuestas claras para evaluar encaje sin promesas infladas",
};

export const faqItems = [
  // --- PREGUNTAS DE TU RAMA DEV (EVOLUCIONADAS) ---
  {
    q: "¿Puedo contratarlo solo para el Founder, solo para Empresa, o ambos?",
    a: "Sí, nuestros planes se adaptan por completo a tu estrategia",
  },
  {
    q: "¿Tengo que pensar yo los temas o escribir borradores?",
    a: "No. El sistema de Zeta Voice es proactivo. Buscamos tendencias en vivo de tu sector y redactamos desde cero. Tú solo apruebas. Pero si algún día tienes una idea concreta, también la puedes subir a la app en dos líneas y la desarrollamos",
  },
  {
    q: "¿No puedo hacer esto con ChatGPT y ya?",
    a: "Con ChatGPT sacas textos sueltos y robóticos. Zeta Voice te entrega una operación basada en el contexto de tu negocio para publicar con consistencia real y convertir visibilidad en leads",
  },
  {
    q: "¿Qué pasa con la voz de mi empresa o mi tono personal?",
    a: 'Lo definimos en el onboarding y creamos el "Brand Brain" (Cerebro de Marca) para mantenerlo estable, logrando que ganes autoridad y reconocimiento en tu sector',
  },
  {
    q: "¿Sustituye a mi equipo de marketing?",
    a: "No. Potencia al equipo y reduce fricción para que publiquen mejor y con más impacto comercial, manteniendo siempre el control y la revisión humana",
  },
  {
    q: "¿Cuánto tiempo requiere del Founder o del equipo?",
    a: "Al inicio, se necesita completar el onboarding desde Zeta App que requiere de cierta introspección para extraer el contexto, la visión y la información estratégica de tu empresa. A partir de ese momento, el sistema funciona de forma 100% automática para ti. El contenido se genera de manera proactiva y solo si tú quieres, puedes dedicarle menos de 10 minutos a la semana a una pre-validación opcional desde tu móvil",
  },

  // --- PREGUNTAS DE LA VERSIÓN ANTERIOR (INTEGRADAS Y LIMPIAS) ---
  {
    q: "¿Qué recibo exactamente al contratar?",
    a: "Contenido proactivo semanal para LinkedIn (posts, copys, imágenes y carruseles según tu plan), una voz de marca clara en tu Brandbook y un flujo de trabajo optimizado en la Zeta App que impulsa autoridad, leads e ingresos",
  },
  {
    q: "¿Cómo se revisa y aprueba el contenido?",
    a: "Cero cadenas de WhatsApp o correos interminables. Cada publicación es investigada por el sistema y revisada primero por un copywriter interno de Zeta Voice para asegurar la máxima calidad. Después, el contenido te llega directamente a la Zeta App para una pre-validación opcional por tu parte: lo lees en un minuto, das un clic a 'Aprobar' y listo",
  },
  {
    q: "¿Hace falta entrenar un modelo propio de IA?",
    a: "No necesitas configuraciones técnicas complejas. La capa de IA de Zeta Voice se alimenta del contexto que extraemos de tu negocio en el onboarding y evoluciona de forma automática con tus iteraciones",
  },
  {
    q: "¿Para qué tipo de empresa encaja mejor?",
    a: "Para empresas B2B, consultoras, agencias, startups y SaaS que quieren convertir LinkedIn en un canal serio de autoridad, captando leads cualificados y oportunidades de venta reales de forma predecible",
  },
  {
    q: "¿Qué pasa si cambiamos el foco de negocio o la narrativa?",
    a: "El contexto central se actualiza en tu Brand Brain y, de forma inmediata, las siguientes propuestas de contenido se generan alineadas con la nueva dirección estratégica del negocio",
  },
  {
    q: "¿Cómo evita este sistema el retrabajo y la improvisación?",
    a: "Al centralizar el contexto, la estrategia de contenido y las revisiones en un flujo único dentro de la app, el sistema retiene la memoria de tu negocio y evita tener que empezar desde cero cada semana",
  },
  {
    q: "¿Cuánto tarda en verse el impacto?",
    a: "La consistencia es inmediata. En las primeras semanas notarás un aumento drástico en tu autoridad percibida en el sector y en la entrada de conversaciones comerciales de calidad con clientes que te investigaban en la sombra",
  },
];

export const finalCta = {
  title: "Deja de cederle las reuniones a tu competencia",
  body: "El 1,3% de tu sector ya está aprovechando LinkedIn. Vamos a poner a tu Founder y a tu Empresa a liderar la conversación",
  cta: "Agenda tu demo y llévate 3 posts gratis hoy",
};

export const demoModal = {
  title: "Reserva 20 minutos y recibe 3 posts de muestra",
  description:
    "Elige la fecha en el calendario. Te mostramos contenido real para tu LinkedIn, sin compromiso",
};

export const microcopy = {
  placeholder: "tu@empresa.com",
  demoButton: "Solicita 3 posts gratuitos para tu cuenta",
  trustLine: "Vemos tu caso en 20 min y te llevas contenido real, sin compromiso",
};
