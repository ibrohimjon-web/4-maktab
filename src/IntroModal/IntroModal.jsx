import './IntroModal.css';
import { useState, useEffect } from 'react';

const IntroModal = () => {
  const [showModal, setShowModal] = useState(true);

  // Modalni 5 soniyadan keyin yopish
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 2000); // 5 soniya

    return () => clearTimeout(timer); // Timerni to'xtatish
  }, []);

  if (!showModal) {
    return null; // Agar modal yopilgan bo'lsa, hech narsa ko'rsatmasin
  }

  return (
    <div className="intro-modal">
      <div className="modal-content">
        <h2>4-Maktab Web sahifasi</h2>
        <a className='intro-d' href='https://t.me/ibrohimjon_web'>Dasturchi: Ikromjonov Ibrohimjon</a>
        
      </div>
    </div>
  );
};

export default IntroModal;
