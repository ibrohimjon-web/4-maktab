import './Footer.css';
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Biz Haqimizda</h4>
          <p>
            4-Maktab rasmiy sayti. Bizning maktabimizda o‘quvchilar uchun eng yaxshi ta’lim sharoitlari yaratilgan.
          </p>
        </div>
        <div className="footer-section">
          <h4>Aloqa</h4>
          <p>Telefon: +998 00 000 00 00</p>
          <p>Email: info@4maktab.uz</p>
          <p>Manzil: Namangan viloyati, Yangiqurg‘on tumani, Qizilqiyoq MFY</p>
        </div>
        <div className="footer-section">
          <h4>Ijtimoiy Tarmoqlar</h4>
          <div className="social-icons">
            <a href="#" className="social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
            <a href="#" className="social-link">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 4-Maktab. Barcha huquqlar himoyalangan.</p>
        <a className='dasturchi' href='https://t.me/ibrohimjon_web'>Dasturchi: Ikromjonov Ibrohimjon</a>
      </div>
    </footer>
  );
};

export default Footer;
