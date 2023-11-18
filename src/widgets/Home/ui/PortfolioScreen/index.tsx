import { PortfolioTab } from "@shared/ui/PortfolioTab";
import { Slide } from "react-awesome-reveal";

import portfolio01 from "@assets/portfolio01.webp";

export const PorfolioScreen = () => {
  return (
    <>
      <Slide direction="left" triggerOnce={true}>
        <h4 className="mt-12">Портфолио</h4>
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <p className="paragraph text-center mt-8">
          Компания <span className="oange">Special Solution</span> занимается
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
    </>
  );
};
