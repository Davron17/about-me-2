import facebook from "../img/facebook.svg";
import instagram from "../img/inst.svg";
import telegram from "../img/tg.svg";
import mail from "../img/mail.svg";
import whatsapp from "../img/whats.svg";

const Footer = ({ footerProps }) => {
  const generateList = () => {
    const images = [
      {
        id: 1,
        value: facebook,
      },
      {
        id: 2,
        value: instagram,
      },
      {
        id: 3,
        value: telegram,
      },
      {
        id: 4,
        value: mail,
      },
      {
        id: 5,
        value: whatsapp,
      },
    ];
    const items = [];
    for (const image of images) {
      items.push(
        <li key={image.id} className="footer__list-item">
          <a href="#" className="footer__list-item-link">
            <img src={image.value} alt="" />
          </a>
        </li>
      );
    }
    return <ul className="footer__list">{items}</ul>;
  };

  return (
    <footer id="footer" className="footer">
      <div className="container footer__wrap">
        <h2 className="footer__title">{footerProps.title}</h2>
        {generateList()}
      </div>
    </footer>
  );
};

export default Footer;
