import { TreeNodeData, EssaySection, SchoolCase, Citation, PeaceCommitment } from '../types';

export const ACADEMIC_INFO = {
  institution: "Unidad Educativa Santa María Eufrasia",
  course: "Filosofía — 2do de Bachillerato General Unificado “A”",
  groupName: "Grupo 4",
  teacher: "Lcdo. Bryan Hidalgo Ligña",
  location: "Quito, Ecuador",
  date: "24 de septiembre de 2026",
  title: "El Árbol de la Armonía y la Alegría",
  subtitle: "Construyendo un Espejo de Paz",
  centralQuestion: "¿Merece respeto toda persona por el solo hecho de serlo, o el respeto se gana con las acciones?",
  authors: [
    { name: "Flores Melani", role: "Investigadora & Redacción" },
    { name: "Jiménez Adrián", role: "Investigador & Análisis Crítico" },
    { name: "Palacios Matías", role: "Investigador & Coordinador" },
    { name: "Ruíz Abigail", role: "Investigadora & Síntesis Ética" },
    { name: "Zapata Martín", role: "Investigador & Casuística Escolar" }
  ]
};

export const TREE_NODES: TreeNodeData[] = [
  {
    id: 1,
    title: "La Dignidad Humana Innata",
    subtitle: "Valor intrínseco e incondicional",
    body: "Toda persona posee un valor inalienable por el simple hecho de su condición humana. Como sostienen los derechos humanos fundamentales (INE 2020), la dignidad no es una recompensa ni una medalla acumulable por buenas acciones, sino un principio ontológico incondicional anterior a cualquier mérito.",
    quote: "“El respeto reconoce en uno mismo y en los demás los derechos y la dignidad insustituible.”",
    icon: "Crown",
    cx: 400,
    cy: 180,
    color: "#d4a373", // cream amber
    philosophicalBranch: "Tronco Central — Ontología y Derechos"
  },
  {
    id: 2,
    title: "Respeto Universal para la Convivencia",
    subtitle: "Reconocer derechos, límites y alteridad",
    body: "El respeto implica reconocer en uno mismo y en los demás las capacidades, derechos y dignidad que poseen como personas (Fundación Wiese 2023). No significa valorarlo solo por similitud ideológica, sino entender que el pensamiento ajeno es legítimo y que debemos procurar el bienestar mutuo.",
    quote: "“Respetar no implica únicamente tratar como queremos ser tratados; también significa aceptar aquello que no nos resulta común.”",
    icon: "Globe",
    cx: 240,
    cy: 160,
    color: "#588157", // sage
    philosophicalBranch: "Rama Occidental — Ética de la Alteridad"
  },
  {
    id: 3,
    title: "Separar la Acción del Valor Humano",
    subtitle: "Diferenciar dignidad de confianza",
    body: "Las acciones pueden determinar la cercanía o la distancia, la confianza o la admiración; sin embargo, no deben ser el filtro para decidir si alguien merece un trato digno. Una falta grave amerita justicia y límites firmes, pero nunca la deshumanización del infractor (García 2025).",
    quote: "“Una persona puede perder nuestra confianza o admiración, pero no por ello deja de merecer un trato digno.”",
    icon: "Scale",
    cx: 580,
    cy: 150,
    color: "#bc6c25", // terracotta
    philosophicalBranch: "Rama Oriental — Deontología y Justicia"
  },
  {
    id: 4,
    title: "El Desacuerdo Constructivo",
    subtitle: "Discrepar sin degradar",
    body: "Se confunde a menudo el respeto con la obligación de complacer o estar de acuerdo. Es completamente ético y necesario cuestionar ideas o desaprobar posturas; lo irrespetuoso surge cuando se impone un punto de vista como verdad absoluta o se humilla a quien piensa diferente.",
    quote: "“Expresar desacuerdo no constituye una falta de respeto; lo irrespetuoso es pretender poseer la verdad absoluta.”",
    icon: "MessageSquare",
    cx: 320,
    cy: 90,
    color: "#3a5a40", // dark sage
    philosophicalBranch: "Rama Superior Izquierda — Dialéctica y Diálogo"
  },
  {
    id: 5,
    title: "Empatía y Paz Institucional",
    subtitle: "Práctica cotidiana en el colegio",
    body: "En el entorno educativo de Santa María Eufrasia, la convivencia armónica exige traducir la teoría en acciones: frenar burlas hacia los más pequeños, dialogar con docentes de manera asertiva y erradicar la exclusión por gustos personales.",
    quote: "“Lo que debe cambiar no es el valor reconocido en el otro, sino la madurez con que expresamos nuestras diferencias.”",
    icon: "HeartHandshake",
    cx: 500,
    cy: 90,
    color: "#283b32", // deep forest
    philosophicalBranch: "Copa Superior — Praxis Escolar y Comunidad"
  }
];

export const ESSAY_SECTIONS: EssaySection[] = [
  {
    id: "sec-intro",
    number: "01",
    title: "Introducción",
    content: [
      "Según el estudio de García realizado en 2025 en su blog titulado “Ayuda en acción”, se determinó que: “Los valores humanos son el ADN de nuestra ética y moral”, puesto que nacen de la necesidad del ser humano de definir aquellas actitudes o acciones que culturalmente son consideradas correctas o inadecuadas. Su correcta aplicación en la vida cotidiana puede marcar la diferencia entre una experiencia incómoda o negativa y una situación capaz de enriquecer a una persona en personalidad e identidad.",
      "La práctica de los valores busca orientar el comportamiento humano para favorecer una convivencia sana y facilitar la comunicación con quienes nos rodean. Es precisamente aquí donde surge una controversia que la filosofía se ha cuestionado durante siglos: ¿una persona debe recibir un trato respetuoso únicamente cuando sus acciones demuestran que lo merece, o debe ser respetada independientemente de su comportamiento? Esta interrogante constituye el punto de partida de la presente reflexión."
    ],
    highlightQuote: "“Los valores humanos son el ADN de nuestra ética y moral.” — García (2025)",
    sourceNote: "García, N. (2025). Ayuda en Acción."
  },
  {
    id: "sec-objetivo",
    number: "02",
    title: "Objetivo de la Investigación",
    content: [
      "Como grupo, hemos enfocado el propósito de nuestro ensayo en analizar la importancia del respeto como valor fundamental de la convivencia, relacionándolo con el concepto de dignidad humana.",
      "A partir de situaciones evidenciadas dentro de nuestra institución educativa, buscamos determinar si el respeto debe considerarse un valor universal correspondiente a toda persona o si, por el contrario, se ve comprometido por las acciones que realiza."
    ],
    highlightQuote: "Analizar el respeto universal frente a las conductas cotidianas escolares y la dignidad humana incondicional."
  },
  {
    id: "sec-desarrollo",
    number: "03",
    title: "Desarrollo Teórico y Filosófico",
    content: [
      "Para dar inicio al cuerpo de nuestro ensayo, consideramos necesario definir qué es el respeto. Con la ayuda de la Fundación Wiese y su estudio sobre Los Principales Valores que los Niños Deben Conocer (2023), concluimos que el respeto es uno de los valores fundamentales para la convivencia, debido a que implica reconocer en uno mismo y en los demás los derechos, capacidades y dignidad que poseen como personas. Por ende, respetar a alguien no significa valorarlo únicamente por sus cualidades, comportamiento o semejanzas con nosotros, sino reconocer que posee un valor humano que no desaparece simplemente porque pensemos diferente o desaprobemos sus acciones.",
      "Respetar no implica únicamente tratar a los demás como nos gustaría ser tratados. También significa aceptar aquello que no nos resulta común, comprender que nuestro pensamiento no constituye necesariamente la única forma correcta de interpretar la realidad y procurar el bienestar de los demás sin sobrepasar sus límites ni vulnerar su dignidad.",
      "En ocasiones se confunde el respeto con la obligación de estar de acuerdo con los demás, siendo que es posible respetar a una persona y, al mismo tiempo, cuestionar sus ideas o desaprobar sus acciones. Expresar desacuerdo no constituye una falta de respeto. Lo que puede convertir el desacuerdo en una conducta irrespetuosa es imponer nuestro punto de vista como una verdad absoluta, menospreciar las opiniones ajenas o considerar inferior a quien piensa de manera diferente. Esta diferencia resulta especialmente importante cuando nuestras emociones intervienen en la manera en que tratamos a los demás.",
      "En muchas situaciones, como lo ha evidenciado el Instituto Nacional Electoral en su artículo “Faro Democrático” (2020), la postura que poseemos frente a una persona puede verse influenciada por la opinión que tenemos de ella, por comportamientos anteriores o incluso por las semejanzas y diferencias que existen entre ambos. De esta manera, podemos llegar a considerar que alguien merece un trato diferente simplemente porque nos agrada o nos desagrada.",
      "Podría entonces argumentarse que el respeto debe ganarse mediante las acciones. Después de todo, es lógico pensar: ¿por qué deberíamos respetar a alguien que constantemente nos falta al respeto, actúa injustamente o perjudica a los demás? Para responder esto, es vital diferenciar entre respetar el valor humano que tiene esa persona y aprobar un comportamiento negativo, puesto que rechazar o contraponerse a una acción no representa necesariamente vulnerar su criterio e irrespetar a quien lo realiza.",
      "El hecho de que alguien piense, actúe o se comporte de una manera que no compartimos no debería convertirse en una justificación para humillarlo o minimizar su dignidad. Una persona puede realizar acciones equivocadas y, por ello, perder nuestra confianza o admiración, pero esto no significa que deje de merecer un trato humano y adecuado. Por esta razón, consideramos que las acciones sí influyen en nuestras relaciones, pero no deberían determinar si una persona merece ser respetada. Las acciones pueden hacer que nos acerquemos más o establezcamos distancia y límites; sin embargo, no deben ser un criterio para decidir si esa persona merece ser tratada con dignidad."
    ],
    highlightQuote: "“Las acciones pueden hacer que nos acerquemos más o establezcamos distancia y límites; sin embargo, no deben ser un criterio para decidir si esa persona merece ser tratada con dignidad.”",
    sourceNote: "Fundación Wiese (2023) & INE - Faro Democrático (2020)"
  },
  {
    id: "sec-ejemplos",
    number: "04",
    title: "Ejemplos en el Entorno Escolar",
    content: [
      "Dentro de nuestra institución educativa hemos logrado evidenciar situaciones que reflejan claramente este problema: jóvenes que se burlan de niños y no toman en serio sus opiniones; estudiantes que, dominados por el enojo, discuten con docentes porque consideran equivocadas sus decisiones; o compañeros que excluyen a otros porque no comparten determinados gustos. En todos estos casos aparece una misma dificultad: confundir las diferencias personales con una supuesta diferencia en el valor o dignidad de las personas.",
      "Por ello, consideramos que los valores fundamentales deben mantenerse como principios de convivencia, aunque la manera de expresarlos pueda adaptarse a las diferentes circunstancias. El respeto debe aplicarse tanto al compañero como al conocido, al docente, al familiar, al amigo o a cualquier otra persona con quien establezcamos una relación. Lo que debe cambiar no es el valor que reconocemos en el otro, sino la forma en que expresamos nuestras diferencias, emociones y desacuerdos."
    ],
    highlightQuote: "“Lo que debe cambiar no es el valor que reconocemos en el otro, sino la forma en que expresamos nuestras diferencias, emociones y desacuerdos.”"
  },
  {
    id: "sec-conclusion",
    number: "05",
    title: "Conclusión",
    content: [
      "¿Entonces, merece respeto toda persona por el solo hecho de serlo, o el respeto se gana con las acciones?",
      "Sí, toda persona merece respeto fundamental solo por el hecho de ser persona, porque posee valor propio independiente de sus acciones.",
      "Pero precisamente porque esperamos vivir en una sociedad basada en el respeto, también tenemos la responsabilidad de practicarlo frente a los demás. Podemos cuestionar las acciones de una persona sin menospreciarlas, establecer límites sin humillarla y estar en desacuerdo sin convertir la diferencia en desprecio."
    ],
    highlightQuote: "“Podemos cuestionar las acciones de una persona sin menospreciarlas, establecer límites sin humillarla y estar en desacuerdo sin convertir la diferencia en desprecio.”"
  },
  {
    id: "sec-bibliografia",
    number: "06",
    title: "Bibliografía",
    content: [
      "Beach, M. (9 de 1 de 2007). National Library of Medicine. Obtenido de ¿Qué significa \"respeto\"? Explorando la obligación moral de los profesionales de la salud de respetar a los pacientes.",
      "Fundación Wiese. (1 de 2 de 2023). Fundación Wiese. Obtenido de Lista de 10 valores ciudadanos que deben conocer los niños.",
      "García, N. (24 de 10 de 2025). Ayuda en Acción. Obtenido de Qué son los valores humanos y los 10 valores más importantes.",
      "Instituto Nacional Electoral. (2020). FARO DEMOCRÁTICO. Obtenido de DERECHOS HUMANOS: La Dignidad."
    ]
  }
];

export const SCHOOL_CASES: SchoolCase[] = [
  {
    id: "caso-1",
    title: "Burlas a Estudiantes Menores",
    category: "Asimetría de Edad & Jerarquía Social",
    iconName: "Baby",
    problem: "Estudiantes de cursos superiores burlándose de niños de básica, minimizando o ignorando sus comentarios como si su voz no tuviera valor.",
    schoolContext: "Pasillos, canchas deportivas y recreos de la UE Santa María Eufrasia.",
    ethicalSolution: "Comprender que la madurez física o académica no otorga un estatus ontológico superior. Los niños son portadores de la misma dignidad incondicional y merecen ser escuchados con paciencia y consideración.",
    philosophicalLesson: "La dignidad no es inversamente proporcional a la edad. El respeto a la infancia refleja el nivel ético de una comunidad educativa.",
    scenarioQuestion: "Ves que en el recreo un estudiante de curso superior se burla de un niño de primaria que tropezó y derramó sus lápices. ¿Qué actitud refleja la ética del ensayo?",
    options: [
      {
        text: "Ignorar la situación porque los niños deben aprender a defenderse solos en el patio.",
        isEthical: false,
        feedback: "Incorrecto: La indiferencia avala la humillación pública y normaliza la asimetría injusta."
      },
      {
        text: "Acercarse, ayudar al niño con empatía e invitar al estudiante mayor a reflexionar sin insultarlo ni atacarlo.",
        isEthical: true,
        feedback: "¡Excelente! Aplica el principio de proteger la dignidad del niño y señalar la mala conducta del compañero mayor sin rebajarse al insulto."
      },
      {
        text: "Insultar y humillar públicamente al estudiante mayor para que sienta lo mismo.",
        isEthical: false,
        feedback: "Inadecuado: Repagar irrespeto con irrespeto destruye la convivencia y despoja al otro de dignidad."
      }
    ]
  },
  {
    id: "caso-2",
    title: "Impulso Emocional y Reclamo a Docentes",
    category: "Gestión de la Frustración y Asertividad",
    iconName: "Flame",
    problem: "Alumnos enfurecidos por una baja calificación o sanción que confrontan al profesor mediante gritos, sarcasmo o descalificaciones personales.",
    schoolContext: "Salones de clase tras la entrega de evaluaciones o llamados de atención.",
    ethicalSolution: "Separar el desacuerdo legítimo con la nota pedagógica de la relación humana con el educador. Se puede solicitar una recalificación con argumentos rigurosos sin agredir verbalmente ni vulnerar la investidura humana del docente.",
    philosophicalLesson: "El enojo no suspende el deber ético del respeto. Se puede ser firme en el argumento sin ser agresivo en el trato.",
    scenarioQuestion: "Recibes una calificación con la que estás en total desacuerdo y sientes ira. ¿Cuál es el camino ético según el ensayo?",
    options: [
      {
        text: "Gritar en medio de la clase y acusar al docente de favoritismo para desahogar la frustración.",
        isEthical: false,
        feedback: "Incorrecto: Deja que el sesgo emocional degrade la relación y atente contra el clima de aula."
      },
      {
        text: "Aguardar el momento propicio, solicitar una revisión respetuosa con base en la rúbrica y dialogar constructivamente.",
        isEthical: true,
        feedback: "¡Perfecto! Demuestra madurez ética: defiende tu derecho al aprendizaje y a la justicia académica preservando la dignidad mutua."
      },
      {
        text: "Quedarse callado con rencor y luego burlarse del profesor en redes sociales o grupos privados.",
        isEthical: false,
        feedback: "Inadecuado: La agresión pasiva o cobarde quebranta la honestidad y el respeto universal."
      }
    ]
  },
  {
    id: "caso-3",
    title: "Exclusión Social por Gustos o Aficiones",
    category: "Diversidad, Pluralismo e Inclusión",
    iconName: "Users",
    problem: "Aislar sistemáticamente a compañeros en trabajos grupales o descansos porque escuchan otra música, visten distinto o poseen intereses poco convencionales.",
    schoolContext: "Elección de grupos de trabajo, actividades extracurriculares y círculos sociales.",
    ethicalSolution: "Entender que la afinidad afectiva no es requisito para el trato digno e inclusivo. No se requiere ser el mejor amigo de todos, pero sí garantizar un entorno seguro donde nadie sea marginado.",
    philosophicalLesson: "La homogeneidad es una ilusión; la diversidad es riqueza. Respetar implica valorar la singularidad del prójimo.",
    scenarioQuestion: "El profesor organiza grupos de 4 integrantes y queda sin grupo un compañero con gustos excéntricos del que muchos se apartan. ¿Cómo actuarías?",
    options: [
      {
        text: "Negarse a recibirlo en el grupo para no arriesgar la nota ni tener que conversar con alguien diferente.",
        isEthical: false,
        feedback: "Incorrecto: Segrega por prejuicio superficial y viola el principio de trato humano igualitario."
      },
      {
        text: "Aceptarlo con desdén y no permitirle hablar ni opinar durante la elaboración del trabajo.",
        isEthical: false,
        feedback: "Incorrecto: Es una exclusión encubierta que denigra su capacidad y dignidad intelectual."
      },
      {
        text: "Invitarlo con cordialidad al equipo, coordinar juntos la tarea y escuchar sus aportes con apertura.",
        isEthical: true,
        feedback: "¡Magnífico! Construye un verdadero 'Espejo de Paz' y fomenta una comunidad educativa solidaria e integradora."
      }
    ]
  }
];

export const CITATIONS: Citation[] = [
  {
    id: "cite-beach",
    authorYear: "Beach, M. (2007)",
    source: "National Library of Medicine / PMC1852905",
    title: "¿Qué significa \"respeto\"? Explorando la obligación moral de los profesionales de la salud de respetar a los pacientes",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1852905/",
    annotation: "Analiza la naturaleza del respeto como deber moral incondicional hacia toda persona que se encuentra bajo cuidado, sentando bases bioéticas aplicables a la convivencia general."
  },
  {
    id: "cite-wiese",
    authorYear: "Fundación Wiese. (2023)",
    source: "Blog Institucional de Educación y Ciudadanía",
    title: "Lista de 10 valores ciudadanos que deben conocer los niños",
    url: "https://www.fundacionwiese.org/blog/es/valores-ciudadanos-que-deben-conocer-los-ninos",
    annotation: "Define el respeto cívico como el reconocimiento explícito de las capacidades, derechos y valor intrínseco de cada ciudadano desde la infancia."
  },
  {
    id: "cite-garcia",
    authorYear: "García, N. (2025)",
    source: "Ayuda en Acción — Portal Educativo",
    title: "Qué son los valores humanos y los 10 valores más importantes",
    url: "https://ayudaenaccion.org/blog/educacion/valores-humanos-mas-importantes/",
    annotation: "Enfatiza que los valores humanos constituyen el verdadero ADN ético y moral de la sociedad, guiando la convivencia positiva en todos los espacios comunitarios."
  },
  {
    id: "cite-ine",
    authorYear: "Instituto Nacional Electoral — INE. (2020)",
    source: "Faro Democrático",
    title: "Derechos Humanos: La Dignidad",
    url: "https://farodemocratico.ine.mx/la-dignidad/",
    annotation: "Explica cómo la dignidad humana es el cimiento de los derechos humanos y la democracia, advirtiendo sobre el sesgo emocional que condiciona el trato interpersonal."
  }
];

export const INITIAL_PEACE_LEAVES: PeaceCommitment[] = [
  {
    id: "leaf-1",
    author: "Melani Flores",
    grade: "2do BGU “A”",
    text: "Me comprometo a escuchar siempre a quien piensa diferente antes de juzgar sus razones.",
    date: "24 Sep 2026",
    tag: "Escucha Activa"
  },
  {
    id: "leaf-2",
    author: "Matías Palacios",
    grade: "2do BGU “A”",
    text: "Separar la crítica hacia una idea equivocada del valor inmutable de la persona que la sostiene.",
    date: "24 Sep 2026",
    tag: "Dignidad Humana"
  },
  {
    id: "leaf-3",
    author: "Adrián Jiménez",
    grade: "2do BGU “A”",
    text: "Defender con respeto a los estudiantes menores frente a cualquier tipo de burla o prepotencia.",
    date: "24 Sep 2026",
    tag: "Solidaridad"
  },
  {
    id: "leaf-4",
    author: "Abigail Ruíz",
    grade: "2do BGU “A”",
    text: "Mantener la serenidad y la empatía en momentos de desacuerdo con docentes y compañeros.",
    date: "24 Sep 2026",
    tag: "Asertividad"
  },
  {
    id: "leaf-5",
    author: "Martín Zapata",
    grade: "2do BGU “A”",
    text: "Fomentar la inclusión en grupos de estudio sin importar aficiones o estilos personales.",
    date: "24 Sep 2026",
    tag: "Inclusión"
  }
];
