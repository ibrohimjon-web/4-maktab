import './Boglanish.css';

const Boglanish = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">Biz bilan bog‘laning</h2>
      <p className="contact-description">
        Savollaringiz yoki takliflaringiz bo‘lsa, bizga yozib qoldiring. Tez orada siz bilan bog‘lanamiz.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Ismingiz:</label>
          <input type="text" id="name" placeholder="Ismingizni kiriting" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Email manzilingizni kiriting" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Xabar:</label>
          <textarea id="message" rows="5" placeholder="Xabaringizni yozing" required></textarea>
        </div>
        <button type="submit" className="submit-button">Yuborish</button>
      </form>
    </div>
  );
};

export default Boglanish;
