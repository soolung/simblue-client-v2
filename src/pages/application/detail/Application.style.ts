import styled from "styled-components";
import { Colors } from "../../../constants/colors";

export const Notices = styled.aside`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: ${Colors.lightGray};
  width: 24%;
  height: calc(var(--vh, 1vh) * 100);
  padding: 2%;
  gap: 20px;
`;
export const RightSide = styled.div`
  display: flex;
  margin-left: 24%;
  width: 70%;
  min-height: 75vh;
  padding: 3% 5%;
  justify-content: space-between;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 18px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 30px;
`;

export const SubTitle = styled.span`
  font-weight: 300;
  font-size: 18px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 1%;
  align-self: flex-end;
  margin-top: 100px;
  background-color: ${Colors.mainRed};
  border-radius: 8px;
  color: white;
  border: none;
  font-weight: 700;
  font-size: 18px;
`;
