import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";

import logo from "@assets/logo.svg";

import Hamburger from "hamburger-react";

import "./styles.scss";
import { Link } from "react-scroll";
import { LinkButton } from "@shared/ui/LinkButton";

export const Header = () => {
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);
  const openMenu = useOpenMenu(isMenuOpen);

  return (
    <>
      <header className="header-mob flex items-center justify-between min-[1025px]:hidden">
        <img src={logo} alt="logotype" className="header-mob__logo" />
        <Hamburger color="#FF6600" onToggle={openMenu} />
      </header>
      <header className="header flex items-center justify-center max-[1024px]:hidden">
        <div className="header__content-container flex justify-between items-center">
          <img
            src={logo}
            alt="logotype"
            className="header__content-container__logo"
          />
          <nav className="header__content-container__links flex items-center justify-between">
            <Link to="main" className="header__content-container__links__link">
              Главная
            </Link>
            <Link to="about" className="header__content-container__links__link">
              О компании
            </Link>
            <Link
              to="services"
              className="header__content-container__links__link"
            >
              Услуги
            </Link>
            <Link
              to="portfolio"
              className="header__content-container__links__link"
            >
              Портфолио
            </Link>
            <Link
              to="contacts"
              className="header__content-container__links__link"
            >
              Контакты
            </Link>
          </nav>
          <LinkButton text="Связаться с нами" type="full-link" to="contacts" />
        </div>
      </header>
    </>
  );
};
