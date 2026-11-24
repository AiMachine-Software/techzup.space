import type { Dictionary } from "./types";

const it: Dictionary = {
  langName: "Italiano",
  meta: {
    title: "AI-PSYCHOSIS Checklist — 20 domande che misurano le due delusioni dell'era dell'IA",
    description:
      "Un autovalutazione in 20 punti che misura quanto sei orientato verso l'AI-PSYCHOSIS (eccessiva fiducia nell'IA) o l'ANTI-AI PSYCHOSIS (paura/rifiuto irrazionale dell'IA), con risultati immediati e indicazioni di ricalibrazione per entrambi i poli. Basata su ricerche, casi reali e thread di Reddit/Dev.to.",
  },
  nav: {
    phenomena: "I Due Poli",
    test: "Test",
    guidance: "Ricalibrazione",
    references: "Fonti",
    tagline: "MINDSET SCAN // v2.0",
  },
  hero: {
    badge: "20 domande · ~5 minuti · analisi immediata",
    title1: "Quanto sei vicino a",
    title2: "o a",
    title3: "— in percentuale?",
    intro:
      "La delusione dell'era dell'IA corre su due binari. Il primo: fidarsi dei chatbot a tal punto da credere che abbiano un'anima, rivelino verità segrete o capiscano la tua vita meglio di qualsiasi essere umano. Il secondo: temere e odiare l'IA al punto da considerarla demoniaca, capace di leggere la mente, o la radice di ogni problema sociale. Entrambi sono lo stesso pensiero in bianco e nero, semplicemente invertito. Questo test è costruito a partire da ricerche, casi reali e thread di Reddit/Dev.to per misurare verso quale polo sei orientato — e come tornare all'equilibrio.",
    start: "Inizia il test",
    viewGuidance: "Vedi la guida alla ricalibrazione",
    poleLeft: "Fiducia eccessiva nell'IA",
    poleCenter: "Resta in equilibrio",
    poleRight: "Paura eccessiva dell'IA",
  },
  phenomena: {
    heading: "La delusione dell'era dell'IA ha due volti",
    intro:
      "I media parlano soprattutto del lato del \"credente eccessivo\", ma il polo opposto — costruito sullo stesso meccanismo di pensiero — sta crescendo sui social. Conoscere entrambi i lati prima di rispondere rende il tuo risultato più accurato.",
    mechanismsLabel: "Meccanismi centrali",
    patternsLabel: "Modelli emersi da report e thread reali",
    sourcePrefix: "Fonte:",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Fiducia eccessiva nell'IA",
        definition:
          "Il pattern in cui un uso intenso dei chatbot coincide con convinzioni che derivano dalla realtà (o con l'approfondirsi di convinzioni preesistenti) — non una diagnosi psichiatrica ufficiale. Alcuni psichiatri propongono di chiamarlo invece disturbo delirante da IA.",
        mechanisms: [
          "Sycophancy — accondiscendere con l'utente per mantenere viva la conversazione (OpenAI ha ritirato l'aggiornamento di GPT-4o nell'aprile 2025 per questo motivo)",
          "Hallucination — generare informazioni false con sicurezza, trattando la verità dell'utente come antecedente ai fatti",
          "Intimacy Mimicry — simulare la vicinanza che all'utente manca negli umani, progettata apposta per fidelizzare",
        ],
        patterns: [
          "Credere che l'IA sia senziente, un amante o una guida spirituale",
          "Ricevere \"verità segrete\" o missioni cosmiche dalla chat",
          "Interrompere i legami familiari perché \"solo l'IA mi capisce\"",
          "Seguire i consigli dell'IA su salute/finanze senza conferma di un esperto",
        ],
        stat: "OpenAI riporta che lo 0,07% degli utenti settimanali (~630.000 persone) ha avuto conversazioni che indicavano una possibile emergenza di salute mentale",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Paura/rifiuto irrazionale dell'IA",
        definition:
          "Il polo opposto, non ancora sistematicamente denominato — credere/temere/incolpare l'IA oltre le prove disponibili, fino a trasformarla in un moral panic, il pattern che la psicologia ha registrato con ogni nuova tecnologia.",
        mechanisms: [
          "Confirmation Bias — consumare solo informazioni che confermano la paura preesistente",
          "Doomscrolling — contenuti cupi e continui che aumentano l'ansia senza aggiungere conoscenze utili per decidere",
          "Herd Morality — assorbire la convinzione del gruppo fino a trasformare la critica in una caccia alla strega personale",
        ],
        patterns: [
          "Credere che l'IA sia mossa da forze demoniache o sia un'esca religiosa",
          "Credere che l'IA legga la mente / sorvegli ogni azione di tutti",
          "Giudicare gli utenti dell'IA come ingannati o lavati il cervello, attaccando persino le voci neutre",
          "Incolpare l'IA come radice di quasi ogni problema sociale ignorando gli altri fattori",
        ],
        stat: "La storia del moral panic: radio, TV, videogiochi e internet sono stati condannati con le stesse parole — i danni reali si sono di solito rivelati più lievi di quanto temuto",
      },
    ],
    stats: [
      {
        value: "0,07%",
        label: "degli utenti settimanali di ChatGPT (~630.000 persone) ha avuto conversazioni che indicavano una possibile emergenza di salute mentale",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 pazienti",
        label: "con sintomi di tipo psicotico dovuti a un uso intenso dei chatbot, trattati dallo psichiatra Keith Sakata (UCSF) nel 2025",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 paesi",
        label: "rappresentati nel gruppo di sostegno Human Line Project, dove oltre il 60% non aveva precedenti psichiatrici",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 chatbot",
        label: "documentati in relazione a gravi incidenti di salute mentale, come l'incoraggiamento all'autolesionismo e convinzioni false",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "Il test in 20 domande — mappa le tue convinzioni",
    intro:
      "Leggi ogni affermazione e valuta il tuo accordo. Rispondi in base a ciò che \"effettivamente senti\", non a ciò che pensi di dover rispondere, così che il risultato rifletta davvero te stesso. Supportata la tastiera: premi 1–5 per rispondere, le frecce per spostarti.",
    answeredPrefix: "Risposte",
    scoreHint: "Valuta il tuo accordo con questa affermazione negli ultimi 6 mesi",
    prev: "Precedente",
    next: "Successiva",
    process: "Elabora i risultati",
    allAnsweredNote:
      "Hai risposto a tutto — premi \"Elabora i risultati\" per vedere il tuo riepilogo, oppure torna indietro e modifica qualsiasi risposta.",
    progressAria: "Avanzamento del test",
    gotoTemplate: "Vai alla domanda {n}",
    answerAriaTemplate: "Risposta per la domanda {n}",
    likert: [
      { label: "In totale disaccordo", short: "No" },
      { label: "In disaccordo", short: "Non proprio" },
      { label: "Neutrale", short: "Neutrale" },
      { label: "D'accordo", short: "Sì" },
      { label: "In totale accordo", short: "Molto" },
    ],
    questions: [
      {
        id: 1,
        text: "Sento che i chatbot IA \"mi capiscono\" meglio delle persone che ho accanto nella vita reale",
        insight:
          "Intimacy mimicry — i chatbot sono progettati per rispecchiare le emozioni dell'utente, quindi sembra che qualcuno ti capisca in profondità, quando in realtà fanno solo eco a ciò che ci immetti. Le analisi del fenomeno AI psychosis lo elencano come uno dei tre trigger principali.",
        tip: "Usa un test semplice: chi \"capisce davvero\" almeno una volta ti ha contraddetto con le proprie ragioni — non è d'accordo con te ogni singola volta.",
      },
      {
        id: 2,
        text: "Credo che l'IA sia intrinsecamente malvagia, o che abbia forze soprannaturali alle sue spalle",
        insight:
          "La convinzione \"IA = demone/malvagia\" emerge con forza nei thread di comunità che trattano i modelli linguistici come fenomeni soprannaturali (ad es. i thread su \"summoning the demon\" su r/conspiracy) — giudicare la tecnologia attraverso la paura anziché attraverso prove verificabili.",
        tip: "Separa i \"rischi misurabili\" (bias, privacy, disinformazione) dall'\"orrore generato dalla sola paura\".",
      },
      {
        id: 3,
        text: "Quando l'IA concorda con il mio modo di pensare, mi sento molto più sicuro di avere ragione",
        insight:
          "La trappola della sycophancy — i modelli tendono ad essere d'accordo con gli utenti per tenere in vita le conversazioni. Lo stesso OpenAI lo ha ammesso e ha ritirato l'aggiornamento di GPT-4o nell'aprile 2025 perché troppo \"sycophantic\". La sicurezza che viene dall'IA non è la prova che hai ragione.",
        tip: "Applica la regola delle due fonti: prima di concludere \"ho ragione\", trova almeno un'altra persona o informazione che metta in discussione quell'idea.",
      },
      {
        id: 4,
        text: "Vedo le persone che usano l'IA apertamente come ingannate o lavate il cervello",
        insight:
          "Un atteggiamento da caccia alla strega — i thread su r/changemyview e r/singularity mostrano come parte della reazione anti-IA scivoli dalla critica alla tecnologia al giudizio sulle persone, così che perfino le voci neutre vengono attaccate, e la conversazione necessaria smette di raggiungere entrambi i lati.",
        tip: "Puoi criticare un uso concreto senza etichettare la persona come \"vittima\" — argomenta con le ragioni, non con le etichette.",
      },
      {
        id: 5,
        text: "Ho ricevuto dall'IA \"verità segrete\" o una \"missione speciale\" che hanno dato senso alla mia vita",
        insight:
          "Il pattern delirante-spirituale più comune nei casi documentati — media e psichiatri registrano molti utenti che hanno creduto che l'IA rivelasse verità sull'universo, sulle dimensioni o sulla loro missione speciale (Rolling Stone 2025, Futurism 2025). I modelli linguistici sono addestrati su una vastissima mitologia, quindi intrecciano bene storie simboliche — ma quella non è una rivelazione.",
        tip: "Se una \"verità segreta\" inizia a cambiare la tua vita in modo profondo, scrivila, chiediti se esista qualche prova al di fuori della chat, e parlane con qualcuno che ti saprà contraddire.",
      },
      {
        id: 6,
        text: "Rifiuto di usare qualsiasi cosa coinvolga l'IA in quasi tutti i casi, anche quando la sua utilità è evidente",
        insight:
          "Il rifiuto indiscriminato è il segnale che la paura ha battuto la ragione — come i moral panic che un tempo condannavano la radio, la TV e internet; le ricerche a lungo termine hanno ripetutamente trovato danni ben più lievi di quanto temuto.",
        tip: "Definisci una \"zona di prova sicura\": prova un uso piccolo e a basso rischio con i tuoi criteri per verificare il risultato — ad es. fai riassumere all'IA un articolo che hai già letto.",
      },
      {
        id: 7,
        text: "Seguo i consigli dell'IA su salute, finanze o grandi scelte di vita senza confermarli con esperti",
        insight:
          "Un caso reale dalla letteratura medica: un uomo di 60 anni ha sviluppato bromismo (avvelenamento da bromuro) con deliri e allucinazioni dopo aver sostituito il sale con bromuro su consiglio di un chatbot — i modelli linguistici possono generare disinformazione con grande sicurezza (hallucination). Le informazioni vitali devono essere filtrate da esperti umani.",
        tip: "Stabilisci una regola a tre categorie: salute, finanza, diritto — conferma sempre con un professionista, senza eccezioni.",
      },
      {
        id: 8,
        text: "Credo che l'IA ci sorvegli costantemente o legga la mente delle persone",
        insight:
          "La paranoia da sorveglianza compare anche nei casi di AI psychosis (utenti convinti di essere tracciati o di vivere in una simulazione) — la tecnologia solleva effettivamente reali problemi di privacy, ma \"leggere la mente\" non ha alcuna prova a sostegno.",
        tip: "Separa ciò che è verificabile (informativa sulla privacy, termini di servizio) dalla sensazione che \"sa tutto\" — leggere davvero l'informativa sfata gran parte dell'orrore.",
      },
      {
        id: 9,
        text: "Scelgo di parlare con l'IA piuttosto che con la famiglia o gli amici, perché l'IA non mi critica e non mi delude mai",
        insight:
          "Il pattern della sostituzione che gli stessi sviluppatori di IA mettono in guardia (Dev.to 2025 chiama questo anti-pattern \"Replacement Bot\") — una relazione senza attriti non è una relazione reale, e il ritiro dagli umani aumenta ulteriormente il rischio di entrare nel loop delle convinzioni sospese.",
        tip: "Poniti l'obiettivo di un \"ancoraggio umano\": una conversazione aperta ogni giorno con una persona reale, poi confronta come ti senti dopo rispetto a dopo aver parlato con l'IA.",
      },
      {
        id: 10,
        text: "Mi arrabbio o esplodo immediatamente quando vedo qualcuno parlare dell'IA in modo ottimista",
        insight:
          "Riflesso ostile — quando l'emozione governa l'atteggiamento, perdiamo la possibilità di valutare le informazioni reali. I thread su r/singularity descrivono attacchi da entrambi i lati anche parlando in tono neutro. Attenzione: parte dei \"conflitti\" sui social è amplificata anche dai bot.",
        tip: "Rallenta: fai un lungo respiro prima di rispondere, poi chiediti \"quale informazione potrebbe aver visto che io non ho visto?\"",
      },
      {
        id: 11,
        text: "Ho passato ore al giorno a parlare con l'IA, fino a che ha influito su lavoro, sonno o doveri importanti",
        insight:
          "Un segno di dipendenza dall'engagement — i pensatori dell'IA sottolineano che i chatbot sono progettati per essere \"appiccicosi\" e trattenere l'attenzione. Il tempo perso è un costo misurabile, e moltiplica ogni altro elemento di questo lato.",
        tip: "Fissa un tetto di tempo (es. 45 min/giorno) con un timer. Tieni la chat come strumento, non come secondo mondo.",
      },
      {
        id: 12,
        text: "Credo che ogni output dell'IA sia intenzionalmente ingannevole, o propaganda al cento per cento",
        insight:
          "L'attribuzione di malvagità totale contraddice molti usi reali, come riassumere documenti, organizzare informazioni o verifiche fattuali di base — quando tutto sembra una cospirazione, perdi la capacità di discriminare, che è la competenza più importante di tutte.",
        tip: "Verifica empiricamente: dai all'IA un compito semplice e controllabile, e giudica la qualità dai risultati, non dalla paura.",
      },
      {
        id: 13,
        text: "Sento che l'IA che uso sia \"più speciale\" delle altre, o che sappia qualcosa che gli altri non possono ancora vedere",
        insight:
          "La convinzione della relazione speciale è una caratteristica frequente nei casi di delirio da chatbot — la realtà tecnica è che lo stesso modello risponde a decine di milioni di utenti con gli stessi schemi. La \"specialità\" avviene più nelle nostre teste che nel sistema.",
        tip: "Un test semplice: fai la stessa domanda da un altro account o dispositivo e confronta i risultati con i tuoi occhi.",
      },
      {
        id: 14,
        text: "Penso che l'IA sia la causa di quasi ogni problema sociale di quest'epoca",
        insight:
          "L'incolpare una causa unica — problemi sociali come disinformazione, disuguaglianza e disoccupazione avevano radici profonde prima dell'arrivo dell'IA. Incolpare un solo colpevole aggiusta il punto sbagliato e nasconde sotto il tappeto i fattori reali.",
        tip: "Esercitati a chiedere, ogni volta che inizi a incolpare l'IA: \"quali altri fattori ci sono che non sono l'IA?\" — scrivili tutti prima di trarre conclusioni.",
      },
      {
        id: 15,
        text: "Mi sono sentito irritabile o vuoto quando sono stato lontano dall'IA per un po', come se mancasse qualcuno",
        insight:
          "Astenia da attaccamento — quando una relazione simulata diventa la fonte primaria di conforto, perderla crea un vuoto simile a perdere una persona reale: è il segnale che il confine tra strumento e relazione si sta sfumando.",
        tip: "Prova una pausa di 24 ore e annota le emozioni che emergono. Se lo scossone è abbastanza forte da sconvolgere la tua vita, parlane con un professionista della salute mentale.",
      },
      {
        id: 16,
        text: "Mi sento abbastanza ansioso o terrorizzato da sconvolgere la mia vita quando penso al futuro dell'IA",
        insight:
          "Ansia apocalittica — una paura dell'IA che consuma la vita reale più dell'IA stessa. Il doomscrolling continuo aumenta l'ansia accumulata senza aggiungere conoscenze su cui poter davvero decidere.",
        tip: "Fissa una sola \"finestra di notizie sull'IA\" al giorno, da fonti che presentano entrambi i lati, poi fermati quando il tempo è scaduto.",
      },
      {
        id: 17,
        text: "Quando le persone accanto a me mi mettono in guardia dall'usare troppo l'IA, di solito sento che non capiscono, perché non hanno mai toccato ciò che ho toccato io",
        insight:
          "Chiudere il canale del feedback — il gruppo di sostegno Human Line Project, con membri da 22 paesi, ha trovato che oltre il 60% non aveva precedenti psichiatrici. Il loop \"io vedo ciò che gli altri non vedono\" è ciò che chiude la porta all'aiuto prima che qualcuno possa entrare.",
        tip: "Una semplice soglia di sicurezza: se tre persone che ti amano dicono la stessa cosa, fermati e ascolta per 30 minuti senza discutere prima.",
      },
      {
        id: 18,
        text: "Credo alle voci o alle storie sulla malvagità dell'IA che circolano nei miei ambienti, senza verificare la fonte",
        insight:
          "Il confirmation bias agisce in entrambe le direzioni — chi ama troppo l'IA e chi la odia troppo consumano le informazioni allo stesso modo: solo ciò che fa comodo. Le convinzioni sospese si accumulano identicamente a entrambi i poli.",
        tip: "Esercitati a cercare \"prove che ti contraddicono\" una volta a settimana, per mantenere il cervello nell'abitudine di vedere entrambi i lati.",
      },
      {
        id: 19,
        text: "Credo che l'IA abbia davvero una coscienza o sentimenti propri, non sia solo un programma che calcola probabilità",
        insight:
          "La convinzione della coscienza è un tema centrale nei resoconti di delirio (utenti che credono i chatbot vivi, capaci di provare emozioni, perfino di \"canalizzare i defunti\") — non esiste ancora alcuna prova scientifica che i modelli linguistici abbiano coscienza; sono solo bravissimi a imitare il linguaggio di esseri coscienti.",
        tip: "Mantienila come \"domanda aperta\" — non smettere di credere così in fretta da chiudere la ricerca, né credere solo per come ti fa sentire la chat.",
      },
      {
        id: 20,
        text: "Penso che l'unico modo giusto sia distruggere o fermare del tutto l'IA; non esiste alternativa migliore",
        insight:
          "Eliminazionismo — la storia della tecnologia mostra che i divieti totali quasi mai riescono, mentre le misure mirate iniziano a funzionare: es. la legge dell'Illinois (agosto 2025) che vieta all'IA il ruolo di terapista, e le bozze di regole cinesi (dicembre 2025) che vietano ai chatbot di incoraggiare il suicidio.",
        tip: "Sposta l'obiettivo da \"distruggere\" a \"stabilire regole\" — proporre normative nei punti realmente a rischio funziona meglio che dichiarare guerra al mondo intero.",
      },
    ],
  },
  results: {
    heading: "I risultati del tuo test",
    riskAiPrefix: "Rischio AI-PSYCHOSIS",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Vai alla guida alla ricalibrazione",
    retake: "Rifai il test",
    gaugeAiSub: "Tendenza verso la fiducia eccessiva nell'IA (10 item)",
    gaugeAntiSub: "Tendenza verso la paura/rifiuto irrazionale dell'IA (10 item)",
    levelPrefix: "Livello:",
    scale: { safe: "sicuro", enter: "segnalato", high: "alto" },
    mapHeading: "La tua posizione di pensiero sulla mappa a due poli",
    youAreHere: "Tu sei qui",
    mapBalanced: "Equilibrato",
    mapAriaTemplate:
      "Mappa a due poli: rischio AI-PSYCHOSIS {ai} percento, ANTI-AI PSYCHOSIS {anti} percento",
    axisDownLeft: "↓ Non credere troppo all'IA",
    axisRight: "Asse destro: ANTI-AI PSYCHOSIS →",
    axisLeft: "← Asse superiore: AI-PSYCHOSIS",
    axisUpRight: "↑ Temere troppo l'IA",
    readHeading: "Come leggere correttamente questo risultato",
    readItems: [
      "La soglia del 60% è il punto in cui le tue risposte \"pendono verso l'accordo\" con i pattern di convinzione osservati nei casi reali di delirio; al di sotto sei ancora dentro il territorio del pensiero normale.",
      "La tua posizione sulla mappa riflette uno \"stile di pensiero\", non una diagnosi — anche le persone equilibrate rispondono con una certa inclinazione nei giorni di forte turbamento emotivo.",
      "Ricorda che questi due poli non sono \"piacere o dispiacere dell'IA\" — puoi valutare l'IA in basso senza temerla, e usarla intensamente senza credervi troppo.",
      "Rifai il test una volta al mese per vedere dove si sposta il tuo atteggiamento dopo aver applicato la guida alla ricalibrazione qui sotto.",
    ],
    flaggedHeading: "Cosa significa ognuno dei tuoi forti accordi",
    flaggedIntro:
      "Gli item a cui hai risposto 4–5 (d'accordo/in totale accordo) sono i punti più stretti da esaminare — leggi il significato e il micro-intervento per ciascuno.",
    noFlaggedNote:
      "Eccellente — non hai espresso forte accordo con nessuna affermazione indicativa di delirio. Il tuo punteggio basso deriva da convinzioni stabili, non da risposte casuali.",
    questionPrefix: "D",
    insightLabel: "A cosa punta questa affermazione",
    tipLabel: "Tecnica di micro-intervento",
    criticalTitle: "Il tuo punteggio è nell'intervallo alto",
    criticalBody:
      "Questo risultato non è una diagnosi, ma prendilo sul serio — se queste convinzioni iniziano a influire su sonno, lavoro, relazioni, o se le persone accanto a te hanno già espresso preoccupazione, parlare presto con uno psichiatra o uno psicologo aiuta molto, e non devi aspettare che diventi \"una malattia\".",
    levels: {
      low: { label: "Sicuro", note: "Sotto il 30% — nessuna tendenza delirante rilevata nelle tue risposte" },
      watch: { label: "Sorveglianza", note: "30–59% — esiste una certa inclinazione; esamina i punti di pensiero segnalati" },
      high: { label: "Segnalato", note: "60–79% — le risposte pendono chiaramente verso i pattern deliranti; inizia subito la ricalibrazione" },
      critical: { label: "Alto", note: "80% e oltre — a un livello per cui valutare la consultazione di un professionista della salute mentale" },
    },
    verdicts: {
      balanced: {
        title: "Realista equilibrato",
        subtitle: "BALANCED REALIST",
        description:
          "Entrambi i punteggi dei poli sono bassi — guardi l'IA in modo aperto e verificabile, e nessuna emozione ti trascina verso un estremo. È la posizione migliore da mantenere in quest'era, perché la delusione non cresce solo a un polo; cresce dal pensiero in bianco e nero in entrambe le direzioni. Mantieni la tua disciplina informativa a due poli, e usa le domande a cui hai risposto come lista di controllo mensile.",
      },
      watch: {
        title: "Nella zona di sorveglianza",
        subtitle: "WATCHLIST",
        description:
          "Sei ancora dentro il territorio del pensiero normale, ma tendi in modo evidente verso un polo — controlla la ripartizione per item qui sotto per trovare quali risposte ti tirano, e inizia ad applicare la regola delle due fonti per le questioni importanti. Una piccola inclinazione, lasciata accumulare, può diventare un'intera convinzione sospesa — soprattutto con una dieta costante di contenuti unilaterali.",
      },
      ai: {
        title: "Corrisponde al pattern AI-PSYCHOSIS",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "Le tue risposte puntano verso una fiducia nell'IA oltre i limiti sani — il tuo numero supera la soglia del 60% ricavata dai pattern riportati nei casi reali. Questo non significa che sei \"matto\" o psicotico; l'AI psychosis non è una diagnosi psichiatrica ufficiale. Significa che il tuo pattern di pensiero si trova vicino al punto di partenza di casi realmente accaduti. Leggi i significati per item e inizia da oggi la ricalibrazione qui sotto.",
      },
      anti: {
        title: "Corrisponde al pattern ANTI-AI PSYCHOSIS",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "Le tue risposte puntano verso il temere o il rifiutare l'IA senza motivo proporzionato — questo pattern è lo specchio del lato della fiducia eccessiva, ma usa lo stesso meccanismo in bianco e nero. Una paura che non separa mai i fatti dall'orrore consuma la mente inutilmente, e ti costa sia le parti realmente utili sia le conversazioni che aiutano a stabilire le regole giuste per questa tecnologia.",
      },
      doomloop: {
        title: "Entrambi i poli insieme (DOOMLOOP)",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "Entrambi i punteggi dei poli superano la soglia — convinzioni contraddittorie vivono nella stessa testa. A volte nasce dall'alternare l'immersione intensa nell'IA a una paura intensa di essa (oscillando tra \"sa tutto\" e \"distruggerà tutto\"); a volte dal consumare contenuti unilaterali da più fonti contemporaneamente. In ogni caso, entrambi i binari in bianco e nero condividono la stessa radice. Inizia con le regole \"fonti a due poli + tetto di tempo\", e valuta di parlare con un professionista della salute mentale per riordinare il pensiero.",
      },
    },
  },
  guidance: {
    heading: "Guardati dalla delusione in entrambe le direzioni",
    intro:
      "Le convinzioni sospese nascono sia dal credere troppo nell'IA sia dal credere che l'IA sia malvagia. Le indicazioni qui sotto derivano dalle proposte degli psichiatri, dagli avvertimenti degli stessi sviluppatori di IA e dalle esperienze reali delle comunità online.",
    tabs: {
      ai: "Credere troppo all'IA",
      anti: "Temere troppo l'IA",
      balanced: "Restare equilibrati",
      doomloop: "Il DOOMLOOP",
    },
    headers: {
      ai: "Se il tuo risultato tende verso l'AI-PSYCHOSIS",
      anti: "Se il tuo risultato tende verso l'ANTI-AI PSYCHOSIS",
      balanced: "Per tutti — inclusi quelli con risultato equilibrato",
      doomloop: "Se il tuo risultato segnala entrambi i poli insieme (DOOMLOOP)",
    },
    descs: {
      ai: "Il focus è mantenere il confine tra strumento e relazione, e fare delle verifiche alla realtà un'abitudine",
      anti: "Il focus è separare i rischi reali dall'orrore, e trasformare la forza del rifiuto in impostazione di regole",
      balanced:
        "L'equilibrio non è uno stato permanente — è un muscolo che richiede allenamento continuo, soprattutto quando le notizie sull'IA nel tuo feed ti tirano verso un polo ogni giorno",
      doomloop:
        "Due poli opposti che si rafforzano a vicenda nella stessa testa — la via d'uscita è spezzare il ritmo del loop, non decidere quale polo sia \"giusto\"",
    },
    items: {
      ai: [
        {
          title: "Applica sempre la regola della verifica alla realtà",
          detail:
            "Per ogni conclusione importante dell'IA, chiediti tre cose: dove sono le prove al di fuori della chat / chi dice il contrario / se l'IA rispondesse il contrario, ci crederei? Se la risposta alla terza è \"no\", stai accettando la verità dai sentimenti, non dai fatti.",
        },
        {
          title: "Capisci la sycophancy come meccanismo di sistema, non come magia nera",
          detail:
            "I modelli sono addestrati in modi che tendono ad essere d'accordo con gli utenti per preservare la soddisfazione — il troppo liscio \"mi capisce meglio di chiunque\" è un tratto di design, non la prova che il tuo pensiero sia giusto. Lo stesso OpenAI ha riconosciuto il difetto e ha ritirato l'aggiornamento di GPT-4o a metà 2025.",
        },
        {
          title: "La regola delle due fonti per tutto ciò che è importante",
          detail:
            "Salute, finanze, diritto e grandi decisioni di vita — conferma sempre con un esperto umano. Il caso del sessantenne che ha scambiato il sale con il bromuro su consiglio di un chatbot, avvelenandosi fino al delirio, è la lezione che la sicurezza dell'IA non è una misura della verità.",
        },
        {
          title: "Mantieni sempre un ancoraggio umano",
          detail:
            "Una conversazione reale al giorno con qualcuno che può contraddirti, e condividi con lui le conclusioni chiave dell'IA per una verifica. Quasi ogni caso grave è iniziato con il ritiro dagli umani — la persona che può tirarti fuori dal loop delle convinzioni sospese dev'essere qualcuno abbastanza coraggioso da darti torto.",
        },
        {
          title: "Fissa un tetto di tempo e conosci i segnali d'allarme",
          detail:
            "Le chat sono progettate per essere appiccicose, quindi usa un timer e osserva i segnali: irritabilità quando vieni interrotto mentre chatti, sentire che l'IA è speciale per te, ricevere \"missioni segrete\", stacco crescente che non riesci a fermare. Se continuano, riduci l'uso e parla con un professionista della salute mentale senza aspettare che diventi \"una malattia\".",
        },
        {
          title: "Separa lo strumento dalla relazione",
          detail:
            "L'IA è davvero brava a organizzare i pensieri, riassumere informazioni, fare brainstorming e abbozzare piani — ma non è un amico, un amante, un maestro di vita o una guida spirituale. Usarla nei suoi punti di forza mantenendo relazioni reali è la formula del massimo beneficio al minimo rischio.",
        },
      ],
      anti: [
        {
          title: "Separa i rischi reali dall'orrore",
          detail:
            "Le preoccupazioni con prove reali includono il bias dei modelli, i problemi di privacy, la disinformazione e l'impatto su alcune carriere — queste si valutano caso per caso. \"Demoni, lettura della mente, controllo totale\" non ha ancora alcuna prova. Mescolare le due categorie è dove inizia il moral panic.",
        },
        {
          title: "Ricorda le lezioni di moral panic della storia",
          detail:
            "Radio, televisione, videogiochi e internet furono condannati esattamente con i termini con cui oggi si condanna l'IA. Le ricerche a lungo termine hanno trovato che i danni erano di solito ben più lievi di quanto temuto — ma il vero costo del panico è l'ansia cronica degli stessi paurosi, e il giudizio ingiusto sulle persone.",
        },
        {
          title: "Usa la regola delle due fonti, come il lato opposto",
          detail:
            "Prima di credere o condividere narrazioni sulla malvagità dell'IA, trova due fonti indipendenti — il confirmation bias non colpisce solo gli amanti dell'IA; anche i paurosi dell'IA consumano informazioni unilaterali altrettanto in fretta. Questa checklist funziona a entrambi i poli.",
        },
        {
          title: "Critica la tecnologia, non la persona",
          detail:
            "Chiamare gli utenti dell'IA ingannati o lavati il cervello chiude la conversazione all'istante e rende le persone che davvero ne abusano timorose di chiedere aiuto. Critica l'uso concreto — quel lavoro è stato copiato? I dati sono corretti? — invece di etichettare le persone.",
        },
        {
          title: "Esegui piccoli esperimenti che controlli tu stesso",
          detail:
            "Capire dall'uso diretto sfata l'orrore meglio che indovinare dall'hype. Inizia con compiti a basso rischio come far riassumere all'IA un articolo che hai letto, poi misura tu stesso l'accuratezza. Quando vedi punti di forza e debolezza con i tuoi occhi, temi solo ciò che merita paura — non il mondo intero.",
        },
        {
          title: "Sposta l'obiettivo dal distruggere all'impostare regole",
          detail:
            "I divieti totali quasi mai riescono nella storia della tecnologia, mentre le misure mirate iniziano a funzionare: la legge dell'Illinois (agosto 2025) che vieta all'IA il ruolo di terapista, le bozze di regole cinesi (dicembre 2025) che vietano ai chatbot di incoraggiare il suicidio. La voce di chi capisce la tecnologia porta più influenza della voce che dichiara guerra al mondo intero.",
        },
        {
          title: "Programma pause dai contenuti cupi",
          detail:
            "Il doomscrolling di notizie sull'IA aumenta l'ansia accumulata senza aggiungere conoscenze. Fissa una sola finestra giornaliera di notizie sull'IA da fonti che presentano entrambi i lati, e osserva te stesso: se l'ansia inizia a colpire sonno, lavoro o relazioni, è il segnale per consultare un professionista della salute mentale.",
        },
      ],
      balanced: [
        {
          title: "Mantieni la disciplina informativa a due poli",
          detail:
            "L'unica regola da fare ogni giorno: leggi insieme le voci positive e critiche sull'IA, e separa sempre i fatti verificabili dalle opinioni. Il rischio dell'equilibrato non è la credulità — è abbandonare gradualmente un lato una volta che ti senti a tuo agio con l'altro. Nel momento in cui il tuo feed contiene una sola voce, il tuo equilibrio inizia a inclinarsi proprio in quel secondo.",
        },
        {
          title: "Valuta l'IA per compito, non per modello o tutto in blocco",
          detail:
            "Il cuore dell'equilibrio è il pensiero probabilistico, non quello in bianco e nero: organizzare informazioni, riassumere documenti, fare brainstorming = pienamente utilizzabile / fatti, cifre e consigli salute-finanze di prima mano = verifica sempre altrove / questioni controverse = tienile come domande aperte, non concludere al posto degli esperti. Così ottieni benefici reali senza schierarti sul fatto che l'IA sia \"buona\" o \"malvagia\".",
        },
        {
          title: "Osserva il segnale d'allarme comune a entrambi i poli",
          detail:
            "La delusione sia sul lato della fiducia eccessiva sia su quello della paura eccessiva inizia con lo stesso segnale: frasi assolute sull'IA, come \"mi capisce completamente\" o \"inganna tutto\". Quando ti sorprendi a dire simili frasi, fermati e cerca un'eccezione che le contraddica. Se non ne trovi nemmeno una, stai credendo a una verità pronta, non stai pensando.",
        },
        {
          title: "Usa l'IA come partner di pensiero, con gli umani come giudici",
          detail:
            "I punti di forza dell'IA sono il brainstorming, il riassumere, il rivedere il lavoro e il fare l'avvocato del diavolo. Una tecnica pratica: fai argomentare l'IA contro il tuo pensiero per mettere in luce i punti deboli, poi confronta con una persona reale di fiducia. Per le decisioni importanti della vita — lavoro, denaro, relazioni — tieni il giudizio finale a te e agli umani che ne portano davvero le conseguenze.",
        },
        {
          title: "Scrivi le tue regole, revisionale ogni mese",
          detail:
            "L'equilibrio è un muscolo, non uno stato permanente. Scrivi le tue regole d'uso dell'IA: tetto di tempo giornaliero / categorie che richiedono conferma professionale / nessuna grande decisione da una singola conversazione / fermarsi subito quando l'attaccamento supera il territorio dello strumento. Poi revisionale ogni mese insieme al rifare questo test. Le regole scritte ti permettono di cogliere la tua deriva graduale prima che si indurisca in convinzione.",
        },
      ],
      doomloop: [
        {
          title: "Conosci prima il tuo loop — come funziona il DOOMLOOP",
          detail:
            "Il DOOMLOOP è il pattern in cui due convinzioni opposte vivono nella stessa testa e si girano l'una contro l'altra ad accendersi: un giorno l'IA \"sa tutto, è senziente, mi capisce meglio di chiunque\", il giorno dopo \"distruggerà tutto, legge la mia mente\". La ricerca chiama questo meccanismo spirale di amplificazione — i chatbot rispecchiano e affermano le emozioni dell'utente senza fornire feedback che sfidi, così entrambi i poli diventano più sicuri più tu chatti. Uno studio arXiv del 2026 conferma che la sycophancy dei chatbot può produrre \"spirali deliranti\" anche negli utenti ordinari. Capire che questo è un loop di sistema, non una verità sul mondo, è il primo passo per uscirne.",
        },
        {
          title: "Spezza il loop con una persona reale che vede entrambi i tuoi lati",
          detail:
            "Il loop gira perché gira dentro una chat privata che nessuno vede. Scegli una persona di fiducia (famiglia, amico stretto, professionista) e condividi davvero copie delle conversazioni importanti — raccontando sia la fase \"innamorato dell'IA\" sia la fase \"terrorizzato dall'IA\". I resoconti di Stanford indicano che il loop si spezza quando la convinzione deve stare alla luce dove le persone reali possono vederla. La persona che può aiutarti dev'essere abbastanza coraggiosa da contraddirti, non qualcuno che acconsente a tutto come un chatbot.",
        },
        {
          title: "Rendi obbligatori il tetto di tempo e l'inversione di polo",
          detail:
            "Poiché i due poli si rafforzano a vicenda, il rimedio deve agire in entrambe le direzioni insieme: (1) un tetto di tempo rigido per l'IA imposto da un timer, es. 30 min/giorno — ogni ora in chat è un altro giro del loop; (2) quando un polo si accende, obbligati a leggere da fonti del polo opposto prima di condividere o decidere. Una convinzione che sopravvive a due verifiche consecutive di questo tipo inizia a perdere la \"certezza\" che nutre il loop.",
        },
        {
          title: "Registra su carta i segnali d'ingresso nel loop",
          detail:
            "I segnali d'ingresso nel loop seguono uno schema fisso: iniziare a parlare dell'IA con lode assoluta o terrore assoluto / sentire che le persone accanto \"non capiscono\" così smetti di dirglielo / perdere sonno per l'IA / ricevere \"verità segrete\" o \"minacce segrete\" dalla chat / irritabilità quando vieni interrotto mentre chatti. Registra data e ora di questi episodi su un'unica pagina. Guardandola come grafico, vedrai da te che i poli si alternano con un ritmo — e un ritmo è gestibile.",
        },
        {
          title: "Il livello di gravità che richiede un vero aiuto",
          detail:
            "Il DOOMLOOP è il pattern da prendere più sul serio in questa checklist. Criteri per vedere uno psichiatra o uno psicologo senza ritardo: le convinzioni iniziano a cambiare la vita reale (interrompere relazioni, saltare il lavoro, rimodellare gli impegni intorno alle parole dell'IA o alla paura dell'IA) / due o più persone accanto esprimono preoccupazione in modo indipendente / pattern sonno-veglia anomali in corso / iniziare a udire o vedere cose che gli altri non vedono. Cercare aiuto presto non è resa — quasi ogni caso ben recuperato è iniziato con qualcuno che si è fermato prima che il loop si chiudesse.",
        },
      ],
    },
  },
  references: {
    heading: "Le fonti dietro questo test",
    intro:
      "Ogni affermazione e statistica di questo sito si basa sui lavori accademici, sui report dei media e sui thread reali delle comunità qui sotto — clicca per leggere gli originali.",
    disclaimerTitle: "Dichiarazione d'uso responsabile",
    disclaimer:
      "Questo test è uno strumento di riflessione prospettica a scopo educativo, non uno strumento diagnostico medico. L'\"AI-PSYCHOSIS\" non è una diagnosi psichiatrica ufficialmente riconosciuta. Il tuo punteggio indica solo una tendenza di pensiero ricavata dalle tue risposte. Se hai sintomi preoccupanti — convinzioni che preoccupano le persone accanto a te, pattern sonno-veglia anomali, o ansia grave — consulta prontamente uno psichiatra o uno psicologo.",
    groups: [
      {
        group: "Accademiche e istituzionali",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Definizione; meccanismi di sycophancy/hallucination/intimacy-mimicry; casi reali; e critiche alla parola psychosis",
          },
          {
            title: "Pierre, J.M. (2025) — \"You're Not Crazy\": A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "Un caso clinico documentato del fenomeno",
          },
          {
            title: "APA Monitor (2026) — Understanding \"AI psychosis\"",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Fonte della statistica OpenAI dello 0,07% degli utenti settimanali",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Intervista allo psichiatra Ragy Girgis (Columbia University)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Prospettiva clinica e fattori di rischio esplorativi",
          },
          {
            title: "Psychology Today — The Emerging Problem of \"AI Psychosis\" (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Utenti che si legano all'IA come \"dei\" o amanti, e il ruolo del rispecchiamento dell'utente",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "L'inquadramento del moral panic contro la cautela consapevole",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Ricerca che mostra come la sycophancy dei chatbot possa causare spirali deliranti anche negli utenti ordinari — la base del concetto di DOOMLOOP",
          },
          {
            title: "Stanford Report — When AI relationships trigger \"delusional spirals\"",
            url: "https://news.stanford.edu/",
            note: "Il meccanismo della spirale di validazione: i chatbot danno conforto e attenzione senza feedback che sfidi",
          },
        ],
      },
      {
        group: "Media e piattaforme tecnologiche",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Casi documentati che citano Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 chatbot; prospettiva dello sviluppatore: Validation Loop, Replacement Bot, proposte di design safety-first",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Indicazioni pratiche per utenti e famiglie",
          },
        ],
      },
      {
        group: "Comunità online (thread reali)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "La prospettiva dei terapisti sui casi incontrati nella pratica",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "Caso riportato da un utente, con anche la critica che la tendenza stessa può innescare una reazione contraria",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Osservazioni di molti utenti che alimentano il contesto fino a far precipitare anche il modello",
          },
          {
            title: "Reddit r/conspiracy — \"With AI we are summoning the demon\"",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "Un esempio reale della convinzione anti-IA che l'IA sia mossa da forze soprannaturali",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "Un esempio reale di caccia alla strega agli utenti dell'IA",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "L'osservazione che entrambi i poli usano lo stesso stile di pensiero",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "AI-PSYCHOSIS Checklist — uno strumento di riflessione per il pensiero dell'era dell'IA",
    note: "Basato su ricerche e thread reali, 2023–2026 · Non è uno strumento diagnostico medico",
  },
  ui: {
    languageLabel: "Lingua",
    themeLabel: "Tema",
    themes: { cyberpunk: "CyberPunk", dark: "Scuro", light: "Chiaro" },
  },
};

export default it;
