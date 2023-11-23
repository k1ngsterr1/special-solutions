import { useState } from "react";

export type OptionType = { value: string; label: string };

export const useSelectOption = (initialValue?: OptionType) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | undefined>(
    initialValue
  );

  const handleSelectChange = (option: OptionType | null) => {
    setSelectedOption(option ?? undefined);
    console.log(selectedOption?.value);
  };

  return {
    selectedOption,
    handleSelectChange, // Correct function name
  };
};
