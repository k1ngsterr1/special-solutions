import { Gallery } from "@features/Gallery/ui";
import { Fade, Slide } from "react-awesome-reveal";

import logo1 from "@assets/clients/31.svg";
import logo2 from "@assets/clients/apple_city.svg";
import logo3 from "@assets/clients/burger_king.svg";
import logo4 from "@assets/clients/freedom.svg";
import logo5 from "@assets/clients/kaspi.svg";
import logo6 from "@assets/clients/lampadario.svg";
import logo7 from "@assets/clients/lenovo.svg";
import logo8 from "@assets/clients/siemes.svg";
import logo9 from "@assets/clients/syngenta.svg";

import "./styles.scss";

export const ClientScreen = () => {
  const galleryItems = [
    {
      image: logo1,
    },
    {
      image: logo2,
    },
    {
      image: logo3,
    },
    {
      image: logo4,
    },
    {
      image: logo5,
    },
    {
      image: logo6,
    },
    {
      image: logo7,
    },
    {
      image: logo8,
    },
    {
      image: logo9,
    },
  ];

  return (
    <>
      <main className="content-container">
        <Slide triggerOnce>
          <h1>Наши клиенты</h1>
        </Slide>
        <Slide
          direction="right"
          className="w-full flex justify-center"
          delay={200}
          triggerOnce
        >
          <p className="paragraph mt-4 text-center w-[100%] min-[1024px]:w-[70%]">
            В мире, где каждое пространство имеет значение, компания Special
            Solutions выступает в качестве ключевого игрока в индустрии создания
            идеальных бизнес-пространств. С момента своего основания, мы
            зарекомендовали себя как лидера в области инновационного и
            функционального строительства, предназначенного для бизнеса всех
            масштабов.
          </p>
        </Slide>
        <div className="w-full mt-2 mb-4 min-[1024px]:hidden">
          <Gallery items={galleryItems} />
        </div>
        <div className="hidden lg:flex w-full mt-16 flex-col items-center">
          <div className="w-[70%] flex items-center justify-between">
            <Fade cascade triggerOnce>
              <img src={logo1} className="logo thirty-one" alt="logotype" />
              <img src={logo2} className="logo apple-city" alt="logotype" />
              <img src={logo3} className="logo burger-king" alt="logotype" />
            </Fade>
          </div>
          <div className="w-[70%] flex items-center justify-between mt-20">
            <Fade cascade delay={1000} triggerOnce>
              <img src={logo4} className="logo freedom" alt="logotype" />
              <img src={logo5} className="logo kaspi" alt="logotype" />
              <img src={logo6} className="logo lampadario" alt="logotype" />
            </Fade>
          </div>
          <div className="w-[70%] flex items-center justify-between mt-20">
            <Fade cascade delay={1500} triggerOnce>
              <img src={logo7} className="logo lenovo" alt="logotype" />
              <img src={logo8} className="logo siemens" alt="logotype" />
              <img src={logo9} className="logo syngenta" alt="logotype" />
            </Fade>
          </div>
        </div>
      </main>
      ;
    </>
  );
};
