import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  event?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  text?: string;
  action?: any;
  width?: string;
  fontSize?: string;
  padding?: string;
  marginRight?: string;
  backgroundColor?: string;
  border?: string;
  color?: string;
}

export const Button = ({
  event,
  disabled,
  text,
  action,
  width,
  fontSize,
  padding,
  marginRight,
  backgroundColor,
  border,
  color,
}: ButtonProps) => {
  return (
    <ButtonStyle
      style={{
        width,
        fontSize,
        padding,
        marginRight,
        backgroundColor,
        border,
        color,
      }}
      onClick={event}
      className={disabled ? "disabled" : ""}
    >
      <span>{text}</span>
    </ButtonStyle>
  );
};
