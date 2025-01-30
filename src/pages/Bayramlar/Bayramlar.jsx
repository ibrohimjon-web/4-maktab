import './Bayramlar.css';

const Bayramlar = () => {
  const bayramlar = [
    { nom: "Yangi Yil Bayrami", sana: "1-yanvar" },
    { nom: "Xotira va Qadrlash Kuni", sana: "9-may" },
    { nom: "Mustaqillik Kuni", sana: "1-sentabr" },
    { nom: "O‘qituvchilar va Murabbiylar Kuni", sana: "1-oktabr" },
    { nom: "Konstitutsiya Kuni", sana: "8-dekabr" },
  ];

  return (
    <div className="bayramlar-wrapper">
      <h2 className="bayramlar-title">Maktab Bayramlari</h2>
      <ul className="bayramlar-list">
        {bayramlar.map((bayram, index) => (
          <li key={index} className="bayram-item">
            <span className="bayram-nom">{bayram.nom}</span>
            <span className="bayram-sana">{bayram.sana}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bayramlar;
