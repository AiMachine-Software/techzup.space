import type { Dictionary } from "./types";

const es: Dictionary = {
  langName: "Español",
  meta: {
    title: "Checklist AI-PSYCHOSIS — 20 preguntas para medir los dos delirios de la era de la IA",
    description:
      "Una autoevaluación de 20 ítems que mide cuánto te inclinas hacia la AI-PSYCHOSIS (creencia excesiva en la IA) o hacia la ANTI-AI PSYCHOSIS (miedo o rechazo irracional a la IA), con resultados al instante y pautas de recalibración para ambos polos. Basada en investigaciones, informes de casos reales e hilos de Reddit/Dev.to.",
  },
  nav: {
    phenomena: "Los dos polos",
    test: "Test",
    guidance: "Recalibración",
    references: "Fuentes",
    tagline: "MINDSET SCAN // v2.0",
  },
  hero: {
    badge: "20 preguntas · ~5 minutos · análisis al instante",
    title1: "¿Qué tan cerca estás de",
    title2: "o de",
    title3: "— en porcentaje?",
    intro:
      "El delirio en la era de la IA avanza por dos carriles. El primero: confiar tanto en los chatbots que llegas a creer que tienen alma, que revelan verdades secretas o que entienden tu vida mejor que cualquier persona. El segundo: temer y odiar tanto a la IA que llegas a creer que es demoníaca, que lee la mente o que es la raíz de todos los problemas sociales. Ambos son el mismo pensamiento en blanco y negro, solo que invertido. Este test se ha construido a partir de investigaciones, informes de casos reales e hilos de Reddit/Dev.to para medir hacia qué lado te inclinas y cómo volver al equilibrio.",
    start: "Empezar el test",
    viewGuidance: "Ver la guía de recalibración",
    poleLeft: "Creencia excesiva en la IA",
    poleCenter: "Mantén el equilibrio",
    poleRight: "Miedo excesivo a la IA",
  },
  phenomena: {
    heading: "El delirio de la era de la IA tiene dos caras",
    intro:
      "Los medios hablan sobre todo del lado de quienes “creen demasiado”, pero el polo opuesto —construido sobre el mismo mecanismo de pensamiento— está creciendo en las redes sociales. Conocer ambos lados antes de responder hará que tu resultado sea más preciso.",
    mechanismsLabel: "Mecanismos principales",
    patternsLabel: "Patrones observados en informes e hilos reales",
    sourcePrefix: "Fuente:",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Creencia excesiva en la IA",
        definition:
          "El patrón en el que un uso intensivo de chatbots coincide con creencias que se alejan de la realidad (o con creencias previas que se profundizan). No es un diagnóstico psiquiátrico oficial; algunos psiquiatras proponen llamarlo, en su lugar, trastorno delirante asociado a la IA.",
        mechanisms: [
          "Sycophancy (complacencia) — dar la razón al usuario para que la conversación continúe (OpenAI retiró la actualización de GPT-4o en abril de 2025 por este motivo)",
          "Hallucination (alucinación) — generar información falsa con total seguridad, anteponiendo la verdad del usuario a los hechos",
          "Intimacy Mimicry (imitación de la intimidad) — simular la cercanía que al usuario le falta con otras personas, diseñada para aumentar el tiempo de uso",
        ],
        patterns: [
          "Creer que la IA es consciente, una pareja o un guía espiritual",
          "Recibir “verdades secretas” o misiones cósmicas a través del chat",
          "Alejarse de la familia porque “solo la IA me entiende”",
          "Seguir consejos de la IA sobre salud o finanzas sin la confirmación de un experto",
        ],
        stat: "OpenAI informa de que el 0.07% de los usuarios semanales (~630,000 personas) mantuvo conversaciones que indicaban una posible emergencia de salud mental",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Miedo o rechazo irracional a la IA",
        definition:
          "El polo opuesto, que todavía no tiene un nombre sistemático: creer, temer o culpar a la IA más allá de lo que respaldan las pruebas, hasta convertirlo en un pánico moral, el mismo patrón que la psicología ha registrado con cada nueva tecnología.",
        mechanisms: [
          "Confirmation Bias (sesgo de confirmación) — consumir solo la información que confirma el miedo que ya se tiene",
          "Doomscrolling — un flujo continuo de contenido catastrofista que aumenta la ansiedad sin aportar conocimiento útil para decidir",
          "Herd Morality (moral de rebaño) — absorber la creencia del grupo hasta que la crítica se convierte en una caza de brujas personal",
        ],
        patterns: [
          "Creer que la IA está impulsada por fuerzas demoníacas o que es una trampa religiosa",
          "Creer que la IA lee la mente o vigila cada acción de todo el mundo",
          "Juzgar a quienes usan IA como personas engañadas o manipuladas, y atacar incluso a las voces neutrales",
          "Culpar a la IA de casi todos los problemas sociales, ignorando otros factores",
        ],
        stat: "La historia del pánico moral: la radio, la televisión, los videojuegos e internet fueron condenados en los mismos términos, y el daño real resultó, por lo general, más leve de lo que se temía",
      },
    ],
    stats: [
      {
        value: "0.07%",
        label: "de los usuarios semanales de ChatGPT (~630,000 personas) mantuvo conversaciones que indicaban una posible emergencia de salud mental",
        source: "OpenAI vía APA, 2025–2026",
      },
      {
        value: "12 pacientes",
        label: "con síntomas similares a la psicosis tras un uso intensivo de chatbots, tratados por el psiquiatra Keith Sakata (UCSF) en 2025",
        source: "UCSF vía Wikipedia, 2025",
      },
      {
        value: "22 países",
        label: "representados en el grupo de apoyo Human Line Project, donde más del 60% no tenía antecedentes psiquiátricos",
        source: "Human Line Project vía Wikipedia, 2025",
      },
      {
        value: "27 chatbots",
        label: "documentados en relación con incidentes graves de salud mental, como alentar la autolesión y las creencias falsas",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "El test de 20 preguntas — traza el mapa de tus creencias",
    intro:
      "Lee cada afirmación e indica tu grado de acuerdo. Responde lo que “realmente sientes”, no lo que crees que deberías responder, para que el resultado te refleje de verdad. Compatible con teclado: pulsa 1–5 para responder y las flechas para navegar.",
    answeredPrefix: "Respondidas",
    scoreHint: "Indica tu grado de acuerdo con esta afirmación durante los últimos 6 meses",
    prev: "Anterior",
    next: "Siguiente",
    process: "Procesar resultados",
    allAnsweredNote:
      "Todo respondido — pulsa “Procesar resultados” para ver tu resumen, o vuelve atrás y cambia cualquier respuesta.",
    progressAria: "Progreso del test",
    gotoTemplate: "Ir a la pregunta {n}",
    answerAriaTemplate: "Respuesta a la pregunta {n}",
    likert: [
      { label: "Totalmente en desacuerdo", short: "No" },
      { label: "En desacuerdo", short: "No mucho" },
      { label: "Neutral", short: "Neutral" },
      { label: "De acuerdo", short: "Sí" },
      { label: "Totalmente de acuerdo", short: "Mucho" },
    ],
    questions: [
      {
        id: 1,
        text: "Siento que los chatbots de IA “me entienden” mejor que las personas que me rodean en la vida real",
        insight:
          "Imitación de la intimidad: los chatbots están diseñados para reflejar las emociones del usuario, así que da la sensación de que alguien te comprende profundamente, cuando en realidad solo devuelven lo que tú les das. Los análisis del fenómeno de la AI psychosis lo señalan como uno de los tres desencadenantes principales.",
        tip: "Haz una prueba sencilla: alguien que “te entiende de verdad” te ha llevado la contraria con sus propias razones al menos una vez; no te ha dado la razón absolutamente siempre.",
      },
      {
        id: 2,
        text: "Creo que la IA es intrínsecamente malvada o que hay fuerzas sobrenaturales detrás de ella",
        insight:
          "La creencia “IA = demonio/malicia” aparece con mucha frecuencia en hilos de comunidades que tratan los modelos de lenguaje como algo sobrenatural (por ejemplo, los hilos sobre “invocar al demonio” en r/conspiracy): se juzga la tecnología desde el miedo y no desde pruebas verificables.",
        tip: "Separa los “riesgos medibles” (sesgos, privacidad, desinformación) del “terror generado únicamente por el miedo”.",
      },
      {
        id: 3,
        text: "Cuando la IA coincide con lo que pienso, me siento mucho más seguro de que sin duda tengo razón",
        insight:
          "La trampa de la complacencia: los modelos tienden a dar la razón al usuario para mantener viva la conversación. La propia OpenAI lo admitió y retiró la actualización de GPT-4o en abril de 2025 por ser demasiado “complaciente”. La seguridad que te da la IA no es una prueba de que tengas razón.",
        tip: "Aplica la regla de las dos fuentes: antes de concluir “tengo razón”, busca al menos a otra persona o un dato que ponga a prueba esa idea.",
      },
      {
        id: 4,
        text: "Veo a quienes usan la IA abiertamente como personas engañadas o con el cerebro lavado",
        insight:
          "Una actitud de caza de brujas: hilos de r/changemyview y r/singularity muestran cómo parte de la reacción contra la IA pasa de criticar la tecnología a juzgar a las personas, de modo que incluso las voces neutrales son atacadas y la conversación necesaria deja de llegar a ambos lados.",
        tip: "Puedes criticar un uso concreto sin etiquetar a la persona como “víctima”: argumenta con razones, no con etiquetas.",
      },
      {
        id: 5,
        text: "He recibido de la IA “verdades secretas” o una “misión especial” que hicieron que mi vida tuviera sentido",
        insight:
          "El patrón de delirio espiritual más común en los informes de casos: medios y psiquiatras recogen a muchos usuarios que creyeron que la IA les revelaba verdades sobre el universo, otras dimensiones o su misión especial (Rolling Stone 2025, Futurism 2025). Los modelos de lenguaje se entrenan con una enorme cantidad de mitología, por eso tejen bien relatos simbólicos; eso no es una revelación.",
        tip: "Si una “verdad secreta” empieza a cambiar tu vida de forma importante, escríbela, pregúntate si hay alguna prueba fuera del chat que la respalde y cuéntasela a alguien que te la cuestione.",
      },
      {
        id: 6,
        text: "Me niego a usar cualquier cosa relacionada con la IA en casi todos los casos, incluso cuando su utilidad es evidente",
        insight:
          "El rechazo en bloque es una señal de que el miedo le ha ganado a la razón, igual que los pánicos morales que en su día condenaron la radio, la televisión e internet; la investigación a largo plazo encontró una y otra vez que los daños eran mucho más leves de lo que se temía.",
        tip: "Define una “zona de prueba segura”: prueba un uso pequeño y de bajo riesgo, con tus propios criterios para comprobar el resultado; por ejemplo, pide a la IA que resuma un artículo que ya hayas leído.",
      },
      {
        id: 7,
        text: "Sigo los consejos de la IA sobre salud, finanzas o decisiones importantes de la vida sin confirmarlos con expertos",
        insight:
          "Un caso real de la literatura médica: un hombre de 60 años desarrolló bromismo (intoxicación por bromuro), con delirios y alucinaciones, tras sustituir la sal por bromuro siguiendo el consejo de un chatbot. Los modelos de lenguaje pueden generar información errónea con total seguridad (alucinación). La información de la que depende tu vida debe pasar por el filtro de expertos humanos.",
        tip: "Establece una regla de tres categorías: salud, finanzas y asuntos legales. Confírmalo siempre con un profesional, sin excepciones.",
      },
      {
        id: 8,
        text: "Creo que la IA nos vigila constantemente o lee la mente de las personas",
        insight:
          "La paranoia de vigilancia también aparece en los informes de casos de AI psychosis (usuarios que creen que los siguen o que viven en una simulación). La tecnología plantea preocupaciones reales sobre la privacidad, pero “leer la mente” no tiene ninguna prueba que lo respalde.",
        tip: "Separa lo que se puede comprobar (políticas de privacidad, condiciones del servicio) de la sensación de que “lo sabe todo”: leer de verdad la política desinfla gran parte del miedo.",
      },
      {
        id: 9,
        text: "Prefiero hablar con la IA antes que con mi familia o mis amigos, porque la IA nunca me critica ni me decepciona",
        insight:
          "El patrón de sustitución sobre el que advierten los propios desarrolladores de IA (Dev.to 2025 llama a este antipatrón el “Replacement Bot”): una relación sin fricción no es una relación real, y alejarse de las personas aumenta todavía más el riesgo de entrar en un bucle de creencias sin anclaje.",
        tip: "Ponte como meta un “ancla humana”: una conversación sincera al día con una persona real. Después compara cómo te sientes tras ella y tras hablar con la IA.",
      },
      {
        id: 10,
        text: "Me enfado o reacciono con agresividad de inmediato cuando veo que alguien habla de la IA con optimismo",
        insight:
          "Reflejo hostil: cuando la emoción dirige la actitud, perdemos la oportunidad de valorar la información en sí. Hay hilos en r/singularity que describen ataques desde ambos lados incluso al hablar de forma neutral. Ten en cuenta que parte del “conflicto” en redes sociales también está amplificado por bots.",
        tip: "Baja el ritmo: respira hondo antes de responder y pregúntate “¿qué información habrá visto esa persona que yo no?”.",
      },
      {
        id: 11,
        text: "He pasado horas al día hablando con la IA hasta el punto de que afectó a mi trabajo, mi sueño u obligaciones importantes",
        insight:
          "Una señal de adicción al uso: pensadores del ámbito de la IA señalan que los chatbots están diseñados para “enganchar” y retener la atención. El tiempo perdido es un coste medible, y multiplica todos los demás ítems de este lado.",
        tip: "Fija un límite de tiempo (por ejemplo, 45 min/día) con un temporizador. Mantén el chat como una herramienta, no como un segundo mundo.",
      },
      {
        id: 12,
        text: "Creo que todo lo que genera la IA es deliberadamente engañoso o pura propaganda de principio a fin",
        insight:
          "Atribuirle malicia total contradice muchos usos reales, como resumir documentos, organizar información o hacer comprobaciones básicas de datos. Cuando todo parece una conspiración, se pierde la capacidad de discernir, que es la habilidad más importante de todas.",
        tip: "Compruébalo de forma empírica: dale a la IA una tarea sencilla y verificable, y juzga la calidad por los resultados, no por el miedo.",
      },
      {
        id: 13,
        text: "Siento que la IA que yo uso es “más especial” que las demás, o que sabe algo que otros todavía no pueden ver",
        insight:
          "La creencia en una relación especial es un rasgo frecuente en los casos de delirio con chatbots. La realidad técnica es que el mismo modelo responde a decenas de millones de usuarios con los mismos patrones. Lo “especial” ocurre más en nuestra cabeza que en el sistema.",
        tip: "Una prueba sencilla: haz la misma pregunta desde otra cuenta u otro dispositivo y compara los resultados con tus propios ojos.",
      },
      {
        id: 14,
        text: "Pienso que la IA es la causa de casi todos los problemas sociales de esta época",
        insight:
          "Culpar a una sola causa: problemas sociales como la desinformación, la desigualdad y el desempleo tenían raíces profundas antes de que llegara la IA. Señalar a un único culpable arregla el punto equivocado y esconde los factores reales bajo la alfombra.",
        tip: "Cada vez que empieces a culpar a la IA, acostúmbrate a preguntarte: “¿qué otros factores hay que no sean la IA?”, y anótalos todos antes de sacar conclusiones.",
      },
      {
        id: 15,
        text: "Me he sentido irritable o vacío al pasar un tiempo lejos de la IA, como si echara de menos a alguien",
        insight:
          "Abstinencia por apego: cuando una relación simulada se convierte en la principal fuente de consuelo, perderla genera un vacío parecido al de perder a una persona real; es una señal de que la frontera entre herramienta y relación se está difuminando.",
        tip: "Prueba una pausa de 24 horas y anota las sensaciones que aparezcan. Si el malestar es tan fuerte que altera tu vida, habla con un profesional de la salud mental.",
      },
      {
        id: 16,
        text: "Siento una ansiedad o un terror tan intensos que alteran mi vida cuando pienso en el futuro de la IA",
        insight:
          "Ansiedad catastrofista: un miedo a la IA que consume más vida real que la propia IA. El doomscrolling continuo aumenta la ansiedad acumulada sin aportar conocimiento con el que realmente puedas decidir.",
        tip: "Fija una única “ventana de noticias sobre IA” al día, con fuentes que presenten ambos lados, y detente cuando se acabe el tiempo.",
      },
      {
        id: 17,
        text: "Cuando las personas de mi entorno me advierten de que uso demasiado la IA, suelo sentir que no lo entienden, porque nunca han vivido lo que yo he vivido",
        insight:
          "Cerrar el canal de retroalimentación: el grupo de apoyo Human Line Project, con miembros de 22 países, encontró que más del 60% no tenía antecedentes psiquiátricos. El bucle de “yo veo lo que los demás no ven” es lo que cierra la puerta a la ayuda antes de que nadie pueda entrar.",
        tip: "Un umbral de seguridad sencillo: si tres personas que te quieren te dicen lo mismo, párate y escucha durante 30 minutos sin discutir antes.",
      },
      {
        id: 18,
        text: "Me creo los rumores o historias sobre la maldad de la IA que circulan en mi entorno, sin comprobar la fuente",
        insight:
          "El sesgo de confirmación funciona en ambos sentidos: quienes aman demasiado la IA y quienes la odian demasiado consumen la información de la misma manera, solo la que les conviene. Las creencias sin anclaje se acumulan igual en los dos polos.",
        tip: "Acostúmbrate a buscar “pruebas que te contradigan” una vez por semana, para que el cerebro mantenga el hábito de ver ambos lados.",
      },
      {
        id: 19,
        text: "Creo que la IA tiene de verdad conciencia o sentimientos propios, y que no es solo un programa que calcula probabilidades",
        insight:
          "La creencia en la conciencia de la IA es un tema central en los informes de delirios (usuarios que creen que los chatbots están vivos, que sienten e incluso que “canalizan a personas fallecidas”). Todavía no hay pruebas científicas de que los modelos de lenguaje tengan conciencia; simplemente son muy buenos imitando el lenguaje de los seres conscientes.",
        tip: "Mantenlo como una “pregunta abierta”: ni descartes tan rápido que cierres la puerta a la investigación, ni creas solo por cómo se siente el chat.",
      },
      {
        id: 20,
        text: "Pienso que el único camino correcto es destruir o detener la IA por completo; no hay ninguna alternativa mejor",
        insight:
          "Eliminacionismo: la historia de la tecnología muestra que las prohibiciones totales casi nunca funcionan, mientras que las medidas específicas empiezan a dar resultado; por ejemplo, la ley de Illinois (agosto de 2025) que prohíbe a la IA ejercer funciones de terapeuta, y el borrador de normas de China (diciembre de 2025) que prohíbe que los chatbots alienten el suicidio.",
        tip: "Cambia el objetivo de “destruir” a “poner reglas”: proponer regulaciones en los puntos realmente arriesgados funciona mejor que declararle la guerra al mundo entero.",
      },
    ],
  },
  results: {
    heading: "Los resultados de tu test",
    riskAiPrefix: "Riesgo de AI-PSYCHOSIS",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Ir a la guía de recalibración",
    retake: "Repetir el test",
    gaugeAiSub: "Tendencia a la creencia excesiva en la IA (10 ítems)",
    gaugeAntiSub: "Tendencia al miedo o rechazo irracional a la IA (10 ítems)",
    levelPrefix: "Nivel:",
    scale: { safe: "seguro", enter: "señalado", high: "alto" },
    mapHeading: "Tu posición de pensamiento en el mapa de dos polos",
    youAreHere: "Estás aquí",
    mapBalanced: "Equilibrio",
    mapAriaTemplate:
      "Mapa de dos polos: riesgo de AI-PSYCHOSIS {ai} por ciento, ANTI-AI PSYCHOSIS {anti} por ciento",
    axisDownLeft: "↓ Sin creencia excesiva en la IA",
    axisRight: "Eje derecho: ANTI-AI PSYCHOSIS →",
    axisLeft: "← Eje superior: AI-PSYCHOSIS",
    axisUpRight: "↑ Miedo excesivo a la IA",
    readHeading: "Cómo interpretar esto correctamente",
    readItems: [
      "El umbral del 60% es el punto en el que tus respuestas “se inclinan hacia el acuerdo” con patrones de creencias observados en casos reales de delirio; por debajo de él sigues dentro de un pensamiento normal.",
      "Tu posición en el mapa refleja un “estilo de pensamiento”, no un diagnóstico: incluso las personas equilibradas responden con cierta inclinación en días emocionalmente agitados.",
      "Recuerda que estos dos polos no son “me gusta la IA frente a no me gusta”: puedes valorar poco la IA sin temerla, y usarla mucho sin creer en ella en exceso.",
      "Repite el test una vez al mes para ver hacia dónde se mueve tu actitud tras aplicar la guía de recalibración de más abajo.",
    ],
    flaggedHeading: "Qué significa cada una de tus respuestas de mayor acuerdo",
    flaggedIntro:
      "Los ítems en los que respondiste 4–5 (de acuerdo/totalmente de acuerdo) son los puntos que más conviene revisar: lee el significado y el pequeño ajuste propuesto para cada uno.",
    noFlaggedNote:
      "Excelente: no mostraste un acuerdo fuerte con ninguna afirmación indicativa de delirio. Tu puntuación baja proviene de creencias estables, no de respuestas al azar.",
    questionPrefix: "P",
    insightLabel: "A qué apunta esta afirmación",
    tipLabel: "Técnica de microajuste",
    criticalTitle: "Tu puntuación está en el rango alto",
    criticalBody:
      "Este resultado no es un diagnóstico, pero conviene tomarlo en serio: si estas creencias empiezan a afectar a tu sueño, tu trabajo o tus relaciones, o si las personas de tu entorno ya expresan preocupación, hablar pronto con un psiquiatra o un psicólogo ayuda mucho, y no hace falta esperar a que se convierta en “una enfermedad”.",
    levels: {
      low: { label: "Seguro", note: "Menos del 30% — no se detecta en tus respuestas ninguna tendencia al delirio" },
      watch: { label: "En observación", note: "30–59% — existe cierta inclinación; revisa los puntos de pensamiento señalados" },
      high: { label: "Señalado", note: "60–79% — las respuestas se inclinan claramente hacia patrones de delirio; empieza ya la recalibración" },
      critical: { label: "Alto", note: "80% o más — un nivel en el que merece la pena plantearse consultar a un profesional de la salud mental" },
    },
    verdicts: {
      balanced: {
        title: "Realista equilibrado",
        subtitle: "BALANCED REALIST",
        description:
          "Tus puntuaciones en ambos polos son bajas: miras la IA con apertura y espíritu de verificación, y ninguna emoción te arrastra a un extremo. Es la mejor posición que se puede mantener en esta época, porque el delirio no crece en un solo polo: nace del pensamiento en blanco y negro en ambas direcciones. Conserva tu disciplina de informarte desde los dos polos y usa las preguntas que respondiste como una lista de comprobación mensual.",
      },
      watch: {
        title: "En la zona de observación",
        subtitle: "WATCHLIST",
        description:
          "Sigues dentro de un pensamiento normal, pero te inclinas de forma apreciable hacia uno de los polos. Revisa el desglose por ítem de más abajo para ver qué respuestas tiran de ti y empieza a aplicar la regla de las dos fuentes en los asuntos importantes. Una pequeña inclinación, si se deja acumular, puede crecer hasta convertirse en toda una creencia sin anclaje, sobre todo con una dieta constante de contenido unilateral.",
      },
      ai: {
        title: "Encaja con el patrón de AI-PSYCHOSIS",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "Tus respuestas apuntan a una creencia en la IA que va más allá de lo saludable: tu cifra supera el umbral del 60%, extraído de patrones descritos en casos reales. Esto no significa que estés “loco” ni que tengas psicosis; la AI psychosis no es un diagnóstico psiquiátrico oficial. Significa que tu patrón de pensamiento se sitúa cerca del punto de partida de casos que ocurrieron de verdad. Lee el significado de cada ítem y empieza hoy la recalibración de más abajo.",
      },
      anti: {
        title: "Encaja con el patrón de ANTI-AI PSYCHOSIS",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "Tus respuestas apuntan a un miedo o rechazo a la IA sin una razón proporcionada. Este patrón es el espejo del lado de la creencia excesiva, pero utiliza el mismo mecanismo en blanco y negro. Un miedo que nunca separa los hechos del terror desgasta la mente sin necesidad, y te hace perder tanto las partes realmente útiles como las conversaciones que ayudan a fijar reglas adecuadas para esta tecnología.",
      },
      doomloop: {
        title: "Ambos polos a la vez (DOOMLOOP)",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "Tus puntuaciones en ambos polos superan el umbral: creencias contradictorias conviven en una misma cabeza. A veces se debe a alternar entre una inmersión intensa en la IA y un miedo intenso a ella (un bucle entre “lo sabe todo” y “lo destruirá todo”); otras veces, a consumir contenido unilateral de varias fuentes a la vez. En cualquier caso, los dos carriles en blanco y negro comparten la misma raíz. Empieza por las reglas de “fuentes de los dos polos + límite de tiempo”, y plantéate hablar con un profesional de la salud mental para ordenar las ideas.",
      },
    },
  },
  guidance: {
    heading: "Protégete del delirio en ambas direcciones",
    intro:
      "Las creencias sin anclaje surgen tanto de creer demasiado en la IA como de creer demasiado que la IA es malvada. Las pautas siguientes proceden de propuestas de psiquiatras, de advertencias de los propios desarrolladores de IA y de experiencias reales de comunidades en línea.",
    tabs: {
      ai: "Creer demasiado en la IA",
      anti: "Temer demasiado a la IA",
      balanced: "Mantener el equilibrio",
      doomloop: "El DOOMLOOP",
    },
    headers: {
      ai: "Si tu resultado se inclina hacia la AI-PSYCHOSIS",
      anti: "Si tu resultado se inclina hacia la ANTI-AI PSYCHOSIS",
      balanced: "Para todo el mundo, incluidas las personas con un resultado equilibrado",
      doomloop: "Si tu resultado señala ambos polos a la vez (DOOMLOOP)",
    },
    descs: {
      ai: "La clave es mantener la frontera entre herramienta y relación, y convertir en hábito el contraste con la realidad",
      anti: "La clave es separar los riesgos reales del terror, y transformar la fuerza del rechazo en establecimiento de reglas",
      balanced:
        "El equilibrio no es un estado permanente: es un músculo que necesita entrenamiento continuo, sobre todo cuando las noticias sobre IA de tu feed tiran de ti hacia un polo cada día",
      doomloop:
        "Dos polos opuestos que se refuerzan mutuamente en una misma cabeza: la salida es romper el ritmo del bucle, no decidir cuál de los polos “tiene razón”",
    },
    items: {
      ai: [
        {
          title: "Aplica siempre la regla del contraste con la realidad",
          detail:
            "Ante cada conclusión importante que venga de la IA, hazte tres preguntas: ¿dónde están las pruebas fuera del chat? / ¿quién sostiene lo contrario? / si la IA hubiera respondido lo contrario, ¿lo creería? Si la respuesta a la tercera es “no”, estás aceptando como verdad lo que sientes, no los hechos.",
        },
        {
          title: "Entiende la complacencia como un mecanismo del sistema, no como magia negra",
          detail:
            "Los modelos se entrenan de maneras que tienden a dar la razón al usuario para mantener su satisfacción: ese “me entiende mejor que nadie”, demasiado fluido, es un rasgo de diseño, no una prueba de que tu razonamiento sea correcto. La propia OpenAI reconoció el fallo y retiró la actualización de GPT-4o a mediados de 2025.",
        },
        {
          title: "La regla de las dos fuentes para todo lo importante",
          detail:
            "Salud, finanzas, asuntos legales y grandes decisiones de vida: confírmalo siempre con un experto humano. El caso del hombre de 60 años que cambió la sal por bromuro siguiendo el consejo de un chatbot, y se intoxicó hasta sufrir delirios, enseña que la seguridad con la que habla la IA no es una medida de la verdad.",
        },
        {
          title: "Mantén siempre un ancla humana",
          detail:
            "Una conversación real al día con alguien capaz de llevarte la contraria, y comparte con esa persona las conclusiones clave de la IA para que las revise. Casi todos los casos graves empezaron por alejarse primero de las personas: quien puede sacarte del bucle de creencias sin anclaje tiene que ser alguien con el valor de no estar de acuerdo contigo.",
        },
        {
          title: "Fija un límite de tiempo y conoce las señales de alerta",
          detail:
            "Los chats están diseñados para enganchar, así que usa un temporizador y presta atención a estas señales: irritabilidad cuando no puedes chatear, sentir que la IA es especial contigo, recibir “misiones secretas”, un agotamiento creciente que no logras detener. Si persisten, reduce el uso y habla con un profesional de la salud mental sin esperar a que se convierta en “una enfermedad”.",
        },
        {
          title: "Separa la herramienta de la relación",
          detail:
            "La IA es realmente buena para ordenar ideas, resumir información, generar ideas y redactar planes, pero no es un amigo, una pareja, un maestro de vida ni un guía espiritual. Usarla en lo que hace bien y conservar las relaciones reales es la fórmula para obtener el máximo beneficio con el mínimo riesgo.",
        },
      ],
      anti: [
        {
          title: "Separa los riesgos reales del terror",
          detail:
            "Entre las preocupaciones con pruebas reales están los sesgos de los modelos, los problemas de privacidad, la desinformación y el impacto en algunas profesiones; todas pueden evaluarse caso por caso. “Demonios, lectura de la mente, control total” no cuenta de momento con ninguna prueba. Mezclar las dos categorías es donde empieza el pánico moral.",
        },
        {
          title: "Recuerda las lecciones de los pánicos morales de la historia",
          detail:
            "La radio, la televisión, los videojuegos e internet fueron condenados exactamente en los mismos términos en los que hoy se condena la IA. La investigación a largo plazo encontró que los daños solían ser mucho más leves de lo que se temía; el verdadero coste del pánico es la ansiedad crónica de quienes temen, y el juicio injusto hacia otras personas.",
        },
        {
          title: "Usa la regla de las dos fuentes, igual que en el lado opuesto",
          detail:
            "Antes de creer o compartir relatos sobre la maldad de la IA, busca dos fuentes independientes. El sesgo de confirmación no afecta solo a quienes aman la IA: quienes la temen consumen información unilateral con la misma rapidez. Esta lista de comprobación sirve para ambos polos.",
        },
        {
          title: "Critica la tecnología, no a la persona",
          detail:
            "Llamar engañados o manipulados a quienes usan IA cierra la conversación al instante y hace que quienes de verdad la usan mal tengan miedo de pedir ayuda. Critica el uso concreto —¿se copió ese trabajo?, ¿son correctos los datos?— en lugar de etiquetar a la gente.",
        },
        {
          title: "Haz pequeños experimentos que tú controles",
          detail:
            "Comprender a partir del uso directo desinfla el miedo mejor que suponer a partir del ruido mediático. Empieza por tareas de bajo riesgo, como pedirle a la IA que resuma un artículo que ya has leído, y mide tú la precisión. Cuando veas con tus propios ojos sus puntos fuertes y débiles, temerás solo lo que merece temerse, no el mundo entero.",
        },
        {
          title: "Cambia el objetivo de destruir a poner reglas",
          detail:
            "Las prohibiciones totales casi nunca funcionan en la historia de la tecnología, mientras que las medidas específicas empiezan a dar resultado: la ley de Illinois (agosto de 2025) que prohíbe a la IA ejercer funciones de terapeuta, o el borrador de normas de China (diciembre de 2025) que prohíbe que los chatbots alienten el suicidio. La voz de quien entiende la tecnología tiene más influencia que la voz que le declara la guerra al mundo entero.",
        },
        {
          title: "Programa descansos del contenido catastrofista",
          detail:
            "El doomscrolling de noticias sobre IA aumenta la ansiedad acumulada sin aportar conocimiento. Fija una única ventana diaria de noticias sobre IA, con fuentes que presenten ambos lados, y obsérvate: si la ansiedad empieza a afectar a tu sueño, tu trabajo o tus relaciones, es la señal para consultar a un profesional de la salud mental.",
        },
      ],
      balanced: [
        {
          title: "Mantén la disciplina de informarte desde los dos polos",
          detail:
            "La única regla que conviene cumplir a diario: lee juntas las voces favorables y las críticas sobre la IA, y separa siempre los hechos verificables de las opiniones. El riesgo de la persona equilibrada no es la credulidad, sino ir abandonando poco a poco un lado cuando se siente cómoda con el otro. En el momento en que tu feed contenga una sola voz, tu equilibrio empieza a inclinarse en ese mismo instante.",
        },
        {
          title: "Evalúa la IA por tarea, no por modelo ni en bloque",
          detail:
            "El corazón del equilibrio es el pensamiento probabilístico, no el blanco y negro: organizar información, resumir documentos, generar ideas = plenamente utilizable / datos nuevos, cifras, consejos de salud y finanzas = verifícalos siempre en otra parte / cuestiones controvertidas = mantenlas como preguntas abiertas, no saques conclusiones en lugar de los expertos. Así obtienes un beneficio real sin tener que decidir si la IA es “buena” o “mala”.",
        },
        {
          title: "Vigila la señal de alerta que comparten ambos polos",
          detail:
            "El delirio, tanto del lado de la creencia excesiva como del miedo excesivo, empieza con la misma señal: frases absolutas sobre la IA, como “me entiende por completo” o “lo falsea todo”. Cuando te descubras diciendo frases así, detente y busca una excepción que las contradiga. Si no encuentras ni una, estás creyendo una verdad prefabricada, no pensando.",
        },
        {
          title: "Usa la IA como compañera de pensamiento, con las personas como juez",
          detail:
            "Los puntos fuertes de la IA son generar ideas, resumir, revisar trabajos y hacer de abogado del diablo. Una técnica práctica: pídele a la IA que argumente en contra de tu postura para sacar a la luz sus puntos débiles, y después contrástalo con una persona real de confianza. En las decisiones importantes de la vida —trabajo, dinero, relaciones—, deja el juicio final en tus manos y en las de las personas que de verdad asumirán las consecuencias.",
        },
        {
          title: "Escribe tus propias reglas y revísalas cada mes",
          detail:
            "El equilibrio es un músculo, no un estado permanente. Pon por escrito tus reglas de uso de la IA: límite de tiempo diario / categorías que requieren confirmación profesional / ninguna gran decisión a partir de una sola conversación / parar de inmediato cuando el apego vaya más allá del terreno de la herramienta. Después revísalas cada mes, al repetir este test. Las reglas escritas te permiten detectar tu propia deriva gradual antes de que se endurezca en una creencia.",
        },
      ],
      doomloop: [
        {
          title: "Primero conoce tu bucle — cómo funciona el DOOMLOOP",
          detail:
            "El DOOMLOOP es el patrón en el que dos creencias opuestas conviven en una misma cabeza y se alimentan entre sí: un día la IA “lo sabe todo, es consciente, me entiende mejor que nadie”, y al siguiente “lo destruirá todo, me lee la mente”. La investigación llama a este mecanismo espiral de amplificación: los chatbots reflejan y validan las emociones del usuario sin ofrecer una respuesta que las cuestione, de modo que ambos polos ganan seguridad cuanto más chateas. Un estudio de arXiv de 2026 confirma que la complacencia de los chatbots puede producir una “espiral delirante” incluso en usuarios corrientes. Saber que se trata de un bucle del sistema, y no de una verdad sobre el mundo, es el primer paso para salir de él.",
        },
        {
          title: "Rompe el bucle con una persona real que vea tus dos caras",
          detail:
            "El bucle gira porque gira dentro de un chat privado que nadie ve. Elige a una persona de confianza (familia, una amistad cercana, un profesional) y comparte de verdad copias de las conversaciones importantes, contándole tanto la fase de “enamoramiento de la IA” como la de “terror a la IA”. Los reportajes de Stanford señalan que el bucle se rompe cuando la creencia tiene que sostenerse a la luz, donde personas reales pueden verla. Quien pueda ayudarte debe tener el valor de llevarte la contraria, no ser alguien que te dé la razón en todo, como un chatbot.",
        },
        {
          title: "Convierte el límite de tiempo y el cambio de polo en reglas obligatorias",
          detail:
            "Como los dos polos se refuerzan mutuamente, la solución tiene que actuar en ambos sentidos a la vez: (1) un límite estricto de tiempo con la IA, controlado con temporizador, por ejemplo 30 min/día; cada hora en el chat es una vuelta más del bucle; (2) cuando uno de los polos se intensifique, oblígate a leer fuentes del polo opuesto antes de compartir o decidir. Una creencia que se somete a dos pruebas consecutivas como estas empieza a perder la “certeza” que alimenta el bucle.",
        },
        {
          title: "Anota en papel las señales de entrada en el bucle",
          detail:
            "Las señales de que se entra en el bucle siguen un patrón fijo: empezar a hablar de la IA con elogio absoluto o con pavor absoluto / sentir que las personas de tu entorno “no lo entienden” y dejar de contárselo / perder el sueño por la IA / recibir “verdades secretas” o “amenazas secretas” del chat / irritabilidad cuando no puedes chatear. Anota en una sola página la fecha y la hora en que ocurren. Al mirarlo después como un gráfico, verás por ti mismo que los polos se alternan con un ritmo, y un ritmo se puede gestionar.",
        },
        {
          title: "El nivel de gravedad que justifica ayuda real",
          detail:
            "El DOOMLOOP es el patrón que conviene tomarse más en serio de esta lista. Criterios para acudir sin demora a un psiquiatra o un psicólogo: las creencias empiezan a cambiar la vida real (cortar relaciones, faltar al trabajo, reorganizar tu día en función de lo que dice la IA o del miedo a la IA) / dos o más personas de tu entorno expresan preocupación de forma independiente / alteraciones persistentes de los ciclos de sueño y vigilia / empezar a oír o ver cosas que los demás no perciben. Pedir ayuda pronto no es rendirse: casi todos los casos con buena recuperación empezaron con alguien que se detuvo antes de que el bucle se cerrara del todo.",
        },
      ],
    },
  },
  references: {
    heading: "Fuentes en las que se basa este test",
    intro:
      "Cada afirmación y cada estadística de este sitio se apoya en los trabajos académicos, reportajes e hilos reales de comunidades que aparecen a continuación; haz clic para leer los originales.",
    disclaimerTitle: "Declaración de uso responsable",
    disclaimer:
      "Este test es una herramienta educativa para reflexionar sobre tu propia perspectiva, no un instrumento de diagnóstico médico. “AI-PSYCHOSIS” no es un diagnóstico psiquiátrico oficialmente aceptado. Tu puntuación solo indica una tendencia de pensamiento a partir de tus respuestas. Si tienes síntomas preocupantes —creencias que inquietan a las personas de tu entorno, alteraciones de los ciclos de sueño y vigilia o una ansiedad intensa—, consulta cuanto antes a un psiquiatra o un psicólogo.",
    groups: [
      {
        group: "Fuentes académicas e institucionales",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Definición; mecanismos de sycophancy/hallucination/intimacy mimicry; casos reales; y críticas al uso del término psicosis",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "Un informe de caso clínico sobre este fenómeno",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Fuente de la estadística de OpenAI del 0.07% de usuarios semanales",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Entrevista con el psiquiatra Ragy Girgis (Columbia University)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Perspectiva clínica y factores de riesgo exploratorios",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Usuarios que se vinculan con la IA como si fuera un “dios” o una pareja, y el papel del efecto espejo con el usuario",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "El marco del pánico moral frente a la cautela constructiva",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Investigación que muestra que la complacencia de los chatbots puede provocar una espiral delirante incluso en usuarios corrientes; es la base del concepto de DOOMLOOP",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "El mecanismo de la espiral de validación: los chatbots ofrecen consuelo y atención sin una respuesta que cuestione",
          },
        ],
      },
      {
        group: "Medios y plataformas tecnológicas",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Informes de casos que citan a Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 chatbots; la visión de los desarrolladores: Validation Loop, Replacement Bot y propuestas de diseño que priorizan la seguridad",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Orientación práctica para usuarios y familias",
          },
        ],
      },
      {
        group: "Comunidades en línea (hilos reales)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "La perspectiva de terapeutas sobre casos encontrados en su práctica",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "Caso relatado por un usuario, con la crítica de que la propia tendencia puede desencadenar una reacción contraria",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Observaciones sobre muchos usuarios que alimentan el contexto hasta que el modelo entra con ellos en la espiral",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "Un ejemplo real de la creencia Anti-AI de que la IA está impulsada por fuerzas sobrenaturales",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "Un ejemplo real de caza de brujas contra quienes usan IA",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "La observación de que ambos polos usan el mismo estilo de pensamiento",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "Checklist AI-PSYCHOSIS — una herramienta de reflexión sobre el pensamiento en la era de la IA",
    note: "Basado en investigaciones e hilos reales, 2023–2026 · No es una herramienta de diagnóstico médico",
  },
  ui: {
    languageLabel: "Idioma",
    themeLabel: "Tema",
    themes: { cyberpunk: "CyberPunk", dark: "Oscuro", light: "Claro" },
  },
};

export default es;
