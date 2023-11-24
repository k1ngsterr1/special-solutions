import { PortfolioTab } from "@shared/ui/PortfolioTab";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

import portfolio01 from "@assets/portfolio01.webp";

export const InteriorDesign = () => {
  const navigate = useNavigate();

  function navigatePortfolioCase() {
    navigate("/portfolio/astana_bank");
  }

  return (
    <>
      {" "}
      <div className="w-full flex justify-between items-center mt-8">
        <Slide className="w-full" direction="up" triggerOnce={true}>
          <PortfolioTab
            text="Интерьер Офиса"
            subText="Интерьер"
            onClick={navigatePortfolioCase}
            image={portfolio01}
            marginTop="mt-8"
          />
        </Slide>
        <Slide className="w-full" delay={200} direction="up" triggerOnce={true}>
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
      </div>
      <div className="w-full flex justify-between items-center mt-8">
        <Slide className="w-full" direction="up" triggerOnce={true}>
          <PortfolioTab
            text="Интерьер Офиса"
            subText="Интерьер"
            onClick={navigatePortfolioCase}
            image={portfolio01}
            marginTop="mt-8"
          />
        </Slide>
        <Slide className="w-full" delay={200} direction="up" triggerOnce={true}>
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
      </div>
    </>
  );
};
