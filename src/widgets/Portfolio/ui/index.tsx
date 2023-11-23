import { Selector } from "@shared/ui/Selector";
import { useSelectOption, OptionType } from "@shared/lib/hooks/useSelectOption"; // Ensure the path is correct

export const PortfolioList = () => {
  const { selectedOption, handleSelectChange } = useSelectOption(); //

  // Define the options for the Selector component
  const options: OptionType[] = [
    { value: "Дизайн Интерьера", label: "Дизайн Интерьера" },
    { value: "Дизайн Офиса", label: "Дизайн Офиса" },
    { value: "Утепление Офиса", label: "Утепление Офиса" },
  ];

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
          options={options}
          onChange={handleSelectChange} // Use the correct function name
          defaultValue={selectedOption}
        />
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
          options={options}
          onChange={handleSelectChange} // Use the correct function name
          defaultValue={selectedOption}
          If
          you
          want
          to
          set
          a
          default
          value
        />
      </main>
    </>
  );
};
