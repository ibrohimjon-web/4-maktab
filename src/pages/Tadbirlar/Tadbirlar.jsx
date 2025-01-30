import './Tadbirlar.css';

const Tadbirlar = () => {
  return (
    <div className="events-wrapper">
      <h2 className="events-title">Milliy Tadbirlar</h2>
      <div className="events-content">
        <p className="events-description">
          Milliy tadbirlar bizning boy tariximiz, an&apos;analarimiz va madaniyatimizni nishonlashga bag‘ishlanadi. Quyida O‘zbekistonda o‘tkaziladigan ba&apos;zi milliy tadbirlar haqida ma&apos;lumotlar keltirilgan:
        </p>
        <div className="events-list">
          <div className="event">
            <h3>1. Mustaqillik Kuni (31-Avgust)</h3>
            <p>
              1991-yil 31-avgustda O‘zbekiston mustaqil davlat sifatida o‘zini tanitdi. Bu kun xalqimizning erkinlik va tinchlikka bo‘lgan orzusining amalga oshgan kunidir. Mustaqillik kuni o‘tkaziladigan tadbirlar, festivallar va bayramlar o‘zbek xalqining erkinlikka intilishining ramzidir.
            </p>
          </div>
          <div className="event">
            <h3>2. Navro&apos;z (21-Mart)</h3>
            <p>
              Navro‘z bayrami, qadimdan milliy an&apos;ana sifatida bahor kelishini nishonlash uchun o&apos;tkaziladi. Bu bayram tabiatni uyg‘onishi, yerni tiklash, yangi yilni kutib olishning ramzi sifatida keng nishonlanadi. O‘zbekistonning turli hududlarida turli tadbirlar, o‘yinlar va festivallar o‘tkaziladi.
            </p>
          </div>
          <div className="event">
            <h3>3. 1-Iyun - Bolalar Kuni</h3>
            <p>
              Bolalar Kuni - o‘zbek xalqining kelajagi bo‘lgan bolalarga mehr va e&apos;tibor ko‘rsatish maqsadida o‘tkaziladi. Bu kunni o‘tkazish uchun maktablarda va boshqa jamoat joylarida turli musobaqalar, o‘yinlar va boshqa ko‘ngilochar tadbirlar o‘tkaziladi.
            </p>
          </div>
          <div className="event">
            <h3>4. Mahalla Bayrami (25-Yanvar)</h3>
            <p>
              Mahalla bayrami mahalladagi do‘stlik, hamjihatlik va ahillikni nishonlash uchun o‘tkaziladi. Ushbu bayramda mahalla aholisi bir joyga yig‘ilib, turli madaniy tadbirlar, musiqa va sport musobaqalarini o‘tkazadilar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tadbirlar;
