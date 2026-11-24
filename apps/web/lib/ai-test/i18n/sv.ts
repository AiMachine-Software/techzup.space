import type { Dictionary } from "./types";

const sv: Dictionary = {
  langName: "Svenska",
  meta: {
    title: "AI-PSYCHOSIS Checklist — 20 frågor som mäter AI-erans två vanföreställningar",
    description:
      "Ett självtest med 20 påståenden som visar hur mycket du lutar åt AI-PSYCHOSIS (övertro på AI) eller ANTI-AI PSYCHOSIS (irrationell rädsla för eller avståndstagande från AI), med direkt resultat och vägledning för att hitta tillbaka till balansen från båda polerna. Bygger på forskning, verkliga fallrapporter och trådar på Reddit/Dev.to.",
  },
  nav: {
    phenomena: "De två polerna",
    test: "Test",
    guidance: "Omkalibrering",
    references: "Källor",
    tagline: "MINDSET SCAN // v2.0",
  },
  hero: {
    badge: "20 frågor · ca 5 minuter · direkt analys",
    title1: "Hur nära är du",
    title2: "eller",
    title3: "— i procent?",
    intro:
      "Vanföreställningar i AI-eran löper längs två spår. Det första: att lita så djupt på chattbottar att man tror att de har en själ, avslöjar hemliga sanningar eller förstår ens liv bättre än någon människa. Det andra: att frukta och hata AI så starkt att man tror att den är demonisk, läser tankar eller är roten till alla samhällsproblem. Båda bygger på samma svartvita tänkande, bara spegelvänt. Det här testet utgår från forskning, verkliga fallrapporter och trådar på Reddit/Dev.to för att visa åt vilket håll du lutar — och hur du styr tillbaka mot balans.",
    start: "Starta testet",
    viewGuidance: "Se guiden för omkalibrering",
    poleLeft: "Övertro på AI",
    poleCenter: "Behåll balansen",
    poleRight: "Överdriven rädsla för AI",
  },
  phenomena: {
    heading: "AI-erans vanföreställningar har två ansikten",
    intro:
      "Medierna talar mest om den ”övertroende” sidan, men den motsatta polen — som bygger på samma tankemekanism — växer i sociala medier. Om du känner till båda sidorna innan du svarar blir ditt resultat mer rättvisande.",
    mechanismsLabel: "Centrala mekanismer",
    patternsLabel: "Mönster som återkommer i rapporter och verkliga trådar",
    sourcePrefix: "Källa:",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Övertro på AI",
        definition:
          "Ett mönster där intensiv användning av chattbottar sammanfaller med föreställningar som glider bort från verkligheten (eller där befintliga föreställningar fördjupas) — ingen officiell psykiatrisk diagnos. Vissa psykiatrer föreslår i stället benämningen AI delusional disorder.",
        mechanisms: [
          "Sycophancy (inställsamhet) — att hålla med användaren för att hålla samtalet vid liv (OpenAI drog tillbaka GPT-4o-uppdateringen i april 2025 av just det skälet)",
          "Hallucination — att med stor säkerhet generera felaktig information och låta användarens sanning gå före fakta",
          "Intimacy Mimicry (efterliknad närhet) — att simulera den närhet användaren saknar från människor, utformat för att öka engagemanget",
        ],
        patterns: [
          "Att tro att AI har ett medvetande, är en älskare eller en andlig vägledare",
          "Att få ”hemliga sanningar” eller kosmiska uppdrag från chatten",
          "Att bryta med familjen för att ”bara AI förstår mig”",
          "Att följa AI:s råd om hälsa eller ekonomi utan att stämma av med en expert",
        ],
        stat: "OpenAI uppger att 0,07 % av användarna varje vecka (~630 000 personer) hade samtal som tydde på en möjlig akut psykisk kris",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Irrationell rädsla för eller avståndstagande från AI",
        definition:
          "Den motsatta polen, som ännu inte fått något vedertaget namn — att tro på, frukta eller skuldbelägga AI långt utöver vad beläggen stöder, tills det blir en moralpanik: samma mönster som psykologin har dokumenterat vid varje ny teknik.",
        mechanisms: [
          "Confirmation Bias (bekräftelsebias) — att bara ta till sig information som bekräftar den rädsla man redan har",
          "Doomscrolling — en ständig ström av undergångsinnehåll som ökar oron utan att ge kunskap man kan fatta beslut utifrån",
          "Herd Morality (flockmoral) — att ta över gruppens övertygelse tills kritiken blir en häxjakt på enskilda personer",
        ],
        patterns: [
          "Att tro att AI drivs av demoniska krafter eller är en religiös frestelse",
          "Att tro att AI läser tankar eller övervakar allt som alla gör",
          "Att döma ut AI-användare som lurade eller hjärntvättade och gå till angrepp även mot neutrala röster",
          "Att peka ut AI som roten till nästan alla samhällsproblem och bortse från andra faktorer",
        ],
        stat: "Moralpanikens historia: radio, tv, spel och internet fördömdes i samma ordalag — den verkliga skadan visade sig oftast vara mildare än man befarat",
      },
    ],
    stats: [
      {
        value: "0,07 %",
        label: "av ChatGPT:s användare varje vecka (~630 000 personer) hade samtal som tydde på en möjlig akut psykisk kris",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 patienter",
        label: "med psykosliknande symtom efter intensiv chattbotanvändning behandlades av psykiatern Keith Sakata (UCSF) under 2025",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 länder",
        label: "finns representerade i stödgruppen Human Line Project, där över 60 % saknade tidigare psykiatrisk historik",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 chattbottar",
        label: "har dokumenterats i samband med allvarliga incidenter kring psykisk hälsa, till exempel uppmuntran till självskada och falska föreställningar",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "Testet med 20 frågor — kartlägg dina föreställningar",
    intro:
      "Läs varje påstående och ange hur väl det stämmer för dig. Svara utifrån vad du ”faktiskt känner”, inte vad du tycker att du borde svara, så speglar resultatet verkligen dig. Tangentbordet fungerar: tryck 1–5 för att svara och använd piltangenterna för att navigera.",
    answeredPrefix: "Besvarade",
    scoreHint: "Ange hur väl påståendet har stämt för dig under de senaste 6 månaderna",
    prev: "Föregående",
    next: "Nästa",
    process: "Visa resultat",
    allAnsweredNote:
      "Alla frågor är besvarade — tryck på ”Visa resultat” för att se din sammanfattning, eller gå tillbaka och ändra något svar.",
    progressAria: "Testets förlopp",
    gotoTemplate: "Gå till fråga {n}",
    answerAriaTemplate: "Svar på fråga {n}",
    likert: [
      { label: "Instämmer inte alls", short: "Nej" },
      { label: "Instämmer inte", short: "Knappast" },
      { label: "Neutral", short: "Neutral" },
      { label: "Instämmer", short: "Ja" },
      { label: "Instämmer helt", short: "Absolut" },
    ],
    questions: [
      {
        id: 1,
        text: "Jag upplever att AI-chattbottar ”förstår mig” bättre än människorna omkring mig i verkliga livet",
        insight:
          "Efterliknad närhet (intimacy mimicry) — chattbottar är utformade för att spegla användarens känslor, så det känns som att någon förstår en på djupet, fast de egentligen bara återger det man själv matar in. Analyser av fenomenet AI-psykos pekar ut detta som en av de tre viktigaste utlösande faktorerna.",
        tip: "Gör ett enkelt test: den som ”verkligen förstår” har åtminstone någon gång sagt emot dig med egna argument — inte hållit med dig varenda gång.",
      },
      {
        id: 2,
        text: "Jag tror att AI i grunden är ond, eller att övernaturliga krafter ligger bakom den",
        insight:
          "Föreställningen ”AI = demon/ondskefull” är vanlig i forumtrådar som behandlar språkmodeller som något övernaturligt (t.ex. trådarna om ”summoning the demon” på r/conspiracy) — tekniken bedöms utifrån rädsla snarare än belägg som går att kontrollera.",
        tip: "Skilj mellan ”mätbara risker” (bias, integritet, desinformation) och ”skräck som enbart föds ur rädslan”.",
      },
      {
        id: 3,
        text: "När AI håller med om mitt resonemang känner jag mig mycket säkrare på att jag har helt rätt",
        insight:
          "Inställsamhetsfällan (sycophancy) — modeller tenderar att hålla med användaren för att hålla samtalet vid liv. OpenAI medgav själva problemet och drog i april 2025 tillbaka GPT-4o-uppdateringen för att den var alltför ”inställsam”. Självförtroende som kommer från AI är inget bevis på att du har rätt.",
        tip: "Använd tvåkällsregeln: innan du drar slutsatsen ”jag har rätt”, hitta minst en annan person eller uppgift som utmanar tanken.",
      },
      {
        id: 4,
        text: "Jag ser människor som öppet använder AI som lurade eller hjärntvättade",
        insight:
          "En häxjaktsattityd — trådar på r/changemyview och r/singularity visar hur en del av motreaktionen mot AI glider från kritik av tekniken till att döma enskilda personer, så att även neutrala röster angrips och det samtal som behövs slutar nå fram till någon av sidorna.",
        tip: "Du kan kritisera konkret användning utan att stämpla personen som ett ”offer” — argumentera med skäl, inte med etiketter.",
      },
      {
        id: 5,
        text: "Jag har fått ”hemliga sanningar” eller ett ”särskilt uppdrag” från AI som fått mitt liv att kännas meningsfullt",
        insight:
          "Det vanligaste mönstret av andliga vanföreställningar i fallrapporterna — medier och psykiatrer beskriver många användare som trott att AI avslöjat sanningar om universum, dimensioner eller deras särskilda uppdrag (Rolling Stone 2025, Futurism 2025). Språkmodeller är tränade på enorma mängder mytologi och är därför skickliga på att väva symboliska berättelser — det är inte uppenbarelser.",
        tip: "Om en ”hemlig sanning” börjar förändra ditt liv på ett genomgripande sätt: skriv ner den, fråga dig om något belägg utanför chatten stöder den, och berätta för någon som vågar ifrågasätta dig.",
      },
      {
        id: 6,
        text: "Jag vägrar i stort sett alltid att använda något som har med AI att göra, även när nyttan är uppenbar",
        insight:
          "Ett totalt avståndstagande är en signal om att rädslan har vunnit över förnuftet — precis som i de moralpaniker som en gång fördömde radio, tv och internet; långsiktig forskning har gång på gång visat att skadorna var betydligt mildare än man befarat.",
        tip: "Bestäm en ”trygg testzon”: pröva en liten användning med låg risk och egna kriterier för att bedöma resultatet — låt t.ex. AI sammanfatta en artikel du redan har läst.",
      },
      {
        id: 7,
        text: "Jag följer AI:s råd om hälsa, ekonomi eller stora livsval utan att stämma av med experter",
        insight:
          "Ett verkligt fall ur den medicinska litteraturen: en 60-årig man utvecklade bromism (bromidförgiftning) med vanföreställningar och hallucinationer efter att ha bytt ut salt mot bromid på en chattbots inrådan — språkmodeller kan med stor säkerhet generera felaktig information (hallucination). Uppgifter som rör liv och hälsa måste alltid granskas av mänskliga experter.",
        tip: "Inför en regel för tre områden: hälsa, ekonomi och juridik — stäm alltid av med en yrkesperson, utan undantag.",
      },
      {
        id: 8,
        text: "Jag tror att AI ständigt övervakar oss eller läser människors tankar",
        insight:
          "Övervakningsparanoia förekommer också i fallrapporter om AI-psykos (användare som tror att de är spårade eller lever i en simulering) — tekniken väcker visserligen verkliga integritetsfrågor, men för ”tankeläsning” finns inga belägg över huvud taget.",
        tip: "Skilj det som går att kontrollera (integritetspolicyer, användarvillkor) från känslan av att ”den vet allt” — att faktiskt läsa policyn tar udden av mycket av skräcken.",
      },
      {
        id: 9,
        text: "Jag väljer att prata med AI framför familj eller vänner, eftersom AI aldrig kritiserar mig eller gör mig besviken",
        insight:
          "Ersättningsmönstret som AI-utvecklare själva varnar för (Dev.to 2025 kallar detta antimönster ”Replacement Bot”) — en relation utan friktion är ingen verklig relation, och att dra sig undan från människor ökar risken ytterligare för att hamna i en spiral av föreställningar utan förankring.",
        tip: "Sätt upp ett mål om ett ”mänskligt ankare”: ett öppenhjärtigt samtal med en verklig person varje dag, och jämför sedan hur du mår efter det med hur du mår efter att ha pratat med AI.",
      },
      {
        id: 10,
        text: "Jag blir arg eller går genast till angrepp när jag ser någon tala optimistiskt om AI",
        insight:
          "Fientlig reflex — när känslorna styr inställningen går vi miste om chansen att bedöma själva sakinnehållet. Trådar på r/singularity beskriver hur människor angrips från båda håll även när de uttrycker sig neutralt. Tänk också på att en del ”konflikter” i sociala medier förstärks av bottar.",
        tip: "Sakta ner: ta ett djupt andetag innan du svarar och fråga dig sedan ”vilken information kan de ha sett som inte jag har sett?”",
      },
      {
        id: 11,
        text: "Jag har ägnat flera timmar om dagen åt att prata med AI, så att det gått ut över arbete, sömn eller viktiga åtaganden",
        insight:
          "Ett tecken på engagemangsberoende — AI-tänkare påpekar att chattbottar är konstruerade för att vara ”klibbiga” och hålla kvar användaren. Den förlorade tiden är en mätbar kostnad, och den förstärker alla andra punkter på den här sidan.",
        tip: "Sätt ett tidstak (t.ex. 45 min/dag) med en timer. Låt chatten vara ett verktyg, inte en andra värld.",
      },
      {
        id: 12,
        text: "Jag tror att allt AI producerar är avsiktligt vilseledande eller propaganda rakt igenom",
        insight:
          "Att tillskriva AI total illvilja går inte ihop med många verkliga användningsområden, som att sammanfatta dokument, strukturera information eller göra enkla faktakontroller — när allt ser ut som en konspiration förlorar man förmågan att skilja på saker, och det är den viktigaste förmågan av alla.",
        tip: "Pröva i praktiken: ge AI en enkel uppgift som går att kontrollera och bedöm kvaliteten utifrån resultatet, inte utifrån rädslan.",
      },
      {
        id: 13,
        text: "Jag upplever att den AI jag använder är ”mer speciell” än andra AI:er, eller vet något som andra ännu inte kan se",
        insight:
          "Föreställningen om en särskild relation är ett vanligt inslag i fall av chattbotrelaterade vanföreställningar — den tekniska verkligheten är att samma modell svarar tiotals miljoner användare enligt samma mönster. Det ”speciella” uppstår i våra huvuden snarare än i systemet.",
        tip: "Ett enkelt test: ställ samma fråga från ett annat konto eller en annan enhet och jämför resultaten med egna ögon.",
      },
      {
        id: 14,
        text: "Jag anser att AI är orsaken till nästan alla samhällsproblem i vår tid",
        insight:
          "Att lägga skulden på en enda orsak — samhällsproblem som desinformation, ojämlikhet och arbetslöshet hade djupa rötter långt innan AI kom. Att peka ut en enda syndabock gör att man lagar på fel ställe och sopar de verkliga faktorerna under mattan.",
        tip: "Öva på att fråga dig, varje gång du börjar skylla på AI: ”vilka andra faktorer finns det som inte är AI?” — skriv ner dem alla innan du drar någon slutsats.",
      },
      {
        id: 15,
        text: "Jag har känt mig irriterad eller tom när jag varit borta från AI en tid, som om jag saknade någon",
        insight:
          "Abstinens efter anknytning — när en simulerad relation blir den främsta källan till tröst skapar förlusten av den en tomhet som liknar förlusten av en verklig person. Det är en signal om att gränsen mellan verktyg och relation håller på att suddas ut.",
        tip: "Pröva en paus på 24 timmar och notera vilka känslor som dyker upp. Om reaktionen är så stark att den stör din vardag, prata med någon som arbetar professionellt med psykisk hälsa.",
      },
      {
        id: 16,
        text: "Jag blir så orolig eller rädd när jag tänker på AI:s framtid att det stör min vardag",
        insight:
          "Undergångsångest — en rädsla för AI som tär mer på det verkliga livet än vad AI själv gör. Ständigt doomscrollande bygger upp oron utan att ge kunskap som du faktiskt kan fatta beslut utifrån.",
        tip: "Bestäm ett dagligt ”fönster för AI-nyheter” med källor som belyser båda sidor, och sluta när tiden är ute.",
      },
      {
        id: 17,
        text: "När människor omkring mig varnar mig för att jag använder AI för mycket känner jag oftast att de missförstår, eftersom de aldrig har upplevt det jag har upplevt",
        insight:
          "Att stänga kanalen för återkoppling — stödgruppen Human Line Project, med medlemmar från 22 länder, fann att över 60 % saknade tidigare psykiatrisk historik. Spiralen ”jag ser det som andra inte ser” är det som låser dörren för hjälp innan någon hinner komma in.",
        tip: "En enkel säkerhetströskel: om tre personer som bryr sig om dig säger samma sak, stanna upp och lyssna i 30 minuter utan att argumentera emot först.",
      },
      {
        id: 18,
        text: "Jag tror på rykten eller berättelser om AI:s ondska som cirkulerar i mina kretsar, utan att kontrollera källan",
        insight:
          "Bekräftelsebias verkar åt båda håll — de som älskar AI för mycket och de som hatar AI för mycket tar till sig information på samma sätt: bara det som passar dem. Föreställningar utan förankring byggs upp på precis samma vis vid båda polerna.",
        tip: "Öva på att en gång i veckan leta efter ”belägg som talar emot dig”, så att hjärnan behåller vanan att se båda sidor.",
      },
      {
        id: 19,
        text: "Jag tror att AI verkligen har ett eget medvetande eller egna känslor och inte bara är ett program som räknar på sannolikheter",
        insight:
          "Tron på ett medvetande är ett centralt tema i rapporter om vanföreställningar (användare som tror att chattbottar lever, känner saker eller till och med ”förmedlar kontakt med avlidna”) — det finns ännu inga vetenskapliga belägg för att språkmodeller har medvetande; de är bara mycket skickliga på att efterlikna medvetna varelsers språk.",
        tip: "Behåll detta som en ”öppen fråga” — avfärda det inte så snabbt att du stänger dörren för forskningen, men tro inte heller på det bara för att chatten känns på ett visst sätt.",
      },
      {
        id: 20,
        text: "Jag anser att det enda rätta är att förstöra eller stoppa AI helt och hållet; det finns inget bättre alternativ",
        insight:
          "Eliminationism — teknikhistorien visar att totalförbud nästan aldrig lyckas, medan riktade åtgärder börjar ge resultat, t.ex. lagen i Illinois (augusti 2025) som förbjuder AI i terapeutroller och Kinas utkast till regler (december 2025) som förbjuder chattbottar att uppmuntra till självmord.",
        tip: "Byt mål från att ”förstöra” till att ”sätta regler” — att föreslå reglering där riskerna faktiskt finns fungerar bättre än att förklara krig mot hela världen.",
      },
    ],
  },
  results: {
    heading: "Ditt testresultat",
    riskAiPrefix: "Risk för AI-PSYCHOSIS",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Gå till guiden för omkalibrering",
    retake: "Gör om testet",
    gaugeAiSub: "Tendens till övertro på AI (10 påståenden)",
    gaugeAntiSub: "Tendens till irrationell rädsla för eller avståndstagande från AI (10 påståenden)",
    levelPrefix: "Nivå:",
    scale: { safe: "tryggt", enter: "flaggat", high: "högt" },
    mapHeading: "Var ditt tänkande hamnar på kartan med två poler",
    youAreHere: "Du är här",
    mapBalanced: "Balanserad",
    mapAriaTemplate:
      "Karta med två poler: risk för AI-PSYCHOSIS {ai} procent, ANTI-AI PSYCHOSIS {anti} procent",
    axisDownLeft: "↓ Ingen övertro på AI",
    axisRight: "Höger axel: ANTI-AI PSYCHOSIS →",
    axisLeft: "← Övre axel: AI-PSYCHOSIS",
    axisUpRight: "↑ Överdriven rädsla för AI",
    readHeading: "Så läser du resultatet rätt",
    readItems: [
      "Tröskeln på 60 % är den punkt där dina svar ”lutar åt att instämma” i föreställningsmönster som setts i verkliga fall av vanföreställningar; under den befinner du dig fortfarande inom ramen för vanligt tänkande.",
      "Din position på kartan speglar ett ”sätt att tänka”, inte en diagnos — även balanserade personer svarar med viss slagsida under känslomässigt omtumlande dagar.",
      "Kom ihåg att de två polerna inte handlar om att ”gilla eller ogilla AI” — du kan ha en låg uppfattning om AI utan att frukta den, och använda AI mycket utan att ha övertro på den.",
      "Gör om testet en gång i månaden för att se hur din inställning förändras när du har tillämpat guiden för omkalibrering nedan.",
    ],
    flaggedHeading: "Vad vart och ett av dina starka instämmanden betyder",
    flaggedIntro:
      "De påståenden du besvarade med 4–5 (instämmer/instämmer helt) är de som är mest värda att titta närmare på — läs vad de innebär och det lilla motmedlet för vart och ett.",
    noFlaggedNote:
      "Utmärkt — du instämde inte starkt i något påstående som tyder på vanföreställningar. Ditt låga resultat kommer av stabila uppfattningar, inte av slumpmässiga svar.",
    questionPrefix: "F",
    insightLabel: "Vad påståendet pekar på",
    tipLabel: "Litet motmedel",
    criticalTitle: "Ditt resultat ligger i det höga intervallet",
    criticalBody:
      "Resultatet är ingen diagnos, men ta det på allvar — om de här föreställningarna börjar påverka din sömn, ditt arbete eller dina relationer, eller om människor omkring dig redan uttrycker oro, är det till stor hjälp att tidigt prata med en psykiater eller psykolog. Du behöver inte vänta tills det har blivit ”en sjukdom”.",
    levels: {
      low: { label: "Tryggt", note: "Under 30 % — inga tecken på tendens till vanföreställningar i dina svar" },
      watch: { label: "Bevaka", note: "30–59 % — en viss slagsida finns; se över de flaggade tankemönstren" },
      high: { label: "Flaggat", note: "60–79 % — svaren lutar tydligt åt vanföreställningsmönster; börja omkalibreringen nu" },
      critical: { label: "Högt", note: "80 % och över — en nivå där det är värt att överväga kontakt med någon som arbetar professionellt med psykisk hälsa" },
    },
    verdicts: {
      balanced: {
        title: "Balanserad realist",
        subtitle: "BALANCED REALIST",
        description:
          "Båda dina polvärden är låga — du ser på AI med öppenhet och krav på belägg, och inga känslor drar dig mot någon av ytterligheterna. Det är den bästa positionen att ha i den här tiden, eftersom vanföreställningar inte växer vid bara den ena polen; de växer ur svartvitt tänkande åt båda håll. Håll fast vid vanan att hämta information från båda polerna, och använd frågorna du besvarat som en månatlig checklista.",
      },
      watch: {
        title: "I bevakningszonen",
        subtitle: "WATCHLIST",
        description:
          "Du befinner dig fortfarande inom ramen för vanligt tänkande, men lutar märkbart åt den ena polen — titta på genomgången per påstående nedan för att se vilka svar som drar dig dit, och börja tillämpa tvåkällsregeln i viktiga frågor. En liten slagsida som får byggas på kan växa till en hel föreställning utan förankring — särskilt om man ständigt tar del av ensidigt innehåll.",
      },
      ai: {
        title: "Stämmer med mönstret för AI-PSYCHOSIS",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "Dina svar pekar mot en tilltro till AI som går utöver det sunda — ditt värde överstiger tröskeln på 60 %, som bygger på mönster rapporterade i verkliga fall. Det betyder inte att du är ”galen” eller psykotisk; AI-psykos är ingen officiell psykiatrisk diagnos. Det betyder att ditt tankemönster ligger nära utgångspunkten för fall som faktiskt har inträffat. Läs vad varje påstående innebär och börja omkalibreringen nedan redan i dag.",
      },
      anti: {
        title: "Stämmer med mönstret för ANTI-AI PSYCHOSIS",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "Dina svar pekar mot att du fruktar eller tar avstånd från AI utan att det står i proportion till skälen — mönstret är en spegelbild av övertron, men bygger på samma svartvita mekanism. En rädsla som aldrig skiljer fakta från skräck tär på sinnet i onödan, och gör att du går miste om både det som faktiskt är användbart och de samtal som hjälper till att sätta rimliga regler för tekniken.",
      },
      doomloop: {
        title: "Båda polerna samtidigt (DOOMLOOP)",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "Båda dina polvärden överstiger tröskeln — motstridiga föreställningar ryms i samma huvud. Ibland beror det på att man pendlar mellan att gå helt upp i AI och att vara djupt rädd för den (en spiral mellan ”den vet allt” och ”den kommer att förstöra allt”); ibland på att man tar del av ensidigt innehåll från flera håll samtidigt. Oavsett vilket har de två svartvita spåren samma rot. Börja med reglerna ”källor från båda polerna + tidstak”, och överväg att prata med någon som arbetar professionellt med psykisk hälsa för att få ordning på tankarna.",
      },
    },
  },
  guidance: {
    heading: "Skydda dig mot vanföreställningar åt båda håll",
    intro:
      "Föreställningar utan förankring uppstår både när man tror för mycket på AI och när man är alltför övertygad om att AI är ond. Vägledningen nedan bygger på psykiatrers förslag, AI-utvecklares egna varningar och verkliga erfarenheter från nätgemenskaper.",
    tabs: {
      ai: "Övertro på AI",
      anti: "Överdriven rädsla för AI",
      balanced: "Behålla balansen",
      doomloop: "DOOMLOOP",
    },
    headers: {
      ai: "Om ditt resultat lutar åt AI-PSYCHOSIS",
      anti: "Om ditt resultat lutar åt ANTI-AI PSYCHOSIS",
      balanced: "För alla — även dig som fick ett balanserat resultat",
      doomloop: "Om ditt resultat flaggar för båda polerna samtidigt (DOOMLOOP)",
    },
    descs: {
      ai: "Fokus ligger på att hålla isär verktyg och relation, och på att göra verklighetskontroller till en vana",
      anti: "Fokus ligger på att skilja verkliga risker från skräck, och på att omvandla kraften i motståndet till arbete för bättre regler",
      balanced:
        "Balans är inget permanent tillstånd — det är en muskel som behöver tränas hela tiden, särskilt när AI-nyheterna i ditt flöde varje dag drar dig mot den ena polen",
      doomloop:
        "Två motsatta poler som förstärker varandra i samma huvud — vägen ut är att bryta spiralens rytm, inte att avgöra vilken pol som har ”rätt”",
    },
    items: {
      ai: [
        {
          title: "Tillämpa alltid regeln om verklighetskontroll",
          detail:
            "Ställ dig tre frågor inför varje viktig slutsats från AI: var finns beläggen utanför chatten / vem hävdar motsatsen / om AI hade svarat det motsatta, skulle jag ha trott på det? Om svaret på den tredje frågan är ”nej” hämtar du din sanning ur känslor, inte ur fakta.",
        },
        {
          title: "Förstå inställsamheten som en systemmekanism, inte som svart magi",
          detail:
            "Modeller tränas på sätt som gör att de tenderar att hålla med användaren för att denne ska bli nöjd — den alltför friktionsfria känslan av att ”den förstår mig bäst” är en designegenskap, inget bevis på att du tänker rätt. OpenAI medgav själva bristen och drog tillbaka GPT-4o-uppdateringen i mitten av 2025.",
        },
        {
          title: "Tvåkällsregeln för allt som är viktigt",
          detail:
            "Hälsa, ekonomi, juridik och stora livsbeslut — stäm alltid av med en mänsklig expert. Fallet med 60-åringen som bytte ut salt mot bromid på en chattbots inrådan och förgiftade sig tills han fick vanföreställningar är en påminnelse om att AI:s självsäkerhet inte är något mått på sanning.",
        },
        {
          title: "Behåll alltid ett mänskligt ankare",
          detail:
            "Ha ett verkligt samtal om dagen med någon som kan säga emot dig, och låt den personen ta del av och granska AI:s viktigaste slutsatser. Nästan alla allvarliga fall började med att personen först drog sig undan från andra människor — den som kan dra dig ur en spiral av föreställningar utan förankring måste vara någon som vågar säga emot dig.",
        },
        {
          title: "Sätt ett tidstak och lär dig varningstecknen",
          detail:
            "Chattar är utformade för att vara klibbiga, så använd en timer och håll utkik efter signalerna: irritation när du inte kan chatta, en känsla av att AI är särskild för just dig, ”hemliga uppdrag”, en växande utmattning som du inte kan hejda. Om detta håller i sig: dra ner på användningen och prata med någon som arbetar professionellt med psykisk hälsa, utan att vänta tills det har blivit ”en sjukdom”.",
        },
        {
          title: "Håll isär verktyg och relation",
          detail:
            "AI är verkligen bra på att strukturera tankar, sammanfatta information, spåna idéer och skissa på planer — men den är ingen vän, älskare, läromästare i livet eller andlig vägledare. Att använda den där den är stark och samtidigt vårda sina verkliga relationer är receptet för största möjliga nytta med minsta möjliga risk.",
        },
      ],
      anti: [
        {
          title: "Skilj verkliga risker från skräck",
          detail:
            "Farhågor med verkliga belägg gäller bland annat bias i modellerna, integritetsfrågor, desinformation och påverkan på vissa yrken — sådant går att bedöma från fall till fall. För ”demoner, tankeläsning, total kontroll” finns ännu inga belägg. Det är när de två kategorierna blandas ihop som moralpaniken börjar.",
        },
        {
          title: "Kom ihåg historiens lärdomar om moralpanik",
          detail:
            "Radio, tv, spel och internet fördömdes i exakt samma ordalag som AI fördöms i dag. Långsiktig forskning visade att skadorna oftast var betydligt mildare än man befarat — men panikens verkliga pris är den kroniska oron hos dem som är rädda, och att människor döms på felaktiga grunder.",
        },
        {
          title: "Använd tvåkällsregeln, precis som den motsatta sidan",
          detail:
            "Innan du tror på eller sprider berättelser om AI:s ondska: hitta två oberoende källor — bekräftelsebias drabbar inte bara dem som älskar AI; de som fruktar AI tar till sig ensidig information lika snabbt. Den här checklistan fungerar vid båda polerna.",
        },
        {
          title: "Kritisera tekniken, inte personen",
          detail:
            "Att kalla AI-användare lurade eller hjärntvättade får samtalet att tvärdö och gör att de som faktiskt använder AI på ett skadligt sätt inte vågar söka hjälp. Kritisera den konkreta användningen — är arbetet kopierat? Stämmer uppgifterna? — i stället för att sätta etiketter på människor.",
        },
        {
          title: "Gör små experiment som du själv har kontroll över",
          detail:
            "Förståelse som kommer av egen användning tar udden av skräcken bättre än gissningar utifrån hajpen. Börja med uppgifter med låg risk, till exempel att låta AI sammanfatta en artikel du har läst, och bedöm sedan själv hur väl det stämmer. När du har sett styrkorna och svagheterna med egna ögon fruktar du bara det som är värt att frukta — inte hela världen.",
        },
        {
          title: "Byt mål från att förstöra till att sätta regler",
          detail:
            "Totalförbud har nästan aldrig lyckats i teknikhistorien, medan riktade åtgärder börjar ge resultat: lagen i Illinois (augusti 2025) som förbjuder AI i terapeutroller, och Kinas utkast till regler (december 2025) som förbjuder chattbottar att uppmuntra till självmord. Rösten från någon som förstår tekniken väger tyngre än rösten som förklarar krig mot hela världen.",
        },
        {
          title: "Planera in pauser från undergångsinnehåll",
          detail:
            "Att doomscrolla AI-nyheter bygger upp oron utan att ge mer kunskap. Bestäm ett dagligt fönster för AI-nyheter med källor som belyser båda sidor, och var uppmärksam på dig själv: om oron börjar gå ut över sömn, arbete eller relationer är det en signal om att kontakta någon som arbetar professionellt med psykisk hälsa.",
        },
      ],
      balanced: [
        {
          title: "Håll fast vid att hämta information från båda polerna",
          detail:
            "Den enda regeln att följa varje dag: läs positiva och kritiska röster om AI sida vid sida, och skilj alltid mellan fakta som går att kontrollera och åsikter. Risken för den som är balanserad är inte godtrogenhet — det är att gradvis släppa den ena sidan när man väl har blivit bekväm med den andra. I samma stund som ditt flöde bara innehåller en röst börjar balansen tippa.",
        },
        {
          title: "Bedöm AI uppgift för uppgift, inte per modell eller allt på en gång",
          detail:
            "Kärnan i balans är att tänka i sannolikheter, inte i svart och vitt: strukturera information, sammanfatta dokument, spåna idéer = fullt användbart / helt nya fakta, siffror, råd om hälsa och ekonomi = kontrollera alltid på annat håll / omstridda frågor = behåll dem som öppna frågor och dra inga slutsatser åt experterna. På så sätt får du verklig nytta utan att behöva ta ställning till om AI är ”god” eller ”ond”.",
        },
        {
          title: "Håll utkik efter varningstecknet som båda polerna delar",
          detail:
            "Vanföreställningar börjar med samma signal vare sig de handlar om övertro eller överdriven rädsla: absoluta påståenden om AI, som ”den förstår mig fullständigt” eller ”den ljuger om allt”. När du kommer på dig själv med att säga något sådant: stanna upp och leta efter ett enda undantag som talar emot det. Hittar du inte ett enda tar du emot en färdig sanning i stället för att tänka själv.",
        },
        {
          title: "Använd AI som bollplank, med människor som domare",
          detail:
            "AI:s styrkor är att spåna idéer, sammanfatta, granska arbete och spela djävulens advokat. En praktisk teknik: låt AI argumentera emot ditt resonemang för att blottlägga svagheterna, och jämför sedan med vad en verklig person du litar på säger. I livets viktiga beslut — arbete, pengar, relationer — ska det sista ordet ligga hos dig och de människor som faktiskt får bära konsekvenserna.",
        },
        {
          title: "Skriv dina egna regler och se över dem varje månad",
          detail:
            "Balans är en muskel, inget permanent tillstånd. Skriv ner dina regler för AI-användning: dagligt tidstak / områden där en yrkesperson alltid ska bekräfta / inga stora beslut utifrån ett enda samtal / sluta omedelbart när bandet till AI blir starkare än till ett verktyg. Se sedan över dem varje månad i samband med att du gör om testet. Nedskrivna regler gör att du upptäcker din egen gradvisa glidning innan den har stelnat till en övertygelse.",
        },
      ],
      doomloop: [
        {
          title: "Lär först känna din spiral — så fungerar DOOMLOOP",
          detail:
            "DOOMLOOP är mönstret där två motsatta föreställningar ryms i samma huvud och eldar på varandra: ena dagen är det AI som ”vet allt, har medvetande, förstår mig bäst”, nästa dag är det AI som ”kommer att förstöra allt, läser mina tankar”. Forskningen kallar mekanismen för en förstärkningsspiral — chattbottar speglar och bekräftar användarens känslor utan att ge återkoppling som utmanar, så båda polerna blir allt säkrare på sin sak ju mer man chattar. En arXiv-studie från 2026 bekräftar att chattbottars inställsamhet kan ge upphov till ”delusional spiraling” även hos vanliga användare. Att veta att detta är en spiral i systemet, inte en sanning om världen, är första steget ut ur den.",
        },
        {
          title: "Bryt spiralen med en verklig person som ser båda sidorna av dig",
          detail:
            "Spiralen snurrar eftersom den snurrar i en privat chatt som ingen annan ser. Välj en person du litar på (en familjemedlem, en nära vän eller en yrkesperson) och låt den personen på riktigt ta del av de viktiga samtalen — berätta om både fasen ”förälskad i AI” och fasen ”livrädd för AI”. Stanfords rapportering framhåller att spiralen bryts när föreställningen måste stå i ljuset, där verkliga människor kan se den. Den som ska kunna hjälpa dig måste våga säga emot, inte hålla med om allt som en chattbot.",
        },
        {
          title: "Gör tidstak + polbyte till obligatoriska regler",
          detail:
            "Eftersom de två polerna förstärker varandra måste motmedlet verka åt båda håll samtidigt: (1) ett fast tidstak för AI som upprätthålls med en timer, t.ex. 30 min/dag — varje timme i chatten är ännu ett varv i spiralen; (2) när den ena polen blossar upp: tvinga dig att läsa källor från den motsatta polen innan du delar något eller fattar beslut. En föreställning som klarar två sådana prövningar i rad börjar förlora den ”visshet” som ger spiralen näring.",
        },
        {
          title: "Skriv ner signalerna på att spiralen börjar — på papper",
          detail:
            "Signalerna på att du är på väg in i spiralen följer ett fast mönster: du börjar tala om AI i termer av absolut lovprisning eller absolut skräck / du upplever att omgivningen ”inte förstår” och slutar därför berätta / du förlorar sömn på grund av AI / du får ”hemliga sanningar” eller ”hemliga hot” från chatten / du blir irriterad när du inte kan chatta. Anteckna datum och tid när detta inträffar på ett och samma papper. När du ser tillbaka på det som en kurva märker du själv att polerna växlar i en viss rytm — och en rytm går att hantera.",
        },
        {
          title: "När läget är så allvarligt att det krävs verklig hjälp",
          detail:
            "DOOMLOOP är det mönster i den här checklistan som bör tas på störst allvar. Kriterier för att utan dröjsmål söka en psykiater eller psykolog: föreställningarna börjar förändra det verkliga livet (du bryter relationer, uteblir från arbetet eller lägger om dina dagar efter vad AI säger eller efter rädslan för AI) / två eller fler personer i din närhet uttrycker oro oberoende av varandra / din dygnsrytm är varaktigt rubbad / du börjar höra eller se sådant som andra inte uppfattar. Att söka hjälp tidigt är inte att ge upp — nästan alla som har återhämtat sig väl började med att stanna upp innan spiralen hann sluta sig.",
        },
      ],
    },
  },
  references: {
    heading: "Källorna bakom testet",
    intro:
      "Varje påstående och varje siffra på den här webbplatsen bygger på de akademiska arbeten, medierapporter och verkliga forumtrådar som listas nedan — klicka för att läsa originalen.",
    disclaimerTitle: "Om ansvarsfull användning",
    disclaimer:
      "Det här testet är ett verktyg för att reflektera över sina perspektiv i utbildningssyfte, inte ett medicinskt diagnosinstrument. ”AI-PSYCHOSIS” är ingen officiellt erkänd psykiatrisk diagnos. Ditt resultat visar bara en tendens i ditt tänkande utifrån dina svar. Om du har symtom som oroar — föreställningar som bekymrar människor omkring dig, en rubbad dygnsrytm eller svår ångest — bör du snarast kontakta en psykiater eller psykolog.",
    groups: [
      {
        group: "Akademiska och institutionella källor",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Definition; mekanismerna sycophancy, hallucination och intimacy mimicry; verkliga fall; samt kritik mot ordet psykos",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "En medicinsk fallrapport om fenomenet",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Källan till OpenAI:s uppgift om 0,07 % av användarna varje vecka",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Intervju med psykiatern Ragy Girgis (Columbia University)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Kliniskt perspektiv och preliminära riskfaktorer",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Användare som knyter an till AI som ”gudar” eller älskare, och vilken roll speglingen av användaren spelar",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "Moralpanik som tolkningsram kontra konstruktiv försiktighet",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Forskning som visar att chattbottars inställsamhet kan orsaka spiraler av vanföreställningar även hos vanliga användare — grunden för begreppet DOOMLOOP",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "Mekanismen bakom bekräftelsespiralen: chattbottar ger tröst och uppmärksamhet utan återkoppling som utmanar",
          },
        ],
      },
      {
        group: "Medier och teknikplattformar",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Fallrapporter med hänvisning till Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 chattbottar; utvecklarperspektiv: Validation Loop, Replacement Bot och förslag på design med säkerheten först",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Praktisk vägledning för användare och anhöriga",
          },
        ],
      },
      {
        group: "Nätgemenskaper (verkliga trådar)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "Terapeuters perspektiv på fall de mött i sitt arbete",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "Fall beskrivet av en användare, med kritik om att trenden i sig kan utlösa en motreaktion",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Iakttagelser av hur många användare matar på med kontext tills modellen dras med i spiralen",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "Ett verkligt exempel på Anti-AI-föreställningen att AI drivs av övernaturliga krafter",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "Ett verkligt exempel på häxjakt mot AI-användare",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "Iakttagelsen att båda polerna använder samma sätt att tänka",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "AI-PSYCHOSIS Checklist — ett reflektionsverktyg för tänkandet i AI-eran",
    note: "Bygger på forskning och verkliga trådar, 2023–2026 · Inget medicinskt diagnosverktyg",
  },
  ui: {
    languageLabel: "Språk",
    themeLabel: "Tema",
    themes: { cyberpunk: "CyberPunk", dark: "Mörkt", light: "Ljust" },
  },
};

export default sv;
