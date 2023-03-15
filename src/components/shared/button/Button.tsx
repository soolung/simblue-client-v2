import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./Button.style";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  event: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export const Button = (props: BtnProps) => {
  return <ButtonStyle {...props} onClick={props.event} className={props.disabled ? "disabled" : ""} />;
};
