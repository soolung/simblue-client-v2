import styled from "styled-components";

export const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5%;
  row-gap: 5px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
`;

export const Content = styled.span`
  font-weight: 400;
  font-size: 20px;
`;

export const SubContent = styled.span`
  font-weight: 300;
  font-size: 12px;
`;

export const SubBox = styled.div`
  float: bottom;
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
  right: -8%;
  bottom: 8%;
  min-width: 20px;
  height: 20px;
`;
