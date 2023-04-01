import styled from "styled-components";
import { Colors } from "../../../../../constants/colors.constant";

export const field = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
`;

export const name = styled.dt`
  display: inline-block;
  width: 50%;
  color: ${Colors.black};
  font-size: 18px;
  font-weight: 500;
  word-break: keep-all;
`;

export const setting = styled.dd`
  display: inline-flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 11px 25px;
  width: 50%;
`;
