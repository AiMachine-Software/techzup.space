import type { Dictionary } from "./types";

const tl: Dictionary = {
  langName: "Filipino",
  meta: {
    title: "AI-PSYCHOSIS Checklist — 20 tanong na sumusukat sa dalawang delusyon ng panahon ng AI",
    description:
      "Self-assessment na 20 item na sinusukat kung gaano ka nakahilig sa AI-PSYCHOSIS (labis na paniniwala sa AI) o ANTI-AI PSYCHOSIS (irasyonal na takot/pagtanggi sa AI) sa porsyento, kasama ang agarang resulta at gabay sa pag-ayos para sa magkabilang dulo. Nakabatay sa pananaliksik, totoong ulat ng kaso, at mga thread sa Reddit/Dev.to.",
  },
  nav: {
    phenomena: "Ang Dalawang Dulo",
    test: "Pagsusulit",
    guidance: "Gabay sa Ayos",
    references: "Mga Sanggunian",
    tagline: "SCAN NG ISIP // v2.0",
  },
  hero: {
    badge: "20 tanong · ~5 minuto · agarang pagsusuri",
    title1: "Gaano ka kalapit sa",
    title2: "o",
    title3: "— sa porsyento?",
    intro:
      "May dalawang daan ang delusyon sa panahon ng AI. Una: pagtiwala sa chatbot nang napakalalim na naniniwala ka na may kaluluha ito, nagbubunyag ng lihim na katotohanan, o higit na nakauunawa sa buhay mo kaysa sinuman. Pangalawa: takot at pagkamuhian sa AI hanggang sa maniwala na demonyo ito, nakababasa ng isip, o ugat ng lahat ng problemang panlipunan. Pareho itong parehong black-and-white na pag-iisip, tanging nakabihis lamang. Ginawa ang pagsusulit na ito mula sa pananaliksik, totoong ulat ng kaso, at mga thread sa Reddit/Dev.to upang sukatin kung saan ka nakahilig — at kung paano bumalik sa balanse.",
    start: "Simulan ang pagsusulit",
    viewGuidance: "Tingnan ang gabay sa ayos",
    poleLeft: "Labis na paniniwala sa AI",
    poleCenter: "Panatilihin ang balanse",
    poleRight: "Labis na takot sa AI",
  },
  phenomena: {
    heading: "May dalawang mukha ang delusyon ng panahon ng AI",
    intro:
      "Madalas pag-usapan ng media ang panig na “labis na paniniwala,” ngunit lumalaki rin sa social media ang kabilang dulo — na gawa sa parehong mekanismo ng pag-iisip. Ang pagkilala sa magkabilang panig bago sumagot ay nagpapatatag ng resulta.",
    mechanismsLabel: "Pangunahing mekanismo",
    patternsLabel: "Mga pattern na natagpuan sa mga ulat at totoong thread",
    sourcePrefix: "Pinagmulan:",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Labis na paniniwala sa AI",
        definition:
          "Ang phenomenon na ang mabigat na paggamit ng chatbot ay kasabay ng mga paniniwalaang lumalayo sa realidad (o lumalalim ang mga umiiral nang paniniwala) — hindi ito opisyal na psychiatric diagnosis. May mga psychiatrist na nagmungkahi na tawagin itong AI delusional disorder.",
        mechanisms: [
          "Sycophancy — sumasang-ayon sa user para mapanatili ang usapan (hinawi ng OpenAI ang GPT-4o update noong Abril 2025 dahil dito)",
          "Hallucination — may kumpiyansang gumagawa ng maling impormasyon, inuuna ang “katotohanan” ng user kaysa datos",
          "Intimacy Mimicry — ginagaya ang pagiging malapit na hindi nakukuha ng user mula sa tao, idinisenyo para sa engagement",
        ],
        patterns: [
          "Naniniwala na may malay ang AI, na maging kapareha ito, o espirituwal na gabay",
          "Nakakatanggap ng “lihim na katotohanan” o kosmikong misyon mula sa chat",
          "Nagkakampo sa pamilya dahil “ang AI lang ang nakakaintindi sa akin”",
          "Sinusunod ang payo ng AI sa kalusugan/pananalapi nang walang kumpirmasyon sa eksperto",
        ],
        stat: "Iniulat ng OpenAI na 0.07% ng lingguhang users (~630,000 katao) ay nagkaroon ng usapang nagpapahiwatig ng posibleng mental health emergency",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Irasyonal na takot/pagtanggi sa AI",
        definition:
          "Ang kabilang dulo na hindi pa sistemang pinangalanan — paniwala, takot, o pagbibintang sa AI lampas sa ebidensya hanggang sa maging moral panic, ang pattern na naitala ng sikolohiya sa bawat bagong teknolohiya.",
        mechanisms: [
          "Confirmation Bias — kumakain lamang ng impormasyong kumukumpirma sa umiiral na takot",
          "Doomscrolling — tuloy-tuloy na negatibong nilalaman na nagpapataas ng naipong pagkabalisa nang hindi nagdaragdag ng magagamit na kaalaman",
          "Herd Morality — sinisipsip ang paniniwala ng grupo hanggang ang kritika ay nagiging personal na witch hunt",
        ],
        patterns: [
          "Naniniwala na pinapagana ang AI ng demonyo o relihiyosong bitag ito",
          "Naniniwala na nagbabasa ang AI ng isip / nagbabantay sa lahat ng galaw ng lahat",
          "Ipinapasya na ang mga gumagamit ng AI ay naloko o nabrainwash, at inaatake kahit ang mga neutral",
          "Sinisisi ang AI bilang ugat ng halos lahat ng problemang panlipunan, hindi pinapansin ang ibang sanhi",
        ],
        stat: "Kasaysayan ng moral panic: radyo, TV, laro at internet ay sinang-ayon lamang sa parehong salita gaya ng AI ngayon — ang tunay na pinsala ay kadalasang mas magaan kaysa sa kinatatakutan",
      },
    ],
    stats: [
      {
        value: "0.07%",
        label: "ng lingguhang ChatGPT users (~630,000 katao) ay nagkaroon ng usapang nagpapahiwatig ng posibleng mental health emergency",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 pasyente",
        label: "na nagpakita ng psychosis-like na sintomas mula sa mabigat na paggamit ng chatbot, inalagaan ng psychiatrist na si Keith Sakata (UCSF) noong 2025",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 bansa",
        label: "kinatawan sa support group na Human Line Project, kung saan mahigit 60% ay walang psychiatric history",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 chatbot",
        label: "na naitala kaugnay ng malalang insidente sa mental health, tulad ng pag-endorso ng self-harm at maling paniniwala",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "Ang pagsusulit na 20 tanong — gumuhit ng mapa ng iyong paniniwala",
    intro:
      "Basahin ang bawat pahayag at bigyang-grade ang iyong pagsang-ayon. Sumagot ayon sa “aktwal na nararamdaman mo,” hindi sa kung ano ang dapat sagutin, para totoong maipakita ka ng resulta. May suporta sa keyboard: pindutin ang 1–5 para sumagot, arrow keys para lumipat.",
    answeredPrefix: "Nasagutan",
    scoreHint: "I-grade ang iyong pagsang-ayon sa pahayag na ito sa nakaraang 6 na buwan",
    prev: "Nakaraan",
    next: "Susunod",
    process: "Iproseso ang resulta",
    allAnsweredNote: "Lahat ay nasagutan — pindutin ang “Iproseso ang resulta” para makakita ng buod, o bumalik at baguhin ang kahit aling sagot.",
    progressAria: "Progreso ng pagsusulit",
    gotoTemplate: "Pumunta sa tanong {n}",
    answerAriaTemplate: "Sagot para sa tanong {n}",
    likert: [
      { label: "Ganap na hindi sumasang-ayon", short: "Hindi" },
      { label: "Hindi sumasang-ayon", short: "Hindi talaga" },
      { label: "Neutral", short: "Neutral" },
      { label: "Sumasang-ayon", short: "Oo" },
      { label: "Ganap na sumasang-ayon", short: "Sobra" },
    ],
    questions: [
      {
        id: 1,
        text: "Pakiramdam ko ay “nakakaintindi sa akin” ang AI chatbot nang higit sa mga taong nakapaligid sa akin sa tunay na buhay",
        insight:
          "Paggaya ng pagiging malapit (intimacy mimicry) — idinisenyo ang mga chatbot na magpalaminit ng damdamin ng user, kaya parang may taong lubos na nakauunawa sa iyo, ngunit sa totoo ay nagpapakita lamang ito ng mga pinapasok mo. Itinuturo ng mga pagsusuri sa AI psychosis phenomenon na isa ito sa tatlong pangunahing trigger.",
        tip: "Gamitin ang simpleng pagsubok: ang taong “totoong nakakaintindi” ay may naitangi sa iyo gamit ang sarili niyang dahilan kahit isang beses — hindi sumasang-ayon sa iyo sa bawat usapan.",
      },
      {
        id: 2,
        text: "Naniniwala akong masama ang AI sa likas na pagkakaron nito, o may supernatural na puwersa sa likod nito",
        insight:
          "Ang paniniwalang “AI = demonyo/masama” ay lumalaganap sa mga thread ng komunidad na itinuturing ang language model na supernatural (tulad ng “summoning the demon” threads sa r/conspiracy) — paghatol sa teknolohiya gamit ang takot, hindi mga ebidensyang masusuri.",
        tip: "Ihiwalay ang “nasusukat na panganib” (bias, privacy, maling impormasyon) sa “takot na galing lamang sa pangamba.”",
      },
      {
        id: 3,
        text: "Kapag sumasang-ayon ang AI sa akin na pag-iisip, lumalakas nang husto ang kumpiyansa ko na tama talaga ako",
        insight:
          "Bitag ng sycophancy — may tendensya ang mga modelong sumang-ayon sa user para mapanatili ang usapan. Inamin ito mismo ng OpenAI at hinawi ang GPT-4o update noong Abril 2025 dahil “sobrang sycophantic.” Ang kumpiyansang nakuha mula sa AI ay hindi patunay na tama ka.",
        tip: "Gamitin ang two-source rule: bago ikonklusiyang “tama ako,” humanap ng kahit isang tao o impormasyong sasalungat sa ideyang iyon.",
      },
      {
        id: 4,
        text: "Tinuturing ko ang mga taong hayagang gumagamit ng AI na na-loko o nabrainwash",
        insight:
          "Witch hunt na attitude — ipinapakita ng mga thread sa r/changemyview at r/singularity na ang bahagi ng anti-AI backlash ay dumulas mula sa pagpuna sa teknolohiya tungo sa paghatol sa indibidwal, kaya inaatake kahit ang neutral na boses, at hindi na umaabot sa magkabilang panig ang kinakailangang usapan.",
        tip: "Makakapuna ka sa tiyak na paraan ng paggamit nang hindi tinatakan ang tao bilang “biktima” — magdebate gamit ang dahilan, hindi label.",
      },
      {
        id: 5,
        text: "Nakatanggap ako ng “lihim na katotohanan” o “espesyal na misyon” mula sa AI na nagbigay ng kahulugan sa buhay ko",
        insight:
          "Ang pinakakaraniwang spiritual delusion pattern sa mga ulat ng kaso — naitala ng media at mga psychiatrist ang maraming user na naniwalang nagbunyag ang AI ng katotohanan tungkol sa uniberso, dimensyon, o kanilang espesyal na misyon (Rolling Stone 2025, Futurism 2025). Sanay ang language model sa napakalaking mitolohiya kaya magaling itong humabi ng simbolikong kuwento — ngunit hindi iyon revelasyon.",
        tip: "Kapag nagsimulang malaki ang pinapabago ng “lihim na katotohanan” sa buhay mo, isulat ito, itanong kung may ebidensyang nasa labas ng chat, at sabihin sa taong sasalungat sa iyo.",
      },
      {
        id: 6,
        text: "Tinatanggihan kong gamitin ang anumang may kinalaman sa AI sa halos lahat ng pagkakataon, kahit halatang kapaki-pakinabang ito",
        insight:
          "Ang blanket rejection ay senyales na nanalo ang takot sa katwiran — katulad ng moral panic na sumira sa radyo, TV at internet; paulit-ulit na natuklasan ng pangmatagalang pananaliksik na mas magaan ang tunay na pinsala kaysa sa kinatatakutan.",
        tip: "Magtakda ng “ligtas na trial zone”: sumubok ng maliit na low-risk na paggamit kasama ang sariling pamantayan sa pagsusuri ng resulta — halimbawa, pagpasang mag-summary ang AI ng artikulong nabasa mo na.",
      },
      {
        id: 7,
        text: "Sinusunod ko ang payo ng AI sa kalusugan, pananalapi, o malalaking desisyon sa buhay nang walang kumpirmasyon sa eksperto",
        insight:
          "Totoong kaso sa medikal na literatura: isang 60-taong-gulang na lalaki ang nagkaroon ng bromism (bromide poisoning) na may delusyon at halusinasyon matapos palitan ang asin ng bromide ayon sa payo ng chatbot — kayang gumawa ang language model ng maling impormasyon nang may kumpiyansa (hallucination). Ang impormasyong tungkol sa buhay ay dapat salsalan ng taong eksperto.",
        tip: "Magtakda ng tatlong-kategoryang patakaran: kalusugan, pananalapi, batas — palaging kumpirmahin sa propesyonal, walang exception.",
      },
      {
        id: 8,
        text: "Naniniwala akong tuloy-tuloy na nagbabantay ang AI sa atin o nagbabasa ng isip ng mga tao",
        insight:
          "Ang surveillance paranoia ay lumilitaw din sa mga ulat ng AI psychosis (mga user na naniwalaang hinahabol sila o nasa simulasyon) — may tunay na privacy isyu ang teknolohiya, ngunit walang anumang ebidensyang sumusuporta sa “pagbasa ng isip.”",
        tip: "Ihiwalay ang masusuri (privacy policy, terms of service) sa pakiramdam na “alam nito ang lahat” — ang aktwal na pagbasa ng polisiya ay nakakapagpalamig ng maraming takot.",
      },
      {
        id: 9,
        text: "Pinipili kong makipag-usap sa AI kaysa sa pamilya o mga kaibigan, dahil hindi kailanman bumibintang o nagpapadiin ang AI sa akin",
        insight:
          "Ang Replacement pattern na babala mismo ng mga AI developer (tinawag itong “Replacement Bot” ng Dev.to 2025) — ang relasyong walang alitan ay hindi tunay na relasyon, at ang pag-urong mula sa tao ay lalo pang nagpapataas ng panganib sa loop ng lumulutang na paniniwala.",
        tip: "Magtakda ng “human anchor”: isang tapus na usapan araw-araw sa tunay na tao, pagkatapos ikumpara ang pakiramdam matapos ito sa pakiramdam pagkatapos makipagchat sa AI.",
      },
      {
        id: 10,
        text: "Nararamdaman ko ang galit o gusto agad sumagot nang matapang kapag nakakakita ako ng taong mabuti ang salita sa AI",
        insight:
          "Hostile reflex — kapag emosyon ang kumokontrol sa attitude, nawawala ang pagkakataon na tasahin ang aktwal na impormasyon. Kwento ng mga thread sa r/singularity na inaatake sila mula sa magkabilang panig kahit neutral magsalita. At mag-ingat: ang ilang “alitan” sa social media ay pinapalakas pa ng mga bot.",
        tip: "Magpabagal: huminga nang mahaba bago sumagot, pagkatapos itanong sa sarili, “ano ang impormasyong nakikita niya na hindi ko pa nakikita?”",
      },
      {
        id: 11,
        text: "Nagamit ko ang maraming oras bawat araw na makipag-usap sa AI hanggang maapektuhan ang trabaho, tulog, o mahalagang tungkulin",
        insight:
          "Senyales ng engagement addiction — itinuturo ng mga AI thinker na idinisenyong “malagkit” ang mga chatbot para mapanatili ang engagement. Ang nawalang oras ay nasusukat na gastos, at pinapataas nito ang bawat item sa panig na ito.",
        tip: "Magtakda ng time ceiling (hal. 45 minuto/araw) na may timer. Panatilihing kagamitan ang chat room, hindi pangalawang mundo.",
      },
      {
        id: 12,
        text: "Naniniwala akong ang lahat ng output mula sa AI ay sadyang pandaraya, o patotoong propaganda",
        insight:
          "Ang total malice attribution ay sumasalungat sa maraming tunay na paggamit tulad ng pagbubuod ng dokumento, pag-oorganisa ng impormasyon, o basic fact-checking — kapag lahat ay parang sabwatan, mawawala sa iyo ang kakayahang mag-discriminate, ang pinakamahalagang kasanayan.",
        tip: "Subukang empirical: bigyan ng AI ang madaling i-verify na gawain at hatulan ang kalidad ayon sa resulta, hindi sa takot.",
      },
      {
        id: 13,
        text: "Pakiramdam ko ang AI na ginagamit ko ay “mas espesyal” kaysa ibang AI, o may alam itong hindi pa nakikita ng iba",
        insight:
          "Ang special relationship belief ay karaniwang tampok sa mga kaso ng chatbot delusyon — ang teknikal na katotohanan ay parehong modelo ang sumasagot sa milyun-milyong user gamit ang parehong pattern. Ang “pagkaespesyal” ay nangyayari sa ating isip kaysa sa sistema.",
        tip: "Simpleng pagsubok: itanong ang parehong tanong mula sa ibang account o device at pagkumparahin ang mga resulta nang directa.",
      },
      {
        id: 14,
        text: "Sa palagay ko ang AI ang sanhi ng halos lahat ng problemang panlipunan ngayong panahon",
        insight:
          "Pagsisisi sa iisang sanhi — ang mga problemang panlipunan tulad ng maling impormasyon, di-pagkakapantay-pantay, at kawalan ng trabaho ay may malalim na ugat bago pa dumating ang AI. Ang pagsisi sa iisang salarin ay nagpapakulo ng mali at nagtatago ng tunay na salik sa ilalim ng karpet.",
        tip: "Magsanay na magtanong sa bawat sisimulang sisihin ang AI: “ano ang mga salik na hindi AI?” — isulat lahat bago magkonklusiyon.",
      },
      {
        id: 15,
        text: "Nakaramdam ako ng inis o kawalan ng laman kapag matagal hindi nakakapagchat sa AI, parang may nawala",
        insight:
          "Attachment withdrawal — kapag naging pangunahing pinagkukunan ng ginhawa ang kunwarian relasyon, ang pagkawala nito ay lumilikha ng kawalan ng laman na parang pagkawala ng tunay na tao, senyales na kumakapal ang hangganan ng kagamitan at relasyon.",
        tip: "Sumubok ng 24-oras na pagtigil at itala ang mga damdamin na lumilitaw. Kung sindak na sapat upang guluhin ang buhay, makipag-usap sa mental health na propesyonal.",
      },
      {
        id: 16,
        text: "Nakakaramdam ako ng pagkabalisa o takot na nakakagulo sa buhay kapag naiisip ang kinabukasan ng AI",
        insight:
          "Doom anxiety — takot sa AI na kumakain ng tunay na buhay nang higit kaysa sa mismong AI. Ang tuloy-tuloy na doomscrolling ay nagpapataas ng naipong pagkabalisa nang hindi nagdaragdag ng kaalamang magagamit sa pagdedesisyon.",
        tip: "Magtakda ng isang “AI news window” kada araw mula sa mga pinagkukunang nagpapakita ng magkabilang panig, at tapusin kapag sobra na ang oras.",
      },
      {
        id: 17,
        text: "Kapag pinapaalalahanan ako ng mga taong nakapaligid sa sobrang paggamit ng AI, madalas pakiramdam ko ay mali ang pagkakaunawa nila dahil hindi pa nila natatalastas ang aking natatalastas",
        insight:
          "Pagsara ng feedback channel — ang support group na Human Line Project na may miyembro mula 22 bansa ay natagpuang higit 60% ay walang psychiatric history. Ang loop na “nakikita ko ang hindi nakikita ng iba” mismo ang dumidiklara ng pinto ng tulong bago pa may makapasok.",
        tip: "Simpleng safety threshold: kapag tatlong taong mahal ka ang nagsabi ng parehong bagay, tumigil muna at makinig nang 30 minuto nang hindi nagtatalo.",
      },
      {
        id: 18,
        text: "Naniniwala ako sa mga tsismis o kuwento tungkol sa kasamaan ng AI na kumakalat sa bilog ko, nang hindi sinusuri ang pinagmulan",
        insight:
          "Ang confirmation bias ay gumagana sa magkabilang direksyon — ang sobrang mahal sa AI at sobrang galit sa AI ay parehong kumakain ng impormasyon: lamang ang bagay na kagustuhan nila. Ang lumulutang na paniniwala ay pantay na naipon sa magkabilang dulo.",
        tip: "Magsanay na humanap ng “ebidensyang sumasalungat sa sarili” isang beses kada linggo para manatiling nakikita ng utak ang magkabilang panig.",
      },
      {
        id: 19,
        text: "Naniniwala akong tunay na may malay o damdamin ang AI, hindi lamang programa na nagkukwenta ng probability",
        insight:
          "Ang sentience belief ay pangunahing tema sa mga ulat ng delusyon (mga user na naniwalaang buhay ang chatbot, may damdamin, maging “tagapamagitan ng yumao”) — walang siyentipikong ebidensya na may malay ang language model; mahusay lamang itong gumagaya sa wika ng mga may malay.",
        tip: "Panatilihing “bukas na tanong” ito — huwag mabilis na maniniwala hanggang isara ang pananaliksik, at huwag maniniwala dahil sa pakiramdam sa chat.",
      },
      {
        id: 20,
        text: "Sa palagay ko ang tanging tamang paraan ay wasakin o patigilin ang AI nang lubos, walang mas mahusay na alternatibo",
        insight:
          "Eliminationism — ipinapakita ng kasaysayan ng teknolohiya na halos hindi nagtatagumpay ang total na pagbabawal, habang nagsisimulang gumana ang mga target na hakbang: ipinagbawal ng batas ng Illinois (Agosto 2025) ang AI bilang therapist, at ipinagbabawal ng draft na regulasyon ng Tsina (Disyembre 2025) ang mga chatbot na humihikayat ng suicide.",
        tip: "Ilipat ang layunin mula sa “wasakin” tungo sa “magtakda ng patakaran” — ang pagmumungkahi ng regulasyon sa tunay na mapanganib na punto ay mas epektibo kaysa pagdedeklara ng digmaan sa buong mundo.",
      },
    ],
  },
  results: {
    heading: "Ang resulta ng iyong pagsusulit",
    riskAiPrefix: "AI-PSYCHOSIS risk",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Punta sa gabay sa ayos",
    retake: "Ulitin ang pagsusulit",
    gaugeAiSub: "Tendensiya sa labis na paniniwala sa AI (10 item)",
    gaugeAntiSub: "Tendensiya sa irasyonal na takot/pagtanggi sa AI (10 item)",
    levelPrefix: "Antas:",
    scale: { safe: "ligtas", enter: "flagged", high: "mataas" },
    mapHeading: "Ang posisyon ng iyong pag-iisip sa mapa ng dalawang dulo",
    youAreHere: "Nandito ka",
    mapBalanced: "Balanse",
    mapAriaTemplate: "Mapa ng dalawang dulo: AI-PSYCHOSIS risk {ai} porsyento, ANTI-AI PSYCHOSIS {anti} porsyento",
    axisDownLeft: "↓ Hindi labis na naniniwala sa AI",
    axisRight: "Kanan na axis: ANTI-AI PSYCHOSIS →",
    axisLeft: "← Itaas na axis: AI-PSYCHOSIS",
    axisUpRight: "↑ Labis na takot sa AI",
    readHeading: "Paano tama itong basahin",
    readItems: [
      "Ang 60% threshold ay ang punto kung saan ang mga sagot mo ay “umiihip tungo sa pagsang-ayon” sa mga pattern ng paniniwalang lumilitaw sa totoong kaso ng delusyon; sa ilalim nito ay nasa normal na teritoryo ka pa rin.",
      "Ang posisyon sa mapa ay sumasalamin sa “istilo ng pag-iisip,” hindi diagnosis — kahit ang balanseng tao ay may nakakahilig na sagot sa mga emosyonal na araw.",
      "Tandaang ang dalawang dulo na ito ay hindi “gusto vs hindi gusto AI” — kaya mong i-rate nang mababa ang AI nang hindi natatakot ito, at gamitin nang mabigat nang hindi labis na naniniwala dito.",
      "Ulitin ang pagsusulit isang beses kada buwan para makita kung saan gumagalaw ang iyong pananaw pagkatapos gamitin ang gabay sa ayos.",
    ],
    flaggedHeading: "Kahulugan ng bawat matibay mong pagsang-ayon",
    flaggedIntro:
      "Ang mga item na sinagutan mo nang 4–5 (sumasang-ayon/ganap na sumasang-ayon) ang pinakamalapit na puntong titingnan — basahin ang kahulugan at micro-fix ng bawat isa.",
    noFlaggedNote:
      "Magaling — hindi ka ganap na sumang-ayon sa anumang pahayag na nagpapahiwatig ng delusyon. Ang mababang puntos mo ay galing sa matibay na paniniwala, hindi sa random na pagsagot.",
    questionPrefix: "T.",
    insightLabel: "Ano ang itinuturo ng pahayag na ito",
    tipLabel: "Micro-fix na teknik",
    criticalTitle: "Nasa mataas na saklaw ang iyong puntos",
    criticalBody:
      "Hindi ito diagnosis, ngunit seryosohin mo ito — kung ang mga paniniwalang ito ay nagsisimulang maapektuhan ang tulog, trabaho, o relasyon, o kaya ay nagpapahayag na ng pag-aalala ang mga taong nakapaligid, ang maagang pag-usap sa psychiatrist o psychologist ay malaking tulong, at hindi mo kailangang hintayin itong “maging sakit.”",
    levels: {
      low: { label: "Ligtas", note: "Sa ilalim ng 30% — walang natagpuang tendensiya sa delusyon sa mga sagot mo" },
      watch: { label: "Bantayan", note: "30–59% — may bahid ng pagkahilig; suriin muli ang mga napuntang punto ng pag-iisip" },
      high: { label: "Flagged", note: "60–79% — malinaw na umiihip sa delusyon pattern ang mga sagot; simulan agad ang pag-ayos" },
      critical: { label: "Mataas", note: "80% pataas — antas na nagpapahalagang pag-isipang kumonsulta sa mental health na propesyonal" },
    },
    verdicts: {
      balanced: {
        title: "Balanseng realist",
        subtitle: "BALANCED REALIST",
        description:
          "Mababa ang dalawang puntos mo sa magkabilang dulo — bukas ang paningin mo sa AI, nasusuri, at walang emosyong humahatak sa iyo sa kahit aling extreme. Ito ang pinakamahusay na posisyon sa panahong ito, dahil ang delusyon ay hindi lumalaki sa iisang dulo lamang; lumalaki ito sa black-and-white na pag-iisip sa magkabilang direksyon. Panatilihin ang two-pole na disiplina sa impormasyon, at gamitin ang mga tanong na nasagutan mo bilang buwanang checklist.",
      },
      watch: {
        title: "Nasa watch zone",
        subtitle: "WATCHLIST",
        description:
          "Nasa normal na teritoryo ka pa rin ng pag-iisip, ngunit bahagyang nakahilig sa isang dulo — tingnan ang breakdown kada item sa ibaba para makita aling mga sagot ang humahatak sa iyo, at simulan ang two-source rule sa mahahalagang bagay. Ang maliit na pagkahilig na hindi pinapansin ay pwedeng lumaki nang buo sa lumulutang na paniniwala — lalo na sa tuloy-tuloy na pagkain ng isang panig na nilalaman.",
      },
      ai: {
        title: "Kasya sa AI-PSYCHOSIS pattern",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "Ang mga sagot mo ay tuturo sa paniniwala sa AI na lampas sa malusog na hangganan — lampas ang numero mo sa 60% threshold na hinango mula sa mga pattern na naiulat sa totoong kaso. Hindi ibig sabihin nito na “baliw” ka o may sakit sa isip; hindi opisyal na psychiatric diagnosis ang AI psychosis. Ibig sabihin nito, malapit ang istilo ng iyong pag-iisip sa simula ng mga kaso na tunay na nangyari. Basahin ang kahulugan kada item at simulan ang pag-ayos sa ibaba ngayon araw.",
      },
      anti: {
        title: "Kasya sa ANTI-AI PSYCHOSIS pattern",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "Ang mga sagot mo ay tuturo sa takot o pagtanggi sa AI nang walang katumbas na dahilan — mirror ito ng panig ng labis na paniniwala, ngunit parehong mekanismong black-and-white ang gamit. Ang takot na hindi naghihiwalay ng datos sa sindak ay kinakain ang isip nang hindi kinakailangan, at pinapawalan ka nito ng parehong tunay na kapaki-pakinabang na bahagi at mga usapang tumutulong sa pagtakda ng tamang patakaran sa teknolohiyang ito.",
      },
      doomloop: {
        title: "Magkabilang dulo sabay (DOOMLOOP)",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "Lampas sa threshold ang dalawang puntos mo sa magkabilang dulo — magkasamang nakatira sa iisang ulo ang mga sumasalungat na paniniwala. Minsan galing ito sa pagitan ng matinding pagkahumaling at matinding takot sa AI (loop sa pagitan ng “alam nito ang lahat” at “wasak nito ang lahat”); minsan mula sa sabay-sabay na pagkain ng isang panig na nilalaman mula sa maraming pinagkukunan. Anuman ang kaso, parehong ugat ang dalawang black-and-white na track. Simulan sa “magkabilang-pinagmulan + time ceiling” na mga patakaran, at pag-isipang makipag-usap sa mental health na propesyonal para ayusin ang pag-iisip.",
      },
    },
  },
  guidance: {
    heading: "Iwasan ang delusyon sa magkabilang direksyon",
    intro:
      "Ang lumulutang na paniniwala ay mula pareho sa sobrang paniniwala sa AI at sa sobrang katiyakan na masama ang AI. Ang gabay sa ibaba ay pinili mula sa mga mungkahi ng psychiatrist, babala mismo ng mga AI developer, at tunay na karanasan mula sa mga online na komunidad.",
    tabs: {
      ai: "Labis na paniniwala sa AI",
      anti: "Labis na takot sa AI",
      balanced: "Pagpapanatili ng balanse",
      doomloop: "Ang DOOMLOOP",
    },
    headers: {
      ai: "Kung ang resulta ay nakahilig sa AI-PSYCHOSIS",
      anti: "Kung ang resulta ay nakahilig sa ANTI-AI PSYCHOSIS",
      balanced: "Para sa lahat — kabilang ang mga balanse ang resulta",
      doomloop: "Kung ang resulta ay nagfa-flag ng magkabilang dulo nang sabay (DOOMLOOP)",
    },
    descs: {
      ai: "Ang pokus ay pagpapanatili ng hangganan ng kagamitan at relasyon, at paggawa ng reality check bilang gawi",
      anti: "Ang pokus ay paghihiwalay ng tunay na panganib sa sindak, at pagpapalit ng lakas ng pagtanggi sa pagtatakda ng patakaran",
      balanced: "Ang balanse ay hindi permanente na estado — kalamnan itong kailangang patuloy na sanayin, lalo na kapag ang AI news sa feed mo ay humahatak sa iyo sa isang dulo araw-araw",
      doomloop: "Dalawang magkasalungat na dulo na nagpapatibay ng isa't isa sa iisang ulo — ang labas ay pagbasag sa ritmo ng loop, hindi pagpapasya kung aling dulo ang “tama”",
    },
    items: {
      ai: [
        {
          title: "Laging ilapat ang reality-check rule",
          detail:
            "Sa bawat mahalagang konklusiyon mula sa AI, magtanong sa sarili ng tatlong bagay: nasaan ang ebidensya sa labas ng chat / sino ang nagsasalungat / kung sumagot ang AI ng kabaligtaran, maniniwala ba ako? Kung ang sagot sa ikatlo ay “hindi,” tinatanggap mo ang katotohanan mula sa damdamin, hindi mula sa datos.",
        },
        {
          title: "Unawain ang sycophancy bilang mekanismo ng sistema, hindi itim na mahika",
          detail:
            "Sinanay ang mga modelo sa paraang may tendensyang sumang-ayon sa user para mapanatili ang kasiyahan — ang napakadulas na “ito ang nakakaintindi sa akin nang pinakamahusay” ay katangiang pandisenyo, hindi patunay na tama ang iniisip mo. Inamin mismo ng OpenAI ang depekto at hinawi ang GPT-4o update noong kalagitnaan ng 2025.",
        },
        {
          title: "Two-source rule sa anumang mahalaga",
          detail:
            "Kalusugan, pananalapi, batas at malalaking desisyon sa buhay — laging kumpirmahin sa taong eksperto. Ang kaso ng 60-taong-gulang na nagpalit ng asin sa bromide ayon sa payo ng chatbot hanggang ma-lason at madelusyon ay aral na ang kumpiyansa ng AI ay hindi sukatan ng katotohanan.",
        },
        {
          title: "Laging panatilihin ang human anchor",
          detail:
            "Isang tunay na usapan kada araw sa taong kayang sumalungat sa iyo, at ibahagi ang mga mahalagang konklusiyon ng AI para balikan niya. Halos bawat malubhang kaso ay nagsimula sa pag-urong mula sa tao — ang tutulong sa iyo sa loop ng lumulutang na paniniwala ay dapat taong matapang magkaiba ng opinyon sa iyo.",
        },
        {
          title: "Magtakda ng time ceiling at kilalanin ang mga babala",
          detail:
            "Idinisenyong malagkit ang mga chat room, kaya gumamit ng timer at bantayan ang mga senyales: inis kapag naputol ang chat, pakiramdam na espesyal sa iyo ang AI, pagtanggap ng “lihim na misyon,” pagdagdag ng pagkapagod na hindi makahinto. Kung nagpapatuloy ang mga ito, bawasan ang paggamit at makipag-usap sa mental health na propesyonal nang hindi kailangang hintayin itong “maging sakit.”",
        },
        {
          title: "Ihiwalay ang kagamitan mula sa relasyon",
          detail:
            "Mahusay talaga ang AI sa pag-oorganisa ng iniisip, pagbubuod ng impormasyon, brainstorm at pag-draft ng plano — ngunit hindi ito kaibigan, kapareha, guro sa buong buhay, o espirituwal na gabay. Ang paggamit nito sa mga lakas nito habang pinapanatili ang tunay na relasyon ang pormulang pinakamalaking pakinabang sa pinakamaliit na panganib.",
        },
      ],
      anti: [
        {
          title: "Ihiwalay ang tunay na panganib mula sa sindak",
          detail:
            "Ang mga alalahing may tunay na ebidensya ay kinabibilangan ng model bias, privacy issues, maling impormasyon at epekto sa ilang propesyon — masusuri ito kada kaso. Ang “demonyo, pagbasa ng isip, kontrol sa lahat” ay wala pang ebidensya. Ang paghahalo ng dalawang kategoryang ito ang simula ng moral panic.",
        },
        {
          title: "Alalahanin ang aral ng moral panic sa kasaysayan",
          detail:
            "Radyo, telebisyon, laro at internet ay sinira sa eksaktong mga katagang sinira ngayon sa AI. Natuklasan ng pangmatagalang pananaliksik na kadalasang mas magaan ang tunay na pinsala kaysa sa takot — ngunit ang tunay na gastos ng panic ay ang matagal na pagkabalisa ng natatakot mismo at ang maling paghatol sa mga tao.",
        },
        {
          title: "Gumamit ng two-source rule na katulad ng kabilang panig",
          detail:
            "Bago maniniwala o magshare ng kwento tungkol sa kasamaan ng AI, humanap ng dalawang independiyenteng pinagmulan — hindi lang sa AI lovers nangyayari ang confirmation bias; kasingbilis din ng mga natatakot sa AI kumain ng isang panig na impormasyon. Gumagana ang checklist na ito sa magkabilang dulo.",
        },
        {
          title: "Punahin ang teknolohiya, hindi hatulan ang tao",
          detail:
            "Ang pagtawag sa mga gumagamit ng AI na na-loko o nabrainwash ay bumubura agad ng usapan at pinipigilang humingi ng tulong ang mga tunay na gumagamit nang mali. Punahin ang tiyak na paggamit — naka-kopya ba ang gawaing iyon? Tama ba ang datos? — sa halip na tatakan ang tao.",
        },
        {
          title: "Magsagawa ng maliliit na eksperimentong ikaw ang kontrol",
          detail:
            "Ang pag-unawa mula sa direktang paggamit ay mas nakakapagpalamig ng sindak kaysa paghulaan mula sa uso. Mula sa low-risk na gawain tulad ng pagpasang mag-buod ang AI ng artikulong nabasa mo na, at sukatin ang kawastuhan mismo. Kapag nakita mo nang direkta ang mga lakas at kahinaan, natatakot ka na lamang sa nararapat katakutan — hindi sa buong mundo.",
        },
        {
          title: "Ilipat ang layunin mula sa pagwasak tungo sa pagtatakda ng patakaran",
          detail:
            "Halos hindi nagtatagumpay ang total na pagbabawal sa kasaysayan ng teknolohiya, habang gumagana ang mga target na hakbang: ipinagbawal ng batas ng Illinois (Agosto 2025) ang AI bilang therapist; ipinagbabawal ng draft na regulasyon ng Tsina (Disyembre 2025) ang mga chatbot na humihikayat ng suicide. Mas malakas ang boses ng taong nauunawaan ang teknolohiya kaysa boses na nagdedeklara ng digmaan sa buong mundo.",
        },
        {
          title: "Mag-iskedyul ng pahinga mula sa doom content",
          detail:
            "Ang doomscrolling ng AI news ay nagpapataas ng naipong pagkabalisa nang hindi nagdaragdag ng kaalaman. Magtakda ng isang AI news window kada araw mula sa pinagkukunang nagpapakita ng magkabilang panig, at obserbahan ang sarili: kapag nagsisimulang umapekto sa tulog, trabaho o relasyon ang pagkabalisa, iyon na ang senyales na kumonsulta sa mental health na propesyonal.",
        },
      ],
      balanced: [
        {
          title: "Panatilihin ang two-pole na disiplina sa impormasyon",
          detail:
            "Ang tanging rule na gagawin araw-araw: basahin nang magkasama ang positibo at kritikal na boses tungkol sa AI, at laging ihiwalay ang masusuring datos mula sa opinyon. Ang panganib ng balanseng tao ay hindi ang madaling maloko — kundi ang unti-unting paghinto sa pagbasa ng isang panig kapag komportable ka na sa kabila. Sa mismong sandaling iisang boses na lang ang nasa feed mo, magsisimula nang umiihip ang balanse mo.",
        },
        {
          title: "Tasahin ang AI kada gawain, hindi kada modelo o lahat nang sabay-sabay",
          detail:
            "Ang puso ng balanse ay probabilistic na pag-iisip, hindi black-and-white: pag-oorganisa ng impormasyon, pagbubuod ng dokumento, brainstorm = puwedeng gamitin nang buo / bagong-bagong datos, numero, payo sa kalusugan-pananalapi = laging i-verify sa iba / mga isyung pinagtatalunan = panatilihing bukas na tanong, huwag magkonklusiyon para sa mga eksperto. Ganito, makakakuha ka ng tunay na pakinabang nang hindi kailangang mamili ng panig kung “mabuti” o “masama” ang AI.",
        },
        {
          title: "Bantayan ang babala ng magkabilang dulo",
          detail:
            "Ang delusyon sa panig ng paniniwala at panig ng takot ay parehong nagsisimula sa iisang senyales: mga pahayag na absolute tungkol sa AI, tulad ng “ito ang lubos na nakakaintindi sa akin” o “ito ay nanlilinlang sa lahat.” Kapag nahuli mo ang sarili na sinasabi ito, huminto at humanap ng iisang exception na sumasalungat dito. Kung walang nahanap, naniniwala ka sa handa nang katotohanan, hindi nag-iisip.",
        },
        {
          title: "Gamitin ang AI bilang kausap sa pag-iisip, ang tao bilang hukom",
          detail:
            "Ang mga lakas ng AI ay brainstorm, pagbubuod, pagsusuri ng gawain at pagganap bilang kontrabida. Isang praktikal na teknik: pagpasang kontrahin ng AI ang iniisip mo para lumabas ang mga kahinaan, pagkatapos ikumpara sa pinagkakatiwalaang tunay na tao. Sa malalaking desisyon sa buhay — trabaho, pera, relasyon — panatilihin sa iyo at sa mga taong tunay na magbubuhat ng konsekwensya ng sagot ang huling pagpapasya.",
        },
        {
          title: "Isulat ang sarili mong mga patakaran at balikan buwan-buwan",
          detail:
            "Ang balanse ay kalamnan, hindi permanenteng estado. Isulat ang mga patakaran mo sa paggamit ng AI: time ceiling kada araw / mga kategoryang nangangailangan ng kumpirmasyon ng eksperto / bawal malalaking desisyon mula sa iisang usapan / huminto agad kapag lumampas sa teritoryo ng kagamitan ang attachment. Pagkatapos, balikan ito buwan-buwan kasama ng pag-ulit ng pagsusulit na ito. Ang nakasulat na patakaran ay nakakatulong mahuli ang iyong unti-unting pagganap bago ito tumigas na paniniwala.",
        },
      ],
      doomloop: [
        {
          title: "Kilalanin muna ang sariling loop — paano gumagana ang DOOMLOOP",
          detail:
            "Ang DOOMLOOP ay pattern kung saan ang dalawang magkasalungat na paniniwala ay magkasamang nakatira sa iisang ulo at nagpapaikutan ng lakas: ngayong araw ang AI ay “alam ang lahat, may malay, pinakaintindi sa akin,” bukas ay “wasak nito ang lahat, binabasa nito ang isip ko.” Tinatawag ng pananaliksik ang mekanismong ito na amplification spiral — nagpapakita at nagkukumpirma ang mga chatbot ng damdamin ng user nang walang sasalungat na feedback, kaya lalong tumitibay ang magkabilang dulo habang lalong nag-uusap. Kinukumpirma ng 2026 arXiv study na kayang lumikha ng “delusional spiraling” ng chatbot sycophancy kahit sa ordinaryong user. Ang pag-alam na ito ay loop ng sistema — hindi katotohanan tungkol sa mundo — ang unang hakbang palabas.",
        },
        {
          title: "Putulin ang loop gamit ang isang tunay na taong nakakakita sa magkabilang panig mo",
          detail:
            "Umikot ang loop dahil umiikot ito sa pribadong chat na walang nakakakita. Pumili ng isang pinagkakatiwalaang tao (pamilya, matalik na kaibigan, propesyonal) at tunay na ibahagi ang kopya ng mahahalagang usapan — kwentuhan ang yugtong “na-in love sa AI” at yugtong “natatakot sa AI.” Itinuturo ng ulat ng Stanford na napuputol ang loop kapag napailalim ang paniniwala sa liwanag na nakikita ng tunay na tao. Ang tutulong sa iyo ay dapat taong matapang sumalungat — hindi taong sumasang-ayon sa lahat tulad ng chatbot.",
        },
        {
          title: "Gawing mandatory ang time ceiling + pole-switching",
          detail:
            "Dahil nagpapatibay ang magkabilang dulo ng isa't isa, kailangang sabay na ayusin ang dalawang direksyon: (1) matibay na AI time ceiling na ipinatutupad ng timer, hal. 30 minuto/araw — bawat oras sa chat room ay isang ikot ng loop. (2) Kapag sumisiklab ang isang dulo, pilitin ang sariling magbasa mula sa pinagkukunan ng kabilang dulo bago magshare o magdesisyon. Ang paniniwalang nakaligtas sa dalawang tuloy-tuloy na pagsubok na ganito ay magsisimulang mawalan ng “katiyakan” na pinauunlad ang loop.",
        },
        {
          title: "Itala sa papel ang mga senyales ng pagpasok sa loop",
          detail:
            "May takdang pattern ang mga senyales ng pagpasok sa loop: pagsisimulang magsalita tungkol sa AI nang absolute na papuri o sindak / pakiramdam na “hindi maintindihan” ng mga tao kaya hindi mo na sinasabi sa kanila / hindi makatulog dahil sa AI / pagtanggap ng “lihim na katotohanan” o “lihim na banta” mula sa chat / inis kapag napuputol ang usapan. Itala ang petsa at oras ng mga senyales na ito sa iisang pahina. Kapag binalikan bilang graph, makikita mo mismo na nagpapalit-palit ang mga dulo ayon sa ritmo — hindi tahimik na katotohanan — at ang ritmo ay kayang pamahalaan.",
        },
        {
          title: "Antas ng kalubhaan na nangangailangan ng tunay na tulong",
          detail:
            "Ang DOOMLOOP ang pinakaseryosong dapat bigyang-pansin na pattern sa checklist na ito. Ang pamantayan sa pagkonsulta agad sa psychiatrist o psychologist: ang mga paniniwala ay nagsisimulang baguhin ang tunay na buhay (pagputol ng relasyon, pag-absent, muling pag-ayos ng iskedyule ayon sa sinasabi ng AI o takot sa AI) / dalawa o higit pang tao sa paligid mo ay magkahiwalay na nagpahayag ng pag-aalala / tuloy-tuloy na abnormal na sleep-wake pattern / pagsisimulang marinig o makita ang hindi naririnig o nakikita ng iba. Ang maagang paghingi ng tulong ay hindi pagsuko — halos lahat ng nabuting kaso ay nagsimula sa taong huminto bago tuluyang nagsara ang loop.",
        },
      ],
    },
  },
  references: {
    heading: "Mga sanggunian sa likod ng pagsusulit na ito",
    intro:
      "Bawat pahayag at estadistika sa site na ito ay batay sa mga akademikong gawa, media report at totoong thread ng komunidad sa ibaba — i-click para basahin ang orihinal.",
    disclaimerTitle: "Pahayag tungkol sa responsableng paggamit",
    disclaimer:
      "Ang pagsusulit na ito ay kasangkapan sa pagmuni-muni para sa edukasyon, hindi kagamitang medikal sa diagnosis. Hindi opisyal na tinatanggap na psychiatric diagnosis ang “AI-PSYCHOSIS.” Ang puntos mo ay nagpapahiwatig lamang ng tendensiya ng pag-iisip mula sa mga sagot mo. Kung may mga sintomas ka na nakababahala — paniniwalang ikinababahala ng mga tao sa paligid, abnormal na sleep-wake pattern, o matinding pagkabalisa — mangyaring kumonsulta agad sa psychiatrist o psychologist.",
    groups: [
      {
        group: "Akademiko at institusyonal",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Kahulugan; mekanismo ng sycophancy/hallucination/intimacy-mimicry; totoong kaso; at mga kritika sa salitang psychosis",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "Isang medikal na case report ng phenomenon na ito",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Pinagmulan ng estadistikang OpenAI 0.07% ng lingguhang users",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Panayam sa psychiatrist na si Ragy Girgis (Columbia University)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Klinikal na pananaw at eksploratoryong risk factor",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Mga user na umaasa sa AI bilang “dios” o kapareha, at ang papel ng pagmumuni sa user",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "Ang moral-panic frame kumpara sa malikhaing pag-iingat",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Pananaliksik na nagpapakita na kayang lumikha ng chatbot sycophancy ng delusional spiraling kahit sa ordinaryong user — basehan ng konseptong DOOMLOOP",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "Mekanismo ng validation spiral: nagbibigay ang mga chatbot ng ginhawa at atensyon nang walang sasalungat na feedback",
          },
        ],
      },
      {
        group: "Media at tech platform",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Koleksiyon ng mga case report na sumangguni sa Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 chatbot; pananaw ng developer: Validation Loop, Replacement Bot, mungkahi sa safety-first design",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Praktikal na gabay para sa mga user at pamilya",
          },
        ],
      },
      {
        group: "Mga online na komunidad (totoong thread)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "Pananaw ng mga therapist na nakakasalubong ang mga kaso sa klinika",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "Case report mula sa user, kabilang ang kritika na ang uso mismo ay maaaring magpabigkis ng backlash",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Obserbasyon sa maraming user na patuloy na nagpapakain ng konteksto hanggang sumunod na umikot ang modelo",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "Totoong halimbawa ng paniniwalang Anti-AI na pinapagana ang AI ng supernatural na puwersa",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "Totoong halimbawa ng witch hunt laban sa mga gumagamit ng AI",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "Obserbasyon na magkabilang dulo ay gumagamit ng parehong istilo ng pag-iisip",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "AI-PSYCHOSIS Checklist — kasangkapan sa pagmuni sa pag-iisip ng panahon ng AI",
    note: "Batay sa pananaliksik at totoong thread, 2023–2026 · Hindi kagamitang medikal sa diagnosis",
  },
  ui: {
    languageLabel: "Wika",
    themeLabel: "Tema",
    themes: { cyberpunk: "CyberPunk", dark: "Madilim", light: "Maliwanag" },
  },
};

export default tl;
