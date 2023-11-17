import { Slide } from "react-awesome-reveal";

import "./styles.scss";
import { LinkButton } from "@shared/ui/Link";
import { ContactLink } from "@shared/ui/ContactLink";
import { Button } from "@shared/ui/Button";

export const Menu = () => {
  return (
    <>
      <Slide direction="right" duration={1000}>
        <aside className="aside" id="menu">
          <div className="aside__container flex flex-col items-start mt-8">
            <Slide direction="right" className="flex">
              <LinkButton text="Главная" url="main" />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton text="О компании" url="about" />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton text="Услуги" url="about" />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton text="Портфолио" url="about" />
            </Slide>
            <Slide direction="right" className="flex">
              <LinkButton text="Связаться с нами" url="about" />
            </Slide>
            <div className="flex flex-col mt-16">
              <Slide direction="right" className="flex">
                <ContactLink
                  text="+7 (702) 333-38-26"
                  event={"tel: +77023333826"}
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
