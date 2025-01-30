import './SingleRahbar.css';
import { useParams, useNavigate } from 'react-router-dom';

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

const SingleRahbar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const rahbar = rahbarlar.find((item) => item.id == id);

  const handleBackClick = () => {
    navigate(-1);  // Go back to the previous page
  };

  return (
    <div className="single-rahbar">
      <button onClick={handleBackClick} className="back-button">Back</button>
      <img src={rahbar.image} alt={rahbar.name} className="single-rahbar-image" />
      <div className="single-rahbar-info">
        <h2>{rahbar.name}</h2>
        <h3>{rahbar.role}</h3>
        <p>{rahbar.description}</p>
      </div>
    </div>
  );
};

export default SingleRahbar;
