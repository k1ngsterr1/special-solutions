import { useState, useEffect } from "react";
import { PortfolioTab } from "@shared/ui/PortfolioTab";
import { Selector } from "@shared/ui/Selector";
import { Slide } from "react-awesome-reveal";
import { Footer } from "@features/Footer/ui";

import portfolio01 from "@assets/portfolio01.webp";

type OptionType = { value: string; label: string };

export const PortfolioList = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options: OptionType[] = [
    { value: "Дизайн Интерьера", label: "Дизайн Интерьера" },
    { value: "Дизайн Офиса", label: "Дизайн Офиса" },
    { value: "Утепление Офиса", label: "Утепление Офиса" },
  ];

  const handleChange = (selectedOption: OptionType | null) => {
    if (selectedOption && "value" in selectedOption) {
      setSelectedValue(selectedOption.value);
    } else {
      setSelectedValue("");
    }
  };

  useEffect(() => {
    console.log("Updated selectedOption:", selectedValue);
  }, [selectedValue]);

  const selectedOptionObject =
    options.find((option) => option.value === selectedValue) || null;

  return (
    <>
      <main className="content-container min-[1024px]:hidden">
        <h1>Наше портфолио</h1>
        <p className="paragraph mt-8 text-center">
          Компания Special Solution занимается разработкой передовых решений,
          способных удовлетворить самые изыска{" "}
          <div className="w-full flex items-center justify-between">
            <PortfolioTab
              text="Интерьер Офиса"
              subText="Интерьер"
              image={portfolio01}
              marginTop="mt-8"
            />
            <PortfolioTab
              text="Интерьер Офиса"
              subText="Интерьер"
              image={portfolio01}
              marginTop="mt-8"
            />
            <PortfolioTab
              text="Интерьер Офиса"
              subText="Интерьер"
              image={portfolio01}
              marginTop="mt-8"
            />
            <PortfolioTab
              text="Интерьер Офиса"
              subText="Интерьер"
              image={portfolio01}
              marginTop="mt-8"
            />
          </div>
          нные и специфические запросы наших клиентов. Мы сочетаем глубокие
          знания отрасли с инновационным мышлением, чтобы предлагать продукты и
          услуги, выходящие за рамки стандартных предложений.
        </p>
        <Selector
          key={selectedValue}
          options={options}
          selectedOption={selectedOptionObject}
          onChange={handleChange}
        />
        {selectedValue == "Дизайн Интерьера" ? (
          <div className="flex items-center justify-between">
            <PortfolioTab
              text="Интерьер Офиса"
              subText="Интерьер"
              image={portfolio01}
              marginTop="mt-8"
            />
          </div>
        ) : null}
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
        <Selector
          key={selectedValue}
          options={options}
          selectedOption={selectedOptionObject}
          onChange={handleChange}
        />
        {selectedValue == "Дизайн Интерьера" ? (
          <>
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
          </>
        ) : null}
      </main>
    </>
  );
};
