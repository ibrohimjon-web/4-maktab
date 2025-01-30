import "./Rahbarlar.css";
import { Link } from "react-router-dom";

const rahbarlar = [
  {
    id: 1,
    name: "Azimjon Madaliyev",
    role: "Direktor",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg", 
  },
  {
    id: 2,
    name: "Muhammadyusuf Mamadaliyev",
    role: "Ma'naviy- ma'rifiy ishlar bo'icha direktor o'rinbosari",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg", 
  },
  {
    id: 3,
    name: "Muxtor Xudayberdiyev",
    role: "Ma'naviy- ma'rifiy ishlar bo'icha direktor o'rinbosari",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg", 
  },
  {
    id: 4,
    name: "Toxirjon Buzrukov",
    role: "O‘quv ishlari ishlar bo'icha direktor o'rinbosari",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg", 
  },
  {
    id: 5,
    name: "Bahodior Xudayberdiyev",
    role: "O‘quv ishlari ishlar bo'icha direktor o'rinbosari",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg", 
  },
  {
    id: 6,
    name: "Bahodior Xudayberdiyev",
    role: "O‘quv ishlari ishlar bo'icha direktor o'rinbosari",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg", 
  },
  {
    id: 7,
    name: "Bahodior Xudayberdiyev",
    role: "O‘quv ishlari ishlar bo'icha direktor o'rinbosari",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg", 
  },
  {
    id: 8,
    name: "Bahodior Xudayberdiyev",
    role: "O‘quv ishlari ishlar bo'icha direktor o'rinbosari",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg", 
  },
];

const Rahbarlar = () => {
  return (
    <div className="leaders-wrapper">
      <h2 className="leaders-title">Maktab Rahbarlari</h2>
      <div className="leaders-content">
        <p className="leaders-description">
          Maktabda rahbarlar o‘z vazifalarini bajarish orqali o‘quvchilarni
          o‘qitish, maktabni rivojlantirish va o‘quv jarayonini boshqarish bilan
          shug‘ullanadi. Quyida maktab rahbarlarining ro‘yxati keltirilgan:
        </p>
        <div className="leaders-list">
          {rahbarlar.map((rahbar) => (
            <div className="leader" key={rahbar.id}>
              <Link to={`/rahbar/${rahbar.id}`}>
                <img
                  src={rahbar.image}
                  alt={`Photo of ${rahbar.name}, ${rahbar.role}`}
                  className="leader-image"
                />
                <h3>{rahbar.name}</h3>
                <p>{rahbar.role}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rahbarlar;
