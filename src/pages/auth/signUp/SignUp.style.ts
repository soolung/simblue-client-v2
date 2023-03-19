import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const SignUp = styled.div`
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
  padding: 0 40px;
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

export const SignRight = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  @media screen and (max-width: 965px) {
    width: 50%;
  }
  @media screen and (max-width: 680px) {
    width: 75%;
  }
`;

export const Header = styled.div`
  display: inline-block;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 25px;
`;

export const ShipImg = styled.img`
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

export const Form = styled.div`
  width: 100%;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
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

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
`;
