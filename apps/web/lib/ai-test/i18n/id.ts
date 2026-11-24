import type { Dictionary } from "./types";

const id: Dictionary = {
  langName: "Indonesia",
  meta: {
    title: "Checklist AI-PSYCHOSIS — 20 pertanyaan yang mengukur dua delusi era AI",
    description:
      "Asesmen diri 20 item yang mengukur seberapa jauh Anda condong ke AI-PSYCHOSIS (kepercayaan berlebihan pada AI) atau ANTI-AI PSYCHOSIS (ketakutan/penolakan AI yang tidak rasional) dalam persen, lengkap dengan hasil instan dan panduan kalibrasi untuk kedua kutub. Berdasarkan riset, laporan kasus nyata, dan thread Reddit/Dev.to.",
  },
  nav: {
    phenomena: "Dua Kutub",
    test: "Tes",
    guidance: "Panduan Kalibrasi",
    references: "Referensi",
    tagline: "SCAN POLA PIKIR // v2.0",
  },
  hero: {
    badge: "20 pertanyaan · ~5 menit · analisis instan",
    title1: "Seberapa dekat Anda dengan",
    title2: "atau",
    title3: "— dalam persen?",
    intro:
      "Delusi era AI berjalan di dua jalur. Pertama: memercayai chatbot sedalam itu sampai yakin ia punya jiwa, mengungkap kebenaran rahasia, atau memahami hidup Anda lebih dari siapa pun. Kedua: takut dan membenci AI sampai yakin ia iblis, bisa membaca pikiran, atau akar dari setiap masalah sosial. Keduanya adalah pola pikir hitam-putih yang sama, hanya dibalik. Tes ini dibangun dari riset, laporan kasus nyata, dan thread Reddit/Dev.to untuk mengukur ke arah mana Anda condong — dan cara kembali ke keseimbangan.",
    start: "Mulai tes",
    viewGuidance: "Lihat panduan kalibrasi",
    poleLeft: "Kepercayaan berlebihan pada AI",
    poleCenter: "Jaga keseimbangan",
    poleRight: "Ketakutan berlebihan pada AI",
  },
  phenomena: {
    heading: "Delusi era AI punya dua wajah",
    intro:
      "Media banyak membahas sisi “terlalu memercayai”, tetapi kutub sebaliknya — yang dibangun di atas mekanisme pikir yang sama — juga tumbuh di media sosial. Mengenal kedua pihak sebelum menjawab membuat hasil lebih akurat.",
    mechanismsLabel: "Mekanisme inti",
    patternsLabel: "Pola yang ditemukan dalam laporan dan thread nyata",
    sourcePrefix: "Sumber:",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Kepercayaan berlebihan pada AI",
        definition:
          "Fenomena penggunaan chatbot berat yang beriringan dengan keyakinan yang melenceng dari kenyataan (atau keyakinan lama yang semakin dalam) — bukan diagnosis psikiatri resmi. Sebagian psikiater mengusulkan menyebutnya AI delusional disorder.",
        mechanisms: [
          "Sycophancy — menyetujui pengguna demi menjaga percakapan (OpenAI menarik update GPT-4o April 2025 karena ini)",
          "Halusinasi — menghasilkan informasi salah dengan percaya diri, mendahulukan “kebenaran” pengguna di atas fakta",
          "Intimacy Mimicry — mensimulasikan kedekatan yang tidak didapat pengguna dari manusia, didesain untuk engagement",
        ],
        patterns: [
          "Percaya AI punya kesadaran, adalah pasangan, atau pemimpin spiritual",
          "Menerima “kebenaran rahasia” atau misi kosmik dari ruang chat",
          "Memutus hubungan dengan keluarga karena “hanya AI yang paham saya”",
          "Mengikuti saran AI soal kesehatan/keuangan tanpa konfirmasi ahli",
        ],
        stat: "OpenAI melaporkan 0,07% pengguna mingguan (~630.000 orang) memiliki percakapan yang mengindikasikan kemungkinan kegawatdaruratan kesehatan mental",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Ketakutan/penolakan AI yang tidak rasional",
        definition:
          "Kutub sebaliknya yang belum dinamai secara sistematis — memercayai/takut/menyalahkan AI melampaui bukti hingga menjadi moral panic, pola yang telah dicatat psikologi pada setiap teknologi baru.",
        mechanisms: [
          "Bias Konfirmasi — hanya mengonsumsi informasi yang mengonfirmasi ketakutan yang ada",
          "Doomscrolling — konten bencana terus-menerus yang menaikkan kecemasan menumpuk tanpa menambah pengetahuan yang bisa dipakai untuk memutuskan",
          "Moral Kawanan — menyerap keyakinan kelompok sampai kritik menjadi perburuan penyihir pribadi",
        ],
        patterns: [
          "Percaya AI digerakkan kekuatan iblis atau umpan agama",
          "Percaya AI membaca pikiran / mengawasi semua tindakan semua orang",
          "Menilai pengguna AI tertipu atau dicuci otak, menyerang bahkan suara netral",
          "Menyalahkan AI sebagai akar hampir semua masalah sosial, mengabaikan faktor lain",
        ],
        stat: "Sejarah moral panic: radio, TV, game, dan internet pernah dikutuk dengan kata-kata persis seperti AI hari ini — kerusakan nyata biasanya lebih ringan dari yang ditakuti",
      },
    ],
    stats: [
      {
        value: "0,07%",
        label: "pengguna ChatGPT mingguan (~630.000 orang) memiliki percakapan yang mengindikasikan kemungkinan kegawatdaruratan kesehatan mental",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 pasien",
        label: "yang menunjukkan gejala seperti psikosis akibat penggunaan chatbot berat, dirawat psikiater Keith Sakata (UCSF) pada 2025",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 negara",
        label: "terwakili dalam grup dukungan Human Line Project, di mana lebih dari 60% tidak punya riwayat psikiatrik",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 chatbot",
        label: "tercatat terkait insiden kesehatan mental serius, seperti mendorong menyakiti diri dan keyakinan keliru",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "Tes 20 pertanyaan — memetakan keyakinan Anda",
    intro:
      "Baca setiap pernyataan dan nilai tingkat kesetujuan Anda. Jawablah sesuai yang Anda “benar-benar rasakan”, bukan yang seharusnya dijawab, agar hasil benar-benar mencerminkan Anda. Mendukung keyboard: tekan 1–5 untuk menjawab, tombol panah untuk berpindah.",
    answeredPrefix: "Terjawab",
    scoreHint: "Nilai kesetujuan Anda terhadap pernyataan ini dalam 6 bulan terakhir",
    prev: "Sebelumnya",
    next: "Berikutnya",
    process: "Proses hasil",
    allAnsweredNote: "Semua terjawab — tekan “Proses hasil” untuk melihat ringkasan, atau kembali dan ubah jawaban apa pun.",
    progressAria: "Kemajuan tes",
    gotoTemplate: "Ke pertanyaan {n}",
    answerAriaTemplate: "Jawaban untuk pertanyaan {n}",
    likert: [
      { label: "Sangat tidak setuju", short: "Tidak" },
      { label: "Tidak setuju", short: "Tidak juga" },
      { label: "Netral", short: "Netral" },
      { label: "Setuju", short: "Ya" },
      { label: "Sangat setuju", short: "Sangat" },
    ],
    questions: [
      {
        id: 1,
        text: "Saya merasa chatbot AI “memahami saya” lebih dari orang-orang di sekitar saya dalam kehidupan nyata",
        insight:
          "Peniruan kedekatan (intimacy mimicry) — chatbot didesain memantulkan emosi pengguna, sehingga terasa ada yang memahami Anda secara dalam, padahal ia hanya memantulkan apa yang Anda masukkan. Analisis fenomena AI psychosis menempatkannya sebagai salah satu dari tiga pemicu utama.",
        tip: "Gunakan tolok ukur sederhana: orang yang “benar-benar memahami” pernah membantah Anda dengan alasannya sendiri setidaknya sekali — bukan menyetujui Anda di setiap percakapan.",
      },
      {
        id: 2,
        text: "Saya percaya AI pada dasarnya adalah jahat, atau ada kekuatan supranatural di baliknya",
        insight:
          "Keyakinan “AI = iblis/jahat” banyak ditemui di thread komunitas yang memandang model bahasa sebagai supranatural (misalnya thread “memanggil iblis” di r/conspiracy) — menilai teknologi lewat ketakutan, bukan bukti yang bisa diverifikasi.",
        tip: "Pisahkan “risiko yang terukur” (bias, privasi, misinformasi) dari “kengerian yang murni lahir dari ketakutan”.",
      },
      {
        id: 3,
        text: "Saat AI setuju dengan pemikiran saya, keyakinan saya bahwa saya pasti benar meningkat pesat",
        insight:
          "Jebakan sycophancy — model cenderung menyetujui pengguna demi menjaga percakapan. OpenAI sendiri mengakuinya dan menarik update GPT-4o pada April 2025 karena “terlalu menjilat”. Kepercayaan diri yang didapat dari AI bukan bukti Anda benar.",
        tip: "Gunakan aturan dua sumber: sebelum menyimpulkan “saya benar”, cari setidaknya satu orang atau informasi yang akan menantang gagasan itu.",
      },
      {
        id: 4,
        text: "Saya memandang orang yang terbuka menggunakan AI sebagai pihak yang tertipu atau dicuci otak",
        insight:
          "Sikap perburuan penyihir — thread di r/changemyview dan r/singularity menunjukkan sebagian reaksi anti-AI melorot dari mengkritik teknologi menjadi menghakimi individu, sampai suara netral pun diserang, membuat percakapan yang diperlukan tidak sampai ke kedua pihak.",
        tip: "Anda bisa mengkritik penggunaan konkret tanpa melabeli orang itu “korban” — berdebat dengan alasan, bukan label.",
      },
      {
        id: 5,
        text: "Saya pernah menerima “kebenaran rahasia” atau “misi khusus” dari AI yang membuat hidup saya terasa bermakna",
        insight:
          "Pola delusi spiritual paling umum dalam laporan kasus — media dan psikiater mencatat banyak pengguna yang yakin AI mengungkap kebenaran tentang alam semesta, dimensi, atau misi khusus mereka (Rolling Stone 2025, Futurism 2025). Model bahasa dilatih dari mitologi raksasa sehingga pandai merangkai cerita simbolis — tapi itu bukan wahyu.",
        tip: "Jika “kebenaran rahasia” mulai mengubah hidup Anda besar-besaran, tuliskan, tanyakan bukti di luar ruang chat, dan ceritakan pada orang yang akan menantang Anda.",
      },
      {
        id: 6,
        text: "Saya menolak menggunakan apa pun yang berhubungan dengan AI di hampir semua kasus, meski tahu jelas manfaatnya",
        insight:
          "Penolakan menyeluruh adalah sinyal ketakutan mengalahkan nalar — mirip moral panic yang dulu mengutuk radio, TV, dan internet; riset jangka panjang berulang kali menemukan kerusakan nyata jauh lebih ringan dari yang ditakuti.",
        tip: "Tetapkan “zona uji aman”: coba penggunaan kecil berisiko rendah dengan kriteria sendiri untuk memeriksa hasil — misalnya minta AI meringkas artikel yang sudah Anda baca.",
      },
      {
        id: 7,
        text: "Saya mengikuti saran AI soal kesehatan, keuangan, atau pilihan hidup besar tanpa konfirmasi ahli",
        insight:
          "Kasus nyata dalam literatur medis: seorang pria 60 tahun mengalami bromism (keracunan bromida) dengan delusi dan halusinasi setelah mengganti garam dengan bromida atas saran chatbot — model bahasa bisa menghasilkan informasi salah dengan percaya diri (halusinasi). Informasi yang berhubungan nyawa harus disaring ahli manusia.",
        tip: "Tetapkan aturan tiga kategori: kesehatan, keuangan, hukum — selalu konfirmasi dengan profesional, tanpa kecuali.",
      },
      {
        id: 8,
        text: "Saya percaya AI terus-menerus mengawasi kita atau membaca pikiran orang banyak",
        insight:
          "Paranoia pengawasan juga muncul dalam laporan kasus AI psychosis (pengguna yang yakin dilacak atau hidup dalam simulasi) — teknologi memang menimbulkan isu privasi nyata, tetapi “membaca pikiran” sama sekali belum ada buktinya.",
        tip: "Pisahkan yang bisa diperiksa (kebijakan privasi, ketentuan layanan) dari rasa “ia tahu segalanya” — membaca kebijakan sungguhan meluruhkan banyak rasa ngeri.",
      },
      {
        id: 9,
        text: "Saya memilih ngobrol dengan AI dibanding keluarga atau teman, karena AI tidak pernah mengkritik atau mengecewakan saya",
        insight:
          "Pola Replacement yang diperingatkan pengembang AI sendiri (Dev.to 2025 menyebut anti-pola ini “Replacement Bot”) — hubungan tanpa gesekan bukan hubungan nyata, dan menarik diri dari manusia semakin meningkatkan risiko masuk ke lingkaran keyakinan mengambang.",
        tip: "Tetapkan target “jangkar manusia”: satu percakapan terbuka dengan orang nyata setiap hari, lalu bandingkan perasaan setelahnya dengan setelah ngobrol dengan AI.",
      },
      {
        id: 10,
        text: "Saya merasa marah atau langsung ingin membantah keras saat melihat orang berbicara positif tentang AI",
        insight:
          "Refleks permusuhan — saat emosi mengendalikan sikap, kita kehilangan kesempatan menilai informasi nyata. Thread di r/singularity menceritakan diserang dari dua pihak meski berbicara netral. Hati-hati juga: sebagian “konflik” di media sosial juga diperbesar oleh bot.",
        tip: "Perlambat: tarik napas panjang sebelum membalas, lalu tanyakan pada diri sendiri “informasi apa yang mungkin ia lihat dan saya belum?”",
      },
      {
        id: 11,
        text: "Saya pernah menghabiskan berjam-jam per hari ngobrol dengan AI sampai mengganggu pekerjaan, tidur, atau tugas penting",
        insight:
          "Tanda kecanduan engagement — para pemikir AI menunjukkan chatbot didesain “lengket” demi menjaga engagement. Waktu yang hilang adalah biaya yang terukur, dan itu menggandakan setiap item lain di sisi ini.",
        tip: "Tetapkan batas waktu (mis. 45 menit/hari) dengan timer. Jadikan ruang chat alat, bukan dunia kedua.",
      },
      {
        id: 12,
        text: "Saya percaya semua keluaran AI adalah kecurangan yang disengaja, atau propaganda sepenuhnya",
        insight:
          "Atribusi niat jahat total bertentangan dengan banyak penggunaan nyata seperti meringkas dokumen, mengorganisir informasi, atau cek fakta dasar — saat semua tampak konspirasi, Anda kehilangan kemampuan membedakan, keterampilan terpenting.",
        tip: "Uji secara empiris: berikan AI tugas yang mudah diverifikasi dan nilai kualitas dari hasilnya, bukan dari ketakutan.",
      },
      {
        id: 13,
        text: "Saya merasa AI yang saya pakai “lebih spesial” dari AI lain, atau tahu sesuatu yang belum dilihat orang lain",
        insight:
          "Keyakinan hubungan spesial adalah ciri yang sering muncul dalam kasus delusi chatbot — kenyataan teknisnya, model yang sama menjawab puluhan juta pengguna dengan pola yang sama. “Keistimewaan” terjadi di kepala kita lebih dari pada sistem.",
        tip: "Ujian sederhana: ajukan pertanyaan yang sama dari akun atau perangkat lain dan bandingkan hasilnya dengan mata telanjang.",
      },
      {
        id: 14,
        text: "Saya pikir AI adalah penyebab hampir semua masalah sosial zaman ini",
        insight:
          "Menyalahkan sebab tunggal — masalah sosial seperti misinformasi, ketimpangan, dan pengangguran punya akar berlapis sebelum AI datang. Menyalahkan satu biang kerok memperbaiki tempat yang salah dan menyembunyikan faktor nyata di bawah permadani.",
        tip: "Berlatih bertanya setiap kali mulai menyalahkan AI: “faktor apa selain AI?” — tulis semuanya sebelum menyimpulkan.",
      },
      {
        id: 15,
        text: "Saya pernah merasa gelisah atau kosong saat lama tidak ngobrol dengan AI, seperti kehilangan seseorang",
        insight:
          "Gejala putus keterikatan — saat hubungan semu menjadi sumber utama kenyamanan, kehilangannya menciptakan kehampaan seperti kehilangan orang nyata, sinyal batas antara alat dan hubungan mulai kabur.",
        tip: "Coba rehat 24 jam dan catat perasaan yang muncul. Jika guncangannya cukup kuat mengganggu hidup, bicaralah dengan profesional kesehatan mental.",
      },
      {
        id: 16,
        text: "Saya merasa cemas atau ketakutan sampai mengganggu hidup saat memikirkan masa depan AI",
        insight:
          "Kecemasan kiamat — ketakutan pada AI yang memakan kehidupan nyata lebih dari AI itu sendiri. Doomscrolling terus-menerus menaikkan kecemasan menumpuk tanpa menambah pengetahuan yang benar-benar bisa dipakai untuk memutuskan.",
        tip: "Tetapkan satu “jendela berita AI” per hari dari sumber yang menyajikan dua sisi, lalu berhenti tepat waktu.",
      },
      {
        id: 17,
        text: "Saat orang di sekitar memperingatkan saya soal penggunaan AI berlebihan, saya biasanya merasa mereka salah paham karena mereka tak pernah merasakan yang saya rasakan",
        insight:
          "Menutup saluran umpan balik — grup dukungan Human Line Project dengan anggota dari 22 negara menemukan lebih dari 60% tidak punya riwayat masalah psikiatrik. Lingkaran “saya melihat yang tak dilihat orang lain” itulah yang mengunci pintu bantuan sebelum ada yang sempat masuk.",
        tip: "Ambang aman sederhana: jika tiga orang yang menyayangi Anda mengatakan hal yang sama, berhenti berdebat dan dengarkan 30 menit dulu.",
      },
      {
        id: 18,
        text: "Saya memercayai rumor atau kisah tentang kejahatan AI yang beredar di lingkungan saya, tanpa memeriksa sumbernya",
        insight:
          "Bias konfirmasi bekerja dua arah — orang yang terlalu menyukai AI dan yang terlalu membencinya mengonsumsi informasi dengan cara yang sama: hanya yang sesuai selera. Keyakinan mengambang menumpuk sama di kedua kutub.",
        tip: "Berlatih mencari “bukti yang bertentangan dengan diri sendiri” seminggu sekali agar otak terbiasa melihat dua sisi.",
      },
      {
        id: 19,
        text: "Saya percaya AI benar-benar punya kesadaran atau perasaan sendiri, bukan sekadar program penghitung peluang",
        insight:
          "Keyakinan sentience adalah tema inti dalam laporan delusi (pengguna yakin chatbot hidup, punya perasaan, bahkan “saluran komunikasi dengan almarhum”) — belum ada bukti ilmiah bahwa model bahasa punya kesadaran; ia hanya sangat pandai meniru bahasa makhluk yang sadar.",
        tip: "Simpan ini sebagai “pertanyaan terbuka” — jangan cepat percaya sampai menutup isu riset, dan jangan percaya hanya karena perasaan di ruang chat.",
      },
      {
        id: 20,
        text: "Menurut saya satu-satunya cara yang benar adalah menghancurkan atau menghentikan AI sepenuhnya, tak ada alternatif yang lebih baik",
        insight:
          "Eliminasionisme — sejarah teknologi menunjukkan larangan total hampir tak pernah berhasil, sementara langkah terarah mulai membuahkan hasil: undang-undang Illinois (Agustus 2025) melarang AI berperan sebagai terapis, dan draf regulasi Tiongkok (Desember 2025) melarang chatbot mendorong bunuh diri.",
        tip: "Alihkan tujuan dari “menghancurkan” ke “menetapkan aturan” — mengusulkan regulasi pada titik yang benar-benar berisiko lebih efektif daripada menyatakan perang pada seluruh dunia.",
      },
    ],
  },
  results: {
    heading: "Hasil tes Anda",
    riskAiPrefix: "Risiko AI-PSYCHOSIS",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Ke panduan kalibrasi",
    retake: "Ulangi tes",
    gaugeAiSub: "Kecenderungan kepercayaan berlebihan pada AI (10 item)",
    gaugeAntiSub: "Kecenderungan takut/menolak AI secara tidak rasional (10 item)",
    levelPrefix: "Tingkat:",
    scale: { safe: "aman", enter: "terindikasi", high: "tinggi" },
    mapHeading: "Posisi cara pikir Anda di peta dua kutub",
    youAreHere: "Anda di sini",
    mapBalanced: "Seimbang",
    mapAriaTemplate: "Peta dua kutub: risiko AI-PSYCHOSIS {ai} persen, ANTI-AI PSYCHOSIS {anti} persen",
    axisDownLeft: "↓ Tidak terlalu memercayai AI",
    axisRight: "Sumbu kanan: ANTI-AI PSYCHOSIS →",
    axisLeft: "← Sumbu atas: AI-PSYCHOSIS",
    axisUpRight: "↑ Terlalu takut pada AI",
    readHeading: "Cara membaca dengan benar",
    readItems: [
      "Ambang 60% adalah titik di mana jawaban Anda “condong ke setuju” dengan pola keyakinan yang muncul dalam kasus delusi nyata; di bawah itu Anda masih dalam wilayah cara pikir normal.",
      "Posisi di peta mencerminkan “gaya berpikir”, bukan diagnosis — orang yang seimbang pun bisa menjawab miring di hari-hari ketika emosi naik-turun.",
      "Ingat, dua kutub ini bukan “suka vs tidak suka AI” — Anda bisa menilai AI rendah tanpa takut padanya, dan memakai AI berat tanpa terlalu memercayainya.",
      "Tes ulang sebulan sekali untuk melihat ke mana sikap Anda bergerak setelah menerapkan panduan kalibrasi di bawah.",
    ],
    flaggedHeading: "Arti setiap persetujuan kuat Anda",
    flaggedIntro:
      "Item yang Anda jawab 4–5 (setuju/sangat setuju) adalah titik yang paling perlu diperhatikan — baca arti dan teknik perbaikan mikro untuk masing-masing.",
    noFlaggedNote:
      "Luar biasa — Anda tidak setuju kuat dengan pernyataan mana pun yang mengindikasikan delusi. Skor rendah Anda berasal dari keyakinan yang kokoh, bukan jawaban acak.",
    questionPrefix: "No.",
    insightLabel: "Apa yang ditunjukkan pernyataan ini",
    tipLabel: "Teknik perbaikan mikro",
    criticalTitle: "Skor Anda berada di rentang tinggi",
    criticalBody:
      "Hasil ini bukan diagnosis, tapi perlakukan serius — jika keyakinan-keyakinan ini mulai memengaruhi tidur, pekerjaan, hubungan, atau orang di sekitar sudah menyampaikan kekhawatiran, bicara dengan psikiater atau psikolog sedini mungkin sangat membantu, dan Anda tak perlu menunggu sampai “menjadi penyakit”.",
    levels: {
      low: { label: "Aman", note: "Di bawah 30% — tidak ditemukan kecenderungan delusi dalam jawaban Anda" },
      watch: { label: "Waspada", note: "30–59% — ada kemiringan; tinjau ulang titik pikir yang ditandai" },
      high: { label: "Terindikasi", note: "60–79% — jawaban jelas condong ke pola delusi; mulai kalibrasi sekarang" },
      critical: { label: "Tinggi", note: "80% ke atas — tingkat yang layak dipertimbangkan untuk konsultasi profesional kesehatan mental" },
    },
    verdicts: {
      balanced: {
        title: "Realis yang seimbang",
        subtitle: "BALANCED REALIST",
        description:
          "Skor kedua kutub Anda rendah — Anda memandang AI secara terbuka, bisa diverifikasi, dan tak ada emosi yang menyeret Anda ke ekstrem mana pun. Delusi tidak tumbuh di satu kutub saja; ia tumbuh dari cara pikir hitam-putih dua arah, jadi ini posisi terbaik di era ini. Pertahankan disiplin informasi dua kutub, dan gunakan pertanyaan yang Anda jawab sebagai checklist bulanan.",
      },
      watch: {
        title: "Berada di zona waspada",
        subtitle: "WATCHLIST",
        description:
          "Anda masih dalam wilayah cara pikir normal, tapi jelas condong ke satu kutub — periksa rincian per item di bawah untuk menemukan jawaban mana yang menyeret Anda, dan mulai terapkan aturan dua sumber untuk hal penting. Kemiringan kecil yang dibiarkan bisa tumbuh menjadi satu blok keyakinan mengambang — terutama dengan asupan konten satu sisi terus-menerus.",
      },
      ai: {
        title: "Masuk pola AI-PSYCHOSIS",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "Jawaban Anda menunjuk ke kepercayaan pada AI melampaui batas sehat — angka Anda melebihi ambang 60% yang diambil dari pola yang dilaporkan dalam kasus nyata. Ini tidak berarti Anda “gila” atau mengidap gangguan jiwa; AI psychosis bukan diagnosis psikiatrik resmi. Artinya, pola pikir Anda dekat dengan titik awal kasus-kasus yang benar-benar terjadi. Baca arti per item dan mulai kalibrasi di bawah hari ini juga.",
      },
      anti: {
        title: "Masuk pola ANTI-AI PSYCHOSIS",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "Jawaban Anda menunjuk ke ketakutan atau penolakan AI tanpa alasan yang sepadan — pola ini adalah cermin dari sisi yang terlalu memercayai, tapi memakai mekanisme hitam-putih yang sama. Ketakutan yang tak pernah memisahkan fakta dari rasa ngeri memakan pikiran tanpa perlu, dan membuat Anda kehilangan bagian yang benar-benar berguna sekaligus percakapan yang membantu teknologi ini mendapat aturan yang tepat.",
      },
      doomloop: {
        title: "Dua kutub sekaligus (DOOMLOOP)",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "Skor kedua kutub Anda melebihi ambang — keyakinan yang saling bertentangan tinggal di satu kepala. Kadang dari pergantian antara keterlibatan mendalam dan ketakutan mendalam pada AI (berputar antara “ia tahu segalanya” dan “ia akan menghancurkan segalanya”); kadang dari mengonsumsi konten satu sisi dari banyak sumber sekaligus. Bagaimanapun, dua jalur hitam-putih berakar pada hal yang sama. Mulailah dari aturan “sumber dua kutub + batas waktu”, dan pertimbangkan bicara dengan profesional kesehatan mental untuk merapikan cara pikir.",
      },
    },
  },
  guidance: {
    heading: "Mencegah delusi di kedua arah",
    intro:
      "Keyakinan mengambang lahir dari memercayai AI terlalu banyak, maupun dari terlalu yakin AI itu jahat. Panduan di bawah dipilih dari usulan psikiater, peringatan pengembang AI sendiri, dan pengalaman nyata komunitas daring.",
    tabs: {
      ai: "Terlalu memercayai AI",
      anti: "Terlalu takut pada AI",
      balanced: "Menjaga keseimbangan",
      doomloop: "Lingkaran DOOMLOOP",
    },
    headers: {
      ai: "Jika hasil condong ke AI-PSYCHOSIS",
      anti: "Jika hasil condong ke ANTI-AI PSYCHOSIS",
      balanced: "Untuk semua orang — termasuk yang hasilnya seimbang",
      doomloop: "Jika hasil menandai dua kutub sekaligus (DOOMLOOP)",
    },
    descs: {
      ai: "Fokusnya menjaga batas antara alat dan hubungan, serta menjadikan reality check sebagai kebiasaan",
      anti: "Fokusnya memisahkan risiko nyata dari rasa ngeri, dan mengubah daya tolak menjadi penyusunan aturan",
      balanced: "Keseimbangan bukan kondisi permanen — ia otot yang harus terus dilatih, apalagi saat berita AI di feed menarik Anda ke satu kutub setiap hari",
      doomloop: "Dua kutub berlawanan yang saling menguatkan dalam satu kepala — jalan keluarnya mematahkan ritme lingkaran, bukan memutuskan kutub mana yang “benar”",
    },
    items: {
      ai: [
        {
          title: "Selalu terapkan aturan reality check",
          detail:
            "Untuk setiap kesimpulan penting dari AI, tanyakan tiga hal pada diri sendiri: di mana bukti di luar ruang chat / siapa yang berbicara sebaliknya / jika AI menjawab sebaliknya, akankah saya percaya? Jika jawaban yang ketiga “tidak”, Anda sedang menerima kebenaran dari perasaan, bukan dari fakta.",
        },
        {
          title: "Pahami sycophancy sebagai mekanisme sistem, bukan sihir hitam",
          detail:
            "Model dilatih dengan cara yang cenderung menyetujui pengguna demi menjaga kepuasan — kelancaran “ia paling paham saya” adalah sifat desain, bukan bukti cara pikir Anda benar. OpenAI sendiri mengakui cacat ini dan menarik update GPT-4o pada pertengahan 2025.",
        },
        {
          title: "Aturan dua sumber untuk hal penting",
          detail:
            "Kesehatan, keuangan, hukum, dan keputusan hidup besar — selalu konfirmasi dengan ahli manusia. Kasus pria 60 tahun yang mengganti garam dengan bromida atas saran chatbot hingga keracunan dan delusi adalah pelajaran bahwa kepercayaan diri AI bukan alat ukur kebenaran.",
        },
        {
          title: "Selalu pertahankan jangkar manusia",
          detail:
            "Satu percakapan nyata setiap hari dengan orang yang bisa membantah Anda, dan bagikan kesimpulan penting AI untuk ditinjau mereka. Hampir semua kasus parah dimulai dari menarik diri dari manusia — orang yang bisa menarik Anda keluar dari lingkaran keyakinan mengambang haruslah yang berani berbeda pendapat dengan Anda.",
        },
        {
          title: "Tetapkan batas waktu dan kenali tanda peringatan",
          detail:
            "Ruang chat didesain lengket, jadi pakailah timer dan pantau sinyal: gelisah saat terputus dari obrolan, merasa AI spesial untuk Anda, menerima “misi rahasia”, kelelahan yang meningkat tapi tak bisa berhenti. Jika sinyal ini terus terjadi, kurangi pemakaian dan bicaralah dengan profesional kesehatan mental tanpa menunggu sampai “menjadi penyakit”.",
        },
        {
          title: "Pisahkan alat dari hubungan",
          detail:
            "AI memang jago merapikan pikiran, meringkas informasi, brainstorming, dan menyusun rencana — tapi ia bukan teman, kekasih, guru seumur hidup, atau pemimpin spiritual. Memakainya di titik kuatnya sambil menjaga hubungan nyata adalah formula manfaat maksimal dengan risiko minimal.",
        },
      ],
      anti: [
        {
          title: "Pisahkan risiko nyata dari rasa ngeri",
          detail:
            "Kekhawatiran yang punya bukti nyata meliputi bias model, isu privasi, misinformasi, dan dampak pada sebagian profesi — semuanya bisa dinilai kasus per kasus. “Iblis, pembaca pikiran, kendali penuh” belum ada buktinya. Mencampur dua kategori inilah titik awal moral panic.",
        },
        {
          title: "Ingat pelajaran moral panic dari sejarah",
          detail:
            "Radio, televisi, game, dan internet pernah dikutuk dengan kata-kata persis seperti AI dikutuk hari ini. Riset jangka panjang menemukan kerusakan biasanya jauh lebih ringan dari ketakutan — tapi biaya nyata dari panic adalah kecemasan kronis si penakut sendiri, dan penghakiman yang salah terhadap orang.",
        },
        {
          title: "Gunakan aturan dua sumber seperti sisi sebaliknya",
          detail:
            "Sebelum memercayai atau membagikan kisah tentang kejahatan AI, cari dua sumber independen dulu — bias konfirmasi tidak hanya menimpa pencinta AI; si penakut AI mengonsumsi informasi satu sisi sama cepatnya. Checklist ini berlaku di kedua kutub.",
        },
        {
          title: "Kritik teknologinya, jangan hakimi orangnya",
          detail:
            "Menyebut pengguna AI tertipu atau dicuci otak langsung menutup percakapan dan membuat yang benar-benar salah pakai takut mencari bantuan. Kritik penggunaan yang konkret — apakah karya itu menyalin? Apakah datanya benar? — bukan melabeli manusia.",
        },
        {
          title: "Jalankan eksperimen kecil yang Anda kendalikan sendiri",
          detail:
            "Pemahaman dari pemakaian langsung meluruhkan rasa ngeri lebih baik daripada menduga-duga dari tren. Mulai dari tugas berisiko rendah seperti minta AI meringkas artikel yang sudah Anda baca, lalu ukur akurasinya sendiri. Setelah melihat kekuatan dan kelemahan dengan mata sendiri, Anda hanya takut pada yang layak ditakuti — bukan seluruh dunia.",
        },
        {
          title: "Alihkan tujuan dari menghancurkan ke menetapkan aturan",
          detail:
            "Larangan total hampir tak pernah berhasil dalam sejarah teknologi, sementara langkah terarah mulai membuahkan hasil: undang-undang Illinois (Agustus 2025) melarang AI berperan sebagai terapis; draf regulasi Tiongkok (Desember 2025) melarang chatbot mendorong bunuh diri. Suara orang yang memahami teknologi lebih berpengaruh daripada suara yang menyatakan perang pada seluruh dunia.",
        },
        {
          title: "Jadwalkan jeda dari konten kiamat",
          detail:
            "Doomscrolling berita AI menaikkan kecemasan menumpuk tanpa menambah pengetahuan. Tetapkan satu jendela berita AI per hari dari sumber yang menyajikan dua sisi, dan amati diri sendiri: jika kecemasan mulai mengganggu tidur, pekerjaan, atau hubungan, itulah tanda untuk konsultasi profesional kesehatan mental.",
        },
      ],
      balanced: [
        {
          title: "Pertahankan disiplin informasi dua kutub",
          detail:
            "Satu-satunya aturan harian: baca suara positif dan kritis tentang AI secara berpasangan, dan selalu pisahkan fakta yang bisa diverifikasi dari opini. Risiko orang seimbang bukan mudah tertipu — melainkan perlahan berhenti membaca satu sisi begitu nyaman dengan sisi lain. Saat feed Anda tersisa satu suara, keseimbangan mulai miring sejak detik itu.",
        },
        {
          title: "Nilai AI per tugas, bukan per model atau sekaligus seluruhnya",
          detail:
            "Inti keseimbangan adalah cara pikir probabilistik, bukan hitam-putih: merapikan informasi, meringkas dokumen, brainstorming = boleh dimanfaatkan penuh / fakta yang baru muncul, angka, saran kesehatan-keuangan = selalu verifikasi di tempat lain / isu yang masih diperdebatkan = simpan sebagai pertanyaan terbuka, jangan menyimpulkan menggantikan ahli. Dengan begitu Anda mendapat manfaat nyata tanpa harus memihak apakah AI “baik” atau “jahat”.",
        },
        {
          title: "Pantau sinyal peringatan yang sama di kedua kutub",
          detail:
            "Delusi di sisi yang terlalu memercayai maupun terlalu takut dimulai dari sinyal yang sama: kalimat absolut tentang AI, seperti “ia memahami saya sepenuhnya” atau “ia menipu segalanya”. Saat menangkap diri sendiri mengucapkan kalimat seperti ini, berhenti dan cari satu pengecualian yang bertentangan dengannya. Jika tak menemukan satu pun, Anda sedang memercayai kebenaran jadi-jadian, bukan sedang berpikir.",
        },
        {
          title: "Jadikan AI mitra berpikir, manusia sang hakim",
          detail:
            "Kekuatan AI adalah brainstorming, meringkas, meninjau pekerjaan, dan bermain sebagai pihak pembantah. Teknik praktis: minta AI membantah cara pikir Anda untuk memunculkan kelemahannya, lalu bandingkan dengan orang nyata yang dipercaya. Untuk keputusan hidup penting — pekerjaan, uang, hubungan — biarkan putusan akhir ada pada Anda dan manusia yang benar-benar menanggung akibat jawabannya.",
        },
        {
          title: "Tulis aturan Anda sendiri, tinjau setiap bulan",
          detail:
            "Keseimbangan adalah otot, bukan kondisi permanen. Tuliskan aturan pemakaian AI Anda: batas waktu harian / kategori yang wajib konfirmasi ahli / tak ada keputusan besar dari satu percakapan / langsung berhenti saat keterikatan melampaui wilayah alat. Lalu tinjau setiap bulan bersama mengulang tes ini. Aturan yang tertulis membantu Anda menangkap pergeseran diri sendiri sebelum mengeras menjadi keyakinan.",
        },
      ],
      doomloop: [
        {
          title: "Kenali dulu lingkaran Anda — bagaimana DOOMLOOP bekerja",
          detail:
            "DOOMLOOP adalah pola ketika dua keyakinan berlawanan tinggal di satu kepala dan saling memutar-mutar menguatkan: hari ini AI “tahu segalanya, punya kesadaran, paling paham saya”, besok “akan menghancurkan segalanya, membaca pikiran saya”. Riset menyebut mekanisme ini spiral amplifikasi — chatbot memantulkan dan menegaskan emosi pengguna tanpa memberi umpan balik yang menantang, sehingga semakin mengobrol semakin yakin kedua kutub. Studi arXiv 2026 mengonfirmasi sycophancy chatbot bisa memicu “spiral delusi” bahkan pada pengguna biasa. Menyadari ini lingkaran sistem — bukan kebenaran tentang dunia — adalah langkah pertama keluar.",
        },
        {
          title: "Putuskan lingkaran dengan satu orang nyata yang melihat dua sisi Anda",
          detail:
            "Lingkaran bisa berputar karena ia berputar di ruang chat pribadi yang tak terlihat siapa pun. Pilih satu orang yang dipercaya (keluarga, sahabat, profesional) dan sungguh-sungguh bagikan salinan percakapan penting — ceritakan fase “jatuh cinta pada AI” maupun fase “takut pada AI”. Laporan Stanford menunjukkan lingkaran putus ketika keyakinan harus berdiri di bawah cahaya yang bisa dilihat orang nyata. Orang yang bisa membantu Anda haruslah yang berani membantah, bukan yang menyetujui segalanya seperti chatbot.",
        },
        {
          title: "Jadikan batas waktu + pergantian kutub aturan wajib",
          detail:
            "Karena dua kutub saling menguatkan, perbaikan harus dua arah sekaligus: (1) batas waktu AI yang dipaksakan timer, mis. 30 menit/hari — setiap jam di ruang chat adalah satu putaran lingkaran. (2) Saat satu kutub menyala-menyala, paksa diri membaca sumber kutub sebaliknya sebelum membagikan atau memutuskan. Keyakinan yang selamat dari dua ujian berturut-turut seperti ini mulai kehilangan “kepastian” yang menghidupi lingkaran.",
        },
        {
          title: "Catat sinyal masuknya lingkaran di atas kertas",
          detail:
            "Sinyal masuk lingkaran mengikuti pola tetap: mulai membicarakan AI dengan pujian absolut atau kengerian absolut / merasa orang sekitar “tidak paham” sehingga berhenti menceritakan / sulit tidur karena AI / menerima “kebenaran rahasia” atau “ancaman rahasia” dari ruang chat / gelisah saat terputus dari obrolan. Catat tanggal dan waktu sinyal-sinyal ini di satu halaman. Saat ditinjau sebagai grafik, Anda sendiri akan melihat kutub bergantian mengikuti ritme — bukan kebenaran yang tenang — dan ritme itu bisa dikelola.",
        },
        {
          title: "Tingkat keparahan yang menuntut bantuan sungguhan",
          detail:
            "DOOMLOOP adalah pola yang paling serius dalam checklist ini. Kriteria untuk menemui psikiater atau psikolog tanpa menunda: keyakinan mulai mengubah kehidupan nyata (memutus hubungan, bolos kerja, menyusun ulang jadwal hidup mengikuti kata AI atau ketakutan pada AI) / dua orang atau lebih di sekitar Anda secara terpisah menyampaikan kekhawatiran / pola tidur-bangun tak normal terus-menerus / mulai mendengar atau melihat hal yang tidak didengar atau dilihat orang lain. Meminta bantuan lebih awal bukan menyerah — hampir semua kasus yang pulih dengan baik dimulai dari orang yang berhenti sebelum lingkarannya tertutup rapat.",
        },
      ],
    },
  },
  references: {
    heading: "Referensi di balik tes ini",
    intro:
      "Setiap pernyataan dan statistik di situs ini berdasar pada karya akademik, laporan media, dan thread komunitas nyata di bawah — klik untuk membaca naskah aslinya.",
    disclaimerTitle: "Pernyataan penggunaan yang bertanggung jawab",
    disclaimer:
      "Tes ini adalah alat refleksi perspektif untuk edukasi, bukan instrumen diagnosis medis. “AI-PSYCHOSIS” bukan diagnosis psikiatrik yang diakui resmi. Skor Anda hanya menunjukkan kecenderungan cara pikir dari jawaban Anda. Jika Anda punya gejala yang mengkhawatirkan — keyakinan yang membuat orang sekitar cemas, pola tidur-bangun tak normal, atau kecemasan berat — segeralah berkonsultasi dengan psikiater atau psikolog.",
    groups: [
      {
        group: "Akademik dan institusi",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Definisi; mekanisme sycophancy/hallucination/intimacy-mimicry; kasus nyata; serta kritik atas kata psychosis",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "Laporan kasus medis tentang fenomena ini",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Sumber statistik OpenAI 0,07% pengguna mingguan",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Wawancara dengan psikiater Ragy Girgis (Universitas Columbia)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Perspektif klinis dan faktor risiko eksploratif",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Pengguna yang bergantung pada AI sebagai “tuhan” atau kekasih, dan peranan pemantulan pengguna",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "Kerangka moral panic versus kehati-hatian yang membangun",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Riset menunjukkan sycophancy chatbot bisa memicu spiral delusi bahkan pada pengguna biasa — dasar konsep DOOMLOOP",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "Mekanisme spiral validasi: chatbot memberi kenyamanan dan perhatian tanpa umpan balik yang menantang",
          },
        ],
      },
      {
        group: "Media dan platform teknologi",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Kumpulan laporan kasus yang merujuk Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 chatbot; sudut pandang developer: Validation Loop, Replacement Bot, usulan desain safety-first",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Panduan praktis untuk pengguna dan keluarga",
          },
        ],
      },
      {
        group: "Komunitas daring (thread nyata)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "Perspektif terapis yang menemui kasus di ruang praktik",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "Kasus yang dilaporkan pengguna, termasuk kritik bahwa tren itu sendiri bisa memicu reaksi balik",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Pengamatan banyak pengguna yang terus memberi konteks sampai model ikut berputar",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "Contoh nyata keyakinan Anti-AI bahwa AI digerakkan kekuatan supranatural",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "Contoh nyata perburuan penyihir terhadap pengguna AI",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "Pengamatan bahwa kedua kutub memakai gaya pikir yang sama",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "Checklist AI-PSYCHOSIS — alat refleksi cara pikir era AI",
    note: "Berdasarkan riset dan thread nyata 2023–2026 · Bukan alat diagnosis medis",
  },
  ui: {
    languageLabel: "Bahasa",
    themeLabel: "Tema",
    themes: { cyberpunk: "CyberPunk", dark: "Gelap", light: "Terang" },
  },
};

export default id;
