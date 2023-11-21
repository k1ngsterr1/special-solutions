import { useSelector } from "react-redux";
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";

import logo from "@assets/logo.svg";
import Hamburger from "hamburger-react";
import { Link as ScrollLink } from "react-scroll";
import { LinkButton } from "@shared/ui/LinkButton";

import "./styles.scss";

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
            <ScrollLink
              to="main"
              smooth
              className="header__content-container__links__link"
            >
              Главная
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth
              className="header__content-container__links__link"
            >
              О компании
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth
              className="header__content-container__links__link"
            >
              Услуги
            </ScrollLink>
            <ScrollLink
              to="portfolio"
              smooth
              className="header__content-container__links__link"
            >
              Портфолио
            </ScrollLink>
            <ScrollLink
              to="contacts"
              smooth
              className="header__content-container__links__link"
            >
              Контакты
            </ScrollLink>
          </nav>
          <LinkButton text="Связаться с нами" type="full-link" to="contacts" />
        </div>
      </header>
    </>
  );
};
