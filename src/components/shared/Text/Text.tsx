import * as S from "./Text.style";
import { forwardRef, InputHTMLAttributes } from "react";

// interface PropsType
//   extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
//   value?: string;
// }

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

const TextRef = ({
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
