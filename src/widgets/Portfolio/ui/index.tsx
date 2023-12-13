import { useState } from "react";
import { Selector } from "@shared/ui/Selector";
import { InteriorDesign } from "@features/PortfolioObjects/InteriorDesign";

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

  const selectedOptionObject =
    options.find((option) => option.value === selectedValue) || null;

  return (
    <>
      <main className="content-container min-[1024px]:hidden">
        <h1>Наше портфолио</h1>
        <p className="paragraph mt-8 text-center">
          Компания Special Solution занимается разработкой передовых решений,
          способных удовлетворить самые изыска нные и специфические запросы
          наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным
          мышлением, чтобы предлагать продукты и услуги, выходящие за рамки
          стандартных предложений.
        </p>
        <Selector
          key={selectedValue}
          options={options}
          selectedOption={selectedOptionObject}
          onChange={handleChange}
        />
        {selectedValue == "" || null || undefined ? (
          <>
            <InteriorDesign />
          </>
        ) : null}
        {selectedValue == "Дизайн Интерьера" ? (
          <>
            <InteriorDesign />
          </>
        ) : null}
        {selectedValue == "Дизайн Офиса" ? (
          <>
            <InteriorDesign />
          </>
        ) : null}
        {selectedValue == "Утепление Офиса" ? (
          <>
            <InteriorDesign />
          </>
        ) : null}
      </main>
      <main className="content-container max-[1024px]:hidden min-[2560px]:mt-[100px]">
        <h1>Наше портфолио</h1>
        <p className="paragraph mt-8 text-center">
          Наша команда гордится представить Вам обзор некоторых наших проектов,
          которые отражают наш профессионализм, качество и способность воплощать
          Ваши строительные и инженерные задачи в реальность. Мы готовы принять
          вызов любого масштаба и сложности. С нами Ваш проект – в надежных
          руках.
        </p>
        <Selector
          key={selectedValue}
          options={options}
          selectedOption={selectedOptionObject}
          onChange={handleChange}
        />
        {selectedValue == "" || null || undefined ? (
          <>
            <InteriorDesign />
          </>
        ) : null}
        {selectedValue == "Дизайн Интерьера" ? (
          <>
            <InteriorDesign />
          </>
        ) : null}
        {selectedValue == "Дизайн Офиса" ? (
          <>
            <InteriorDesign />
          </>
        ) : null}
        {selectedValue == "Утепление Офиса" ? (
          <>
            <InteriorDesign />
          </>
        ) : null}
      </main>
    </>
  );
};
