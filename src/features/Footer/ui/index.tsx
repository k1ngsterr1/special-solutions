import { Link } from "react-scroll";
import logo from "@assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col">
      <nav className="footer_nav flex items-center justify-between">
        <Link className="footer_nav_link" to="main" smooth={true}>
          Главная
        </Link>
        <Link className="footer_nav_link" to="about" smooth={true}>
          О компании
        </Link>
        <Link className="footer_nav_link" to="services" smooth={true}>
          Услуги
        </Link>
        <Link className="footer_nav_link" to="portfolio" smooth={true}>
          Портфолио
        </Link>
        <Link className="footer_nav_link" to="contacts" smooth={true}>
          Контакты
        </Link>
      </nav>
    </footer>
  );
};
