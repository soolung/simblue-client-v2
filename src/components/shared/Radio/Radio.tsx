import * as S from "./Radio.style";
import { InputHTMLAttributes } from "react";

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
  labelClassName?: string;
  label?: string;
  className?: string;
  isChecked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
  id?: string;
  readOnly?: boolean;
}

const Radio = (props: PropsType) => {
  return (
    <S.RadioLabel>
      <S.Radio
        className={`radio ${props.className ? props.className : ""}`}
        type="radio"
        checked={props.isChecked}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        id={props.id}
        readOnly={props.readOnly}
        tabIndex={props.readOnly ? -1 : 0}
      />
      <span>{props.label}</span>
    </S.RadioLabel>
  );
};

export default Radio;
