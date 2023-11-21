import { Slide } from "react-awesome-reveal";
import { LinkButton } from "@shared/ui/Link";
import { ContactLink } from "@shared/ui/ContactLink";
import { useSelector } from "react-redux";
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";

import "./styles.scss";

export const Menu = () => {
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);
  const closeMenu = useOpenMenu(isMenuOpen);

  return (
    <>
      <Slide direction="right" duration={1000}>
        <aside className="aside" id="menu">
          <div className="aside__container flex flex-col items-start mt-8">
            <Slide direction="right" className="flex">
              <LinkButton text="Главная" url="main-mob" onClick={closeMenu} />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton
                text="О компании"
                url="about-mob"
                onClick={closeMenu}
              />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton
                text="Услуги"
                url="services-mob"
                onClick={closeMenu}
              />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton
                text="Портфолио"
                url="portfolio-mob"
                onClick={closeMenu}
              />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton
                text="Связаться с нами"
                url="contacts-mob"
                onClick={closeMenu}
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
