import { useEffect, useState } from "react";
import * as S from "./SignUp.style";
import jwtDecode from "jwt-decode";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userState } from "../../../atoms/user";
import { SignAuth } from "../../../types/userAuth.type";
import { Button } from "../../../components/shared/Button/Button";
import { joinStudent, joinTeacher } from "../../../apis/auth/user";

export const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [authority, setAutority] = useState("");
  const [request, setRequest] = useState<SignAuth>({
    email: "",
    name: "",
    password: "",
    passwordCheck: "",
    studentNumber: "",
  });

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
    setAutority(user?.authority || "");
    setRequest({
      ...request,
      email: user.accessToken
        ? jwtDecode<SignAuth>(user?.accessToken).email
        : "",
    });
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    if (request.password !== request.passwordCheck)
      alert("비밀번호가 다릅니다");
    setUser({ ...user, name: request.name });
    if (authority === "ROLE_STUDENT") {
      student.mutate({
        admissionYear: parseInt(request.email.substring(0, 4)),
        name: request.name,
        password: request.password,
        studentNumber: request.studentNumber,
      });
    } else {
      teacher.mutate({
        name: request.name,
        password: request.password,
      });
    }
  };

  return (
    <S.SignUp>
      <S.ImgBox>
        <S.Img alt="simblue" src="https://ifh.cc/g/H0wG7w.png" />
        <S.Welcome>환영합니다!</S.Welcome>
      </S.ImgBox>
      <S.SignRight>
        <S.Header>
          <S.Title>
            <span>회원가입</span>
            <S.ShipImg alt="welcome" src="https://ifh.cc/g/VBj8B5.png" />
          </S.Title>
          <S.SubTitle>
            <span>
              {authority === "ROLE_STUDENT" ? "학생" : "선생님"}으로 회원가입
            </span>
          </S.SubTitle>
        </S.Header>
        <S.Form>
          <S.InputBox>
            <S.TextBox
              type="text"
              placeholder="이메일을 입력하세요."
              onChange={handleChange}
              name="emailAddress"
              value={request.email}
              readOnly
            />
            <S.TextBox
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={handleChange}
              name="password"
            />
            <S.TextBox
              type="password"
              placeholder="비밀번호를 재입력 하세요"
              onChange={handleChange}
              name="passwordCheck"
            />
            {authority === "ROLE_STUDENT" ? (
              <>
                <S.Information>
                  <S.TextBox
                    type="text"
                    placeholder="학번을 입력하세요"
                    onChange={handleChange}
                    name="studentNumber"
                  />
                  <S.TextBox
                    type="text"
                    placeholder="이름을 입력하세요"
                    onChange={handleChange}
                    name="name"
                  />
                </S.Information>
              </>
            ) : (
              <S.TextBox
                type="text"
                placeholder="이름을 입력하세요"
                onChange={handleChange}
                name="name"
              />
            )}
          </S.InputBox>
        </S.Form>
        <Button event={submit} disabled={user.authority ? false : true}>
          회원가입
        </Button>
      </S.SignRight>
    </S.SignUp>
  );
};
