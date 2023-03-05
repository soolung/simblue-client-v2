import React from "react";
import styled from "styled-components";

type Props = { children: React.ReactNode; bgColor?: string };

export const ApplicationLayout = ({ children, bgColor }: Props) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

const LayoutStyle = styled.div`
  display: flex;
  width: 100%;
  gap: 2%;
  row-gap: 1.3vh;
  flex-direction: row;
  margin-top: 3%;
  flex-wrap: wrap;
`;
