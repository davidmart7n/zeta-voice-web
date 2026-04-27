export type HeroVariant = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  visual: string;
};

export const positioning = {
  central:
    "Ecosistema de crecimiento para founders y CEOs que centraliza el contexto de su empresa, sistematiza contenido y activa una capa de IA propia con acompanamiento estrategico.",
  alternatives: [
    "Infraestructura operativa para convertir conocimiento interno en autoridad visible y oportunidades comerciales.",
    "Sistema para que la cuenta de empresa publique con consistencia sin depender del tiempo del founder.",
    "Operacion de contenido, IA aplicada y acompanamiento continuo dentro de un unico ecosistema.",
  ],
  whatItIs:
    "Zetavoice organiza el flujo contexto -> borrador -> revision -> publicacion para empresas B2B que quieren crecer con mas control, continuidad y criterio.",
  recommendation:
    "Priorizar founders y duenos de negocio: la propuesta de ecosistema (contenido + IA + consultoria + comunidad) tiene mayor valor percibido y una venta mas directa.",
};

export const heroHeadlines = [
  "Convierte el conocimiento de tu empresa en autoridad, leads y sistema.",
  "La cuenta de tu empresa puede publicar con continuidad sin improvisacion.",
  "No necesitas mas ideas: necesitas una infraestructura de contenido.",
  "Centraliza contexto, activa IA propia y opera con criterio cada semana.",
  "De contenido irregular a un canal de autoridad que si genera demanda.",
  "Haz que LinkedIn trabaje para tu empresa, no contra tu agenda.",
  "Menos caos operativo. Mas visibilidad y mas oportunidades comerciales.",
  "La forma seria de crecer con contenido cuando eres founder.",
  "Sistema, control y acompanamiento para liderar con IA en tu nicho.",
  "Tu empresa no necesita otro generador; necesita una operacion completa.",
  "Publica con voz de marca consistente sin depender de procesos manuales.",
  "Activa un ecosistema de crecimiento para tu empresa en semanas, no meses.",
  "Convierte documentos, notas y experiencia en un activo vivo de negocio.",
  "Contenido, IA y acompanamiento estrategico en un unico flujo.",
  "Company Content. Systematized.",
];

export const heroSubtitles = [
  "Unifica contexto de empresa, generacion de contenido y aprobacion en una operacion clara y repetible.",
  "Zetavoice combina plataforma, consultoria, masterclass y comunidad para que crezcas con criterio.",
  "Tu empresa publica con voz coherente mientras construyes una capa de IA con tus propios datos.",
  "No es un atajo de copy: es infraestructura para operar autoridad y demanda de forma constante.",
  "Organiza fuentes, narrativa, plantillas y revision en un flujo que no depende de la memoria del equipo.",
  "Pasa de esfuerzos sueltos a un sistema que aprende en cada iteracion y mejora con el tiempo.",
  "Convierte LinkedIn en un activo de negocio con control humano y apoyo estrategico continuo.",
  "Contenido, contexto y decisiones en el mismo lugar para founders que quieren escalar sin perder orden.",
  "Activa una operacion de crecimiento enfocada en resultados reales: visibilidad, leads y conversaciones.",
  "Construye ventaja competitiva en IA sin humo, con uso aplicado al dia a dia de tu empresa.",
];

export const primaryCtas = [
  "Agendar sesion estrategica",
  "Solicitar demo",
  "Reservar diagnostico de contenido",
  "Quiero entrar al ecosistema",
  "Quiero ver mi plan de implementacion",
  "Evaluar Zetavoice para mi empresa",
];

export const secondaryCtas = [
  "Ver como funciona",
  "Ver comparativa completa",
  "Explorar casos de founders",
  "Resolver preguntas frecuentes",
  "Ver el flujo real paso a paso",
  "Hablar con el equipo",
];

export const heroVariants: HeroVariant[] = [
  {
    title: "La infraestructura de crecimiento para founders que quieren autoridad visible.",
    subtitle:
      "Centraliza el contexto de tu empresa, genera contenido alineado y revisa antes de publicar desde un flujo unico.",
    primaryCta: "Agendar sesion estrategica",
    secondaryCta: "Ver como funciona",
    visual: "/landing/client-hub.png",
  },
  {
    title: "Activa tu IA propia y deja de depender de procesos manuales.",
    subtitle:
      "Sube fuentes de tu negocio, define tu narrativa y opera contenido con consistencia semanal y control humano.",
    primaryCta: "Solicitar demo",
    secondaryCta: "Comparar alternativas",
    visual: "/landing/generacion-parametros.png",
  },
  {
    title: "Contenido, consultoria y comunidad para crecer con ventaja en IA.",
    subtitle:
      "No solo publicas mejor: aprendes, decides y ejecutas con un ecosistema que evoluciona junto a tu empresa.",
    primaryCta: "Reservar diagnostico",
    secondaryCta: "Explorar casos de uso",
    visual: "/landing/mapa-producto.png",
  },
];

export const howItWorks = [
  {
    step: "1",
    title: "Onboarding de empresa",
    body: "Conocemos tu empresa, contexto y objetivos comerciales.",
  },
  {
    step: "2",
    title: "Estructura de voz y narrativa",
    body: "Definimos voz, narrativa y lineas de contenido para LinkedIn.",
  },
  {
    step: "3",
    title: "Produccion de contenido",
    body: "Generamos piezas listas para publicar con enfoque en autoridad y demanda.",
  },
  {
    step: "4",
    title: "Revision, aprobacion y publicacion",
    body: "Tu equipo revisa y aprueba antes de publicar cada pieza.",
  },
];

export const useCases = [
  {
    title: "Startup B2B en etapa de crecimiento",
    pain: "Tiene mucho conocimiento interno, pero publica de forma irregular y pierde traccion en LinkedIn.",
    outcome: "Convierte su expertise en una operacion de contenido constante que genera visibilidad y conversaciones.",
  },
  {
    title: "Firma de servicios profesionales",
    pain: "Depende demasiado del founder para comunicar autoridad y activar demanda.",
    outcome: "Crea un sistema que mantiene una voz corporativa solida sin bloquear la agenda directiva.",
  },
  {
    title: "Empresa SaaS o tecnologia",
    pain: "Tiene producto potente, pero su narrativa publica no refleja su valor real.",
    outcome: "Alinea producto, mensaje y contenido para posicionarse como referencia del nicho.",
  },
  {
    title: "Negocio tradicional que quiere liderar su categoria",
    pain: "No tiene estructura para publicar con continuidad y diferenciarse en digital.",
    outcome: "Activa una presencia de empresa profesional que transmite criterio, orden y liderazgo.",
  },
  {
    title: "Founder que quiere aplicar IA mas alla del contenido",
    pain: "Prueba herramientas sueltas y no logra convertirlas en una ventaja operativa real.",
    outcome: "Usa el ecosistema para producir, consultar, aprender y tomar mejores decisiones con IA aplicada.",
  },
];

export const faqItems = [
  {
    q: "No puedo hacer esto con ChatGPT y ya?",
    a: "Con ChatGPT puedes sacar textos sueltos. Zetavoice te entrega una operacion semanal para publicar con consistencia y convertir visibilidad en leads.",
  },
  {
    q: "Que pasa con la voz de mi empresa?",
    a: "La definimos desde el onboarding y la mantenemos estable para que tu marca gane autoridad y reconocimiento en tu sector.",
  },
  {
    q: "Esto sustituye a mi equipo de marketing?",
    a: "No. Potencia al equipo y reduce friccion para que publiquen mejor y con mas impacto comercial, manteniendo revision humana.",
  },
  {
    q: "Que recibo exactamente al contratar?",
    a: "Contenido semanal para LinkedIn, una voz de marca clara, soporte estrategico y un flujo de trabajo que impulsa autoridad, leads e ingresos.",
  },
  {
    q: "Cuanto tiempo requiere del founder?",
    a: "Al inicio necesitamos contexto y objetivos. Luego solo validas piezas clave mientras la operacion mantiene continuidad sin cargarte la agenda.",
  },
  {
    q: "Como se revisa y aprueba el contenido?",
    a: "Cada pieza pasa por revision antes de salir para asegurar calidad, mensaje y alineacion con objetivos comerciales.",
  },
  {
    q: "Hace falta entrenar un modelo propio?",
    a: "No necesitas entrenar desde cero. La capa de IA se alimenta del contexto que subes y evoluciona con tus iteraciones.",
  },
  {
    q: "Para que tipo de empresa encaja mejor?",
    a: "Para empresas B2B que quieren convertir LinkedIn en un canal serio de autoridad, leads cualificados y oportunidades de venta.",
  },
  {
    q: "Que pasa si cambiamos foco de negocio o narrativa?",
    a: "Se actualiza el contexto central y las siguientes piezas se generan alineadas con la nueva direccion.",
  },
  {
    q: "Como evita el retrabajo y la improvisacion?",
    a: "Centraliza contexto, estructura de contenido y revisiones en un flujo unico para que el aprendizaje no se pierda.",
  },
  {
    q: "Y el ecosistema Zeta Makers donde entra?",
    a: "Es un extra al contratar: accedes a consultoria, masterclass y comunidad de founders para acelerar decisiones de negocio.",
  },
  {
    q: "Cuanto tarda en verse impacto?",
    a: "En pocas semanas suele verse mas consistencia, mas autoridad percibida y un aumento de conversaciones comerciales de calidad.",
  },
];

export const microcopy = {
  placeholder: "tu@empresa.com",
  demoButton: "Agendar sesion estrategica",
  waitlist: "Te avisamos cuando abramos nuevos espacios para empresas que quieren crecer con LinkedIn.",
  trialMessages: [
    "Empieza con un diagnostico de contexto y objetivos para tu empresa.",
    "Valida el flujo completo de contenido y aprobacion con tu operativa real.",
    "Recibe acompanamiento para aplicar IA con criterio de negocio desde el inicio.",
  ],
  secondaryButtons: ["Ver como trabajamos", "Hablar con el equipo", "Ver comparativa completa"],
  trustLine: "Sin promesas vacias: nos enfocamos en resultados reales de autoridad, leads e ingresos.",
};
