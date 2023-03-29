import * as S from "./Text.style";
import { forwardRef, InputHTMLAttributes } from "react";

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  display?: string;
  padding?: string;
  fontSize?: string;
  marginTop?: string;
  backgroundColor?: string;
  width?: string;
  borderRadius?: string;
  height?: string;
  border?: string;
  borderBottomColor?: string;
  fontWeight?: string;
  marginLeft?: string;
}

const TextRef = (
  {
    className,
    onChange,
    onKeyDown,
    onFocus,
    value,
    name,
    id,
    placeholder,
    readOnly,

    width,
    display,
    fontSize,
    padding,
    marginTop,
    backgroundColor,
    borderBottomColor,
    fontWeight,
    marginLeft,
    borderRadius,
    height,
    border,
  }: PropsType,
  ref: any
) => {
  return (
    <S.Text
      ref={ref}
      type="text"
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      value={value}
      name={name}
      id={id}
      placeholder={placeholder}
      readOnly={readOnly}
      style={{
        width,
        display,
        fontSize,
        padding,
        marginTop,
        backgroundColor,
        borderBottomColor,
        fontWeight,
        marginLeft,
        borderRadius,
        height,
        border,
      }}
    />
  );
};

const Text = forwardRef(TextRef);
export default Text;
