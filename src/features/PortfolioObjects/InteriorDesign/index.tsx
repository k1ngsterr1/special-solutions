import { PortfolioTab } from "@shared/ui/PortfolioTab";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

import mars_cover from "@assets/portfolio/mars/mars_cover.webp";
import dar_cover from "@assets/portfolio/koktem/koktem_cover.webp";
import syngenta_cover from "@assets/portfolio/syngenta/syngent_cover.webp";

export const InteriorDesign = () => {
  const navigate = useNavigate();

  function navigateMars() {
    navigate("/portfolio/mars");
  }

  function navigateDar() {
    navigate("/portfolio/dar");
  }

  function navigateSyngenta() {
    navigate("/portfolio/syngent");
  }

  return (
    <>
      <div className="w-full flex flex-col items-center mt-8 min-[1024px]:hidden">
        <Slide className="w-full" direction="up" triggerOnce={true}>
          <PortfolioTab
            text="Интерьер Офиса Mars"
            subText="Интерьер"
            onClick={navigateMars}
            image={mars_cover}
            marginTop="mt-8"
          />
        </Slide>
        <Slide className="w-full" delay={200} direction="up" triggerOnce={true}>
          <PortfolioTab
            text="Офис компании DAR"
            subText="Интерьер"
            onClick={navigateDar}
            image={dar_cover}
            marginTop="mt-8"
          />
        </Slide>
        <Slide
          className="w-full "
          delay={300}
          direction="up"
          triggerOnce={true}
        >
          <PortfolioTab
            text="Офис компании Syngenta Казахстан"
            subText="Интерьер"
            onClick={navigateSyngenta}
            image={syngenta_cover}
            marginTop="mt-8"
          />
        </Slide>
      </div>
      <div className="w-full flex flex-col justify-between items-center mt-8 max-[1024px]:hidden">
        <div className="w-full flex justify-between items-center">
          <Slide className="w-full" direction="up" triggerOnce={true}>
            <PortfolioTab
              text="Интерьер Офиса Mars"
              subText="Интерьер"
              onClick={navigateMars}
              image={mars_cover}
              marginTop="mt-8"
            />
          </Slide>
          <Slide
            className="w-full ml-8"
            delay={200}
            direction="up"
            triggerOnce={true}
          >
            <PortfolioTab
              text="Офис компании DAR"
              subText="Интерьер"
              onClick={navigateDar}
              image={dar_cover}
              marginTop="mt-8"
            />
          </Slide>
          <Slide
            className="w-full ml-8"
            delay={300}
            direction="up"
            triggerOnce={true}
          >
            <PortfolioTab
              text="Офис компании Syngenta Казахстан"
              subText="Интерьер"
              onClick={navigateSyngenta}
              image={syngenta_cover}
              marginTop="mt-8"
            />
          </Slide>
        </div>
        {/* <div className="w-full flex justify-between items-center">
          <Slide className="w-full" direction="up" triggerOnce={true}>
            <PortfolioTab
              text="Интерьер Офиса"
              subText="Интерьер"
              onClick={navigatePortfolioCase}
              image={portfolio01}
              marginTop="mt-8"
            />
          </Slide>
          <Slide
            className="w-full"
            delay={200}
            direction="up"
            triggerOnce={true}
          >
            <PortfolioTab
              text="Интерьер Офиса"
              subText="Интерьер"
              onClick={navigatePortfolioCase}
              image={portfolio01}
              marginTop="mt-8 ml-8"
            />
          </Slide>
          <Slide
            className="w-full ml-8"
            delay={300}
            direction="up"
            triggerOnce={true}
          >
            <PortfolioTab
              text="Интерьер Офиса"
              subText="Интерьер"
              onClick={navigatePortfolioCase}
              image={portfolio01}
              marginTop="mt-8 ml-8"
            />
          </Slide>
          <Slide
            className="w-full ml-8"
            delay={400}
            direction="up"
            triggerOnce={true}
          >
            <PortfolioTab
              text="Интерьер Офиса"
              subText="Интерьер"
              onClick={navigatePortfolioCase}
              image={portfolio01}
              marginTop="mt-8 ml-8"
            />
          </Slide>
        </div> */}
      </div>
    </>
  );
};
