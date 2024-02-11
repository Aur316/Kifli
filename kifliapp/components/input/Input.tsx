import React from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="input-container"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
