import { useState, useEffect } from "react";
import { Selector } from "@shared/ui/Selector";

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
          <span>хуй</span>
        ) : (
          <span>пизда</span>
        )}
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
        {selectedValue === "Дизайн Интерьера" ? <span>хуй</span> : null}
      </main>
    </>
  );
};
