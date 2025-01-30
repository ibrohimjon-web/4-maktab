import './Bizhaqimizda.css';

const Bizhaqimizda = () => {
  return (
    <div className="about-wrapper">
      <h2 className="about-title">Biz Haqimizda</h2>
      <p className="about-description">
        4-Maktab – bu O‘zbekistonning ilg‘or maktablaridan biri bo‘lib, 
        ta’lim sifatini oshirish va o‘quvchilarni har tomonlama rivojlantirishga qaratilgan. 
        Bizning maqsadimiz – har bir o‘quvchiga sifatli ta’lim berish va ularni zamonaviy dunyoda muvaffaqiyatli bo‘lishiga tayyorlash.
      </p>
      <div className="about-info">
        <div className="info-item">
          <h3>Bizning Maqsadimiz</h3>
          <p>
            O‘quvchilarga zamonaviy ta’lim berish, ularni milliy qadriyatlar va global dunyoqarash bilan boyitish.
          </p>
        </div>
        <div className="info-item">
          <h3>Bizning O‘qituvchilar</h3>
          <p>
            Bizda tajribali va malakali o‘qituvchilar jamoasi faoliyat yuritadi. 
            Ular har bir o‘quvchining muvaffaqiyati uchun qayg‘uradilar.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Bizhaqimizda;
