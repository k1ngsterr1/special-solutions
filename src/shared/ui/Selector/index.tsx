// Selector.tsx
import React from "react";
import Select, { SingleValue } from "react-select";
import { useSelectOption } from "@shared/lib/hooks/useSelectOption"; // Adjust the import path as necessary

import "./styles.scss";

type OptionType = { value: string; label: string };

interface SelectorProps {
  options: OptionType[];
  onChange: (newValue: SingleValue<OptionType>) => void;
  defaultValue?: OptionType;
  placeholder?: string;
}

export const Selector: React.FC<SelectorProps> = ({
  options,
  onChange,
  defaultValue,
}) => {
  const { selectedOption, handleSelectChange } = useSelectOption(defaultValue); // Correct function name used

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
      defaultValue={defaultValue}
      onChange={(newValue) => handleSelectChange(newValue as OptionType)} // Cast newValue to OptionType
      options={options}
      menuPortalTarget={document.body}
      styles={style}
      menuPosition={"fixed"}
      placeholder="Выберите категорию"
    />
  );
};
