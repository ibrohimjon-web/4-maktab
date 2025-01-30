import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-banner">
        <h1 className="home-title">4-Maktabga Xush Kelibsiz!</h1>
        <p className="home-description">
          Bizning maktabimizda o‘quvchilar uchun eng yaxshi ta’lim sharoitlari yaratilgan. O‘quvchilarning
          intellektual va ijtimoiy rivojlanishiga katta e’tibor qaratiladi.
        </p>
        <div className="home-buttons">
          <a href="/bizhaqimizda" className="home-btn">Biz haqimizda</a>
          <a href="/forma" className="home-btn">Maktab Formasi</a>
        </div>
      </div>
      <div className="home-gallery">
        <div className="gallery-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Um5iAwWwkJ4bZ8JkSTbd8xCdoKt-iAZ3Hg&s"
            alt="Maktab binosi"
            className="gallery-image"
          />
          <p className="gallery-caption">Maktab binosi</p>
        </div>
        <div className="gallery-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfj38FkdualQOg7Y9jqe3HIOyTm0wMAHxUQ&s"
            alt="O‘quvchilar darsda"
            className="gallery-image"
          />
          <p className="gallery-caption">O‘quvchilar darsda</p>
        </div>
        <div className="gallery-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeNK0l4pzts6DfjpZ9gpttX_oJ8K7AOqtsg&s"
            alt="Maktab tadbirlari"
            className="gallery-image"
          />
          <p className="gallery-caption">Maktab tadbirlari</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
