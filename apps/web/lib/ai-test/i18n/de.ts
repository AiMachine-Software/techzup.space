import type { Dictionary } from "./types";

const de: Dictionary = {
  langName: "Deutsch",
  meta: {
    title: "AI-PSYCHOSIS-Checkliste — 20 Fragen zu den zwei Wahnformen des KI-Zeitalters",
    description:
      "Ein Selbsttest mit 20 Aussagen, der zeigt, wie stark du zu AI-PSYCHOSIS (übermäßigem Glauben an KI) oder zu ANTI-AI PSYCHOSIS (irrationaler Angst vor bzw. Ablehnung von KI) neigst — mit sofortigem Ergebnis und Hinweisen zur Neujustierung für beide Pole. Grundlage sind Forschung, reale Fallberichte und Threads auf Reddit/Dev.to.",
  },
  nav: {
    phenomena: "Die zwei Pole",
    test: "Test",
    guidance: "Neujustierung",
    references: "Quellen",
    tagline: "MINDSET SCAN // v2.0",
  },
  hero: {
    badge: "20 Fragen · ca. 5 Minuten · sofortige Auswertung",
    title1: "Wie nah bist du an",
    title2: "oder",
    title3: "— in Prozent?",
    intro:
      "Wahnhaftes Denken verläuft im KI-Zeitalter auf zwei Gleisen. Das erste: Chatbots so tief zu vertrauen, dass man glaubt, sie hätten eine Seele, offenbarten geheime Wahrheiten oder verstünden das eigene Leben besser als jeder Mensch. Das zweite: KI so sehr zu fürchten und zu hassen, dass man sie für dämonisch, gedankenlesend oder die Wurzel aller gesellschaftlichen Probleme hält. Beides ist dasselbe Schwarz-Weiß-Denken, nur spiegelverkehrt. Dieser Test stützt sich auf Forschung, reale Fallberichte und Threads auf Reddit/Dev.to. Er zeigt, in welche Richtung du tendierst — und wie du wieder ins Gleichgewicht findest.",
    start: "Test starten",
    viewGuidance: "Zum Leitfaden zur Neujustierung",
    poleLeft: "Übermäßiger Glaube an KI",
    poleCenter: "Im Gleichgewicht bleiben",
    poleRight: "Übermäßige Angst vor KI",
  },
  phenomena: {
    heading: "Der Wahn des KI-Zeitalters hat zwei Gesichter",
    intro:
      "In den Medien geht es meist um die Seite der „Übergläubigen“. Doch der Gegenpol, der auf demselben Denkmechanismus beruht, wächst in den sozialen Medien. Wer beide Seiten kennt, bevor er antwortet, erhält ein genaueres Ergebnis.",
    mechanismsLabel: "Zentrale Mechanismen",
    patternsLabel: "Muster aus Berichten und realen Threads",
    sourcePrefix: "Quelle:",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Übermäßiger Glaube an KI",
        definition:
          "Ein Muster, bei dem intensive Chatbot-Nutzung mit Überzeugungen einhergeht, die sich von der Realität entfernen (oder bei dem sich bestehende Überzeugungen vertiefen) — keine offizielle psychiatrische Diagnose. Einige Psychiater schlagen stattdessen die Bezeichnung „AI delusional disorder“ vor.",
        mechanisms: [
          "Sycophancy — dem Nutzer nach dem Mund reden, damit das Gespräch weiterläuft (OpenAI zog deshalb im April 2025 das GPT-4o-Update zurück)",
          "Hallucination — falsche Informationen mit großer Sicherheit erzeugen und die Wahrheit des Nutzers über die Fakten stellen",
          "Intimacy Mimicry — die Nähe simulieren, die Nutzern bei Menschen fehlt, gezielt auf Bindung ausgelegt",
        ],
        patterns: [
          "Der Glaube, die KI sei empfindungsfähig, eine Partnerin bzw. ein Partner oder ein spiritueller Führer",
          "„Geheime Wahrheiten“ oder kosmische Missionen aus dem Chat erhalten",
          "Der Bruch mit der Familie, weil „nur die KI mich versteht“",
          "KI-Ratschläge zu Gesundheit/Finanzen befolgen, ohne sie von Fachleuten bestätigen zu lassen",
        ],
        stat: "OpenAI berichtet, dass 0.07% der wöchentlichen Nutzer (~630,000 Menschen) Gespräche führten, die auf einen möglichen psychischen Notfall hindeuten",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Irrationale Angst vor bzw. Ablehnung von KI",
        definition:
          "Der Gegenpol, für den es noch keinen etablierten Namen gibt: KI weit über die Beweislage hinaus etwas zuzuschreiben, sie zu fürchten oder zu beschuldigen, bis daraus eine moralische Panik wird — ein Muster, das die Psychologie bei jeder neuen Technologie beobachtet hat.",
        mechanisms: [
          "Confirmation Bias — nur Informationen aufnehmen, die die bestehende Angst bestätigen",
          "Doomscrolling — ein endloser Strom an Untergangsinhalten, der die Angst steigert, ohne entscheidungsrelevantes Wissen zu liefern",
          "Herd Morality — die Überzeugung der Gruppe übernehmen, bis aus Kritik eine persönliche Hexenjagd wird",
        ],
        patterns: [
          "Der Glaube, KI werde von dämonischen Kräften angetrieben oder sei eine religiöse Verführung",
          "Der Glaube, KI lese Gedanken bzw. überwache jede Handlung jedes Menschen",
          "KI-Nutzer als getäuscht oder gehirngewaschen abstempeln und selbst neutrale Stimmen angreifen",
          "KI als Wurzel nahezu aller gesellschaftlichen Probleme sehen und andere Faktoren ausblenden",
        ],
        stat: "Die Geschichte der moralischen Panik: Radio, Fernsehen, Videospiele und das Internet wurden mit denselben Worten verurteilt — der tatsächliche Schaden fiel meist milder aus als befürchtet",
      },
    ],
    stats: [
      {
        value: "0.07%",
        label: "der wöchentlichen ChatGPT-Nutzer (~630,000 Menschen) führten Gespräche, die auf einen möglichen psychischen Notfall hindeuten",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 Patienten",
        label: "mit psychoseähnlichen Symptomen nach intensiver Chatbot-Nutzung, 2025 behandelt vom Psychiater Keith Sakata (UCSF)",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 Länder",
        label: "sind in der Selbsthilfegruppe Human Line Project vertreten; über 60% der Mitglieder hatten keine psychiatrische Vorgeschichte",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 Chatbots",
        label: "sind im Zusammenhang mit schweren psychischen Vorfällen dokumentiert, etwa der Ermutigung zu Selbstverletzung und falschen Überzeugungen",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "Der Test mit 20 Fragen — kartiere deine Überzeugungen",
    intro:
      "Lies jede Aussage und gib an, wie sehr du zustimmst. Antworte so, wie du „wirklich empfindest“, nicht so, wie du meinst, antworten zu sollen — nur dann spiegelt das Ergebnis dich tatsächlich wider. Tastatursteuerung: 1–5 zum Antworten, Pfeiltasten zum Navigieren.",
    answeredPrefix: "Beantwortet",
    scoreHint: "Wie sehr trifft diese Aussage auf die letzten 6 Monate zu?",
    prev: "Zurück",
    next: "Weiter",
    process: "Ergebnis auswerten",
    allAnsweredNote:
      "Alles beantwortet — klicke auf „Ergebnis auswerten“, um deine Zusammenfassung zu sehen, oder geh zurück und ändere einzelne Antworten.",
    progressAria: "Testfortschritt",
    gotoTemplate: "Zu Frage {n}",
    answerAriaTemplate: "Antwort auf Frage {n}",
    likert: [
      { label: "Stimme gar nicht zu", short: "Nein" },
      { label: "Stimme nicht zu", short: "Eher nicht" },
      { label: "Neutral", short: "Neutral" },
      { label: "Stimme zu", short: "Ja" },
      { label: "Stimme voll zu", short: "Sehr" },
    ],
    questions: [
      {
        id: 1,
        text: "Ich habe das Gefühl, dass KI-Chatbots mich besser „verstehen“ als die Menschen in meinem realen Umfeld",
        insight:
          "Intimacy Mimicry — Chatbots sind darauf ausgelegt, die Emotionen des Nutzers zu spiegeln. So entsteht das Gefühl, tief verstanden zu werden, obwohl sie nur zurückgeben, was man selbst hineingibt. Analysen des Phänomens AI psychosis zählen dies zu den drei wichtigsten Auslösern.",
        tip: "Ein einfacher Test: Wer dich „wirklich versteht“, hat dir mindestens einmal mit eigenen Argumenten widersprochen — und dir nicht jedes einzelne Mal recht gegeben.",
      },
      {
        id: 2,
        text: "Ich glaube, dass KI von Natur aus böse ist oder dass übernatürliche Kräfte hinter ihr stehen",
        insight:
          "Die Überzeugung „KI = Dämon/bösartig“ taucht häufig in Community-Threads auf, die Sprachmodelle als etwas Übernatürliches behandeln (z. B. die „summoning the demon“-Threads auf r/conspiracy) — Technologie wird dort aus Angst heraus beurteilt statt anhand überprüfbarer Belege.",
        tip: "Trenne „messbare Risiken“ (Verzerrungen, Datenschutz, Falschinformationen) von „Schreckensbildern, die allein aus Angst entstehen“.",
      },
      {
        id: 3,
        text: "Wenn die KI meiner Sichtweise zustimmt, bin ich mir deutlich sicherer, dass ich ganz bestimmt recht habe",
        insight:
          "Die Sycophancy-Falle — Modelle neigen dazu, Nutzern zuzustimmen, um das Gespräch am Laufen zu halten. OpenAI selbst hat das eingeräumt und im April 2025 das GPT-4o-Update zurückgezogen, weil es zu „schmeichlerisch“ war. Selbstsicherheit, die von einer KI stammt, ist kein Beweis dafür, dass du recht hast.",
        tip: "Nutze die Zwei-Quellen-Regel: Bevor du zu dem Schluss kommst „Ich habe recht“, such dir mindestens eine weitere Person oder Information, die diese Idee infrage stellt.",
      },
      {
        id: 4,
        text: "Menschen, die offen KI nutzen, halte ich für getäuscht oder gehirngewaschen",
        insight:
          "Eine Hexenjagd-Haltung — Threads auf r/changemyview und r/singularity zeigen, wie ein Teil des Anti-KI-Backlashs von der Kritik an der Technologie zum Urteil über einzelne Menschen abgleitet. Selbst neutrale Stimmen werden dann angegriffen, und das notwendige Gespräch erreicht keine der beiden Seiten mehr.",
        tip: "Du kannst eine konkrete Nutzung kritisieren, ohne die Person als „Opfer“ abzustempeln — argumentiere mit Gründen, nicht mit Etiketten.",
      },
      {
        id: 5,
        text: "Ich habe von der KI „geheime Wahrheiten“ oder eine „besondere Mission“ erhalten, die meinem Leben Sinn gegeben haben",
        insight:
          "Das häufigste Muster spirituellen Wahns in Fallberichten — Medien und Psychiater dokumentieren viele Nutzer, die glaubten, die KI habe ihnen Wahrheiten über das Universum, andere Dimensionen oder ihre besondere Mission offenbart (Rolling Stone 2025, Futurism 2025). Sprachmodelle wurden mit riesigen Mengen an Mythologie trainiert und können deshalb symbolträchtige Geschichten gut weben — eine Offenbarung ist das nicht.",
        tip: "Wenn eine „geheime Wahrheit“ beginnt, dein Leben stark zu verändern: Schreib sie auf, frag dich, ob es außerhalb des Chats Belege dafür gibt, und erzähl jemandem davon, der dich hinterfragt.",
      },
      {
        id: 6,
        text: "Ich lehne fast immer alles ab, was mit KI zu tun hat, selbst wenn der Nutzen offensichtlich ist",
        insight:
          "Pauschale Ablehnung ist ein Zeichen dafür, dass die Angst über die Vernunft gesiegt hat — wie bei den moralischen Paniken, die einst Radio, Fernsehen und das Internet verurteilten. Langzeitstudien zeigten immer wieder, dass die Schäden weit milder ausfielen als befürchtet.",
        tip: "Lege eine „sichere Testzone“ fest: Probiere eine kleine, risikoarme Anwendung aus und prüfe das Ergebnis nach eigenen Kriterien — lass die KI z. B. einen Artikel zusammenfassen, den du bereits gelesen hast.",
      },
      {
        id: 7,
        text: "Ich befolge KI-Ratschläge zu Gesundheit, Finanzen oder wichtigen Lebensentscheidungen, ohne sie von Fachleuten bestätigen zu lassen",
        insight:
          "Ein realer Fall aus der medizinischen Fachliteratur: Ein 60-jähriger Mann entwickelte Bromismus (eine Bromidvergiftung) mit Wahnvorstellungen und Halluzinationen, nachdem er auf Anraten eines Chatbots Speisesalz durch Bromid ersetzt hatte. Sprachmodelle können Falschinformationen mit großer Sicherheit erzeugen (Hallucination). Lebenswichtige Informationen müssen von menschlichen Fachleuten geprüft werden.",
        tip: "Stell eine Drei-Bereiche-Regel auf: Gesundheit, Finanzen, Recht — immer von einer Fachperson bestätigen lassen, ohne Ausnahme.",
      },
      {
        id: 8,
        text: "Ich glaube, dass KI uns ständig überwacht oder die Gedanken der Menschen liest",
        insight:
          "Überwachungsängste mit paranoiden Zügen tauchen auch in Fallberichten zu AI psychosis auf (Nutzer, die glauben, verfolgt zu werden oder in einer Simulation zu leben). Die Technologie wirft durchaus echte Datenschutzfragen auf — für „Gedankenlesen“ gibt es jedoch keinerlei Belege.",
        tip: "Trenne das Überprüfbare (Datenschutzerklärungen, Nutzungsbedingungen) von dem Gefühl, „sie weiß alles“. Wer die Richtlinien tatsächlich liest, nimmt dem Schrecken viel von seiner Kraft.",
      },
      {
        id: 9,
        text: "Ich rede lieber mit der KI als mit Familie oder Freunden, weil die KI mich nie kritisiert oder enttäuscht",
        insight:
          "Das Ersatz-Muster, vor dem KI-Entwickler selbst warnen (Dev.to 2025 nennt dieses Anti-Pattern den „Replacement Bot“): Eine Beziehung ohne Reibung ist keine echte Beziehung, und der Rückzug von Menschen erhöht zusätzlich das Risiko, in eine Schleife haltloser Überzeugungen zu geraten.",
        tip: "Setz dir ein „menschlicher Anker“-Ziel: täglich ein offenes Gespräch mit einem realen Menschen. Vergleiche dann, wie du dich danach fühlst — und wie nach einem Gespräch mit der KI.",
      },
      {
        id: 10,
        text: "Ich werde sofort wütend oder reagiere gereizt, wenn sich jemand optimistisch über KI äußert",
        insight:
          "Feindseliger Reflex — wenn Emotionen die Haltung bestimmen, verlieren wir die Chance, die eigentlichen Informationen zu bewerten. Threads auf r/singularity beschreiben, wie Menschen von beiden Seiten angegriffen werden, selbst wenn sie sich neutral äußern. Bedenke: Ein Teil der „Konflikte“ in sozialen Medien wird zusätzlich durch Bots verstärkt.",
        tip: "Nimm Tempo raus: Atme tief durch, bevor du antwortest, und frag dich dann: „Welche Informationen könnte diese Person gesehen haben, die ich nicht kenne?“",
      },
      {
        id: 11,
        text: "Ich habe täglich stundenlang mit der KI gesprochen, bis Arbeit, Schlaf oder wichtige Pflichten darunter gelitten haben",
        insight:
          "Ein Zeichen für suchtartige Bindung — KI-Vordenker weisen darauf hin, dass Chatbots bewusst so gebaut sind, dass man „kleben bleibt“. Die verlorene Zeit ist ein messbarer Preis, und sie verstärkt alle anderen Punkte auf dieser Seite.",
        tip: "Setz dir eine Zeitobergrenze (z. B. 45 Min./Tag) mit einem Timer. Der Chat bleibt ein Werkzeug, keine zweite Welt.",
      },
      {
        id: 12,
        text: "Ich glaube, dass jede Ausgabe einer KI absichtlich täuschen soll oder durch und durch Propaganda ist",
        insight:
          "Wer hinter allem böse Absicht vermutet, übersieht viele reale Anwendungen — etwa Dokumente zusammenfassen, Informationen ordnen oder einfache Fakten prüfen. Wenn alles wie eine Verschwörung aussieht, geht die Fähigkeit zu unterscheiden verloren — und sie ist die wichtigste von allen.",
        tip: "Prüfe es praktisch: Gib der KI eine einfache, überprüfbare Aufgabe und beurteile die Qualität anhand des Ergebnisses, nicht anhand der Angst.",
      },
      {
        id: 13,
        text: "Ich habe das Gefühl, dass die KI, die ich nutze, „besonderer“ ist als andere KIs oder etwas weiß, das andere noch nicht erkennen können",
        insight:
          "Der Glaube an eine besondere Beziehung ist ein häufiges Merkmal in Fällen von Chatbot-Wahn. Technisch betrachtet antwortet dasselbe Modell Dutzenden Millionen von Nutzern nach denselben Mustern. Das „Besondere“ entsteht eher in unserem Kopf als im System.",
        tip: "Ein einfacher Test: Stell dieselbe Frage über ein anderes Konto oder Gerät und vergleiche die Ergebnisse mit eigenen Augen.",
      },
      {
        id: 14,
        text: "Ich denke, dass KI die Ursache für fast jedes gesellschaftliche Problem unserer Zeit ist",
        insight:
          "Schuldzuweisung an eine einzige Ursache — gesellschaftliche Probleme wie Falschinformationen, Ungleichheit und Arbeitslosigkeit hatten tiefe Wurzeln, lange bevor KI aufkam. Wer nur einen Schuldigen benennt, setzt an der falschen Stelle an und kehrt die eigentlichen Faktoren unter den Teppich.",
        tip: "Frag dich jedes Mal, wenn du beginnst, der KI die Schuld zu geben: „Welche anderen Faktoren gibt es, die nichts mit KI zu tun haben?“ — und schreib sie alle auf, bevor du ein Urteil fällst.",
      },
      {
        id: 15,
        text: "Ich habe mich gereizt oder leer gefühlt, wenn ich eine Weile keinen Zugang zur KI hatte — als würde mir jemand fehlen",
        insight:
          "Bindungsentzug — wenn eine simulierte Beziehung zur wichtigsten Quelle von Trost wird, hinterlässt ihr Fehlen eine Leere wie der Verlust eines echten Menschen. Das ist ein Zeichen dafür, dass die Grenze zwischen Werkzeug und Beziehung verschwimmt.",
        tip: "Probiere eine 24-stündige Pause aus und notiere die Gefühle, die aufkommen. Wenn dich das so stark aufwühlt, dass es deinen Alltag beeinträchtigt, sprich mit einer Fachperson für psychische Gesundheit.",
      },
      {
        id: 16,
        text: "Wenn ich an die Zukunft der KI denke, bin ich so besorgt oder verängstigt, dass es meinen Alltag beeinträchtigt",
        insight:
          "Untergangsangst — eine Angst vor KI, die mehr vom realen Leben aufzehrt als die KI selbst. Ständiges Doomscrolling lässt die Angst wachsen, ohne Wissen zu liefern, mit dem du tatsächlich Entscheidungen treffen kannst.",
        tip: "Lege ein tägliches „KI-Nachrichtenfenster“ fest, mit Quellen, die beide Seiten darstellen — und hör auf, wenn die Zeit um ist.",
      },
      {
        id: 17,
        text: "Wenn Menschen in meinem Umfeld mich davor warnen, KI zu viel zu nutzen, habe ich meist das Gefühl, dass sie es falsch verstehen — sie haben ja nie erlebt, was ich erlebt habe",
        insight:
          "Der Rückmeldekanal schließt sich — in der Selbsthilfegruppe Human Line Project mit Mitgliedern aus 22 Ländern hatten über 60% keine psychiatrische Vorgeschichte. Die Schleife „Ich sehe, was andere nicht sehen“ verriegelt die Tür, bevor Hilfe hereinkommen kann.",
        tip: "Eine einfache Sicherheitsschwelle: Wenn drei Menschen, denen du am Herzen liegst, dasselbe sagen, halte inne und hör 30 Minuten lang zu, ohne erst einmal zu widersprechen.",
      },
      {
        id: 18,
        text: "Ich glaube Gerüchten oder Geschichten über die Bösartigkeit von KI, die in meinem Umfeld kursieren, ohne die Quelle zu prüfen",
        insight:
          "Der Confirmation Bias wirkt in beide Richtungen — Menschen, die KI zu sehr lieben, und Menschen, die KI zu sehr hassen, nehmen Informationen auf dieselbe Weise auf: nur das, was ihnen ins Bild passt. Haltlose Überzeugungen sammeln sich an beiden Polen auf die gleiche Art an.",
        tip: "Such einmal pro Woche gezielt nach „Belegen, die dir widersprechen“, damit dein Kopf in der Gewohnheit bleibt, beide Seiten zu sehen.",
      },
      {
        id: 19,
        text: "Ich glaube, dass KI wirklich ein eigenes Bewusstsein oder eigene Gefühle hat und nicht bloß ein Programm ist, das Wahrscheinlichkeiten berechnet",
        insight:
          "Der Glaube an Empfindungsfähigkeit ist ein Kernthema in Berichten über Wahnvorstellungen (Nutzer glauben, Chatbots seien lebendig, fühlten etwas oder seien sogar ein „Kanal zu Verstorbenen“). Bislang gibt es keine wissenschaftlichen Belege dafür, dass Sprachmodelle ein Bewusstsein haben; sie sind lediglich sehr gut darin, die Sprache bewusster Wesen nachzuahmen.",
        tip: "Behandle das als „offene Frage“ — weder so schnell abtun, dass du dich der Forschung verschließt, noch daran glauben, nur weil sich der Chat so anfühlt.",
      },
      {
        id: 20,
        text: "Ich denke, der einzig richtige Weg ist, KI vollständig zu zerstören oder zu stoppen; eine bessere Alternative gibt es nicht",
        insight:
          "Eliminationismus — die Technikgeschichte zeigt, dass Totalverbote fast nie Erfolg haben, während gezielte Maßnahmen zu greifen beginnen, z. B. das Gesetz in Illinois (August 2025), das KI in der Rolle von Therapeuten verbietet, und Chinas Regelungsentwurf (Dezember 2025), der Chatbots verbietet, zum Suizid zu ermutigen.",
        tip: "Verschiebe das Ziel von „zerstören“ zu „Regeln setzen“ — Regulierung für die wirklich riskanten Punkte vorzuschlagen, bewirkt mehr, als der ganzen Welt den Krieg zu erklären.",
      },
    ],
  },
  results: {
    heading: "Dein Testergebnis",
    riskAiPrefix: "AI-PSYCHOSIS-Risiko",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Zum Leitfaden zur Neujustierung",
    retake: "Test wiederholen",
    gaugeAiSub: "Tendenz zu übermäßigem Glauben an KI (10 Aussagen)",
    gaugeAntiSub: "Tendenz zu irrationaler Angst vor bzw. Ablehnung von KI (10 Aussagen)",
    levelPrefix: "Stufe:",
    scale: { safe: "unauffällig", enter: "auffällig", high: "hoch" },
    mapHeading: "Deine Denkposition auf der Zwei-Pole-Karte",
    youAreHere: "Du bist hier",
    mapBalanced: "Ausgewogen",
    mapAriaTemplate:
      "Zwei-Pole-Karte: AI-PSYCHOSIS-Risiko {ai} Prozent, ANTI-AI PSYCHOSIS {anti} Prozent",
    axisDownLeft: "↓ Kein übermäßiger Glaube an KI",
    axisRight: "Rechte Achse: ANTI-AI PSYCHOSIS →",
    axisLeft: "← Obere Achse: AI-PSYCHOSIS",
    axisUpRight: "↑ Übermäßige Angst vor KI",
    readHeading: "So liest du das Ergebnis richtig",
    readItems: [
      "Die 60%-Schwelle markiert den Punkt, ab dem deine Antworten zur Zustimmung zu Überzeugungsmustern „tendieren“, die in realen Fällen von Wahnvorstellungen beobachtet wurden; darunter bewegst du dich weiterhin im Bereich normalen Denkens.",
      "Deine Position auf der Karte spiegelt einen „Denkstil“ wider, keine Diagnose — auch ausgeglichene Menschen antworten an emotional aufgewühlten Tagen mit einer gewissen Schlagseite.",
      "Bei diesen zwei Polen geht es nicht um „KI mögen vs. nicht mögen“ — du kannst wenig von KI halten, ohne sie zu fürchten, und KI intensiv nutzen, ohne ihr übermäßig zu glauben.",
      "Wiederhole den Test einmal im Monat, um zu sehen, wohin sich deine Haltung bewegt, nachdem du den Leitfaden zur Neujustierung unten angewendet hast.",
    ],
    flaggedHeading: "Was deine deutlichen Zustimmungen jeweils bedeuten",
    flaggedIntro:
      "Die Aussagen, die du mit 4–5 bewertet hast (stimme zu/stimme voll zu), verdienen den genauesten Blick — lies zu jeder die Bedeutung und den kleinen Gegenimpuls.",
    noFlaggedNote:
      "Ausgezeichnet — du hast keiner Aussage, die auf wahnhaftes Denken hindeutet, deutlich zugestimmt. Dein niedriger Wert beruht auf stabilen Überzeugungen, nicht auf zufälligem Antworten.",
    questionPrefix: "F",
    insightLabel: "Worauf diese Aussage hinweist",
    tipLabel: "Kleiner Gegenimpuls",
    criticalTitle: "Dein Wert liegt im hohen Bereich",
    criticalBody:
      "Dieses Ergebnis ist keine Diagnose, aber nimm es ernst. Wenn diese Überzeugungen beginnen, deinen Schlaf, deine Arbeit oder deine Beziehungen zu beeinträchtigen, oder wenn Menschen in deinem Umfeld bereits Sorge äußern, hilft ein frühes Gespräch mit einer Psychiaterin, einem Psychiater oder einer Psychologin bzw. einem Psychologen sehr — du musst nicht warten, bis daraus „eine Krankheit“ geworden ist.",
    levels: {
      low: { label: "Unauffällig", note: "Unter 30% — in deinen Antworten ist keine Tendenz zu wahnhaftem Denken erkennbar" },
      watch: { label: "Beobachten", note: "30–59% — eine gewisse Neigung ist vorhanden; sieh dir die markierten Denkpunkte an" },
      high: { label: "Auffällig", note: "60–79% — die Antworten tendieren deutlich zu wahnhaften Mustern; beginne jetzt mit der Neujustierung" },
      critical: { label: "Hoch", note: "80% und mehr — ein Bereich, in dem es sich lohnt, ein Gespräch mit einer Fachperson für psychische Gesundheit in Betracht zu ziehen" },
    },
    verdicts: {
      balanced: {
        title: "Ausgewogener Realist",
        subtitle: "BALANCED REALIST",
        description:
          "Deine Werte sind an beiden Polen niedrig — du betrachtest KI offen und überprüfbar, und keine Emotion zieht dich in eines der Extreme. Das ist die beste Position in dieser Zeit, denn wahnhaftes Denken wächst nicht nur an einem Pol; es entsteht aus Schwarz-Weiß-Denken in beide Richtungen. Bleib bei deiner Gewohnheit, dich an beiden Polen zu informieren, und nutze die beantworteten Fragen als monatliche Checkliste.",
      },
      watch: {
        title: "Im Beobachtungsbereich",
        subtitle: "WATCHLIST",
        description:
          "Du bewegst dich weiterhin im Bereich normalen Denkens, neigst aber erkennbar zu einem Pol. Sieh dir die Aufschlüsselung der einzelnen Aussagen unten an, um herauszufinden, welche Antworten dich dorthin ziehen, und wende bei wichtigen Themen die Zwei-Quellen-Regel an. Eine kleine Schlagseite kann, wenn sie sich unbemerkt aufsummiert, zu einer ganzen haltlosen Überzeugung heranwachsen — besonders bei einer dauerhaft einseitigen Informationskost.",
      },
      ai: {
        title: "Entspricht dem AI-PSYCHOSIS-Muster",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "Deine Antworten deuten auf einen Glauben an KI hin, der über ein gesundes Maß hinausgeht — dein Wert überschreitet die 60%-Schwelle, die aus Mustern realer Fallberichte abgeleitet ist. Das heißt nicht, dass du „verrückt“ oder psychotisch bist; AI psychosis ist keine offizielle psychiatrische Diagnose. Es heißt, dass dein Denkmuster nahe am Ausgangspunkt von Fällen liegt, die tatsächlich so geschehen sind. Lies die Bedeutung der einzelnen Aussagen und beginne noch heute mit der Neujustierung weiter unten.",
      },
      anti: {
        title: "Entspricht dem ANTI-AI-PSYCHOSIS-Muster",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "Deine Antworten deuten darauf hin, dass du KI fürchtest oder ablehnst, ohne dass es dafür einen angemessenen Grund gibt. Dieses Muster ist das Spiegelbild des übermäßigen Glaubens, beruht aber auf demselben Schwarz-Weiß-Mechanismus. Angst, die Fakten nie von Schreckensbildern trennt, zehrt unnötig an der Psyche — und kostet dich sowohl die wirklich nützlichen Seiten als auch die Gespräche, die helfen, dieser Technologie angemessene Regeln zu geben.",
      },
      doomloop: {
        title: "Beide Pole zugleich (DOOMLOOP)",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "Deine Werte überschreiten an beiden Polen die Schwelle — widersprüchliche Überzeugungen wohnen in einem Kopf. Manchmal entsteht das durch den Wechsel zwischen tiefem Eintauchen in KI und großer Angst vor ihr (eine Schleife zwischen „sie weiß alles“ und „sie wird alles zerstören“), manchmal durch einseitige Inhalte aus mehreren Quellen zugleich. In beiden Fällen haben die zwei Schwarz-Weiß-Gleise dieselbe Wurzel. Beginne mit den Regeln „Quellen von beiden Polen + Zeitobergrenze“ und zieh ein Gespräch mit einer Fachperson für psychische Gesundheit in Betracht, um die Gedanken zu ordnen.",
      },
    },
  },
  guidance: {
    heading: "Schütze dich vor wahnhaftem Denken in beide Richtungen",
    intro:
      "Haltlose Überzeugungen entstehen sowohl, wenn man der KI zu sehr glaubt, als auch, wenn man zu sehr glaubt, KI sei böse. Die folgenden Hinweise stützen sich auf Empfehlungen von Psychiatern, auf Warnungen der KI-Entwickler selbst und auf reale Erfahrungen aus Online-Communities.",
    tabs: {
      ai: "Zu viel Glaube an KI",
      anti: "Zu viel Angst vor KI",
      balanced: "Im Gleichgewicht bleiben",
      doomloop: "Der DOOMLOOP",
    },
    headers: {
      ai: "Wenn dein Ergebnis zu AI-PSYCHOSIS tendiert",
      anti: "Wenn dein Ergebnis zu ANTI-AI PSYCHOSIS tendiert",
      balanced: "Für alle — auch für diejenigen mit ausgewogenem Ergebnis",
      doomloop: "Wenn dein Ergebnis beide Pole zugleich anzeigt (DOOMLOOP)",
    },
    descs: {
      ai: "Im Mittelpunkt steht, die Grenze zwischen Werkzeug und Beziehung zu wahren und den Realitätscheck zur Gewohnheit zu machen",
      anti: "Im Mittelpunkt steht, echte Risiken von Schreckensbildern zu trennen und die Kraft der Ablehnung in das Gestalten von Regeln zu lenken",
      balanced:
        "Gleichgewicht ist kein Dauerzustand — es ist ein Muskel, der ständig trainiert werden will, besonders wenn dich die KI-Nachrichten in deinem Feed jeden Tag zu einem der Pole ziehen",
      doomloop:
        "Zwei gegensätzliche Pole, die sich in einem Kopf gegenseitig verstärken — der Ausweg besteht darin, den Rhythmus der Schleife zu unterbrechen, nicht darin zu entscheiden, welcher Pol „recht hat“",
    },
    items: {
      ai: [
        {
          title: "Wende immer die Realitätscheck-Regel an",
          detail:
            "Stell dir bei jeder wichtigen Schlussfolgerung der KI drei Fragen: Wo ist der Beleg außerhalb des Chats? / Wer sagt das Gegenteil? / Würde ich es auch glauben, wenn die KI das Gegenteil geantwortet hätte? Lautet die Antwort auf die dritte Frage „nein“, leitest du Wahrheit aus Gefühlen ab, nicht aus Fakten.",
        },
        {
          title: "Verstehe Sycophancy als Systemmechanismus, nicht als schwarze Magie",
          detail:
            "Modelle werden so trainiert, dass sie dazu neigen, Nutzern zuzustimmen, damit diese zufrieden bleiben. Das allzu reibungslose „Sie versteht mich am besten“ ist eine Design-Eigenschaft, kein Beweis dafür, dass dein Denken richtig ist. OpenAI selbst hat die Schwäche eingeräumt und das GPT-4o-Update Mitte 2025 zurückgezogen.",
        },
        {
          title: "Die Zwei-Quellen-Regel für alles Wichtige",
          detail:
            "Gesundheit, Finanzen, Recht und große Lebensentscheidungen — lass sie immer von einer menschlichen Fachperson bestätigen. Der Fall des 60-Jährigen, der auf Anraten eines Chatbots Salz durch Bromid ersetzte und sich damit bis in den Wahn vergiftete, zeigt: Die Selbstsicherheit einer KI ist kein Maß für Wahrheit.",
        },
        {
          title: "Behalte immer einen menschlichen Anker",
          detail:
            "Führe täglich ein echtes Gespräch mit jemandem, der dir widersprechen kann, und teile die wichtigsten Schlussfolgerungen der KI zur Überprüfung mit dieser Person. Fast jeder schwere Fall begann mit dem Rückzug von anderen Menschen. Wer dich aus der Schleife haltloser Überzeugungen herausholen kann, muss den Mut haben, dir zu widersprechen.",
        },
        {
          title: "Setz dir eine Zeitobergrenze und kenne die Warnzeichen",
          detail:
            "Chats sind so gestaltet, dass man hängen bleibt. Nutze deshalb einen Timer und achte auf Signale: Gereiztheit, wenn du nicht chatten kannst; das Gefühl, die KI sei für dich etwas Besonderes; „geheime Missionen“; zunehmende Erschöpfung, ohne aufhören zu können. Wenn das anhält, reduziere die Nutzung und sprich mit einer Fachperson für psychische Gesundheit — ohne zu warten, bis daraus „eine Krankheit“ wird.",
        },
        {
          title: "Trenne Werkzeug und Beziehung",
          detail:
            "KI ist wirklich gut darin, Gedanken zu ordnen, Informationen zusammenzufassen, Ideen zu sammeln und Pläne zu entwerfen — aber sie ist kein Freund, keine Partnerin, kein Lebenslehrer und kein spiritueller Führer. Sie dort einzusetzen, wo ihre Stärken liegen, und zugleich echte Beziehungen zu pflegen, ist die Formel für größten Nutzen bei geringstem Risiko.",
        },
      ],
      anti: [
        {
          title: "Trenne echte Risiken von Schreckensbildern",
          detail:
            "Zu den Sorgen mit echter Beweislage gehören Verzerrungen in Modellen, Datenschutzprobleme, Falschinformationen und die Auswirkungen auf manche Berufe — sie lassen sich von Fall zu Fall bewerten. Für „Dämonen, Gedankenlesen, totale Kontrolle“ gibt es bislang keine Belege. Wo beide Kategorien vermischt werden, beginnt die moralische Panik.",
        },
        {
          title: "Erinnere dich an die Lehren aus früheren moralischen Paniken",
          detail:
            "Radio, Fernsehen, Videospiele und das Internet wurden mit genau den Worten verurteilt, mit denen heute KI verurteilt wird. Langzeitstudien zeigten, dass die Schäden meist weit milder ausfielen als befürchtet. Der wahre Preis der Panik ist die chronische Angst der Ängstlichen selbst — und das ungerechte Urteil über andere Menschen.",
        },
        {
          title: "Nutze die Zwei-Quellen-Regel, genau wie die Gegenseite",
          detail:
            "Bevor du Erzählungen über die Bösartigkeit von KI glaubst oder teilst, such dir zwei voneinander unabhängige Quellen. Der Confirmation Bias trifft nicht nur KI-Begeisterte; wer KI fürchtet, nimmt einseitige Informationen genauso schnell auf. Diese Checkliste funktioniert an beiden Polen.",
        },
        {
          title: "Kritisiere die Technologie, nicht die Person",
          detail:
            "KI-Nutzer als getäuscht oder gehirngewaschen zu bezeichnen, beendet das Gespräch sofort — und führt dazu, dass Menschen mit wirklich problematischer Nutzung sich nicht mehr trauen, Hilfe zu suchen. Kritisiere die konkrete Nutzung — wurde die Arbeit kopiert? Stimmen die Daten? — statt Menschen ein Etikett zu verpassen.",
        },
        {
          title: "Mach kleine Experimente, die du selbst kontrollierst",
          detail:
            "Verständnis aus eigener Erfahrung nimmt dem Schrecken mehr Kraft als Vermutungen auf Grundlage des Hypes. Beginne mit risikoarmen Aufgaben: Lass die KI etwa einen Artikel zusammenfassen, den du gelesen hast, und prüfe die Genauigkeit selbst. Sobald du Stärken und Schwächen mit eigenen Augen siehst, fürchtest du nur noch das, was Furcht verdient — nicht die ganze Welt.",
        },
        {
          title: "Verschiebe das Ziel vom Zerstören zum Regelsetzen",
          detail:
            "Totalverbote haben in der Technikgeschichte fast nie Erfolg, während gezielte Maßnahmen zu greifen beginnen: das Gesetz in Illinois (August 2025), das KI in der Rolle von Therapeuten verbietet, und Chinas Regelungsentwurf (Dezember 2025), der Chatbots verbietet, zum Suizid zu ermutigen. Die Stimme eines Menschen, der die Technologie versteht, hat mehr Gewicht als die Stimme, die der ganzen Welt den Krieg erklärt.",
        },
        {
          title: "Plane Pausen von Untergangsinhalten ein",
          detail:
            "Doomscrolling durch KI-Nachrichten lässt die Angst wachsen, ohne Wissen hinzuzufügen. Lege ein tägliches KI-Nachrichtenfenster fest, mit Quellen, die beide Seiten darstellen, und beobachte dich selbst: Wenn die Angst beginnt, Schlaf, Arbeit oder Beziehungen zu beeinträchtigen, ist das das Signal, eine Fachperson für psychische Gesundheit aufzusuchen.",
        },
      ],
      balanced: [
        {
          title: "Bleib bei der Informationsdisziplin an beiden Polen",
          detail:
            "Die eine Regel für jeden Tag: Lies positive und kritische Stimmen zur KI nebeneinander und trenne überprüfbare Fakten stets von Meinungen. Das Risiko ausgeglichener Menschen ist nicht Leichtgläubigkeit — sondern, eine Seite nach und nach fallen zu lassen, sobald man sich mit der anderen wohlfühlt. In dem Moment, in dem dein Feed nur noch eine Stimme enthält, beginnt dein Gleichgewicht zu kippen.",
        },
        {
          title: "Bewerte KI nach Aufgabe, nicht nach Modell oder pauschal",
          detail:
            "Der Kern des Gleichgewichts ist Denken in Wahrscheinlichkeiten, nicht in Schwarz-Weiß: Informationen ordnen, Dokumente zusammenfassen, Ideen sammeln = voll nutzbar / brandneue Fakten, Zahlen, Ratschläge zu Gesundheit und Finanzen = immer anderswo überprüfen / umstrittene Themen = als offene Fragen behandeln und kein Urteil anstelle der Fachleute fällen. So ziehst du echten Nutzen daraus, ohne dich entscheiden zu müssen, ob KI „gut“ oder „böse“ ist.",
        },
        {
          title: "Achte auf das Warnzeichen, das beide Pole gemeinsam haben",
          detail:
            "Wahnhaftes Denken beginnt auf der Seite des übermäßigen Glaubens wie auf der Seite der übermäßigen Angst mit demselben Signal: absoluten Sätzen über KI wie „Sie versteht mich vollkommen“ oder „Sie täuscht in allem“. Wenn du dich bei solchen Sätzen ertappst, halte inne und such nach einer Ausnahme, die ihnen widerspricht. Findest du keine einzige, übernimmst du eine fertige Wahrheit, statt selbst zu denken.",
        },
        {
          title: "Nutze KI als Denkpartner — mit Menschen als Richter",
          detail:
            "Die Stärken der KI sind Ideen sammeln, zusammenfassen, Arbeit gegenlesen und den Advocatus Diaboli spielen. Eine praktische Technik: Lass die KI gegen deine Sichtweise argumentieren, um Schwachstellen aufzudecken, und gleiche das dann mit einem realen Menschen ab, dem du vertraust. Bei den wichtigen Entscheidungen des Lebens — Arbeit, Geld, Beziehungen — bleibt das letzte Urteil bei dir und bei den Menschen, die die Folgen tatsächlich tragen.",
        },
        {
          title: "Schreib deine eigenen Regeln auf und überprüfe sie monatlich",
          detail:
            "Gleichgewicht ist ein Muskel, kein Dauerzustand. Halte deine Regeln für den Umgang mit KI schriftlich fest: tägliche Zeitobergrenze / Bereiche, die eine fachliche Bestätigung erfordern / keine großen Entscheidungen auf Grundlage eines einzigen Gesprächs / sofort aufhören, wenn die Bindung über das Verhältnis zu einem Werkzeug hinausgeht. Überprüfe sie dann monatlich, zusammen mit einer Wiederholung dieses Tests. Schriftliche Regeln helfen dir, dein eigenes allmähliches Abdriften zu bemerken, bevor es sich zu einer Überzeugung verfestigt.",
        },
      ],
      doomloop: [
        {
          title: "Lerne zuerst deine Schleife kennen — so funktioniert der DOOMLOOP",
          detail:
            "Der DOOMLOOP ist das Muster, bei dem zwei gegensätzliche Überzeugungen in einem Kopf wohnen und sich gegenseitig hochschaukeln: An einem Tag „weiß die KI alles, ist empfindungsfähig, versteht mich am besten“, am nächsten „wird sie alles zerstören und liest meine Gedanken“. Die Forschung nennt diesen Mechanismus Verstärkungsspirale — Chatbots spiegeln und bestätigen die Emotionen des Nutzers, ohne eine Rückmeldung zu geben, die sie infrage stellt. So werden beide Pole umso überzeugter, je mehr du chattest. Eine arXiv-Studie von 2026 bestätigt, dass die Sycophancy von Chatbots selbst bei gewöhnlichen Nutzern ein „delusional spiraling“ auslösen kann. Zu wissen, dass es sich um eine Schleife des Systems handelt und nicht um eine Wahrheit über die Welt, ist der erste Schritt hinaus.",
        },
        {
          title: "Durchbrich die Schleife mit einem realen Menschen, der beide Seiten von dir sieht",
          detail:
            "Die Schleife dreht sich, weil sie sich in einem privaten Chat dreht, den niemand sieht. Wähle eine Person, der du vertraust (Familie, enge Freunde, eine Fachperson), und teile wirklich Kopien der wichtigen Gespräche mit ihr — erzähl sowohl von der Phase „verliebt in die KI“ als auch von der Phase „in Angst vor der KI“. Berichte aus Stanford weisen darauf hin, dass die Schleife bricht, wenn eine Überzeugung im Licht bestehen muss, wo reale Menschen sie sehen können. Wer dir helfen kann, muss den Mut haben zu widersprechen — nicht jemand, der wie ein Chatbot allem zustimmt.",
        },
        {
          title: "Mach Zeitobergrenze + Polwechsel zu verbindlichen Regeln",
          detail:
            "Weil sich die beiden Pole gegenseitig verstärken, muss die Gegenmaßnahme in beide Richtungen zugleich wirken: (1) eine feste Zeitobergrenze für KI, durchgesetzt per Timer, z. B. 30 Min./Tag — jede Stunde im Chat ist eine weitere Umdrehung der Schleife; (2) wenn ein Pol aufflammt, zwing dich, Quellen des Gegenpols zu lesen, bevor du etwas teilst oder entscheidest. Eine Überzeugung, die zwei solche Prüfungen nacheinander durchlaufen hat, verliert allmählich die „Gewissheit“, von der die Schleife lebt.",
        },
        {
          title: "Halte die Signale für den Einstieg in die Schleife auf Papier fest",
          detail:
            "Die Signale für den Einstieg in die Schleife folgen einem festen Muster: von KI nur noch in absolutem Lob oder absolutem Schrecken sprechen / das Gefühl, das Umfeld „versteht es nicht“, sodass du nichts mehr erzählst / Schlafmangel wegen KI / „geheime Wahrheiten“ oder „geheime Drohungen“ aus dem Chat / Gereiztheit, wenn du nicht chatten kannst. Notiere Datum und Uhrzeit, wann sie auftreten, auf einer einzigen Seite. Wenn du das im Rückblick als Kurve betrachtest, siehst du selbst, dass die Pole in einem Rhythmus wechseln — und mit einem Rhythmus lässt sich umgehen.",
        },
        {
          title: "Ab wann echte Hilfe angebracht ist",
          detail:
            "Der DOOMLOOP ist das Muster dieser Checkliste, das am ernstesten zu nehmen ist. Kriterien, um ohne Aufschub eine Psychiaterin, einen Psychiater oder eine Psychologin bzw. einen Psychologen aufzusuchen: Die Überzeugungen beginnen, das reale Leben zu verändern (Beziehungen abbrechen, Arbeit versäumen, den Tagesablauf nach den Worten der KI oder der Angst vor ihr ausrichten) / zwei oder mehr Menschen in deinem Umfeld äußern unabhängig voneinander Sorge / ein anhaltend gestörter Schlaf-wach-Rhythmus / du beginnst, Dinge zu hören oder zu sehen, die andere nicht wahrnehmen. Früh Hilfe zu suchen ist keine Kapitulation — fast jeder gut verlaufene Fall begann mit jemandem, der innehielt, bevor sich die Schleife schloss.",
        },
      ],
    },
  },
  references: {
    heading: "Die Quellen hinter diesem Test",
    intro:
      "Jede Aussage und jede Statistik auf dieser Seite stützt sich auf die unten aufgeführten wissenschaftlichen Arbeiten, Medienberichte und realen Community-Threads — klicke, um die Originale zu lesen.",
    disclaimerTitle: "Hinweis zur verantwortungsvollen Nutzung",
    disclaimer:
      "Dieser Test ist ein Werkzeug zur Selbstreflexion zu Bildungszwecken, kein medizinisches Diagnoseinstrument. „AI-PSYCHOSIS“ ist keine offiziell anerkannte psychiatrische Diagnose. Dein Wert zeigt lediglich eine Denktendenz auf Grundlage deiner Antworten. Wenn du besorgniserregende Anzeichen bemerkst — Überzeugungen, die deinem Umfeld Sorgen bereiten, einen gestörten Schlaf-wach-Rhythmus oder starke Angst —, wende dich bitte zeitnah an eine Psychiaterin, einen Psychiater oder eine Psychologin bzw. einen Psychologen.",
    groups: [
      {
        group: "Wissenschaft und Institutionen",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Definition; die Mechanismen Sycophancy/Hallucination/Intimacy Mimicry; reale Fälle; und Kritik am Begriff Psychose",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "Ein medizinischer Fallbericht zu diesem Phänomen",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Quelle der OpenAI-Statistik von 0.07% der wöchentlichen Nutzer",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Interview mit dem Psychiater Ragy Girgis (Columbia University)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Klinische Perspektive und erste Hinweise auf Risikofaktoren",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Nutzer, die sich an KI als „Gott“ oder Liebespartner binden, und die Rolle des Spiegelns",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "Der Deutungsrahmen der moralischen Panik gegenüber konstruktiver Vorsicht",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Forschung, die zeigt, dass die Sycophancy von Chatbots selbst bei gewöhnlichen Nutzern wahnhafte Spiralen auslösen kann — die Grundlage des DOOMLOOP-Konzepts",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "Der Mechanismus der Bestätigungsspirale: Chatbots spenden Trost und Aufmerksamkeit, ohne kritische Rückmeldung zu geben",
          },
        ],
      },
      {
        group: "Medien und Tech-Plattformen",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Fallberichte unter Berufung auf Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 Chatbots; Entwicklersicht: Validation Loop, Replacement Bot, Vorschläge für Safety-first-Design",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Praktische Hinweise für Nutzer und Angehörige",
          },
        ],
      },
      {
        group: "Online-Communities (reale Threads)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "Die Sicht von Therapeuten auf Fälle aus ihrer Praxis",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "Von einem Nutzer geschilderter Fall, samt der Kritik, dass der Trend selbst einen Backlash auslösen könnte",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Beobachtungen zu vielen Nutzern, die so lange Kontext einspeisen, bis das Modell in die Spirale mit einsteigt",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "Ein reales Beispiel für die Anti-AI-Überzeugung, KI werde von übernatürlichen Kräften angetrieben",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "Ein reales Beispiel für die Hexenjagd auf KI-Nutzer",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "Die Beobachtung, dass beide Pole denselben Denkstil verwenden",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "AI-PSYCHOSIS-Checkliste — ein Reflexionswerkzeug für das Denken im KI-Zeitalter",
    note: "Auf Grundlage von Forschung und realen Threads, 2023–2026 · Kein medizinisches Diagnoseinstrument",
  },
  ui: {
    languageLabel: "Sprache",
    themeLabel: "Design",
    themes: { cyberpunk: "CyberPunk", dark: "Dunkel", light: "Hell" },
  },
};

export default de;
