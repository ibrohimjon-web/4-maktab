import "./Manzil.css";

const Manzil = () => {
  return (
    <div className="location-wrapper">
      <h2 className="location-title">Maktab Manzili</h2>
      <div className="location-info">
        <p className="location-description">
          4-Maktab Namangan viloyatining Yangiqo‘rg‘on tumanidagi Qizilqiyoq
          MFYda joylashgan. Bizning maktabimizga kelish juda oson va barcha
          transport vositalari bilan erkin borishingiz mumkin.
        </p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.0767425030213!2d71.65601095195773!3d41.0742197877345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4b4ae55ea76db%3A0x5790d29f0265de6e!2s4%20-%20O&#39;RTA%20MAKTAB!5e0!3m2!1sen!2sus!4v1738088064199!5m2!1sen!2sus"
            width="650"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="location-details">
          <h3>Manzil:</h3>
          <p>
            Namangan viloyati, Yangiqo‘rg‘on tumani, Qizilqiyoq MFY, 4-Maktab
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manzil;
