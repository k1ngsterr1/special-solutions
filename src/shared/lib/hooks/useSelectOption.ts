import { useState } from "react";
type OptionType = { value: string; label: string };
type ValueType = OptionType | null;

export const useSelectOption = (initialValue: ValueType) => {
  const [selectedOption, setSelectedOption] = useState<ValueType>(initialValue);

  const handleChange = (newValue: ValueType) => {
    setSelectedOption(newValue);
  };

  return { selectedOption, handleChange };
};
