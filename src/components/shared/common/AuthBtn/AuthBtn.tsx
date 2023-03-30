import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "../../../../constants/colors.constant";

export const AuthBtn = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <BtnStyle {...props}>{props.value}</BtnStyle>;
};

const BtnStyle = styled.button`
  background-color: ${Colors.mainRed};
  height: 45px;
  color: white;
  font-weight: 600;
  border: none;
`;
