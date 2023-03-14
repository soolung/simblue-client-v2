import React from "react";
import { ButtonStyle } from "./Button.style";

type Props = { text: string; event: React.MouseEventHandler<HTMLButtonElement>; disabled: boolean };

export const Button = ({ text, event, disabled = false }: Props) => {
  return (
    <ButtonStyle onClick={!disabled ? event : () => {}} className={disabled ? "disabled" : ""}>
      {text}
    </ButtonStyle>
  );
};
