import React from "react";
import "./input-field.scss";

export interface InputFieldProps {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

export const InputField = ({
  placeholder = "Enter text",
  value,
  onValueChange,
  variant = "primary",
  icon,
}: InputFieldProps) => {
  return (
    <div className={`input-field-container ${variant}`}>
      {icon && <div className="input-icon-container">{icon}</div>}
      <input
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        name="input-field"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onValueChange(event.target.value)
        }
        className="input-field"
      />
    </div>
  );
};
