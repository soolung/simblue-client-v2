import { useState } from "react";
import { LOGIN_AUTH } from "../../../types/auth.type";
import * as S from "./Login.style";
import {
  GetGoogleAuthLink,
  LoginFeature,
} from "../../../features/auth/login.feature";

export const Login = () => {
  const [request, setRequest] = useState<LOGIN_AUTH>({
    email: "",
    password: "",
  });
  const { login } = LoginFeature(request);
  const { data } = GetGoogleAuthLink();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <S.Login>
      <S.ImgBox>
        <S.Img src="https://ifh.cc/g/H0wG7w.png" />
        <S.Welcome>환영합니다</S.Welcome>
      </S.ImgBox>

      <S.Form>
        <S.Title>
          <S.LoginSpan>로그인</S.LoginSpan>
          <S.LoginImg src="https://ifh.cc/g/VBj8B5.png" />
        </S.Title>
        <S.SubTitle>학교 계정으로 로그인</S.SubTitle>
        <S.InputBox>
          <S.TextBox
            onChange={handleChange}
            name="email"
            placeholder="이메일을 입력해주세요."
          ></S.TextBox>
          <S.TextBox
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          ></S.TextBox>
        </S.InputBox>
        <S.InputBox>
          <S.LoginBtn onClick={login}>로그인</S.LoginBtn>
          <S.GoogleBtn onClick={() => window.location.replace(data)}>
            <S.GoogleImg src="https://ifh.cc/g/nNDjB0.png" />
            <span>구글 계정으로 로그인</span>
          </S.GoogleBtn>
        </S.InputBox>
        <S.SignUp>
          아직 회원이 아니신가요?
          <S.Span onClick={() => window.location.replace(data)}>
            구글 계정으로 회원가입
          </S.Span>
        </S.SignUp>
      </S.Form>
    </S.Login>
  );
};
