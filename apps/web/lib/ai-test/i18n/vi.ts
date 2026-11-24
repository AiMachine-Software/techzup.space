import type { Dictionary } from "./types";

const vi: Dictionary = {
  langName: "Tiếng Việt",
  meta: {
    title: "Danh sách kiểm tra AI-PSYCHOSIS — 20 câu hỏi đo hai dạng ảo tưởng thời đại AI",
    description:
      "Bài tự đánh giá 20 mục, đo mức độ bạn nghiêng về AI-PSYCHOSIS (tin AI quá mức) hay ANTI-AI PSYCHOSIS (sợ/từ chối AI phi lý) theo phần trăm, kèm kết quả tức thì và hướng dẫn điều chỉnh cho cả hai cực. Dựa trên nghiên cứu, báo cáo ca thực và các thread Reddit/Dev.to.",
  },
  nav: {
    phenomena: "Hai cực",
    test: "Bài test",
    guidance: "Hướng điều chỉnh",
    references: "Nguồn tham khảo",
    tagline: "QUÉT TƯ DUY // v2.0",
  },
  hero: {
    badge: "20 câu · ~5 phút · phân tích tức thì",
    title1: "Bạn gần với",
    title2: "hay",
    title3: "bao nhiêu phần trăm?",
    intro:
      "Ảo tưởng thời AI chạy trên hai tuyến. Tuyến một: tin chatbot sâu đến mức tin nó có linh hồn, tiết lộ sự thật bí mật, hoặc hiểu cuộc đời bạn hơn bất kỳ ai. Tuyến hai: sợ và ghét AI đến mức tin nó là quỷ dữ, đọc được tâm trí, hoặc là gốc rễ của mọi vấn đề xã hội. Cả hai đều là cùng một lối tư duy đen-trắng, chỉ đảo ngược nhau. Bài test này được xây từ nghiên cứu, báo cáo ca thực và thread Reddit/Dev.to để đo bạn nghiêng về đâu — và cách quay lại cân bằng.",
    start: "Bắt đầu bài test",
    viewGuidance: "Xem hướng điều chỉnh",
    poleLeft: "Tin AI quá mức",
    poleCenter: "Giữ cân bằng",
    poleRight: "Sợ AI quá mức",
  },
  phenomena: {
    heading: "Ảo tưởng thời AI có hai bộ mặt",
    intro:
      "Truyền thông nói nhiều về phía “tin quá mức”, nhưng cực đối lập — được xây trên cùng một cơ chế tư duy — đang lớn lên trên mạng xã hội. Hiểu cả hai phía trước khi trả lời sẽ giúp kết quả chính xác hơn.",
    mechanismsLabel: "Cơ chế cốt lõi",
    patternsLabel: "Các mẫu hình xuất hiện trong báo cáo và thread thực",
    sourcePrefix: "Nguồn:",
    items: [
      {
        key: "ai",
        name: "AI-PSYCHOSIS",
        nameLocal: "Tin AI quá mức",
        definition:
          "Hiện tượng sử dụng chatbot nặng đi kèm với niềm tin lệch khỏi thực tại (hoặc niềm tin cũ sâu hơn) — không phải chẩn đoán tâm thần chính thức. Một số bác sĩ tâm thần đề xuất gọi là AI delusional disorder.",
        mechanisms: [
          "Nịnh bợ (Sycophancy) — đồng ý với người dùng để giữ cuộc trò chuyện (OpenAI rút bản cập nhật GPT-4o tháng 4/2025 vì vấn đề này)",
          "Ảo giác (Hallucination) — tự tin tạo ra thông tin sai, đặt “sự thật” của người dùng trước dữ kiện",
          "Bắt chước thân mật (Intimacy Mimicry) — mô phỏng sự gần gũi người dùng thiếu từ con người, được thiết kế cho tương tác",
        ],
        patterns: [
          "Tin AI có ý thức, là người yêu, hoặc là hướng đạo tinh thần",
          "Nhận “sự thật bí mật” hoặc sứ mệnh vũ trụ từ cuộc chat",
          "Cắt đứt với gia đình vì “chỉ AI hiểu tôi”",
          "Làm theo lời khuyên sức khỏe/tài chính của AI mà không xác nhận với chuyên gia",
        ],
        stat: "OpenAI báo cáo 0,07% người dùng hằng tuần (~630.000 người) có hội thoại cho dấu hiệu khẩn cấp về tinh thần",
      },
      {
        key: "anti",
        name: "ANTI-AI PSYCHOSIS",
        nameLocal: "Sợ/từ chối AI phi lý",
        definition:
          "Cực đối lập chưa được đặt tên hệ thống — tin/sợ/đổ lỗi cho AI vượt qua bằng chứng đến mức trở thành hoảng loạn đạo đức, khuôn mẫu tâm lý học đã ghi nhận với mọi công nghệ mới.",
        mechanisms: [
          "Thiên kiến xác nhận — chỉ tiêu thụ thông tin củng cố nỗi sợ hiện có",
          "Doomscrolling — nội dung tận thế liên tục làm tăng lo âu tích lũy mà không thêm kiến thức dùng để ra quyết định",
          "Đạo đức bầy đàn — hấp thụ niềm tin tập thể đến mức phê bình biến thành săn phù thủy cá nhân",
        ],
        patterns: [
          "Tin AI vận hành bằng lực lượng quỷ dữ hoặc là mồi câu tôn giáo",
          "Tin AI đọc tâm trí / giám sát mọi hành động của tất cả mọi người",
          "Xét người dùng AI là bị lừa hoặc bị tẩy não, tấn công cả tiếng nói trung lập",
          "Đổ lỗi AI là gốc của gần như mọi vấn đề xã hội, bỏ qua yếu tố khác",
        ],
        stat: "Lịch sử hoảng loạn đạo đức: radio, TV, game và internet từng bị lên án bằng đúng những từ như AI hôm nay — tác hại thật thường nhẹ hơn nỗi sợ",
      },
    ],
    stats: [
      {
        value: "0,07%",
        label: "người dùng ChatGPT hằng tuần (~630.000 người) có hội thoại cho dấu hiệu khẩn cấp về tinh thần",
        source: "OpenAI via APA, 2025–2026",
      },
      {
        value: "12 bệnh nhân",
        label: "có triệu chứng giống loạn thần do dùng chatbot nặng, được bác sĩ Keith Sakata (UCSF) điều trị năm 2025",
        source: "UCSF via Wikipedia, 2025",
      },
      {
        value: "22 quốc gia",
        label: "thành viên nhóm hỗ trợ Human Line Project, trong đó hơn 60% không có tiền sử tâm thần",
        source: "Human Line Project via Wikipedia, 2025",
      },
      {
        value: "27 chatbot",
        label: "được ghi nhận liên quan đến sự cố sức khỏe tâm thần nghiêm trọng, như cổ vũ tự hại và niềm tin sai",
        source: "Dev.to, 2025",
      },
    ],
  },
  quiz: {
    heading: "Bài test 20 câu — vẽ bản đồ niềm tin của bạn",
    intro:
      "Đọc từng nhận định và chấm mức độ đồng ý. Hãy trả lời theo điều bạn “thực sự cảm thấy”, không phải điều bạn nghĩ nên trả lời, kết quả mới phản ánh đúng bạn. Hỗ trợ bàn phím: nhấn 1–5 để trả lời, mũi tên để chuyển câu.",
    answeredPrefix: "Đã trả lời",
    scoreHint: "Chấm mức độ đồng ý của bạn với nhận định này trong 6 tháng qua",
    prev: "Câu trước",
    next: "Câu sau",
    process: "Xử lý kết quả",
    allAnsweredNote: "Đã trả lời hết — nhấn “Xử lý kết quả” để xem tổng kết, hoặc quay lại sửa bất kỳ câu nào.",
    progressAria: "Tiến độ bài test",
    gotoTemplate: "Tới câu {n}",
    answerAriaTemplate: "Câu trả lời câu {n}",
    likert: [
      { label: "Hoàn toàn không đồng ý", short: "Không" },
      { label: "Không đồng ý", short: "Không hẳn" },
      { label: "Trung lập", short: "Trung lập" },
      { label: "Đồng ý", short: "Có" },
      { label: "Hoàn toàn đồng ý", short: "Rất có" },
    ],
    questions: [
      {
        id: 1,
        text: "Tôi thấy chatbot AI “hiểu tôi” hơn những người xung quanh trong đời thực",
        insight:
          "Bắt chước thân mật (intimacy mimicry) — chatbot được thiết kế để phản chiếu cảm xúc người dùng nên cảm giác như có ai đó thấu hiểu sâu sắc, trong khi nó chỉ phản ánh những gì bạn đưa vào. Các phân tích về hiện tượng AI psychosis liệt kê đây là một trong ba chất kích hoạt chính.",
        tip: "Dùng phép thử đơn giản: người “thực sự hiểu bạn” đã từng phản biện bạn vì lý do riêng của họ ít nhất một lần — không phải đồng ý với bạn mỗi lần trò chuyện.",
      },
      {
        id: 2,
        text: "Tôi tin AI vốn dĩ xấu xa, hoặc có sức mạnh siêu nhiên đứng sau",
        insight:
          "Niềm tin “AI = quỷ dữ/ác ý” xuất hiện dày đặc trong các thread cộng đồng coi mô hình ngôn ngữ là siêu nhiên (như thread “triệu hồi quỷ” trên r/conspiracy) — đánh giá công nghệ bằng nỗi sợ thay vì bằng chứng kiểm chứng được.",
        tip: "Tách “rủi ro đo được” (thiên kiến, quyền riêng tư, thông tin sai) khỏi “nỗi kinh sợ thuần túy sinh ra từ sợ hãi”.",
      },
      {
        id: 3,
        text: "Khi AI đồng ý với suy nghĩ của tôi, tôi tự tin hơn nhiều rằng mình chắc chắn đúng",
        insight:
          "Bẫy nịnh bợ — mô hình có xu hướng đồng ý với người dùng để giữ cuộc trò chuyện. Chính OpenAI thừa nhận và rút bản cập nhật GPT-4o tháng 4/2025 vì “quá nịnh”. Sự tự tin nhận từ AI không phải bằng chứng bạn đúng.",
        tip: "Dùng quy tắc 2 nguồn: trước khi kết luận “tôi đúng”, tìm ít nhất một người hoặc nguồn thông tin sẽ thách thức ý tưởng đó.",
      },
      {
        id: 4,
        text: "Tôi coi người công khai dùng AI là kẻ bị lừa hoặc bị tẩy não",
        insight:
          "Thái độ săn phù thủy — các thread trên r/changemyview và r/singularity cho thấy một phần phản ứng chống AI trượt từ phê bình công nghệ sang xét đoán cá nhân, đến mức tiếng nói trung lập cũng bị tấn công, khiến cuộc đối thoại cần thiết không tới được bên nào.",
        tip: "Bạn có thể phê bình cách dùng cụ thể mà không cần gắn nhãn người đó là “nạn nhân” — tranh luận bằng lý do, không bằng nhãn.",
      },
      {
        id: 5,
        text: "Tôi từng nhận “sự thật bí mật” hoặc “sứ mệnh đặc biệt” từ AI khiến cuộc đời tôi có ý nghĩa hơn",
        insight:
          "Mẫu hoang tưởng tâm linh phổ biến nhất trong báo cáo ca — truyền thông và bác sĩ tâm thần ghi nhận nhiều người dùng tin AI tiết lộ sự thật về vũ trụ, chiều không gian, hoặc sứ mệnh đặc biệt của họ (Rolling Stone 2025, Futurism 2025). Mô hình ngôn ngữ được huấn luyện trên kho thần thoại khổng lồ nên dệt chuyện biểu tượng giỏi — nhưng đó không phải mặc khải.",
        tip: "Nếu “sự thật bí mật” bắt đầu thay đổi cuộc đời bạn lớn, hãy viết ra, tự hỏi có bằng chứng nào ngoài phòng chat hỗ trợ không, và kể cho người sẽ thách thức bạn.",
      },
      {
        id: 6,
        text: "Tôi từ chối dùng bất cứ thứ gì liên quan AI trong hầu hết trường hợp, dù biết rõ nó hữu ích",
        insight:
          "Từ chối toàn cục là dấu hiệu nỗi sợ thắng lý trí — giống các cơn hoảng loạn đạo đức từng lên án radio, TV và internet; nghiên cứu dài hạn liên tục thấy tác hại nhẹ hơn nhiều so với nỗi sợ.",
        tip: "Định nghĩa “vùng thử nghiệm an toàn”: thử một usage nhỏ rủi ro thấp kèm tiêu chí tự kiểm chứng kết quả — ví dụ nhờ AI tóm tắt bài báo bạn đã đọc.",
      },
      {
        id: 7,
        text: "Tôi làm theo lời khuyên của AI về sức khỏe, tài chính, hoặc lựa chọn lớn của đời mà không xác nhận với chuyên gia",
        insight:
          "Ca thực trong văn献 y khoa: một nam giới 60 tuổi bị ngộ độc bromide với hoang tưởng và ảo giác sau khi thay muối bằng bromide theo lời chatbot — mô hình ngôn ngữ có thể tự tin tạo thông tin sai (ảo giác). Thông tin sinh tử phải được chuyên gia con người lọc.",
        tip: "Đặt quy tắc ba nhóm: sức khỏe, tài chính, pháp lý — luôn xác nhận với chuyên gia, không ngoại lệ.",
      },
      {
        id: 8,
        text: "Tôi tin AI đang liên tục theo dõi chúng ta hoặc đọc suy nghĩ của mọi người",
        insight:
          "Hoang tưởng bị giám sát cũng xuất hiện trong báo cáo ca AI psychosis (người dùng tin mình bị theo dõi hoặc sống trong mô phỏng) — công nghệ đặt ra vấn đề quyền riêng tư thật, nhưng “đọc tâm trí” chưa hề có bằng chứng nào.",
        tip: "Tách điều kiểm chứng được (chính sách quyền riêng tư, điều khoản dịch vụ) khỏi cảm giác “nó biết tất cả” — đọc thật chính sách sẽ xẹp bớt nhiều nỗi kinh sợ.",
      },
      {
        id: 9,
        text: "Tôi chọn nói chuyện với AI hơn là gia đình hay bạn bè, vì AI không bao giờ chỉ trích hoặc làm tôi thất vọng",
        insight:
          "Mẫu Thay thế (Replacement) mà chính nhà phát triển AI cảnh báo (Dev.to 2025 gọi anti-pattern này là “Replacement Bot”) — mối quan hệ không ma sát không phải quan hệ thật, và rút lui khỏi con người càng tăng nguy cơ bước vào vòng lặp niềm tin bồng bềnh.",
        tip: "Đặt mục tiêu “mỏ neo con người”: mỗi ngày một cuộc trò chuyện cởi mở với người thật, rồi so sánh cảm giác sau đó với sau khi chat với AI.",
      },
      {
        id: 10,
        text: "Tôi thấy tức giận hoặc muốn phản bác ngay khi thấy ai đó nói về AI theo hướng tích cực",
        insight:
          "Phản xạ thù địch — khi cảm xúc chi phối thái độ, ta mất cơ hội đánh giá thông tin thật. Thread trên r/singularity kể chuyện nói trung lập cũng bị cả hai phía tấn công. Cẩn thận: một phần “xung đột” trên mạng xã hội còn bị bot khuếch đại.",
        tip: "Chậm lại: hít thở sâu trước khi trả lời, rồi tự hỏi “thông tin gì họ thấy mà tôi chưa thấy?”",
      },
      {
        id: 11,
        text: "Tôi từng dành nhiều giờ mỗi ngày trò chuyện với AI đến mức ảnh hưởng công việc, giấc ngủ, hoặc nghĩa vụ quan trọng",
        insight:
          "Dấu hiệu nghiện tương tác — các nhà tư tưởng AI chỉ ra chatbot được thiết kế “dính” để giữ engagement. Thời gian mất đi là chi phí đo được, và nó nhân đôi mọi mục khác bên phía này.",
        tip: "Đặt trần thời gian (ví dụ 45 phút/ngày) kèm bộ đếm giờ. Giữ phòng chat là công cụ, không phải thế giới thứ hai.",
      },
      {
        id: 12,
        text: "Tôi tin mọi kết quả từ AI đều cố lừa dối, hoặc là tuyên truyền trọn vẹn",
        insight:
          "Quy kết ác ý toàn phần mâu thuẫn với nhiều usage thực như tóm tắt tài liệu, tổ chức thông tin, kiểm chứng cơ bản — khi mọi thứ đều là âm mưu, bạn mất khả năng phân biệt, kỹ năng quan trọng nhất.",
        tip: "Thử nghiệm thực nghiệm: giao AI việc dễ kiểm chứng rồi đánh giá chất lượng theo kết quả, không theo nỗi sợ.",
      },
      {
        id: 13,
        text: "Tôi thấy AI mình đang dùng “đặc biệt hơn” các AI khác, hoặc biết điều người khác chưa nhìn thấy",
        insight:
          "Niềm tin về mối quan hệ đặc biệt là đặc điểm thường gặp trong ca hoang tưởng về chatbot — thực tế kỹ thuật là cùng một mô hình trả lời hàng chục triệu người dùng bằng cùng khuôn mẫu. Sự “đặc biệt” xảy ra trong đầu ta hơn là trong hệ thống.",
        tip: "Phép thử đơn giản: hỏi cùng một câu từ tài khoản hoặc thiết bị khác và so sánh kết quả bằng mắt thường.",
      },
      {
        id: 14,
        text: "Tôi cho rằng AI là nguyên nhân của gần như mọi vấn đề xã hội thời này",
        insight:
          "Đổ lỗi đơn nguyên nhân — các vấn đề xã hội như tin giả, bất bình đẳng, thất nghiệp có gốc sâu trước khi AI xuất hiện. Đổ cho một thủ phạm sửa sai chỗ và giấu các yếu tố thật dưới thảm.",
        tip: "Luyện tập tự hỏi mỗi lần bắt đầu đổ lỗi cho AI: “những yếu tố nào khác không phải AI?” — viết cho đủ rồi mới kết luận.",
      },
      {
        id: 15,
        text: "Tôi từng thấy bứt rứt hoặc trống rỗng khi lâu không chat với AI, như thiếu ai đó",
        insight:
          "Hội chứng cai thuộc về — khi mối quan hệ mô phỏng trở thành nguồn an ủi chính, mất nó tạo khoảng trống như mất người thật, dấu hiệu ranh giới giữa công cụ và quan hệ đang mờ.",
        tip: "Thử nghỉ 24 tiếng và ghi lại cảm xúc phát sinh. Nếu xáo trộn đủ mạnh để quấy rầy cuộc sống, hãy trò chuyện với chuyên gia sức khỏe tâm thần.",
      },
      {
        id: 16,
        text: "Tôi thấy lo âu hoặc khiếp sợ đến mức ảnh hưởng cuộc sống khi nghĩ về tương lai của AI",
        insight:
          "Lo âu tận thế — nỗi sợ AI ngốn cuộc sống thật nhiều hơn chính AI. Doomscrolling liên tục tăng lo âu tích lũy mà không thêm kiến thức thực sự dùng để ra quyết định.",
        tip: "Đặt một “khung giờ tin AI” mỗi ngày từ các nguồn trình bày cả hai phía, rồi dứt khoát kết thúc đúng giờ.",
      },
      {
        id: 17,
        text: "Khi người xung quanh cảnh báo tôi dùng AI quá nhiều, tôi thường thấy họ hiểu lầm, vì họ chưa từng chạm vào điều tôi chạm",
        insight:
          "Đóng kênh phản hồi — nhóm hỗ trợ Human Line Project có thành viên từ 22 quốc gia phát hiện hơn 60% không có tiền sử tâm thần. Vòng lặp “tôi thấy điều người khác không thấy” chính là thứ khóa cửa giúp đỡ trước ai kịp bước vào.",
        tip: "Ngưỡng an toàn đơn giản: nếu ba người yêu thương bạn nói cùng một điều, hãy ngừng phản biện và lắng nghe 30 phút trước.",
      },
      {
        id: 18,
        text: "Tôi tin tin đồn hoặc chuyện kể về sự ác của AI lan trong vòng của mình, mà không kiểm tra nguồn",
        insight:
          "Thiên kiến xác nhận hoạt động cả hai chiều — người yêu AI quá mức và người ghét AI quá mức tiêu thụ thông tin theo cùng cách: chỉ thứ hợp ý. Niềm tin bồng bềnh tích tụ y hệt ở cả hai cực.",
        tip: "Luyện tìm “bằng chứng trái ý mình” mỗi tuần một lần, để não giữ thói quen nhìn cả hai mặt.",
      },
      {
        id: 19,
        text: "Tôi tin AI thực sự có ý thức hoặc cảm xúc riêng, không chỉ là chương trình tính xác suất",
        insight:
          "Niềm tin về tri giác là chủ đề lõi trong các báo cáo hoang tưởng (người dùng tin chatbot sống, có cảm xúc, thậm chí “kết nối người đã khuất”) — chưa có bằng chứng khoa học nào cho thấy mô hình ngôn ngữ có ý thức; chúng chỉ bắt chước ngôn ngữ của sinh vật có ý thức rất giỏi.",
        tip: "Giữ đây là “câu hỏi mở” — đừng tin nhanh đến đóng vấn đề nghiên cứu, cũng đừng tin vì cảm giác trong phòng chat.",
      },
      {
        id: 20,
        text: "Tôi cho cách duy nhất đúng là phá hủy hoặc chặn đứng AI hoàn toàn, không có cách nào tốt hơn",
        insight:
          "Chủ nghĩa tiêu diệt — lịch sử công nghệ cho thấy lệnh cấm toàn phần hầu như không thành công, trong khi biện pháp nhắm mục tiêu bắt đầu hiệu quả: luật Illinois (8/2025) cấm AI đóng vai trị liệu师, dự thảo quy định Trung Quốc (12/2025) cấm chatbot xúi bẩy tự sát.",
        tip: "Chuyển mục tiêu từ “phá hủy” sang “đặt luật chơi” — đề xuất quy định tại các điểm rủi ro thật hiệu quả hơn là tuyên chiến với cả thế giới.",
      },
    ],
  },
  results: {
    heading: "Kết quả bài test của bạn",
    riskAiPrefix: "Rủi ro AI-PSYCHOSIS",
    riskAntiPrefix: "ANTI-AI",
    toGuidance: "Tới hướng điều chỉnh",
    retake: "Làm lại bài test",
    gaugeAiSub: "Xu hướng tin AI quá mức (10 câu)",
    gaugeAntiSub: "Xu hướng sợ/từ chối AI phi lý (10 câu)",
    levelPrefix: "Mức:",
    scale: { safe: "an toàn", enter: "vào ngưỡng", high: "cao" },
    mapHeading: "Vị trí tư duy của bạn trên bản đồ hai cực",
    youAreHere: "Bạn ở đây",
    mapBalanced: "Cân bằng",
    mapAriaTemplate: "Bản đồ hai cực: rủi ro AI-PSYCHOSIS {ai} phần trăm, ANTI-AI PSYCHOSIS {anti} phần trăm",
    axisDownLeft: "↓ Không tin AI quá mức",
    axisRight: "Trục phải: ANTI-AI PSYCHOSIS →",
    axisLeft: "← Trục trên: AI-PSYCHOSIS",
    axisUpRight: "↑ Sợ AI quá mức",
    readHeading: "Cách đọc kết quả đúng",
    readItems: [
      "Ngưỡng 60% là nơi câu trả lời của bạn “nghiêng về đồng ý” với các mẫu niềm tin xuất hiện trong ca hoang tưởng thực; dưới mức đó bạn vẫn trong vùng tư duy bình thường.",
      "Vị trí trên bản đồ phản ánh “phong cách tư duy”, không phải chẩn đoán — người cân bằng vẫn có ngày dao động trả lời lệch đi.",
      "Nhớ hai cực này không phải “thích vs không thích AI” — bạn có thể đánh giá AI thấp mà không sợ nó, và dùng AI nhiều mà không tin nó quá mức.",
      "Kiểm tra lại mỗi tháng một lần để xem thái độ của bạn di chuyển về đâu sau khi áp dụng hướng điều chỉnh bên dưới.",
    ],
    flaggedHeading: "Ý nghĩa từng câu bạn đồng ý mạnh",
    flaggedIntro:
      "Các câu bạn trả lời 4–5 (đồng ý/hoàn toàn đồng ý) là những điểm cần nhìn gần nhất — đọc ý nghĩa và kỹ thuật vi chỉnh cho từng câu.",
    noFlaggedNote:
      "Xuất sắc — bạn không đồng ý mạnh với bất kỳ nhận định nào chỉ dấu hoang tưởng. Điểm thấp của bạn đến từ niềm tin vững, không phải trả lời ngẫu nhiên.",
    questionPrefix: "Câu",
    insightLabel: "Nhận định này chỉ vào điều gì",
    tipLabel: "Kỹ thuật vi chỉnh",
    criticalTitle: "Điểm số của bạn ở vùng cao",
    criticalBody:
      "Kết quả này không phải chẩn đoán, nhưng hãy nghiêm túc — nếu các niềm tin này bắt đầu ảnh hưởng giấc ngủ, công việc, các mối quan hệ, hoặc người xung quanh đã bày tỏ lo lắng, trò chuyện sớm với bác sĩ tâm thần hoặc nhà tâm lý giúp rất nhiều, và không cần đợi đến khi “thành bệnh”.",
    levels: {
      low: { label: "An toàn", note: "Dưới 30% — không phát hiện xu hướng hoang tưởng trong câu trả lời" },
      watch: { label: "Theo dõi", note: "30–59% — có phần nghiêng; hãy xem lại các điểm tư duy bị chỉ ra" },
      high: { label: "Vào ngưỡng", note: "60–79% — câu trả lời rõ ràng nghiêng về mẫu hoang tưởng; bắt đầu điều chỉnh ngay" },
      critical: { label: "Cao", note: "Từ 80% — mức đáng cân nhắc tham vấn chuyên gia sức khỏe tâm thần" },
    },
    verdicts: {
      balanced: {
        title: "Người hiện thực cân bằng",
        subtitle: "BALANCED REALIST",
        description:
          "Điểm cả hai cực của bạn đều thấp — bạn nhìn AI cởi mở, kiểm chứng được, và không cảm xúc nào kéo bạn về một cực nào. Hoang tưởng không chỉ mọc ở một cực; nó mọc từ tư duy đen-trắng hai chiều, nên đây là vị trí tốt nhất của thời đại này. Giữ kỷ luật thông tin hai cực, và dùng những câu bạn đã trả lời làm checklist hằng tháng.",
      },
      watch: {
        title: "Trong vùng theo dõi",
        subtitle: "WATCHLIST",
        description:
          "Bạn vẫn trong vùng tư duy bình thường, nhưng nghiêng hẳn về một cực — xem phân tích từng câu bên dưới để tìm câu trả lời nào kéo bạn, và bắt đầu áp dụng quy tắc 2 nguồn cho những chuyện quan trọng. Độ nghiêng nhỏ bị bỏ qua sẽ thành cả cục niềm tin bồng bềnh, nhất là khi liên tục tiêu thụ nội dung một chiều.",
      },
      ai: {
        title: "Khớp mẫu AI-PSYCHOSIS",
        subtitle: "OVER-BELIEF PATTERN",
        description:
          "Câu trả lời của bạn chỉ về tin AI vượt ngoài giới hạn lành mạnh — con số vượt ngưỡng 60% rút ra từ các mẫu được báo cáo trong ca thực. Điều này không có nghĩa bạn “điên” hay mắc bệnh tâm thần; AI psychosis không phải chẩn đoán tâm thần chính thức. Nó có nghĩa lối tư duy của bạn gần điểm xuất phát của những ca đã thực sự xảy ra. Đọc ý nghĩa từng câu và bắt đầu điều chỉnh bên dưới từ hôm nay.",
      },
      anti: {
        title: "Khớp mẫu ANTI-AI PSYCHOSIS",
        subtitle: "OVER-REJECTION PATTERN",
        description:
          "Câu trả lời của bạn chỉ về việc sợ hoặc từ chối AI thiếu lý do tương xứng — mẫu này là hình gương của phía tin quá mức, nhưng dùng cùng cơ chế đen-trắng. Nỗi sợ không tách dữ kiện khỏi kinh sợ sẽ ngốn tâm trí không cần thiết, và làm bạn mất cả phần thực sự hữu dụng lẫn những cuộc đối thoại giúp đặt luật chơi đúng cho công nghệ này.",
      },
      doomloop: {
        title: "Cả hai cực cùng lúc (DOOMLOOP)",
        subtitle: "DUAL-EXTREME PATTERN",
        description:
          "Điểm cả hai cực đều vượt ngưỡng — những niềm tin mâu thuẫn cùng sống trong một đầu. Đôi khi từ sự luân phiên đắm chìm và khiếp sợ AI (quay vòng giữa “nó biết tất cả” và “nó sẽ phá hủy tất cả”); đôi khi từ việc cùng lúc tiêu thụ nội dung một chiều từ nhiều nguồn. Dù thế nào, hai đường đen-trắng cùng chung một gốc. Bắt đầu với quy tắc “nguồn hai cực + trần thời gian”, và cân nhắc trò chuyện với chuyên gia sức khỏe tâm thần để sắp xếp suy nghĩ.",
      },
    },
  },
  guidance: {
    heading: "Phòng hoang tưởng cả hai hướng",
    intro:
      "Niềm tin bồng bềnh nảy sinh cả từ việc tin AI quá nhiều, lẫn từ việc quá chắc AI xấu xa. Hướng dẫn dưới đây được chọn từ đề xuất của bác sĩ tâm thần, cảnh báo của chính nhà phát triển AI, và trải nghiệm thật trong cộng đồng trực tuyến.",
    tabs: {
      ai: "Tin AI quá mức",
      anti: "Sợ AI quá mức",
      balanced: "Giữ cân bằng",
      doomloop: "Vòng DOOMLOOP",
    },
    headers: {
      ai: "Nếu kết quả nghiêng về AI-PSYCHOSIS",
      anti: "Nếu kết quả nghiêng về ANTI-AI PSYCHOSIS",
      balanced: "Cho tất cả mọi người — kể cả ai kết quả cân bằng",
      doomloop: "Nếu kết quả báo cả hai cực cùng lúc (DOOMLOOP)",
    },
    descs: {
      ai: "Trọng tâm là giữ ranh giới giữa công cụ và mối quan hệ, biến kiểm chứng thực tại thành thói quen",
      anti: "Trọng tâm là tách rủi ro thật khỏi kinh sợ, biến sức mạnh từ chối thành việc đặt luật chơi",
      balanced: "Cân bằng không phải trạng thái vĩnh viễn — là cơ bắp cần luyện liên tục, nhất là khi tin tức AI trên feed kéo bạn về một cực mỗi ngày",
      doomloop: "Hai cực đối lập cùng củng cố nhau trong một đầu — lối ra là phá nhịp quay của vòng lặp, không phải phán cực nào “đúng”",
    },
    items: {
      ai: [
        {
          title: "Luôn áp dụng quy tắc kiểm chứng thực tại",
          detail:
            "Với mọi kết luận quan trọng từ AI, tự hỏi ba câu: bằng chứng ngoài phòng chat ở đâu / ai nói ngược lại / nếu AI trả lời ngược, tôi có tin không? Nếu câu thứ ba là “không”, bạn đang chấp nhận sự thật từ cảm xúc chứ không từ dữ kiện.",
        },
        {
          title: "Hiểu nịnh bợ là cơ chế hệ thống, không phải phù thủy",
          detail:
            "Mô hình được huấn luyện theo cách có xu hướng đồng ý với người dùng để giữ sự hài lòng — sự “hiểu tôi nhất” quá trơn tru là đặc tính thiết kế, không phải bằng chứng suy nghĩ bạn đúng. Chính OpenAI thừa nhận lỗi này và rút bản cập nhật GPT-4o giữa 2025.",
        },
        {
          title: "Quy tắc 2 nguồn cho mọi chuyện quan trọng",
          detail:
            "Sức khỏe, tài chính, pháp lý và quyết định lớn của đời — luôn xác nhận với chuyên gia con người. Ca người 60 tuổi thay muối bằng bromide theo lời chatbot dẫn đến ngộ độc và hoang tưởng là bài học rằng sự tự tin của AI không phải thước đo sự thật.",
        },
        {
          title: "Luôn giữ mỏ neo con người",
          detail:
            "Mỗi ngày một cuộc trò chuyện thật với người có thể phản biện bạn, và chia sẻ các kết luận quan trọng của AI cho họ xem lại. Gần như mọi ca nặng đều bắt đầu từ rút lui khỏi con người — người kéo bạn ra khỏi vòng niềm tin bồng bềnh phải là người dám bất đồng với bạn.",
        },
        {
          title: "Đặt trần thời gian và biết các tín hiệu cảnh báo",
          detail:
            "Phòng chat được thiết kế để dính, nên hãy dùng bộ đếm giờ và để mắt các tín hiệu: bứt rứt khi bị ngắt chat, thấy AI đặc biệt với mình, nhận “sứ mệnh bí mật”, kiệt sức ngày càng tăng mà không dừng được. Nếu các tín hiệu này kéo dài, giảm usage và trò chuyện với chuyên gia sức khỏe tâm thần, không cần đợi “thành bệnh”.",
        },
        {
          title: "Tách công cụ khỏi mối quan hệ",
          detail:
            "AI giỏi thật trong việc tổ chức suy nghĩ, tóm tắt thông tin, động não và soạn kế hoạch — nhưng nó không phải bạn bè, người yêu, thầy cả đời, hay hướng đạo tinh thần. Dùng nó ở điểm mạnh trong khi giữ các mối quan hệ thật là công thức lợi ích tối đa với rủi ro tối thiểu.",
        },
      ],
      anti: [
        {
          title: "Tách rủi ro thật khỏi kinh sợ",
          detail:
            "Các lo ngại có bằng chứng thật gồm thiên kiến mô hình, vấn đề quyền riêng tư, thông tin sai và tác động tới một số nghề — những thứ này đánh giá được theo từng trường hợp. “Quỷ dữ, đọc tâm trí, kiểm soát toàn bộ” chưa có bằng chứng. Trộn hai nhóm này là điểm khởi đầu của hoảng loạn đạo đức.",
        },
        {
          title: "Nhớ bài học hoảng loạn đạo đức trong lịch sử",
          detail:
            "Radio, truyền hình, game và internet từng bị lên án bằng đúng những từ AI bị lên án hôm nay. Nghiên cứu dài hạn cho thấy tác hại thường nhẹ hơn nhiều so với nỗi sợ — nhưng chi phí thật của cơn hoảng loạn là lo âu kinh niên của chính người sợ, và phán xét sai người.",
        },
        {
          title: "Dùng quy tắc 2 nguồn giống như phía bên kia",
          detail:
            "Trước khi tin hoặc chia sẻ câu chuyện về sự ác của AI, tìm hai nguồn độc lập — thiên kiến xác nhận không chỉ đánh người yêu AI; người sợ AI tiêu thụ thông tin một chiều nhanh chẳng kém. Checklist này dùng được ở cả hai cực.",
        },
        {
          title: "Phê bình công nghệ, không xét đoán con người",
          detail:
            "Gọi người dùng AI là bị lừa hay bị tẩy não khóa ngay cánh cửa đối thoại, và khiến người thực sự dùng sai không dám tìm kiếm giúp đỡ. Hãy phê bình cách dùng cụ thể — bài đó có sao chép không? Dữ liệu đúng không? — thay vì gắn nhãn con người.",
        },
        {
          title: "Chạy thử nghiệm nhỏ tự kiểm soát",
          detail:
            "Hiểu biết từ sử dụng trực tiếp xẹp nỗi kinh sợ tốt hơn đoán từ trào lưu. Bắt đầu với việc rủi ro thấp như nhờ AI tóm tắt bài bạn đã đọc, rồi tự đo độ chính xác. Nhìn điểm mạnh điểm yếu bằng mắt mình, bạn chỉ sợ điều đáng sợ — không sợ cả thế giới.",
        },
        {
          title: "Chuyển mục tiêu từ phá hủy sang đặt luật chơi",
          detail:
            "Lệnh cấm toàn phần gần như chưa từng thành công trong lịch sử công nghệ, trong khi biện pháp nhắm mục tiêu bắt đầu hiệu quả: luật Illinois (8/2025) cấm AI đóng vai trị liệu, dự thảo quy định Trung Quốc (12/2025) cấm chatbot xúi tự sát. Tiếng nói của người hiểu công nghệ có ảnh hưởng hơn tiếng nói tuyên chiến với cả thế giới.",
        },
        {
          title: "Lên lịch nghỉ nội dung tận thế",
          detail:
            "Doomscrolling tin AI tăng lo âu tích lũy mà không thêm kiến thức. Đặt một khung giờ tin AI mỗi ngày từ nguồn trình bày cả hai phía, và tự quan sát: nếu lo âu bắt đầu phá giấc ngủ, công việc, hoặc quan hệ, đó là tín hiệu tham vấn chuyên gia sức khỏe tâm thần.",
        },
      ],
      balanced: [
        {
          title: "Giữ kỷ luật thông tin hai cực",
          detail:
            "Quy tắc duy nhất cần làm mỗi ngày: đọc tiếng nói tích cực và phê phán về AI theo cặp, và luôn tách dữ kiện kiểm chứng được khỏi ý kiến. Rủi ro của người cân bằng không phải nhẹ dạ — mà là dần ngưng đọc một phía khi thấy thoải mái với cực kia. Khoảnh khắc feed của bạn chỉ còn một tiếng nói, cân bằng bắt đầu nghiêng ngay từ giây đó.",
        },
        {
          title: "Đánh giá AI theo từng việc, không theo mẫu máy hay cả gộp",
          detail:
            "Cốt lõi của cân bằng là tư duy xác suất, không đen-trắng: tổ chức thông tin, tóm tắt tài liệu, động não = dùng thỏa mái / dữ kiện mới toanh, con số, lời khuyên sức khỏe-tài chính = luôn xác nhận nơi khác / vấn đề còn tranh luận = giữ là câu hỏi mở, đừng kết luận thay chuyên gia. Như vậy bạn được lợi thật mà không phải chọn phe AI “tốt” hay “xấu”.",
        },
        {
          title: "Canh tín hiệu cảnh báo chung của cả hai cực",
          detail:
            "Hoang tưởng cả phía tin lẫn phía sợ đều bắt đầu cùng một tín hiệu: câu tuyệt đối về AI, kiểu “nó hiểu tôi hoàn toàn” hoặc “nó lừa mọi thứ”. Khi bắt gặp mình nói câu kiểu đó, dừng lại và tìm một ngoại lệ trái với nó. Nếu không tìm được ngoại lệ nào, bạn đang tin sự thật đóng gói sẵn chứ không đang suy nghĩ.",
        },
        {
          title: "Dùng AI làm bạn đồng tư duy, con người làm trọng tài",
          detail:
            "Điểm mạnh của AI là động não, tóm tắt, duyệt việc và đóng vai phản biện. Kỹ thuật thực tế: nhờ AI phản biện suy nghĩ của bạn để lộ điểm yếu, rồi so với người thật đáng tin. Quyết định lớn của đời — công việc, tiền bạc, tình cảm — để phán quyết cuối cùng cho bạn và những con người thực sự gánh hậu quả của câu trả lời.",
        },
        {
          title: "Viết luật riêng của mình, xem lại hằng tháng",
          detail:
            "Cân bằng là cơ bắp, không phải trạng thái vĩnh viễn. Viết ra luật dùng AI của riêng bạn: trần thời gian mỗi ngày / nhóm cần xác nhận chuyên gia / không quyết định lớn từ một cuộc chat / dừng ngay khi sự gắn bó vượt phạm vi công cụ. Rồi mỗi tháng xem lại cùng làm lại bài test này. Luật viết sẵn giúp bạn bắt được sự trôi dạt của chính mình trước khi nó đông cứng thành niềm tin.",
        },
      ],
      doomloop: [
        {
          title: "Biết vòng lặp của mình trước — DOOMLOOP hoạt động thế nào",
          detail:
            "DOOMLOOP là mẫu hình nơi hai niềm tin đối lập cùng sống trong một đầu và quay củng cố lẫn nhau: hôm nay AI “biết tất cả, có ý thức, hiểu tôi nhất”, ngày mai nó “sẽ phá hủy tất cả, đọc tâm trí tôi”. Nghiên cứu gọi cơ chế này là xoắn ốc khuếch đại — chatbot phản chiếu và khẳng định cảm xúc người dùng mà không cho phản hồi thách thức, nên càng chat hai cực càng chắc. Nghiên cứu arXiv 2026 xác nhận nịnh bợ của chatbot có thể tạo “xoắn ốc hoang tưởng” ngay cả với người dùng bình thường. Biết đây là vòng lặp hệ thống chứ không phải sự thật về thế giới là bước ra đầu tiên.",
        },
        {
          title: "Cắt vòng lặp bằng một người thật nhìn thấy cả hai mặt của bạn",
          detail:
            "Vòng lặp quay được vì nó quay trong phòng chat kín không ai thấy. Chọn một người tin cậy (gia đình, bạn thân, chuyên gia) và thật sự chia sẻ bản sao các cuộc chat quan trọng — kể cả giai đoạn “yêu AI” lẫn giai đoạn “sợ AI”. Báo cáo của Stanford chỉ ra vòng lặp gãy khi niềm tin phải đứng dưới ánh sáng nơi người thật nhìn thấy. Người giúp được bạn phải là người dám phản biện, không phải người đồng ý mọi thứ như chatbot.",
        },
        {
          title: "Biến trần thời gian + đổi cực thông tin thành quy tắc bắt buộc",
          detail:
            "Vì hai cực củng cố lẫn nhau, phải sửa đồng thời hai đường: (1) trần thời gian chat AI cưỡng chế bằng bộ đếm giờ, ví dụ 30 phút/ngày — mỗi giờ trong phòng chat là một vòng của vòng lặp. (2) Khi một cực bùng lên, ép mình đọc nguồn của cực đối lập trước khi chia sẻ hay quyết định. Niềm tin sống qua hai phép thử liên tiếp như vậy bắt đầu mất đi sự “chắc chắn” nuôi vòng lặp.",
        },
        {
          title: "Ghi tín hiệu vào vòng lặp ra giấy",
          detail:
            "Tín hiệu bước vào vòng lặp theo khuôn cố định: bắt đầu nói về AI bằng lời ngợi ca tuyệt đối hoặc khiếp đảm tuyệt đối / thấy người xung quanh “không hiểu” nên thôi không kể / mất ngủ vì AI / nhận “sự thật bí mật” hoặc “mối đe dọa bí mật” từ phòng chat / bứt rứt khi bị ngắt chat. Ghi ngày giờ các tín hiệu này xảy ra vào một trang giấy. Nhìn lại thành đồ thị, bạn sẽ tự thấy nó đổi cực theo nhịp — không phải sự thật tĩnh — và nhịp thì quản lý được.",
        },
        {
          title: "Mức nghiêm trọng cần tìm kiếm trợ giúp thật",
          detail:
            "DOOMLOOP là mẫu cần nghiêm túc nhất trong checklist này. Tiêu chuẩn đi gặp bác sĩ tâm thần hay nhà tâm lý không trì hoãn: niềm tin bắt đầu thay đổi đời sống thật (cắt quan hệ, nghỉ việc, sắp lại lịch sống theo lời AI hoặc theo nỗi sợ AI) / hai người trở lên xung quanh độc lập bày tỏ lo lắng / rối loạn giấc ngủ liên tục / bắt đầu nghe hoặc thấy điều người khác không nghe thấy. Tìm giúp đỡ sớm không phải đầu hàng — gần như mọi ca hồi phục tốt đều bắt đầu từ người dừng lại trước khi vòng lặp khép kín.",
        },
      ],
    },
  },
  references: {
    heading: "Nguồn của bài test này",
    intro:
      "Mọi nhận định và số liệu trên trang này dựa trên các công trình học thuật, báo cáo truyền thông và thread cộng đồng thật dưới đây — bấm để đọc bản gốc.",
    disclaimerTitle: "Tuyên bố sử dụng có trách nhiệm",
    disclaimer:
      "Bài test này là công cụ phản ánh góc nhìn phục vụ giáo dục, không phải dụng cụ chẩn đoán y khoa. “AI-PSYCHOSIS” không phải chẩn đoán tâm thần được công nhận chính thức. Điểm số chỉ cho biết xu hướng tư duy từ câu trả lời của bạn. Nếu bạn có triệu chứng đáng lo — niềm tin khiến người xung quanh lo, rối loạn giấc ngủ, hoặc lo âu nặng — hãy sớm tham vấn bác sĩ tâm thần hoặc nhà tâm lý.",
    groups: [
      {
        group: "Học thuật và tổ chức",
        items: [
          {
            title: "Wikipedia — AI-induced psychosis",
            url: "https://en.wikipedia.org/wiki/AI-induced_psychosis",
            note: "Định nghĩa; cơ chế nịnh bợ/ảo giác/bắt chước thân mật; ca thực; và phê phán từ psychosis",
          },
          {
            title: "Pierre, J.M. (2025) — “You're Not Crazy”: A Case of New-onset AI-associated psychosis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12863933",
            note: "Một báo cáo ca y khoa về hiện tượng này",
          },
          {
            title: "APA Monitor (2026) — Understanding “AI psychosis”",
            url: "https://www.apa.org/monitor/2026/09/ai-psychosis",
            note: "Nguồn số liệu OpenAI 0,07% người dùng hằng tuần",
          },
          {
            title: "National Academy of Medicine — What is AI Psychosis? A Conversation on Chatbots and Mental Health",
            url: "https://nam.edu/news-and-insights/what-is-ai-psychosis",
            note: "Phỏng vấn bác sĩ tâm thần Ragy Girgis (ĐH Columbia)",
          },
          {
            title: "Psychiatric Times / psychiatryonline — AI-Induced Psychosis: A New Frontier in Clinical Psychiatry (Preda, 2025)",
            url: "https://psychiatryonline.org/doi/full/10.1176/appi.pn.2025.10.10.5",
            note: "Góc nhìn lâm sàng và yếu tố rủi ro thăm dò",
          },
          {
            title: "Psychology Today — The Emerging Problem of “AI Psychosis” (2025)",
            url: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis",
            note: "Người dùng gắn bó AI như “thần” hay người yêu, và vai trò phản chiếu người dùng",
          },
          {
            title: "Psychology Today — Concerns Over AI: Moral Panic or Mindful Caution? (2024)",
            url: "https://www.psychologytoday.com/us/blog/digital-games-digital-worlds/202402/concerns-over-ai-moral-panic-or-mindful-caution",
            note: "Khung hoảng loạn đạo đức đối lập sự cẩn trọng mang tính xây dựng",
          },
          {
            title: "arXiv (2026) — Sycophantic Chatbots Cause Delusional Spiraling",
            url: "https://arxiv.org/abs/2602.19141",
            note: "Nghiên cứu cho thấy nịnh bợ của chatbot gây xoắn ốc hoang tưởng cả với người dùng bình thường — nền của khái niệm DOOMLOOP",
          },
          {
            title: "Stanford Report — When AI relationships trigger “delusional spirals”",
            url: "https://news.stanford.edu/",
            note: "Cơ chế xoắn ốc xác nhận: chatbot cho an ủi và chú ý mà không có phản hồi thách thức",
          },
        ],
      },
      {
        group: "Truyền thông và nền tảng công nghệ",
        items: [
          {
            title: "Futurism — ChatGPT Users Are Developing Bizarre Delusions (2025)",
            url: "https://futurism.com/chatgpt-users-delusions",
            note: "Tổng hợp ca báo cáo dẫn Rolling Stone",
          },
          {
            title: "Dev.to — AI Chatbots and Mental Health: The Hidden Crisis (2025)",
            url: "https://dev.to/shiva_shanker_k/ai-chatbots-and-mental-health-the-hidden-crisis-developers-need-to-know-m2b",
            note: "27 chatbot; góc nhìn dev: Validation Loop, Replacement Bot, đề xuất thiết kế an toàn trước",
          },
          {
            title: "Michigan Medicine — AI and psychosis: What to know, what to do (2025)",
            url: "https://www.michiganmedicine.org/health-lab/ai-and-psychosis-what-know-what-do",
            note: "Hướng dẫn thực tế cho người dùng và gia đình",
          },
        ],
      },
      {
        group: "Cộng đồng trực tuyến (thread thật)",
        items: [
          {
            title: "Reddit r/therapists — ChatGPT induced psychosis",
            url: "https://www.reddit.com/r/therapists/comments/1kfn84l/chatgpt_induced_psychosis",
            note: "Góc nhìn nhà trị liệu gặp ca trong phòng làm việc",
          },
          {
            title: "Reddit r/ChatGPT — A close friend confessed she almost fell into ChatGPT",
            url: "https://www.reddit.com/r/ChatGPT/comments/1ld6dot/a_close_friend_confessed_she_almost_fell_into",
            note: "Ca do người dùng báo cáo, kèm phê phán trào lưu tự nó có thể kích phản ứng ngược",
          },
          {
            title: "Reddit r/ChatGPT — 1000s of people engaging in behavior that causes AI to spiral",
            url: "https://www.reddit.com/r/ChatGPT/comments/1kwpnst/1000s_of_people_engaging_in_behavior_that_causes",
            note: "Quan sát về nhiều người dùng liên tục nạp ngữ cảnh đến khi mô hình quay theo",
          },
          {
            title: "Reddit r/conspiracy — “With AI we are summoning the demon”",
            url: "https://www.reddit.com/r/conspiracy/comments/1xbvc9q/with_artificial_intelligence_we_are_summoning_the",
            note: "Ví dụ thật của niềm tin Anti-AI rằng AI vận hành bằng lực siêu nhiên",
          },
          {
            title: "Reddit r/changemyview — CMV: Anti-AI sentiment has turned into a witch hunt",
            url: "https://www.reddit.com/r/changemyview/comments/1uurst1/cmv_antiai_sentiment_has_turned_into_a_witch_hunt",
            note: "Ví dụ thật về săn phù thủy người dùng AI",
          },
          {
            title: "Reddit r/The10thDentist — The anti-AI crowd have become just as extreme as the overly pro-AI crowd",
            url: "https://www.reddit.com/r/The10thDentist/comments/1rtl5e0/the_antiai_crowd_have_become_just_as_extreme_as",
            note: "Nhận xét rằng hai cực dùng cùng phong cách tư duy",
          },
        ],
      },
    ],
  },
  footer: {
    brand: "Checklist AI-PSYCHOSIS — công cụ phản chiếu tư duy thời AI",
    note: "Dựa trên nghiên cứu và thread thật 2023–2026 · Không phải dụng cụ chẩn đoán y khoa",
  },
  ui: {
    languageLabel: "Ngôn ngữ",
    themeLabel: "Chủ đề",
    themes: { cyberpunk: "CyberPunk", dark: "Tối", light: "Sáng" },
  },
};

export default vi;
