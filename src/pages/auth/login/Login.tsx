import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getGoogleAuthLink, loginUser } from "../../../apis/auth";
import { LoginAuth } from "../../../types/LoginAuth.type";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../atoms/user";
import * as S from "./Login.style";

export const Login = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);
  const { data } = useQuery(["getGoogleAuthLink"], getGoogleAuthLink);
  const [request, setRequest] = useState<LoginAuth>({
    email: "",
    password: "",
  });

  const { mutate } = useMutation(loginUser, {
    onSuccess: data => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("authority", data.authority);
      localStorage.setItem("name", data.name);
      setUser({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        authority: data.authority,
        name: data.name,
      });

      if (!data?.login) {
        navigate("/signup");
      } else {
        navigate("/");
      }
    },
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };
  console.log(request);

  const login = () => {
    if (!request.email.endsWith("@bssm.hs.kr")) {
      request.email += "@bssm.hs.kr";
    }
    mutate({
      email: request.email,
      password: request.password,
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
