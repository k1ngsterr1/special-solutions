import { PortfolioTab } from "@shared/ui/PortfolioTab";
import { Slide } from "react-awesome-reveal";
import { Button } from "@shared/ui/Button";
import { useNavigate } from "react-router-dom";

import portfolio01 from "@assets/portfolio01.webp";

export const PorfolioScreen = () => {
  const navigate = useNavigate();

  function navigatePortfolio() {
    navigate("/portfolio");
  }

  function navigatePortfolioCase() {
    navigate("/portfolio/astana_bank");
  }

  return (
    <>
      <div
        className="mobile-screen flex flex-col items-center w-full min-[1024px]:hidden"
        id="portfolio-mob"
      >
        <Slide direction="left" triggerOnce={true}>
          <h4 className="mt-12">Портфолио</h4>
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <p className="paragraph text-center mt-8">
            Наша команда гордится представить Вам обзор некоторых наших
            проектов, которые отражают наш профессионализм, качество и
            способность воплощать Ваши строительные и инженерные задачи в
            реальность. Мы готовы принять вызов любого масштаба и сложности. С
            нами Ваш проект – в надежных руках.
          </p>
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <PortfolioTab
            text="Интерьер Офиса"
            subText="Интерьер"
            onClick={navigatePortfolioCase}
            image={portfolio01}
            marginTop="mt-8"
          />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <PortfolioTab
            text="Интерьер Офиса"
            subText="Интерьер"
            onClick={navigatePortfolioCase}
            image={portfolio01}
            marginTop="mt-8"
          />
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <PortfolioTab
            text="Интерьер Офиса"
            subText="Интерьер"
            onClick={navigatePortfolioCase}
            image={portfolio01}
            marginTop="mt-8"
          />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <Button
            text="Все проекты"
            type="outline"
            marginTop="mt-8"
            onClick={navigatePortfolio}
          />
        </Slide>
      </div>
      <div
        className="pc-screen flex flex-col items-center w-full max-[1024px]:hidden"
        id="portfolio"
      >
        <div className="flex w-full justify-between items-center mt-28 ">
          <div className="flex flex-col justify-center w-[90%]">
            <Slide direction="left" triggerOnce={true}>
              <h4>Портфолио</h4>
            </Slide>
            <Slide direction="left" triggerOnce={true}>
              <p className="paragraph mt-8 w-[60%]">
                Наша команда гордится представить Вам обзор некоторых наших
                проектов, которые отражают наш профессионализм, качество и
                способность воплощать Ваши строительные и инженерные задачи в
                реальность. Мы готовы принять вызов любого масштаба и сложности.
                С нами Ваш проект – в надежных руках.
              </p>
            </Slide>
          </div>
          <Slide direction="right" triggerOnce={true}>
            <Button
              text="Все проекты"
              onClick={navigatePortfolio}
              type="outline"
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
        </div>
      </div>
    </>
  );
};
