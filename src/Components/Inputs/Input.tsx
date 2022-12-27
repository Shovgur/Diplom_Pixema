import React, { FC } from "react";
import styles from "./Input.module.css"


type InputProps = {
  value?: string;
  placeholder?: string;
  id?: string;
  isError?: any;
  autoComplete?: string;
  type?: string;
  onChange?: (event: any) => void;
};

const Input: FC<InputProps> = ({
  onChange,
  value,
  isError,
  id,
  placeholder,
  autoComplete = "off",
  type = "text",
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      id={id}
      placeholder={placeholder}
      autoComplete={autoComplete}
      type={type}
    />
  );
};

export default Input;
