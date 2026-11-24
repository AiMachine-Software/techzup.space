/** ข้อความแบบฟอร์มก่อนเริ่มทดสอบ + ตัวจับเวลา + ป้ายบนรูปแชร์ — แยกไฟล์เพื่อไม่ต้องแก้พจนานุกรมหลัก */
export interface FormText {
  heading: string;
  intro: string;
  name: string;
  namePh: string;
  email: string;
  emailPh: string;
  gender: string;
  genders: { male: string; female: string; nonbinary: string; na: string };
  age: string;
  /** ป้ายช่วงอายุ "ต่ำกว่า 18" (ช่วงอื่นเป็นตัวเลขล้วน) */
  ageUnder18: string;
  aiExp: string;
  exps: { lt1: string; y1_2: string; y2_3: string; y3p: string };
  select: string;
  termsHeading: string;
  terms: string[];
  consent: string;
  start: string;
  errors: { required: string; email: string; consent: string };
  /** ตัวจับเวลา */
  timeLeft: string;
  timeUp: string;
  /** แสดงในหน้าผลเมื่อหมดเวลา */
  timeUpNote: string;
  /** แถบผู้ทำแบบทดสอบระหว่างทำข้อสอบ */
  testTaker: string;
  editProfile: string;
  /** ป้ายบนรูปแชร์ */
  card: { name: string; date: string; attempt: string; disclaimer: string };
}

const en: FormText = {
  heading: "Before you start",
  intro:
    "Tell us a little about yourself so your result card is personalised. You have 20 minutes for the 20 questions once you press start.",
  name: "Name",
  namePh: "Real name or nickname",
  email: "Email",
  emailPh: "you@example.com",
  gender: "Gender",
  genders: { male: "Male", female: "Female", nonbinary: "Non-binary", na: "Prefer not to say" },
  age: "Age",
  ageUnder18: "Under 18",
  aiExp: "Experience with AI tools",
  exps: { lt1: "1 year or less", y1_2: "1–2 years", y2_3: "2–3 years", y3p: "3+ years" },
  select: "Select…",
  termsHeading: "Terms and consent",
  terms: [
    "This is a self-reflection tool, not a medical or psychiatric diagnosis.",
    "Your details and answers are stored only in this browser on this device; they are not sent to a server. You can clear them at any time by clearing this site's data.",
    "Your name and test date appear only on the result image you choose to download or share.",
    "If you are under 18, please take the test with a parent or guardian's agreement.",
    "If you are in distress, please contact a mental-health professional or a local crisis line.",
  ],
  consent: "I have read and understood the terms above, and I consent to taking the test.",
  start: "Start the test",
  errors: {
    required: "Please fill in this field",
    email: "Please enter a valid email address",
    consent: "Please accept the terms to continue",
  },
  timeLeft: "Time left",
  timeUp: "Time's up — processing your results",
  timeUpNote:
    "Time ran out before every question was answered. Unanswered questions were counted as “Neutral”.",
  testTaker: "Test taker",
  editProfile: "Edit details",
  card: { name: "Name", date: "Date", attempt: "Test no.", disclaimer: "For educational research — not a medical diagnosis" },
};

const th: FormText = {
  heading: "ก่อนเริ่มทำแบบทดสอบ",
  intro:
    "กรอกข้อมูลสั้นๆ เพื่อให้การ์ดผลลัพธ์เป็นของคุณ เมื่อกดเริ่มแล้วจะมีเวลา 20 นาทีสำหรับคำถาม 20 ข้อ",
  name: "ชื่อ",
  namePh: "ชื่อจริงหรือชื่อเล่น",
  email: "อีเมล",
  emailPh: "you@example.com",
  gender: "เพศ",
  genders: { male: "ชาย", female: "หญิง", nonbinary: "นอนไบนารี", na: "ไม่ระบุ" },
  age: "อายุ",
  ageUnder18: "ต่ำกว่า 18",
  aiExp: "ประสบการณ์ใช้เครื่องมือ AI",
  exps: { lt1: "ไม่เกิน 1 ปี", y1_2: "1–2 ปี", y2_3: "2–3 ปี", y3p: "3 ปีขึ้นไป" },
  select: "เลือก…",
  termsHeading: "ข้อตกลงและการยินยอม",
  terms: [
    "แบบทดสอบนี้เป็นเครื่องมือสะท้อนวิธีคิด ไม่ใช่การวินิจฉัยทางการแพทย์หรือจิตเวช",
    "ข้อมูลและคำตอบของคุณเก็บไว้ในเบราว์เซอร์บนอุปกรณ์นี้เท่านั้น ไม่ได้ส่งขึ้นเซิร์ฟเวอร์ และลบได้ทุกเมื่อด้วยการล้างข้อมูลของเว็บไซต์นี้",
    "ชื่อและวันที่ทดสอบจะแสดงเฉพาะบนรูปผลลัพธ์ที่คุณเลือกดาวน์โหลดหรือแชร์เอง",
    "หากอายุต่ำกว่า 18 ปี โปรดทำแบบทดสอบโดยได้รับความยินยอมจากผู้ปกครอง",
    "หากรู้สึกทุกข์ใจ โปรดติดต่อผู้เชี่ยวชาญด้านสุขภาพจิต หรือสายด่วนสุขภาพจิต 1323",
  ],
  consent: "ฉันได้อ่านและเข้าใจข้อตกลงข้างต้น และยินยอมเข้าร่วมทำแบบทดสอบ",
  start: "เริ่มทำแบบทดสอบ",
  errors: {
    required: "กรุณากรอกช่องนี้",
    email: "กรุณากรอกอีเมลให้ถูกต้อง",
    consent: "กรุณายอมรับข้อตกลงก่อนเริ่ม",
  },
  timeLeft: "เวลาที่เหลือ",
  timeUp: "หมดเวลา — กำลังประมวลผล",
  timeUpNote: "หมดเวลาก่อนตอบครบทุกข้อ ข้อที่ยังไม่ได้ตอบถูกนับเป็น “เฉยๆ”",
  testTaker: "ผู้ทำแบบทดสอบ",
  editProfile: "แก้ไขข้อมูล",
  card: { name: "ชื่อ", date: "วันที่", attempt: "ครั้งที่", disclaimer: "เพื่อการศึกษาวิจัย ไม่ใช่คำวินิจฉัยทางการแพทย์" },
};

const ja: FormText = {
  heading: "始める前に",
  intro:
    "結果カードをあなた用にするため、少しだけ教えてください。開始ボタンを押すと、20問に対して20分の制限時間が始まります。",
  name: "名前",
  namePh: "本名またはニックネーム",
  email: "メールアドレス",
  emailPh: "you@example.com",
  gender: "性別",
  genders: { male: "男性", female: "女性", nonbinary: "ノンバイナリー", na: "回答しない" },
  age: "年齢",
  ageUnder18: "18歳未満",
  aiExp: "AIツールの使用経験",
  exps: { lt1: "1年以下", y1_2: "1〜2年", y2_3: "2〜3年", y3p: "3年以上" },
  select: "選択…",
  termsHeading: "利用規約と同意",
  terms: [
    "これは自分を振り返るためのツールであり、医学的・精神医学的な診断ではありません。",
    "入力した情報と回答は、この端末のこのブラウザ内にのみ保存され、サーバーには送信されません。このサイトのデータを消去すれば、いつでも削除できます。",
    "名前と受検日は、あなたがダウンロードまたは共有を選んだ結果画像にのみ表示されます。",
    "18歳未満の方は、保護者の同意を得たうえで受けてください。",
    "つらい気持ちが続くときは、メンタルヘルスの専門家や地域の相談窓口に連絡してください。",
  ],
  consent: "上記の規約を読んで理解し、テストを受けることに同意します。",
  start: "テストを始める",
  errors: {
    required: "この項目を入力してください",
    email: "有効なメールアドレスを入力してください",
    consent: "続けるには規約に同意してください",
  },
  timeLeft: "残り時間",
  timeUp: "時間切れ — 結果を集計しています",
  timeUpNote:
    "すべての質問に答える前に時間切れになりました。未回答の質問は「どちらでもない」として扱われました。",
  testTaker: "受検者",
  editProfile: "情報を編集",
  card: { name: "名前", date: "日付", attempt: "受検No.", disclaimer: "教育・研究目的であり、医学的診断ではありません" },
};

const zh: FormText = {
  heading: "开始之前",
  intro: "简单介绍一下自己，让结果卡片更个性化。点击开始后，你将有 20 分钟回答 20 道题。",
  name: "姓名",
  namePh: "真实姓名或昵称",
  email: "电子邮箱",
  emailPh: "you@example.com",
  gender: "性别",
  genders: { male: "男", female: "女", nonbinary: "非二元", na: "不愿透露" },
  age: "年龄",
  ageUnder18: "18 岁以下",
  aiExp: "AI 工具使用经验",
  exps: { lt1: "1 年及以下", y1_2: "1–2 年", y2_3: "2–3 年", y3p: "3 年以上" },
  select: "请选择…",
  termsHeading: "条款与同意",
  terms: [
    "本测试是一个自我反思工具，并非医学或精神科诊断。",
    "你的资料和答案仅保存在此设备的浏览器中，不会发送到服务器。你可以随时通过清除本网站数据来删除它们。",
    "你的姓名和测试日期只会出现在你选择下载或分享的结果图片上。",
    "如果你未满 18 岁，请在父母或监护人同意的情况下进行测试。",
    "如果你感到困扰或痛苦，请联系心理健康专业人员或当地的心理危机热线。",
  ],
  consent: "我已阅读并理解上述条款，并同意参加测试。",
  start: "开始测试",
  errors: {
    required: "请填写此项",
    email: "请输入有效的电子邮箱地址",
    consent: "请先同意条款再继续",
  },
  timeLeft: "剩余时间",
  timeUp: "时间到 — 正在处理结果",
  timeUpNote: "时间结束时仍有题目未作答。未作答的题目已按“中立”计算。",
  testTaker: "测试者",
  editProfile: "编辑资料",
  card: { name: "姓名", date: "日期", attempt: "测试编号", disclaimer: "仅供教育研究，并非医学诊断" },
};

const ko: FormText = {
  heading: "시작하기 전에",
  intro:
    "결과 카드를 나에게 맞게 만들 수 있도록 간단히 알려 주세요. 시작을 누르면 20개 문항을 20분 안에 풀게 됩니다.",
  name: "이름",
  namePh: "실명 또는 닉네임",
  email: "이메일",
  emailPh: "you@example.com",
  gender: "성별",
  genders: { male: "남성", female: "여성", nonbinary: "논바이너리", na: "밝히고 싶지 않음" },
  age: "나이",
  ageUnder18: "18세 미만",
  aiExp: "AI 도구 사용 경험",
  exps: { lt1: "1년 이하", y1_2: "1–2년", y2_3: "2–3년", y3p: "3년 이상" },
  select: "선택…",
  termsHeading: "약관 및 동의",
  terms: [
    "이 테스트는 자기 성찰을 위한 도구이며, 의학적·정신의학적 진단이 아닙니다.",
    "입력한 정보와 답변은 이 기기의 이 브라우저에만 저장되며 서버로 전송되지 않습니다. 이 사이트의 데이터를 삭제하면 언제든지 지울 수 있습니다.",
    "이름과 테스트 날짜는 직접 다운로드하거나 공유하기로 선택한 결과 이미지에만 표시됩니다.",
    "18세 미만이라면 부모님 또는 보호자의 동의를 받은 후 테스트에 참여해 주세요.",
    "마음이 많이 힘들다면 정신건강 전문가나 지역 위기상담 전화에 연락해 주세요.",
  ],
  consent: "위 약관을 읽고 이해했으며, 테스트 참여에 동의합니다.",
  start: "테스트 시작",
  errors: {
    required: "이 항목을 입력해 주세요",
    email: "올바른 이메일 주소를 입력해 주세요",
    consent: "계속하려면 약관에 동의해 주세요",
  },
  timeLeft: "남은 시간",
  timeUp: "시간 종료 — 결과를 처리하는 중",
  timeUpNote:
    "모든 문항에 답하기 전에 시간이 끝났습니다. 답하지 않은 문항은 “중립”으로 처리되었습니다.",
  testTaker: "응시자",
  editProfile: "정보 수정",
  card: { name: "이름", date: "날짜", attempt: "회차", disclaimer: "교육·연구용이며 의학적 진단이 아닙니다" },
};

const lo: FormText = {
  heading: "ກ່ອນເລີ່ມ",
  intro:
    "ບອກຂໍ້ມູນສັ້ນໆ ກ່ຽວກັບຕົວທ່ານ ເພື່ອໃຫ້ບັດຜົນລັບເປັນຂອງທ່ານ. ເມື່ອກົດເລີ່ມແລ້ວ ທ່ານຈະມີເວລາ 20 ນາທີ ສຳລັບ 20 ຄຳຖາມ.",
  name: "ຊື່",
  namePh: "ຊື່ແທ້ ຫຼື ຊື່ຫຼິ້ນ",
  email: "ອີເມວ",
  emailPh: "you@example.com",
  gender: "ເພດ",
  genders: { male: "ຊາຍ", female: "ຍິງ", nonbinary: "ນອນໄບນາຣີ", na: "ບໍ່ລະບຸ" },
  age: "ອາຍຸ",
  ageUnder18: "ຕ່ຳກວ່າ 18",
  aiExp: "ປະສົບການໃຊ້ເຄື່ອງມື AI",
  exps: { lt1: "ບໍ່ເກີນ 1 ປີ", y1_2: "1–2 ປີ", y2_3: "2–3 ປີ", y3p: "3 ປີຂຶ້ນໄປ" },
  select: "ເລືອກ…",
  termsHeading: "ຂໍ້ຕົກລົງ ແລະ ການຍິນຍອມ",
  terms: [
    "ນີ້ແມ່ນເຄື່ອງມືສຳລັບທົບທວນຕົນເອງ ບໍ່ແມ່ນການບົ່ງມະຕິທາງການແພດ ຫຼື ທາງຈິດຕະເວດ.",
    "ຂໍ້ມູນ ແລະ ຄຳຕອບຂອງທ່ານຖືກເກັບໄວ້ໃນບຣາວເຊີຂອງອຸປະກອນນີ້ເທົ່ານັ້ນ ບໍ່ໄດ້ສົ່ງໄປຫາເຊີບເວີ. ທ່ານສາມາດລຶບໄດ້ທຸກເວລາ ໂດຍການລ້າງຂໍ້ມູນຂອງເວັບໄຊນີ້.",
    "ຊື່ ແລະ ວັນທີທົດສອບຈະສະແດງສະເພາະໃນຮູບຜົນລັບທີ່ທ່ານເລືອກດາວໂຫຼດ ຫຼື ແບ່ງປັນເອງ.",
    "ຫາກທ່ານອາຍຸຕ່ຳກວ່າ 18 ປີ ກະລຸນາເຮັດແບບທົດສອບໂດຍໄດ້ຮັບການຍິນຍອມຈາກພໍ່ແມ່ ຫຼື ຜູ້ປົກຄອງ.",
    "ຫາກທ່ານຮູ້ສຶກທຸກໃຈ ກະລຸນາຕິດຕໍ່ຜູ້ຊ່ຽວຊານດ້ານສຸຂະພາບຈິດ ຫຼື ສາຍດ່ວນຊ່ວຍເຫຼືອໃນທ້ອງຖິ່ນ.",
  ],
  consent: "ຂ້ອຍໄດ້ອ່ານ ແລະ ເຂົ້າໃຈຂໍ້ຕົກລົງຂ້າງເທິງແລ້ວ ແລະ ຍິນຍອມເຮັດແບບທົດສອບ.",
  start: "ເລີ່ມແບບທົດສອບ",
  errors: {
    required: "ກະລຸນາຕື່ມຂໍ້ມູນໃນຊ່ອງນີ້",
    email: "ກະລຸນາໃສ່ອີເມວໃຫ້ຖືກຕ້ອງ",
    consent: "ກະລຸນາຍອມຮັບຂໍ້ຕົກລົງກ່ອນດຳເນີນການຕໍ່",
  },
  timeLeft: "ເວລາທີ່ເຫຼືອ",
  timeUp: "ໝົດເວລາ — ກຳລັງປະມວນຜົນ",
  timeUpNote: "ໝົດເວລາກ່ອນຕອບຄົບທຸກຂໍ້. ຂໍ້ທີ່ຍັງບໍ່ໄດ້ຕອບຖືກນັບເປັນ “ເປັນກາງ”.",
  testTaker: "ຜູ້ເຮັດແບບທົດສອບ",
  editProfile: "ແກ້ໄຂຂໍ້ມູນ",
  card: { name: "ຊື່", date: "ວັນທີ", attempt: "ຄັ້ງທີ", disclaimer: "ເພື່ອການສຶກສາຄົ້ນຄວ້າ ບໍ່ແມ່ນການວິນິດໄສທາງການແພດ" },
};

const km: FormText = {
  heading: "មុនពេលចាប់ផ្តើម",
  intro:
    "សូមប្រាប់ពីខ្លួនអ្នកបន្តិច ដើម្បីឱ្យកាតលទ្ធផលជារបស់អ្នកផ្ទាល់។ នៅពេលចុចចាប់ផ្តើម អ្នកនឹងមានពេល 20 នាទីសម្រាប់សំណួរ 20។",
  name: "ឈ្មោះ",
  namePh: "ឈ្មោះពិត ឬឈ្មោះហៅក្រៅ",
  email: "អ៊ីមែល",
  emailPh: "you@example.com",
  gender: "ភេទ",
  genders: { male: "ប្រុស", female: "ស្រី", nonbinary: "មិនមែនប្រុស/ស្រី", na: "មិនចង់បញ្ជាក់" },
  age: "អាយុ",
  ageUnder18: "ក្រោម 18",
  aiExp: "បទពិសោធន៍ប្រើឧបករណ៍ AI",
  exps: { lt1: "1 ឆ្នាំ ឬតិចជាងនេះ", y1_2: "1–2 ឆ្នាំ", y2_3: "2–3 ឆ្នាំ", y3p: "3 ឆ្នាំឡើងទៅ" },
  select: "ជ្រើសរើស…",
  termsHeading: "លក្ខខណ្ឌ និងការយល់ព្រម",
  terms: [
    "នេះជាឧបករណ៍សម្រាប់ឆ្លុះបញ្ចាំងខ្លួនឯង មិនមែនជាការធ្វើរោគវិនិច្ឆ័យផ្នែកវេជ្ជសាស្ត្រ ឬផ្លូវចិត្តទេ។",
    "ព័ត៌មាន និងចម្លើយរបស់អ្នកត្រូវបានរក្សាទុកតែនៅក្នុងកម្មវិធីរុករកលើឧបករណ៍នេះប៉ុណ្ណោះ ហើយមិនត្រូវបានផ្ញើទៅម៉ាស៊ីនមេទេ។ អ្នកអាចលុបវាបានគ្រប់ពេល ដោយសម្អាតទិន្នន័យរបស់គេហទំព័រនេះ។",
    "ឈ្មោះ និងកាលបរិច្ឆេទធ្វើតេស្តរបស់អ្នក នឹងបង្ហាញតែលើរូបភាពលទ្ធផលដែលអ្នកជ្រើសរើសទាញយក ឬចែករំលែកប៉ុណ្ណោះ។",
    "ប្រសិនបើអ្នកមានអាយុក្រោម 18 ឆ្នាំ សូមធ្វើតេស្តដោយមានការយល់ព្រមពីឪពុកម្តាយ ឬអាណាព្យាបាល។",
    "ប្រសិនបើអ្នកកំពុងមានទុក្ខព្រួយ សូមទាក់ទងអ្នកជំនាញសុខភាពផ្លូវចិត្ត ឬខ្សែទូរសព្ទជំនួយបន្ទាន់ក្នុងតំបន់។",
  ],
  consent: "ខ្ញុំបានអាន និងយល់ពីលក្ខខណ្ឌខាងលើ ហើយយល់ព្រមធ្វើតេស្តនេះ។",
  start: "ចាប់ផ្តើមធ្វើតេស្ត",
  errors: {
    required: "សូមបំពេញប្រអប់នេះ",
    email: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលឱ្យបានត្រឹមត្រូវ",
    consent: "សូមយល់ព្រមលើលក្ខខណ្ឌ ដើម្បីបន្ត",
  },
  timeLeft: "ពេលវេលានៅសល់",
  timeUp: "អស់ពេល — កំពុងដំណើរការលទ្ធផល",
  timeUpNote:
    "ពេលវេលាបានអស់ មុនពេលឆ្លើយគ្រប់សំណួរ។ សំណួរដែលមិនទាន់ឆ្លើយ ត្រូវបានរាប់ជា “អព្យាក្រឹត”។",
  testTaker: "អ្នកធ្វើតេស្ត",
  editProfile: "កែព័ត៌មាន",
  card: { name: "ឈ្មោះ", date: "កាលបរិច្ឆេទ", attempt: "លើកទី", disclaimer: "សម្រាប់ការសិក្សាស្រាវជ្រាវ មិនមែនជាការធ្វើរោគវិនិច្ឆ័យវេជ្ជសាស្ត្រទេ" },
};

const vi: FormText = {
  heading: "Trước khi bắt đầu",
  intro:
    "Hãy cho chúng tôi biết đôi chút về bạn để thẻ kết quả mang dấu ấn riêng. Sau khi nhấn bắt đầu, bạn có 20 phút cho 20 câu hỏi.",
  name: "Tên",
  namePh: "Tên thật hoặc biệt danh",
  email: "Email",
  emailPh: "you@example.com",
  gender: "Giới tính",
  genders: { male: "Nam", female: "Nữ", nonbinary: "Phi nhị nguyên", na: "Không muốn trả lời" },
  age: "Tuổi",
  ageUnder18: "Dưới 18",
  aiExp: "Kinh nghiệm dùng công cụ AI",
  exps: { lt1: "Tối đa 1 năm", y1_2: "1–2 năm", y2_3: "2–3 năm", y3p: "Từ 3 năm trở lên" },
  select: "Chọn…",
  termsHeading: "Điều khoản và đồng ý",
  terms: [
    "Đây là công cụ tự suy ngẫm, không phải chẩn đoán y khoa hay tâm thần.",
    "Thông tin và câu trả lời của bạn chỉ được lưu trong trình duyệt trên thiết bị này, không được gửi lên máy chủ. Bạn có thể xóa chúng bất cứ lúc nào bằng cách xóa dữ liệu của trang web này.",
    "Tên và ngày làm bài chỉ xuất hiện trên ảnh kết quả mà bạn chọn tải xuống hoặc chia sẻ.",
    "Nếu bạn dưới 18 tuổi, vui lòng làm bài khi có sự đồng ý của cha mẹ hoặc người giám hộ.",
    "Nếu bạn đang cảm thấy bất ổn, hãy liên hệ chuyên gia sức khỏe tâm thần hoặc đường dây hỗ trợ khủng hoảng tại địa phương.",
  ],
  consent: "Tôi đã đọc và hiểu các điều khoản trên, và đồng ý tham gia bài kiểm tra.",
  start: "Bắt đầu làm bài",
  errors: {
    required: "Vui lòng điền vào ô này",
    email: "Vui lòng nhập địa chỉ email hợp lệ",
    consent: "Vui lòng đồng ý với điều khoản để tiếp tục",
  },
  timeLeft: "Thời gian còn lại",
  timeUp: "Hết giờ — đang xử lý kết quả",
  timeUpNote:
    "Đã hết giờ trước khi bạn trả lời hết các câu hỏi. Những câu chưa trả lời được tính là “Trung lập”.",
  testTaker: "Người làm bài",
  editProfile: "Sửa thông tin",
  card: { name: "Tên", date: "Ngày", attempt: "Lần thứ", disclaimer: "Phục vụ nghiên cứu giáo dục — không phải chẩn đoán y khoa" },
};

const my: FormText = {
  heading: "မစတင်မီ",
  intro:
    "ရလဒ်ကတ်ကို သင့်အတွက် သီးသန့်ဖြစ်စေရန် သင့်အကြောင်း အနည်းငယ် ပြောပြပါ။ စတင်မည်ကို နှိပ်ပြီးနောက် မေးခွန်း 20 ခုအတွက် 20 မိနစ် အချိန်ရပါမည်။",
  name: "အမည်",
  namePh: "အမည်ရင်း သို့မဟုတ် အမည်ပြောင်",
  email: "အီးမေးလ်",
  emailPh: "you@example.com",
  gender: "ကျား/မ",
  genders: { male: "ကျား", female: "မ", nonbinary: "နွန်ဘိုင်နရီ", na: "မဖော်ပြလိုပါ" },
  age: "အသက်",
  ageUnder18: "18 အောက်",
  aiExp: "AI ကိရိယာများ အသုံးပြုသည့် အတွေ့အကြုံ",
  exps: { lt1: "1 နှစ် သို့မဟုတ် အောက်", y1_2: "1–2 နှစ်", y2_3: "2–3 နှစ်", y3p: "3 နှစ်နှင့်အထက်" },
  select: "ရွေးချယ်ပါ…",
  termsHeading: "စည်းကမ်းချက်များနှင့် သဘောတူညီချက်",
  terms: [
    "ဤစစ်ဆေးမှုသည် မိမိကိုယ်ကို ပြန်လည်သုံးသပ်ရန် ကိရိယာဖြစ်ပြီး ဆေးပညာ သို့မဟုတ် စိတ်ရောဂါဆိုင်ရာ ရောဂါရှာဖွေမှု မဟုတ်ပါ။",
    "သင့်အချက်အလက်နှင့် အဖြေများကို ဤစက်ပစ္စည်းရှိ ဤဘရောက်ဇာတွင်သာ သိမ်းဆည်းထားပြီး ဆာဗာသို့ မပို့ပါ။ ဤဝက်ဘ်ဆိုက်၏ ဒေတာကို ရှင်းလင်းခြင်းဖြင့် အချိန်မရွေး ဖျက်နိုင်ပါသည်။",
    "သင့်အမည်နှင့် စစ်ဆေးသည့်ရက်စွဲကို သင်ဒေါင်းလုဒ် သို့မဟုတ် မျှဝေရန် ရွေးချယ်သည့် ရလဒ်ပုံပေါ်တွင်သာ ပြသပါမည်။",
    "သင့်အသက် 18 နှစ်အောက်ဖြစ်ပါက မိဘ သို့မဟုတ် အုပ်ထိန်းသူ၏ သဘောတူညီချက်ဖြင့် ဖြေဆိုပါ။",
    "သင် စိတ်ဒုက္ခရောက်နေပါက စိတ်ကျန်းမာရေး ကျွမ်းကျင်သူ သို့မဟုတ် ဒေသတွင်းရှိ အရေးပေါ်အကူအညီ ဖုန်းလိုင်းကို ဆက်သွယ်ပါ။",
  ],
  consent: "အထက်ပါ စည်းကမ်းချက်များကို ဖတ်ရှုနားလည်ပြီး ဤစစ်ဆေးမှုကို ဖြေဆိုရန် သဘောတူပါသည်။",
  start: "စစ်ဆေးမှု စတင်မည်",
  errors: {
    required: "ဤအကွက်ကို ဖြည့်ပါ",
    email: "မှန်ကန်သော အီးမေးလ်လိပ်စာ ထည့်ပါ",
    consent: "ဆက်လုပ်ရန် စည်းကမ်းချက်များကို လက်ခံပါ",
  },
  timeLeft: "ကျန်ရှိချိန်",
  timeUp: "အချိန်ကုန်ပါပြီ — ရလဒ်များကို တွက်ချက်နေသည်",
  timeUpNote:
    "မေးခွန်းအားလုံး မဖြေရသေးမီ အချိန်ကုန်သွားပါသည်။ မဖြေရသေးသော မေးခွန်းများကို “ကြားနေ” အဖြစ် ရေတွက်ထားပါသည်။",
  testTaker: "ဖြေဆိုသူ",
  editProfile: "အချက်အလက် ပြင်ရန်",
  card: { name: "အမည်", date: "ရက်စွဲ", attempt: "အကြိမ်", disclaimer: "ပညာရေးသုတေသနအတွက်သာ — ဆေးပညာရောဂါရှာဖွေချက် မဟုတ်ပါ" },
};

const ms: FormText = {
  heading: "Sebelum anda mula",
  intro:
    "Beritahu kami sedikit tentang diri anda supaya kad keputusan anda lebih peribadi. Anda ada 20 minit untuk 20 soalan sebaik sahaja anda tekan mula.",
  name: "Nama",
  namePh: "Nama sebenar atau nama panggilan",
  email: "E-mel",
  emailPh: "you@example.com",
  gender: "Jantina",
  genders: { male: "Lelaki", female: "Perempuan", nonbinary: "Bukan binari", na: "Tidak mahu menyatakan" },
  age: "Umur",
  ageUnder18: "Bawah 18",
  aiExp: "Pengalaman menggunakan alat AI",
  exps: { lt1: "1 tahun atau kurang", y1_2: "1–2 tahun", y2_3: "2–3 tahun", y3p: "3 tahun ke atas" },
  select: "Pilih…",
  termsHeading: "Terma dan persetujuan",
  terms: [
    "Ini ialah alat refleksi diri, bukan diagnosis perubatan atau psikiatri.",
    "Maklumat dan jawapan anda disimpan hanya dalam pelayar ini pada peranti ini; ia tidak dihantar ke pelayan. Anda boleh memadamkannya pada bila-bila masa dengan mengosongkan data laman web ini.",
    "Nama dan tarikh ujian anda hanya dipaparkan pada imej keputusan yang anda pilih untuk dimuat turun atau dikongsi.",
    "Jika anda berumur bawah 18 tahun, sila ambil ujian ini dengan persetujuan ibu bapa atau penjaga.",
    "Jika anda berasa tertekan, sila hubungi profesional kesihatan mental atau talian krisis tempatan.",
  ],
  consent: "Saya telah membaca dan memahami terma di atas, dan saya bersetuju untuk mengambil ujian ini.",
  start: "Mulakan ujian",
  errors: {
    required: "Sila isi ruangan ini",
    email: "Sila masukkan alamat e-mel yang sah",
    consent: "Sila terima terma untuk meneruskan",
  },
  timeLeft: "Masa berbaki",
  timeUp: "Masa tamat — keputusan sedang diproses",
  timeUpNote:
    "Masa tamat sebelum semua soalan dijawab. Soalan yang tidak dijawab dikira sebagai “Neutral”.",
  testTaker: "Peserta ujian",
  editProfile: "Sunting maklumat",
  card: { name: "Nama", date: "Tarikh", attempt: "No. ujian", disclaimer: "Untuk penyelidikan pendidikan — bukan diagnosis perubatan" },
};

const id: FormText = {
  heading: "Sebelum mulai",
  intro:
    "Ceritakan sedikit tentang diri Anda agar kartu hasil Anda lebih personal. Setelah menekan mulai, Anda punya waktu 20 menit untuk 20 pertanyaan.",
  name: "Nama",
  namePh: "Nama asli atau nama panggilan",
  email: "Email",
  emailPh: "you@example.com",
  gender: "Jenis kelamin",
  genders: { male: "Laki-laki", female: "Perempuan", nonbinary: "Non-biner", na: "Tidak ingin menyebutkan" },
  age: "Usia",
  ageUnder18: "Di bawah 18",
  aiExp: "Pengalaman menggunakan alat AI",
  exps: { lt1: "1 tahun atau kurang", y1_2: "1–2 tahun", y2_3: "2–3 tahun", y3p: "3 tahun atau lebih" },
  select: "Pilih…",
  termsHeading: "Ketentuan dan persetujuan",
  terms: [
    "Ini adalah alat refleksi diri, bukan diagnosis medis atau psikiatris.",
    "Data dan jawaban Anda hanya disimpan di browser ini pada perangkat ini dan tidak dikirim ke server. Anda dapat menghapusnya kapan saja dengan menghapus data situs ini.",
    "Nama dan tanggal tes Anda hanya muncul pada gambar hasil yang Anda pilih untuk diunduh atau dibagikan.",
    "Jika Anda berusia di bawah 18 tahun, harap ikuti tes ini dengan persetujuan orang tua atau wali.",
    "Jika Anda merasa tertekan, silakan hubungi profesional kesehatan mental atau layanan krisis setempat.",
  ],
  consent: "Saya telah membaca dan memahami ketentuan di atas, dan saya setuju untuk mengikuti tes ini.",
  start: "Mulai tes",
  errors: {
    required: "Harap isi kolom ini",
    email: "Harap masukkan alamat email yang valid",
    consent: "Harap setujui ketentuan untuk melanjutkan",
  },
  timeLeft: "Sisa waktu",
  timeUp: "Waktu habis — hasil sedang diproses",
  timeUpNote:
    "Waktu habis sebelum semua pertanyaan terjawab. Pertanyaan yang belum dijawab dihitung sebagai “Netral”.",
  testTaker: "Peserta tes",
  editProfile: "Ubah data",
  card: { name: "Nama", date: "Tanggal", attempt: "No. tes", disclaimer: "Untuk riset pendidikan — bukan diagnosis medis" },
};

const tl: FormText = {
  heading: "Bago ka magsimula",
  intro:
    "Magkuwento nang kaunti tungkol sa iyong sarili para maging personal ang iyong result card. May 20 minuto ka para sa 20 tanong pagkapindot mo ng simula.",
  name: "Pangalan",
  namePh: "Tunay na pangalan o palayaw",
  email: "Email",
  emailPh: "you@example.com",
  gender: "Kasarian",
  genders: { male: "Lalaki", female: "Babae", nonbinary: "Non-binary", na: "Ayaw kong sabihin" },
  age: "Edad",
  ageUnder18: "Wala pang 18",
  aiExp: "Karanasan sa paggamit ng AI tools",
  exps: { lt1: "1 taon o mas maikli", y1_2: "1–2 taon", y2_3: "2–3 taon", y3p: "3 taon pataas" },
  select: "Pumili…",
  termsHeading: "Mga tuntunin at pahintulot",
  terms: [
    "Ito ay kasangkapan para sa pagninilay sa sarili, hindi medikal o psychiatric na diagnosis.",
    "Ang iyong mga detalye at sagot ay nakaimbak lamang sa browser na ito sa device na ito; hindi ito ipinapadala sa server. Maaari mo itong burahin anumang oras sa pamamagitan ng pag-clear sa data ng site na ito.",
    "Lalabas lang ang iyong pangalan at petsa ng test sa result image na pipiliin mong i-download o ibahagi.",
    "Kung wala ka pang 18 taong gulang, sagutan ang test nang may pahintulot ng magulang o tagapag-alaga.",
    "Kung dumaranas ka ng matinding hirap ng loob, makipag-ugnayan sa isang mental-health professional o sa lokal na crisis line.",
  ],
  consent: "Nabasa at naunawaan ko ang mga tuntunin sa itaas, at pumapayag akong sagutan ang test.",
  start: "Simulan ang test",
  errors: {
    required: "Pakisagutan ang field na ito",
    email: "Pakilagay ang wastong email address",
    consent: "Pakitanggap ang mga tuntunin para magpatuloy",
  },
  timeLeft: "Natitirang oras",
  timeUp: "Ubos na ang oras — pinoproseso ang iyong resulta",
  timeUpNote:
    "Naubos ang oras bago nasagot ang lahat ng tanong. Ang mga hindi nasagot ay binilang bilang “Neutral”.",
  testTaker: "Kumukuha ng test",
  editProfile: "I-edit ang detalye",
  card: { name: "Pangalan", date: "Petsa", attempt: "Test blg.", disclaimer: "Para sa pang-edukasyong pananaliksik — hindi medikal na diyagnosis" },
};

const hi: FormText = {
  heading: "शुरू करने से पहले",
  intro:
    "अपने बारे में थोड़ा बताएँ, ताकि आपका परिणाम कार्ड आपके लिए बने। शुरू करें दबाने के बाद 20 सवालों के लिए आपके पास 20 मिनट होंगे।",
  name: "नाम",
  namePh: "असली नाम या उपनाम",
  email: "ईमेल",
  emailPh: "you@example.com",
  gender: "लिंग",
  genders: { male: "पुरुष", female: "महिला", nonbinary: "नॉन-बाइनरी", na: "बताना नहीं चाहते" },
  age: "उम्र",
  ageUnder18: "18 से कम",
  aiExp: "AI टूल्स का अनुभव",
  exps: { lt1: "1 साल या कम", y1_2: "1–2 साल", y2_3: "2–3 साल", y3p: "3+ साल" },
  select: "चुनें…",
  termsHeading: "शर्तें और सहमति",
  terms: [
    "यह आत्म-चिंतन का एक साधन है, कोई चिकित्सीय या मनोरोग संबंधी निदान नहीं।",
    "आपकी जानकारी और उत्तर केवल इस डिवाइस के इसी ब्राउज़र में सहेजे जाते हैं; वे किसी सर्वर पर नहीं भेजे जाते। इस साइट का डेटा साफ़ करके आप उन्हें कभी भी हटा सकते हैं।",
    "आपका नाम और टेस्ट की तारीख केवल उसी परिणाम छवि पर दिखेंगे जिसे आप डाउनलोड या साझा करना चुनते हैं।",
    "यदि आपकी उम्र 18 वर्ष से कम है, तो कृपया माता-पिता या अभिभावक की सहमति से टेस्ट दें।",
    "यदि आप परेशान या व्यथित महसूस कर रहे हैं, तो कृपया किसी मानसिक स्वास्थ्य विशेषज्ञ या अपनी स्थानीय संकट हेल्पलाइन से संपर्क करें।",
  ],
  consent: "मैंने ऊपर दी गई शर्तें पढ़ और समझ ली हैं, और मैं टेस्ट देने के लिए सहमत हूँ।",
  start: "टेस्ट शुरू करें",
  errors: {
    required: "कृपया यह फ़ील्ड भरें",
    email: "कृपया एक मान्य ईमेल पता दर्ज करें",
    consent: "आगे बढ़ने के लिए कृपया शर्तें स्वीकार करें",
  },
  timeLeft: "बचा हुआ समय",
  timeUp: "समय समाप्त — आपके परिणाम तैयार किए जा रहे हैं",
  timeUpNote:
    "सभी सवालों के जवाब देने से पहले समय समाप्त हो गया। जिन सवालों के जवाब नहीं दिए गए, उन्हें “तटस्थ” माना गया।",
  testTaker: "टेस्ट देने वाले",
  editProfile: "जानकारी बदलें",
  card: { name: "नाम", date: "तारीख", attempt: "टेस्ट सं.", disclaimer: "शैक्षिक शोध के लिए — यह चिकित्सीय निदान नहीं है" },
};

const ar: FormText = {
  heading: "قبل أن تبدأ",
  intro:
    "أخبرنا قليلًا عن نفسك لتكون بطاقة نتيجتك خاصة بك. لديك 20 دقيقة للإجابة عن 20 سؤالًا بعد الضغط على زر البدء.",
  name: "الاسم",
  namePh: "الاسم الحقيقي أو اسم مستعار",
  email: "البريد الإلكتروني",
  emailPh: "you@example.com",
  gender: "الجنس",
  genders: { male: "ذكر", female: "أنثى", nonbinary: "غير ثنائي", na: "أفضّل عدم الإفصاح" },
  age: "العمر",
  ageUnder18: "أقل من 18",
  aiExp: "الخبرة في استخدام أدوات الذكاء الاصطناعي",
  exps: { lt1: "سنة أو أقل", y1_2: "1–2 سنة", y2_3: "2–3 سنوات", y3p: "3 سنوات فأكثر" },
  select: "اختر…",
  termsHeading: "الشروط والموافقة",
  terms: [
    "هذه أداة للتأمل الذاتي، وليست تشخيصًا طبيًا أو نفسيًا.",
    "تُحفظ بياناتك وإجاباتك في هذا المتصفح على هذا الجهاز فقط، ولا تُرسَل إلى أي خادم. يمكنك حذفها في أي وقت بمسح بيانات هذا الموقع.",
    "يظهر اسمك وتاريخ الاختبار فقط على صورة النتيجة التي تختار تنزيلها أو مشاركتها.",
    "إذا كان عمرك أقل من 18 عامًا، فيُرجى إجراء الاختبار بموافقة أحد الوالدين أو ولي الأمر.",
    "إذا كنت تمر بضيق نفسي، فيُرجى التواصل مع مختص في الصحة النفسية أو مع خط المساعدة للأزمات في منطقتك.",
  ],
  consent: "قرأتُ الشروط أعلاه وفهمتها، وأوافق على إجراء الاختبار.",
  start: "ابدأ الاختبار",
  errors: {
    required: "يُرجى ملء هذا الحقل",
    email: "يُرجى إدخال بريد إلكتروني صالح",
    consent: "يُرجى قبول الشروط للمتابعة",
  },
  timeLeft: "الوقت المتبقي",
  timeUp: "انتهى الوقت — جارٍ معالجة نتائجك",
  timeUpNote:
    "انتهى الوقت قبل الإجابة عن جميع الأسئلة. احتُسبت الأسئلة التي لم تُجب عنها على أنها «محايد».",
  testTaker: "المشارك",
  editProfile: "تعديل البيانات",
  card: { name: "الاسم", date: "التاريخ", attempt: "رقم الاختبار", disclaimer: "لأغراض البحث التعليمي — وليس تشخيصًا طبيًا" },
};

const fr: FormText = {
  heading: "Avant de commencer",
  intro:
    "Parlez-nous un peu de vous pour personnaliser votre carte de résultat. Une fois le test lancé, vous aurez 20 minutes pour répondre aux 20 questions.",
  name: "Nom",
  namePh: "Vrai nom ou pseudo",
  email: "E-mail",
  emailPh: "you@example.com",
  gender: "Genre",
  genders: { male: "Homme", female: "Femme", nonbinary: "Non binaire", na: "Je préfère ne pas répondre" },
  age: "Âge",
  ageUnder18: "Moins de 18 ans",
  aiExp: "Expérience des outils d’IA",
  exps: { lt1: "1 an ou moins", y1_2: "1 à 2 ans", y2_3: "2 à 3 ans", y3p: "3 ans et plus" },
  select: "Choisir…",
  termsHeading: "Conditions et consentement",
  terms: [
    "Il s’agit d’un outil de réflexion personnelle, et non d’un diagnostic médical ou psychiatrique.",
    "Vos informations et vos réponses sont enregistrées uniquement dans ce navigateur, sur cet appareil, et ne sont envoyées à aucun serveur. Vous pouvez les effacer à tout moment en supprimant les données de ce site.",
    "Votre nom et la date du test n’apparaissent que sur l’image de résultat que vous choisissez de télécharger ou de partager.",
    "Si vous avez moins de 18 ans, merci de passer le test avec l’accord d’un parent ou d’un tuteur légal.",
    "Si vous êtes en détresse, contactez un professionnel de la santé mentale ou une ligne d’écoute de crise près de chez vous.",
  ],
  consent: "J’ai lu et compris les conditions ci-dessus, et j’accepte de passer le test.",
  start: "Commencer le test",
  errors: {
    required: "Veuillez remplir ce champ",
    email: "Veuillez saisir une adresse e-mail valide",
    consent: "Veuillez accepter les conditions pour continuer",
  },
  timeLeft: "Temps restant",
  timeUp: "Temps écoulé — calcul de vos résultats",
  timeUpNote:
    "Le temps s’est écoulé avant que toutes les questions aient reçu une réponse. Les questions sans réponse ont été comptées comme « Neutre ».",
  testTaker: "Participant",
  editProfile: "Modifier mes informations",
  card: { name: "Nom", date: "Date", attempt: "Test n°", disclaimer: "À des fins de recherche éducative — pas un diagnostic médical" },
};

const de: FormText = {
  heading: "Bevor du startest",
  intro:
    "Erzähl uns kurz etwas über dich, damit deine Ergebniskarte persönlich wird. Sobald du auf Start drückst, hast du 20 Minuten für die 20 Fragen.",
  name: "Name",
  namePh: "Echter Name oder Spitzname",
  email: "E-Mail",
  emailPh: "you@example.com",
  gender: "Geschlecht",
  genders: { male: "Männlich", female: "Weiblich", nonbinary: "Nicht-binär", na: "Keine Angabe" },
  age: "Alter",
  ageUnder18: "Unter 18",
  aiExp: "Erfahrung mit KI-Tools",
  exps: { lt1: "1 Jahr oder weniger", y1_2: "1–2 Jahre", y2_3: "2–3 Jahre", y3p: "3 Jahre oder mehr" },
  select: "Auswählen…",
  termsHeading: "Bedingungen und Einwilligung",
  terms: [
    "Dies ist ein Werkzeug zur Selbstreflexion, keine medizinische oder psychiatrische Diagnose.",
    "Deine Angaben und Antworten werden nur in diesem Browser auf diesem Gerät gespeichert und nicht an einen Server gesendet. Du kannst sie jederzeit löschen, indem du die Daten dieser Website entfernst.",
    "Dein Name und das Testdatum erscheinen nur auf dem Ergebnisbild, das du herunterladen oder teilen möchtest.",
    "Wenn du unter 18 bist, mach den Test bitte mit dem Einverständnis eines Elternteils oder Erziehungsberechtigten.",
    "Wenn es dir gerade nicht gut geht, wende dich bitte an eine Fachkraft für psychische Gesundheit oder an ein Krisentelefon in deiner Nähe.",
  ],
  consent:
    "Ich habe die oben genannten Bedingungen gelesen und verstanden und willige ein, den Test zu machen.",
  start: "Test starten",
  errors: {
    required: "Bitte fülle dieses Feld aus",
    email: "Bitte gib eine gültige E-Mail-Adresse ein",
    consent: "Bitte akzeptiere die Bedingungen, um fortzufahren",
  },
  timeLeft: "Verbleibende Zeit",
  timeUp: "Zeit abgelaufen — deine Ergebnisse werden ausgewertet",
  timeUpNote:
    "Die Zeit ist abgelaufen, bevor alle Fragen beantwortet waren. Unbeantwortete Fragen wurden als „Neutral“ gewertet.",
  testTaker: "Testperson",
  editProfile: "Angaben bearbeiten",
  card: { name: "Name", date: "Datum", attempt: "Test-Nr.", disclaimer: "Für Bildung und Forschung — keine medizinische Diagnose" },
};

const es: FormText = {
  heading: "Antes de empezar",
  intro:
    "Cuéntanos un poco sobre ti para personalizar tu tarjeta de resultados. Cuando pulses empezar, tendrás 20 minutos para las 20 preguntas.",
  name: "Nombre",
  namePh: "Nombre real o apodo",
  email: "Correo electrónico",
  emailPh: "you@example.com",
  gender: "Género",
  genders: { male: "Hombre", female: "Mujer", nonbinary: "No binario", na: "Prefiero no decirlo" },
  age: "Edad",
  ageUnder18: "Menos de 18",
  aiExp: "Experiencia con herramientas de IA",
  exps: { lt1: "1 año o menos", y1_2: "1–2 años", y2_3: "2–3 años", y3p: "3 años o más" },
  select: "Seleccionar…",
  termsHeading: "Términos y consentimiento",
  terms: [
    "Esta es una herramienta de autorreflexión, no un diagnóstico médico ni psiquiátrico.",
    "Tus datos y respuestas se guardan solo en este navegador, en este dispositivo; no se envían a ningún servidor. Puedes borrarlos en cualquier momento eliminando los datos de este sitio.",
    "Tu nombre y la fecha del test solo aparecen en la imagen de resultados que decidas descargar o compartir.",
    "Si tienes menos de 18 años, haz el test con el consentimiento de tu madre, padre o tutor legal.",
    "Si estás pasando por un momento difícil, contacta con un profesional de la salud mental o con una línea de crisis de tu zona.",
  ],
  consent: "He leído y entendido los términos anteriores y doy mi consentimiento para hacer el test.",
  start: "Empezar el test",
  errors: {
    required: "Rellena este campo",
    email: "Introduce un correo electrónico válido",
    consent: "Acepta los términos para continuar",
  },
  timeLeft: "Tiempo restante",
  timeUp: "Se acabó el tiempo — procesando tus resultados",
  timeUpNote:
    "El tiempo se agotó antes de responder todas las preguntas. Las preguntas sin responder se contaron como «Neutral».",
  testTaker: "Participante",
  editProfile: "Editar datos",
  card: { name: "Nombre", date: "Fecha", attempt: "Test n.º", disclaimer: "Con fines de investigación educativa — no es un diagnóstico médico" },
};

const pt: FormText = {
  heading: "Antes de começar",
  intro:
    "Conte-nos um pouco sobre si para personalizar o seu cartão de resultado. Depois de carregar em começar, terá 20 minutos para as 20 perguntas.",
  name: "Nome",
  namePh: "Nome verdadeiro ou alcunha",
  email: "E-mail",
  emailPh: "you@example.com",
  gender: "Género",
  genders: { male: "Masculino", female: "Feminino", nonbinary: "Não binário", na: "Prefiro não dizer" },
  age: "Idade",
  ageUnder18: "Menos de 18",
  aiExp: "Experiência com ferramentas de IA",
  exps: { lt1: "1 ano ou menos", y1_2: "1–2 anos", y2_3: "2–3 anos", y3p: "3 anos ou mais" },
  select: "Selecionar…",
  termsHeading: "Termos e consentimento",
  terms: [
    "Esta é uma ferramenta de autorreflexão, não um diagnóstico médico ou psiquiátrico.",
    "Os seus dados e respostas ficam guardados apenas neste navegador, neste dispositivo, e não são enviados para nenhum servidor. Pode apagá-los a qualquer momento limpando os dados deste site.",
    "O seu nome e a data do teste aparecem apenas na imagem de resultado que escolher descarregar ou partilhar.",
    "Se tiver menos de 18 anos, faça o teste com o consentimento de um dos pais ou do encarregado de educação.",
    "Se estiver a passar por um momento de sofrimento, contacte um profissional de saúde mental ou uma linha de apoio em situações de crise da sua zona.",
  ],
  consent: "Li e compreendi os termos acima e aceito fazer o teste.",
  start: "Começar o teste",
  errors: {
    required: "Preencha este campo",
    email: "Introduza um endereço de e-mail válido",
    consent: "Aceite os termos para continuar",
  },
  timeLeft: "Tempo restante",
  timeUp: "Tempo esgotado — a processar os resultados",
  timeUpNote:
    "O tempo terminou antes de todas as perguntas terem resposta. As perguntas sem resposta foram contadas como «Neutro».",
  testTaker: "Participante",
  editProfile: "Editar dados",
  card: { name: "Nome", date: "Data", attempt: "Teste n.º", disclaimer: "Para fins de investigação educativa — não é um diagnóstico médico" },
};

const it: FormText = {
  heading: "Prima di iniziare",
  intro:
    "Raccontaci qualcosa di te per personalizzare la tua scheda dei risultati. Dopo aver premuto avvia, avrai 20 minuti per le 20 domande.",
  name: "Nome",
  namePh: "Nome vero o soprannome",
  email: "Email",
  emailPh: "you@example.com",
  gender: "Genere",
  genders: { male: "Uomo", female: "Donna", nonbinary: "Non binario", na: "Preferisco non dirlo" },
  age: "Età",
  ageUnder18: "Meno di 18",
  aiExp: "Esperienza con strumenti di IA",
  exps: { lt1: "1 anno o meno", y1_2: "1–2 anni", y2_3: "2–3 anni", y3p: "3 anni o più" },
  select: "Seleziona…",
  termsHeading: "Termini e consenso",
  terms: [
    "Questo è uno strumento di autoriflessione, non una diagnosi medica o psichiatrica.",
    "I tuoi dati e le tue risposte vengono salvati solo in questo browser, su questo dispositivo, e non vengono inviati a nessun server. Puoi cancellarli in qualsiasi momento eliminando i dati di questo sito.",
    "Il tuo nome e la data del test compaiono solo sull’immagine dei risultati che scegli di scaricare o condividere.",
    "Se hai meno di 18 anni, fai il test con il consenso di un genitore o di un tutore.",
    "Se stai attraversando un momento di sofferenza, contatta un professionista della salute mentale o una linea di supporto per le crisi nella tua zona.",
  ],
  consent: "Ho letto e compreso i termini qui sopra e acconsento a svolgere il test.",
  start: "Inizia il test",
  errors: {
    required: "Compila questo campo",
    email: "Inserisci un indirizzo email valido",
    consent: "Accetta i termini per continuare",
  },
  timeLeft: "Tempo rimasto",
  timeUp: "Tempo scaduto — elaborazione dei risultati",
  timeUpNote:
    "Il tempo è scaduto prima che tutte le domande avessero una risposta. Le domande senza risposta sono state contate come «Neutrale».",
  testTaker: "Partecipante",
  editProfile: "Modifica dati",
  card: { name: "Nome", date: "Data", attempt: "Test n.", disclaimer: "A scopo di ricerca educativa — non è una diagnosi medica" },
};

const ru: FormText = {
  heading: "Перед началом",
  intro:
    "Расскажите немного о себе, чтобы карточка с результатом была персональной. После старта у вас будет 20 минут на 20 вопросов.",
  name: "Имя",
  namePh: "Настоящее имя или псевдоним",
  email: "Эл. почта",
  emailPh: "you@example.com",
  gender: "Пол",
  genders: { male: "Мужской", female: "Женский", nonbinary: "Небинарный", na: "Предпочитаю не указывать" },
  age: "Возраст",
  ageUnder18: "Младше 18",
  aiExp: "Опыт работы с ИИ-инструментами",
  exps: { lt1: "1 год или меньше", y1_2: "1–2 года", y2_3: "2–3 года", y3p: "3 года и больше" },
  select: "Выберите…",
  termsHeading: "Условия и согласие",
  terms: [
    "Это инструмент для самоанализа, а не медицинский или психиатрический диагноз.",
    "Ваши данные и ответы хранятся только в этом браузере на этом устройстве и не отправляются на сервер. Вы можете удалить их в любой момент, очистив данные этого сайта.",
    "Ваше имя и дата прохождения теста отображаются только на изображении с результатом, которое вы решите скачать или отправить.",
    "Если вам меньше 18 лет, проходите тест с согласия родителя или законного представителя.",
    "Если вам тяжело, обратитесь к специалисту в области психического здоровья или на местную линию кризисной помощи.",
  ],
  consent: "Я прочитал(а) и понял(а) условия выше и даю согласие на прохождение теста.",
  start: "Начать тест",
  errors: {
    required: "Заполните это поле",
    email: "Введите корректный адрес эл. почты",
    consent: "Примите условия, чтобы продолжить",
  },
  timeLeft: "Осталось времени",
  timeUp: "Время вышло — обрабатываем результаты",
  timeUpNote:
    "Время закончилось до того, как были даны ответы на все вопросы. Вопросы без ответа засчитаны как «Нейтрально».",
  testTaker: "Участник",
  editProfile: "Изменить данные",
  card: { name: "Имя", date: "Дата", attempt: "Тест №", disclaimer: "Для образовательных исследований — не медицинский диагноз" },
};

const nl: FormText = {
  heading: "Voordat je begint",
  intro:
    "Vertel ons iets over jezelf, zodat je resultaatkaart persoonlijk wordt. Zodra je op start drukt, heb je 20 minuten voor de 20 vragen.",
  name: "Naam",
  namePh: "Echte naam of bijnaam",
  email: "E-mail",
  emailPh: "you@example.com",
  gender: "Gender",
  genders: { male: "Man", female: "Vrouw", nonbinary: "Non-binair", na: "Zeg ik liever niet" },
  age: "Leeftijd",
  ageUnder18: "Onder 18",
  aiExp: "Ervaring met AI-tools",
  exps: { lt1: "1 jaar of korter", y1_2: "1–2 jaar", y2_3: "2–3 jaar", y3p: "3 jaar of langer" },
  select: "Kies…",
  termsHeading: "Voorwaarden en toestemming",
  terms: [
    "Dit is een hulpmiddel voor zelfreflectie, geen medische of psychiatrische diagnose.",
    "Je gegevens en antwoorden worden alleen in deze browser op dit apparaat opgeslagen en niet naar een server verstuurd. Je kunt ze altijd wissen door de gegevens van deze site te verwijderen.",
    "Je naam en de testdatum staan alleen op de resultaatafbeelding die je zelf downloadt of deelt.",
    "Ben je jonger dan 18, doe de test dan met toestemming van een ouder of voogd.",
    "Voel je je erg slecht? Neem dan contact op met een hulpverlener in de geestelijke gezondheidszorg of een crisislijn bij jou in de buurt.",
  ],
  consent: "Ik heb de voorwaarden hierboven gelezen en begrepen, en ik geef toestemming om de test te doen.",
  start: "Start de test",
  errors: {
    required: "Vul dit veld in",
    email: "Vul een geldig e-mailadres in",
    consent: "Accepteer de voorwaarden om verder te gaan",
  },
  timeLeft: "Resterende tijd",
  timeUp: "Tijd is om — je resultaten worden verwerkt",
  timeUpNote:
    "De tijd was om voordat alle vragen waren beantwoord. Onbeantwoorde vragen zijn als “Neutraal” geteld.",
  testTaker: "Deelnemer",
  editProfile: "Gegevens wijzigen",
  card: { name: "Naam", date: "Datum", attempt: "Test nr.", disclaimer: "Voor educatief onderzoek — geen medische diagnose" },
};

const sv: FormText = {
  heading: "Innan du börjar",
  intro:
    "Berätta lite om dig själv så att ditt resultatkort blir personligt. När du trycker på start har du 20 minuter på dig för de 20 frågorna.",
  name: "Namn",
  namePh: "Riktigt namn eller smeknamn",
  email: "E-post",
  emailPh: "you@example.com",
  gender: "Kön",
  genders: { male: "Man", female: "Kvinna", nonbinary: "Icke-binär", na: "Vill inte uppge" },
  age: "Ålder",
  ageUnder18: "Under 18",
  aiExp: "Erfarenhet av AI-verktyg",
  exps: { lt1: "1 år eller mindre", y1_2: "1–2 år", y2_3: "2–3 år", y3p: "3 år eller mer" },
  select: "Välj…",
  termsHeading: "Villkor och samtycke",
  terms: [
    "Det här är ett verktyg för självreflektion, inte en medicinsk eller psykiatrisk diagnos.",
    "Dina uppgifter och svar sparas bara i den här webbläsaren på den här enheten och skickas inte till någon server. Du kan när som helst radera dem genom att rensa webbplatsens data.",
    "Ditt namn och testdatum visas bara på den resultatbild som du själv väljer att ladda ner eller dela.",
    "Om du är under 18 år, gör testet med samtycke från en förälder eller vårdnadshavare.",
    "Om du mår dåligt, kontakta en professionell inom psykisk hälsa eller en lokal stödlinje för personer i kris.",
  ],
  consent: "Jag har läst och förstått villkoren ovan och samtycker till att göra testet.",
  start: "Starta testet",
  errors: {
    required: "Fyll i det här fältet",
    email: "Ange en giltig e-postadress",
    consent: "Godkänn villkoren för att fortsätta",
  },
  timeLeft: "Tid kvar",
  timeUp: "Tiden är slut — dina resultat bearbetas",
  timeUpNote:
    "Tiden tog slut innan alla frågor var besvarade. Obesvarade frågor räknades som ”Neutral”.",
  testTaker: "Testdeltagare",
  editProfile: "Ändra uppgifter",
  card: { name: "Namn", date: "Datum", attempt: "Test nr", disclaimer: "För utbildning och forskning — ingen medicinsk diagnos" },
};

export const FORM_TEXT: Record<string, FormText> = {
  en,
  th,
  ja,
  zh,
  ko,
  lo,
  km,
  vi,
  my,
  ms,
  id,
  tl,
  hi,
  ar,
  fr,
  de,
  es,
  pt,
  it,
  ru,
  nl,
  sv,
};

export function getFormText(lang: string): FormText {
  return FORM_TEXT[lang] ?? en;
}
