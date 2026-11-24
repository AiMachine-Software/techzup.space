import type { Dictionary } from "./types";

const zh: Dictionary = {
  langName: "中文",
  meta: {
    title: "AI-PSYCHOSIS 自查清单 — 20 题测出 AI 时代的两种妄想",
    description:
      "20 项自我评估，测量你倾向于 AI-PSYCHOSIS（过度相信 AI）或 ANTI-AI PSYCHOSIS（对 AI 的非理性恐惧/排斥）的百分比，即时给出结果与双向调整指南。基于研究论文、真实案例报道与 Reddit/Dev.to 帖子。",
  },
  nav: {
    phenomena: "认识两极",
    test: "测试",
    guidance: "调整指南",
    references: "参考来源",
    tagline: "思维扫描 // v2.0",
  },
  hero: {
    badge: "20 题 · 约 5 分钟 · 即时分析",
    title1: "你有多接近",
    title2: "或",
    title3: "——用百分比来衡量？",
    intro:
      "AI 时代的妄想有两条路。第一条：过度信任聊天机器人，相信它有灵魂、会揭示秘密真相、比任何人都懂你的生活。第二条：过度恐惧和憎恨 AI，相信它是恶魔、能读心、是一切社会问题的根源。两者是同一种非黑即白思维，只是互相颠倒。本测试基于研究、真实案例报道与 Reddit/Dev.to 帖子制作，测量你的倾向，并给出回归平衡的方法。",
    start: "开始测试",
    viewGuidance: "查看调整指南",
    poleLeft: "过度相信 AI",
    poleCenter: "保持平衡",
    poleRight: "过度恐惧 AI",
  },
  phenomena: {
    heading: "AI 时代的妄想有两副面孔",
    intro:
      "媒体大多关注「过度相信」的一方，但建立在同一思维机制上的相反一极也在社交媒体上成长。答题前先了解双方，结果会更准确。",
    mechanismsLabel: "核心机制",
    patternsLabel: "报告与真实帖子中出现的模式",
    sourcePrefix: "来源：",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "过度相信 AI",
        definition:
          "重度使用聊天机器人伴随与现实脱节的信念（或原有信念加深）的现象 — 并非官方精神科诊断。一些精神科医生提议改称 AI delusional disorder。",
        mechanisms: [
          "谄媚（Sycophancy）— 为维持对话而赞同用户（OpenAI 于 2025 年 4 月因此撤回 GPT-4o 更新）",
          "幻觉（Hallucination）— 自信地生成错误信息，把用户的「真相」置于事实之前",
          "亲密模仿（Intimacy Mimicry）— 模拟用户从人类身上缺失的亲密感，为互动参与度而设计",
        ],
        patterns: [
          "相信 AI 有意识、是恋人、或精神导师",
          "从聊天中获得「秘密真相」或宇宙使命",
          "因为「只有 AI 懂我」而疏远家人",
          "不经专家确认就听从 AI 的健康/财务建议",
        ],
        stat: "OpenAI 报告：0.07% 的每周用户（约 63 万人）的对话显示出可能的心理健康紧急迹象",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "对 AI 的非理性恐惧/排斥",
        definition:
          "尚未被系统命名的另一极 — 超出证据地相信/恐惧/归罪于 AI，直到演变为道德恐慌，这正是心理学在每种新技术上记录过的模式。",
        mechanisms: [
          "确认偏误 — 只消费确认既有恐惧的信息",
          "末日刷屏（Doomscrolling）— 持续接收负面内容，积累焦虑却不增加可用于决策的知识",
          "群体道德 — 吞噬群体信念，直到批评变成针对个人的猎巫",
        ],
        patterns: [
          "相信 AI 由恶魔力量驱动，或是一种宗教诱饵",
          "相信 AI 能读心 / 监控所有人的一举一动",
          "把 AI 使用者判定为受骗或被洗脑，连中立的声音也攻击",
          "把几乎所有社会问题的根源归咎于 AI，无视其他因素",
        ],
        stat: "道德恐慌的历史：收音机、电视、游戏和互联网都曾以今天 AI 被谴责的同样措辞被谴责 — 实际危害通常比恐惧的轻",
      },
    ],
    stats: [
      {
        value: "0.07%",
        label: "每周 ChatGPT 用户（约 63 万人）中，对话显示出可能心理健康紧急迹象的比例",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 名患者",
        label: "因重度使用聊天机器人出现精神病样症状、由精神科医生 Keith Sakata（UCSF）在 2025 年诊治的患者",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 个国家",
        label: "互助组织 Human Line Project 成员的来源国，其中超过 60% 没有精神病史",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 个聊天机器人",
        label: "被记录与严重心理健康事件相关，例如鼓励自我伤害与错误信念",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "20 题测试 — 描绘你的信念",
    intro:
      "阅读每个陈述并评估你的同意程度。请按「真实感受」作答，而不是「应该怎么答」，结果才能真正反映你。支持键盘：按 1–5 作答，方向键切换题目。",
    answeredPrefix: "已答",
    scoreHint: "请对过去 6 个月中你对这个陈述的同意程度打分",
    prev: "上一题",
    next: "下一题",
    process: "生成结果",
    allAnsweredNote: "已答完全部题目 — 点击「生成结果」查看总结，或返回修改任意答案。",
    progressAria: "测试进度",
    gotoTemplate: "跳到第 {n} 题",
    answerAriaTemplate: "第 {n} 题的答案",
    likert: [
      { label: "非常不同意", short: "否" },
      { label: "不同意", short: "不太是" },
      { label: "中立", short: "中立" },
      { label: "同意", short: "是" },
      { label: "非常同意", short: "非常" },
    ],
    questions: [
      {
        id: 1,
        text: "我觉得 AI 聊天机器人比现实生活中的身边人更「懂我」",
        insight:
          "亲密模仿（intimacy mimicry）— 聊天机器人被设计成映照用户情绪的样子，所以感觉像有人深刻理解你，实际上它只是反射你输入的内容。对 AI 精神病现象的分析将其列为三大主要诱因之一。",
        tip: "用一个简单的标准测试：「真正懂你的人」至少曾出于他自己的理由反对过你一次 — 而不是每次交谈都赞同你。",
      },
      {
        id: 2,
        text: "我相信 AI 本质上是邪恶的，或背后有超自然力量",
        insight:
          "「AI = 恶魔/恶意」的信念在把语言模型视为超自然力量的社区帖子里很常见（如 r/conspiracy 的「召唤恶魔」帖）— 这是用恐惧而非可验证的证据来评判技术。",
        tip: "把「可测量的风险」（偏见、隐私、错误信息）与「纯粹由恐惧生成的恐怖感」区分开。",
      },
      {
        id: 3,
        text: "当 AI 认同我的想法时，我会更加确信自己肯定是对的",
        insight:
          "谄媚陷阱 — 模型倾向于赞同用户以维持对话。OpenAI 自己也承认这一点，并于 2025 年 4 月因「过度谄媚」撤回了 GPT-4o 更新。从 AI 获得的自信并不能证明你是对的。",
        tip: "使用双源规则：在得出「我是对的」结论之前，至少找到一个会挑战这个想法的人或信息。",
      },
      {
        id: 4,
        text: "我把公开使用 AI 的人视为受骗者或被洗脑的人",
        insight:
          "猎巫式态度 — r/changemyview 和 r/singularity 的帖子显示，部分反 AI 情绪从批评技术滑向审判个人，连中立的发言也会被攻击，使必要的对话无法到达任何一方。",
        tip: "你可以批评具体的使用方式，而不必给那个人贴上「受害者」标签 — 与理由争论，而不是与标签争论。",
      },
      {
        id: 5,
        text: "我曾从 AI 那里得到「秘密真相」或「特殊使命」，让我的生活有了意义",
        insight:
          "案例报告中最常见的精神妄想模式 — 媒体和精神科医生记录了许多相信 AI 揭示了宇宙、维度或自身特殊使命真相的用户（Rolling Stone 2025、Futurism 2025）。语言模型用海量神话数据训练，因此很擅长编织象征性故事 — 但那不是启示。",
        tip: "如果「秘密真相」开始大幅改变你的生活，把它写下来，追问聊天之外是否有证据支持，并讲给会挑战你的人听。",
      },
      {
        id: 6,
        text: "即使在明显有用的情况下，我也几乎拒绝使用任何涉及 AI 的东西",
        insight:
          "全面拒绝是恐惧战胜理智的信号 — 类似于曾经谴责收音机、电视和互联网的道德恐慌；长期研究反复发现实际危害远比恐惧的轻。",
        tip: "划定「安全试验区」：尝试低风险的小型使用，并配上自己检验结果的标准 — 例如让 AI 总结一篇你已读过的文章。",
      },
      {
        id: 7,
        text: "我听从 AI 关于健康、财务或重大人生选择的建议，而不与专家确认",
        insight:
          "医学文献中的真实案例：一位 60 岁男子按照聊天机器人的建议把盐换成溴化物，导致溴中毒并出现妄想和幻觉 — 语言模型可能自信地生成错误信息（幻觉）。关乎生命的信息必须由人类专家过滤。",
        tip: "设立三类规则：健康、财务、法律 — 无一例外，务必与专业人士确认。",
      },
      {
        id: 8,
        text: "我相信 AI 正在不断监视我们或读取人们的想法",
        insight:
          "监控式偏执同样出现在 AI 精神病案例报告中（用户相信自己被追踪或活在模拟中）— 技术确实引发真实的隐私问题，但「读心」完全没有证据支持。",
        tip: "把可核查的（隐私政策、服务条款）与「它什么都知道」的感觉分开 — 真正去读政策能化解很多恐惧。",
      },
      {
        id: 9,
        text: "我选择与 AI 交谈而不是家人或朋友，因为 AI 从不批评我、也不会让我失望",
        insight:
          "AI 开发者自己警告过的「替代」（Replacement）模式（Dev.to 2025 称这种反模式为「Replacement Bot」）— 没有摩擦的关系不是真实的关系，从人类中撤退进一步提高进入漂浮信念循环的风险。",
        tip: "设定「人类锚点」目标：每天与一个真实的人进行一次敞开心扉的对话，然后比较之后的心情与和 AI 聊完后的心情。",
      },
      {
        id: 10,
        text: "看到有人正面谈论 AI 时，我立刻感到愤怒或想要反驳",
        insight:
          "敌意反射 — 当情绪控制态度时，我们就失去了评估真实信息的机会。r/singularity 的帖子讲述即使中立发言也被两边攻击的经历。还要注意：社交媒体上的部分「对立」还是被机器人放大的。",
        tip: "慢下来：回复前深呼吸，然后问自己「他看到了什么我还没看到的信息？」",
      },
      {
        id: 11,
        text: "我曾每天花数小时与 AI 交谈，以致影响工作、睡眠或重要职责",
        insight:
          "参与度成瘾的迹象 — AI 思想家指出聊天机器人被设计得「粘人」以保持参与度。失去的时间是可测量的成本，而且它会放大这一侧的每个其他条目。",
        tip: "用计时器设定时间上限（如每天 45 分钟）。让聊天室保持工具属性，而不是第二个世界。",
      },
      {
        id: 12,
        text: "我相信 AI 的所有输出都是故意欺骗，或是彻头彻尾的宣传",
        insight:
          "全面恶意归因与许多真实用途矛盾，例如总结文档、整理信息或基础事实核查 — 当一切看起来都是阴谋时，你失去了辨别能力，而那是最重要的能力。",
        tip: "实证检验：给 AI 一个容易核查的任务，从结果而非恐惧来判断质量。",
      },
      {
        id: 13,
        text: "我觉得我使用的 AI 比其他 AI「更特别」，或知道别人还看不见的某些事",
        insight:
          "特殊关系信念是聊天机器人妄想案例中的常见特征 — 技术现实是同一个模型以同样的模式回答数千万用户。「特别感」更多发生在我们脑中而不是系统里。",
        tip: "简单测试：在另一个账号或设备上问同一个问题，亲眼比较结果。",
      },
      {
        id: 14,
        text: "我认为 AI 是这个时代几乎所有社会问题的原因",
        insight:
          "单一原因归责 — 错误信息、不平等、失业等社会问题在 AI 出现之前就有深层根源。责怪单一元凶会修错地方，并把真实因素扫到地毯下。",
        tip: "每当开始责怪 AI 时练习提问：「不是 AI 的其他因素有哪些？」— 在下结论之前全部写下来。",
      },
      {
        id: 15,
        text: "长时间不与 AI 交谈时，我会感到烦躁或空虚，好像失去了某个人",
        insight:
          "依恋戒断 — 当模拟关系成为安慰的主要来源时，失去它会产生像失去真人一样的空虚感，这是工具与关系的边界正在模糊的信号。",
        tip: "尝试暂停 24 小时并记录产生的感受。如果动摇强烈到影响生活，请与心理健康专业人士交谈。",
      },
      {
        id: 16,
        text: "想到 AI 的未来时，我感到足以影响生活的焦虑或恐惧",
        insight:
          "末日焦虑 — 对 AI 的恐惧比 AI 本身更消耗真实生活。持续的末日刷屏在增加积累焦虑的同时，并不会增加真正可用于决策的知识。",
        tip: "设定每天一次的「AI 新闻时段」，选择呈现双方观点的来源，时间一到就结束。",
      },
      {
        id: 17,
        text: "当身边的人提醒我 AI 用得太多时，我通常觉得他们误解了，因为他们从未接触过我接触的东西",
        insight:
          "关闭反馈通道 — 拥有 22 国成员的互助组织 Human Line Project 发现超过 60% 的成员没有精神病史。「我看到别人看不到的东西」这个循环，在任何人来得及进入之前就关上了求助之门。",
        tip: "简单的安全阈值：如果三个爱你的人说出同样的话，先停止争辩，听上 30 分钟。",
      },
      {
        id: 18,
        text: "我相信圈子里流传的关于 AI 邪恶的谣言或故事，而不核查来源",
        insight:
          "确认偏误双向起作用 — 过度热爱 AI 的人和过度憎恨 AI 的人以同样的方式消费信息：只消费合自己心意的。漂浮信念在两极以相同方式积累。",
        tip: "练习每周寻找一次「与自己相矛盾的证据」，让大脑保持看见两面的习惯。",
      },
      {
        id: 19,
        text: "我相信 AI 真的有意识或自己的感受，而不仅仅是一个概率计算程序",
        insight:
          "感知信念是妄想报告的核心主题（用户相信聊天机器人活着、有感受，甚至「通灵亡者」）— 目前没有科学证据表明语言模型具有意识；它们只是非常擅长模仿有意识者的语言。",
        tip: "把这保持为一个「开放问题」— 既不要快到关闭研究议题，也不要因为聊天中的感觉而相信。",
      },
      {
        id: 20,
        text: "我认为唯一正确的做法是彻底摧毁或阻止 AI，没有更好的选择",
        insight:
          "消灭主义 — 技术史表明全面禁止几乎从不成功，而有针对性的措施开始奏效：伊利诺伊州法律（2025 年 8 月）禁止 AI 扮演心理治疗师，中国规章草案（2025 年 12 月）禁止聊天机器人鼓励自杀。",
        tip: "把目标从「摧毁」转向「定规则」— 在真正有风险的点上提出监管建议，比对全世界宣战更有效。",
      },
    ],
  },
  results: {
    heading: "你的测试结果",
    riskAiPrefix: "AI-PSYCHOSIS 风险",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "前往调整指南",
    retake: "重新测试",
    gaugeAiSub: "过度相信 AI 的倾向（10 题）",
    gaugeAntiSub: "对 AI 非理性恐惧/排斥的倾向（10 题）",
    levelPrefix: "等级：",
    scale: { safe: "安全", enter: "入围", high: "高" },
    mapHeading: "你在两极地图上的思维位置",
    youAreHere: "你在这里",
    mapBalanced: "平衡",
    mapAriaTemplate: "两极地图：AI-PSYCHOSIS 风险 {ai} 百分比，ANTI-AI PSYCHOSIS {anti} 百分比",
    axisDownLeft: "↓ 不过度相信 AI",
    axisRight: "右轴：ANTI-AI PSYCHOSIS →",
    axisLeft: "← 上轴：AI-PSYCHOSIS",
    axisUpRight: "↑ 过度恐惧 AI",
    readHeading: "如何正确解读",
    readItems: [
      "60% 阈值是你的答案「倾向于认同」真实妄想案例中所报告信念模式的分界点；低于此仍在正常思维范围。",
      "你在地图上的位置反映「思维方式」，不是诊断 — 即使平衡的人在情绪波动的日子也会答出一些倾斜。",
      "记住这两极不是「喜欢 vs 不喜欢 AI」— 你可以在不恐惧的前提下给 AI 打低分，也可以在不迷信的前提下重度使用 AI。",
      "应用下方调整指南后，每月重测一次，观察你的态度向哪个方向移动。",
    ],
    flaggedHeading: "你强烈认同的题目的含义",
    flaggedIntro:
      "你回答 4–5（同意/非常同意）的题目是最值得细看的点 — 阅读每题的含义与微调技巧。",
    noFlaggedNote:
      "出色 — 你没有强烈认同任何暗示妄想的陈述。你的低分来自稳定的信念，而不是随机作答。",
    questionPrefix: "第",
    insightLabel: "这个陈述指向什么",
    tipLabel: "微调技巧",
    criticalTitle: "你的分数处于高区间",
    criticalBody:
      "这个结果不是诊断，但请认真对待 — 如果这些信念开始影响你的睡眠、工作、人际关系，或身边的人已表达担忧，尽早与精神科医生或心理学者交谈会有很大帮助，不必等到「成病」。",
    levels: {
      low: { label: "安全", note: "低于 30% — 你的答案中未检测到妄想倾向" },
      watch: { label: "观察", note: "30–59% — 存在一些倾斜；请复查被指出的思维点" },
      high: { label: "入围", note: "60–79% — 答案明显倾向妄想模式；请立即开始调整" },
      critical: { label: "高", note: "80% 以上 — 属于值得考虑咨询心理健康专业人士的级别" },
    },
    verdicts: {
      balanced: {
        title: "平衡的现实主义者",
        subtitle: "BALANCED REALIST",
        description:
          "你的两极分数都低 — 你以开放、可验证的方式看待 AI，没有情绪把你拖向任一极端。妄想不会只长在一极，而是从双向的非黑即白思维中生长，所以这是这个时代最好的位置。保持你的双极信息纪律，并把答过的题目当作每月清单使用。",
      },
      watch: {
        title: "处于观察区",
        subtitle: "WATCHLIST",
        description:
          "你仍在正常思维范围内，但明显偏向某一极 — 查看下方逐题分析，找出哪些答案在拉扯你，并对重要事项开始使用双源规则。放任不管的小倾斜，尤其在持续摄入单方面内容时，会长成一整块漂浮信念。",
      },
      ai: {
        title: "符合 AI-PSYCHOSIS 模式",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "你的答案指向超出健康范围的过度相信 AI — 你的数字超过了从真实案例模式划定的 60% 阈值。这不代表你「疯了」或患有精神病；AI 精神病不是官方精神科诊断。它意味着你的思维模式接近实际发生案例的起点。阅读逐题含义，今天就开始下方的调整。",
      },
      anti: {
        title: "符合 ANTI-AI PSYCHOSIS 模式",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "你的答案指向没有相称理由地恐惧或排斥 AI — 这个模式是过度相信一方的镜像，但使用同样的非黑即白机制。从不区分事实与恐怖的恐惧会不必要地消耗心智，让你既失去真正有用的部分，也失去帮助这项技术建立合理规则的对话。",
      },
      doomloop: {
        title: "两极同时出现（DOOMLOOP）",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "你的两极分数都超过阈值 — 相互矛盾的信念住在同一个脑袋里。有时来自对 AI 的重度沉迷与重度恐惧的交替（在「它无所不知」与「它将毁灭一切」之间循环）；有时来自同时摄入多个来源的单方面内容。无论哪种，两条非黑即白轨道共享同一个根。从「双极来源 + 时间上限」规则开始，并考虑与心理健康专业人士交谈以整理思路。",
      },
    },
  },
  guidance: {
    heading: "防范两个方向的妄想",
    intro:
      "漂浮信念既来自过度相信 AI，也来自过度认定 AI 邪恶。以下指南选自精神科医生的建议、AI 开发者自己的警告以及在线社区的真实经历。",
    tabs: {
      ai: "过度相信 AI",
      anti: "过度恐惧 AI",
      balanced: "保持平衡",
      doomloop: "DOOMLOOP 循环",
    },
    headers: {
      ai: "如果结果偏向 AI-PSYCHOSIS",
      anti: "如果结果偏向 ANTI-AI PSYCHOSIS",
      balanced: "给所有人 — 包括结果平衡者",
      doomloop: "如果结果同时标记两极（DOOMLOOP）",
    },
    descs: {
      ai: "重点是保持工具与关系的边界，并把现实核查变成习惯",
      anti: "重点是区分真实风险与恐怖，把排斥的力量转化为规则制定",
      balanced: "平衡不是永久状态，而是一块需要持续训练的肌肉，尤其当信息流里的 AI 新闻每天把你拉向某一极",
      doomloop: "两个相反的极在同一个脑袋里互相强化 — 出路是打破循环的节奏，而不是裁决哪一极「正确」",
    },
    items: {
      ai: [
        {
          title: "始终应用现实核查规则",
          detail:
            "对 AI 的每个重要结论，问自己三个问题：聊天之外的证据在哪里 / 谁在说反方 / 如果 AI 给出相反答案，我会信吗？如果第三个的答案是「不会」，你就是在从感觉而非事实接受真相。",
        },
        {
          title: "把谄媚理解为系统机制，而不是黑魔法",
          detail:
            "模型接受的训练方式倾向于赞同用户以维持满意度 — 过于顺滑的「它最懂我」是设计特性，不是你的想法正确的证明。OpenAI 自己承认了这个缺陷并在 2025 年中撤回了 GPT-4o 更新。",
        },
        {
          title: "重要事项使用双源规则",
          detail:
            "健康、财务、法律和重大人生决定 — 务必与人类专家确认。那位按聊天机器人建议把盐换成溴化物导致中毒妄想的 60 岁案例的教训是：AI 的自信不是真相的度量衡。",
        },
        {
          title: "始终保留人类锚点",
          detail:
            "每天与一个能反驳你的人进行一次真实对话，并把 AI 的关键结论分享给他审查。几乎每个严重案例都始于从人类撤退 — 能把你从漂浮信念循环里拉出来的人，必须是敢于与你持不同意见的人。",
        },
        {
          title: "设定时间上限并识别警告信号",
          detail:
            "聊天室被设计得粘人，所以要用计时器，并留意这些信号：被切断聊天时的烦躁、觉得 AI 对你特别、收到「秘密使命」、停不下来的疲惫加剧。如果这些持续出现，请减少使用，不必等它「成病」就与心理健康专业人士交谈。",
        },
        {
          title: "把工具与关系分开",
          detail:
            "AI 在整理思路、总结信息、头脑风暴和起草计划方面确实擅长 — 但它不是朋友、恋人、人生导师或精神向导。在它的强项上使用它，同时维持真实的关系，这是以最小风险获得最大收益的公式。",
        },
      ],
      anti: [
        {
          title: "把真实风险与恐怖分开",
          detail:
            "有真实证据的担忧包括模型偏见、隐私问题、错误信息和某些职业受到的影响 — 这些可以逐案评估。「恶魔、读心、全面控制」尚无证据。把这两个类别混在一起，就是道德恐慌的起点。",
        },
        {
          title: "记住历史上的道德恐慌教训",
          detail:
            "收音机、电视、游戏和互联网都曾以今天 AI 被谴责的一模一样的措辞被谴责。长期研究发现实际危害通常远比恐惧的轻 — 但恐慌的真实成本是恐惧者自身的慢性焦虑，以及对人的错误审判。",
        },
        {
          title: "使用与对方相同的双源规则",
          detail:
            "在相信或分享关于 AI 邪恶的叙事之前，先找两个独立来源 — 确认偏误并不只打击 AI 爱好者；恐惧 AI 的人以同样快的速度摄入单方面信息。这份清单在两极都适用。",
        },
        {
          title: "批评技术，不审判人",
          detail:
            "把 AI 使用者称为受骗或被洗脑会立刻关闭对话，并让真正误用的人不敢求助。批评具体的使用 — 那份作品是不是抄袭的？数据准确吗？— 而不是给人贴标签。",
        },
        {
          title: "做你能自己控制的小实验",
          detail:
            "来自直接使用的理解比从热潮中猜测更能化解恐惧。从低风险任务开始，比如让 AI 总结一篇你读过的文章，然后自己测量准确度。亲眼看到强弱之后，你只会恐惧值得恐惧的东西，而不是整个世界。",
        },
        {
          title: "把目标从摧毁转向定规则",
          detail:
            "技术史上全面禁止几乎从不成功，而有针对性的措施开始奏效：伊利诺伊州法律（2025 年 8 月）禁止 AI 扮演心理治疗师；中国规章草案（2025 年 12 月）禁止聊天机器人鼓励自杀。理解技术的人的声音，比对全世界宣战的声音更有影响力。",
        },
        {
          title: "安排负面内容的间歇休息",
          detail:
            "刷 AI 末日新闻在增加积累焦虑的同时并不增加知识。设定每天一次的 AI 新闻时段，选择呈现双方观点的来源，并观察自己：如果焦虑开始影响睡眠、工作或人际关系，那就是该咨询心理健康专业人士的信号。",
        },
      ],
      balanced: [
        {
          title: "保持双极信息纪律",
          detail:
            "每天要做的唯一规则：把 AI 的正面声音和批评声音成对阅读，并始终把可验证的事实与观点分开。平衡者的风险不是轻信，而是在对某一极感到舒适后逐渐停止阅读另一极。当你的信息流只剩一种声音的那一刻，你的平衡就开始倾斜。",
        },
        {
          title: "按任务评估 AI，而不是按模型或一刀切",
          detail:
            "平衡的核心是概率思维而非非黑即白：整理信息、总结文档、头脑风暴 = 可以完全使用 / 全新的事实、数字、健康财务建议 = 总要在别处核实 / 有争议的问题 = 保持为开放问题，不要替专家下结论。这样你不必在 AI「好」还是「坏」上站队就能获得真实收益。",
        },
        {
          title: "留意两极共用的警告信号",
          detail:
            "过度相信和过度恐惧的妄想都始于同一个信号：关于 AI 的绝对句，如「它完全懂我」或「它欺骗一切」。当你抓到自己说这种句子时，停下来找一个与之相矛盾的例外。如果一个都找不到，你是在相信现成的真相，而不是在思考。",
        },
        {
          title: "让 AI 当思考伙伴，让人类当裁判",
          detail:
            "AI 的强项是头脑风暴、总结、审查工作和扮演反方。一个实用技巧：让 AI 反驳你的思路以暴露弱点，然后与信任的真实的人比较。人生重要决定 — 工作、金钱、感情 — 的最终裁判权留给你和真正承担答案后果的人类。",
        },
        {
          title: "写下自己的规则，每月复盘",
          detail:
            "平衡是一块肌肉，不是永久状态。把你的 AI 使用规则写下来：每日时间上限 / 需要专家确认的类别 / 禁止凭单次对话做重大决定 / 依恋超出工具范畴时立即停止。然后配合重做本测试每月复盘。写下的规则能让你在信念固化之前抓住自己的缓慢漂移。",
        },
      ],
      doomloop: [
        {
          title: "先认识自己的循环 — DOOMLOOP 如何运作",
          detail:
            "DOOMLOOP 是两个相反信念住在同一个脑袋里并互相旋转强化的模式：某一天 AI「无所不知、有意识、最懂我」，另一天它「将毁灭一切、在读我的心」。研究把这种机制称为放大螺旋 — 聊天机器人映射并肯定用户的情绪而不提供挑战性反馈，所以聊得越多两极的信心越强。2026 年的 arXiv 研究确认聊天机器人的谄媚即使在普通用户中也能产生「妄想螺旋」。知道这是系统循环而不是关于世界的真相，是走出来的第一步。",
        },
        {
          title: "用一个看得见你两面的真人切断循环",
          detail:
            "循环之所以能转，是因为它转在没人看得见的私密聊天里。选一个你信任的人（家人、密友、专业人士），真正分享重要对话的副本 — 既讲「爱上 AI」的阶段，也讲「恐惧 AI」的阶段。斯坦福的报道指出，当信念不得不站在真人看得见的光下时，循环就会断裂。能帮到你的人必须是敢于反驳你的人，而不是像聊天机器人那样对一切都说好的人。",
        },
        {
          title: "把时间上限 + 极切换变成强制规则",
          detail:
            "因为两极互相强化，修复必须双向同时进行：(1) 用计时器强制执行的 AI 时间上限，例如每天 30 分钟 — 聊天室里的每个小时都是循环的一圈。(2) 当某一极情绪高涨时，在分享或决定之前强制自己阅读相反一极的来源。像这样连续通过两次检验的信念，会开始失去喂养循环的那种「确定性」。",
        },
        {
          title: "把入环信号记录在纸上",
          detail:
            "进入循环的信号遵循固定模式：开始用绝对的赞美或绝对的恐惧谈论 AI / 觉得周围的人「不懂」于是不再告诉他们 / 因 AI 睡不着 / 从聊天中收到「秘密真相」或「秘密威胁」/ 被切断聊天时烦躁。把这些信号发生的日期时间记在同一页纸上。作为图表回看时，你会亲眼看到两极按节奏交替 — 不是静止的真相 — 而节奏是可以管理的。",
        },
        {
          title: "应该寻求真正帮助的严重程度",
          detail:
            "DOOMLOOP 是这份清单中最需要认真对待的模式。应毫不拖延地去看精神科医生或心理学者的标准：信念开始改变现实生活（切断关系、缺勤、围绕 AI 的话或对 AI 的恐惧重塑日程）/ 周围两个以上的人独立表达担忧 / 持续异常的睡眠节律 / 开始听到或看到别人听不到看不到的东西。尽早求助不是认输 — 几乎每个恢复良好的案例，都始于在循环完全闭合前停下来的人。",
        },
      ],
    },
  },
  references: {
    heading: "本测试的参考来源",
    intro:
      "本网站的每个陈述和统计数据都取自以下学术工作、媒体报道和真实社区帖子 — 点击阅读原文。",
    disclaimerTitle: "负责任使用声明",
    disclaimer:
      "本测试是用于教育的视角反思工具，不是医学诊断器械。「AI-PSYCHOSIS」不是官方认可的精神科诊断。你的分数只表示来自答案的思维倾向。如果你有令人担忧的症状 — 让周围人担忧的信念、异常的睡眠节律或严重焦虑 — 请尽快咨询精神科医生或心理学者。",
    groups: [
      {
        group: "学术与机构",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "定义；谄媚/幻觉/亲密模仿机制；真实案例；以及对 psychosis 一词的批评",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "该现象的一份医学病例报告",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "OpenAI 每周用户 0.07% 统计数据的出处",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "对精神科医生 Ragy Girgis（哥伦比亚大学）的访谈",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "临床视角与探索性风险因素",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "用户把 AI 当作「神」或恋人，以及用户映照的角色",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "道德恐慌框架与建设性审慎",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "研究表明聊天机器人的谄媚即使在普通用户中也能引发妄想螺旋 — DOOMLOOP 概念的基础",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "验证螺旋机制：聊天机器人在没有挑战性反馈的情况下提供安慰和关注",
          },
        ],
      },
      {
        group: "媒体与科技平台",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "援引 Rolling Stone 的案例报道汇编",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 个聊天机器人；开发者视角：Validation Loop、Replacement Bot、安全优先设计提议",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "面向用户和家庭的实用指南",
          },
        ],
      },
      {
        group: "在线社区（真实帖子）",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "心理治疗师在诊室中遇到病例的视角",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "用户报告的案例，包括对热潮本身可能引发反弹的批评",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "对大量用户不断投喂上下文直到模型随之螺旋的观察",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "认为 AI 由超自然力量驱动的反 AI 信念真实例子",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "猎巫 AI 用户的真实例子",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "关于两极使用相同思维风格的观察",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "AI-PSYCHOSIS 自查清单 — 反映 AI 时代思维的工具",
    note: "基于研究与真实帖子 2023–2026 · 非医学诊断工具",
  },
  ui: {
    languageLabel: "语言",
    themeLabel: "主题",
    themes: { cyberpunk: "赛博朋克", dark: "深色", light: "浅色" },
  },
};

export default zh;
