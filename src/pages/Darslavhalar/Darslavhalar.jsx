import './Darslavhalar.css';

const Darslavhalar = () => {
  return (
    <div className="lessons-wrapper">
      <h2 className="lessons-title">Dars Lavhalar</h2>
      <p className="lessons-description">
        Quyida 4-Maktabimizdagi dars jarayonlaridan lavhalar bilan tanishishingiz mumkin.
      </p>
      <div className="lessons-gallery">
        <div className="lesson-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0UrXod0YNsuOU57Whdx37McZaivG4NZFtQ&s"
            alt="Dars jarayoni"
            className="lesson-image"
          />
          <p className="lesson-caption">Matematika darsidan lavha</p>
        </div>
        <div className="lesson-card">
          <img
            src="https://i.ytimg.com/vi/B5mWq2DYwA8/maxresdefault.jpg"
            alt="Dars jarayoni"
            className="lesson-image"
          />
          <p className="lesson-caption">Fizika tajribasi</p>
        </div>
        <div className="lesson-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZS4dm_qJY0bQBcl1jppOGwUzxEPgOpCUFQ&s"
            alt="Dars jarayoni"
            className="lesson-image"
          />
          <p className="lesson-caption">Adabiyot darsidan lahza</p>
        </div>
      </div>
    </div>
  );
};

export default Darslavhalar;
