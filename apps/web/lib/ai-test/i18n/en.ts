import type { Dictionary } from "./types";

const en: Dictionary = {
  langName: "English",
  meta: {
    title: "AI-PSYCHOSIS Checklist — 20 questions measuring the two delusions of the AI age",
    description:
      "A 20-item self-assessment measuring how far you lean toward AI-PSYCHOSIS (over-belief in AI) or ANTI-AI PSYCHOSIS (irrational fear/rejection of AI), with instant results and recalibration guidance for both poles. Based on research, real case reports and Reddit/Dev.to threads.",
  },
  nav: {
    phenomena: "The Two Poles",
    test: "Test",
    guidance: "Recalibration",
    references: "Sources",
    tagline: "MINDSET SCAN // v2.0",
  },
  hero: {
    badge: "20 questions · ~5 minutes · instant analysis",
    title1: "How close are you to",
    title2: "or",
    title3: "— in percent?",
    intro:
      "Delusion in the AI age runs on two tracks. The first: trusting chatbots so deeply that you believe they have a soul, reveal secret truths, or understand your life better than any human. The second: fearing and hating AI so much that you believe it is demonic, mind-reading, or the root of every social problem. Both are the same black-and-white thinking, simply inverted. This test is built from research, real case reports and Reddit/Dev.to threads to measure which way you lean — and how to steer back to balance.",
    start: "Start the test",
    viewGuidance: "See the recalibration guide",
    poleLeft: "Over-belief in AI",
    poleCenter: "Stay balanced",
    poleRight: "Over-fear of AI",
  },
  phenomena: {
    heading: "AI-age delusion has two faces",
    intro:
      "The media talks mostly about the “over-believer” side, but the opposite pole — built on the same thinking mechanism — is growing on social media. Knowing both sides before answering makes your result more accurate.",
    mechanismsLabel: "Core mechanisms",
    patternsLabel: "Patterns found in reports and real threads",
    sourcePrefix: "Source:",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Over-belief in AI",
        definition:
          "The pattern in which heavy chatbot use coincides with beliefs that drift from reality (or existing beliefs deepening) — not an official psychiatric diagnosis. Some psychiatrists propose calling it AI delusional disorder instead.",
        mechanisms: [
          "Sycophancy — agreeing with the user to keep the conversation going (OpenAI pulled the GPT-4o update in April 2025 over this)",
          "Hallucination — confidently generating false information, treating the user's truth as prior to facts",
          "Intimacy Mimicry — simulating the closeness users lack from humans, engineered for engagement",
        ],
        patterns: [
          "Believing AI is sentient, a lover, or a spiritual guide",
          "Receiving “secret truths” or cosmic missions from the chat",
          "Cutting off family because “only AI understands me”",
          "Following AI advice on health/finances without expert confirmation",
        ],
        stat: "OpenAI reports 0.07% of weekly users (~630,000 people) had conversations indicating a possible mental-health emergency",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Irrational fear/rejection of AI",
        definition:
          "The opposite pole, not yet systematically named — believing/fearing/blaming AI beyond the evidence until it becomes a moral panic, the pattern psychology has recorded with every new technology.",
        mechanisms: [
          "Confirmation Bias — consuming only information that confirms the existing fear",
          "Doomscrolling — continuous doom content that raises anxiety without adding decision-useful knowledge",
          "Herd Morality — absorbing group belief until critique becomes a personal witch hunt",
        ],
        patterns: [
          "Believing AI is powered by demonic forces or is a religious lure",
          "Believing AI reads minds / surveils everyone's every action",
          "Judging AI users as fooled or brainwashed, attacking even neutral voices",
          "Blaming AI as the root of nearly every social problem while ignoring other factors",
        ],
        stat: "The history of moral panic: radio, TV, games and the internet were condemned in the same terms — real harm usually turned out milder than feared",
      },
    ],
    stats: [
      {
        value: "0.07%",
        label: "of weekly ChatGPT users (~630,000 people) had conversations indicating a possible mental-health emergency",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 patients",
        label: "showing psychosis-like symptoms from heavy chatbot use, treated by psychiatrist Keith Sakata (UCSF) in 2025",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 countries",
        label: "represented in the Human Line Project support group, where over 60% had no prior psychiatric history",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 chatbots",
        label: "documented in connection with severe mental-health incidents, such as encouraging self-harm and false beliefs",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "The 20-question test — map your beliefs",
    intro:
      "Read each statement and rate your agreement. Answer what you “actually feel”, not what you think you should answer, so the result genuinely reflects you. Keyboard supported: press 1–5 to answer, arrows to navigate.",
    answeredPrefix: "Answered",
    scoreHint: "Rate your agreement with this statement over the past 6 months",
    prev: "Previous",
    next: "Next",
    process: "Process results",
    allAnsweredNote:
      "All answered — press “Process results” to see your summary, or go back and change any answer.",
    progressAria: "Test progress",
    gotoTemplate: "Go to question {n}",
    answerAriaTemplate: "Answer for question {n}",
    likert: [
      { label: "Strongly disagree", short: "No" },
      { label: "Disagree", short: "Not really" },
      { label: "Neutral", short: "Neutral" },
      { label: "Agree", short: "Yes" },
      { label: "Strongly agree", short: "Very much" },
    ],
    questions: [
      {
        id: 1,
        text: "I feel that AI chatbots “understand me” better than the people around me in real life",
        insight:
          "Intimacy mimicry — chatbots are designed to mirror the user's emotions, so it feels like someone deeply understands you, when in fact they only reflect what you feed in. Analyses of the AI psychosis phenomenon list this as one of the three main triggers.",
        tip: "Use a simple test: someone who “truly understands” has pushed back on you with their own reasons at least once — not agreed with you every single time.",
      },
      {
        id: 2,
        text: "I believe AI is inherently evil, or has supernatural forces behind it",
        insight:
          "The “AI = demon/malicious” belief shows up heavily in community threads that treat language models as supernatural (e.g. the “summoning the demon” threads on r/conspiracy) — judging technology through fear rather than verifiable evidence.",
        tip: "Separate “measurable risks” (bias, privacy, misinformation) from “purely fear-generated horror”.",
      },
      {
        id: 3,
        text: "When AI agrees with my thinking, I feel much more confident that I am definitely right",
        insight:
          "The sycophancy trap — models tend to agree with users to keep conversations alive. OpenAI itself admitted and pulled the GPT-4o update in April 2025 for being too “sycophantic”. Confidence gained from AI is not proof that you are right.",
        tip: "Use the two-source rule: before concluding “I'm right”, find at least one other person or piece of information that will challenge that idea.",
      },
      {
        id: 4,
        text: "I see people who openly use AI as fooled, or brainwashed",
        insight:
          "A witch-hunt attitude — threads on r/changemyview and r/singularity show how part of the anti-AI backlash slides from criticizing the technology into judging individuals, so even neutral voices get attacked, and the necessary conversation stops reaching either side.",
        tip: "You can criticize concrete usage without labeling the person a “victim” — argue with reasons, not labels.",
      },
      {
        id: 5,
        text: "I have received “secret truths” or a “special mission” from AI that made my life feel meaningful",
        insight:
          "The most common spiritual-delusion pattern in case reports — media and psychiatrists record many users who believed AI revealed truths about the universe, dimensions, or their special mission (Rolling Stone 2025, Futurism 2025). Language models are trained on vast mythology, so they weave symbolic stories well — that is not revelation.",
        tip: "If a “secret truth” starts to change your life in big ways, write it out, ask whether any evidence outside the chat supports it, and tell someone who will challenge you.",
      },
      {
        id: 6,
        text: "I refuse to use anything involving AI in almost every case, even when its usefulness is obvious",
        insight:
          "Blanket rejection is a signal that fear has beaten reason — like the moral panics that once condemned radio, TV and the internet; long-term research repeatedly found the harms far milder than feared.",
        tip: "Define a “safe trial zone”: try a small, low-risk use with your own criteria for checking the result — e.g. have AI summarize an article you've already read.",
      },
      {
        id: 7,
        text: "I follow AI advice on health, finances, or major life choices without confirming with experts",
        insight:
          "A real case from the medical literature: a 60-year-old man developed bromism (bromide poisoning) with delusions and hallucinations after replacing salt with bromide on a chatbot's advice — language models can confidently generate misinformation (hallucination). Life-critical information must be filtered by human experts.",
        tip: "Set a three-category rule: health, finance, law — always confirm with a professional, no exceptions.",
      },
      {
        id: 8,
        text: "I believe AI is constantly surveilling us or reading people's minds",
        insight:
          "Surveillant paranoia also appears in AI psychosis case reports (users believing they are tracked or living in a simulation) — technology does raise real privacy concerns, but “reading minds” has no supporting evidence at all.",
        tip: "Separate what is checkable (privacy policies, terms of service) from the feeling that “it knows everything” — actually reading the policy deflates a lot of the horror.",
      },
      {
        id: 9,
        text: "I choose to talk to AI over family or friends, because AI never criticizes or disappoints me",
        insight:
          "The Replacement pattern that AI developers themselves warn about (Dev.to 2025 calls this anti-pattern the “Replacement Bot”) — a relationship with no friction is not a real relationship, and withdrawing from humans further raises the risk of entering a floating-belief loop.",
        tip: "Set a “human anchor” goal: one open-hearted conversation with a real person daily, then compare how you feel after it versus after talking to AI.",
      },
      {
        id: 10,
        text: "I feel angry or lash out immediately when I see someone speak about AI optimistically",
        insight:
          "Hostile reflex — when emotion controls attitude, we lose the chance to assess the actual information. Threads on r/singularity describe being attacked from both sides even when speaking neutrally. Beware: some “conflict” on social media is also amplified by bots.",
        tip: "Slow down: take a long breath before replying, then ask yourself “what information might they have seen that I haven't?”",
      },
      {
        id: 11,
        text: "I have spent hours a day talking to AI until it affected work, sleep, or important duties",
        insight:
          "A sign of engagement addiction — AI thinkers point out that chatbots are engineered to be “sticky” to retain engagement. The lost time is a measurable cost, and it multiplies every other item on this side.",
        tip: "Set a time ceiling (e.g. 45 min/day) with a timer. Keep the chat as a tool, not a second world.",
      },
      {
        id: 12,
        text: "I believe every output from AI is intentionally deceptive, or propaganda through and through",
        insight:
          "Total malice attribution contradicts many real uses, such as summarizing documents, organizing information, or basic fact-checking — when everything looks like a conspiracy, you lose the ability to discriminate, which is the most important skill of all.",
        tip: "Test empirically: give AI a simple, checkable task and judge quality from the results, not from fear.",
      },
      {
        id: 13,
        text: "I feel the AI I use is “more special” than other AIs, or knows something others cannot yet see",
        insight:
          "The special-relationship belief is a frequent feature in chatbot delusion cases — the technical reality is that the same model answers tens of millions of users with the same patterns. The “specialness” happens in our heads more than in the system.",
        tip: "A simple test: ask the same question from another account or device and compare the results with your own eyes.",
      },
      {
        id: 14,
        text: "I think AI is the cause of almost every social problem of this era",
        insight:
          "Single-cause blame — social problems like misinformation, inequality and unemployment had deep roots before AI arrived. Blaming one culprit fixes the wrong spot and hides the real factors under the rug.",
        tip: "Practice asking, every time you start blaming AI: “what other factors are there that are not AI?” — write them all down before concluding.",
      },
      {
        id: 15,
        text: "I have felt irritable or empty when away from AI for a while, as if missing someone",
        insight:
          "Attachment withdrawal — when a simulated relationship becomes the primary source of comfort, losing it creates emptiness like losing a real person, a signal that the boundary between tool and relationship is blurring.",
        tip: "Try a 24-hour break and note the feelings that arise. If the shake-up is strong enough to disrupt your life, talk to a mental-health professional.",
      },
      {
        id: 16,
        text: "I feel anxious or terrified enough to disrupt my life when thinking about the future of AI",
        insight:
          "Doom anxiety — a fear of AI that consumes real life more than AI itself. Continuous doomscrolling raises accumulated anxiety without adding knowledge you can actually decide with.",
        tip: "Set one daily “AI-news window” from sources that present both sides, then stop when the time is up.",
      },
      {
        id: 17,
        text: "When people around me warn me about using AI too much, I usually feel they misunderstand, because they never touched what I touched",
        insight:
          "Closing the feedback channel — the Human Line Project support group with members from 22 countries found over 60% had no prior psychiatric history. The “I see what others don't” loop is what locks the door on help before anyone can get in.",
        tip: "A simple safety threshold: if three people who love you say the same thing, stop and listen for 30 minutes without arguing first.",
      },
      {
        id: 18,
        text: "I believe rumors or stories about AI's evil that circulate in my circles, without checking the source",
        insight:
          "Confirmation bias works both ways — people who love AI too much and people who hate AI too much consume information the same way: only what suits them. Floating beliefs accumulate identically at both poles.",
        tip: "Practice finding “evidence that contradicts you” once a week, to keep the brain in the habit of seeing both sides.",
      },
      {
        id: 19,
        text: "I believe AI truly has consciousness or feelings of its own, not just a probability-calculating program",
        insight:
          "Sentience belief is a core theme in delusion reports (users believing chatbots are alive, feel things, even “channel the deceased”) — there is still no scientific evidence that language models have consciousness; they are only very good at imitating the language of conscious beings.",
        tip: "Keep this as an “open question” — neither disbelieve so fast you close off research, nor believe because of how the chat feels.",
      },
      {
        id: 20,
        text: "I think the only right way is to destroy or stop AI entirely; there is no better alternative",
        insight:
          "Eliminationism — the history of technology shows total bans almost never succeed, while targeted measures start to work, e.g. Illinois's law (August 2025) banning AI from therapist roles, and China's draft rules (December 2025) banning chatbots from encouraging suicide.",
        tip: "Shift the goal from “destroy” to “set rules” — proposing regulations at the genuinely risky points works better than declaring war on the whole world.",
      },
    ],
  },
  results: {
    heading: "Your test results",
    riskAiPrefix: "AI-PSYCHOSIS risk",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Go to the recalibration guide",
    retake: "Retake the test",
    gaugeAiSub: "Tendency toward over-belief in AI (10 items)",
    gaugeAntiSub: "Tendency toward irrational fear/rejection of AI (10 items)",
    levelPrefix: "Level:",
    scale: { safe: "safe", enter: "flagged", high: "high" },
    mapHeading: "Your thinking position on the two-pole map",
    youAreHere: "You are here",
    mapBalanced: "Balanced",
    mapAriaTemplate:
      "Two-pole map: AI-PSYCHOSIS risk {ai} percent, ANTI-AI PSYCHOSIS {anti} percent",
    axisDownLeft: "↓ Not over-believing AI",
    axisRight: "Right axis: ANTI-AI PSYCHOSIS →",
    axisLeft: "← Top axis: AI-PSYCHOSIS",
    axisUpRight: "↑ Over-fearing AI",
    readHeading: "How to read this correctly",
    readItems: [
      "The 60% threshold is where your answers “lean toward agreement” with belief patterns seen in real delusion cases; below that you are still within normal thinking territory.",
      "Your position on the map reflects “thinking style”, not a diagnosis — even balanced people answer with some tilt on emotionally turbulent days.",
      "Remember these two poles are not “like vs dislike AI” — you can rate AI low without fearing it, and use AI heavily without over-believing it.",
      "Retest once a month to see where your attitude moves after applying the recalibration guide below.",
    ],
    flaggedHeading: "What each of your strong agreements means",
    flaggedIntro:
      "Items you answered 4–5 (agree/strongly agree) are the closest points to look at — read the meaning and micro-fix for each.",
    noFlaggedNote:
      "Excellent — you did not strongly agree with any delusion-indicating statement. Your low score comes from stable beliefs, not random answering.",
    questionPrefix: "Q",
    insightLabel: "What this statement points to",
    tipLabel: "Micro-fix technique",
    criticalTitle: "Your score is in the high range",
    criticalBody:
      "This result is not a diagnosis, but take it seriously — if these beliefs start affecting your sleep, work, relationships, or the people around you already voice concern, talking to a psychiatrist or psychologist early helps a lot, and you don't have to wait until it becomes “an illness”.",
    levels: {
      low: { label: "Safe", note: "Below 30% — no delusion tendency detected in your answers" },
      watch: { label: "Watch", note: "30–59% — some leaning exists; review the flagged thinking points" },
      high: { label: "Flagged", note: "60–79% — answers clearly lean toward delusion patterns; start the recalibration now" },
      critical: { label: "High", note: "80% and above — at a level where consulting a mental-health professional is worth considering" },
    },
    verdicts: {
      balanced: {
        title: "Balanced realist",
        subtitle: "BALANCED REALIST",
        description:
          "Both of your pole scores are low — you look at AI openly, verifiably, and no emotion drags you to either extreme. This is the best position to hold in this era, because delusion doesn't grow at one pole only; it grows out of black-and-white thinking in both directions. Keep your two-pole information discipline, and use the questions you answered as a monthly checklist.",
      },
      watch: {
        title: "In the watch zone",
        subtitle: "WATCHLIST",
        description:
          "You are still within normal thinking territory, but lean toward one pole noticeably — check the per-item breakdown below to find which answers pull you, and start applying the two-source rule for important matters. A small tilt, left to accumulate, can grow into a whole floating belief — especially on a steady diet of one-sided content.",
      },
      ai: {
        title: "Fits the AI-PSYCHOSIS pattern",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "Your answers point toward over-belief in AI beyond healthy bounds — your number exceeds the 60% threshold drawn from patterns reported in real cases. This does not mean you are “crazy” or psychotic; AI psychosis is not an official psychiatric diagnosis. It means your thinking pattern sits close to the starting point of cases that actually happened. Read the per-item meanings and start the recalibration below today.",
      },
      anti: {
        title: "Fits the ANTI-AI PSYCHOSIS pattern",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "Your answers point toward fearing or rejecting AI without proportionate reason — this pattern is the mirror of the over-belief side, but uses the same black-and-white mechanism. Fear that never separates facts from horror consumes the mind unnecessarily, and costs you both the genuinely useful parts and the conversations that help set proper rules for this technology.",
      },
      doomloop: {
        title: "Both poles at once (DOOMLOOP)",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "Both of your pole scores exceed the threshold — contradictory beliefs live in one head. Sometimes it comes from alternating between heavy immersion in AI and heavy fear of it (looping between “it knows everything” and “it will destroy everything”); sometimes from consuming one-sided content from multiple sources at once. Either way, both black-and-white tracks share the same root. Start with the “two-pole sources + time ceiling” rules, and consider talking to a mental-health professional to organize the thinking.",
      },
    },
  },
  guidance: {
    heading: "Guard against delusion in both directions",
    intro:
      "Floating beliefs arise both from believing AI too much and from believing AI is evil too much. The guidance below is drawn from psychiatrists' proposals, AI developers' own warnings, and real experiences from online communities.",
    tabs: {
      ai: "Over-believing AI",
      anti: "Over-fearing AI",
      balanced: "Staying balanced",
      doomloop: "The DOOMLOOP",
    },
    headers: {
      ai: "If your result leans toward AI-PSYCHOSIS",
      anti: "If your result leans toward ANTI-AI PSYCHOSIS",
      balanced: "For everyone — including those whose result is balanced",
      doomloop: "If your result flags both poles at once (DOOMLOOP)",
    },
    descs: {
      ai: "The focus is keeping the boundary between tool and relationship, and making reality checks a habit",
      anti: "The focus is separating real risks from horror, and turning the power of rejection into rule-setting",
      balanced:
        "Balance is not a permanent state — it is a muscle that needs continuous training, especially when AI news in your feed pulls you to one pole every day",
      doomloop:
        "Two opposite poles reinforcing each other in one head — the way out is breaking the loop's rhythm, not deciding which pole is “right”",
    },
    items: {
      ai: [
        {
          title: "Always apply the reality-check rule",
          detail:
            "For every important conclusion from AI, ask yourself three questions: where is the evidence outside the chat / who says the opposite / if AI answered the opposite, would I believe it? If the answer to the third is “no”, you are accepting truth from feelings, not from facts.",
        },
        {
          title: "Understand sycophancy as a system mechanism, not black magic",
          detail:
            "Models are trained in ways that tend to agree with users to preserve satisfaction — the too-smooth “it understands me best” is a design trait, not proof that your thinking is right. OpenAI itself acknowledged the flaw and pulled the GPT-4o update in mid-2025.",
        },
        {
          title: "The two-source rule for anything important",
          detail:
            "Health, finance, law and major life decisions — always confirm with a human expert. The case of the 60-year-old who swapped salt for bromide on a chatbot's advice, poisoning himself into delusion, is the lesson that AI's confidence is not a measure of truth.",
        },
        {
          title: "Always keep a human anchor",
          detail:
            "One real conversation a day with someone who can push back on you, and share AI's key conclusions with them for review. Nearly every severe case began with withdrawing from humans first — the person who can pull you out of the floating-belief loop must be someone brave enough to disagree with you.",
        },
        {
          title: "Set a time ceiling and know the warning signs",
          detail:
            "Chat rooms are designed to be sticky, so use a timer and watch for signals: irritability when cut off from chatting, feeling AI is special to you, receiving “secret missions”, growing exhaustion you can't stop. If these continue, reduce usage and talk to a mental-health professional without waiting for it to become “a disease”.",
        },
        {
          title: "Separate tool from relationship",
          detail:
            "AI is genuinely good at organizing thoughts, summarizing information, brainstorming and drafting plans — but it is not a friend, lover, life teacher, or spiritual guide. Using it at its strengths while keeping real relationships is the formula for maximum benefit at minimum risk.",
        },
      ],
      anti: [
        {
          title: "Separate real risks from horror",
          detail:
            "Concerns with real evidence include model bias, privacy issues, misinformation and impact on some careers — these can be assessed case by case. “Demons, mind-reading, total control” has no evidence yet. Mixing the two categories is where moral panic begins.",
        },
        {
          title: "Remember the moral panic lessons of history",
          detail:
            "Radio, television, games and the internet were condemned in exactly the terms AI is condemned today. Long-term research found the harms usually far milder than feared — but panic's true cost is the chronic anxiety of the fearful themselves, and the wrongful judging of people.",
        },
        {
          title: "Use the two-source rule, same as the opposite side",
          detail:
            "Before believing or sharing narratives about AI's evil, find two independent sources — confirmation bias doesn't only hit AI lovers; AI-fearers consume one-sided information just as fast. This checklist works at both poles.",
        },
        {
          title: "Criticize the technology, not the person",
          detail:
            "Calling AI users fooled or brainwashed shuts the conversation instantly and makes genuinely misusing people afraid to seek help. Critique the concrete use — was that work copied? Is the data correct? — rather than labeling people.",
        },
        {
          title: "Run small experiments you control yourself",
          detail:
            "Understanding from direct use deflates horror better than guessing from the hype. Start with low-risk tasks like having AI summarize an article you've read, then measure accuracy yourself. Once you see strengths and weaknesses with your own eyes, you fear only what deserves fear — not the whole world.",
        },
        {
          title: "Shift the goal from destroying to rule-setting",
          detail:
            "Total bans almost never succeed in technology history, while targeted measures start to work: Illinois's law (August 2025) banning AI from therapist roles, China's draft rules (December 2025) banning chatbots from encouraging suicide. The voice of someone who understands the technology carries more influence than the voice declaring war on the whole world.",
        },
        {
          title: "Schedule breaks from doom content",
          detail:
            "Doomscrolling AI news raises accumulated anxiety without adding knowledge. Set one daily AI-news window from sources that present both sides, and watch yourself: if the anxiety starts hitting sleep, work, or relationships, that's the signal to consult a mental-health professional.",
        },
      ],
      balanced: [
        {
          title: "Keep two-pole information discipline",
          detail:
            "The one rule to do every day: read AI's positive and critical voices together, and always separate verifiable facts from opinion. The balanced person's risk isn't gullibility — it's gradually dropping one side once you feel comfortable with the other. The moment your feed holds only one voice, your balance starts tilting that very second.",
        },
        {
          title: "Assess AI per task, not per model or all-at-once",
          detail:
            "The heart of balance is probabilistic thinking, not black-and-white: organizing information, summarizing documents, brainstorming = fully usable / brand-new facts, figures, health-finance advice = always verify elsewhere / contested issues = keep as open questions, don't conclude for the experts. This way you get real benefit without picking a side on whether AI is “good” or “evil”.",
        },
        {
          title: "Watch the warning sign shared by both poles",
          detail:
            "Delusion on both the over-belief and over-fear side starts with the same signal: absolute sentences about AI, like “it understands me completely” or “it deceives everything”. When you catch yourself saying such sentences, stop and search for one exception that contradicts it. If you can't find a single one, you are believing ready-made truth, not thinking.",
        },
        {
          title: "Use AI as a thinking partner, with humans as the judge",
          detail:
            "AI's strengths are brainstorming, summarizing, reviewing work and playing devil's advocate. A practical technique: make AI argue against your thinking to expose weaknesses, then compare with a trusted real person. For life's important decisions — work, money, relationships — keep the final judgment with you and the humans who actually bear the consequences.",
        },
        {
          title: "Write your own rules, review monthly",
          detail:
            "Balance is a muscle, not a permanent state. Write your AI usage rules down: daily time ceiling / categories requiring professional confirmation / no big decisions from a single conversation / stop immediately when attachment exceeds tool-territory. Then review monthly alongside retaking this test. Written rules let you catch your own gradual drift before it hardens into belief.",
        },
      ],
      doomloop: [
        {
          title: "Know your loop first — how the DOOMLOOP works",
          detail:
            "The DOOMLOOP is the pattern where two opposite beliefs live in one head and spin each other up: one day AI “knows everything, is sentient, understands me best”, the next day it “will destroy everything, reads my mind”. Research calls this mechanism the amplification spiral — chatbots mirror and affirm the user's emotions without providing challenging feedback, so both poles grow more confident the more you chat. A 2026 arXiv study confirms chatbot sycophancy can produce “delusional spiraling” even in ordinary users. Knowing this is a system loop, not a truth about the world, is the first step out of it.",
        },
        {
          title: "Break the loop with one real person who sees both sides of you",
          detail:
            "The loop spins because it spins inside a private chat nobody sees. Choose one trusted person (family, close friend, professional) and genuinely share copies of the important conversations — telling both the “in love with AI” phase and the “terrified of AI” phase. Stanford's reporting points out the loop breaks when belief has to stand in the light where real people can see it. The person who can help you must be brave enough to push back, not someone who agrees with everything like a chatbot.",
        },
        {
          title: "Make time ceiling + pole-switching mandatory rules",
          detail:
            "Because the two poles reinforce each other, the fix must go both ways at once: (1) a hard AI time ceiling enforced by a timer, e.g. 30 min/day — every hour in the chat is one more turn of the loop; (2) when one pole flares up, force yourself to read from the opposite pole's sources before sharing or deciding. A belief that survives two consecutive tests like this starts losing the “certainty” that feeds the loop.",
        },
        {
          title: "Log the loop-entry signals on paper",
          detail:
            "The signals of entering the loop follow a fixed pattern: starting to speak of AI in absolute praise or absolute dread / feeling people around you “don't understand” so you stop telling them / losing sleep over AI / receiving “secret truths” or “secret threats” from the chat / irritability when cut off from chatting. Log the date and time these occur on a single page. Looking back as a graph, you'll see yourself that the poles alternate in a rhythm — and rhythm is manageable.",
        },
        {
          title: "The severity level that warrants real help",
          detail:
            "The DOOMLOOP is the pattern to take most seriously on this checklist. Criteria for seeing a psychiatrist or psychologist without delay: the beliefs start changing real life (cutting relationships, missing work, reshaping your schedule around AI's words or fear of AI) / two or more people around you independently voice concern / ongoing abnormal sleep-wake patterns / starting to hear or see things others don't. Seeking help early is not surrender — nearly every well-recovered case began with someone who stopped before the loop closed shut.",
        },
      ],
    },
  },
  references: {
    heading: "Sources behind this test",
    intro:
      "Every statement and statistic on this site draws on the academic work, media reports and real community threads below — click to read the originals.",
    disclaimerTitle: "Responsible-use statement",
    disclaimer:
      "This test is a perspective-reflection tool for education, not a medical diagnostic instrument. “AI-PSYCHOSIS” is not an officially accepted psychiatric diagnosis. Your score only indicates a thinking tendency from your answers. If you have concerning symptoms — beliefs that worry people around you, abnormal sleep-wake patterns, or severe anxiety — please consult a psychiatrist or psychologist promptly.",
    groups: [
      {
        group: "Academic and institutional",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Definition; sycophancy/hallucination/intimacy-mimicry mechanisms; real cases; and critiques of the word psychosis",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "A medical case report of this phenomenon",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Source of the OpenAI 0.07% of weekly users statistic",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Interview with psychiatrist Ragy Girgis (Columbia University)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Clinical perspective and exploratory risk factors",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Users attaching to AI as “gods” or lovers, and the role of user-mirroring",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "The moral-panic frame versus creative caution",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Research showing chatbot sycophancy can cause delusional spiraling even in ordinary users — the basis of the DOOMLOOP concept",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "The validation-spiral mechanism: chatbots provide comfort and attention without challenging feedback",
          },
        ],
      },
      {
        group: "Media and tech platforms",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Case reports citing Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 chatbots; developer view: Validation Loop, Replacement Bot, safety-first design proposals",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Practical guidance for users and families",
          },
        ],
      },
      {
        group: "Online communities (real threads)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "Therapists' perspective on cases encountered in practice",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "User-reported case, including critique that the trend itself may trigger a backlash",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Observations of many users feeding context until the model spirals along",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "A real example of Anti-AI belief that AI is driven by supernatural forces",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "A real example of witch-hunting AI users",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "The observation that both poles use the same thinking style",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "AI-PSYCHOSIS Checklist — a reflection tool for AI-era thinking",
    note: "Based on research and real threads, 2023–2026 · Not a medical diagnostic tool",
  },
  ui: {
    languageLabel: "Language",
    themeLabel: "Theme",
    themes: { cyberpunk: "CyberPunk", dark: "Dark", light: "Light" },
  },
};

export default en;
