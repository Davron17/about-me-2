import logo from "../img/logo.png";
import { useRef } from "react";

const Header = ({ headerProps }) => {
  const dropdownRef = useRef("");
  const handleClick = () => {
    dropdownRef.current.classList.toggle("active");
  };

  const generateList = () => {
    return (
      <ul className="header__list">
        {headerProps.links.map((el) => (
          <li key={el.id} className="header__list-item">
            <a href={el.toSection} className="header__list-item-link">
              {el.value}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const generateDropdown = () => {
    return (
      <ul ref={dropdownRef} className="header__bars-span-dropdown">
        {headerProps.links.map((el) => (
          <li key={el.id} className="header__bars-span-dropdown-item">
            <a
              href={el.toSection}
              className="header__bars-span-dropdown-item-link"
            >
              {el.value}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="header">
      <div className="container header__wrap">
        <a href="#" className="header__logo">
          <img className="header__logo-img" src={logo} alt="" />
        </a>
        {generateList()}
        <div className="header__bars" onClick={handleClick}>
          <span className="header__bars-span">{generateDropdown()}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
