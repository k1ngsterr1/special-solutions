import { Link } from "react-scroll";
import { faP, faPhone } from "@fortawesome/free-solid-svg-icons";

import logo from "@assets/logo.svg";
import spark_logo from "@assets/spark_logo.svg";

import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col">
      <div className="footer__footer-mob flex flex-col items-center mt-16">
        <img className="footer__footer-mob__logo" src={logo} alt="logo" />
        <nav className="footer__footer-mob__nav flex flex-col items-center">
          <div className="flex items-center mt-12">
            <FontAwesomeIcon
              className="footer__footer-mob__nav__icon"
              icon={faPhone}
            />
            <a
              className="footer__footer-mob__nav__phone-link ml-4"
              href="tel:+77764490449"
            >
              +7 (776) 449-04-49
            </a>
          </div>
          <Link
            className="footer__footer-mob__nav__link mt-12"
            to="main"
            smooth={true}
          >
            Главная
          </Link>
          <Link
            className="footer__footer-mob__nav__link mt-4"
            to="about"
            smooth={true}
          >
            О компании
          </Link>
          <Link
            className="footer__footer-mob__nav__link mt-4"
            to="services"
            smooth={true}
          >
            Услуги
          </Link>
          <Link
            className="footer__footer-mob__nav__link mt-4"
            to="portfolio"
            smooth={true}
          >
            Портфолио
          </Link>
          <Link
            className="footer__footer-mob__nav__link mt-4"
            to="contacts"
            smooth={true}
          >
            Контакты
          </Link>
        </nav>
      </div>
    </footer>
  );
};
