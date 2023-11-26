import { useSelector } from "react-redux";
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";
import { Link as ScrollLink } from "react-scroll";
import { LinkButton } from "@shared/ui/LinkButton";
import { useNavigate } from "react-router-dom";

import logo from "@assets/logo.svg";
import Hamburger from "hamburger-react";

import "./styles.scss";

export const Header = () => {
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);
  const openMenu = useOpenMenu(isMenuOpen);

  const navigate = useNavigate();

  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    navigate("/");
  }

  function navigateToMain() {
    navigate("/");
  }

  return (
    <>
      <header className="header-mob flex items-center justify-between min-[1025px]:hidden">
        <img
          src={logo}
          alt="logotype"
          onClick={navigateToMain}
          className="header-mob__logo cursor-pointer"
        />
        <Hamburger color="#FF6600" onToggle={openMenu} toggled={isMenuOpen} />
      </header>
      <header className="header flex items-center justify-center max-[1024px]:hidden">
        <div className="header__content-container flex justify-between items-center">
          <img
            src={logo}
            alt="logotype"
            onClick={scrollToTop}
            className="header__content-container__logo cursor-pointer"
          />
          <nav className="header__content-container__links flex items-center justify-between">
            <ScrollLink
              to="main"
              smooth
              onClick={navigateToMain}
              className="header__content-container__links__link"
            >
              Главная
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth
              onClick={navigateToMain}
              className="header__content-container__links__link"
            >
              О компании
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth
              onClick={navigateToMain}
              className="header__content-container__links__link"
            >
              Услуги
            </ScrollLink>
            <ScrollLink
              to="portfolio"
              smooth
              onClick={navigateToMain}
              className="header__content-container__links__link"
            >
              Портфолио
            </ScrollLink>
            <ScrollLink
              to="contacts"
              smooth
              onClick={navigateToMain}
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
