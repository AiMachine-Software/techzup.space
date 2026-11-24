/** ข้อความส่วน "แชร์ผลลัพธ์" — แยกไฟล์เพื่อไม่ต้องแก้พจนานุกรมหลักทั้ง 22 ภาษา */
export interface ShareText {
  heading: string;
  /** ต่อท้าย caption ก่อนลิงก์ */
  cta: string;
  download: string;
  copy: string;
  copied: string;
  /** แสดงหลังบันทึกรูป + คัดลอก caption สำหรับ Instagram */
  igHint: string;
}

export const SHARE_TEXT: Record<string, ShareText> = {
  en: {
    heading: "Share your result",
    cta: "Take the 20-question test:",
    download: "Download image",
    copy: "Copy caption",
    copied: "Copied",
    igHint: "Image saved and caption copied — open Instagram and post it.",
  },
  th: {
    heading: "แชร์ผลลัพธ์ของคุณ",
    cta: "ลองทำแบบทดสอบ 20 ข้อ:",
    download: "ดาวน์โหลดรูป",
    copy: "คัดลอกแคปชัน",
    copied: "คัดลอกแล้ว",
    igHint: "บันทึกรูปและคัดลอกแคปชันแล้ว — เปิด Instagram แล้วโพสต์ได้เลย",
  },
  ja: {
    heading: "結果をシェア",
    cta: "20問テストを試す:",
    download: "画像をダウンロード",
    copy: "キャプションをコピー",
    copied: "コピーしました",
    igHint: "画像を保存し、キャプションをコピーしました。Instagramを開いて投稿してください。",
  },
  zh: {
    heading: "分享你的结果",
    cta: "来做这 20 题测试：",
    download: "下载图片",
    copy: "复制文案",
    copied: "已复制",
    igHint: "图片已保存，文案已复制——打开 Instagram 发布即可。",
  },
  ko: {
    heading: "결과 공유하기",
    cta: "20문항 테스트 해보기:",
    download: "이미지 다운로드",
    copy: "캡션 복사",
    copied: "복사됨",
    igHint: "이미지를 저장하고 캡션을 복사했습니다. Instagram을 열어 게시하세요.",
  },
  lo: {
    heading: "ແບ່ງປັນຜົນຂອງທ່ານ",
    cta: "ລອງເຮັດແບບທົດສອບ 20 ຂໍ້:",
    download: "ດາວໂຫຼດຮູບ",
    copy: "ສຳເນົາຄຳບັນຍາຍ",
    copied: "ສຳເນົາແລ້ວ",
    igHint: "ບັນທຶກຮູບ ແລະ ສຳເນົາຄຳບັນຍາຍແລ້ວ — ເປີດ Instagram ແລ້ວໂພສໄດ້ເລີຍ",
  },
  km: {
    heading: "ចែករំលែកលទ្ធផលរបស់អ្នក",
    cta: "សាកល្បងធ្វើតេស្ត 20 សំណួរ៖",
    download: "ទាញយករូបភាព",
    copy: "ចម្លងចំណងជើង",
    copied: "បានចម្លង",
    igHint: "បានរក្សាទុករូបភាព និងចម្លងចំណងជើងរួចហើយ — បើក Instagram ហើយបង្ហោះ។",
  },
  vi: {
    heading: "Chia sẻ kết quả của bạn",
    cta: "Làm thử bài test 20 câu:",
    download: "Tải ảnh xuống",
    copy: "Sao chép chú thích",
    copied: "Đã sao chép",
    igHint: "Đã lưu ảnh và sao chép chú thích — mở Instagram rồi đăng.",
  },
  my: {
    heading: "သင့်ရလဒ်ကို မျှဝေပါ",
    cta: "မေးခွန်း ၂၀ စစ်ဆေးမှုကို စမ်းကြည့်ပါ -",
    download: "ပုံကို ဒေါင်းလုဒ်လုပ်ရန်",
    copy: "စာသားကို ကူးယူရန်",
    copied: "ကူးယူပြီး",
    igHint: "ပုံကို သိမ်းပြီး စာသားကို ကူးယူပြီးပါပြီ — Instagram ကိုဖွင့်ပြီး တင်ပါ။",
  },
  ms: {
    heading: "Kongsi keputusan anda",
    cta: "Cuba ujian 20 soalan:",
    download: "Muat turun imej",
    copy: "Salin kapsyen",
    copied: "Disalin",
    igHint: "Imej disimpan dan kapsyen disalin — buka Instagram dan siarkan.",
  },
  id: {
    heading: "Bagikan hasil Anda",
    cta: "Coba tes 20 pertanyaan:",
    download: "Unduh gambar",
    copy: "Salin caption",
    copied: "Tersalin",
    igHint: "Gambar tersimpan dan caption tersalin — buka Instagram lalu unggah.",
  },
  tl: {
    heading: "Ibahagi ang iyong resulta",
    cta: "Subukan ang 20-tanong na test:",
    download: "I-download ang larawan",
    copy: "Kopyahin ang caption",
    copied: "Nakopya",
    igHint: "Na-save ang larawan at nakopya ang caption — buksan ang Instagram at i-post ito.",
  },
  hi: {
    heading: "अपना परिणाम साझा करें",
    cta: "20 प्रश्नों का टेस्ट आज़माएँ:",
    download: "इमेज डाउनलोड करें",
    copy: "कैप्शन कॉपी करें",
    copied: "कॉपी हो गया",
    igHint: "इमेज सेव हो गई और कैप्शन कॉपी हो गया — Instagram खोलकर पोस्ट करें।",
  },
  ar: {
    heading: "شارك نتيجتك",
    cta: "جرّب اختبار العشرين سؤالًا:",
    download: "تنزيل الصورة",
    copy: "نسخ النص",
    copied: "تم النسخ",
    igHint: "تم حفظ الصورة ونسخ النص — افتح Instagram وانشرها.",
  },
  fr: {
    heading: "Partager votre résultat",
    cta: "Faites le test en 20 questions :",
    download: "Télécharger l'image",
    copy: "Copier la légende",
    copied: "Copié",
    igHint: "Image enregistrée et légende copiée — ouvrez Instagram et publiez-la.",
  },
  de: {
    heading: "Ergebnis teilen",
    cta: "Mach den Test mit 20 Fragen:",
    download: "Bild herunterladen",
    copy: "Text kopieren",
    copied: "Kopiert",
    igHint: "Bild gespeichert und Text kopiert — öffne Instagram und poste es.",
  },
  es: {
    heading: "Comparte tu resultado",
    cta: "Haz el test de 20 preguntas:",
    download: "Descargar imagen",
    copy: "Copiar texto",
    copied: "Copiado",
    igHint: "Imagen guardada y texto copiado — abre Instagram y publícala.",
  },
  pt: {
    heading: "Partilhe o seu resultado",
    cta: "Faça o teste de 20 perguntas:",
    download: "Descarregar imagem",
    copy: "Copiar legenda",
    copied: "Copiado",
    igHint: "Imagem guardada e legenda copiada — abra o Instagram e publique.",
  },
  it: {
    heading: "Condividi il tuo risultato",
    cta: "Fai il test di 20 domande:",
    download: "Scarica immagine",
    copy: "Copia didascalia",
    copied: "Copiato",
    igHint: "Immagine salvata e didascalia copiata — apri Instagram e pubblicala.",
  },
  ru: {
    heading: "Поделиться результатом",
    cta: "Пройдите тест из 20 вопросов:",
    download: "Скачать изображение",
    copy: "Скопировать подпись",
    copied: "Скопировано",
    igHint: "Изображение сохранено, подпись скопирована — откройте Instagram и опубликуйте.",
  },
  nl: {
    heading: "Deel je resultaat",
    cta: "Doe de test van 20 vragen:",
    download: "Afbeelding downloaden",
    copy: "Bijschrift kopiëren",
    copied: "Gekopieerd",
    igHint: "Afbeelding opgeslagen en bijschrift gekopieerd — open Instagram en plaats hem.",
  },
  sv: {
    heading: "Dela ditt resultat",
    cta: "Gör testet med 20 frågor:",
    download: "Ladda ner bild",
    copy: "Kopiera bildtext",
    copied: "Kopierat",
    igHint: "Bilden är sparad och bildtexten kopierad — öppna Instagram och lägg upp den.",
  },
};

export function getShareText(lang: string): ShareText {
  return SHARE_TEXT[lang] ?? SHARE_TEXT.en;
}
