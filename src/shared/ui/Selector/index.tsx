import React from "react";
import Select, { SingleValue } from "react-select";

import "./styles.scss";

export type OptionType = { value: string; label: string };

interface SelectorProps {
  options: OptionType[];
  selectedOption: OptionType | null;
  onChange: (newValue: SingleValue<OptionType>) => void;
  placeholder?: string;
}

export const Selector: React.FC<SelectorProps> = ({
  options,
  selectedOption,
  onChange,
  placeholder = "Выберите категорию",
}) => {
  const style = {
    control: (base: any) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "hsla(24, 100%, 50%, 1)" : "white",
    }),
  };

  const defaultValue = { value: "Дизайн Интерьера", label: "Дизайн Интерьера" };

  return (
    <Select
      classNamePrefix="react-select"
      className="react-select-container mt-8"
      value={selectedOption}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      menuPortalTarget={document.body}
      styles={style}
      name="service"
      menuPosition={"fixed"}
      placeholder={placeholder}
    />
  );
};
