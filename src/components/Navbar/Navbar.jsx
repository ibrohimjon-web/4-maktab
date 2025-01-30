import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Maktab from '../../assets/maktab.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // useLocation hookini qo'shish
  const location = useLocation();

  // Navbarni sahifa yuklanganda pastga tushirish
  useEffect(() => {
    // Navbarni boshlang'ich holatga o'rnatish
    setShowNavbar(false);

    // 1 soniya o'tgach navbarni ko'rsatish
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 500); // 1 sekund

    // Event listener qo'shish: Ekranning istalgan joyiga bosilsa menyu yopilsin
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-wrapper') && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Sahifaga bosish bilan menyuni yopish
    document.addEventListener('click', handleClickOutside);

    // Timerni to'xtatish
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, location]); // locationni qo'shish

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Sahifa o'zgarganda menyuni yopish
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location]);

  return (
    <div className={`navbar-wrapper ${showNavbar ? 'show' : ''}`}>
      <div className="navbar-container">
        <h2 className='logo'>
          <Link to='/'><img className='Logo' src={Maktab} alt="" /></Link>
        </h2>
        <div className="bars-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to='/bizhaqimizda'>Biz Haqimizda</Link></li>
          <li><Link to='/qonunlar'>Qonunlar</Link></li>
          <li><Link to='/forma'>Forma</Link></li>
          <li><Link to='/bayramlar'>Bayramlar</Link></li>
          <li><Link to='/darslavhalar'>Dars Lavhalar</Link></li>
          <li><Link to='/tedbirlar'>Tadbirlar</Link></li>
          <li><Link to='/yangiliklar'>Yangiliklar</Link></li>
          <li><Link to='/rahbarlar'>Rahbarlar</Link></li>
          <li><Link to='/manzil'>Manzil</Link></li>
          <li><Link to='/boglanish'>Bog‘lanish</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
