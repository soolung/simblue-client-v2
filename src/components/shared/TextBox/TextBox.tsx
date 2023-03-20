import React from "react";
import { InputHTMLAttributes } from "react";
import * as S from "./TextBox.style";

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {}
const TextBox = ({
  type,
  placeholder,
  name,
  onChange,
  value,
  readOnly = false,
  onKeyDown,
  onBlur,
}: PropsType) => {
  return (
    <S.TextBox
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      readOnly={readOnly}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

export default TextBox;
