import { PortfolioTab } from "@shared/ui/PortfolioTab";
import { Slide } from "react-awesome-reveal";
import { Button } from "@shared/ui/Button";

import portfolio01 from "@assets/portfolio01.webp";

export const PorfolioScreen = () => {
  return (
    <>
      <div className="mobile-screen flex flex-col items-center w-full min-[1024px]:hidden">
        <Slide direction="left" triggerOnce={true}>
          <h4 className="mt-12">Портфолио</h4>
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <p className="paragraph text-center mt-8">
            Компания <span className="orange">Special Solution</span> занимается
            разработкой передовых решений, способных удовлетворить самые
            изысканные и специфические запросы наших клиентов. Мы сочетаем
            глубокие знания отрасли с инновационным мышлением, чтобы предлагать
            продукты и услуги, выходящие за рамки стандартных предложений.
          </p>
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <PortfolioTab
            text="Интерьер Офиса"
            subText="Интерьер"
            image={portfolio01}
            marginTop="mt-8"
          />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <PortfolioTab
            text="Интерьер Офиса"
            subText="Интерьер"
            image={portfolio01}
            marginTop="mt-8"
          />
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <PortfolioTab
            text="Интерьер Офиса"
            subText="Интерьер"
            image={portfolio01}
            marginTop="mt-8"
          />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <Button
            text="Все проекты"
            type="outline"
            marginTop="mt-8"
            onClick={() => console.log("holla")}
          />
        </Slide>
      </div>
      <div className="pc-screen flex flex-col items-center w-full max-[1024px]:hidden mt-24">
        <div className="flex w-full justify-between items-center ">
          <div className="flex flex-col justify-center w-[90%]">
            <Slide direction="left" triggerOnce={true}>
              <h4>Портфолио</h4>
            </Slide>
            <Slide direction="left" triggerOnce={true}>
              <p className="paragraph mt-8 w-[60%]">
                Компания <span className="orange">Special Solution</span>{" "}
                занимается разработкой передовых решений, способных
                удовлетворить самые изысканные и специфические запросы наших
                клиентов. Мы сочетаем глубокие знания отрасли с инновационным
                мышлением, чтобы предлагать продукты и услуги, выходящие за
                рамки стандартных предложений.
              </p>
            </Slide>
          </div>
          <Slide direction="right" triggerOnce={true}>
            <Button
              text="Все проекты"
              onClick={() => console.log("holla")}
              type="outline"
            />
          </Slide>
        </div>
        <div className="w-full flex justify-between items-center mt-8">
          <Slide className="w-full" direction="up" triggerOnce={true}>
            <PortfolioTab
              text="Интерьер Офиса"
              subText="Интерьер"
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
              image={portfolio01}
              marginTop="mt-8 ml-8"
            />
          </Slide>
        </div>
      </div>
    </>
  );
};
