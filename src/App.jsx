import { useState } from "react";
import "./App.css";
import About from "./assets/components/About.jsx";
import Banner from "./assets/components/Banner.jsx";
import Footer from "./assets/components/Footer.jsx";
import Header from "./assets/components/Header.jsx";
import Works from "./assets/components/Works.jsx";

function App() {
  const [headerProps, setHeaderProps] = useState({
    links: [
      {
        id: 1,
        value: "Обо мне",
        toSection: "#about",
      },
      {
        id: 2,
        value: "Мои работы",
        toSection: "#works",
      },
      {
        id: 3,
        value: "Контакты",
        toSection: "#footer",
      },
    ],
  });
  const [bannerProps, setBannerProps] = useState({
    title: "Добро пожаловать на мой сайт",
    link: "Позвонить",
  });
  const [aboutProps, setAboutProps] = useState({
    title: "Обо мне",
    contentTitle: "Зубенко Михаил Петрович",
    contentText: `Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть
    криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе.
    Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа.`,
  });
  const [worksProps, setWorksProps] = useState({
    title: "Мои работы",
    cardTitle: "Чиланзар",
    cardText: `Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году`,
    cardAmount: 9,
  });
  const [footerProps, setFooterProps] = useState({
    title: "Связаться со мной",
  });

  return (
    <>
      <Header headerProps={headerProps} />
      <Banner bannerProps={bannerProps} />
      <About aboutProps={aboutProps} />
      <Works worksProps={worksProps} />
      <Footer footerProps={footerProps} />
    </>
  );
}

export default App;
