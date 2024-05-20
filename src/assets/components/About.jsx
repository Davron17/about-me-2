import black from "../img/black.png";

const About = ({ aboutProps }) => {
  return (
    <div id="about" className="about">
      <div className="container about__wrap">
        <h2 className="about__title">{aboutProps.title}</h2>
        <div className="about__content">
          <div className="about__content-pic">
            <img className="about__content-pic-img" src={black} alt="" />
          </div>
          <div className="about__content-desc">
            <h3 className="about__content-desc-title">
              {aboutProps.contentTitle}
            </h3>
            <p className="about__content-desc-text">{aboutProps.contentText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
