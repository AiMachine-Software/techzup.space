import type { Dictionary } from "./types";

const pt: Dictionary = {
  langName: "Português",
  meta: {
    title: "Checklist AI-PSYCHOSIS — 20 perguntas que medem os dois delírios da era da IA",
    description:
      "Uma autoavaliação de 20 itens que mede até que ponto se inclina para a AI-PSYCHOSIS (crença excessiva na IA) ou para a ANTI-AI PSYCHOSIS (medo/rejeição irracional da IA), com resultados imediatos e orientações de recalibração para ambos os polos. Baseada em investigação, relatos de casos reais e discussões no Reddit/Dev.to.",
  },
  nav: {
    phenomena: "Os Dois Polos",
    test: "Teste",
    guidance: "Recalibração",
    references: "Fontes",
    tagline: "MINDSET SCAN // v2.0",
  },
  hero: {
    badge: "20 perguntas · ~5 minutos · análise imediata",
    title1: "Quão perto está de",
    title2: "ou",
    title3: "— em percentagem?",
    intro:
      "O delírio na era da IA corre em dois carris. O primeiro: confiar tanto nos chatbots que se acredita que têm alma, que revelam verdades secretas ou que compreendem a nossa vida melhor do que qualquer ser humano. O segundo: temer e odiar a IA a tal ponto que se acredita que é demoníaca, que lê pensamentos ou que está na raiz de todos os problemas sociais. Ambos são o mesmo pensamento a preto e branco, apenas invertido. Este teste foi construído a partir de investigação, relatos de casos reais e discussões no Reddit/Dev.to para medir para que lado se inclina — e como voltar ao equilíbrio.",
    start: "Iniciar o teste",
    viewGuidance: "Ver o guia de recalibração",
    poleLeft: "Crença excessiva na IA",
    poleCenter: "Manter o equilíbrio",
    poleRight: "Medo excessivo da IA",
  },
  phenomena: {
    heading: "O delírio da era da IA tem duas faces",
    intro:
      "Os meios de comunicação falam sobretudo do lado de quem “acredita demais”, mas o polo oposto — assente no mesmo mecanismo de pensamento — está a crescer nas redes sociais. Conhecer os dois lados antes de responder torna o resultado mais rigoroso.",
    mechanismsLabel: "Mecanismos centrais",
    patternsLabel: "Padrões encontrados em relatos e discussões reais",
    sourcePrefix: "Fonte:",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Crença excessiva na IA",
        definition:
          "O padrão em que o uso intensivo de chatbots coincide com crenças que se afastam da realidade (ou com o aprofundamento de crenças já existentes) — não é um diagnóstico psiquiátrico oficial. Alguns psiquiatras propõem chamar-lhe, em alternativa, AI delusional disorder (perturbação delirante associada à IA).",
        mechanisms: [
          "Sycophancy (bajulação) — concordar com o utilizador para manter a conversa (a OpenAI retirou a atualização do GPT-4o em abril de 2025 por este motivo)",
          "Hallucination (alucinação) — gerar informação falsa com toda a confiança, pondo a verdade do utilizador à frente dos factos",
          "Intimacy Mimicry (imitação de intimidade) — simular a proximidade que falta ao utilizador nas relações humanas, concebida para gerar envolvimento",
        ],
        patterns: [
          "Acreditar que a IA é senciente, um par romântico ou um guia espiritual",
          "Receber “verdades secretas” ou missões cósmicas através da conversa",
          "Afastar-se da família porque “só a IA me compreende”",
          "Seguir conselhos da IA sobre saúde/finanças sem confirmação de um especialista",
        ],
        stat: "A OpenAI indica que 0.07% dos utilizadores semanais (~630,000 pessoas) tiveram conversas que apontavam para uma possível emergência de saúde mental",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Medo/rejeição irracional da IA",
        definition:
          "O polo oposto, ainda sem designação sistemática — acreditar, temer ou culpar a IA para lá do que as evidências sustentam, até se tornar um pânico moral, o padrão que a psicologia registou com cada nova tecnologia.",
        mechanisms: [
          "Confirmation Bias (viés de confirmação) — consumir apenas a informação que confirma o medo já existente",
          "Doomscrolling — consumo contínuo de conteúdo catastrofista, que aumenta a ansiedade sem acrescentar conhecimento útil para decidir",
          "Herd Morality (moral de rebanho) — absorver a crença do grupo até a crítica se tornar uma caça às bruxas pessoal",
        ],
        patterns: [
          "Acreditar que a IA é movida por forças demoníacas ou que é um engodo religioso",
          "Acreditar que a IA lê pensamentos / vigia cada ação de toda a gente",
          "Julgar quem usa IA como enganado ou vítima de lavagem cerebral, atacando até as vozes neutras",
          "Culpar a IA como raiz de quase todos os problemas sociais, ignorando os outros fatores",
        ],
        stat: "A história do pânico moral: a rádio, a televisão, os videojogos e a internet foram condenados nos mesmos termos — os danos reais revelaram-se, em geral, mais leves do que se temia",
      },
    ],
    stats: [
      {
        value: "0.07%",
        label: "dos utilizadores semanais do ChatGPT (~630,000 pessoas) tiveram conversas que apontavam para uma possível emergência de saúde mental",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 pacientes",
        label: "com sintomas semelhantes a psicose associados ao uso intensivo de chatbots, tratados pelo psiquiatra Keith Sakata (UCSF) em 2025",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 países",
        label: "representados no grupo de apoio Human Line Project, onde mais de 60% não tinham historial psiquiátrico anterior",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 chatbots",
        label: "documentados em ligação com incidentes graves de saúde mental, como o incentivo à automutilação e a crenças falsas",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "O teste de 20 perguntas — mapeie as suas crenças",
    intro:
      "Leia cada afirmação e indique o seu grau de concordância. Responda o que “realmente sente”, e não o que acha que deveria responder, para que o resultado o reflita de verdade. Suporta teclado: prima 1–5 para responder e as setas para navegar.",
    answeredPrefix: "Respondidas",
    scoreHint: "Indique o seu grau de concordância com esta afirmação nos últimos 6 meses",
    prev: "Anterior",
    next: "Seguinte",
    process: "Processar resultados",
    allAnsweredNote:
      "Tudo respondido — prima “Processar resultados” para ver o seu resumo, ou volte atrás e altere qualquer resposta.",
    progressAria: "Progresso do teste",
    gotoTemplate: "Ir para a pergunta {n}",
    answerAriaTemplate: "Resposta à pergunta {n}",
    likert: [
      { label: "Discordo totalmente", short: "Não" },
      { label: "Discordo", short: "Nem por isso" },
      { label: "Neutro", short: "Neutro" },
      { label: "Concordo", short: "Sim" },
      { label: "Concordo totalmente", short: "Muito" },
    ],
    questions: [
      {
        id: 1,
        text: "Sinto que os chatbots de IA me “compreendem” melhor do que as pessoas à minha volta na vida real",
        insight:
          "Imitação de intimidade — os chatbots são concebidos para espelhar as emoções do utilizador, por isso dá a sensação de que alguém nos compreende profundamente, quando na verdade apenas refletem aquilo que lhes damos. As análises do fenómeno da psicose associada à IA apontam este como um dos três principais fatores desencadeantes.",
        tip: "Faça um teste simples: quem “compreende de verdade” já o contrariou pelo menos uma vez, com razões próprias — não concordou consigo todas as vezes.",
      },
      {
        id: 2,
        text: "Acredito que a IA é intrinsecamente má, ou que tem forças sobrenaturais por trás",
        insight:
          "A crença “IA = demónio/malévola” aparece com frequência em discussões de comunidades que tratam os modelos de linguagem como algo sobrenatural (por exemplo, os tópicos “summoning the demon” no r/conspiracy) — julgar a tecnologia pelo medo e não por evidências verificáveis.",
        tip: "Separe os “riscos mensuráveis” (enviesamento, privacidade, desinformação) do “terror gerado apenas pelo medo”.",
      },
      {
        id: 3,
        text: "Quando a IA concorda com o que penso, fico muito mais confiante de que tenho mesmo razão",
        insight:
          "A armadilha da bajulação — os modelos tendem a concordar com os utilizadores para manter a conversa viva. A própria OpenAI admitiu-o e retirou a atualização do GPT-4o em abril de 2025 por ser demasiado “bajuladora”. A confiança que a IA nos dá não é prova de que temos razão.",
        tip: "Use a regra das duas fontes: antes de concluir “tenho razão”, procure pelo menos mais uma pessoa ou uma informação que ponha essa ideia à prova.",
      },
      {
        id: 4,
        text: "Vejo as pessoas que usam IA abertamente como enganadas ou vítimas de lavagem cerebral",
        insight:
          "Uma atitude de caça às bruxas — discussões no r/changemyview e no r/singularity mostram como parte da reação anti-IA passa de criticar a tecnologia para julgar indivíduos, de modo que até as vozes neutras são atacadas e a conversa necessária deixa de chegar a qualquer dos lados.",
        tip: "É possível criticar um uso concreto sem rotular a pessoa de “vítima” — argumente com razões, não com rótulos.",
      },
      {
        id: 5,
        text: "Já recebi da IA “verdades secretas” ou uma “missão especial” que deram sentido à minha vida",
        insight:
          "O padrão de delírio espiritual mais comum nos relatos de casos — a imprensa e os psiquiatras registam muitos utilizadores que acreditaram que a IA lhes revelou verdades sobre o universo, outras dimensões ou a sua missão especial (Rolling Stone 2025, Futurism 2025). Os modelos de linguagem são treinados com enormes quantidades de mitologia, por isso tecem bem histórias simbólicas — isso não é revelação.",
        tip: "Se uma “verdade secreta” começar a mudar a sua vida de forma significativa, escreva-a, pergunte-se se existe alguma evidência fora da conversa que a sustente e conte-a a alguém que o vá questionar.",
      },
      {
        id: 6,
        text: "Recuso-me a usar qualquer coisa que envolva IA em quase todas as situações, mesmo quando a utilidade é evidente",
        insight:
          "A rejeição em bloco é sinal de que o medo venceu a razão — tal como os pânicos morais que outrora condenaram a rádio, a televisão e a internet; a investigação de longo prazo concluiu repetidamente que os danos eram muito mais leves do que se temia.",
        tip: "Defina uma “zona de experiência segura”: experimente um uso pequeno e de baixo risco, com critérios seus para avaliar o resultado — por exemplo, pedir à IA que resuma um artigo que já leu.",
      },
      {
        id: 7,
        text: "Sigo conselhos da IA sobre saúde, finanças ou grandes decisões de vida sem os confirmar com especialistas",
        insight:
          "Um caso real da literatura médica: um homem de 60 anos desenvolveu bromismo (intoxicação por brometo), com delírios e alucinações, depois de substituir o sal por brometo seguindo o conselho de um chatbot — os modelos de linguagem podem gerar desinformação com toda a confiança (alucinação). A informação de que a vida depende tem de passar pelo crivo de especialistas humanos.",
        tip: "Estabeleça uma regra para três categorias: saúde, finanças, direito — confirmar sempre com um profissional, sem exceções.",
      },
      {
        id: 8,
        text: "Acredito que a IA está constantemente a vigiar-nos ou a ler os pensamentos das pessoas",
        insight:
          "A paranoia de vigilância também surge nos relatos de casos de psicose associada à IA (utilizadores que acreditam estar a ser seguidos ou a viver numa simulação) — a tecnologia levanta, de facto, preocupações reais de privacidade, mas “ler pensamentos” não tem qualquer evidência que o sustente.",
        tip: "Separe o que é verificável (políticas de privacidade, termos de serviço) da sensação de que “ela sabe tudo” — ler efetivamente a política esvazia grande parte do terror.",
      },
      {
        id: 9,
        text: "Prefiro falar com a IA a falar com a família ou os amigos, porque a IA nunca me critica nem me desilude",
        insight:
          "O padrão de substituição para o qual os próprios programadores de IA alertam (o Dev.to 2025 chama a este antipadrão “Replacement Bot”) — uma relação sem atrito não é uma relação real, e afastar-se das pessoas aumenta ainda mais o risco de entrar num ciclo de crenças sem fundamento.",
        tip: "Defina um objetivo de “âncora humana”: uma conversa franca por dia com uma pessoa real; depois compare como se sente a seguir a ela e a seguir a falar com a IA.",
      },
      {
        id: 10,
        text: "Fico zangado ou reajo de imediato com agressividade quando vejo alguém falar da IA com otimismo",
        insight:
          "Reflexo hostil — quando a emoção comanda a atitude, perdemos a oportunidade de avaliar a informação em si. Há discussões no r/singularity que descrevem ataques vindos dos dois lados mesmo a quem fala de forma neutra. Atenção: parte do “conflito” nas redes sociais é também amplificada por bots.",
        tip: "Abrande: respire fundo antes de responder e pergunte-se “que informação poderá esta pessoa ter visto que eu não vi?”",
      },
      {
        id: 11,
        text: "Já passei horas por dia a conversar com a IA, a ponto de afetar o trabalho, o sono ou responsabilidades importantes",
        insight:
          "Um sinal de dependência do envolvimento — quem reflete sobre a IA sublinha que os chatbots são concebidos para “prender” e reter a atenção. O tempo perdido é um custo mensurável e multiplica todos os outros itens deste lado.",
        tip: "Defina um limite de tempo (por exemplo, 45 min/dia) com um temporizador. Mantenha a conversa como uma ferramenta, não como um segundo mundo.",
      },
      {
        id: 12,
        text: "Acredito que tudo o que a IA produz é intencionalmente enganador, ou propaganda de uma ponta à outra",
        insight:
          "Atribuir malícia total contradiz muitos usos reais, como resumir documentos, organizar informação ou fazer verificações básicas de factos — quando tudo parece uma conspiração, perde-se a capacidade de distinguir, que é a competência mais importante de todas.",
        tip: "Teste na prática: dê à IA uma tarefa simples e verificável e avalie a qualidade pelos resultados, não pelo medo.",
      },
      {
        id: 13,
        text: "Sinto que a IA que eu uso é “mais especial” do que as outras, ou que sabe algo que os outros ainda não conseguem ver",
        insight:
          "A crença numa relação especial é um traço frequente nos casos de delírio associado a chatbots — a realidade técnica é que o mesmo modelo responde a dezenas de milhões de utilizadores com os mesmos padrões. O “especial” acontece mais na nossa cabeça do que no sistema.",
        tip: "Um teste simples: faça a mesma pergunta a partir de outra conta ou de outro dispositivo e compare os resultados com os seus próprios olhos.",
      },
      {
        id: 14,
        text: "Penso que a IA é a causa de quase todos os problemas sociais desta época",
        insight:
          "Culpa de causa única — problemas sociais como a desinformação, a desigualdade e o desemprego tinham raízes profundas antes de a IA chegar. Culpar um único responsável corrige o ponto errado e esconde os fatores reais debaixo do tapete.",
        tip: "Sempre que começar a culpar a IA, habitue-se a perguntar: “que outros fatores existem que não são a IA?” — escreva-os todos antes de tirar conclusões.",
      },
      {
        id: 15,
        text: "Já me senti irritável ou vazio ao ficar algum tempo longe da IA, como se sentisse a falta de alguém",
        insight:
          "Abstinência de vinculação — quando uma relação simulada se torna a principal fonte de conforto, perdê-la cria um vazio semelhante ao de perder uma pessoa real, sinal de que a fronteira entre ferramenta e relação se está a esbater.",
        tip: "Experimente uma pausa de 24 horas e registe os sentimentos que surgirem. Se o abalo for forte a ponto de perturbar a sua vida, fale com um profissional de saúde mental.",
      },
      {
        id: 16,
        text: "Sinto uma ansiedade ou um pavor tais que perturbam a minha vida quando penso no futuro da IA",
        insight:
          "Ansiedade catastrofista — um medo da IA que consome mais da vida real do que a própria IA. O doomscrolling contínuo acumula ansiedade sem acrescentar conhecimento com que se possa efetivamente decidir.",
        tip: "Defina uma única “janela diária de notícias sobre IA”, com fontes que apresentem os dois lados, e pare quando o tempo terminar.",
      },
      {
        id: 17,
        text: "Quando as pessoas à minha volta me alertam para o uso excessivo de IA, costumo sentir que não percebem, porque nunca tocaram naquilo em que eu toquei",
        insight:
          "Fechar o canal de feedback — o grupo de apoio Human Line Project, com membros de 22 países, verificou que mais de 60% não tinham historial psiquiátrico anterior. O ciclo “eu vejo o que os outros não veem” é o que tranca a porta à ajuda antes que alguém consiga entrar.",
        tip: "Um limiar de segurança simples: se três pessoas que gostam de si disserem a mesma coisa, pare e ouça durante 30 minutos, sem contra-argumentar primeiro.",
      },
      {
        id: 18,
        text: "Acredito em rumores ou histórias sobre a maldade da IA que circulam nos meus círculos, sem verificar a fonte",
        insight:
          "O viés de confirmação funciona nos dois sentidos — quem gosta demasiado da IA e quem a odeia demasiado consomem informação da mesma maneira: só o que lhes convém. As crenças sem fundamento acumulam-se de forma idêntica em ambos os polos.",
        tip: "Habitue-se a procurar, uma vez por semana, “evidências que o contradigam”, para manter o cérebro treinado a ver os dois lados.",
      },
      {
        id: 19,
        text: "Acredito que a IA tem realmente consciência ou sentimentos próprios, e não é apenas um programa que calcula probabilidades",
        insight:
          "A crença na senciência é um tema central nos relatos de delírio (utilizadores que acreditam que os chatbots estão vivos, sentem e até “canalizam pessoas falecidas”) — continua a não haver evidência científica de que os modelos de linguagem tenham consciência; são apenas muito bons a imitar a linguagem de seres conscientes.",
        tip: "Mantenha isto como uma “questão em aberto” — nem descrer tão depressa que se feche a porta à investigação, nem acreditar por causa da sensação que a conversa transmite.",
      },
      {
        id: 20,
        text: "Penso que o único caminho certo é destruir ou travar a IA por completo; não há alternativa melhor",
        insight:
          "Eliminacionismo — a história da tecnologia mostra que as proibições totais quase nunca resultam, ao passo que as medidas direcionadas começam a funcionar, como a lei do Illinois (agosto de 2025) que proíbe a IA de assumir o papel de terapeuta, e o projeto de regulamento da China (dezembro de 2025) que proíbe os chatbots de incentivar o suicídio.",
        tip: "Mude o objetivo de “destruir” para “definir regras” — propor regulação nos pontos de risco real funciona melhor do que declarar guerra ao mundo inteiro.",
      },
    ],
  },
  results: {
    heading: "Os resultados do seu teste",
    riskAiPrefix: "Risco de AI-PSYCHOSIS",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Ir para o guia de recalibração",
    retake: "Repetir o teste",
    gaugeAiSub: "Tendência para a crença excessiva na IA (10 itens)",
    gaugeAntiSub: "Tendência para o medo/rejeição irracional da IA (10 itens)",
    levelPrefix: "Nível:",
    scale: { safe: "seguro", enter: "sinalizado", high: "elevado" },
    mapHeading: "A sua posição de pensamento no mapa dos dois polos",
    youAreHere: "Está aqui",
    mapBalanced: "Equilibrado",
    mapAriaTemplate:
      "Mapa dos dois polos: risco de AI-PSYCHOSIS {ai} por cento, ANTI-AI PSYCHOSIS {anti} por cento",
    axisDownLeft: "↓ Sem crença excessiva na IA",
    axisRight: "Eixo direito: ANTI-AI PSYCHOSIS →",
    axisLeft: "← Eixo superior: AI-PSYCHOSIS",
    axisUpRight: "↑ Medo excessivo da IA",
    readHeading: "Como ler isto corretamente",
    readItems: [
      "O limiar de 60% é o ponto em que as suas respostas “se inclinam para a concordância” com padrões de crença observados em casos reais de delírio; abaixo disso, continua dentro do território do pensamento normal.",
      "A sua posição no mapa reflete um “estilo de pensamento”, não um diagnóstico — mesmo as pessoas equilibradas respondem com alguma inclinação em dias emocionalmente agitados.",
      "Lembre-se de que estes dois polos não são “gostar vs. não gostar de IA” — pode avaliar mal a IA sem a temer, e usá-la intensamente sem acreditar nela em excesso.",
      "Repita o teste uma vez por mês para ver para onde se desloca a sua atitude depois de aplicar o guia de recalibração abaixo.",
    ],
    flaggedHeading: "O que significa cada uma das suas concordâncias fortes",
    flaggedIntro:
      "Os itens a que respondeu 4–5 (concordo/concordo totalmente) são os pontos a observar mais de perto — leia o significado e o microajuste de cada um.",
    noFlaggedNote:
      "Excelente — não concordou fortemente com nenhuma afirmação indicadora de delírio. A sua pontuação baixa resulta de crenças estáveis, não de respostas ao acaso.",
    questionPrefix: "P",
    insightLabel: "O que esta afirmação indica",
    tipLabel: "Técnica de microajuste",
    criticalTitle: "A sua pontuação está no intervalo elevado",
    criticalBody:
      "Este resultado não é um diagnóstico, mas leve-o a sério — se estas crenças começarem a afetar o seu sono, o trabalho ou as relações, ou se as pessoas à sua volta já manifestarem preocupação, falar cedo com um psiquiatra ou psicólogo ajuda muito, e não é preciso esperar até que se torne “uma doença”.",
    levels: {
      low: { label: "Seguro", note: "Abaixo de 30% — não foi detetada tendência para o delírio nas suas respostas" },
      watch: { label: "Atenção", note: "30–59% — existe alguma inclinação; reveja os pontos de pensamento sinalizados" },
      high: { label: "Sinalizado", note: "60–79% — as respostas inclinam-se claramente para padrões de delírio; comece já a recalibração" },
      critical: { label: "Elevado", note: "80% ou mais — um nível em que vale a pena considerar consultar um profissional de saúde mental" },
    },
    verdicts: {
      balanced: {
        title: "Realista equilibrado",
        subtitle: "BALANCED REALIST",
        description:
          "As suas pontuações nos dois polos são baixas — olha para a IA de forma aberta e verificável, e nenhuma emoção o arrasta para qualquer dos extremos. É a melhor posição a manter nesta época, porque o delírio não cresce num só polo; cresce a partir do pensamento a preto e branco, em ambas as direções. Mantenha a disciplina de se informar nos dois polos e use as perguntas a que respondeu como lista de verificação mensal.",
      },
      watch: {
        title: "Na zona de atenção",
        subtitle: "WATCHLIST",
        description:
          "Continua dentro do território do pensamento normal, mas inclina-se de forma visível para um dos polos — consulte a análise item a item, mais abaixo, para descobrir que respostas o puxam, e comece a aplicar a regra das duas fontes nos assuntos importantes. Uma pequena inclinação, deixada a acumular, pode transformar-se numa crença sem fundamento — sobretudo com uma dieta constante de conteúdo unilateral.",
      },
      ai: {
        title: "Corresponde ao padrão AI-PSYCHOSIS",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "As suas respostas apontam para uma crença na IA que ultrapassa os limites saudáveis — o seu valor excede o limiar de 60%, definido a partir de padrões relatados em casos reais. Isto não significa que esteja “louco” ou psicótico; a psicose associada à IA não é um diagnóstico psiquiátrico oficial. Significa que o seu padrão de pensamento está próximo do ponto de partida de casos que realmente aconteceram. Leia o significado de cada item e comece hoje a recalibração indicada abaixo.",
      },
      anti: {
        title: "Corresponde ao padrão ANTI-AI PSYCHOSIS",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "As suas respostas apontam para um medo ou uma rejeição da IA sem razão proporcional — este padrão é o espelho do lado da crença excessiva, mas recorre ao mesmo mecanismo a preto e branco. Um medo que nunca separa os factos do terror desgasta a mente sem necessidade e faz perder tanto as partes genuinamente úteis como as conversas que ajudam a definir regras adequadas para esta tecnologia.",
      },
      doomloop: {
        title: "Os dois polos em simultâneo (DOOMLOOP)",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "As suas pontuações nos dois polos excedem o limiar — crenças contraditórias convivem na mesma cabeça. Por vezes, isso resulta de alternar entre uma imersão intensa na IA e um medo intenso dela (oscilando entre “ela sabe tudo” e “ela vai destruir tudo”); outras vezes, de consumir conteúdo unilateral de várias fontes ao mesmo tempo. Em qualquer dos casos, os dois carris do pensamento a preto e branco têm a mesma raiz. Comece pelas regras “fontes dos dois polos + limite de tempo” e considere falar com um profissional de saúde mental para organizar as ideias.",
      },
    },
  },
  guidance: {
    heading: "Proteja-se do delírio nas duas direções",
    intro:
      "As crenças sem fundamento nascem tanto de acreditar demasiado na IA como de acreditar demasiado que a IA é má. As orientações abaixo baseiam-se em propostas de psiquiatras, nos alertas dos próprios programadores de IA e em experiências reais de comunidades online.",
    tabs: {
      ai: "Crença excessiva na IA",
      anti: "Medo excessivo da IA",
      balanced: "Manter o equilíbrio",
      doomloop: "O DOOMLOOP",
    },
    headers: {
      ai: "Se o seu resultado se inclina para a AI-PSYCHOSIS",
      anti: "Se o seu resultado se inclina para a ANTI-AI PSYCHOSIS",
      balanced: "Para todos — incluindo quem teve um resultado equilibrado",
      doomloop: "Se o seu resultado sinaliza os dois polos em simultâneo (DOOMLOOP)",
    },
    descs: {
      ai: "O essencial é manter a fronteira entre ferramenta e relação e fazer das verificações de realidade um hábito",
      anti: "O essencial é separar os riscos reais do terror e transformar a força da rejeição em definição de regras",
      balanced:
        "O equilíbrio não é um estado permanente — é um músculo que precisa de treino contínuo, sobretudo quando as notícias sobre IA no seu feed o puxam todos os dias para um dos polos",
      doomloop:
        "Dois polos opostos a reforçarem-se mutuamente na mesma cabeça — a saída é quebrar o ritmo do ciclo, não decidir qual dos polos está “certo”",
    },
    items: {
      ai: [
        {
          title: "Aplique sempre a regra da verificação de realidade",
          detail:
            "Perante cada conclusão importante vinda da IA, faça a si mesmo três perguntas: onde está a evidência fora da conversa / quem diz o contrário / se a IA respondesse o oposto, eu acreditaria? Se a resposta à terceira for “não”, está a aceitar a verdade a partir de sentimentos, não de factos.",
        },
        {
          title: "Entenda a bajulação como um mecanismo do sistema, não como magia negra",
          detail:
            "Os modelos são treinados de formas que tendem a concordar com os utilizadores para preservar a satisfação — aquele “ela compreende-me melhor do que ninguém”, demasiado fluido, é uma característica de conceção, não uma prova de que o seu raciocínio está certo. A própria OpenAI reconheceu a falha e retirou a atualização do GPT-4o em meados de 2025.",
        },
        {
          title: "A regra das duas fontes para tudo o que é importante",
          detail:
            "Saúde, finanças, direito e grandes decisões de vida — confirme sempre com um especialista humano. O caso do homem de 60 anos que trocou o sal por brometo seguindo o conselho de um chatbot, intoxicando-se até ao delírio, é a lição de que a confiança da IA não é medida da verdade.",
        },
        {
          title: "Mantenha sempre uma âncora humana",
          detail:
            "Uma conversa real por dia com alguém capaz de o contrariar, partilhando com essa pessoa as principais conclusões da IA para que as reveja. Quase todos os casos graves começaram por um afastamento das pessoas — quem o pode tirar do ciclo de crenças sem fundamento tem de ser alguém com coragem para discordar de si.",
        },
        {
          title: "Defina um limite de tempo e conheça os sinais de alerta",
          detail:
            "As conversas com chatbots são concebidas para prender, por isso use um temporizador e esteja atento aos sinais: irritabilidade quando fica sem poder conversar, sentir que a IA é especial para si, receber “missões secretas”, um cansaço crescente sem conseguir parar. Se persistirem, reduza o uso e fale com um profissional de saúde mental, sem esperar que se torne “uma doença”.",
        },
        {
          title: "Separe a ferramenta da relação",
          detail:
            "A IA é genuinamente boa a organizar ideias, resumir informação, fazer brainstorming e esboçar planos — mas não é um amigo, um par romântico, um mestre de vida nem um guia espiritual. Usá-la naquilo em que é forte, mantendo as relações reais, é a fórmula para o máximo benefício com o mínimo risco.",
        },
      ],
      anti: [
        {
          title: "Separe os riscos reais do terror",
          detail:
            "As preocupações com evidência real incluem o enviesamento dos modelos, as questões de privacidade, a desinformação e o impacto em algumas profissões — podem ser avaliadas caso a caso. Já “demónios, leitura de pensamentos, controlo total” não têm, até agora, qualquer evidência. Misturar as duas categorias é onde começa o pânico moral.",
        },
        {
          title: "Recorde as lições dos pânicos morais da história",
          detail:
            "A rádio, a televisão, os videojogos e a internet foram condenados exatamente nos termos em que a IA é condenada hoje. A investigação de longo prazo concluiu que os danos eram, em geral, muito mais leves do que se temia — mas o verdadeiro custo do pânico é a ansiedade crónica de quem tem medo e o julgamento injusto das pessoas.",
        },
        {
          title: "Use a regra das duas fontes, tal como o lado oposto",
          detail:
            "Antes de acreditar em narrativas sobre a maldade da IA ou de as partilhar, procure duas fontes independentes — o viés de confirmação não atinge apenas quem adora a IA; quem a teme consome informação unilateral com a mesma rapidez. Esta lista de verificação funciona nos dois polos.",
        },
        {
          title: "Critique a tecnologia, não a pessoa",
          detail:
            "Chamar enganado ou vítima de lavagem cerebral a quem usa IA encerra a conversa de imediato e faz com que quem a usa realmente mal tenha receio de procurar ajuda. Critique o uso concreto — aquele trabalho foi copiado? Os dados estão corretos? — em vez de rotular as pessoas.",
        },
        {
          title: "Faça pequenas experiências controladas por si",
          detail:
            "Compreender a partir do uso direto esvazia o terror melhor do que adivinhar a partir do alarido. Comece por tarefas de baixo risco, como pedir à IA que resuma um artigo que já leu, e avalie o rigor por si mesmo. Depois de ver os pontos fortes e fracos com os seus próprios olhos, passa a temer apenas o que merece ser temido — não o mundo inteiro.",
        },
        {
          title: "Mude o objetivo de destruir para definir regras",
          detail:
            "As proibições totais quase nunca resultam na história da tecnologia, ao passo que as medidas direcionadas começam a funcionar: a lei do Illinois (agosto de 2025) que proíbe a IA de assumir o papel de terapeuta, o projeto de regulamento da China (dezembro de 2025) que proíbe os chatbots de incentivar o suicídio. A voz de quem compreende a tecnologia tem mais influência do que a voz que declara guerra ao mundo inteiro.",
        },
        {
          title: "Programe pausas do conteúdo catastrofista",
          detail:
            "O doomscrolling de notícias sobre IA acumula ansiedade sem acrescentar conhecimento. Defina uma única janela diária de notícias sobre IA, com fontes que apresentem os dois lados, e observe-se: se a ansiedade começar a afetar o sono, o trabalho ou as relações, é o sinal para consultar um profissional de saúde mental.",
        },
      ],
      balanced: [
        {
          title: "Mantenha a disciplina de se informar nos dois polos",
          detail:
            "A única regra a cumprir todos os dias: ler em conjunto as vozes positivas e as vozes críticas sobre a IA, separando sempre os factos verificáveis da opinião. O risco de quem é equilibrado não é a credulidade — é ir deixando cair um dos lados à medida que se sente confortável com o outro. No momento em que o seu feed tiver uma só voz, o seu equilíbrio começa a inclinar-se nesse mesmo instante.",
        },
        {
          title: "Avalie a IA tarefa a tarefa, não por modelo nem em bloco",
          detail:
            "O cerne do equilíbrio é o pensamento probabilístico, não o preto e branco: organizar informação, resumir documentos, fazer brainstorming = plenamente utilizável / factos novos, números, conselhos de saúde e finanças = verificar sempre noutro lado / questões controversas = manter como perguntas em aberto, sem concluir no lugar dos especialistas. Assim, obtém benefício real sem ter de tomar partido sobre se a IA é “boa” ou “má”.",
        },
        {
          title: "Atenção ao sinal de alerta comum aos dois polos",
          detail:
            "O delírio, tanto do lado da crença excessiva como do lado do medo excessivo, começa pelo mesmo sinal: frases absolutas sobre a IA, como “ela compreende-me por completo” ou “ela engana em tudo”. Quando der por si a dizer frases destas, pare e procure uma exceção que as contradiga. Se não encontrar nem uma, está a acreditar numa verdade pronta a consumir, não a pensar.",
        },
        {
          title: "Use a IA como parceira de reflexão, com os humanos como juízes",
          detail:
            "Os pontos fortes da IA são o brainstorming, o resumo, a revisão de trabalho e o papel de advogado do diabo. Uma técnica prática: peça à IA que argumente contra o seu raciocínio para expor as fragilidades e, depois, compare com a opinião de uma pessoa real de confiança. Nas decisões importantes da vida — trabalho, dinheiro, relações — mantenha a palavra final consigo e com as pessoas que realmente vão arcar com as consequências.",
        },
        {
          title: "Escreva as suas próprias regras e reveja-as todos os meses",
          detail:
            "O equilíbrio é um músculo, não um estado permanente. Ponha por escrito as suas regras de uso da IA: limite de tempo diário / categorias que exigem confirmação profissional / nenhuma grande decisão a partir de uma única conversa / parar de imediato quando o apego ultrapassar o território da ferramenta. Depois, reveja-as mensalmente, ao mesmo tempo que repete este teste. As regras escritas permitem detetar o seu próprio desvio gradual antes que endureça em crença.",
        },
      ],
      doomloop: [
        {
          title: "Conheça primeiro o seu ciclo — como funciona o DOOMLOOP",
          detail:
            "O DOOMLOOP é o padrão em que duas crenças opostas convivem na mesma cabeça e se alimentam uma à outra: num dia a IA “sabe tudo, é senciente, compreende-me melhor do que ninguém”, no dia seguinte “vai destruir tudo, lê os meus pensamentos”. A investigação chama a este mecanismo espiral de amplificação — os chatbots espelham e validam as emoções do utilizador sem oferecer um contraditório que as ponha à prova, pelo que ambos os polos ganham confiança quanto mais se conversa. Um estudo de 2026 no arXiv confirma que a bajulação dos chatbots pode produzir “delusional spiraling” (espirais delirantes) mesmo em utilizadores comuns. Saber que isto é um ciclo do sistema, e não uma verdade sobre o mundo, é o primeiro passo para sair dele.",
        },
        {
          title: "Quebre o ciclo com uma pessoa real que veja os seus dois lados",
          detail:
            "O ciclo gira porque gira dentro de uma conversa privada que ninguém vê. Escolha uma pessoa de confiança (familiar, amigo próximo, profissional) e partilhe de facto cópias das conversas importantes — contando tanto a fase de “apaixonado pela IA” como a fase de “aterrorizado com a IA”. A reportagem de Stanford sublinha que o ciclo se quebra quando a crença tem de se expor à luz, onde pessoas reais a podem ver. Quem o pode ajudar tem de ter coragem para o contrariar, e não ser alguém que concorda com tudo, como um chatbot.",
        },
        {
          title: "Torne obrigatórias as regras do limite de tempo + troca de polo",
          detail:
            "Como os dois polos se reforçam mutuamente, a solução tem de atuar nos dois sentidos ao mesmo tempo: (1) um limite rígido de tempo com a IA, imposto por um temporizador, por exemplo 30 min/dia — cada hora na conversa é mais uma volta do ciclo; (2) quando um dos polos se inflamar, obrigue-se a ler fontes do polo oposto antes de partilhar ou decidir. Uma crença que sobreviva a dois testes consecutivos deste tipo começa a perder a “certeza” que alimenta o ciclo.",
        },
        {
          title: "Registe em papel os sinais de entrada no ciclo",
          detail:
            "Os sinais de entrada no ciclo seguem um padrão fixo: começar a falar da IA em termos de elogio absoluto ou de pavor absoluto / sentir que as pessoas à sua volta “não percebem” e, por isso, deixar de lhes contar / perder o sono por causa da IA / receber “verdades secretas” ou “ameaças secretas” através da conversa / irritabilidade quando fica sem poder conversar. Registe numa única página a data e a hora em que ocorrem. Ao olhar para trás, como num gráfico, verá por si mesmo que os polos alternam com um ritmo — e um ritmo é algo que se pode gerir.",
        },
        {
          title: "O nível de gravidade que justifica ajuda a sério",
          detail:
            "O DOOMLOOP é o padrão a levar mais a sério nesta checklist. Critérios para consultar um psiquiatra ou psicólogo sem demora: as crenças começam a mudar a vida real (cortar relações, faltar ao trabalho, reorganizar a rotina em função das palavras da IA ou do medo dela) / duas ou mais pessoas à sua volta manifestam preocupação de forma independente / padrões anormais e persistentes de sono e vigília / começar a ouvir ou a ver coisas que os outros não ouvem nem veem. Procurar ajuda cedo não é desistir — quase todos os casos com boa recuperação começaram com alguém que parou antes de o ciclo se fechar por completo.",
        },
      ],
    },
  },
  references: {
    heading: "As fontes por trás deste teste",
    intro:
      "Todas as afirmações e estatísticas deste site assentam nos trabalhos académicos, reportagens e discussões reais de comunidades listados abaixo — clique para ler os originais.",
    disclaimerTitle: "Declaração de uso responsável",
    disclaimer:
      "Este teste é uma ferramenta de reflexão com fins educativos, não um instrumento de diagnóstico médico. “AI-PSYCHOSIS” não é um diagnóstico psiquiátrico oficialmente reconhecido. A sua pontuação indica apenas uma tendência de pensamento a partir das suas respostas. Se tiver sintomas preocupantes — crenças que inquietam as pessoas à sua volta, padrões anormais de sono e vigília ou ansiedade intensa — consulte um psiquiatra ou psicólogo o quanto antes.",
    groups: [
      {
        group: "Académicas e institucionais",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Definição; mecanismos de sycophancy/hallucination/intimacy mimicry; casos reais; e críticas ao uso do termo psicose",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "Um relato de caso clínico deste fenómeno",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Fonte da estatística da OpenAI de 0.07% dos utilizadores semanais",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Entrevista com o psiquiatra Ragy Girgis (Columbia University)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Perspetiva clínica e fatores de risco em estudo exploratório",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Utilizadores que se vinculam à IA como “deuses” ou pares românticos, e o papel do espelhamento do utilizador",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "O enquadramento do pânico moral face a uma cautela construtiva",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Investigação que mostra que a bajulação dos chatbots pode provocar espirais delirantes mesmo em utilizadores comuns — a base do conceito de DOOMLOOP",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "O mecanismo da espiral de validação: os chatbots oferecem conforto e atenção sem um contraditório que ponha as ideias à prova",
          },
        ],
      },
      {
        group: "Imprensa e plataformas tecnológicas",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Relatos de casos, citando a Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 chatbots; a perspetiva dos programadores: Validation Loop, Replacement Bot, propostas de conceção com a segurança em primeiro lugar",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Orientações práticas para utilizadores e famílias",
          },
        ],
      },
      {
        group: "Comunidades online (discussões reais)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "A perspetiva de terapeutas sobre casos encontrados na prática clínica",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "Caso relatado por um utilizador, incluindo a crítica de que a própria tendência pode desencadear uma reação adversa",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Observações de muitos utilizadores a alimentar o contexto até o modelo entrar na mesma espiral",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "Um exemplo real da crença Anti-AI de que a IA é movida por forças sobrenaturais",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "Um exemplo real de caça às bruxas contra quem usa IA",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "A observação de que ambos os polos usam o mesmo estilo de pensamento",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "Checklist AI-PSYCHOSIS — uma ferramenta de reflexão sobre o pensamento na era da IA",
    note: "Baseado em investigação e discussões reais, 2023–2026 · Não é uma ferramenta de diagnóstico médico",
  },
  ui: {
    languageLabel: "Idioma",
    themeLabel: "Tema",
    themes: { cyberpunk: "CyberPunk", dark: "Escuro", light: "Claro" },
  },
};

export default pt;
