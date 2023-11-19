import { useState } from "react";
import Select, { SingleValue } from "react-select";

import "./styles.scss";

type OptionType = { value: string; label: string };
type ValueType = SingleValue<OptionType>;

export const Selector = () => {
  const [selectedOption, setSelectedOption] = useState<ValueType>(null);

  const handleChange = (newValue: ValueType) => {
    setSelectedOption(newValue);
  };

  const options: OptionType[] = [
    { value: "Дизайн Интерьера", label: "Дизайн Интерьера" },
    { value: "Дизайн Интерьера", label: "Дизайн Интерьера" },
  ];

  return (
    <>
      <Select
        classNamePrefix={"react-select"}
        className="react-select-container mt-8"
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </>
  );
};
