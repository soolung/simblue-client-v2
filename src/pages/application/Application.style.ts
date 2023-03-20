import styled from "styled-components";
import { Colors } from "../../constants/colors.constant";

export const Notices = styled.aside`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: ${Colors.lightGray};
  width: 24%;
  height: 93vh;
  padding: 2%;
  gap: 20px;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  p {
    margin-top: 32vh;
    font-size: 14px;
    color: ${Colors.mediumGray};
    text-align: center;
  }
`;

export const Notice = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const RightSide = styled.div`
  display: flex;
  margin-left: 24%;
  width: 70%;
  min-height: 75vh;
  padding: 3% 5%;
  justify-content: space-between;
  flex-direction: column;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;

export const Arrow = styled.img`
  width: 25px;
  align-self: flex-end;
`;

export const OpenArrow = styled.img`
  width: 25px;
  transform: rotate(180deg);
`;

export const ReOpen = styled.div`
  position: absolute;
  left: 0;
  padding: 20px 20px;
  background-color: ${Colors.lightGray};
  border-radius: 0 15px 15px 0;

  @media screen and (max-width: 500px) {
    padding: 10px 10px;
  }
`;
