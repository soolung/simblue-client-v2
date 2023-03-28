import * as S from "./Radio.style";
import { InputHTMLAttributes } from "react";

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  isChecked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
  id?: string;
  readOnly?: boolean;
  display?: string;
}

const Radio = ({
  type,
  isChecked,
  onChange,
  value,
  name,
  id,
  readOnly,
  display,
  label,
}: PropsType) => {
  return (
    <S.RadioLabel style={{ display }}>
      <S.Radio
        type="radio"
        checked={isChecked}
        onChange={onChange}
        value={value}
        name={name}
        id={id}
        readOnly={readOnly}
        tabIndex={readOnly ? -1 : 0}
      />
      <span>{label}</span>
    </S.RadioLabel>
  );
};

export default Radio;
