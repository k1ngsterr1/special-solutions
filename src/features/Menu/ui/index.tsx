import { Slide } from "react-awesome-reveal";
import { LinkButton, LinkButtonPage } from "@shared/ui/Link";
import { ContactLink } from "@shared/ui/ContactLink";
import { useSelector } from "react-redux";
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export const Menu = () => {
  const navigate = useNavigate();
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);
  const closeMenu = useOpenMenu(isMenuOpen);

  function handleCloseMenuToMain() {
    navigate("/");
    closeMenu();
    console.log("closed");
  }

  function handleNavigateToClients() {
    closeMenu();
    setTimeout(() => {
      navigate("/clients");
    }, 300);
  }

  return (
    <>
      <Slide direction="right" duration={1000}>
        <aside className="aside" id="menu">
          <div className="aside__container flex flex-col items-start mt-8">
            <Slide direction="right" className="flex">
              <LinkButton
                text="Главная"
                url="main-mob"
                onClick={handleCloseMenuToMain}
              />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton
                text="О компании"
                url="about-mob"
                onClick={handleCloseMenuToMain}
              />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton
                text="Услуги"
                url="services-mob"
                onClick={handleCloseMenuToMain}
              />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButtonPage
                text="Клиенты"
                url="/clients"
                onClick={() => handleNavigateToClients()}
              />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton
                text="Портфолио"
                url="portfolio-mob"
                onClick={handleCloseMenuToMain}
              />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton
                text="Связаться с нами"
                url="contacts-mob"
                onClick={handleCloseMenuToMain}
              />
            </Slide>
            <div className="flex flex-col mt-16">
              <Slide direction="right" className="flex">
                <ContactLink
                  text="+7 (776) 449-04-49"
                  event={"tel:+77764490449"}
                  marginTop="mt-0"
                />
              </Slide>
              <Slide direction="right" className="flex">
                <ContactLink
                  text="specialsolutions@info.kz"
                  event={"mailto: @specialsolutions@info.kz"}
                  marginTop="mt-4"
                />
              </Slide>
            </div>
          </div>
        </aside>
      </Slide>
    </>
  );
};
