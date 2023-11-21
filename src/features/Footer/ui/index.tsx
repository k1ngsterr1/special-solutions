import { Link } from "react-scroll";
import logo from "@assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col">
      <img className="footer__logo"></img>
      <nav className="footer__nav flex items-center justify-between">
        <Link className="footer__nav__link" to="main" smooth={true}>
          Главная
        </Link>
        <Link className="footer__nav__link" to="about" smooth={true}>
          О компании
        </Link>
        <Link className="footer__nav__link" to="services" smooth={true}>
          Услуги
        </Link>
        <Link className="footer__nav__link" to="portfolio" smooth={true}>
          Портфолио
        </Link>
        <Link className="footer__nav__link" to="contacts" smooth={true}>
          Контакты
        </Link>
      </nav>
    </footer>
  );
};
