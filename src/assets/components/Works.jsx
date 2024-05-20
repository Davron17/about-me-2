import nigga from "../img/nigga.png";

const Works = ({ worksProps }) => {
  const generateCards = () => {
    const cards = [];
    for (let i = 0; i < worksProps.cardAmount; i++) {
      cards.push(
        <div key={Math.random()} className="works__main-card">
          <img className="works__main-card-img" src={nigga} alt="" />
          <div className="works__main-card-desc">
            <h3 className="works__main-card-desc-title">
              {worksProps.cardTitle}
            </h3>
            <p className="works__main-card-desc-text">{worksProps.cardText}</p>
            <a className="works__main-card-desc-link" href="#">
              Посмотреть
            </a>
          </div>
        </div>
      );
    }
    return cards;
  };

  return (
    <div id="works" className="works">
      <div className="container works__wrap">
        <h2 className="works__title">{worksProps.title}</h2>
        <div className="works__main">{generateCards()}</div>
      </div>
    </div>
  );
};

export default Works;
