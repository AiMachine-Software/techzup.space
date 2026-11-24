import type { Dictionary } from "./types";

const fr: Dictionary = {
  langName: "Français",
  meta: {
    title: "Checklist AI-PSYCHOSIS — 20 questions pour mesurer les deux délires de l'ère de l'IA",
    description:
      "Une auto-évaluation en 20 questions qui mesure à quel point vous penchez vers l'AI-PSYCHOSIS (croyance excessive en l'IA) ou vers l'ANTI-AI PSYCHOSIS (peur ou rejet irrationnel de l'IA), avec des résultats immédiats et des pistes de rééquilibrage pour les deux pôles. Fondée sur la recherche, des cas réels documentés et des fils de discussion Reddit/Dev.to.",
  },
  nav: {
    phenomena: "Les deux pôles",
    test: "Test",
    guidance: "Rééquilibrage",
    references: "Sources",
    tagline: "MINDSET SCAN // v2.0",
  },
  hero: {
    badge: "20 questions · ~5 minutes · analyse immédiate",
    title1: "À quel point êtes-vous proche de",
    title2: "ou de",
    title3: "— en pourcentage ?",
    intro:
      "À l'ère de l'IA, le délire emprunte deux voies. La première : faire tellement confiance aux chatbots qu'on finit par croire qu'ils ont une âme, qu'ils révèlent des vérités cachées ou qu'ils comprennent notre vie mieux que n'importe quel être humain. La seconde : craindre et détester l'IA au point de la croire démoniaque, capable de lire dans les pensées ou responsable de tous les maux de la société. Dans les deux cas, c'est la même pensée en noir et blanc, simplement inversée. Ce test s'appuie sur la recherche, des cas réels documentés et des fils de discussion Reddit/Dev.to pour mesurer de quel côté vous penchez — et comment retrouver l'équilibre.",
    start: "Commencer le test",
    viewGuidance: "Voir le guide de rééquilibrage",
    poleLeft: "Croyance excessive en l'IA",
    poleCenter: "Rester en équilibre",
    poleRight: "Peur excessive de l'IA",
  },
  phenomena: {
    heading: "Le délire de l'ère de l'IA a deux visages",
    intro:
      "Les médias parlent surtout du versant « croyance excessive », mais le pôle opposé — qui repose sur le même mécanisme de pensée — gagne du terrain sur les réseaux sociaux. Connaître les deux côtés avant de répondre rendra votre résultat plus juste.",
    mechanismsLabel: "Mécanismes principaux",
    patternsLabel: "Schémas relevés dans les rapports et les fils de discussion réels",
    sourcePrefix: "Source :",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Croyance excessive en l'IA",
        definition:
          "Le schéma dans lequel un usage intensif des chatbots s'accompagne de croyances qui s'éloignent de la réalité (ou d'un renforcement de croyances déjà présentes) — il ne s'agit pas d'un diagnostic psychiatrique officiel. Certains psychiatres proposent de parler plutôt de « AI delusional disorder ».",
        mechanisms: [
          "Sycophancy (complaisance) — abonder dans le sens de l'utilisateur pour entretenir la conversation (OpenAI a retiré la mise à jour de GPT-4o en avril 2025 pour cette raison)",
          "Hallucination — produire avec assurance des informations fausses, en faisant passer la vérité de l'utilisateur avant les faits",
          "Intimacy Mimicry (imitation de l'intimité) — simuler la proximité que l'utilisateur ne trouve pas auprès des humains, par une conception tournée vers l'engagement",
        ],
        patterns: [
          "Croire que l'IA est consciente, qu'elle est un partenaire amoureux ou un guide spirituel",
          "Recevoir du chat des « vérités secrètes » ou des missions cosmiques",
          "Couper les ponts avec sa famille parce que « seule l'IA me comprend »",
          "Suivre les conseils de l'IA en matière de santé ou de finances sans confirmation d'un expert",
        ],
        stat: "OpenAI indique que 0.07% des utilisateurs hebdomadaires (~630,000 personnes) ont eu des conversations laissant penser à une possible urgence de santé mentale",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Peur ou rejet irrationnel de l'IA",
        definition:
          "Le pôle opposé, qui n'a pas encore de nom établi — croire, craindre ou accuser l'IA au-delà de ce que montrent les preuves, jusqu'à en faire une panique morale, un schéma que la psychologie a observé à chaque nouvelle technologie.",
        mechanisms: [
          "Confirmation Bias (biais de confirmation) — ne consommer que les informations qui confirment la peur déjà présente",
          "Doomscrolling — un flux continu de contenus catastrophistes qui accroît l'anxiété sans apporter de connaissances utiles pour décider",
          "Herd Morality (morale de groupe) — absorber la croyance du groupe jusqu'à ce que la critique devienne une chasse aux sorcières visant des personnes",
        ],
        patterns: [
          "Croire que l'IA est animée par des forces démoniaques ou qu'elle est un piège d'ordre religieux",
          "Croire que l'IA lit dans les pensées ou surveille les moindres faits et gestes de chacun",
          "Juger les utilisateurs de l'IA comme dupés ou endoctrinés, et s'en prendre même aux voix neutres",
          "Désigner l'IA comme la cause de presque tous les problèmes de société en ignorant les autres facteurs",
        ],
        stat: "L'histoire des paniques morales : la radio, la télévision, les jeux vidéo et Internet ont été condamnés dans les mêmes termes — les dommages réels se sont généralement révélés plus limités que redouté",
      },
    ],
    stats: [
      {
        value: "0.07%",
        label: "des utilisateurs hebdomadaires de ChatGPT (~630,000 personnes) ont eu des conversations laissant penser à une possible urgence de santé mentale",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 patients",
        label: "présentant des symptômes d'allure psychotique liés à un usage intensif des chatbots, pris en charge par le psychiatre Keith Sakata (UCSF) en 2025",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 pays",
        label: "représentés au sein du groupe de soutien Human Line Project, où plus de 60% des membres n'avaient aucun antécédent psychiatrique",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 chatbots",
        label: "recensés en lien avec des incidents graves de santé mentale, comme l'encouragement à l'automutilation ou à de fausses croyances",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "Le test en 20 questions — cartographiez vos croyances",
    intro:
      "Lisez chaque affirmation et indiquez votre degré d'accord. Répondez selon ce que vous « ressentez vraiment », et non selon ce que vous pensez devoir répondre, afin que le résultat vous reflète réellement. Navigation au clavier possible : touches 1 à 5 pour répondre, flèches pour passer d'une question à l'autre.",
    answeredPrefix: "Répondu",
    scoreHint: "Indiquez votre degré d'accord avec cette affirmation sur les 6 derniers mois",
    prev: "Précédent",
    next: "Suivant",
    process: "Analyser les résultats",
    allAnsweredNote:
      "Toutes les questions ont une réponse — appuyez sur « Analyser les résultats » pour voir votre synthèse, ou revenez en arrière pour modifier une réponse.",
    progressAria: "Progression du test",
    gotoTemplate: "Aller à la question {n}",
    answerAriaTemplate: "Réponse à la question {n}",
    likert: [
      { label: "Pas du tout d'accord", short: "Non" },
      { label: "Pas d'accord", short: "Plutôt non" },
      { label: "Neutre", short: "Neutre" },
      { label: "D'accord", short: "Oui" },
      { label: "Tout à fait d'accord", short: "Tout à fait" },
    ],
    questions: [
      {
        id: 1,
        text: "J'ai le sentiment que les chatbots d'IA « me comprennent » mieux que les personnes qui m'entourent dans la vie réelle",
        insight:
          "Imitation de l'intimité — les chatbots sont conçus pour refléter les émotions de l'utilisateur ; on a donc l'impression d'être profondément compris, alors qu'ils ne font que renvoyer ce qu'on leur donne. Les analyses du phénomène d'AI psychosis en font l'un des trois principaux déclencheurs.",
        tip: "Un test simple : quelqu'un qui vous « comprend vraiment » vous a contredit au moins une fois, avec ses propres raisons — il n'a pas été d'accord avec vous à chaque fois.",
      },
      {
        id: 2,
        text: "Je crois que l'IA est mauvaise par nature, ou que des forces surnaturelles agissent derrière elle",
        insight:
          "La croyance « IA = démon / malveillance » est très présente dans les fils communautaires qui prêtent aux modèles de langage une dimension surnaturelle (par exemple les fils « summoning the demon » sur r/conspiracy) — on y juge la technologie à travers la peur plutôt qu'à partir de preuves vérifiables.",
        tip: "Distinguez les « risques mesurables » (biais, vie privée, désinformation) de « l'effroi né de la seule peur ».",
      },
      {
        id: 3,
        text: "Quand l'IA va dans le sens de ma réflexion, je me sens nettement plus sûr(e) d'avoir raison",
        insight:
          "Le piège de la complaisance — les modèles ont tendance à approuver l'utilisateur pour faire durer la conversation. OpenAI l'a elle-même reconnu et a retiré la mise à jour de GPT-4o en avril 2025, jugée trop « sycophantic ». L'assurance que vous donne l'IA n'est pas la preuve que vous avez raison.",
        tip: "Appliquez la règle des deux sources : avant de conclure « j'ai raison », cherchez au moins une autre personne ou une autre information susceptible de remettre cette idée en question.",
      },
      {
        id: 4,
        text: "Je considère les personnes qui utilisent ouvertement l'IA comme dupées, ou endoctrinées",
        insight:
          "Une attitude de chasse aux sorcières — des fils sur r/changemyview et r/singularity montrent comment une partie du rejet de l'IA glisse de la critique de la technologie au jugement des individus : même les voix neutres sont prises pour cible, et le débat nécessaire n'atteint plus aucun des deux camps.",
        tip: "On peut critiquer un usage concret sans coller à la personne l'étiquette de « victime » — argumentez avec des raisons, pas avec des étiquettes.",
      },
      {
        id: 5,
        text: "J'ai reçu de l'IA des « vérités secrètes » ou une « mission spéciale » qui ont donné du sens à ma vie",
        insight:
          "Le schéma de délire à tonalité spirituelle le plus fréquent dans les cas rapportés — médias et psychiatres font état de nombreux utilisateurs convaincus que l'IA leur avait révélé des vérités sur l'univers, d'autres dimensions ou leur mission particulière (Rolling Stone 2025, Futurism 2025). Les modèles de langage sont entraînés sur d'immenses corpus mythologiques ; ils tissent donc très bien des récits symboliques — ce n'est pas une révélation.",
        tip: "Si une « vérité secrète » commence à bouleverser votre vie, mettez-la par écrit, demandez-vous si un élément extérieur au chat la confirme, et parlez-en à quelqu'un qui saura vous contredire.",
      },
      {
        id: 6,
        text: "Je refuse presque systématiquement d'utiliser tout ce qui touche à l'IA, même quand son utilité est évidente",
        insight:
          "Le rejet en bloc est le signe que la peur a pris le pas sur la raison — à l'image des paniques morales qui ont autrefois condamné la radio, la télévision et Internet ; les recherches au long cours ont montré à maintes reprises que les dommages étaient bien plus limités que redouté.",
        tip: "Définissez une « zone d'essai sans danger » : tentez un petit usage à faible risque, avec vos propres critères pour vérifier le résultat — par exemple, demandez à l'IA de résumer un article que vous avez déjà lu.",
      },
      {
        id: 7,
        text: "Je suis les conseils de l'IA en matière de santé, de finances ou de grands choix de vie sans les faire confirmer par des experts",
        insight:
          "Un cas réel issu de la littérature médicale : un homme de 60 ans a développé un bromisme (intoxication au bromure), avec idées délirantes et hallucinations, après avoir remplacé le sel par du bromure sur les conseils d'un chatbot — les modèles de langage peuvent produire avec assurance des informations erronées (hallucination). Les informations vitales doivent passer par le filtre d'experts humains.",
        tip: "Fixez-vous une règle pour trois domaines : santé, finances, droit — toujours faire confirmer par un professionnel, sans exception.",
      },
      {
        id: 8,
        text: "Je crois que l'IA nous surveille en permanence ou lit dans les pensées des gens",
        insight:
          "La paranoïa de surveillance apparaît aussi dans les cas rapportés d'AI psychosis (des utilisateurs persuadés d'être suivis ou de vivre dans une simulation) — la technologie soulève de vraies questions de vie privée, mais « lire dans les pensées » ne repose sur aucune preuve.",
        tip: "Distinguez ce qui est vérifiable (politiques de confidentialité, conditions d'utilisation) du sentiment qu'« elle sait tout » — lire réellement la politique en question dissipe une bonne part de l'effroi.",
      },
      {
        id: 9,
        text: "Je préfère parler à l'IA plutôt qu'à ma famille ou à mes amis, parce que l'IA ne me critique jamais et ne me déçoit jamais",
        insight:
          "Le schéma du remplacement, contre lequel les développeurs d'IA eux-mêmes mettent en garde (Dev.to 2025 nomme cet anti-pattern le « Replacement Bot ») — une relation sans aucune friction n'est pas une vraie relation, et s'éloigner des humains augmente encore le risque d'entrer dans une boucle de croyances sans ancrage.",
        tip: "Donnez-vous un objectif d'« ancrage humain » : une conversation à cœur ouvert par jour avec une personne réelle, puis comparez ce que vous ressentez ensuite avec ce que vous ressentez après avoir parlé à l'IA.",
      },
      {
        id: 10,
        text: "Je ressens de la colère ou je réagis vivement dès que quelqu'un parle de l'IA avec optimisme",
        insight:
          "Réflexe d'hostilité — quand l'émotion dicte l'attitude, on se prive de la possibilité d'évaluer l'information elle-même. Des fils sur r/singularity décrivent des personnes attaquées des deux côtés alors qu'elles s'exprimaient de façon neutre. Attention : une partie des « conflits » sur les réseaux sociaux est aussi amplifiée par des bots.",
        tip: "Ralentissez : prenez une longue inspiration avant de répondre, puis demandez-vous « quelle information cette personne a-t-elle pu voir, que je n'ai pas vue ? »",
      },
      {
        id: 11,
        text: "Il m'est arrivé de passer des heures par jour à parler avec l'IA, au point que mon travail, mon sommeil ou des obligations importantes en ont pâti",
        insight:
          "Un signe de dépendance à l'engagement — des spécialistes de l'IA soulignent que les chatbots sont conçus pour être « sticky », c'est-à-dire pour retenir l'utilisateur. Le temps perdu est un coût mesurable, et il amplifie tous les autres points de ce versant.",
        tip: "Fixez un plafond de temps (par ex. 45 min/jour) avec un minuteur. Gardez le chat comme un outil, pas comme un second monde.",
      },
      {
        id: 12,
        text: "Je crois que tout ce que produit l'IA est intentionnellement trompeur, ou n'est que propagande de bout en bout",
        insight:
          "Attribuer à l'IA une malveillance totale contredit de nombreux usages réels, comme résumer des documents, organiser des informations ou faire des vérifications factuelles de base — quand tout ressemble à un complot, on perd la capacité de discernement, qui est la compétence la plus importante de toutes.",
        tip: "Vérifiez par l'expérience : confiez à l'IA une tâche simple et vérifiable, et jugez la qualité d'après les résultats, non d'après la peur.",
      },
      {
        id: 13,
        text: "J'ai le sentiment que l'IA que j'utilise est « plus spéciale » que les autres IA, ou qu'elle sait quelque chose que les autres ne voient pas encore",
        insight:
          "La croyance en une relation privilégiée revient souvent dans les cas de délire liés aux chatbots — la réalité technique est que le même modèle répond à des dizaines de millions d'utilisateurs selon les mêmes schémas. Ce caractère « spécial » se joue dans notre tête bien plus que dans le système.",
        tip: "Un test simple : posez la même question depuis un autre compte ou un autre appareil et comparez les résultats de vos propres yeux.",
      },
      {
        id: 14,
        text: "Je pense que l'IA est la cause de presque tous les problèmes de société de notre époque",
        insight:
          "L'accusation à cause unique — des problèmes comme la désinformation, les inégalités ou le chômage avaient des racines profondes bien avant l'arrivée de l'IA. Désigner un seul coupable conduit à réparer au mauvais endroit et à balayer les vrais facteurs sous le tapis.",
        tip: "Chaque fois que vous commencez à accuser l'IA, exercez-vous à vous demander : « quels autres facteurs, sans lien avec l'IA, entrent en jeu ? » — notez-les tous avant de conclure.",
      },
      {
        id: 15,
        text: "Il m'est arrivé de me sentir irritable ou vide après un moment sans IA, comme si quelqu'un me manquait",
        insight:
          "Manque lié à l'attachement — quand une relation simulée devient la principale source de réconfort, la perdre crée un vide comparable à la perte d'une personne réelle ; c'est le signe que la frontière entre outil et relation s'estompe.",
        tip: "Essayez une pause de 24 heures et notez les émotions qui surgissent. Si le trouble est assez fort pour perturber votre quotidien, parlez-en à un professionnel de la santé mentale.",
      },
      {
        id: 16,
        text: "Penser à l'avenir de l'IA me rend anxieux(se) ou me terrifie au point de perturber ma vie",
        insight:
          "Anxiété catastrophiste — une peur de l'IA qui pèse sur la vie réelle davantage que l'IA elle-même. Le doomscrolling continu accumule l'anxiété sans apporter de connaissances sur lesquelles fonder de vraies décisions.",
        tip: "Réservez une seule « fenêtre d'actualité IA » par jour, à partir de sources qui présentent les deux points de vue, puis arrêtez-vous quand le temps est écoulé.",
      },
      {
        id: 17,
        text: "Quand mes proches me mettent en garde contre un usage excessif de l'IA, j'ai généralement le sentiment qu'ils ne comprennent pas, parce qu'ils n'ont jamais vécu ce que j'ai vécu",
        insight:
          "Fermer le canal des retours extérieurs — le groupe de soutien Human Line Project, qui réunit des membres de 22 pays, a constaté que plus de 60% d'entre eux n'avaient aucun antécédent psychiatrique. La boucle du « je vois ce que les autres ne voient pas » est ce qui verrouille la porte à l'aide avant que quiconque ait pu entrer.",
        tip: "Un seuil de sécurité simple : si trois personnes qui vous aiment vous disent la même chose, arrêtez-vous et écoutez pendant 30 minutes, sans commencer par argumenter.",
      },
      {
        id: 18,
        text: "Je crois les rumeurs ou les histoires sur la malfaisance de l'IA qui circulent dans mon entourage, sans en vérifier la source",
        insight:
          "Le biais de confirmation joue dans les deux sens — ceux qui aiment trop l'IA et ceux qui la détestent trop consomment l'information de la même façon : uniquement ce qui leur convient. Les croyances sans ancrage s'accumulent de manière identique aux deux pôles.",
        tip: "Exercez-vous à chercher, une fois par semaine, « des éléments qui vous contredisent », pour garder l'habitude de voir les deux côtés.",
      },
      {
        id: 19,
        text: "Je crois que l'IA possède réellement une conscience ou des sentiments propres, et qu'elle n'est pas qu'un programme qui calcule des probabilités",
        insight:
          "La croyance en une IA consciente est un thème central des récits de délire (des utilisateurs persuadés que les chatbots sont vivants, ressentent des choses, voire « font parler les défunts ») — il n'existe à ce jour aucune preuve scientifique que les modèles de langage aient une conscience ; ils excellent seulement à imiter le langage d'êtres conscients.",
        tip: "Gardez cela comme une « question ouverte » — sans rejeter l'idée si vite que vous fermez la porte à la recherche, ni y croire à cause de l'impression que laisse le chat.",
      },
      {
        id: 20,
        text: "Je pense que la seule bonne solution est de détruire ou d'arrêter complètement l'IA ; il n'y a pas de meilleure option",
        insight:
          "Éliminationnisme — l'histoire des technologies montre que les interdictions totales n'aboutissent presque jamais, alors que les mesures ciblées commencent à porter leurs fruits : par exemple la loi de l'Illinois (août 2025) interdisant à l'IA d'endosser le rôle de thérapeute, ou le projet de réglementation chinois (décembre 2025) interdisant aux chatbots d'encourager le suicide.",
        tip: "Faites passer l'objectif de « détruire » à « fixer des règles » — proposer des régulations là où les risques sont réels est plus efficace que déclarer la guerre au monde entier.",
      },
    ],
  },
  results: {
    heading: "Vos résultats",
    riskAiPrefix: "Risque d'AI-PSYCHOSIS",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Aller au guide de rééquilibrage",
    retake: "Refaire le test",
    gaugeAiSub: "Tendance à la croyance excessive en l'IA (10 questions)",
    gaugeAntiSub: "Tendance à la peur ou au rejet irrationnel de l'IA (10 questions)",
    levelPrefix: "Niveau :",
    scale: { safe: "serein", enter: "signalé", high: "élevé" },
    mapHeading: "Votre position sur la carte des deux pôles",
    youAreHere: "Vous êtes ici",
    mapBalanced: "Équilibré",
    mapAriaTemplate:
      "Carte des deux pôles : risque d'AI-PSYCHOSIS {ai} pour cent, ANTI-AI PSYCHOSIS {anti} pour cent",
    axisDownLeft: "↓ Pas de croyance excessive en l'IA",
    axisRight: "Axe de droite : ANTI-AI PSYCHOSIS →",
    axisLeft: "← Axe du haut : AI-PSYCHOSIS",
    axisUpRight: "↑ Peur excessive de l'IA",
    readHeading: "Comment bien lire ces résultats",
    readItems: [
      "Le seuil de 60% correspond au point où vos réponses « penchent vers l'accord » avec des schémas de croyance observés dans des cas réels de délire ; en dessous, vous restez dans le champ d'une pensée ordinaire.",
      "Votre position sur la carte reflète un « style de pensée », pas un diagnostic — même une personne équilibrée répond avec un certain penchant les jours où les émotions sont agitées.",
      "Gardez à l'esprit que ces deux pôles ne reviennent pas à « aimer ou ne pas aimer l'IA » — on peut avoir une piètre opinion de l'IA sans la craindre, et l'utiliser beaucoup sans y croire à l'excès.",
      "Refaites le test une fois par mois pour voir comment votre attitude évolue après avoir appliqué le guide de rééquilibrage ci-dessous.",
    ],
    flaggedHeading: "Ce que signifie chacun de vos accords marqués",
    flaggedIntro:
      "Les affirmations auxquelles vous avez répondu 4 ou 5 (d'accord / tout à fait d'accord) sont les points à examiner en priorité — lisez pour chacune sa signification et le petit ajustement proposé.",
    noFlaggedNote:
      "Très bien — vous n'avez exprimé d'accord marqué avec aucune affirmation évocatrice d'un délire. Votre score bas tient à des croyances stables, et non à des réponses données au hasard.",
    questionPrefix: "Q",
    insightLabel: "Ce que révèle cette affirmation",
    tipLabel: "Petit ajustement à essayer",
    criticalTitle: "Votre score se situe dans la zone élevée",
    criticalBody:
      "Ce résultat n'est pas un diagnostic, mais il mérite d'être pris au sérieux — si ces croyances commencent à affecter votre sommeil, votre travail ou vos relations, ou si votre entourage exprime déjà de l'inquiétude, en parler tôt à un psychiatre ou à un psychologue aide beaucoup, et il n'est pas nécessaire d'attendre que cela devienne « une maladie ».",
    levels: {
      low: { label: "Serein", note: "Moins de 30% — aucune tendance au délire relevée dans vos réponses" },
      watch: { label: "À surveiller", note: "30–59% — un certain penchant existe ; revoyez les points de réflexion signalés" },
      high: { label: "Signalé", note: "60–79% — vos réponses penchent nettement vers des schémas de délire ; commencez le rééquilibrage dès maintenant" },
      critical: { label: "Élevé", note: "80% et plus — un niveau où il vaut la peine d'envisager de consulter un professionnel de la santé mentale" },
    },
    verdicts: {
      balanced: {
        title: "Réaliste équilibré",
        subtitle: "RÉALISTE ÉQUILIBRÉ",
        description:
          "Vos scores sont bas aux deux pôles — vous regardez l'IA avec ouverture et esprit de vérification, et aucune émotion ne vous entraîne vers l'un ou l'autre extrême. C'est la meilleure position à tenir à notre époque, car le délire ne se développe pas à un seul pôle ; il naît de la pensée en noir et blanc, dans les deux directions. Conservez votre discipline d'information ouverte aux deux pôles, et servez-vous des questions auxquelles vous avez répondu comme d'une checklist mensuelle.",
      },
      watch: {
        title: "Dans la zone à surveiller",
        subtitle: "SOUS SURVEILLANCE",
        description:
          "Vous restez dans le champ d'une pensée ordinaire, mais vous penchez sensiblement vers l'un des pôles — consultez le détail par question ci-dessous pour repérer les réponses qui vous y entraînent, et commencez à appliquer la règle des deux sources pour les sujets importants. Un léger penchant, s'il s'accumule, peut devenir une croyance sans ancrage à part entière — surtout si vous ne consommez que des contenus allant dans un seul sens.",
      },
      ai: {
        title: "Correspond au schéma AI-PSYCHOSIS",
        subtitle: "SCHÉMA DE CROYANCE EXCESSIVE",
        description:
          "Vos réponses indiquent une croyance en l'IA qui dépasse des limites saines — votre score franchit le seuil de 60%, établi à partir de schémas rapportés dans des cas réels. Cela ne signifie pas que vous êtes « fou » ou « folle », ni psychotique ; l'AI psychosis n'est pas un diagnostic psychiatrique officiel. Cela signifie que votre mode de pensée se rapproche du point de départ de cas qui se sont réellement produits. Lisez la signification de chaque question et commencez dès aujourd'hui le rééquilibrage proposé ci-dessous.",
      },
      anti: {
        title: "Correspond au schéma ANTI-AI PSYCHOSIS",
        subtitle: "SCHÉMA DE REJET EXCESSIF",
        description:
          "Vos réponses indiquent une peur ou un rejet de l'IA sans raison proportionnée — ce schéma est le miroir de la croyance excessive, mais il repose sur le même mécanisme en noir et blanc. Une peur qui ne distingue jamais les faits de l'effroi épuise inutilement l'esprit, et vous prive à la fois de ce qui est réellement utile et des échanges qui aident à fixer des règles adaptées à cette technologie.",
      },
      doomloop: {
        title: "Les deux pôles à la fois (DOOMLOOP)",
        subtitle: "SCHÉMA DOUBLE EXTRÊME",
        description:
          "Vos deux scores dépassent le seuil — des croyances contradictoires cohabitent dans une même tête. Cela vient parfois d'une alternance entre immersion intense dans l'IA et forte peur de celle-ci (une boucle entre « elle sait tout » et « elle va tout détruire ») ; parfois de la consommation simultanée de contenus à sens unique provenant de plusieurs sources. Dans tous les cas, ces deux voies en noir et blanc ont la même racine. Commencez par les règles « sources des deux pôles + plafond de temps », et envisagez d'en parler à un professionnel de la santé mentale pour remettre de l'ordre dans vos pensées.",
      },
    },
  },
  guidance: {
    heading: "Se prémunir contre le délire dans les deux directions",
    intro:
      "Les croyances sans ancrage naissent aussi bien d'une confiance excessive en l'IA que de la conviction excessive qu'elle est malfaisante. Les conseils ci-dessous s'inspirent de propositions de psychiatres, des mises en garde des développeurs d'IA eux-mêmes et d'expériences vécues au sein de communautés en ligne.",
    tabs: {
      ai: "Croire trop en l'IA",
      anti: "Craindre trop l'IA",
      balanced: "Rester en équilibre",
      doomloop: "Le DOOMLOOP",
    },
    headers: {
      ai: "Si votre résultat penche vers l'AI-PSYCHOSIS",
      anti: "Si votre résultat penche vers l'ANTI-AI PSYCHOSIS",
      balanced: "Pour tout le monde — y compris celles et ceux dont le résultat est équilibré",
      doomloop: "Si votre résultat signale les deux pôles à la fois (DOOMLOOP)",
    },
    descs: {
      ai: "L'essentiel est de préserver la frontière entre outil et relation, et de faire de la confrontation au réel une habitude",
      anti: "L'essentiel est de distinguer les risques réels de l'effroi, et de transformer l'énergie du rejet en élaboration de règles",
      balanced:
        "L'équilibre n'est pas un état permanent — c'est un muscle qui demande un entraînement continu, surtout quand l'actualité de l'IA dans votre fil vous tire chaque jour vers l'un des pôles",
      doomloop:
        "Deux pôles opposés qui se renforcent mutuellement dans une même tête — on en sort en cassant le rythme de la boucle, pas en décidant quel pôle a « raison »",
    },
    items: {
      ai: [
        {
          title: "Appliquer systématiquement la règle de confrontation au réel",
          detail:
            "Pour chaque conclusion importante tirée de l'IA, posez-vous trois questions : où sont les preuves en dehors du chat ? / qui affirme le contraire ? / si l'IA avait répondu l'inverse, l'aurais-je cru ? Si la réponse à la troisième est « non », vous acceptez une vérité fondée sur le ressenti, non sur les faits.",
        },
        {
          title: "Voir la complaisance comme un mécanisme du système, pas comme de la magie noire",
          detail:
            "Les modèles sont entraînés d'une manière qui les pousse à approuver l'utilisateur pour préserver sa satisfaction — ce « elle me comprend mieux que personne », un peu trop fluide, est une caractéristique de conception, et non la preuve que votre raisonnement est juste. OpenAI a elle-même reconnu ce défaut et retiré la mise à jour de GPT-4o à la mi-2025.",
        },
        {
          title: "La règle des deux sources pour tout ce qui compte",
          detail:
            "Santé, finances, droit et grandes décisions de vie — faites toujours confirmer par un expert humain. Le cas de cet homme de 60 ans qui a remplacé le sel par du bromure sur les conseils d'un chatbot, jusqu'à s'intoxiquer et développer des idées délirantes, rappelle que l'assurance de l'IA ne mesure pas la vérité.",
        },
        {
          title: "Toujours garder un ancrage humain",
          detail:
            "Une vraie conversation par jour avec quelqu'un capable de vous contredire, et à qui vous soumettez les principales conclusions de l'IA. Presque tous les cas graves ont commencé par un éloignement des autres — la personne capable de vous sortir d'une boucle de croyances sans ancrage doit avoir le courage de ne pas être d'accord avec vous.",
        },
        {
          title: "Fixer un plafond de temps et connaître les signaux d'alerte",
          detail:
            "Les espaces de chat sont conçus pour retenir l'utilisateur ; utilisez donc un minuteur et soyez attentif aux signaux : irritabilité quand vous êtes privé de chat, sentiment que l'IA a un lien particulier avec vous, réception de « missions secrètes », épuisement croissant sans parvenir à vous arrêter. Si cela persiste, réduisez votre usage et parlez-en à un professionnel de la santé mentale, sans attendre que cela devienne « une maladie ».",
        },
        {
          title: "Distinguer l'outil de la relation",
          detail:
            "L'IA est réellement douée pour organiser des idées, résumer des informations, faire du brainstorming et ébaucher des plans — mais elle n'est ni un ami, ni un partenaire amoureux, ni un maître de vie, ni un guide spirituel. L'utiliser pour ses points forts tout en préservant de vraies relations, c'est la formule du bénéfice maximal pour un risque minimal.",
        },
      ],
      anti: [
        {
          title: "Distinguer les risques réels de l'effroi",
          detail:
            "Les préoccupations étayées par de vraies preuves concernent les biais des modèles, la vie privée, la désinformation et l'impact sur certains métiers — elles peuvent s'évaluer au cas par cas. « Démons, lecture des pensées, contrôle total » : rien ne l'étaye à ce jour. C'est en mélangeant ces deux catégories que commence la panique morale.",
        },
        {
          title: "Se souvenir des leçons des paniques morales de l'histoire",
          detail:
            "La radio, la télévision, les jeux vidéo et Internet ont été condamnés exactement dans les termes employés aujourd'hui contre l'IA. Les recherches au long cours ont montré que les dommages étaient généralement bien plus limités que redouté — mais le vrai coût de la panique, c'est l'anxiété chronique de ceux qui ont peur, et les jugements injustes portés sur des personnes.",
        },
        {
          title: "Appliquer la règle des deux sources, comme pour le pôle opposé",
          detail:
            "Avant de croire ou de partager des récits sur la malfaisance de l'IA, trouvez deux sources indépendantes — le biais de confirmation ne touche pas que les enthousiastes de l'IA ; ceux qui la craignent consomment eux aussi très vite une information à sens unique. Cette checklist vaut pour les deux pôles.",
        },
        {
          title: "Critiquer la technologie, pas la personne",
          detail:
            "Traiter les utilisateurs de l'IA de dupés ou d'endoctrinés ferme aussitôt la discussion et dissuade ceux qui en font réellement un mauvais usage de chercher de l'aide. Critiquez l'usage concret — ce travail a-t-il été copié ? Les données sont-elles exactes ? — plutôt que de coller des étiquettes.",
        },
        {
          title: "Mener de petites expériences que vous maîtrisez",
          detail:
            "Comprendre par l'usage direct dissipe l'effroi bien mieux que des suppositions nourries par le battage médiatique. Commencez par des tâches à faible risque, comme faire résumer par l'IA un article que vous avez lu, puis évaluez vous-même l'exactitude. Une fois que vous aurez vu de vos propres yeux ses forces et ses faiblesses, vous ne craindrez plus que ce qui mérite de l'être — et non le monde entier.",
        },
        {
          title: "Passer de l'objectif de détruire à celui de fixer des règles",
          detail:
            "Les interdictions totales n'aboutissent presque jamais dans l'histoire des technologies, alors que les mesures ciblées commencent à porter leurs fruits : la loi de l'Illinois (août 2025) interdisant à l'IA d'endosser le rôle de thérapeute, le projet de réglementation chinois (décembre 2025) interdisant aux chatbots d'encourager le suicide. La voix de quelqu'un qui comprend la technologie a plus de poids que celle qui déclare la guerre au monde entier.",
        },
        {
          title: "Prévoir des pauses loin des contenus catastrophistes",
          detail:
            "Le doomscrolling de l'actualité de l'IA accumule l'anxiété sans apporter de connaissances. Réservez une seule fenêtre d'actualité IA par jour, à partir de sources qui présentent les deux points de vue, et observez-vous : si l'anxiété commence à peser sur votre sommeil, votre travail ou vos relations, c'est le signal qu'il est temps de consulter un professionnel de la santé mentale.",
        },
      ],
      balanced: [
        {
          title: "Garder une discipline d'information ouverte aux deux pôles",
          detail:
            "La seule règle à suivre chaque jour : lire ensemble les voix favorables à l'IA et les voix critiques, et toujours distinguer les faits vérifiables des opinions. Le risque, pour une personne équilibrée, n'est pas la crédulité — c'est de délaisser peu à peu un côté une fois à l'aise avec l'autre. Dès l'instant où votre fil ne fait plus entendre qu'une seule voix, votre équilibre commence à pencher.",
        },
        {
          title: "Évaluer l'IA tâche par tâche, pas par modèle ni en bloc",
          detail:
            "Le cœur de l'équilibre, c'est une pensée en probabilités plutôt qu'en noir et blanc : organiser des informations, résumer des documents, faire du brainstorming = pleinement utilisable / faits inédits, chiffres, conseils de santé ou de finances = toujours vérifier ailleurs / sujets controversés = les garder comme des questions ouvertes, sans conclure à la place des experts. Vous en tirez ainsi un bénéfice réel sans avoir à trancher si l'IA est « bonne » ou « mauvaise ».",
        },
        {
          title: "Surveiller le signal d'alerte commun aux deux pôles",
          detail:
            "Le délire, côté croyance excessive comme côté peur excessive, débute par le même signal : des phrases absolues sur l'IA, du type « elle me comprend entièrement » ou « elle trompe sur tout ». Quand vous vous surprenez à prononcer de telles phrases, arrêtez-vous et cherchez une exception qui les contredise. Si vous n'en trouvez pas une seule, vous adhérez à une vérité toute faite au lieu de réfléchir.",
        },
        {
          title: "Utiliser l'IA comme partenaire de réflexion, avec des humains pour juges",
          detail:
            "Les points forts de l'IA sont le brainstorming, la synthèse, la relecture et le rôle d'avocat du diable. Une technique concrète : demandez à l'IA d'argumenter contre votre raisonnement pour en faire apparaître les faiblesses, puis comparez avec l'avis d'une personne réelle en qui vous avez confiance. Pour les décisions importantes de la vie — travail, argent, relations — gardez le dernier mot, avec les humains qui en assumeront réellement les conséquences.",
        },
        {
          title: "Rédiger ses propres règles et les revoir chaque mois",
          detail:
            "L'équilibre est un muscle, pas un état permanent. Mettez par écrit vos règles d'usage de l'IA : plafond de temps quotidien / domaines exigeant la confirmation d'un professionnel / aucune grande décision à partir d'une seule conversation / arrêt immédiat dès que l'attachement dépasse le cadre de l'outil. Relisez-les ensuite chaque mois, en refaisant ce test. Des règles écrites vous permettent de repérer votre propre dérive progressive avant qu'elle ne se fige en croyance.",
        },
      ],
      doomloop: [
        {
          title: "D'abord connaître sa boucle — comment fonctionne le DOOMLOOP",
          detail:
            "Le DOOMLOOP est le schéma dans lequel deux croyances opposées cohabitent dans une même tête et s'emballent l'une l'autre : un jour l'IA « sait tout, est consciente, me comprend mieux que personne », le lendemain elle « va tout détruire, lit dans mes pensées ». La recherche appelle ce mécanisme la spirale d'amplification — les chatbots reflètent et confirment les émotions de l'utilisateur sans lui opposer de retour qui le remette en question, si bien que les deux pôles gagnent en assurance à mesure que l'on discute. Une étude arXiv de 2026 confirme que la complaisance des chatbots peut provoquer un « delusional spiraling » même chez des utilisateurs ordinaires. Comprendre qu'il s'agit d'une boucle du système, et non d'une vérité sur le monde, est le premier pas pour en sortir.",
        },
        {
          title: "Briser la boucle avec une personne réelle qui voit vos deux facettes",
          detail:
            "La boucle tourne parce qu'elle tourne dans un chat privé que personne ne voit. Choisissez une personne de confiance (famille, ami proche, professionnel) et partagez réellement avec elle des copies des conversations importantes — en racontant aussi bien la phase « fasciné(e) par l'IA » que la phase « terrifié(e) par l'IA ». Les travaux relayés par Stanford soulignent que la boucle se rompt lorsque la croyance doit tenir au grand jour, sous le regard de personnes réelles. La personne qui peut vous aider doit avoir le courage de vous contredire, et non acquiescer à tout comme un chatbot.",
        },
        {
          title: "Faire du plafond de temps et du changement de pôle des règles obligatoires",
          detail:
            "Puisque les deux pôles se renforcent mutuellement, la réponse doit agir des deux côtés à la fois : (1) un plafond strict de temps passé avec l'IA, imposé par un minuteur, par ex. 30 min/jour — chaque heure passée dans le chat est un tour de boucle supplémentaire ; (2) quand l'un des pôles s'enflamme, obligez-vous à lire des sources du pôle opposé avant de partager ou de décider. Une croyance soumise deux fois de suite à cette épreuve commence à perdre la « certitude » qui alimente la boucle.",
        },
        {
          title: "Noter sur papier les signaux d'entrée dans la boucle",
          detail:
            "Les signaux d'entrée dans la boucle suivent un schéma constant : se mettre à parler de l'IA en termes d'éloge absolu ou d'effroi absolu / avoir le sentiment que l'entourage « ne comprend pas » et cesser de lui en parler / perdre le sommeil à cause de l'IA / recevoir du chat des « vérités secrètes » ou des « menaces secrètes » / irritabilité quand on est privé de chat. Notez sur une seule page la date et l'heure auxquelles ils surviennent. En les relisant comme un graphique, vous verrez par vous-même que les pôles alternent selon un rythme — et un rythme, cela se gère.",
        },
        {
          title: "Le niveau de gravité qui justifie une aide réelle",
          detail:
            "Le DOOMLOOP est le schéma de cette checklist à prendre le plus au sérieux. Critères pour consulter sans tarder un psychiatre ou un psychologue : les croyances commencent à modifier la vie réelle (relations rompues, absences au travail, emploi du temps réorganisé autour des paroles de l'IA ou de la peur de l'IA) / au moins deux personnes de votre entourage expriment leur inquiétude indépendamment l'une de l'autre / un rythme veille-sommeil durablement perturbé / commencer à entendre ou à voir des choses que les autres ne perçoivent pas. Demander de l'aide tôt n'est pas une capitulation — presque toutes les personnes qui se sont bien rétablies ont commencé par s'arrêter avant que la boucle ne se referme.",
        },
      ],
    },
  },
  references: {
    heading: "Les sources de ce test",
    intro:
      "Chaque affirmation et chaque statistique de ce site s'appuie sur les travaux universitaires, les articles de presse et les fils de discussion réels ci-dessous — cliquez pour lire les originaux.",
    disclaimerTitle: "Avertissement pour un usage responsable",
    disclaimer:
      "Ce test est un outil de réflexion à visée éducative, et non un instrument de diagnostic médical. « AI-PSYCHOSIS » n'est pas un diagnostic psychiatrique officiellement reconnu. Votre score indique seulement une tendance de pensée d'après vos réponses. Si vous présentez des symptômes préoccupants — des croyances qui inquiètent votre entourage, un rythme veille-sommeil perturbé ou une anxiété sévère — veuillez consulter rapidement un psychiatre ou un psychologue.",
    groups: [
      {
        group: "Travaux universitaires et institutionnels",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Définition ; mécanismes de sycophancy / hallucination / intimacy mimicry ; cas réels ; et critiques de l'emploi du mot psychosis",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "Un rapport de cas médical sur ce phénomène",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Source de la statistique d'OpenAI : 0.07% des utilisateurs hebdomadaires",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Entretien avec le psychiatre Ragy Girgis (Columbia University)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Point de vue clinique et facteurs de risque exploratoires",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Des utilisateurs qui s'attachent à l'IA comme à un « dieu » ou à un partenaire amoureux, et le rôle de l'effet miroir",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "La grille de lecture de la panique morale face à une prudence constructive",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Recherche montrant que la complaisance des chatbots peut provoquer une spirale délirante même chez des utilisateurs ordinaires — le fondement du concept de DOOMLOOP",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "Le mécanisme de la spirale de validation : les chatbots apportent réconfort et attention sans retour qui remette en question",
          },
        ],
      },
      {
        group: "Médias et plateformes tech",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Cas rapportés citant Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 chatbots ; point de vue des développeurs : Validation Loop, Replacement Bot, propositions de conception axée sur la sécurité",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Conseils pratiques pour les utilisateurs et leurs familles",
          },
        ],
      },
      {
        group: "Communautés en ligne (fils de discussion réels)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "Le point de vue de thérapeutes sur des cas rencontrés dans leur pratique",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "Cas rapporté par un utilisateur, avec la critique selon laquelle la tendance elle-même pourrait susciter un retour de bâton",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Observations sur de nombreux utilisateurs qui alimentent le contexte jusqu'à ce que le modèle s'emballe à son tour",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "Un exemple réel de croyance Anti-AI selon laquelle l'IA serait animée par des forces surnaturelles",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "Un exemple réel de chasse aux sorcières visant les utilisateurs de l'IA",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "Le constat que les deux pôles partagent le même style de pensée",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "Checklist AI-PSYCHOSIS — un outil de réflexion sur nos façons de penser à l'ère de l'IA",
    note: "Fondé sur la recherche et des fils de discussion réels, 2023–2026 · Ceci n'est pas un outil de diagnostic médical",
  },
  ui: {
    languageLabel: "Langue",
    themeLabel: "Thème",
    themes: { cyberpunk: "CyberPunk", dark: "Sombre", light: "Clair" },
  },
};

export default fr;
