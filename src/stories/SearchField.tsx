import React from "react";
import magnifyingGlassIcon from "./assets/magnifying-glass.svg";
import { InputField } from "./InputField";
import "./search-field.scss";

export interface SearchFieldProps {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
}

export const SearchField = ({
  placeholder = "Search",
  value,
  onValueChange,
}: SearchFieldProps) => {
  const searchIcon = (
    <img
      src={magnifyingGlassIcon}
      className="magnifying-glass-icon"
      alt="Magnifying glass icon"
    />
  );

  return (
    <InputField
      placeholder={placeholder}
      value={value}
      onValueChange={onValueChange}
      icon={searchIcon}
      variant="primary"
    />
  );
};
