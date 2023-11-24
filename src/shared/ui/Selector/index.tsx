// Selector.tsx
import React from "react";
import Select, { SingleValue } from "react-select";

import "./styles.scss";

type OptionType = { value: string; label: string };

interface SelectorProps {
  options: OptionType[];
  selectedOption: OptionType | null;
  onChange: (newValue: SingleValue<OptionType>) => void;
  placeholder?: string;
}

export const Selector: React.FC<SelectorProps> = ({
  options,
  selectedOption,
  onChange, // Add the onChange prop
  placeholder = "Выберите категорию", // Default value for placeholder
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

  return (
    <Select
      classNamePrefix="react-select"
      className="react-select-container mt-8"
      value={selectedOption}
      onChange={onChange}
      options={options}
      menuPortalTarget={document.body}
      styles={style}
      menuPosition={"fixed"}
      placeholder={placeholder}
    />
  );
};
