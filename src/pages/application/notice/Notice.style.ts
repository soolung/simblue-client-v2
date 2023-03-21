import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5%;
  row-gap: 5px;
  background-color: white;
  border: 1px solid ${Colors.gray};
  border-radius: 15px;
`;

export const Content = styled.span`
  font-weight: 400;
  font-size: 20px;
  word-break: keep-all;
  white-space: pre-line;
`;

export const SubContent = styled.span`
  font-weight: 300;
  font-size: 12px;
`;

export const SubBox = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-self: flex-end;
  align-items: center;
  font-weight: 300;
  font-size: 1vw;
  text-align: right;
  white-space: nowrap;
`;

export const PinBox = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const Pin = styled.img`
  position: absolute;
  right: 0;
  min-width: 20px;
  height: 20px;
`;

export const Option = styled.img`
  height: 12px;
`;

export const FixationBox = styled.div`
  display: flex;
  position: absolute;
  padding: 10px;
  right: 60px;
  flex-direction: column;
  background-color: white;
  border: 1px solid ${Colors.gray};
  border-radius: 10px;

  span {
    cursor: pointer;
    font-size: 14px;
  }
`;
