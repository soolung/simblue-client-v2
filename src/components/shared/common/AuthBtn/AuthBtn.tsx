import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "../../../../constants/colors.constant";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  event: () => void;
}

export const AuthBtn = (props: BtnProps) => {
  return (
    <BtnStyle {...props} onClick={props.event}>
      {props.value}
    </BtnStyle>
  );
};

const BtnStyle = styled.button`
  background-color: ${Colors.mainRed};
  height: 45px;
  color: white;
  font-weight: 600;
  border: none;
`;
