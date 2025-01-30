import './Yangiliklar.css';

const Yangiliklar = () => {
  const yangiliklar = [
    {
      sarlavha: "1. Yangi O‘quv Yili: O‘quvchilarga Maktabga Kirishda Yordam",
      matn: "2025-yilda o‘quvchilarni maktabga kirish jarayoni yanada soddalashtirildi. O‘quvchilar uchun yangi qabul jarayonlari va test tizimlari joriy etildi. Endi barcha o‘quvchilar uchun testlarni onlayn tarzda topshirish imkoniyati mavjud. Bu yangilik o‘quvchilarni qabul qilish jarayonini shaffof va adolatli qilishga qaratilgan.",
      rasm: "https://cdn.beta.qalampir.uz/uploads/XP/f_Xa8ipX1Xww5kCqzdTtObERwgoXdah0.jpg",
    },
    {
      sarlavha: "2. Prezidentning Ta'lim Soasidagi Muammolarga Yuzlanishi",
      matn: "Prezidentimiz Shavkat Mirziyoyev o‘quvchilarga ta'lim berish va maktab tizimini takomillashtirish uchun ko‘plab yangiliklar e'lon qildi. \"Ta'lim sohasiga sarmoya kiritish va yoshlarni yuqori malakali mutaxassislar sifatida tarbiyalash bizning ustuvor vazifamizdir\", dedi Prezident. Yangi o‘quv yili boshlanishi bilan o‘quvchilarga yuqori sifatli ta'lim berish, maktablarni zamonaviy uslubda yangilash va ustozlarning malakasini oshirishga katta e'tibor qaratilmoqda.",
      rasm: "https://cdn.beta.qalampir.uz/uploads/XP/f_Xa8ipX1Xww5kCqzdTtObERwgoXdah0.jpg",
    },
    {
      sarlavha: "3. O‘quvchilar Uchun Online Testlar Joriy Etilmoqda",
      matn: "Yangi o‘quv yilidan boshlab, o‘quvchilar uchun onlayn testlar va test platformalari tashkil etildi. Bu platformalar yordamida o‘quvchilar bilimlarini mustahkamlash va darslarni samarali o‘rganish imkoniyatiga ega bo‘ladilar. Prezidentimiz ta'lim tizimining rivojlanishiga alohida e'tibor qaratib, har bir o‘quvchining bilim darajasi yuqori bo‘lishini ta'minlash kerakligini ta'kidladi.",
      rasm: "https://cdn.beta.qalampir.uz/uploads/XP/f_Xa8ipX1Xww5kCqzdTtObERwgoXdah0.jpg",
    },
    {
      sarlavha: "4. O‘quvchilarga Yangi Ta'lim Metodikasi Taklif Etildi",
      matn: "Prezidentimiz tomonidan e'lon qilingan yangi ta'lim metodikasi maktablarda o‘quvchilarning ijodiy va tanqidiy fikrlash qobiliyatlarini rivojlantirishga qaratilgan. \"Kelajakda o‘quvchilarning bilim va qobiliyatlari nafaqat o‘z davlatimizda, balki xalqaro miqyosda ham tan olinishi kerak\", dedi Prezident.",
      rasm: "https://cdn.beta.qalampir.uz/uploads/XP/f_Xa8ipX1Xww5kCqzdTtObERwgoXdah0.jpg",
    },
  ];

  return (
    <div className="news-wrapper">
      <h2 className="news-title">O‘quvga Kirish Yangiliklari</h2>
      <div className="news-content">
        {yangiliklar.map((yangilik, index) => (
          <div key={index} className="news-item">
            <img src={yangilik.rasm} alt={yangilik.sarlavha} />
            <h3>{yangilik.sarlavha}</h3>
            <p>{yangilik.matn}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yangiliklar;
