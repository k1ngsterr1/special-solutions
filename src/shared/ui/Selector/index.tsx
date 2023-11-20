import { useState } from "react";
import Select, { SingleValue } from "react-select";

import "./styles.scss";

type OptionType = { value: string; label: string };
type ValueType = SingleValue<OptionType>;

export const Selector = () => {
  const options: OptionType[] = [
    { value: "Дизайн Интерьера", label: "Дизайн Интерьера" },
    { value: "Дизайн Офиса", label: "Дизайн Офиса" },
    { value: "Утепление Помещения", label: "Утепление Помещения" },
    { value: "Утепление Помещения", label: "Утепление Помещения" },
    { value: "Утепление Помещения", label: "Утепление Помещения" },
    { value: "Утепление Помещения", label: "Утепление Помещения" },
  ];

  const [selectedOption, setSelectedOption] = useState<ValueType>(options[0]);

  const handleChange = (newValue: ValueType) => {
    setSelectedOption(newValue);
  };

  return (
    <>
      <Select
        classNamePrefix="react-select"
        className="react-select-container mt-8"
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
        menuPortalTarget={document.body}
        menuPosition={"fixed"}
        placeholder={"Выберите услугу"}
      />
    </>
  );
};
