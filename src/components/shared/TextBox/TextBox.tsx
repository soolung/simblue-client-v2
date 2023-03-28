import React from "react";
import { InputHTMLAttributes } from "react";
import * as S from "./TextBox.style";

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
}
const TextBox = ({
  type,
  placeholder,
  name,
  onChange,
  value,
  readOnly = false,
  onKeyDown,
  onBlur,
  width,
  backgroundColor,
}: PropsType) => {
  return (
    <S.TextBox
      style={{ width, backgroundColor }}
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
