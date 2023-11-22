import { useState } from "react";
import { PortfolioTab } from "@shared/ui/PortfolioTab";
import { Selector } from "@shared/ui/Selector";

export const PortfolioList = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <main className="content-container min-[1024px]:hidden">
        <h1>Наше портфолио</h1>
        <p className="paragraph mt-8 text-center">
          Компания Special Solution занимается разработкой передовых решений,
          способных удовлетворить самые изысканные и специфические запросы наших
          клиентов. Мы сочетаем глубокие знания отрасли с инновационным
          мышлением, чтобы предлагать продукты и услуги, выходящие за рамки
          стандартных предложений.
        </p>
        <Selector />
      </main>
      <main className="content-container max-[1024px]:hidden">
        <h1>Наше портфолио</h1>
        <p className="paragraph mt-8 text-center">
          Компания Special Solution занимается разработкой передовых решений,
          способных удовлетворить самые изысканные и специфические запросы наших
          клиентов. Мы сочетаем глубокие знания отрасли с инновационным
          мышлением, чтобы предлагать продукты и услуги, выходящие за рамки
          стандартных предложений.
        </p>
      </main>
    </>
  );
};
