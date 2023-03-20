import * as S from "./Text.style";
import { forwardRef, InputHTMLAttributes } from "react";

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {}
const TextRef = ({
  className,
  onChange,
  onKeyDown,
  onFocus,
  value,
  name,
  id,
  placeholder,
  readOnly,
}: PropsType) => {
  return (
    <S.Text
      className={`text ${className}`}
      type="text"
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      value={value}
      name={name}
      id={id}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
};

const Text = forwardRef(TextRef);
export default Text;
