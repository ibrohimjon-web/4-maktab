import './Qonunlar.css';

const Qonunlar = () => {
  return (
    <div className="laws-wrapper">
      <h2 className="laws-title">Maktabga Doir Qonunlar</h2>
      <div className="laws-content">
        <p className="laws-description">
          Maktabda o‘quvchilarning huquqlari va majburiyatlari, shuningdek, maktabda qo‘llaniladigan qoidalarga rioya qilish har bir o‘quvchi uchun zarurdir. Quyida maktabda amal qiladigan asosiy qonunlar keltirilgan:
        </p>
        <div className="laws-list">
          <h3>1. Ta&apos;lim To&apos;g&apos;risidagi Qonun</h3>
          <p>
            O‘zbekiston Respublikasining ta’lim to‘g‘risidagi qonuni, ta’limning barcha shakllari, o‘quvchilarning huquqlari va maktab tizimining umumiy qoidalarini belgilaydi. 
          </p>
          <h3>2. O‘quvchilarning Huquqlari</h3>
          <p>
            Har bir o‘quvchi ta’lim olish, bilim olish, sog‘lom va xavfsiz muhitda o‘qish huquqiga ega. Shuningdek, o‘quvchilar maktabda o‘z fikrlarini erkin ifoda etish huquqiga ega.
          </p>
          <h3>3. Maktabda Davomat</h3>
          <p>
            O‘quvchilar har kuni darslarga qatnashishi, sabablarga ko‘ra darsdan qoldirish yoki kechikish holatlarini hujjatlar bilan asoslashlari kerak.
          </p>
          <h3>4. Disiplinar Qoidalar</h3>
          <p>
            Maktabda tartib-qoidalar, o‘quvchilarni o‘z vaqtida darslarga qatnashishini va ijtimoiy fazilatlarni o‘rganishini ta’minlashga yo‘naltirilgan. Nojo‘ya xulq-atvorni oldini olish uchun maktabda intizomiy qoidalar belgilangan.
          </p>
          <h3>5. Xavfsizlik Qoidalari</h3>
          <p>
            Maktabda o‘quvchilar va xodimlarning xavfsizligi ta’minlanishi kerak. Maktab hududida xavfsizlikni ta&apos;minlash uchun barcha kerakli qoidalar belgilangan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qonunlar;
