import { InputHTMLAttributes } from "react";
import * as S from "./Check.style";

interface Proptypes extends InputHTMLAttributes<HTMLInputElement> {
  isChecked?: boolean;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Check = (props: Proptypes) => {
  return (
    <S.CheckLabel>
      <S.CheckInput
        type="checkbox"
        checked={props.isChecked}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        id={props.id}
        readOnly={props.readOnly}
        tabIndex={props.readOnly ? -1 : 0}
      />
      <span>{props.label}</span>
    </S.CheckLabel>
  );
};

export default Check;
