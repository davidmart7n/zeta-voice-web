export type SectionMeta = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export const hero = {
  preheader: "¿Cuánto en serio te tomas tu carrera?",
  title: "Estamos a Junio. De 2026. Y la vocecita sigue en tu cabeza.",
  subtitle:
    "\"Me prometí que empezaría a publicar este año.\"  Mientras, ese tío mediocre, sigue publicando y llevándose el mercado.",
  cta: "Quiero ver cómo suena esto",
  ctaSubtext: "Si sigues scrolleando, aviso que no te va a agradar...",
  imageSrc: "/landing/antes-despues-voice.png",
  imageAlt: "Vista principal del hub de clientes de Zeta Voice",
};

export type RealityTruth = {
  step: string;
  hook: string;
  body: string;
};

export const realitySection: SectionMeta = {
  eyebrow: "3 datos incómodos para tu cartera",
  title: "Lo que está pasando en tu LinkedIn hoy.",
  subtitle: "",
};

export const realityTruths: RealityTruth[] = [
  {
    step: "01",
    hook: "Te investigan siempre.",
    body: "8 de cada 10 decisores van a ver tu perfil después de una llamada o un mensaje. Al ver un desierto inactivo, pierdes el contrato.",
  },
  {
    step: "02",
    hook: "Estás multiplicando por 8 tu esfuerzo.",
    body: "Si el cliente no te ha leído antes en su feed, la tasa de respuesta se reduce más de 8 veces. Sí, ocho. Estás quemando leads y el tiempo invertido.",
  },
  {
    step: "03",
    hook: "El 98,7% de tu sector es vago.",
    body: "Es la cantidad exacta de gente en tu industria que no publica con constancia. El mercado, la autoridad y las ventas están ahí, esperando a quien abra la boca primero.",
  },
];

export const painSection: SectionMeta = {
  eyebrow: "Lo que vives cada lunes",
  title: "Sabes que deberías publicar. Y no haces nada.",
  subtitle: "No eres el único. ¿Cuál te suena de estas?",
};

export type PainSymptom = {
  icon: string;
  title: string;
  body: string;
};

export const painSymptoms: PainSymptom[] = [
  {
    icon: "🤐",
    title: "«Mañana lo publico, hoy no tengo tiempo»",
    body: "Llevas semanas diciéndolo. No es pereza: es que regalarle una hora a LinkedIn cada día es un lujo que tu agenda no tiene.",
  },
  {
    icon: "🧠",
    title: "«Lo que cierra ventas lo digo con la boca»",
    body: "El argumento letal que te compra un cliente lo dices tú en una reunión. En LinkedIn, ni rastro. Tu mejor contenido está atrapado en tu cabeza.",
  },
  {
    icon: "🎭",
    title: "«Este post no suena a mí (parece de robot) »",
    body: "Lo escribes tú, ChatGPT, o un copywriter que no conoce tu sector. El resultado es el mismo: no hay tono propio ni autenticidad. Y eso ni vende ni engancha.",
  },
  {
    icon: "⏳",
    title: "«El bobo sigue posteando»",
    body: "Tú, otra semana sin publicar. Y el tío con menos experiencia ya publicó tres veces. No porque sea mejor — porque sabe la importancia de estar presente.",
  },
];

export const enemyComparisonSection: SectionMeta = {
  eyebrow: "Lo que ya has probado",
  title: "Los parches \"lógicos\" ",
  subtitle: "",
};

export type EnemyContrast = {
  label: string;
  now: string;
  zeta: string;
};

export const enemyComparison = {
  intro: [
    "Una de dos:",
    "La agencia y el copywriter de miles de euros.",
    "Te hicieron aguantar tres reuniones semanales que podían ser un maldito email. Y para posts mediocres que no sonaban a ti.",
    "✨ChatGPT✨. Publicaste dos veces, gastando 2 horas por post. Tampoco tuvieron impacto. Obviamente lo dejaste.",
    "La mediocridad devuelve mediocridad.",
  ],
  bridge:
      "Zeta Voice no es un parche. Y te explico por qué.",

    //"Zeta Voice no es un parche. Extrae cómo piensas en una sola conversación (cero reuniones eternas) y opera el ecosistema completo por ti.",
  contrasts: [
    {
      label: "Las ideas",
      now: "Ahora dependes de tu inspiración o de las alucinaciones de ChatGPT.",
      zeta: "Nosotros buscamos las tendencias de tu sector y escribimos desde cero.",
    },
    {
      label: "Tu voz",
      now: "Ahora cambia según quién demonios te escriba esta semana.",
      zeta: "Nosotros la extraemos una sola vez. El sistema aprende de ti y la clava en cada post.",
    },
    {
      label: "El contexto",
      now: "Ahora lo tienes tirado entre audios de WhatsApp, Notion y lo que recuerdes.",
      zeta: "Con nosotros, vive en un sistema centralizado.",
    },
    {
      label: "El tiempo (lo más importante)",
      now: "Ahora sufres cadenas de emails y mensajes de «¿puedes revisar esto, porfa?».",
      zeta: "Con nosotros te llega un aviso al móvil. Lees, apruebas con un toque, publicado. Tu voz y tu cabeza, sin tu tiempo.",
    },
  ] satisfies EnemyContrast[],
};

export const resultsSection: SectionMeta = {
  eyebrow: "Empieza la magia",
  title: "Dejas de ser invisible. Y tu competencia lo nota.",
  subtitle: "",
};

export type ResultOutcomeAccent = "cyan" | "emerald" | "amber";

export type ResultOutcome = {
  icon: string;
  title: string;
  body: string;
  accent: ResultOutcomeAccent;
};

export const resultsOutcomes: ResultOutcome[] = [
  {
    icon: "📝",
    title: "1 a 5 posts por semana sin perder un segundo",
    body: "Aparecen listos en tu móvil. Apruebas y sigues con tu día. No abres un documento en blanco nunca más.",
    accent: "cyan",
  },
  {
    icon: "💬",
    title: "Tus clientes te leen y responden",
    body: "Llevan semanas leyéndote en silencio. Cuando se deciden a escribirte, ya confían. No es puerta fría: es puerta abierta.",
    accent: "emerald",
  },
  {
    icon: "🛑",
    title: "Dejas de corregir textos cada semana",
    body: "Lo que se publica suena a ti. No a una plantilla, no a un becario, no a ChatGPT sin filtro. Te leen y piensan: «lo ha escrito Pepito».",
    accent: "amber",
  },
];

export const foundersSection: SectionMeta = {
  eyebrow: "Por qué existe esto",
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
  noteTitle: "Yo también dejé de publicar",
  noteParagraphs: [
    "Me encantaban las redes sociales. Compartir con el mundo. Instagram, Youtube y TikTok personal con más de 2 millones de visitas. Pero el trabajo y mis nuevas prioridades me hicieron abandonar.",
    "Probé editores. Probé usar la IA. Nada me convenció. Así que construí lo que yo necesitaba: algo que compartiese como yo, sin robarme el día.",
    "Y, honestamente, como actual creador, déjame decirte que, si estás en silencio, estás perdiendo relevancia y clientes a diario. Yo ya pasé por eso. Si quieres ver cómo lo resolvimos, deja tu correo abajo.",
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

export const notForSection: SectionMeta = {
  eyebrow: "Antes de seguir, una aclaración",
  title: "Esto no es para todo el mundo",
  subtitle: "",
};

export type NotForItem = {
  icon: string;
  text: string;
};

export const notFor: {
  notThem: NotForItem[];
  yesThem: NotForItem[];
} = {
  notThem: [
    {
      icon: "🚫",
      text: "Acabas de empezar y no tienes presupuesto. El servicio no es para ti, la newsletter quizás.",
    },
    {
      icon: "🚫",
      text: "No quieres crecer. No te gusta vender ni que te vendan. Ni el servicio, ni la newsletter son para ti.",
    },
  ],
  yesThem: [
    {
      icon: "✓",
      text: "Sabes que tu empresa es buena, pero en LinkedIn nadie se entera.",
    },
    {
      icon: "✓",
      text: "Quieres que te conozcan y vender más, sin pasarte horas delante del teclado cada semana.",
    },
  ],
};

export const faqSection: SectionMeta = {
  eyebrow: "\"MMM tengo alguna duda\"",
  title: "Dudas posibles y respuestas sinceras.",
  subtitle: "Tranquil@. Siempre tratamos de ser transparentes.",
};

export const faqItems = [
  {
    q: "¿De verdad hace falta todo un \"sistema\" para unos posts en LinkedIn?",
    a: "Absolutamente NO. Puedes hacerlo tú mismo con IA. Por cada publicación buscas la idea, haces el copy, haces el diseño gráfico/creación de imagen y revisión del copy. Revisión del tono. Revisión de la imagen. Prompt para añadir emojis. Otro para añadir el logo. Otro para quitarlo. Otro para quitar los emojis. Otro para nuevas ideas, que esa no era buena. Bueno y seguir hasta tener la publicación. ✅",
  },
  {
    q: "¿Cuánto tiempo me quita al principio?",
    a: "Al inicio completas un onboarding para que aprendamos quién eres, qué haces, qué has hecho y cómo piensas. Es introspección, no burocracia. A partir de ahí el sistema va solo: menos de 10 minutos a la semana si quieres pre-validar desde el móvil.",
  },
  {
    q: "¿Para qué tipo de perfiles de empresa encaja mejor?",
    a: "Cualquiera que se tome enserio su carrera, debería crear contenido en LinkedIn. Pero, si quieres que hable de los que más dinero les cuesta su silencio, son directivos, autoempleados o fundadores en los siguientes sectores: Empresas B2B, consultoras, agencias, startups y SaaS que quieren convertir LinkedIn en un canal serio de autoridad, captando leads cualificados de forma predecible.",
  },
  {
    q: "¿Cuánto tarda en verse el impacto?",
    a: "La consistencia es inmediata. En las primeras semanas notarás más autoridad percibida en tu sector y entrada de conversaciones comerciales con clientes que te investigaban en la sombra.",
  },
  {
    q: "¿Qué mandáis en el newsletter?",
    a: "Ideas incómodas sobre tecnología, negocio y, sobre todo, cómo dominar el mercado publicando contenido premium a lo bestia sin mover un dedo.",
  },
];

export const emailCta = {
  title: "Te cuento los secretos de nuestros procesos.",
  paragraphs: [
    "Corto, y directo al valor.",
   "Claves que hacen que nuestros clientes estén en la mente de su audiencia todos los días sin escribir una sola línea",
    "Si entras, te educaré sobre el futuro del contenido y te venderé mis servicios. Si no te gusta, te das de baja con un click. No dejamos traumas psicológicos a nadie.",
    "Pon tu correo si quieres recibir el primero hoy."
  ],
  button: "Recibir el primer correo hoy",
};

export const microcopy = {
  placeholder: "tu@empresa.com",
  trustLine: "Sin compromiso. Entras y sales.",
};

export const bridgeTexts = {
  afterHero:
    "No es una opinión. Son datos (y el primero te va a molestar).",
  afterReality:
    "Saberlo no cambia nada. Nada de lo que sientes cada semana.",
  afterPain:
    "Pensaste que con un poco de ayuda, lo solucionarías... ",
  afterEnemyComparison:
    "¿Y qué pasa cuando empiezas con un buen sistema?",
  afterResults:
    "Esto no lo diseñó una IA o una consultora. Lo construyó uno que estaba tan harto como tú.",
};