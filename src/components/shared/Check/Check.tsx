import { InputHTMLAttributes } from "react";
import * as S from "./Check.style";

interface Proptypes extends InputHTMLAttributes<HTMLInputElement> {
  isChecked?: boolean;
  label?: string;
  display?: string;
  marginLeft?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  buttonMargin?: string;
  buttonmarginTop?: string;
  fontSize?: string;
  marginTop?: string;
  backgourndColor?: string;
}

const Check = ({
  isChecked,
  onChange,
  value,
  name,
  id,
  readOnly,
  label,
  display,
  marginLeft,
  fontSize,
  buttonWidth,
  buttonHeight,
  buttonMargin,
  marginTop,
}: Proptypes) => {
  return (
    <S.CheckLabel style={{ display, marginLeft }}>
      <S.CheckInput
        style={{
          width: buttonWidth,
          height: buttonHeight,
          marginRight: buttonMargin,
        }}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        value={value}
        name={name}
        id={id}
        readOnly={readOnly}
        tabIndex={readOnly ? -1 : 0}
      />
      <span style={{ fontSize, marginTop }}>{label}</span>
    </S.CheckLabel>
  );
};

export default Check;
