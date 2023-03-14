import styled from "styled-components";
import { Colors } from "../../../constants/colors";

export const Login = styled.div`
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
  width: 35%;
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
  row-gap: 4px;
`;

export const TextBox = styled.input`
  border: 0.5px solid ${Colors.mediumGray};
  width: 100%;
  height: 6vh;
  padding: 0 15px;
  &:focus {
    border: 1px solid ${Colors.mediumGray};
    outline: none;
  }

  &::placeholder {
    color: ${Colors.mediumGray};
    font-weight: 300;
  }
`;

export const LoginBtn = styled.button`
  background-color: ${Colors.mainRed};
  height: 45px;
  color: white;
  font-weight: 600;
  border: none;
`;

export const GoogleBtn = styled.button`
  display: flex;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${Colors.mediumGray};
  border-radius: 2px;
  column-gap: 5px;
`;

export const GoogleImg = styled.img`
  width: 6%;
`;

export const SignUp = styled.div`
  text-align: center;
  color: ${Colors.mediumGray};
  font-size: 11px;
`;

export const Span = styled.span`
  word-break: keep-all;
  color: ${Colors.mainRed};
  font-weight: 600;
  cursor: pointer;
`;
