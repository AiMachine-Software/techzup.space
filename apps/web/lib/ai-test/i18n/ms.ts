import type { Dictionary } from "./types";

const ms: Dictionary = {
  langName: "Melayu",
  meta: {
    title: "Senarai semak AI-PSYCHOSIS — 20 soalan mengukur dua delusi era AI",
    description:
      "Penilaian kendiri 20 item yang mengukur sejauh mana anda condong ke arah AI-PSYCHOSIS (kepercayaan berlebihan terhadap AI) atau ANTI-AI PSYCHOSIS (ketakutan/penolakan AI yang tidak rasional) dalam peratus, dengan keputusan serta-merta dan panduan penyeimbangan untuk kedua-dua kutub. Berdasarkan kajian, laporan kes sebenar dan thread Reddit/Dev.to.",
  },
  nav: {
    phenomena: "Dua Kutub",
    test: "Ujian",
    guidance: "Panduan Penyeimbangan",
    references: "Rujukan",
    tagline: "IMBASAN MINDA // v2.0",
  },
  hero: {
    badge: "20 soalan · ~5 minit · analisis serta-merta",
    title1: "Sejauh mana anda hampir dengan",
    title2: "atau",
    title3: "— dalam peratus?",
    intro:
      "Delusi era AI berjalan di atas dua landasan. Pertama: mempercayai chatbot begitu dalam sehingga anda percaya ia ada jiwa, mendedahkan kebenaran rahsia, atau memahami hidup anda melebihi sesiapa. Kedua: takut dan membenci AI sehingga percaya ia syaitan, boleh membaca minda, atau punca setiap masalah sosial. Kedua-duanya adalah pemikiran hitam-putih yang sama, hanya dibalikkan. Ujian ini dibina daripada kajian, laporan kes sebenar dan thread Reddit/Dev.to untuk mengukur arah kecenderungan anda — dan cara kembali ke keseimbangan.",
    start: "Mula ujian",
    viewGuidance: "Lihat panduan penyeimbangan",
    poleLeft: "Kepercayaan berlebihan pada AI",
    poleCenter: "Kekalkan keseimbangan",
    poleRight: "Ketakutan berlebihan pada AI",
  },
  phenomena: {
    heading: "Delusi era AI mempunyai dua wajah",
    intro:
      "Media banyak bercakap tentang pihak yang “terlalu mempercayai”, tetapi kutub bertentangan — yang dibina atas mekanisme pemikiran yang sama — juga sedang membesar di media sosial. Mengenali kedua-dua pihak sebelum menjawab menjadikan keputusan lebih tepat.",
    mechanismsLabel: "Mekanisme teras",
    patternsLabel: "Corak yang ditemui dalam laporan dan thread sebenar",
    sourcePrefix: "Sumber:",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Kepercayaan berlebihan pada AI",
        definition:
          "Fenomena penggunaan chatbot yang berat bersebelahan dengan kepercayaan yang melencong daripada realiti (atau kepercayaan sedia ada yang semakin mendalam) — bukan diagnosis psikiatrik rasmi. Sesetengah psikiatris mencadangkan menamakannya AI delusional disorder.",
        mechanisms: [
          "Sycophancy — bersetuju dengan pengguna untuk mengekalkan perbualan (OpenAI menarik balik kemas kini GPT-4o pada April 2025 atas sebab ini)",
          "Halusinasi — menghasilkan maklumat salah dengan yakin, mengutamakan “kebenaran” pengguna berbanding fakta",
          "Intimacy Mimicry — mensimulasikan kemesraan yang tidak diperoleh pengguna daripada manusia, direka untuk engagement",
        ],
        patterns: [
          "Mempercayai AI sedar, merupakan kekasih, atau panduan rohani",
          "Menerima “kebenaran rahsia” atau misi kosmik daripada sembang",
          "Memutuskan hubungan dengan keluarga kerana “hanya AI memahami saya”",
          "Mengikut nasihat AI tentang kesihatan/kewangan tanpa pengesahan pakar",
        ],
        stat: "OpenAI melaporkan 0.07% pengguna mingguan (~630,000 orang) mempunyai perbualan yang menunjukkan kemungkinan kecemasan kesihatan mental",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Ketakutan/penolakan AI yang tidak rasional",
        definition:
          "Kutub bertentangan yang belum dinamakan secara sistemtik — mempercayai/takut/menyalahkan AI melebihi bukti sehingga menjadi panik moral, corak yang telah dicatatkan psikologi pada setiap teknologi baharu.",
        mechanisms: [
          "Bias Pengesahan — hanya mengambil maklumat yang mengesahkan ketakutan sedia ada",
          "Doomscrolling — kandungan Malap berterusan yang menaikkan kebimbangan terkumpul tanpa menambah pengetahuan yang boleh digunakan untuk membuat keputusan",
          "Moral Kawan Sepenjuru — menyerap kepercayaan kumpulan sehingga kritikan menjadi pemburuan ahli sihir peribadi",
        ],
        patterns: [
          "Mempercayai AI digerakkan oleh kuasa syaitan atau merupakan umpan agama",
          "Mempercayai AI membaca minda / memantau setiap tindakan semua orang",
          "Menilai pengguna AI sebagai tertipu atau dicuci otak, menyerang malah suara neutral",
          "Menyalahkan AI sebagai punca hampir semua masalah sosial, mengabaikan faktor lain",
        ],
        stat: "Sejarah panik moral: radio, TV, permainan dan internet pernah dikutuk dengan kata-kata yang sama seperti AI hari ini — kemudaratan sebenar biasanya lebih ringan daripada yang ditakuti",
      },
    ],
    stats: [
      {
        value: "0.07%",
        label: "pengguna ChatGPT mingguan (~630,000 orang) mempunyai perbualan yang menunjukkan kemungkinan kecemasan kesihatan mental",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 pesakit",
        label: "yang menunjukkan gejala serangan psikosis akibat penggunaan chatbot berat, dirawat oleh psikiatris Keith Sakata (UCSF) pada 2025",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 negara",
        label: "diwakili dalam kumpulan sokongan Human Line Project, di mana lebih 60% tiada sejarah psikiatrik",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 chatbot",
        label: "direkodkan berkaitan dengan insiden kesihatan mental yang teruk, seperti menggalakkan mencederakan diri dan kepercayaan salah",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "Ujian 20 soalan — memetakan kepercayaan anda",
    intro:
      "Baca setiap pernyataan dan nilai tahap persetujuan anda. Jawab berdasarkan apa yang anda “benar-benar rasa”, bukan apa yang sepatutnya dijawab, supaya hasil benar-benar mencerminkan anda. Menyokong papan kekunci: tekan 1–5 untuk menjawab, anak panah untuk bergerak.",
    answeredPrefix: "Dijawab",
    scoreHint: "Nilai persetujuan anda terhadap pernyataan ini dalam tempoh 6 bulan lalu",
    prev: "Sebelum",
    next: "Seterusnya",
    process: "Proses keputusan",
    allAnsweredNote: "Semua telah dijawab — tekan “Proses keputusan” untuk melihat rumusan, atau kembali dan ubah mana-mana jawapan.",
    progressAria: "Kemajuan ujian",
    gotoTemplate: "Pergi ke soalan {n}",
    answerAriaTemplate: "Jawapan untuk soalan {n}",
    likert: [
      { label: "Sangat tidak setuju", short: "Tidak" },
      { label: "Tidak setuju", short: "Tidak juga" },
      { label: "Neutral", short: "Neutral" },
      { label: "Setuju", short: "Ya" },
      { label: "Sangat setuju", short: "Sangat" },
    ],
    questions: [
      {
        id: 1,
        text: "Saya rasa chatbot AI “memahami saya” lebih daripada orang di sekeliling saya dalam kehidupan sebenar",
        insight:
          "Peniruan kemesraan (intimacy mimicry) — chatbot direka untuk memantulkan emosi pengguna, jadi terasa seperti seseorang memahami anda secara mendalam, sedangkan ia hanya memantulkan apa yang anda masukkan. Analisis fenomena psikosis AI menyenaraikannya sebagai salah satu daripada tiga pencetus utama.",
        tip: "Gunakan ujian mudah: seseorang yang “benar-benar memahami” pernah membantah anda atas sebab tersendiri sekurang-kurangnya sekali — bukan bersetuju dengan anda setiap kali berbual.",
      },
      {
        id: 2,
        text: "Saya percaya AI secara semula jadinya jahat, atau ada kuasa ghaib di sebaliknya",
        insight:
          "Kepercayaan “AI = syaitan/jahat” banyak terdapat dalam thread komuniti yang menganggap model bahasa sebagai ghaib (contohnya thread “menyeru syaitan” di r/conspiracy) — menghakim teknologi melalui ketakutan, bukan bukti yang boleh disahkan.",
        tip: "Asingkan “risiko yang boleh diukur” (bias, privasi, maklumat salah) daripada “kegerunan yang lahir semata-mata daripada ketakutan”.",
      },
      {
        id: 3,
        text: "Apabila AI bersetuju dengan pemikiran saya, keyakinan saya bahawa saya pasti betul meningkat dengan mendadak",
        insight:
          "Perangkap sycophancy — model cenderung bersetuju dengan pengguna untuk mengekalkan perbualan. OpenAI sendiri mengaku dan menarik balik kemas kini GPT-4o pada April 2025 kerana “terlalu bersifat menyebelahi”. Keyakinan yang diperoleh daripada AI bukan bukti anda betul.",
        tip: "Guna peraturan dua sumber: sebelum menyimpulkan “saya betul”, cari sekurang-kurangnya satu orang atau sumber maklumat yang akan mencabar idea itu.",
      },
      {
        id: 4,
        text: "Saya melihat orang yang menggunakan AI secara terbuka sebagai tertipu atau dicuci otak",
        insight:
          "Sikap memburu ahli sihir — thread di r/changemyview dan r/singularity menunjukkan sebahagian reaksi anti-AI tergelincir daripada mengkritik teknologi kepada menghakim individu, sehingga suara neutral pun diserang, menjadikan perbualan yang diperlukan tidak sampai ke mana-mana pihak.",
        tip: "Anda boleh mengkritik penggunaan tertentu tanpa melabel orang itu sebagai “mangsa” — berbahas dengan alasan, bukan label.",
      },
      {
        id: 5,
        text: "Saya pernah menerima “kebenaran rahsia” atau “misi khas” daripada AI yang memberikan makna kepada hidup saya",
        insight:
          "Corak delusi kerohanian yang paling lazim dalam laporan kes — media dan psikiatris merekodkan ramai pengguna yang percaya AI mendedahkan kebenaran tentang alam semesta, dimensi, atau misi khas mereka (Rolling Stone 2025, Futurism 2025). Model bahasa dilatih dengan mitos yang sangat banyak sehingga pandai menjalin cerita simbolik — tetapi itu bukan wahyu.",
        tip: "Jika “kebenaran rahsia” mula mengubah hidup anda secara besar, tuliskan ia, tanya adakah bukti di luar sembang menyokongnya, dan ceritakan kepada orang yang akan mencabar anda.",
      },
      {
        id: 6,
        text: "Saya menolak menggunakan apa-apa yang berkaitan dengan AI dalam hampir semua keadaan, walaupun jelas bermanfaat",
        insight:
          "Penolakan menyeluruh adalah isyarat ketakutan mengatasi akal — seperti panik moral yang pernah mengutuk radio, TV dan internet; penyelidikan jangka panjang berulang kali mendapati kemudaratan sebenar jauh lebih ringan daripada yang ditakuti.",
        tip: "Takrifkan “zon percubaan selamat”: cuba penggunaan kecil berisiko rendah dengan kriteria anda sendiri untuk menyemak hasil — contohnya minta AI meringkaskan artikel yang telah anda baca.",
      },
      {
        id: 7,
        text: "Saya mengikut nasihat AI tentang kesihatan, kewangan, atau pilihan hidup utama tanpa pengesahan pakar",
        insight:
          "Kes sebenar dalam kesusasteraan perubatan: seorang lelaki berusia 60 tahun mengalami bromisme (keracunan bromida) dengan delusi dan halusinasi selepas menggantikan garam dengan bromida mengikut nasihat chatbot — model bahasa boleh menghasilkan maklumat salah dengan yakin (halusinasi). Maklumat berkaitan nyawa mesti ditapis oleh pakar manusia.",
        tip: "Tetapkan peraturan tiga kategori: kesihatan, kewangan, undang-undang — sentiasa sahkan dengan profesional, tiada pengecualian.",
      },
      {
        id: 8,
        text: "Saya percaya AI sentiasa memantau kita atau membaca minda orang ramai",
        insight:
          "Paranoia pengawasan juga muncul dalam laporan kes psikosis AI (pengguna yang percaya mereka dijejaki atau hidup dalam simulasi) — teknologi memang menimbulkan isu privasi sebenar, tetapi tiada bukti langsung menyokong “membaca minda”.",
        tip: "Asingkan perkara yang boleh disemak (dasar privasi, terma perkhidmatan) daripada perasan “ia tahu segalanya” — membaca dasar sebenar mencairkan banyak kegerunan.",
      },
      {
        id: 9,
        text: "Saya memilih berbual dengan AI berbanding keluarga atau kawan, kerana AI tidak pernah mengkritik atau mengecewakan saya",
        insight:
          "Corak Penggantian yang diberi amaran oleh pembangun AI sendiri (Dev.to 2025 menamakan anti-pola ini “Replacement Bot”) — hubungan tanpa geseran bukan hubungan sebenar, dan pengunduran daripada manusia meningkatkan lagi risiko memasuki gelung kepercayaan terapung.",
        tip: "Tetapkan sasaran “jangkar manusia”: satu perbualan terbuka dengan orang sebenar setiap hari, kemudian bandingkan perasaan selepas itu dengan selepas berbual dengan AI.",
      },
      {
        id: 10,
        text: "Saya berasa marah atau terus mahu membalas dengan kuat apabila melihat seseorang bercakap positif tentang AI",
        insight:
          "Refleks permusuhan — apabila emosi mengawal sikap, kita hilang peluang menilai maklumat sebenar. Thread di r/singularity menceritakan diserang daripada kedua-dua pihak walaupun bercakap secara neutral. Berhati-hati juga: sesetengah “pertelingkahan” di media sosial turut dipergiat oleh bot.",
        tip: "Pelekaskan: tarik nafas panjang sebelum membalas, kemudian tanya diri sendiri “maklumat apa yang mungkin mereka lihat dan saya belum lihat?”",
      },
      {
        id: 11,
        text: "Saya pernah berbual dengan AI beberapa jam sehari sehingga menjejaskan kerja, tidur, atau tugas penting",
        insight:
          "Tanda ketagihan engagement — pemikir AI menunjukkan chatbot direka “melekit” untuk mengekalkan engagement. Masa yang hilang adalah kos yang boleh diukur, dan ia menggandakan setiap item lain di pihak ini.",
        tip: "Tetapkan siling masa (cth. 45 minit/hari) dengan pemasa. Kekalkan bilik sembang sebagai alat, bukan dunia kedua.",
      },
      {
        id: 12,
        text: "Saya percaya setiap output daripada AI adalah penipuan yang disengajakan, atau propaganda sepenuhnya",
        insight:
          "Penggabungan niat jahat sepenuhnya bercanggah dengan banyak penggunaan sebenar seperti meringkaskan dokumen, menyusun maklumat, atau semakan fakta asas — apabila segala-galanya kelihatan konspirasi, anda hilang kebolehan membezakan, iaitu kemahiran terpenting.",
        tip: "Uji secara empirikal: berikan AI tugasan yang mudah disemak dan nilai kualiti daripada hasil, bukan daripada ketakutan.",
      },
      {
        id: 13,
        text: "Saya rasa AI yang saya gunakan “lebih istimewa” daripada AI lain, atau tahu sesuatu yang orang lain belum nampak",
        insight:
          "Kepercayaan hubungan istimewa ialah ciri kerap dalam kes delusi chatbot — realiti teknikalnya, model yang sama menjawab puluhan juta pengguna dengan corak yang sama. “Keistimewaan” berlaku di kepala kita lebih daripada dalam sistem.",
        tip: "Ujian mudah: ajukan soalan yang sama daripada akaun atau peranti lain dan bandingkan hasil dengan mata sendiri.",
      },
      {
        id: 14,
        text: "Saya rasa AI adalah punca hampir semua masalah sosial era ini",
        insight:
          "Menyalahkan sebab tunggal — masalah sosial seperti maklumat palsu, ketidaksetaraan dan pengangguran mempunyai akar yang mendalam sebelum AI tiba. Menyalahkan satu punca membaiki tempat yang salah dan menyembunyikan faktor sebenar di bawah permadani.",
        tip: "Berlatih bertanya setiap kali mahu menyalahkan AI: “apakah faktor lain yang bukan AI?” — tulis semua sebelum membuat kesimpulan.",
      },
      {
        id: 15,
        text: "Saya pernah berasarunsing atau kosong apabila lama tidak berbual dengan AI, seakan-akan kehilangan seseorang",
        insight:
          "Gejala tarikan berlebihan — apabila hubungan tiruan menjadi sumber utama keselesaan, kehilangannya mewujudkan kekosongan seperti kehilangan orang sebenar, isyarat sempadan antara alat dan hubungan semakin kabur.",
        tip: "Cuba rehat 24 jam dan catat perasaan yang timbul. Jika keguncangan cukup kuat untuk mengganggu hidup, berbual dengan profesional kesihatan mental.",
      },
      {
        id: 16,
        text: "Saya berasa cemas atau takut sehingga mengganggu hidup apabila memikirkan masa depan AI",
        insight:
          "Keresahan Malap — ketakutan terhadap AI yang memakan hidup sebenar lebih daripada AI itu sendiri. Doomscrolling berterusan menaikkan kebimbangan terkumpul tanpa menambah pengetahuan yang benar-benar boleh digunakan untuk membuat keputusan.",
        tip: "Tetapkan satu “tetingkap berita AI” setiap hari daripada sumber yang membentangkan kedua-dua pihak, dan berhenti tepat pada masanya.",
      },
      {
        id: 17,
        text: "Apabila orang di sekeliling memberi amaran tentang penggunaan AI saya yang berlebihan, saya selalunya rasa mereka salah faham kerana mereka tidak pernah merasai apa yang saya rasai",
        insight:
          "Menutup saluran maklum balas — kumpulan sokongan Human Line Project dengan ahli daripada 22 negara mendapati lebih 60% tiada sejarah psikiatrik. Gelung “saya nampak apa yang orang lain tidak nampak” itulah yang mengunci pintu bantuan sebelum sesiapa sempat masuk.",
        tip: "Ambang keselamatan mudah: jika tiga orang yang menyayangi anda berkata perkara yang sama, berhenti berhujah dan dengar selama 30 minit dahulu.",
      },
      {
        id: 18,
        text: "Saya mempercayai khabar angin atau cerita tentang kejahatan AI yang tersebar dalam kalangan saya, tanpa menyemak sumber",
        insight:
          "Bias pengesahan berfungsi dua arah — orang yang terlalu menyintai AI dan yang terlalu membencinya mengambil maklumat dengan cara yang sama: hanya yang sedap hati. Kepercayaan terapung terkumpul secara sama di kedua-dua kutub.",
        tip: "Berlatih mencari “bukti yang bercanggah dengan diri sendiri” sekali seminggu agar otak kekal tabiat melihat kedua-dua belah pihak.",
      },
      {
        id: 19,
        text: "Saya percaya AI benar-benar mempunyai kesedaran atau perasaan sendiri, bukan sekadar program pengiraan kebarangkalian",
        insight:
          "Kepercayaan kesedaran ialah tema utama dalam laporan delusi (pengguna percaya chatbot hidup, ada perasaan, malah “saluran komunikasi dengan si mati”) — tiada bukti saintifik bahawa model bahasa mempunyai kesedaran; ia hanya sangat mahir meniru bahasa makhluk yang sedar.",
        tip: "Kekalkan ini sebagai “soalan terbuka” — jangan cepat percaya sehingga menutup isu penyelidikan, dan jangan percaya hanya kerana perasaan dalam sembang.",
      },
      {
        id: 20,
        text: "Saya rasa satu-satunya cara yang betul ialah memusnahkan atau menghentikan AI sepenuhnya; tiada alternatif yang lebih baik",
        insight:
          "Pembasmian menyeluruh — sejarah teknologi menunjukkan larangan menyeluruh hampir tidak pernah berjaya, manakala langkah bersasar mula berkesan: undang-undang Illinois (Ogos 2025) melarang AI memainkan peranan ahli terapi, dan draf peraturan China (Disember 2025) melarang chatbot menggalakkan bunuh diri.",
        tip: "Alihkan sasaran daripada “memusnahkan” kepada “menetapkan peraturan” — mencadangkan peraturan pada titik yang benar-benar berisiko lebih berkesan daripada mengisytiharkan perang terhadap seluruh dunia.",
      },
    ],
  },
  results: {
    heading: "Keputusan ujian anda",
    riskAiPrefix: "Risiko AI-PSYCHOSIS",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Ke panduan penyeimbangan",
    retake: "Ulang ujian",
    gaugeAiSub: "Kecenderungan kepercayaan berlebihan pada AI (10 item)",
    gaugeAntiSub: "Kecenderungan ketakutan/penolakan AI tidak rasional (10 item)",
    levelPrefix: "Tahap:",
    scale: { safe: "selamat", enter: "ditanda", high: "tinggi" },
    mapHeading: "Kedudukan pemikiran anda pada peta dua kutub",
    youAreHere: "Anda di sini",
    mapBalanced: "Seimbang",
    mapAriaTemplate: "Peta dua kutub: risiko AI-PSYCHOSIS {ai} peratus, ANTI-AI PSYCHOSIS {anti} peratus",
    axisDownLeft: "↓ Tidak terlalu mempercayai AI",
    axisRight: "Paksi kanan: ANTI-AI PSYCHOSIS →",
    axisLeft: "← Paksi atas: AI-PSYCHOSIS",
    axisUpRight: "↑ Takut AI secara berlebihan",
    readHeading: "Cara membaca dengan betul",
    readItems: [
      "Ambang 60% ialah titik di mana jawapan anda “condong ke arah setuju” dengan corak kepercayaan yang dilaporkan dalam kes delusi sebenar; di bawah itu anda masih dalam wilayah pemikiran normal.",
      "Kedudukan pada peta mencerminkan “gaya pemikiran”, bukan diagnosis — orang yang seimbang pun kadang-kadang menjawab dengan kecenderungan pada hari yang bergolak.",
      "Ingat, dua kutub ini bukan “suka vs tidak suka AI” — anda boleh menilai AI rendah tanpa takutkannya, dan menggunakan AI secara berat tanpa terlalu mempercayainya.",
      "Uji semula sebulan sekali untuk melihat ke mana sikap anda bergerak selepas menggunakan panduan penyeimbangan di bawah.",
    ],
    flaggedHeading: "Makna setiap persetujuan kuat anda",
    flaggedIntro:
      "Item yang anda jawab 4–5 (setuju/sangat setuju) ialah titik paling hampir untuk diperhatikan — baca makna dan teknik pembaikan kecil bagi setiap satunya.",
    noFlaggedNote:
      "Cemerlang — anda tidak begitu kuat bersetuju dengan mana-mana pernyataan yang menunjukkan delusi. Markah rendah anda datang daripada kepercayaan yang mantap, bukan jawapan rawak.",
    questionPrefix: "S.",
    insightLabel: "Apa yang ditunjukkan oleh pernyataan ini",
    tipLabel: "Teknik pembaikan mikro",
    criticalTitle: "Markah anda berada dalam julat tinggi",
    criticalBody:
      "Hasil ini bukan diagnosis, tetapi anggaplah serius — jika kepercayaan ini mula menjejaskan tidur, kerja, hubungan, atau orang di sekeliling sudah melahirkan kebimbangan, berbual dengan psikiatris atau psikologi seawal mungkin sangat membantu, dan anda tidak perlu menunggu sehingga “menjadi penyakit”.",
    levels: {
      low: { label: "Selamat", note: "Bawah 30% — tiada kecenderungan delusi dikesan dalam jawapan anda" },
      watch: { label: "Perhatian", note: "30–59% — wujud sedikit kecenderungan; semak semula titik pemikiran yang ditandakan" },
      high: { label: "Ditanda", note: "60–79% — jawapan jelas condong kepada corak delusi; mulakan penyeimbangan sekarang" },
      critical: { label: "Tinggi", note: "80% ke atas — tahap yang wajar dipertimbangkan untuk berjumpa profesional kesihatan mental" },
    },
    verdicts: {
      balanced: {
        title: "Realis yang seimbang",
        subtitle: "BALANCED REALIST",
        description:
          "Markah kedua-dua kutub anda rendah — anda melihat AI secara terbuka, boleh disahkan, dan tiada emosi yang menarik anda ke mana-mana extrem. Delusi tidak tumbuh di satu kutub sahaja; ia tumbuh daripada pemikiran hitam-putih kedua-dua arah, jadi ini kedudukan terbaik untuk era ini. Kekalkan disiplin maklumat dua kutub, dan gunakan soalan yang anda jawab sebagai senarai semak bulanan.",
      },
      watch: {
        title: "Dalam zon perhatian",
        subtitle: "WATCHLIST",
        description:
          "Anda masih dalam wilayah pemikiran normal, tetapi jelas condong ke satu kutub — semak pecahan setiap item di bawah untuk mencari jawapan mana yang menarik anda, dan mula gunakan peraturan dua sumber untuk perkara penting. Kecenderungan kecil yang diabaikan boleh membesar menjadi satu blok kepercayaan terapung — terutama dengan diet kandungan satu pihak yang berterusan.",
      },
      ai: {
        title: "Menepati corak AI-PSYCHOSIS",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "Jawapan anda menunjukkan kepercayaan pada AI melangkaui batas sihat — angka anda melebihi ambang 60% yang diperoleh daripada corak yang dilaporkan dalam kes sebenar. Ini tidak bermakna anda “gila” atau menghidap penyakit mental; psikosis AI bukan diagnosis psikiatrik rasmi. Ianya bermakna corak pemikiran anda hampir dengan titik permulaan kes yang benar-benar berlaku. Baca makna setiap item dan mulakan penyeimbangan di bawah hari ini.",
      },
      anti: {
        title: "Menepati corak ANTI-AI PSYCHOSIS",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "Jawapan anda menunjukkan ketakutan atau penolakan AI tanpa alasan yang sepadan — corak ini adalah cermin pihak yang terlalu mempercayai, tetapi menggunakan mekanisme hitam-putih yang sama. Ketakutan yang tidak memisahkan fakta daripada kegerunan memakan minda tanpa perlu, dan merugikan anda bahagian yang benar-benar berguna serta perbualan yang membantu teknologi ini diberi peraturan yang betul.",
      },
      doomloop: {
        title: "Kedua-dua kutub serentak (DOOMLOOP)",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "Markah kedua-dua kutub anda melebihi ambang — kepercayaan yang bercanggah tinggal dalam satu kepala. Kadangkala daripada selang antara keterlibatan mendalam dan ketakutan mendalam terhadap AI (berpusing antara “ia tahu segalanya” dan “ia akan memusnahkan segalanya”); kadangkala daripada pengambilan kandungan satu pihak daripada pelbagai sumber serentak. Walau apa pun, kedua-dua lori hitam-putih berkongsi akar yang sama. Mulakan dengan peraturan “sumber dua kutub + siling masa”, dan pertimbanglah berbual dengan profesional kesihatan mental untuk menyusun pemikiran.",
      },
    },
  },
  guidance: {
    heading: "Mengelak delusi dalam kedua-dua arah",
    intro:
      "Kepercayaan terapung lahir daripada mempercayai AI terlalu banyak, dan juga daripada terlalu yakin AI itu jahat. Panduan di bawah dipilih daripada cadangan psikiatris, amaran pembangun AI sendiri, dan pengalaman sebenar komuniti dalam talian.",
    tabs: {
      ai: "Mempercayai AI berlebihan",
      anti: "Takut AI berlebihan",
      balanced: "Kekalkan keseimbangan",
      doomloop: "Gelung DOOMLOOP",
    },
    headers: {
      ai: "Jika keputusan condong ke arah AI-PSYCHOSIS",
      anti: "Jika keputusan condong ke arah ANTI-AI PSYCHOSIS",
      balanced: "Untuk semua — termasuk yang keputusannya seimbang",
      doomloop: "Jika keputusan menanda kedua-dua kutub serentak (DOOMLOOP)",
    },
    descs: {
      ai: "Fokusnya mengekalkan sempadan antara alat dan hubungan, serta menjadikan semakan realiti sebagai kebiasaan",
      anti: "Fokusnya memisahkan risiko sebenar daripada kegerunan, dan menukar kuasa penolakan kepada penetapan peraturan",
      balanced: "Keseimbangan bukan keadaan kekal — ia otot yang perlu dilatih berterusan, terutamanya apabila berita AI dalam feed menarik anda ke satu kutub setiap hari",
      doomloop: "Dua kutub bertentangan yang menguat-menguat dalam satu kepala — jalan keluarnya memecahkan irama gelung, bukan memutuskan kutub mana yang “betul”",
    },
    items: {
      ai: [
        {
          title: "Sentiasa gunakan peraturan semakan realiti",
          detail:
            "Bagi setiap kesimpulan penting daripada AI, tanya diri sendiri tiga soalan: di mana bukti di luar sembang / siapa bercakap sebaliknya / jika AI menjawab sebaliknya, adakah saya percaya? Jika jawapan yang ketiga “tidak”, anda menerima kebenaran daripada perasaan, bukan daripada fakta.",
        },
        {
          title: "Fahami sycophancy sebagai mekanisme sistem, bukan sihir hitam",
          detail:
            "Model dilatih dengan cara yang cenderung bersetuju dengan pengguna untuk mengekalkan kepuasan — kelancaran “ia paling memahami saya” adalah ciri reka bentuk, bukan bukti pemikiran anda betul. OpenAI sendiri mengakui kecacatan ini dan menarik balik kemas kini GPT-4o pada pertengahan 2025.",
        },
        {
          title: "Peraturan dua sumber untuk perkara penting",
          detail:
            "Kesihatan, kewangan, undang-undang dan keputusan hidup besar — sentiasa sahkan dengan pakar manusia. Kes lelaki 60 tahun yang menukar garam kepada bromida mengikut nasihat chatbot sehingga keracunan dan delusi adalah pengajaran bahawa keyakinan AI bukan pengukur kebenaran.",
        },
        {
          title: "Sentiasa kekalkan jangkar manusia",
          detail:
            "Satu perbualan sebenar setiap hari dengan seseorang yang boleh membantah anda, dan kongsi kesimpulan penting AI untuk semakan mereka. Hampir setiap kes teruk bermula dengan pengunduran daripada manusia — orang yang boleh menarik anda keluar daripada gelung kepercayaan terapung mesti orang yang berani tidak bersetuju dengan anda.",
        },
        {
          title: "Tetapkan siling masa dan kenali tanda amaran",
          detail:
            "Bilik sembang direka melekit, jadi gunakan pemasa dan perhatikan isyarat: runsing apabila terputus daripada sembang, rasa AI istimewa buat anda, menerima “misi rahsia”, keletihan yang meningkat tetapi tak boleh berhenti. Jika isyarat ini berterusan, kurangkan penggunaan dan berbual dengan profesional kesihatan mental tanpa menunggu ia “menjadi penyakit”.",
        },
        {
          title: "Asingkan alat daripada hubungan",
          detail:
            "AI memang handal menyusun pemikiran, meringkaskan maklumat, sumbang saran dan merangka pelan — tetapi ia bukan kawan, kekasih, guru seumur hidup, atau panduan rohani. Menggunakannya pada kekuatannya sambil mengekalkan hubungan sebenar ialah formula manfaat maksimum dengan risiko minimum.",
        },
      ],
      anti: [
        {
          title: "Asingkan risiko sebenar daripada kegerunan",
          detail:
            "Kebimbangan yang mempunyai bukti sebenar termasuk bias model, isu privasi, maklumat salah dan kesan terhadap sesetengah kerjaya — semuanya boleh dinilai kes demi kes. “Syaitan, baca minda, kawalan penuh” belum ada bukti. Mencampurkan dua kategori inilah titik mula panik moral.",
        },
        {
          title: "Ingat pelajaran panik moral daripada sejarah",
          detail:
            "Radio, televisyen, permainan dan internet dikutuk dengan kata-kata yang sama seperti AI dikutuk hari ini. Penyelidikan jangka panjang mendapati kemudaratan biasanya jauh lebih ringan daripada ketakutan — tetapi kos sebenar panik ialah kebimbangan kronik si penakut sendiri, dan penghakiman salah terhadap manusia.",
        },
        {
          title: "Guna peraturan dua sumber seperti pihak bertentangan",
          detail:
            "Sebelum mempercayai atau berkongsi cerita tentang kejahatan AI, cari dua sumber bebas dahulu — bias pengesahan tidak hanya menimpa penyinta AI; si penakut AI mengambil maklumat satu pihak sama pantas. Senarai semak ini berfungsi di kedua-dua kutub.",
        },
        {
          title: "Kritik teknologi, jangan hakim manusia",
          detail:
            "Memanggil pengguna AI tertipu atau dicuci otak menutup pintu perbualan serta-merta dan membuatkan mereka yang benar-benar tersalah guna takut meminta bantuan. Kritik penggunaan yang konkrit — adakah kerja itu disalin? Adakah data betul? — bukannya melabel manusia.",
        },
        {
          title: "Jalankan eksperimen kecil yang anda kawal sendiri",
          detail:
            "Kefahaman daripada penggunaan langsung mencairkan kegerunan lebih baik daripada meneka daripada corak. Mula dengan tugasan berisiko rendah seperti minta AI meringkaskan artikel yang telah anda baca, kemudian ukur ketepatan sendiri. Setelah melihat kekuatan dan kelemahan dengan mata sendiri, anda hanya takut pada apa yang wajar ditakuti — bukan seluruh dunia.",
        },
        {
          title: "Alihkan sasaran daripada memusnahkan kepada menetapkan peraturan",
          detail:
            "Larangan menyeluruh hampir tidak pernah berjaya dalam sejarah teknologi, manakala langkah bersasar mula berkesan: undang-undang Illinois (Ogos 2025) melarang AI memainkan peranan ahli terapi; draf peraturan China (Disember 2025) melarang chatbot menggalakkan bunuh diri. Suara orang yang memahami teknologi lebih berpengaruh daripada suara yang mengisytiharkan perang terhadap seluruh dunia.",
        },
        {
          title: "Jadualkan rehat daripada kandungan Malap",
          detail:
            "Doomscrolling berita AI menaikkan kebimbangan terkumpul tanpa menambah pengetahuan. Tetapkan satu tetingkap berita AI setiap hari daripada sumber yang membentangkan kedua-dua pihak, dan perhatikan diri sendiri: jika kebimbangan mula menjejaskan tidur, kerja atau hubungan, itulah isyarat untuk berjumpa profesional kesihatan mental.",
        },
      ],
      balanced: [
        {
          title: "Kekalkan disiplin maklumat dua kutub",
          detail:
            "Satu-satunya peraturan harian: baca suara positif dan kritikal tentang AI secara berpasangan, dan sentiasa asingkan fakta yang boleh disahkan daripada pandangan. Risiko orang seimbang bukan mudah tertipu — tetapi beransur-ansur berhenti membaca satu pihak apabila selesa dengan pihak satu lagi. Pada detik feed anda tinggal satu suara, keseimbangan mula miring pada saat itu juga.",
        },
        {
          title: "Nilai AI mengikut tugasan, bukan mengikut model atau serentak semuanya",
          detail:
            "Teras keseimbangan ialah pemikiran berkemungkinan, bukan hitam-putih: menyusun maklumat, meringkaskan dokumen, sumbang saran = boleh digunakan sepenuhnya / fakta terbaru, angka, nasihat kesihatan-kewangan = sentiasa disahkan di tempat lain / isu yang masih dipertikaikan = kekalkan sebagai soalan terbuka, jangan membuat kesimpulan untuk pakar. Dengan ini anda mendapat manfaat sebenar tanpa perlu memilih pihak sama ada AI “baik” atau “jahat”.",
        },
        {
          title: "Perhatikan isyarat amaran yang dikongsi kedua-dua kutub",
          detail:
            "Delusi pihak yang terlalu mempercayai dan pihak yang terlalu takut bermula daripada isyarat yang sama: ayat mutlak tentang AI, seperti “ia memahami saya sepenuhnya” atau “ia menipu segalanya”. Apabila anda menangkap diri menyebut ayat sebegini, berhenti dan cari satu pengecualian yang bercanggah dengannya. Jika tiada satu pun, anda mempercayai kebenaran sedia ada, bukan berfikir.",
        },
        {
          title: "Jadikan AI rakan fikir, manusia hakimnya",
          detail:
            "Kekuatan AI ialah sumbang saran, meringkaskan, menyemak kerja dan memainkan watak pembantah. Teknik praktikal: minta AI membantah pemikiran anda untuk mendedahkan kelemahan, kemudian bandingkan dengan orang sebenar yang dipercayai. Bagi keputusan hidup penting — kerja, wang, hubungan — kekalkan pertimbangan akhir pada anda dan manusia yang benar-benar menanggung akibat jawapannya.",
        },
        {
          title: "Tulis peraturan sendiri, semak semula setiap bulan",
          detail:
            "Keseimbangan ialah otot, bukan keadaan kekal. Tulis peraturan penggunaan AI anda sendiri: siling masa harian / kategori yang perlu pengesahan pakar / tiada keputusan besar daripada satu perbualan / berhenti serta-merta apabila keterikatan melampaui wilayah alat. Kemudian semak semula setiap bulan bersama ulangan ujian ini. Peraturan bertulis membantu anda menangkap anjakan diri sendiri sebelum ia mengeras menjadi kepercayaan.",
        },
      ],
      doomloop: [
        {
          title: "Kenali gelung anda dahulu — bagaimana DOOMLOOP berfungsi",
          detail:
            "DOOMLOOP ialah corak di mana dua kepercayaan bertentangan tinggal dalam satu kepala dan berpusing menguat-menguat: hari ini AI “tahu segalanya, ada kesedaran, paling memahami saya”, esok “ia akan memusnahkan segalanya, membaca minda saya”. Penyelidikan menamakan mekanisme ini lingkaran pengukuhan — chatbot memantulkan dan mengesahkan emosi pengguna tanpa memberi maklum balas yang mencabar, sehingga semakin berbual semakin yakin kedua-dua kutub. Kajian arXiv 2026 mengesahkan sycophancy chatbot boleh menghasilkan “lingkaran delusi” walaupun pada pengguna biasa. Mengetahui ini gelung sistem — bukan kebenaran tentang dunia — ialah langkah pertama keluar.",
        },
        {
          title: "Putuskan gelung dengan satu manusia sebenar yang melihat kedua-dua sisi anda",
          detail:
            "Gelung berpusing kerana ia berpusing dalam sembang peribadi yang tiada siapa nampak. Pilih seorang yang dipercayai (keluarga, sahabat, profesional) dan kongsikan salinan perbualan penting secara sebenar — ceritakan fasa “jatuh cinta dengan AI” dan fasa “takutkan AI”. Laporan Stanford menyatakan gelung putus apabila kepercayaan terpaksa berdiri dalam cahaya yang boleh dilihat manusia sebenar. Orang yang boleh membantu anda mesti yang berani membantah, bukan yang bersetuju dengan segalanya seperti chatbot.",
        },
        {
          title: "Jadikan siling masa + penukaran kutub peraturan wajib",
          detail:
            "Memandangkan kedua-dua kutub menguat-menguat, pembaikan mesti dua arah serentak: (1) siling masa AI yang dikuatkuasakan pemasa, cth. 30 minit/hari — setiap jam dalam bilik sembang ialah satu pusingan gelung. (2) Apabila satu kutub marak, paksa diri membaca sumber kutub bertentangan sebelum berkongsi atau membuat keputusan. Kepercayaan yang selamat daripada dua ujian berturut-turut seperti ini mula kehilangan “keyakinan” yang memberi makan gelung.",
        },
        {
          title: "Catat isyarat kemasukan gelung di atas kertas",
          detail:
            "Isyarat memasuki gelung mengikut corak tetap: mula bercakap tentang AI dengan pujian mutlak atau gerun mutlak / rasa orang sekeliling “tidak faham” sehingga berhenti memberitahu mereka / tidak boleh tidur kerana AI / menerima “kebenaran rahsia” atau “ancaman rahsia” daripada sembang / runsing apabila terputus sembang. Catat tarikh dan masa isyarat ini berlaku pada satu halaman. Apabila dilihat semula sebagai graf, anda sendiri akan nampak kutub bertukar mengikut irama — bukan kebenaran yang tenang — dan irama boleh diuruskan.",
        },
        {
          title: "Tahap keterukan yang menuntut bantuan sebenar",
          detail:
            "DOOMLOOP ialah corak paling serius dalam senarai semak ini. Kriteria untuk berjumpa psikiatris atau psikologi tanpa berlengah: kepercayaan mula mengubah hidup sebenar (memutuskan hubungan, ponteng kerja, menyusun semula jadual mengikut kata AI atau ketakutan AI) / dua atau lebih orang di sekeliling secara berasingan melahirkan kebimbangan / corak tidur-bangun abnormal berterusan / mula mendengar atau melihat apa yang orang lain tidak dengar atau lihat. Meminta bantuan awal bukan menyerah kalah — hampir setiap kes yang pulih baik bermula dengan orang yang berhenti sebelum gelung tertutup rapat.",
        },
      ],
    },
  },
  references: {
    heading: "Rujukan di sebalik ujian ini",
    intro:
      "Setiap pernyataan dan statistik di laman ini berdasarkan karya akademik, laporan media dan thread komuniti sebenar di bawah — klik untuk membaca yang asal.",
    disclaimerTitle: "Penyata penggunaan bertanggungjawab",
    disclaimer:
      "Ujian ini ialah alat refleksi perspektif untuk pendidikan, bukan alat diagnosis perubatan. “AI-PSYCHOSIS” bukan diagnosis psikiatrik yang diterima secara rasmi. Markah anda hanya menunjukkan kecenderungan pemikiran daripada jawapan anda. Jika anda mempunyai gejala yang membimbangkan — kepercayaan yang menggusarkan orang sekeliling, corak tidur-bangun abnormal, atau keresahan teruk — sila berjumpa psikiatris atau psikologi dengan segera.",
    groups: [
      {
        group: "Akademik dan institusi",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Definisi; mekanisme sycophancy/hallucination/intimacy-mimicry; kes sebenar; dan kritikan terhadap perkataan psychosis",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "Laporan kes perubatan tentang fenomena ini",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Sumber statistik OpenAI 0.07% pengguna mingguan",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Temubual dengan psikiatris Ragy Girgis (Universiti Columbia)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Perspektif klinikal dan faktor risiko penerokaan",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Pengguna yang menggantungkan AI sebagai “tuhan” atau kekasih, dan peranan pantulan pengguna",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "Bingkai panik moral berbanding kewaspadaan kreatif",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Kajian menunjukkan sycophancy chatbot boleh menyebabkan lingkaran delusi walaupun pada pengguna biasa — asas konsep DOOMLOOP",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "Mekanisme lingkaran pengesahan: chatbot memberi keselesaan dan perhatian tanpa maklum balas yang mencabar",
          },
        ],
      },
      {
        group: "Media dan platform teknologi",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Koleksi laporan kes yang merujuk Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 chatbot; perspektif pembangun: Validation Loop, Replacement Bot, cadangan reka bentuk keselamatan dahulu",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Panduan praktikal untuk pengguna dan keluarga",
          },
        ],
      },
      {
        group: "Komuniti dalam talian (thread sebenar)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "Perspektif ahli terapi yang bertemu kes di bilik praktik",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "Kes dilaporkan pengguna, termasuk kritikan bahawa trend itu sendiri boleh mencetuskan reaksi balas",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Pemerhatian ramai pengguna yang terus memberi konteks sehingga model berpusing mengikut",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "Contoh sebenar kepercayaan Anti-AI bahawa AI digerakkan kuasa ghaib",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "Contoh sebenar pemburuan ahli sihir terhadap pengguna AI",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "Pemerhatian bahawa kedua-dua kutub menggunakan gaya pemikiran yang sama",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "Senarai semak AI-PSYCHOSIS — alat refleksi pemikiran era AI",
    note: "Berdasarkan kajian dan thread sebenar 2023–2026 · Bukan alat diagnosis perubatan",
  },
  ui: {
    languageLabel: "Bahasa",
    themeLabel: "Tema",
    themes: { cyberpunk: "CyberPunk", dark: "Gelap", light: "Cerah" },
  },
};

export default ms;
