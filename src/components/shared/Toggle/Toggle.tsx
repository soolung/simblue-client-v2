import styled from "styled-components";
import * as S from "./Toggle.style";
import { LabelHTMLAttributes } from "react";

// LabelHTMLAttributes<HTMLLabelElement> &

type ToggleProps = {
  value?: any;
  name?: string;
  id?: string;
  onClick?: () => void;
  readOnly?: boolean;
  label: string;
};

const Toggle = ({ label, onClick, value, name, id, readOnly }: ToggleProps) => {
  return (
    <>
      <S.Toggle onClick={onClick}>
        <input
          type="hidden"
          value={value}
          name={name}
          id={id}
          readOnly={readOnly}
        />
        {value ? (
          <S.ToggleContainer></S.ToggleContainer>
        ) : (
          <S.DisabledToggleContainer></S.DisabledToggleContainer>
        )}
        <S.ToggleCircle></S.ToggleCircle>
        <span>{label}</span>
      </S.Toggle>
    </>
  );
};

export default Toggle;
