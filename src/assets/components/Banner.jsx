const Banner = ({ bannerProps }) => {
  return (
    <div className="banner">
      <div className="container banner__wrap">
        <h1 className="banner__title">{bannerProps.title}</h1>
        <a className="banner__link" href="tel: +998971380881">
          {bannerProps.link}
        </a>
      </div>
    </div>
  );
};

export default Banner;
