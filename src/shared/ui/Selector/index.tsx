// Selector.tsx
import React from "react";
import Select, { SingleValue } from "react-select";
import { useSelectOption } from "@shared/lib/hooks/useSelectOption"; // Adjust the import path as necessary

type OptionType = { value: string; label: string };

interface SelectorProps {
  options: OptionType[];
  onChange: (newValue: SingleValue<OptionType>) => void; // Adjust the type to match react-select's expectation
  defaultValue?: OptionType; // defaultValue should be optional to match react-select's API
  styles?: any; // Define proper type for your styles if needed
  placeholder?: string;
}

export const Selector: React.FC<SelectorProps> = ({
  options,
  onChange,
  defaultValue,
  styles,
  placeholder,
}) => {
  // Use the custom hook to manage the selected option state
  const { selectedOption, handleChange } = useSelectOption(defaultValue);

  // Wrap the onChange callback to provide the correct type
  const handleSelectChange = (newValue: SingleValue<OptionType>) => {
    handleChange(newValue); // Call the hook's handleChange function
    onChange(newValue); // Call the passed onChange prop function
  };

  // Use the selectedOption from the hook as the value prop for the Select component
  return (
    <Select
      classNamePrefix="react-select"
      className="react-select-container mt-8"
      value={selectedOption}
      onChange={handleSelectChange}
      options={options}
      menuPortalTarget={document.body}
      styles={styles}
      menuPosition={"fixed"}
      placeholder={placeholder}
    />
  );
};
