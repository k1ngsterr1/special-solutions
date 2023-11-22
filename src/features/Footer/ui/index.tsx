import { Link } from "react-scroll";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import logo from "@assets/logo.svg";
import spark_logo from "@assets/spark_logo.svg";

import "./styles.scss";

export const Footer = () => {
  const navigate = useNavigate();

  function SparkRedirect() {
    window.open("https://sparkstudio.kz/", "_blank");
  }

  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    navigate("/");
  }

  function navigateToMain() {
    navigate("/");
  }

  return (
    <footer className="footer flex flex-col mb-10">
      <div className="footer__footer-mob flex flex-col items-center mt-16 min-[1024px]:hidden">
        <img className="footer__footer-mob__logo" src={logo} alt="logo" />
        <nav className="footer__footer-mob__nav flex flex-col items-center">
          <Link
            className="footer__footer-mob__nav__link mt-8"
            to="main-mob"
            smooth={true}
            onClick={navigateToMain}
          >
            Главная
          </Link>
          <Link
            className="footer__footer-mob__nav__link mt-4"
            to="about-mob"
            smooth={true}
            onClick={navigateToMain}
          >
            О компании
          </Link>
          <Link
            className="footer__footer-mob__nav__link mt-4"
            to="services-mob"
            smooth={true}
            onClick={navigateToMain}
          >
            Услуги
          </Link>
          <Link
            className="footer__footer-mob__nav__link mt-4"
            to="portfolio-mob"
            smooth={true}
            onClick={navigateToMain}
          >
            Портфолио
          </Link>
          <Link
            className="footer__footer-mob__nav__link mt-4"
            to="contacts-mob"
            smooth={true}
            onClick={navigateToMain}
          >
            Контакты
          </Link>
        </nav>
        <div className="flex items-center mt-6">
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
        <img
          className="footer__footer-mob__spark-logo mt-10 mb-10"
          src={spark_logo}
          alt="spark-studio"
          onClick={SparkRedirect}
        />
      </div>
      <div className="footer__footer-pc flex flex-col items-center max-[1024px]:hidden">
        <nav className="footer__footer-pc__nav w-full flex items-center justify-between max-[1024px]:hidden">
          <img
            className="footer__footer-pc__logo"
            src={logo}
            onClick={scrollToTop}
            alt="logo"
          />
          <Link
            className="footer__footer-pc__nav__link"
            to="main"
            smooth={true}
            onClick={navigateToMain}
          >
            Главная
          </Link>
          <Link
            className="footer__footer-pc__nav__link"
            to="about"
            smooth={true}
            onClick={navigateToMain}
          >
            О компании
          </Link>
          <Link
            className="footer__footer-pc__nav__link"
            to="services"
            smooth={true}
            onClick={navigateToMain}
          >
            Услуги
          </Link>
          <Link
            className="footer__footer-pc__nav__link"
            to="portfolio"
            smooth={true}
            onClick={navigateToMain}
          >
            Портфолио
          </Link>
          <Link
            className="footer__footer-pc__nav__link"
            to="contacts"
            smooth={true}
            onClick={navigateToMain}
          >
            Контакты
          </Link>
          <div className="flex items-center ">
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
        </nav>
        <img
          className="footer__footer-pc__spark-logo mt-12 mb-6"
          src={spark_logo}
          alt="spark-studio"
          onClick={SparkRedirect}
        />
      </div>
    </footer>
  );
};
