import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const UpdateBox = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
`;

export const ImgBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 70%;
`;
export const Welcome = styled.p`
  font-weight: 600;
  font-size: 1.8em;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 4%;
  width: 45%;
  @media screen and (max-width: 965px) {
    width: 50%;
  }
  @media screen and (max-width: 680px) {
    width: 75%;
  }
`;

export const Title = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 25px;
`;

export const LoginSpan = styled.span`
  color: black;
`;

export const LoginImg = styled.img`
  width: 7%;
  object-fit: contain;
  margin-left: 4px;
`;

export const SubTitle = styled.div`
  color: ${Colors.darkGray};
  font-size: 14px;
  font-weight: 400;
  padding-top: 5px;
  word-break: keep-all;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 4px;
`;
