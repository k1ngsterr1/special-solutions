import { PortfolioTab } from "@shared/ui/PortfolioTab";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

import astana_cover from "@assets/portfolio/astana_bank/astana01_cover.webp";
import mars_cover from "@assets/portfolio/mars/mars_cover.webp";
import dar_cover from "@assets/portfolio/koktem/koktem_cover.webp";
import syngenta_cover from "@assets/portfolio/syngenta/syngent_cover.webp";
import caterpillar_cover from "@assets/portfolio/CAT/caterpillar.webp";
import standart_cover from "@assets/portfolio/insurance/insurance_cover.webp";

export const InteriorDesign = () => {
  const navigate = useNavigate();

  function navigatePortfolio() {
    navigate("/portfolio");
  }

  function navigateBankAstana() {
    navigate("/portfolio/astana_bank");
  }

  function navigateMars() {
    navigate("/portfolio/mars");
  }

  function navigateDar() {
    navigate("/portfolio/dar");
  }

  function navigateSyngenta() {
    navigate("/portfolio/syngent");
  }

  function navigateCAT() {
    navigate("/portfolio/CAT");
  }

  function navigateStandartInsurance() {
    navigate("/portfolio/standard_insurance");
  }

  return (
    <>
      <div className="w-full flex flex-col items-center mt-8 min-[1024px]:hidden">
        <Slide className="w-full" direction="up" triggerOnce={true}>
          <PortfolioTab
            text="Mars Казахстан"
            subText="Интерьер"
            onClick={navigateMars}
            image={mars_cover}
            marginTop="mt-8"
          />
        </Slide>
        <Slide className="w-full" delay={200} direction="up" triggerOnce={true}>
          <PortfolioTab
            text="DAR Казахстан"
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
            text="Syngenta Казахстан"
            subText="Интерьер"
            onClick={navigateSyngenta}
            image={syngenta_cover}
            marginTop="mt-8"
          />
        </Slide>
        <Slide className="w-full" delay={400} direction="up" triggerOnce={true}>
          <PortfolioTab
            text="Astana Bank Казахстан"
            subText="Интерьер"
            onClick={navigateBankAstana}
            image={astana_cover}
            marginTop="mt-8"
          />
        </Slide>
        <Slide
          className="w-full "
          delay={500}
          direction="up"
          triggerOnce={true}
        >
          <PortfolioTab
            text="Caterpillar Казахстан"
            subText="Интерьер"
            onClick={navigateCAT}
            image={caterpillar_cover}
            marginTop="mt-8"
          />
        </Slide>
        <Slide triggerOnce={true} direction="up">
          <PortfolioTab
            text="Standart Insurance"
            subText="Интерьер"
            onClick={navigateStandartInsurance}
            image={standart_cover}
            marginTop="mt-8"
          />
        </Slide>
      </div>
      <div className="w-full flex flex-col justify-between items-center mt-8 max-[1024px]:hidden">
        <div className="w-full flex justify-between items-center">
          <Slide direction="up" className="w-full" triggerOnce={true}>
            <PortfolioTab
              text="CAT Казахстан"
              subText="Интерьер"
              onClick={navigateBankAstana}
              image={caterpillar_cover}
              marginTop="mt-8"
            />
          </Slide>
          <Slide className="w-full ml-8" direction="up" triggerOnce={true}>
            <PortfolioTab
              text="Mars Казахстан"
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
              text="DAR Казахстан"
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
              text="Syngenta Казахстан"
              subText="Интерьер"
              onClick={navigateSyngenta}
              image={syngenta_cover}
              marginTop="mt-8"
            />
          </Slide>
        </div>
        <div className="w-full flex  items-center">
          <Slide delay={400} direction="up" triggerOnce={true}>
            <PortfolioTab
              text="Astana Bank"
              subText="Интерьер"
              onClick={navigateBankAstana}
              image={astana_cover}
              marginTop="mt-8"
            />
          </Slide>
          <Slide direction="up" className="ml-8" triggerOnce={true}>
            <PortfolioTab
              text="Standart Insurance"
              subText="Интерьер"
              onClick={navigateStandartInsurance}
              image={standart_cover}
              marginTop="mt-8"
            />
          </Slide>
        </div>
      </div>
    </>
  );
};
