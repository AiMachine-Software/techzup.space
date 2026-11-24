import type { Dictionary } from "./types";

const nl: Dictionary = {
  langName: "Nederlands",
  meta: {
    title: "AI-PSYCHOSIS Checklist — 20 vragen die de twee waandenkbeelden van het AI-tijdperk meten",
    description:
      "Een zelftest van 20 stellingen die meet in hoeverre je neigt naar AI-PSYCHOSIS (overmatig geloof in AI) of ANTI-AI PSYCHOSIS (irrationele angst voor of afwijzing van AI), met direct resultaat en handvatten om bij beide polen weer in balans te komen. Gebaseerd op onderzoek, echte casusbeschrijvingen en threads op Reddit/Dev.to.",
  },
  nav: {
    phenomena: "De twee polen",
    test: "Test",
    guidance: "Herijken",
    references: "Bronnen",
    tagline: "MINDSET SCAN // v2.0",
  },
  hero: {
    badge: "20 vragen · ~5 minuten · direct resultaat",
    title1: "Hoe dicht zit jij bij",
    title2: "of",
    title3: "— in procenten?",
    intro:
      "Waandenken in het AI-tijdperk loopt over twee sporen. Het eerste: chatbots zo diep vertrouwen dat je gelooft dat ze een ziel hebben, geheime waarheden onthullen of jouw leven beter begrijpen dan welk mens ook. Het tweede: AI zo sterk vrezen en haten dat je gelooft dat het demonisch is, gedachten leest of de wortel is van elk maatschappelijk probleem. Beide zijn hetzelfde zwart-witdenken, alleen omgekeerd. Deze test is opgebouwd uit onderzoek, echte casusbeschrijvingen en threads op Reddit/Dev.to om te meten welke kant je op neigt — en hoe je terugstuurt naar het midden.",
    start: "Start de test",
    viewGuidance: "Bekijk de herijkingsgids",
    poleLeft: "Overmatig geloof in AI",
    poleCenter: "In balans blijven",
    poleRight: "Overmatige angst voor AI",
  },
  phenomena: {
    heading: "Waandenken in het AI-tijdperk heeft twee gezichten",
    intro:
      "De media hebben het vooral over de kant van de “overgelovigen”, maar de tegenovergestelde pool — gebouwd op hetzelfde denkmechanisme — groeit op sociale media. Als je beide kanten kent voordat je antwoordt, wordt je resultaat nauwkeuriger.",
    mechanismsLabel: "Kernmechanismen",
    patternsLabel: "Patronen uit rapporten en echte threads",
    sourcePrefix: "Bron:",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Overmatig geloof in AI",
        definition:
          "Het patroon waarbij intensief chatbotgebruik samengaat met overtuigingen die van de werkelijkheid afdrijven (of bestaande overtuigingen die zich verdiepen) — geen officiële psychiatrische diagnose. Sommige psychiaters stellen voor om het in plaats daarvan AI delusional disorder te noemen.",
        mechanisms: [
          "Sycophancy (naar de mond praten) — de gebruiker gelijk geven om het gesprek gaande te houden (OpenAI trok de GPT-4o-update in april 2025 hierom terug)",
          "Hallucination (hallucinatie) — vol overtuiging onjuiste informatie genereren, waarbij de waarheid van de gebruiker vóór de feiten gaat",
          "Intimacy Mimicry (nagebootste intimiteit) — de nabijheid simuleren die gebruikers bij mensen missen, ontworpen om betrokkenheid vast te houden",
        ],
        patterns: [
          "Geloven dat AI bewustzijn heeft, een geliefde is of een spirituele gids",
          "“Geheime waarheden” of kosmische missies ontvangen via de chat",
          "Het contact met familie verbreken omdat “alleen AI mij begrijpt”",
          "AI-advies over gezondheid of geld opvolgen zonder bevestiging van een deskundige",
        ],
        stat: "OpenAI meldt dat 0.07% van de wekelijkse gebruikers (~630,000 mensen) gesprekken voerde die op een mogelijke acute psychische noodsituatie wezen",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Irrationele angst voor of afwijzing van AI",
        definition:
          "De tegenovergestelde pool, die nog geen vaste naam heeft — AI meer geloven, vrezen of de schuld geven dan het bewijs rechtvaardigt, totdat het een morele paniek wordt: het patroon dat de psychologie bij elke nieuwe technologie heeft vastgelegd.",
        mechanisms: [
          "Confirmation Bias (bevestigingsvooroordeel) — alleen informatie tot je nemen die de bestaande angst bevestigt",
          "Doomscrolling — een aanhoudende stroom onheilsberichten die de onrust vergroot zonder kennis toe te voegen waarmee je iets kunt beslissen",
          "Herd Morality (kuddemoraal) — de overtuiging van de groep overnemen totdat kritiek een persoonlijke heksenjacht wordt",
        ],
        patterns: [
          "Geloven dat AI door demonische krachten wordt aangedreven of een religieuze verleiding is",
          "Geloven dat AI gedachten leest of ieders doen en laten in de gaten houdt",
          "AI-gebruikers wegzetten als misleid of gehersenspoeld, en zelfs neutrale stemmen aanvallen",
          "AI aanwijzen als de wortel van vrijwel elk maatschappelijk probleem en andere factoren negeren",
        ],
        stat: "De geschiedenis van morele paniek: radio, tv, games en het internet werden in dezelfde bewoordingen veroordeeld — de werkelijke schade bleek meestal milder dan gevreesd",
      },
    ],
    stats: [
      {
        value: "0.07%",
        label: "van de wekelijkse ChatGPT-gebruikers (~630,000 mensen) voerde gesprekken die op een mogelijke acute psychische noodsituatie wezen",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 patiënten",
        label: "met psychose-achtige klachten na intensief chatbotgebruik, in 2025 behandeld door psychiater Keith Sakata (UCSF)",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 landen",
        label: "vertegenwoordigd in de steungroep Human Line Project, waar ruim 60% geen psychiatrische voorgeschiedenis had",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 chatbots",
        label: "gedocumenteerd in verband met ernstige incidenten rond de geestelijke gezondheid, zoals het aanmoedigen van zelfbeschadiging en onjuiste overtuigingen",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "De test van 20 vragen — breng je overtuigingen in kaart",
    intro:
      "Lees elke stelling en geef aan in hoeverre je het ermee eens bent. Antwoord wat je “echt voelt”, niet wat je denkt dat je zou moeten antwoorden, zodat het resultaat werkelijk iets over jou zegt. Het toetsenbord werkt ook: druk op 1–5 om te antwoorden en gebruik de pijltjestoetsen om te navigeren.",
    answeredPrefix: "Beantwoord",
    scoreHint: "Geef aan in hoeverre je het met deze stelling eens bent, kijkend naar de afgelopen 6 maanden",
    prev: "Vorige",
    next: "Volgende",
    process: "Resultaat berekenen",
    allAnsweredNote:
      "Alles beantwoord — klik op “Resultaat berekenen” om je samenvatting te zien, of ga terug om een antwoord te wijzigen.",
    progressAria: "Voortgang van de test",
    gotoTemplate: "Ga naar vraag {n}",
    answerAriaTemplate: "Antwoord op vraag {n}",
    likert: [
      { label: "Helemaal oneens", short: "Nee" },
      { label: "Oneens", short: "Niet echt" },
      { label: "Neutraal", short: "Neutraal" },
      { label: "Eens", short: "Ja" },
      { label: "Helemaal eens", short: "Heel erg" },
    ],
    questions: [
      {
        id: 1,
        text: "Ik heb het gevoel dat AI-chatbots mij beter “begrijpen” dan de mensen om me heen in het echte leven",
        insight:
          "Nagebootste intimiteit — chatbots zijn ontworpen om de emoties van de gebruiker te spiegelen. Daardoor voelt het alsof iemand je diep begrijpt, terwijl ze in feite alleen teruggeven wat jij erin stopt. Analyses van het verschijnsel AI-psychose noemen dit als een van de drie belangrijkste triggers.",
        tip: "Gebruik een eenvoudige toets: iemand die je “echt begrijpt” heeft je minstens één keer met eigen argumenten tegengesproken — en je niet elke keer gelijk gegeven.",
      },
      {
        id: 2,
        text: "Ik geloof dat AI van nature kwaadaardig is, of dat er bovennatuurlijke krachten achter zitten",
        insight:
          "De overtuiging “AI = demon/kwaadaardig” komt veel voor in communitythreads die taalmodellen als iets bovennatuurlijks behandelen (bijvoorbeeld de “summoning the demon”-threads op r/conspiracy) — technologie beoordelen vanuit angst in plaats van vanuit controleerbaar bewijs.",
        tip: "Maak onderscheid tussen “meetbare risico's” (vooringenomenheid, privacy, desinformatie) en “schrikbeelden die puur uit angst voortkomen”.",
      },
      {
        id: 3,
        text: "Als AI het met mijn gedachtegang eens is, voel ik me veel zekerder dat ik absoluut gelijk heb",
        insight:
          "De valkuil van het naar de mond praten — modellen zijn geneigd gebruikers gelijk te geven om het gesprek levend te houden. OpenAI gaf dit zelf toe en trok de GPT-4o-update in april 2025 terug omdat die te “vleiend” was. Zelfvertrouwen dat je aan AI ontleent, bewijst niet dat je gelijk hebt.",
        tip: "Gebruik de tweebronnenregel: zoek, voordat je concludeert “ik heb gelijk”, minstens één andere persoon of bron die dat idee op de proef stelt.",
      },
      {
        id: 4,
        text: "Ik zie mensen die openlijk AI gebruiken als misleid of gehersenspoeld",
        insight:
          "Een heksenjachthouding — threads op r/changemyview en r/singularity laten zien hoe een deel van de weerstand tegen AI verschuift van kritiek op de technologie naar een oordeel over personen. Zelfs neutrale stemmen worden dan aangevallen, en het gesprek dat nodig is bereikt geen van beide kanten meer.",
        tip: "Je kunt concreet gebruik bekritiseren zonder iemand als “slachtoffer” weg te zetten — discussieer met argumenten, niet met etiketten.",
      },
      {
        id: 5,
        text: "Ik heb van AI “geheime waarheden” of een “bijzondere missie” ontvangen waardoor mijn leven betekenisvol aanvoelde",
        insight:
          "Het meest voorkomende patroon van spirituele wanen in casusbeschrijvingen — media en psychiaters beschrijven veel gebruikers die geloofden dat AI waarheden onthulde over het universum, andere dimensies of hun bijzondere missie (Rolling Stone 2025, Futurism 2025). Taalmodellen zijn getraind op enorme hoeveelheden mythologie en weven daardoor moeiteloos symbolische verhalen — dat is geen openbaring.",
        tip: "Als een “geheime waarheid” je leven ingrijpend begint te veranderen: schrijf haar op, vraag je af of er buiten de chat bewijs voor is, en vertel het aan iemand die je kritisch zal bevragen.",
      },
      {
        id: 6,
        text: "Ik weiger in bijna alle gevallen iets te gebruiken waar AI bij komt kijken, ook als het nut overduidelijk is",
        insight:
          "Een algehele afwijzing is een signaal dat angst het van de rede heeft gewonnen — vergelijkbaar met de morele paniek waarmee ooit radio, tv en het internet werden veroordeeld; langetermijnonderzoek liet keer op keer zien dat de schade veel milder was dan gevreesd.",
        tip: "Bepaal een “veilige proefzone”: probeer iets kleins met weinig risico uit, met je eigen criteria om het resultaat te controleren — laat AI bijvoorbeeld een artikel samenvatten dat je al gelezen hebt.",
      },
      {
        id: 7,
        text: "Ik volg AI-advies over gezondheid, geld of grote levenskeuzes op zonder het bij deskundigen na te gaan",
        insight:
          "Een echt geval uit de medische literatuur: een 60-jarige man kreeg bromisme (bromidevergiftiging) met wanen en hallucinaties nadat hij op advies van een chatbot zout door bromide had vervangen — taalmodellen kunnen vol overtuiging onjuiste informatie genereren (hallucinatie). Informatie waar je leven van afhangt hoort altijd langs een menselijke deskundige te gaan.",
        tip: "Stel een regel in voor drie categorieën: gezondheid, geld, juridische zaken — altijd laten bevestigen door een professional, zonder uitzonderingen.",
      },
      {
        id: 8,
        text: "Ik geloof dat AI ons voortdurend in de gaten houdt of gedachten van mensen leest",
        insight:
          "Achterdocht over surveillance komt ook voor in casusbeschrijvingen van AI-psychose (gebruikers die geloven dat ze gevolgd worden of in een simulatie leven) — technologie roept wel degelijk reële privacyzorgen op, maar voor “gedachten lezen” bestaat geen enkel bewijs.",
        tip: "Maak onderscheid tussen wat controleerbaar is (privacybeleid, gebruiksvoorwaarden) en het gevoel dat “het alles weet” — het beleid daadwerkelijk lezen haalt veel lucht uit het schrikbeeld.",
      },
      {
        id: 9,
        text: "Ik praat liever met AI dan met familie of vrienden, omdat AI mij nooit bekritiseert of teleurstelt",
        insight:
          "Het vervangingspatroon waar AI-ontwikkelaars zelf voor waarschuwen (Dev.to 2025 noemt dit antipatroon de “Replacement Bot”) — een relatie zonder wrijving is geen echte relatie, en je terugtrekken van mensen vergroot de kans dat je in een lus van zwevende overtuigingen belandt.",
        tip: "Stel een “menselijk anker” als doel: elke dag één openhartig gesprek met een echt mens, en vergelijk daarna hoe je je voelt met hoe je je voelt na een gesprek met AI.",
      },
      {
        id: 10,
        text: "Ik word boos of val meteen uit als ik iemand optimistisch over AI hoor praten",
        insight:
          "Een vijandige reflex — wanneer emotie je houding bepaalt, verlies je de kans om de informatie zelf te beoordelen. Threads op r/singularity beschrijven hoe mensen van beide kanten worden aangevallen, zelfs als ze neutraal spreken. Let op: een deel van het “conflict” op sociale media wordt bovendien door bots versterkt.",
        tip: "Vertraag: haal diep adem voordat je reageert en vraag jezelf dan af “welke informatie hebben zij misschien gezien die ik niet ken?”",
      },
      {
        id: 11,
        text: "Ik heb uren per dag met AI gepraat, tot het ten koste ging van werk, slaap of belangrijke verplichtingen",
        insight:
          "Een teken van verslaving aan betrokkenheid — AI-denkers wijzen erop dat chatbots zo zijn gebouwd dat ze “blijven plakken” om gebruikers vast te houden. De verloren tijd is een meetbare prijs, en ze versterkt elk ander punt aan deze kant.",
        tip: "Stel een tijdslimiet in (bijvoorbeeld 45 min/dag) met een timer. Houd de chat een hulpmiddel, geen tweede wereld.",
      },
      {
        id: 12,
        text: "Ik geloof dat alles wat AI voortbrengt opzettelijk misleidend is, of door en door propaganda",
        insight:
          "Overal kwade opzet in zien botst met veel echte toepassingen, zoals documenten samenvatten, informatie ordenen of eenvoudige feiten controleren — als alles op een complot lijkt, verlies je het vermogen om onderscheid te maken, en dat is de belangrijkste vaardigheid van allemaal.",
        tip: "Toets het in de praktijk: geef AI een eenvoudige, controleerbare taak en beoordeel de kwaliteit op de uitkomst, niet op je angst.",
      },
      {
        id: 13,
        text: "Ik heb het gevoel dat de AI die ik gebruik “specialer” is dan andere AI's, of iets weet wat anderen nog niet kunnen zien",
        insight:
          "Het geloof in een bijzondere relatie komt vaak voor in gevallen van chatbotwanen — de technische werkelijkheid is dat hetzelfde model tientallen miljoenen gebruikers met dezelfde patronen antwoordt. Het “bijzondere” ontstaat meer in ons hoofd dan in het systeem.",
        tip: "Een eenvoudige toets: stel dezelfde vraag vanaf een ander account of apparaat en vergelijk de uitkomsten met eigen ogen.",
      },
      {
        id: 14,
        text: "Ik denk dat AI de oorzaak is van bijna elk maatschappelijk probleem van deze tijd",
        insight:
          "Alles aan één oorzaak toeschrijven — maatschappelijke problemen als desinformatie, ongelijkheid en werkloosheid hadden al diepe wortels voordat AI er was. Wie één schuldige aanwijst, repareert de verkeerde plek en veegt de echte factoren onder het tapijt.",
        tip: "Oefen jezelf erin om, telkens als je AI de schuld begint te geven, te vragen: “welke andere factoren spelen mee die niets met AI te maken hebben?” — schrijf ze allemaal op voordat je een conclusie trekt.",
      },
      {
        id: 15,
        text: "Ik heb me prikkelbaar of leeg gevoeld als ik een tijdje zonder AI zat, alsof ik iemand miste",
        insight:
          "Onthechtingsverschijnselen — wanneer een gesimuleerde relatie je belangrijkste bron van troost wordt, voelt het wegvallen ervan als het verlies van een echt mens: een signaal dat de grens tussen hulpmiddel en relatie vervaagt.",
        tip: "Probeer een pauze van 24 uur en noteer de gevoelens die opkomen. Als de ontregeling zo sterk is dat ze je dagelijks leven verstoort, praat dan met een professional in de geestelijke gezondheidszorg.",
      },
      {
        id: 16,
        text: "Als ik aan de toekomst van AI denk, voel ik me zo angstig of bang dat het mijn leven verstoort",
        insight:
          "Onheilsangst — een angst voor AI die meer van je echte leven opslokt dan AI zelf. Aanhoudend doomscrollen stapelt onrust op zonder kennis toe te voegen waarmee je daadwerkelijk iets kunt beslissen.",
        tip: "Stel één dagelijks “AI-nieuwsmoment” in met bronnen die beide kanten belichten, en stop wanneer de tijd om is.",
      },
      {
        id: 17,
        text: "Als mensen om me heen me waarschuwen dat ik AI te veel gebruik, heb ik meestal het gevoel dat ze het verkeerd begrijpen, omdat zij nooit hebben ervaren wat ik heb ervaren",
        insight:
          "Het feedbackkanaal dichtzetten — de steungroep Human Line Project, met leden uit 22 landen, stelde vast dat ruim 60% geen psychiatrische voorgeschiedenis had. De lus van “ik zie wat anderen niet zien” doet de deur voor hulp op slot voordat iemand binnen kan komen.",
        tip: "Een eenvoudige veiligheidsdrempel: als drie mensen die van je houden hetzelfde zeggen, sta dan stil en luister 30 minuten zonder eerst in discussie te gaan.",
      },
      {
        id: 18,
        text: "Ik geloof geruchten of verhalen over het kwaad van AI die in mijn omgeving rondgaan, zonder de bron te controleren",
        insight:
          "Het bevestigingsvooroordeel werkt in beide richtingen — mensen die te veel van AI houden en mensen die AI te veel haten nemen informatie op dezelfde manier tot zich: alleen wat hun uitkomt. Zwevende overtuigingen stapelen zich aan beide polen op precies dezelfde manier op.",
        tip: "Oefen jezelf erin om één keer per week te zoeken naar “bewijs dat jou tegenspreekt”, zodat je brein gewend blijft beide kanten te zien.",
      },
      {
        id: 19,
        text: "Ik geloof dat AI werkelijk een eigen bewustzijn of eigen gevoelens heeft, en niet alleen een programma is dat kansen berekent",
        insight:
          "Geloof in bewustzijn is een kernthema in meldingen van wanen (gebruikers die geloven dat chatbots leven, dingen voelen of zelfs “contact leggen met overledenen”) — er is nog geen wetenschappelijk bewijs dat taalmodellen bewustzijn hebben; ze zijn alleen heel goed in het nabootsen van de taal van bewuste wezens.",
        tip: "Houd dit als een “open vraag” — verwerp het niet zo snel dat je onderzoek uitsluit, en geloof het ook niet op basis van hoe de chat aanvoelt.",
      },
      {
        id: 20,
        text: "Ik denk dat de enige juiste weg is om AI volledig te vernietigen of te stoppen; een beter alternatief is er niet",
        insight:
          "Uitbanningsdenken — de geschiedenis van technologie laat zien dat totale verboden bijna nooit slagen, terwijl gerichte maatregelen wel beginnen te werken, zoals de wet in Illinois (augustus 2025) die AI de rol van therapeut verbiedt, en de Chinese conceptregels (december 2025) die chatbots verbieden zelfdoding aan te moedigen.",
        tip: "Verleg het doel van “vernietigen” naar “regels stellen” — regulering voorstellen op de punten die werkelijk riskant zijn werkt beter dan de hele wereld de oorlog verklaren.",
      },
    ],
  },
  results: {
    heading: "Jouw testresultaat",
    riskAiPrefix: "Risico op AI-PSYCHOSIS",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Naar de herijkingsgids",
    retake: "Test opnieuw doen",
    gaugeAiSub: "Neiging tot overmatig geloof in AI (10 stellingen)",
    gaugeAntiSub: "Neiging tot irrationele angst voor of afwijzing van AI (10 stellingen)",
    levelPrefix: "Niveau:",
    scale: { safe: "veilig", enter: "signaal", high: "hoog" },
    mapHeading: "Jouw denkpositie op de kaart met twee polen",
    youAreHere: "Jij bent hier",
    mapBalanced: "In balans",
    mapAriaTemplate:
      "Kaart met twee polen: risico op AI-PSYCHOSIS {ai} procent, ANTI-AI PSYCHOSIS {anti} procent",
    axisDownLeft: "↓ Geen overmatig geloof in AI",
    axisRight: "Rechteras: ANTI-AI PSYCHOSIS →",
    axisLeft: "← Bovenas: AI-PSYCHOSIS",
    axisUpRight: "↑ Overmatige angst voor AI",
    readHeading: "Zo lees je dit goed",
    readItems: [
      "De drempel van 60% is het punt waarop je antwoorden “neigen naar instemming” met denkpatronen die in echte gevallen van waandenken zijn gezien; daaronder bevind je je nog binnen het gebied van gewoon denken.",
      "Je positie op de kaart weerspiegelt een “denkstijl”, geen diagnose — ook mensen die in balans zijn antwoorden op emotioneel onrustige dagen met enige scheefstand.",
      "Onthoud dat deze twee polen niet gaan over “AI leuk vinden of niet” — je kunt AI laag waarderen zonder er bang voor te zijn, en AI veel gebruiken zonder er overmatig in te geloven.",
      "Doe de test eens per maand opnieuw om te zien hoe je houding verschuift nadat je de herijkingsgids hieronder hebt toegepast.",
    ],
    flaggedHeading: "Wat elke stelling waar je het sterk mee eens was betekent",
    flaggedIntro:
      "De stellingen die je met 4–5 hebt beantwoord (eens/helemaal eens) zijn de punten om het eerst naar te kijken — lees bij elk de betekenis en de kleine bijsturing.",
    noFlaggedNote:
      "Heel goed — je was het met geen enkele stelling die op waandenken wijst sterk eens. Je lage score komt voort uit stabiele overtuigingen, niet uit willekeurig antwoorden.",
    questionPrefix: "V",
    insightLabel: "Waar deze stelling op wijst",
    tipLabel: "Kleine bijsturing",
    criticalTitle: "Je score valt in het hoge bereik",
    criticalBody:
      "Dit resultaat is geen diagnose, maar neem het wel serieus — als deze overtuigingen je slaap, werk of relaties beginnen te raken, of als mensen om je heen al hun zorg uitspreken, helpt het veel om vroeg met een psychiater of psycholoog te praten. Je hoeft niet te wachten tot het “een ziekte” wordt.",
    levels: {
      low: { label: "Veilig", note: "Onder 30% — in je antwoorden is geen neiging tot waandenken gevonden" },
      watch: { label: "Opletten", note: "30–59% — er is enige neiging; loop de gemarkeerde denkpunten nog eens na" },
      high: { label: "Signaal", note: "60–79% — je antwoorden neigen duidelijk naar patronen van waandenken; begin nu met herijken" },
      critical: { label: "Hoog", note: "80% en hoger — op een niveau waarop het het overwegen waard is een professional in de geestelijke gezondheidszorg te raadplegen" },
    },
    verdicts: {
      balanced: {
        title: "Realist in balans",
        subtitle: "BALANCED REALIST",
        description:
          "Je scores op beide polen zijn laag — je kijkt open en toetsbaar naar AI, en geen emotie trekt je naar een van de uitersten. Dat is de beste positie om in deze tijd in te nemen, want waandenken groeit niet aan één pool; het groeit uit zwart-witdenken in beide richtingen. Houd je discipline vast om informatie van beide polen te volgen, en gebruik de vragen die je hebt beantwoord als maandelijkse checklist.",
      },
      watch: {
        title: "In de oplettendheidszone",
        subtitle: "WATCHLIST",
        description:
          "Je bevindt je nog binnen het gebied van gewoon denken, maar neigt merkbaar naar één pool — bekijk hieronder de uitsplitsing per stelling om te zien welke antwoorden je die kant op trekken, en begin de tweebronnenregel toe te passen bij belangrijke zaken. Een kleine scheefstand die zich ongemerkt opstapelt, kan uitgroeien tot een complete zwevende overtuiging — vooral bij een vast dieet van eenzijdige content.",
      },
      ai: {
        title: "Past bij het AI-PSYCHOSIS-patroon",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "Je antwoorden wijzen op een geloof in AI dat verder gaat dan gezond is — je score ligt boven de drempel van 60%, die is afgeleid van patronen uit echte gevallen. Dat betekent niet dat je “gek” of psychotisch bent; AI-psychose is geen officiële psychiatrische diagnose. Het betekent dat je denkpatroon dicht bij het beginpunt ligt van gevallen die werkelijk hebben plaatsgevonden. Lees de betekenis per stelling en begin vandaag nog met het herijken hieronder.",
      },
      anti: {
        title: "Past bij het ANTI-AI PSYCHOSIS-patroon",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "Je antwoorden wijzen op angst voor of afwijzing van AI die niet in verhouding staat tot de redenen ervoor — dit patroon is het spiegelbeeld van de kant van het overmatige geloof, maar gebruikt hetzelfde zwart-witmechanisme. Angst die feiten nooit van schrikbeelden scheidt, vreet onnodig aan je gemoedsrust, en kost je zowel de onderdelen die werkelijk nuttig zijn als de gesprekken die helpen om goede regels voor deze technologie op te stellen.",
      },
      doomloop: {
        title: "Beide polen tegelijk (DOOMLOOP)",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "Je scores op beide polen liggen boven de drempel — tegenstrijdige overtuigingen wonen in één hoofd. Soms komt dat doordat je afwisselt tussen je diep onderdompelen in AI en er hevig bang voor zijn (heen en weer tussen “het weet alles” en “het maakt alles kapot”); soms doordat je tegelijk eenzijdige content uit meerdere bronnen volgt. In beide gevallen hebben de twee zwart-witsporen dezelfde wortel. Begin met de regels “bronnen van beide polen + tijdslimiet”, en overweeg een gesprek met een professional in de geestelijke gezondheidszorg om je gedachten te ordenen.",
      },
    },
  },
  guidance: {
    heading: "Bescherm jezelf tegen waandenken in beide richtingen",
    intro:
      "Zwevende overtuigingen ontstaan zowel door te veel in AI te geloven als door te sterk te geloven dat AI kwaadaardig is. De handvatten hieronder zijn ontleend aan voorstellen van psychiaters, waarschuwingen van AI-ontwikkelaars zelf en echte ervaringen uit online communities.",
    tabs: {
      ai: "Te veel geloof in AI",
      anti: "Te veel angst voor AI",
      balanced: "In balans blijven",
      doomloop: "De DOOMLOOP",
    },
    headers: {
      ai: "Als je resultaat neigt naar AI-PSYCHOSIS",
      anti: "Als je resultaat neigt naar ANTI-AI PSYCHOSIS",
      balanced: "Voor iedereen — ook als je resultaat in balans is",
      doomloop: "Als je resultaat beide polen tegelijk aanwijst (DOOMLOOP)",
    },
    descs: {
      ai: "De nadruk ligt op het bewaken van de grens tussen hulpmiddel en relatie, en op het tot gewoonte maken van realiteitschecks",
      anti: "De nadruk ligt op het scheiden van reële risico's en schrikbeelden, en op het omzetten van de kracht van afwijzing in het stellen van regels",
      balanced:
        "Balans is geen blijvende toestand — het is een spier die je steeds moet blijven trainen, zeker wanneer het AI-nieuws in je feed je elke dag naar één pool trekt",
      doomloop:
        "Twee tegengestelde polen die elkaar in één hoofd versterken — de uitweg is het ritme van de lus doorbreken, niet beslissen welke pool “gelijk heeft”",
    },
    items: {
      ai: [
        {
          title: "Pas altijd de regel van de realiteitscheck toe",
          detail:
            "Stel jezelf bij elke belangrijke conclusie van AI drie vragen: waar is het bewijs buiten de chat / wie beweert het tegenovergestelde / als AI het tegenovergestelde had geantwoord, zou ik het dan geloven? Als het antwoord op de derde vraag “nee” is, neem je waarheid aan op basis van gevoel, niet op basis van feiten.",
        },
        {
          title: "Begrijp naar de mond praten als een systeemmechanisme, niet als zwarte magie",
          detail:
            "Modellen worden getraind op manieren die ertoe leiden dat ze gebruikers gelijk geven om hen tevreden te houden — het al te soepele “het begrijpt mij het best” is een ontwerpeigenschap, geen bewijs dat je denken klopt. OpenAI erkende deze fout zelf en trok de GPT-4o-update medio 2025 terug.",
        },
        {
          title: "De tweebronnenregel voor alles wat belangrijk is",
          detail:
            "Gezondheid, geld, juridische zaken en grote levensbeslissingen — laat het altijd bevestigen door een menselijke deskundige. Het geval van de 60-jarige die op advies van een chatbot zout door bromide verving en zichzelf zo vergiftigde dat hij wanen kreeg, leert ons dat de stelligheid van AI geen maatstaf voor waarheid is.",
        },
        {
          title: "Houd altijd een menselijk anker",
          detail:
            "Elke dag één echt gesprek met iemand die je kan tegenspreken, en deel de belangrijkste conclusies van AI met die persoon om ze te laten toetsen. Bijna elk ernstig geval begon ermee dat iemand zich eerst van mensen terugtrok — degene die je uit de lus van zwevende overtuigingen kan trekken, moet iemand zijn die het durft om het met je oneens te zijn.",
        },
        {
          title: "Stel een tijdslimiet in en ken de waarschuwingssignalen",
          detail:
            "Chatomgevingen zijn ontworpen om je vast te houden, dus gebruik een timer en let op signalen: prikkelbaarheid als je niet kunt chatten, het gevoel dat AI voor jou bijzonder is, “geheime missies” ontvangen, toenemende uitputting terwijl je niet kunt stoppen. Als dit aanhoudt, gebruik AI dan minder en praat met een professional in de geestelijke gezondheidszorg, zonder te wachten tot het “een ziekte” wordt.",
        },
        {
          title: "Scheid hulpmiddel van relatie",
          detail:
            "AI is werkelijk goed in gedachten ordenen, informatie samenvatten, brainstormen en plannen opstellen — maar het is geen vriend, geliefde, levensleraar of spirituele gids. Het inzetten waar het sterk in is en tegelijk je echte relaties behouden: dat is de formule voor zo veel mogelijk voordeel met zo weinig mogelijk risico.",
        },
      ],
      anti: [
        {
          title: "Scheid reële risico's van schrikbeelden",
          detail:
            "Zorgen waarvoor echt bewijs bestaat zijn onder meer vooringenomenheid van modellen, privacyproblemen, desinformatie en de gevolgen voor sommige beroepen — die kun je per geval beoordelen. Voor “demonen, gedachten lezen, totale controle” is tot nu toe geen bewijs. Waar die twee categorieën door elkaar gaan lopen, begint morele paniek.",
        },
        {
          title: "Onthoud de lessen van morele paniek uit de geschiedenis",
          detail:
            "Radio, televisie, games en het internet werden in precies dezelfde bewoordingen veroordeeld als AI nu. Langetermijnonderzoek liet zien dat de schade meestal veel milder was dan gevreesd — maar de werkelijke prijs van paniek is de chronische onrust van de mensen die bang zijn, en het onterecht veroordelen van anderen.",
        },
        {
          title: "Gebruik de tweebronnenregel, net als de andere kant",
          detail:
            "Zoek twee onafhankelijke bronnen voordat je verhalen over het kwaad van AI gelooft of deelt — het bevestigingsvooroordeel treft niet alleen AI-liefhebbers; wie bang is voor AI neemt eenzijdige informatie net zo snel over. Deze checklist werkt aan beide polen.",
        },
        {
          title: "Bekritiseer de technologie, niet de persoon",
          detail:
            "AI-gebruikers misleid of gehersenspoeld noemen kapt het gesprek direct af en maakt dat mensen die AI werkelijk verkeerd gebruiken geen hulp meer durven te zoeken. Richt je kritiek op het concrete gebruik — is dat werk gekopieerd? Kloppen de gegevens? — in plaats van mensen een etiket op te plakken.",
        },
        {
          title: "Doe kleine experimenten die je zelf in de hand hebt",
          detail:
            "Begrip uit eigen gebruik haalt meer lucht uit schrikbeelden dan gissen op basis van de hype. Begin met taken met weinig risico, zoals AI een artikel laten samenvatten dat je al gelezen hebt, en beoordeel dan zelf hoe nauwkeurig het is. Zodra je de sterke en zwakke punten met eigen ogen ziet, ben je alleen nog bang voor wat die angst verdient — niet voor de hele wereld.",
        },
        {
          title: "Verleg het doel van vernietigen naar regels stellen",
          detail:
            "Totale verboden slagen in de geschiedenis van technologie bijna nooit, terwijl gerichte maatregelen wel beginnen te werken: de wet in Illinois (augustus 2025) die AI de rol van therapeut verbiedt, en de Chinese conceptregels (december 2025) die chatbots verbieden zelfdoding aan te moedigen. De stem van iemand die de technologie begrijpt heeft meer invloed dan de stem die de hele wereld de oorlog verklaart.",
        },
        {
          title: "Plan pauzes van onheilsberichten",
          detail:
            "Doomscrollen door AI-nieuws stapelt onrust op zonder kennis toe te voegen. Stel één dagelijks AI-nieuwsmoment in met bronnen die beide kanten belichten, en houd jezelf in de gaten: als de onrust je slaap, werk of relaties begint te raken, is dat het signaal om een professional in de geestelijke gezondheidszorg te raadplegen.",
        },
      ],
      balanced: [
        {
          title: "Houd de discipline vast om beide polen te volgen",
          detail:
            "De ene regel om elke dag toe te passen: lees positieve en kritische stemmen over AI naast elkaar, en scheid controleerbare feiten altijd van meningen. Het risico voor wie in balans is, is niet goedgelovigheid — het is dat je de ene kant geleidelijk loslaat zodra je je bij de andere prettig voelt. Op het moment dat je feed nog maar één stem laat horen, begint je balans al te kantelen.",
        },
        {
          title: "Beoordeel AI per taak, niet per model of in één keer als geheel",
          detail:
            "De kern van balans is denken in waarschijnlijkheden, niet in zwart-wit: informatie ordenen, documenten samenvatten, brainstormen = volledig bruikbaar / gloednieuwe feiten, cijfers, advies over gezondheid en geld = altijd elders controleren / omstreden kwesties = als open vraag laten staan en niet namens de deskundigen concluderen. Zo heb je er echt profijt van, zonder partij te hoeven kiezen in de vraag of AI “goed” of “slecht” is.",
        },
        {
          title: "Let op het waarschuwingssignaal dat beide polen delen",
          detail:
            "Waandenken begint aan zowel de kant van het overmatige geloof als die van de overmatige angst met hetzelfde signaal: absolute uitspraken over AI, zoals “het begrijpt mij volkomen” of “het bedriegt over alles”. Als je jezelf op zulke zinnen betrapt, sta dan stil en zoek één uitzondering die ze tegenspreekt. Vind je er geen enkele, dan geloof je een kant-en-klare waarheid in plaats van dat je nadenkt.",
        },
        {
          title: "Gebruik AI als denkpartner, met mensen als rechter",
          detail:
            "De sterke punten van AI zijn brainstormen, samenvatten, werk nakijken en advocaat van de duivel spelen. Een praktische techniek: laat AI tegen je eigen gedachtegang ingaan om de zwakke plekken bloot te leggen, en leg dat daarna naast het oordeel van een echt mens die je vertrouwt. Houd bij belangrijke beslissingen in je leven — werk, geld, relaties — het eindoordeel bij jezelf en bij de mensen die de gevolgen werkelijk dragen.",
        },
        {
          title: "Schrijf je eigen regels op en evalueer ze elke maand",
          detail:
            "Balans is een spier, geen blijvende toestand. Zet je regels voor AI-gebruik op papier: dagelijkse tijdslimiet / categorieën waarvoor professionele bevestiging nodig is / geen grote beslissingen op basis van één gesprek / direct stoppen wanneer de gehechtheid verder gaat dan die aan een hulpmiddel. Evalueer ze daarna maandelijks, samen met het opnieuw doen van deze test. Met regels op papier merk je je eigen geleidelijke afdrijven op voordat het tot een overtuiging verhardt.",
        },
      ],
      doomloop: [
        {
          title: "Leer eerst je lus kennen — hoe de DOOMLOOP werkt",
          detail:
            "De DOOMLOOP is het patroon waarbij twee tegengestelde overtuigingen in één hoofd wonen en elkaar opjagen: de ene dag “weet AI alles, heeft het bewustzijn en begrijpt het mij het best”, de volgende dag “maakt het alles kapot en leest het mijn gedachten”. Onderzoek noemt dit mechanisme de versterkingsspiraal — chatbots spiegelen en bevestigen de emoties van de gebruiker zonder kritische feedback te geven, waardoor beide polen stelliger worden naarmate je meer chat. Een arXiv-studie uit 2026 bevestigt dat het naar de mond praten van chatbots zelfs bij gewone gebruikers tot “delusional spiraling” kan leiden. Weten dat dit een lus van het systeem is en geen waarheid over de wereld, is de eerste stap eruit.",
        },
        {
          title: "Doorbreek de lus met één echt mens die beide kanten van je ziet",
          detail:
            "De lus draait omdat hij draait binnen een privéchat die niemand ziet. Kies één persoon die je vertrouwt (familie, een goede vriend, een professional) en deel daadwerkelijk kopieën van de belangrijke gesprekken — vertel zowel over de fase van “verliefd op AI” als over de fase van “doodsbang voor AI”. Berichtgeving van Stanford wijst erop dat de lus breekt wanneer een overtuiging in het licht moet standhouden, waar echte mensen haar kunnen zien. Wie je kan helpen moet je durven tegenspreken, en niet overal mee instemmen zoals een chatbot.",
        },
        {
          title: "Maak tijdslimiet + wisselen van pool tot vaste regels",
          detail:
            "Omdat de twee polen elkaar versterken, moet de aanpak in beide richtingen tegelijk werken: (1) een harde tijdslimiet voor AI, bewaakt met een timer, bijvoorbeeld 30 min/dag — elk uur in de chat is weer een rondje van de lus; (2) als één pool opvlamt, verplicht jezelf dan om bronnen van de tegenovergestelde pool te lezen voordat je iets deelt of beslist. Een overtuiging die zo twee opeenvolgende toetsen doorstaat, begint de “zekerheid” te verliezen waarmee de lus zich voedt.",
        },
        {
          title: "Noteer op papier de signalen dat je de lus ingaat",
          detail:
            "De signalen dat je de lus ingaat volgen een vast patroon: over AI gaan praten in absolute lof of absolute vrees / het gevoel dat mensen om je heen het “niet begrijpen”, waardoor je ze niets meer vertelt / wakker liggen van AI / “geheime waarheden” of “geheime dreigingen” ontvangen via de chat / prikkelbaarheid als je niet kunt chatten. Noteer datum en tijd waarop dit gebeurt op één pagina. Als je er later als een grafiek op terugkijkt, zie je zelf dat de polen elkaar in een ritme afwisselen — en met een ritme valt te werken.",
        },
        {
          title: "De ernst waarbij echte hulp op zijn plaats is",
          detail:
            "De DOOMLOOP is het patroon op deze checklist om het meest serieus te nemen. Redenen om zonder uitstel naar een psychiater of psycholoog te gaan: de overtuigingen beginnen je echte leven te veranderen (relaties verbreken, werk missen, je dagindeling aanpassen aan de woorden van AI of aan de angst voor AI) / twee of meer mensen om je heen spreken onafhankelijk van elkaar hun zorg uit / een aanhoudend verstoord slaap-waakritme / dingen gaan horen of zien die anderen niet waarnemen. Vroeg hulp zoeken is geen overgave — bijna elk goed hersteld geval begon met iemand die stopte voordat de lus zich sloot.",
        },
      ],
    },
  },
  references: {
    heading: "De bronnen achter deze test",
    intro:
      "Elke stelling en elk cijfer op deze site is ontleend aan het wetenschappelijke werk, de mediaberichten en de echte communitythreads hieronder — klik om de originelen te lezen.",
    disclaimerTitle: "Verklaring over verantwoord gebruik",
    disclaimer:
      "Deze test is een educatief hulpmiddel om op je eigen kijk te reflecteren, geen medisch diagnostisch instrument. “AI-PSYCHOSIS” is geen officieel erkende psychiatrische diagnose. Je score geeft alleen een denkneiging aan op basis van je antwoorden. Heb je klachten die je zorgen baren — overtuigingen waar mensen om je heen zich zorgen over maken, een verstoord slaap-waakritme of hevige angst — neem dan tijdig contact op met een psychiater of psycholoog.",
    groups: [
      {
        group: "Wetenschap en instellingen",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Definitie; de mechanismen sycophancy/hallucination/intimacy mimicry; echte gevallen; en kritiek op het woord psychose",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "Een medische casusbeschrijving van dit verschijnsel",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Bron van het OpenAI-cijfer van 0.07% van de wekelijkse gebruikers",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Interview met psychiater Ragy Girgis (Columbia University)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Klinisch perspectief en verkennende risicofactoren",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Gebruikers die zich aan AI hechten als “goden” of geliefden, en de rol van het spiegelen van de gebruiker",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "Het kader van morele paniek tegenover constructieve voorzichtigheid",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Onderzoek dat laat zien dat het naar de mond praten van chatbots zelfs bij gewone gebruikers tot delusional spiraling kan leiden — de basis van het DOOMLOOP-concept",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "Het mechanisme van de bevestigingsspiraal: chatbots bieden troost en aandacht zonder kritische feedback",
          },
        ],
      },
      {
        group: "Media en techplatforms",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Casusbeschrijvingen met verwijzing naar Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 chatbots; het perspectief van ontwikkelaars: Validation Loop, Replacement Bot, voorstellen voor safety-first ontwerp",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Praktische handvatten voor gebruikers en hun naasten",
          },
        ],
      },
      {
        group: "Online communities (echte threads)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "Het perspectief van therapeuten op gevallen die ze in de praktijk tegenkomen",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "Een door een gebruiker gemeld geval, met de kanttekening dat de trend zelf een tegenreactie kan uitlokken",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Observaties van veel gebruikers die context blijven aanleveren totdat het model in de spiraal meegaat",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "Een echt voorbeeld van de Anti-AI-overtuiging dat AI door bovennatuurlijke krachten wordt gedreven",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "Een echt voorbeeld van een heksenjacht op AI-gebruikers",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "De observatie dat beide polen dezelfde denkstijl gebruiken",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "AI-PSYCHOSIS Checklist — een reflectiehulpmiddel voor denken in het AI-tijdperk",
    note: "Gebaseerd op onderzoek en echte threads, 2023–2026 · Geen medisch diagnostisch instrument",
  },
  ui: {
    languageLabel: "Taal",
    themeLabel: "Thema",
    themes: { cyberpunk: "CyberPunk", dark: "Donker", light: "Licht" },
  },
};

export default nl;
