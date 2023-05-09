import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { getGoogleAuthLink, loginUser } from "../../../apis/auth";
import { LOGIN_AUTH } from "../../../types/auth.type";
import {
  ACCESS_KEY,
  REFRESH_KEY,
  TEACHER,
} from "../../../constants/user/auth.constant";
import { GOOGLE_AUTH_LINK } from "../../../constants/keys/auth.key";
import * as S from "./Login.style";
import { Storage } from "../../../lib/storage";
import { Input } from "../../../components/shared/common/Input/Input";
import { AuthBtn } from "../../../components/shared/common/AuthBtn/AuthBtn";

export const Login = () => {
  const navigate = useNavigate();
  const { data } = useQuery([GOOGLE_AUTH_LINK], getGoogleAuthLink);
  const [request, setRequest] = useState<LOGIN_AUTH>({
    email: "",
    password: "",
  });

  const { mutate } = useMutation(loginUser, {
    onSuccess: (data) => {
      if (TEACHER) {
        alert("쌤청이로 로그인하세요");
      }

      Storage.setItem(ACCESS_KEY, data.accessToken);
      Storage.setItem(REFRESH_KEY, data.refreshToken);

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
          <Input
            onChange={handleChange}
            name="email"
            placeholder="이메일을 입력해주세요."
          />
          <Input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
        </S.InputBox>
        <S.InputBox>
          <AuthBtn onClick={login} value={"로그인"} />
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
