import './Forma.css';

const Forma = () => {
  return (
    <div className="uniform-wrapper">
      <h2 className="uniform-title">Maktab Formasi</h2>
      <p className="uniform-description">
        4-Maktabimizda o‘quvchilar uchun yagona maktab formasi joriy etilgan bo‘lib, bu tartib intizom va birlikni ta’minlash uchun muhimdir. Quyida formaga qo‘yilgan talablar bilan tanishib chiqing.
      </p>
      <div className="uniform-details">
        <div className="uniform-item">
          <h3>O‘g‘il bolalar uchun:</h3>
          <ul>
            <li>Oq ko‘ylak (tugmalar bilan)</li>
            <li>To‘q rangli shim (qora yoki quyuq ko‘k)</li>
            <li>Toza va tekis oyoq kiyim</li>
          </ul>
        </div>
        <div className="uniform-item">
          <h3>Qiz bolalar uchun:</h3>
          <ul>
            <li>Oq bluzka</li>
            <li>Qora yoki quyuq ko‘k yubka (dizayn oddiy va oddiy)</li>
            <li>Toza oyoq kiyim</li>
          </ul>
        </div>
        <div className="uniform-note">
          <p>
            <strong>Eslatma:</strong> Maktab formasi doimo toza va tartibli bo‘lishi talab qilinadi. Har bir o‘quvchi maktabning yagona formasi qoidalariga rioya qilishi lozim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forma;
