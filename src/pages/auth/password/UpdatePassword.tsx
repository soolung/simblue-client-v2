import React, { ChangeEvent, useState } from "react";
import { AuthBtn } from "../../../components/shared/common/AuthBtn/AuthBtn";
import { Input } from "../../../components/shared/common/Input/Input";
import { UserFeature } from "../../../features/user";
import * as S from "./UpdatePassword.style";

export const UpdatePassword = () => {
  const [passwordData, setPasswordData] = useState({ oldPW: "", newPW: "", newPWCheck: "" });
  const { updatePW } = UserFeature();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const updatePassword = () => {
    if (Object.values(passwordData).includes("")) alert("다 입력 해주세요."); // 심청이 alert 생기면 넣기
    else {
      if (passwordData.newPW !== passwordData.newPWCheck) alert("재확인 비밀번호가 다릅니다.");
      else if (passwordData.oldPW === passwordData.newPW) alert("원래 비밀번호와 같습니다.");
      else updatePW.mutate({ newPW: passwordData.newPW, oldPW: passwordData.oldPW });
    }
  };

  return (
    <S.UpdateBox>
      <S.ImgBox>
        <S.Img src="https://ifh.cc/g/H0wG7w.png" />
      </S.ImgBox>
      <S.Form>
        <S.Title>
          <S.LoginSpan>비밀번호 변경</S.LoginSpan>
          <S.LoginImg src="https://ifh.cc/g/VBj8B5.png" />
        </S.Title>
        <S.SubTitle>저런... 까먹으셨군요... ㅜ</S.SubTitle>
        <S.InputBox>
          <Input type="password" name="oldPW" event={handleChange} placeholder="현재 비밀번호를 입력하세요." />
          <Input type="password" name="newPW" event={handleChange} placeholder="새로운 비밀번호를 입력하세요." />
          <Input type="password" name="newPWCheck" event={handleChange} placeholder="새로운 비밀번호를 한 번 더 입력하세요." />
        </S.InputBox>
        <S.InputBox>
          <AuthBtn event={updatePassword} value={"변경"} />
        </S.InputBox>
      </S.Form>
    </S.UpdateBox>
  );
};
