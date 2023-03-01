import styled from "styled-components";

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
  color: grey;
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

//나중에 TextBox스타일든는 따로 common으로 뷴류해서 할 것
export const TextBox = styled.input`
  border: 0.5px solid grey;
  width: 100%;
  height: 6vh;
  padding: 0 15px;
  &:focus {
    border: 1px solid $medium-grey;
    outline: none;
  }

  &::placeholder {
    color: $medium-grey;
    font-weight: 300;
  }
`;

export const LoginBtn = styled.button`
  background-color: red;
  height: 45px;
  color: white;
  font-weight: 600;
`;

export const GoogleBtn = styled.button`
  display: flex;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #c2c2c2;
  border-radius: 2px;
  column-gap: 5px;
`;

export const GoogleImg = styled.img`
  width: 6%;
`;

export const SignUp = styled.div`
  text-align: center;
  color: grey;
  font-size: 11px;
`;

export const Span = styled.span`
  word-break: keep-all;
  color: red;
  font-weight: 600;
  cursor: pointer;
`;
