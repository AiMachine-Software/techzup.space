/** ข้อความ Clarity Grade (เกรดแบบความหายากการ์ดสะสม D → S) */
import type { Grade } from "@/lib/ai-test/grade";

export interface GradeText {
  /** หัวข้อการ์ดเกรด */
  title: string;
  /** ป้ายคะแนน 0–100 */
  score: string;
  /** คำอธิบายสั้นๆ ว่าคำนวณอย่างไร */
  how: string;
  /** คำแนะนำเร่งด่วน (แสดงเฉพาะเกรด SSS) */
  alert: string;
  /** ชื่อระดับความหายาก + ความหมายของแต่ละเกรด */
  tiers: Record<Grade, { rarity: string; desc: string }>;
}

const en: GradeText = {
  title: "Clarity Grade",
  score: "Clarity score",
  how: "Your grade reflects how steady your thinking is across both poles. The stronger pole counts most; leaning both ways lowers it further. It reflects this test only, not who you are.",
  alert: "Please see a doctor or mental-health professional as soon as possible. If you feel unsafe or overwhelmed, contact local emergency services now.",
  tiers: {
    SSS: { rarity: "Mythic", desc: "Both poles are high at the same time — the rarest and most concerning pattern. Please talk to a doctor soon." },
    S: { rarity: "Legendary", desc: "Exceptionally steady on both sides — you weigh AI by evidence, not by hype or fear." },
    A: { rarity: "Epic", desc: "Balanced and grounded — small leanings, well within healthy range." },
    B: { rarity: "Rare", desc: "Mostly clear, with a noticeable lean worth keeping an eye on." },
    C: { rarity: "Uncommon", desc: "In the watch zone — some beliefs are drifting; the recalibration guide will help." },
    D: { rarity: "Common", desc: "A clear delusion-leaning pattern — common, and very fixable. Start with the guide below." },
  },
};

const th: GradeText = {
  title: "เกรดความชัดเจนทางความคิด",
  score: "คะแนนความชัดเจน",
  how: "เกรดสะท้อนว่าวิธีคิดของคุณมั่นคงแค่ไหนทั้งสองขั้ว ขั้วที่หนักกว่ามีน้ำหนักมากที่สุด และถ้าเอียงทั้งสองทางเกรดจะลดลงอีก เกรดนี้สะท้อนผลแบบทดสอบครั้งนี้เท่านั้น ไม่ได้ตัดสินตัวตนของคุณ",
  alert: "โปรดพบแพทย์หรือผู้เชี่ยวชาญด้านสุขภาพจิตโดยเร็วที่สุด หากรู้สึกไม่ปลอดภัยหรือรับมือไม่ไหว โทรสายด่วนสุขภาพจิต 1323 หรือ 1669 ได้ทันที",
  tiers: {
    SSS: { rarity: "มิธิก", desc: "ทั้งสองขั้วสูงพร้อมกัน — เป็นรูปแบบที่พบน้อยที่สุดและน่ากังวลที่สุด โปรดปรึกษาแพทย์โดยเร็ว" },
    S: { rarity: "ตำนาน", desc: "มั่นคงอย่างยิ่งทั้งสองด้าน — ประเมิน AI ด้วยหลักฐาน ไม่ใช่กระแสหรือความกลัว" },
    A: { rarity: "เอพิค", desc: "สมดุลและหนักแน่น — มีความเอียงเล็กน้อย อยู่ในเกณฑ์ปกติดี" },
    B: { rarity: "หายาก", desc: "ส่วนใหญ่ชัดเจน แต่มีความเอียงที่ควรสังเกตไว้" },
    C: { rarity: "ไม่ธรรมดา", desc: "อยู่ในโซนเฝ้าระวัง — ความเชื่อบางอย่างเริ่มลอย แนวทางปรับจะช่วยได้" },
    D: { rarity: "ทั่วไป", desc: "มีรูปแบบความคิดเอนไปทางหลงผิดชัดเจน — พบได้บ่อยและปรับได้ เริ่มจากแนวทางด้านล่าง" },
  },
};

const ja: GradeText = {
  title: "クラリティ・グレード",
  score: "クラリティスコア",
  how: "グレードは、両極に対してあなたの考え方がどれだけ安定しているかを表します。より強い側が最も重視され、両方に傾いているとさらに下がります。これは今回のテスト結果を示すもので、あなた自身を評価するものではありません。",
  alert: "できるだけ早く医師または心の専門家に相談してください。危険を感じる、または耐えられないと感じる場合は、すぐに地域の緊急窓口へ連絡してください。",
  tiers: {
    SSS: { rarity: "ミシック", desc: "両極が同時に高い状態です — 最もまれで、最も注意が必要なパターンです。早めに医師に相談してください。" },
    S: { rarity: "レジェンド", desc: "両面で非常に安定しています — AIを誇大な期待や恐れではなく、根拠で判断できています。" },
    A: { rarity: "エピック", desc: "バランスが取れ、地に足がついています — わずかな傾きはあっても、十分に健全な範囲です。" },
    B: { rarity: "レア", desc: "おおむね明確ですが、気に留めておきたい傾きが見られます。" },
    C: { rarity: "アンコモン", desc: "注意ゾーンです — 一部の考えが揺らぎ始めています。調整ガイドが役立ちます。" },
    D: { rarity: "コモン", desc: "思い込みに傾いた思考パターンがはっきり見られます — よくあることで、十分に改善できます。まずは下のガイドから始めましょう。" },
  },
};

const zh: GradeText = {
  title: "清晰度等级",
  score: "清晰度得分",
  how: "等级反映你在两个极端之间的思维有多稳定。较强的一端权重最大；如果两边都有偏向，等级会进一步降低。它只反映本次测试，不代表你是怎样的人。",
  alert: "请尽快就医或咨询心理健康专业人士。如果你感到不安全或难以承受，请立即联系当地紧急服务。",
  tiers: {
    SSS: { rarity: "神话", desc: "两个极端同时偏高——这是最罕见、也最需要关注的模式。请尽快咨询医生。" },
    S: { rarity: "传说", desc: "两方面都格外稳定——你依据证据看待 AI，而不是被炒作或恐惧左右。" },
    A: { rarity: "史诗", desc: "平衡而踏实——略有偏向，完全处于健康范围内。" },
    B: { rarity: "稀有", desc: "大体清晰，但有较明显的偏向，值得留意。" },
    C: { rarity: "优秀", desc: "处于观察区——部分观念正在偏移，调整指南会有帮助。" },
    D: { rarity: "普通", desc: "呈现明显偏向妄想的思维模式——这很常见，也完全可以改善。从下方的指南开始吧。" },
  },
};

const ko: GradeText = {
  title: "명료도 등급",
  score: "명료도 점수",
  how: "등급은 양극단 모두에 대해 당신의 생각이 얼마나 안정적인지를 나타냅니다. 더 강한 쪽이 가장 크게 반영되며, 양쪽으로 모두 기울면 등급이 더 낮아집니다. 이번 테스트 결과일 뿐, 당신이 어떤 사람인지를 말해 주지는 않습니다.",
  alert: "가능한 한 빨리 의사나 정신건강 전문가를 만나세요. 위험하거나 감당하기 힘들다고 느끼면 지금 바로 지역 응급 서비스에 연락하세요.",
  tiers: {
    SSS: { rarity: "신화", desc: "양극단이 동시에 높습니다 — 가장 드물고 가장 우려되는 패턴입니다. 가능한 한 빨리 의사와 상담하세요." },
    S: { rarity: "전설", desc: "양쪽 모두 매우 안정적입니다 — 과장이나 두려움이 아닌 근거로 AI를 판단합니다." },
    A: { rarity: "영웅", desc: "균형 잡히고 현실적입니다 — 약간의 기울기는 있지만 충분히 건강한 범위입니다." },
    B: { rarity: "희귀", desc: "대체로 명료하지만, 지켜볼 만한 뚜렷한 기울기가 있습니다." },
    C: { rarity: "고급", desc: "주의 구간입니다 — 일부 믿음이 흔들리고 있어요. 재조정 가이드가 도움이 됩니다." },
    D: { rarity: "일반", desc: "망상 쪽으로 기운 사고 패턴이 뚜렷합니다 — 흔한 일이고 충분히 바로잡을 수 있습니다. 아래 가이드부터 시작해 보세요." },
  },
};

const lo: GradeText = {
  title: "ເກຣດຄວາມຊັດເຈນທາງຄວາມຄິດ",
  score: "ຄະແນນຄວາມຊັດເຈນ",
  how: "ເກຣດສະທ້ອນວ່າວິທີຄິດຂອງທ່ານໝັ້ນຄົງພຽງໃດທັງສອງຂົ້ວ ຂົ້ວທີ່ໜັກກວ່າມີນ້ຳໜັກຫຼາຍທີ່ສຸດ ແລະ ຖ້າອຽງທັງສອງທາງ ເກຣດຈະຫຼຸດລົງອີກ ເກຣດນີ້ສະທ້ອນຜົນການທົດສອບຄັ້ງນີ້ເທົ່ານັ້ນ ບໍ່ໄດ້ຕັດສິນຕົວຕົນຂອງທ່ານ",
  alert: "ກະລຸນາພົບແພດ ຫຼື ຜູ້ຊ່ຽວຊານດ້ານສຸຂະພາບຈິດໂດຍໄວທີ່ສຸດ ຖ້າຮູ້ສຶກບໍ່ປອດໄພ ຫຼື ຮັບມືບໍ່ໄຫວ ໃຫ້ຕິດຕໍ່ໜ່ວຍສຸກເສີນໃນທ້ອງຖິ່ນທັນທີ",
  tiers: {
    SSS: { rarity: "ມິທິກ", desc: "ທັງສອງຂົ້ວສູງພ້ອມກັນ — ເປັນຮູບແບບທີ່ພົບໜ້ອຍທີ່ສຸດ ແລະ ໜ້າເປັນຫ່ວງທີ່ສຸດ ກະລຸນາປຶກສາແພດໂດຍໄວ" },
    S: { rarity: "ຕຳນານ", desc: "ໝັ້ນຄົງຢ່າງຍິ່ງທັງສອງດ້ານ — ປະເມີນ AI ດ້ວຍຫຼັກຖານ ບໍ່ແມ່ນກະແສ ຫຼື ຄວາມຢ້ານ" },
    A: { rarity: "ເອປິກ", desc: "ສົມດຸນ ແລະ ໜັກແໜ້ນ — ມີຄວາມອຽງເລັກນ້ອຍ ຢູ່ໃນເກນປົກກະຕິດີ" },
    B: { rarity: "ຫາຍາກ", desc: "ສ່ວນໃຫຍ່ຊັດເຈນ ແຕ່ມີຄວາມອຽງທີ່ຄວນສັງເກດໄວ້" },
    C: { rarity: "ບໍ່ທຳມະດາ", desc: "ຢູ່ໃນເຂດເຝົ້າລະວັງ — ຄວາມເຊື່ອບາງຢ່າງເລີ່ມລອຍອອກ ແນວທາງປັບຈະຊ່ວຍໄດ້" },
    D: { rarity: "ທົ່ວໄປ", desc: "ມີຮູບແບບຄວາມຄິດທີ່ອຽງໄປທາງຫຼົງຜິດຢ່າງຊັດເຈນ — ພົບໄດ້ເລື້ອຍໆ ແລະ ປັບໄດ້ ເລີ່ມຈາກແນວທາງດ້ານລຸ່ມ" },
  },
};

const km: GradeText = {
  title: "កម្រិតភាពច្បាស់លាស់",
  score: "ពិន្ទុភាពច្បាស់លាស់",
  how: "កម្រិតនេះឆ្លុះបញ្ចាំងថារបៀបគិតរបស់អ្នកមានស្ថិរភាពប៉ុណ្ណាចំពោះទាំងសងខាង។ ខាងដែលខ្លាំងជាងមានទម្ងន់ច្រើនបំផុត ហើយបើលំអៀងទាំងសងខាង កម្រិតនឹងធ្លាក់ចុះបន្ថែមទៀត។ វាឆ្លុះបញ្ចាំងតែលទ្ធផលតេស្តលើកនេះប៉ុណ្ណោះ មិនមែនវិនិច្ឆ័យថាអ្នកជានរណាទេ។",
  alert: "សូមជួបវេជ្ជបណ្ឌិត ឬអ្នកជំនាញសុខភាពផ្លូវចិត្តឱ្យបានឆាប់បំផុត។ បើអ្នកមានអារម្មណ៍មិនមានសុវត្ថិភាព ឬទ្រាំមិនបាន សូមទាក់ទងសេវាសង្គ្រោះបន្ទាន់ក្នុងតំបន់ភ្លាមៗ។",
  tiers: {
    SSS: { rarity: "ទេវកថា", desc: "ទាំងសងខាងខ្ពស់ក្នុងពេលតែមួយ — ជាលំនាំកម្របំផុត និងគួរឱ្យព្រួយបារម្ភបំផុត។ សូមពិគ្រោះជាមួយវេជ្ជបណ្ឌិតឱ្យបានឆាប់។" },
    S: { rarity: "រឿងព្រេង", desc: "មានស្ថិរភាពខ្លាំងណាស់ទាំងសងខាង — អ្នកវាយតម្លៃ AI ដោយភស្តុតាង មិនមែនដោយការបំផ្លើស ឬការភ័យខ្លាចទេ។" },
    A: { rarity: "អេពិក", desc: "មានតុល្យភាព និងមូលដ្ឋានរឹងមាំ — មានការលំអៀងតិចតួច ស្ថិតក្នុងកម្រិតល្អ។" },
    B: { rarity: "កម្រ", desc: "ភាគច្រើនច្បាស់លាស់ ប៉ុន្តែមានការលំអៀងគួរកត់សម្គាល់ ដែលគួរតាមដាន។" },
    C: { rarity: "មិនធម្មតា", desc: "ស្ថិតក្នុងតំបន់ត្រូវតាមដាន — ជំនឿខ្លះកំពុងរសាត់ចេញ ការណែនាំកែតម្រូវនឹងជួយបាន។" },
    D: { rarity: "ធម្មតា", desc: "មានលំនាំគំនិតលំអៀងទៅរកការយល់ច្រឡំយ៉ាងច្បាស់ — រឿងនេះកើតមានញឹកញាប់ ហើយអាចកែបាន។ ចាប់ផ្តើមពីការណែនាំខាងក្រោម។" },
  },
};

const vi: GradeText = {
  title: "Hạng Minh mẫn",
  score: "Điểm minh mẫn",
  how: "Hạng của bạn phản ánh mức độ vững vàng trong suy nghĩ ở cả hai thái cực. Thái cực mạnh hơn được tính nhiều nhất; nghiêng về cả hai phía sẽ khiến hạng thấp hơn nữa. Hạng này chỉ phản ánh bài kiểm tra lần này, không nói lên con người bạn.",
  alert: "Hãy gặp bác sĩ hoặc chuyên gia sức khỏe tâm thần càng sớm càng tốt. Nếu bạn cảm thấy không an toàn hoặc quá sức chịu đựng, hãy liên hệ ngay dịch vụ cấp cứu tại địa phương.",
  tiers: {
    SSS: { rarity: "Thần thoại", desc: "Cả hai thái cực cùng cao — kiểu kết quả hiếm gặp nhất và đáng lo ngại nhất. Hãy sớm trao đổi với bác sĩ." },
    S: { rarity: "Huyền thoại", desc: "Đặc biệt vững vàng ở cả hai phía — bạn đánh giá AI bằng bằng chứng, không phải bằng sự thổi phồng hay nỗi sợ." },
    A: { rarity: "Sử thi", desc: "Cân bằng và vững chãi — chỉ hơi nghiêng nhẹ, vẫn nằm trong ngưỡng lành mạnh." },
    B: { rarity: "Hiếm", desc: "Phần lớn rõ ràng, nhưng có độ nghiêng đáng kể nên để ý." },
    C: { rarity: "Ít gặp", desc: "Đang ở vùng cần theo dõi — một số niềm tin đang lệch dần; hướng dẫn điều chỉnh sẽ giúp bạn." },
    D: { rarity: "Phổ thông", desc: "Có khuynh hướng suy nghĩ thiên về ảo tưởng rõ rệt — điều này khá phổ biến và hoàn toàn cải thiện được. Hãy bắt đầu với hướng dẫn bên dưới." },
  },
};

const my: GradeText = {
  title: "ရှင်းလင်းမှု အဆင့်",
  score: "ရှင်းလင်းမှု ရမှတ်",
  how: "သင့်အဆင့်သည် ဘက်နှစ်ဘက်လုံးအပေါ် သင့်တွေးခေါ်ပုံ မည်မျှတည်ငြိမ်သည်ကို ပြသသည်။ ပိုအားကောင်းသည့်ဘက်ကို အလေးအနက်ဆုံး တွက်ပြီး ဘက်နှစ်ဘက်လုံးသို့ ယိမ်းနေပါက အဆင့် ပိုကျသွားမည်။ ဤအဆင့်သည် ယခုစစ်ဆေးမှုကိုသာ ထင်ဟပ်ပြီး သင်မည်သူဖြစ်သည်ကို ဆုံးဖြတ်ခြင်း မဟုတ်ပါ။",
  alert: "ဆရာဝန် သို့မဟုတ် စိတ်ကျန်းမာရေး ကျွမ်းကျင်သူနှင့် အမြန်ဆုံး တွေ့ဆုံပါ။ မလုံခြုံဟု ခံစားရလျှင် သို့မဟုတ် မခံနိုင်တော့လျှင် ဒေသတွင်း အရေးပေါ်ဝန်ဆောင်မှုကို ချက်ချင်း ဆက်သွယ်ပါ။",
  tiers: {
    SSS: { rarity: "ဒဏ္ဍာရီထက်ထူး", desc: "ဘက်နှစ်ဘက်လုံး တစ်ပြိုင်နက် မြင့်နေသည် — အရှားပါးဆုံးနှင့် စိုးရိမ်ရဆုံး ပုံစံဖြစ်သည်။ ဆရာဝန်နှင့် အမြန်တိုင်ပင်ပါ။" },
    S: { rarity: "ဒဏ္ဍာရီ", desc: "ဘက်နှစ်ဘက်လုံးတွင် အထူးတည်ငြိမ်သည် — AI ကို ချဲ့ကားမှု သို့မဟုတ် ကြောက်ရွံ့မှုဖြင့် မဟုတ်ဘဲ အထောက်အထားဖြင့် ချိန်ဆသည်။" },
    A: { rarity: "အီပစ်", desc: "ချိန်ခွင်လျှာညီပြီး ခိုင်မာသည် — အနည်းငယ်သာ ယိမ်းပြီး ကျန်းမာသော အတိုင်းအတာအတွင်း ရှိသည်။" },
    B: { rarity: "ရှားပါး", desc: "အများအားဖြင့် ရှင်းလင်းသော်လည်း သတိထားသင့်သည့် ယိမ်းမှုတစ်ခု ရှိသည်။" },
    C: { rarity: "ထူးခြား", desc: "စောင့်ကြည့်ရမည့်ဇုန်တွင် ရှိသည် — ယုံကြည်ချက်အချို့ လွင့်စပြုနေသည်။ ပြန်လည်ချိန်ညှိရေး လမ်းညွှန်က ကူညီပေးနိုင်သည်။" },
    D: { rarity: "သာမန်", desc: "မှားယွင်းသော ယုံကြည်မှုဘက်သို့ ယိမ်းသည့် အတွေးပုံစံ ထင်ရှားသည် — ဤသည်မှာ အဖြစ်များပြီး ပြင်ဆင်နိုင်ပါသည်။ အောက်ပါလမ်းညွှန်မှ စတင်ပါ။" },
  },
};

const ms: GradeText = {
  title: "Gred Kejelasan",
  score: "Skor kejelasan",
  how: "Gred anda mencerminkan sejauh mana pemikiran anda stabil di kedua-dua kutub. Kutub yang lebih kuat paling diambil kira; condong ke kedua-dua arah akan merendahkannya lagi. Gred ini hanya mencerminkan ujian ini, bukan siapa diri anda.",
  alert: "Sila berjumpa doktor atau profesional kesihatan mental secepat mungkin. Jika anda berasa tidak selamat atau tertekan, hubungi perkhidmatan kecemasan tempatan sekarang.",
  tiers: {
    SSS: { rarity: "Mitos", desc: "Kedua-dua kutub tinggi serentak — corak paling jarang dan paling membimbangkan. Sila berjumpa doktor dengan segera." },
    S: { rarity: "Lagenda", desc: "Sangat stabil di kedua-dua belah — anda menilai AI berdasarkan bukti, bukan gembar-gembur atau ketakutan." },
    A: { rarity: "Epik", desc: "Seimbang dan berpijak di bumi nyata — sedikit kecondongan, masih dalam julat sihat." },
    B: { rarity: "Jarang", desc: "Kebanyakannya jelas, dengan kecondongan ketara yang wajar diperhatikan." },
    C: { rarity: "Tidak Biasa", desc: "Dalam zon pemerhatian — sesetengah kepercayaan mula tersasar; panduan penyelarasan semula akan membantu." },
    D: { rarity: "Biasa", desc: "Corak pemikiran yang jelas condong ke arah kepercayaan khayalan — perkara ini biasa dan sangat boleh diperbaiki. Mulakan dengan panduan di bawah." },
  },
};

const id: GradeText = {
  title: "Peringkat Kejernihan",
  score: "Skor kejernihan",
  how: "Peringkatmu menggambarkan seberapa stabil cara berpikirmu di kedua kutub. Kutub yang lebih kuat paling diperhitungkan; condong ke dua arah akan menurunkannya lagi. Ini hanya mencerminkan tes kali ini, bukan siapa dirimu.",
  alert: "Temui dokter atau profesional kesehatan jiwa secepat mungkin. Jika kamu merasa tidak aman atau kewalahan, segera hubungi layanan darurat setempat.",
  tiers: {
    SSS: { rarity: "Mitis", desc: "Kedua kutub tinggi bersamaan — pola paling langka dan paling mengkhawatirkan. Segera konsultasikan dengan dokter." },
    S: { rarity: "Legendaris", desc: "Sangat stabil di kedua sisi — kamu menilai AI berdasarkan bukti, bukan karena hype atau rasa takut." },
    A: { rarity: "Epik", desc: "Seimbang dan membumi — ada sedikit kecenderungan, masih dalam batas sehat." },
    B: { rarity: "Langka", desc: "Sebagian besar jernih, dengan kecenderungan yang cukup terlihat dan perlu diperhatikan." },
    C: { rarity: "Tidak Umum", desc: "Di zona waspada — beberapa keyakinan mulai bergeser; panduan kalibrasi ulang akan membantu." },
    D: { rarity: "Umum", desc: "Pola pikir yang jelas condong ke arah delusi — ini umum dan sangat bisa diperbaiki. Mulailah dengan panduan di bawah." },
  },
};

const tl: GradeText = {
  title: "Grado ng Linaw",
  score: "Iskor ng linaw",
  how: "Ipinapakita ng iyong grado kung gaano katatag ang iyong pag-iisip sa magkabilang dulo. Pinakamabigat ang bilang ng mas malakas na dulo; kapag kumikiling ka sa dalawang direksyon, lalo pa itong bababa. Para lang ito sa test na ito, hindi sa kung sino ka.",
  alert: "Magpatingin sa doktor o mental-health professional sa lalong madaling panahon. Kung pakiramdam mo ay hindi ka ligtas o hindi mo na kaya, tumawag agad sa lokal na emergency services.",
  tiers: {
    SSS: { rarity: "Mythic", desc: "Mataas ang dalawang panig nang sabay — ang pinakabihira at pinakanakababahalang pattern. Kumonsulta agad sa doktor." },
    S: { rarity: "Legendary", desc: "Lubhang matatag sa magkabilang panig — tinitimbang mo ang AI batay sa ebidensya, hindi sa hype o takot." },
    A: { rarity: "Epic", desc: "Balanse at nakatapak sa lupa — may kaunting kiling, pero pasok na pasok sa malusog na saklaw." },
    B: { rarity: "Rare", desc: "Karamihan ay malinaw, pero may kapansin-pansing kiling na dapat bantayan." },
    C: { rarity: "Uncommon", desc: "Nasa watch zone — may ilang paniniwalang unti-unting lumilihis; makatutulong ang gabay sa muling pag-calibrate." },
    D: { rarity: "Common", desc: "Malinaw na pattern na kumikiling sa maling paniniwala — karaniwan ito at kayang-kayang ayusin. Magsimula sa gabay sa ibaba." },
  },
};

const hi: GradeText = {
  title: "क्लैरिटी ग्रेड",
  score: "क्लैरिटी स्कोर",
  how: "आपका ग्रेड दिखाता है कि दोनों छोरों पर आपकी सोच कितनी स्थिर है। जो छोर ज़्यादा मज़बूत है, उसका असर सबसे ज़्यादा होता है; दोनों ओर झुकाव होने पर ग्रेड और कम हो जाता है। यह केवल इस टेस्ट को दर्शाता है, आप कौन हैं इसे नहीं।",
  alert: "कृपया जितनी जल्दी हो सके डॉक्टर या मानसिक स्वास्थ्य विशेषज्ञ से मिलें। अगर आप असुरक्षित या बहुत परेशान महसूस करें, तो तुरंत स्थानीय आपातकालीन सेवा से संपर्क करें।",
  tiers: {
    SSS: { rarity: "मिथिक", desc: "दोनों ध्रुव एक साथ ऊँचे हैं — यह सबसे दुर्लभ और सबसे चिंताजनक पैटर्न है। कृपया जल्द ही डॉक्टर से बात करें।" },
    S: { rarity: "लेजेंडरी", desc: "दोनों तरफ़ असाधारण रूप से स्थिर — आप AI को प्रचार या डर से नहीं, सबूतों से परखते हैं।" },
    A: { rarity: "एपिक", desc: "संतुलित और ज़मीन से जुड़े — हल्का-सा झुकाव, जो पूरी तरह स्वस्थ दायरे में है।" },
    B: { rarity: "रेयर", desc: "ज़्यादातर स्पष्ट, पर एक ध्यान देने लायक झुकाव है जिस पर नज़र रखनी चाहिए।" },
    C: { rarity: "अनकॉमन", desc: "निगरानी क्षेत्र में — कुछ धारणाएँ भटक रही हैं; रीकैलिब्रेशन गाइड मदद करेगी।" },
    D: { rarity: "कॉमन", desc: "भ्रम की ओर झुका एक स्पष्ट पैटर्न — यह आम है और पूरी तरह सुधारा जा सकता है। नीचे दी गई गाइड से शुरुआत करें।" },
  },
};

const ar: GradeText = {
  title: "درجة الوضوح",
  score: "نقاط الوضوح",
  how: "تعكس درجتك مدى ثبات تفكيرك تجاه الطرفين. الطرف الأقوى له الوزن الأكبر، والميل إلى الاتجاهين معًا يخفضها أكثر. وهي تعكس هذا الاختبار فقط، لا حقيقة من تكون.",
  alert: "يُرجى مراجعة طبيب أو مختص في الصحة النفسية في أقرب وقت ممكن. إذا شعرت بعدم الأمان أو بأن الأمر يفوق طاقتك، فاتصل بخدمات الطوارئ المحلية فورًا.",
  tiers: {
    SSS: { rarity: "أسطوري", desc: "القطبان مرتفعان في الوقت نفسه — وهو النمط الأندر والأكثر إثارة للقلق. يُرجى استشارة طبيب في أقرب وقت." },
    S: { rarity: "أسطوري", desc: "ثبات استثنائي في الجانبين — تزن الذكاء الاصطناعي بالأدلة، لا بالضجيج أو الخوف." },
    A: { rarity: "ملحمي", desc: "متوازن وواقعي — ميل طفيف ضمن النطاق الصحي بوضوح." },
    B: { rarity: "نادر", desc: "واضح في الغالب، مع ميل ملحوظ يستحق المتابعة." },
    C: { rarity: "غير شائع", desc: "في منطقة المراقبة — بعض القناعات بدأت تنجرف؛ دليل إعادة المعايرة سيساعدك." },
    D: { rarity: "شائع", desc: "نمط واضح يميل نحو المعتقدات الوهمية — وهذا شائع ويمكن تصحيحه تمامًا. ابدأ بالدليل أدناه." },
  },
};

const fr: GradeText = {
  title: "Grade de clarté",
  score: "Score de clarté",
  how: "Votre grade reflète la stabilité de votre pensée face aux deux pôles. Le pôle le plus marqué compte le plus ; pencher des deux côtés le fait encore baisser. Il ne reflète que ce test, pas qui vous êtes.",
  alert: "Consultez un médecin ou un professionnel de la santé mentale dès que possible. Si vous ne vous sentez pas en sécurité ou êtes dépassé, contactez immédiatement les services d’urgence locaux.",
  tiers: {
    SSS: { rarity: "Mythique", desc: "Les deux pôles sont élevés en même temps — le profil le plus rare et le plus préoccupant. Consultez un médecin rapidement." },
    S: { rarity: "Légendaire", desc: "Remarquablement stable des deux côtés — vous jugez l’IA sur des preuves, pas sur l’emballement ou la peur." },
    A: { rarity: "Épique", desc: "Équilibré et ancré — de légers penchants, bien dans la zone saine." },
    B: { rarity: "Rare", desc: "Plutôt clair, avec un penchant notable à surveiller." },
    C: { rarity: "Peu commun", desc: "En zone de vigilance — certaines croyances dérivent ; le guide de recalibrage vous aidera." },
    D: { rarity: "Commun", desc: "Un schéma de pensée nettement orienté vers l’illusion — c’est courant, et tout à fait rattrapable. Commencez par le guide ci-dessous." },
  },
};

const de: GradeText = {
  title: "Klarheitsgrad",
  score: "Klarheitswert",
  how: "Dein Grad zeigt, wie stabil dein Denken gegenüber beiden Polen ist. Der stärkere Pol zählt am meisten; wer in beide Richtungen neigt, landet noch tiefer. Er spiegelt nur diesen Test wider, nicht, wer du bist.",
  alert: "Bitte wende dich so bald wie möglich an eine Ärztin, einen Arzt oder eine psychologische Fachperson. Wenn du dich nicht sicher oder überfordert fühlst, kontaktiere sofort den örtlichen Notdienst.",
  tiers: {
    SSS: { rarity: "Mythisch", desc: "Beide Pole sind gleichzeitig hoch — das seltenste und bedenklichste Muster. Bitte sprich bald mit einer Ärztin oder einem Arzt." },
    S: { rarity: "Legendär", desc: "Außergewöhnlich stabil auf beiden Seiten — du beurteilst KI nach Belegen, nicht nach Hype oder Angst." },
    A: { rarity: "Episch", desc: "Ausgeglichen und geerdet — leichte Tendenzen, klar im gesunden Bereich." },
    B: { rarity: "Selten", desc: "Größtenteils klar, mit einer spürbaren Neigung, die du im Blick behalten solltest." },
    C: { rarity: "Ungewöhnlich", desc: "Im Beobachtungsbereich — manche Überzeugungen driften ab; der Leitfaden zur Neujustierung hilft dir." },
    D: { rarity: "Gewöhnlich", desc: "Ein deutliches Denkmuster in Richtung verzerrter Überzeugungen — das ist häufig und gut veränderbar. Fang mit dem Leitfaden unten an." },
  },
};

const es: GradeText = {
  title: "Grado de claridad",
  score: "Puntuación de claridad",
  how: "Tu grado refleja lo estable que es tu pensamiento frente a ambos polos. El polo más fuerte es el que más pesa; inclinarte hacia los dos lo baja aún más. Solo refleja este test, no quién eres.",
  alert: "Acude a un médico o a un profesional de salud mental lo antes posible. Si no te sientes a salvo o te sientes desbordado, contacta ahora con los servicios de emergencia locales.",
  tiers: {
    SSS: { rarity: "Mítico", desc: "Ambos polos están altos a la vez — el patrón más raro y más preocupante. Consulta a un médico pronto." },
    S: { rarity: "Legendario", desc: "Excepcionalmente estable en ambos lados — valoras la IA por la evidencia, no por el bombo ni el miedo." },
    A: { rarity: "Épico", desc: "Equilibrado y con los pies en la tierra — pequeñas inclinaciones, dentro de un rango saludable." },
    B: { rarity: "Raro", desc: "Mayormente claro, con una inclinación notable que conviene vigilar." },
    C: { rarity: "Poco común", desc: "En zona de observación — algunas creencias se están desviando; la guía de reajuste te ayudará." },
    D: { rarity: "Común", desc: "Un patrón claro que tiende hacia creencias distorsionadas — es común y tiene muy buena solución. Empieza por la guía de abajo." },
  },
};

const pt: GradeText = {
  title: "Grau de clareza",
  score: "Pontuação de clareza",
  how: "O seu grau reflete a estabilidade do seu pensamento face aos dois polos. O polo mais forte é o que mais conta; inclinar-se para ambos os lados baixa-o ainda mais. Reflete apenas este teste, não quem é.",
  alert: "Procure um médico ou um profissional de saúde mental o mais rapidamente possível. Se não se sentir em segurança ou se sentir sobrecarregado, contacte já os serviços de emergência locais.",
  tiers: {
    SSS: { rarity: "Mítico", desc: "Os dois polos estão altos ao mesmo tempo — o padrão mais raro e mais preocupante. Consulte um médico em breve." },
    S: { rarity: "Lendário", desc: "Excecionalmente estável em ambos os lados — avalia a IA pelas evidências, não pelo entusiasmo exagerado nem pelo medo." },
    A: { rarity: "Épico", desc: "Equilibrado e com os pés assentes na terra — pequenas inclinações, bem dentro do intervalo saudável." },
    B: { rarity: "Raro", desc: "Maioritariamente claro, com uma inclinação percetível que vale a pena acompanhar." },
    C: { rarity: "Pouco comum", desc: "Na zona de atenção — algumas crenças estão a desviar-se; o guia de reajuste vai ajudar." },
    D: { rarity: "Comum", desc: "Um padrão claro de inclinação para crenças distorcidas — é comum e tem muita solução. Comece pelo guia abaixo." },
  },
};

const it: GradeText = {
  title: "Grado di lucidità",
  score: "Punteggio di lucidità",
  how: "Il tuo grado riflette quanto è stabile il tuo pensiero rispetto a entrambi i poli. Il polo più forte pesa di più; pendere da entrambe le parti lo abbassa ulteriormente. Riflette solo questo test, non chi sei.",
  alert: "Rivolgiti il prima possibile a un medico o a un professionista della salute mentale. Se non ti senti al sicuro o ti senti sopraffatto, contatta subito i servizi di emergenza locali.",
  tiers: {
    SSS: { rarity: "Mitico", desc: "Entrambi i poli sono alti contemporaneamente — lo schema più raro e più preoccupante. Parla presto con un medico." },
    S: { rarity: "Leggendario", desc: "Eccezionalmente stabile su entrambi i fronti — valuti l’IA in base alle prove, non all’hype o alla paura." },
    A: { rarity: "Epico", desc: "Equilibrato e con i piedi per terra — lievi tendenze, ben dentro la norma." },
    B: { rarity: "Raro", desc: "Per lo più lucido, con una tendenza evidente da tenere d’occhio." },
    C: { rarity: "Non comune", desc: "In zona di attenzione — alcune convinzioni stanno deviando; la guida per ricalibrarti ti aiuterà." },
    D: { rarity: "Comune", desc: "Uno schema chiaro che tende verso convinzioni distorte — è comune e si può correggere bene. Inizia dalla guida qui sotto." },
  },
};

const ru: GradeText = {
  title: "Уровень ясности",
  score: "Баллы ясности",
  how: "Ваш уровень показывает, насколько устойчиво ваше мышление по отношению к обоим полюсам. Сильнее всего учитывается более выраженный полюс; уклон в обе стороны снижает оценку ещё больше. Это отражает только этот тест, а не то, кто вы есть.",
  alert: "Пожалуйста, как можно скорее обратитесь к врачу или специалисту по психическому здоровью. Если вы чувствуете себя в опасности или не справляетесь, немедленно свяжитесь с местной экстренной службой.",
  tiers: {
    SSS: { rarity: "Мифический", desc: "Оба полюса одновременно высоки — самый редкий и самый тревожный вариант. Пожалуйста, как можно скорее обратитесь к врачу." },
    S: { rarity: "Легендарный", desc: "Исключительная устойчивость с обеих сторон — вы оцениваете ИИ по фактам, а не под влиянием шумихи или страха." },
    A: { rarity: "Эпический", desc: "Сбалансированно и трезво — небольшие уклоны, вполне в пределах нормы." },
    B: { rarity: "Редкий", desc: "В основном ясно, но есть заметный уклон, за которым стоит понаблюдать." },
    C: { rarity: "Необычный", desc: "В зоне внимания — некоторые убеждения начинают смещаться; руководство по перенастройке поможет." },
    D: { rarity: "Обычный", desc: "Явный уклон в сторону искажённых убеждений — это распространено и вполне поправимо. Начните с руководства ниже." },
  },
};

const nl: GradeText = {
  title: "Helderheidsgraad",
  score: "Helderheidsscore",
  how: "Je graad laat zien hoe stabiel je denken is ten opzichte van beide polen. De sterkste pool telt het zwaarst; als je naar beide kanten neigt, daalt hij nog verder. Hij weerspiegelt alleen deze test, niet wie je bent.",
  alert: "Ga zo snel mogelijk naar een arts of een professional in de geestelijke gezondheidszorg. Voel je je onveilig of overweldigd, neem dan direct contact op met de lokale hulpdiensten.",
  tiers: {
    SSS: { rarity: "Mythisch", desc: "Beide polen zijn tegelijk hoog — het zeldzaamste en meest zorgwekkende patroon. Praat snel met een arts." },
    S: { rarity: "Legendarisch", desc: "Uitzonderlijk stabiel aan beide kanten — je beoordeelt AI op bewijs, niet op hype of angst." },
    A: { rarity: "Episch", desc: "Evenwichtig en nuchter — kleine neigingen, ruim binnen een gezond bereik." },
    B: { rarity: "Zeldzaam", desc: "Grotendeels helder, met een merkbare neiging om in de gaten te houden." },
    C: { rarity: "Ongewoon", desc: "In de aandachtszone — sommige overtuigingen raken op drift; de gids om bij te stellen helpt je verder." },
    D: { rarity: "Gewoon", desc: "Een duidelijk patroon richting vertekende overtuigingen — dat komt vaak voor en is heel goed te verhelpen. Begin met de gids hieronder." },
  },
};

const sv: GradeText = {
  title: "Klarhetsgrad",
  score: "Klarhetspoäng",
  how: "Din grad visar hur stabilt ditt tänkande är gentemot båda polerna. Den starkare polen väger tyngst; lutar du åt båda hållen sjunker den ytterligare. Den speglar bara det här testet, inte vem du är.",
  alert: "Kontakta en läkare eller en person inom psykisk vård så snart som möjligt. Om du känner dig otrygg eller överväldigad, kontakta lokala nödtjänster direkt.",
  tiers: {
    SSS: { rarity: "Mytisk", desc: "Båda polerna är höga samtidigt — det mest sällsynta och mest oroande mönstret. Prata med en läkare snart." },
    S: { rarity: "Legendarisk", desc: "Exceptionellt stabil åt båda hållen — du bedömer AI utifrån belägg, inte hype eller rädsla." },
    A: { rarity: "Episk", desc: "Balanserad och jordnära — små lutningar, gott och väl inom ett sunt spann." },
    B: { rarity: "Sällsynt", desc: "Mestadels klar, med en märkbar lutning som är värd att hålla koll på." },
    C: { rarity: "Ovanlig", desc: "I bevakningszonen — vissa övertygelser börjar glida iväg; guiden för omkalibrering hjälper dig." },
    D: { rarity: "Vanlig", desc: "Ett tydligt mönster som lutar mot förvrängda föreställningar — det är vanligt och går väldigt bra att ändra på. Börja med guiden nedan." },
  },
};

export const GRADE_TEXT: Record<string, GradeText> = {
  en, th, ja, zh, ko, lo, km, vi, my, ms, id, tl, hi, ar, fr, de, es, pt, it, ru, nl, sv,
};

export function getGradeText(lang: string): GradeText {
  return GRADE_TEXT[lang] ?? en;
}
