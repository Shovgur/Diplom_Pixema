import React, { FC } from "react";
import styles from "../../Components/Inputs/"


type InputsProps = {
  value?: string;
  placeholder?: string;
  id?: string;
  isError?: any;
  type?: string;
  onChange?: (event: any) => void;
};

const Inputs: FC<InputsProps> = ({
  onChange,
  value,
  isError,
  id,
  placeholder,
  type = "text",
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      id={id}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Inputs;
