import React, { useState, useEffect } from "react";
import * as S from "./SignUp.style";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userState } from "../../../atoms/user";
import { useMutation } from "@tanstack/react-query";
import { joinStudent, joinTeacher } from "../../../apis/user";
import { StudentInfo } from "../../../apis/user";
import jwtDecode from "jwt-decode";

export const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [authority, setAuthority] = useState("");
  const [request, setRequest] = useState({});

  const student = useMutation(joinStudent, {
    onSuccess: () => {
      navigate("/");
    },
  });

  const teacher = useMutation(joinTeacher, {
    onSuccess: () => {
      navigate("/");
    },
  });

  useEffect(() => {
    setAuthority(user?.authority || "");
    setRequest({
      ...request,
      email: user.accessToken
        ? jwtDecode<StudentInfo>(user.accessToken).email
        : null,
    });
  }, [user]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {
    console.log(request.password);
  };
  return (
    <S.Sign>
      <S.ImgBox>
        <S.People src="https://ifh.cc/g/H0wG7w.png" />
        <S.Welcome>환영합니다.</S.Welcome>
      </S.ImgBox>
      <S.Right>
        <S.Header>
          <S.Title>
            <span>회원가입</span>
            <S.Ship src="https://ifh.cc/g/VBj8B5.png" />
          </S.Title>
          <S.SubTitle>
            <span>으로 회원가입</span>
          </S.SubTitle>
        </S.Header>
        <S.Form>
          <S.InputBox>
            <S.TextBox
              type="text"
              placeholder="이메일을 입력하세요."
              onChange={handleChange}
              name="emailAddress"
              readOnly
            />
            <S.TextBox
              type="password"
              placeholder="비밀번호를 입력하세요."
              onChange={handleChange}
              name="password"
            />
            <S.TextBox
              type="password"
              placeholder="비밀번호를 재입력 하세요."
              onChange={handleChange}
              name="passwordCheck"
            />
            {authority === "ROLE_STUDENT" ? (
              <>
                <S.Info>
                  <S.TextBox
                    type="text"
                    placeholder="학번을 입력하세요."
                    onChange={handleChange}
                    name="studentNumber"
                  />
                  <S.TextBox
                    type="text"
                    placeholder="이름을 입력하세요."
                    onChange={handleChange}
                    name="name"
                  />
                </S.Info>
              </>
            ) : (
              <S.TextBox
                type="text"
                placeholder="이름을 입력하세요."
                onChange={handleChange}
                name="name"
              />
            )}
          </S.InputBox>
        </S.Form>
        <S.Button onClick={submit}>제출</S.Button>
      </S.Right>
    </S.Sign>
  );
};
