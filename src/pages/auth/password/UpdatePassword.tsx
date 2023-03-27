import React, { useState } from "react";
import { AuthBtn } from "../../../components/shared/common/AuthBtn/AuthBtn";
import { Input } from "../../../components/shared/common/Input/Input";
import { UserFeature } from "../../../features/user";
import * as S from "./UpdatePassword.style";

export const ChangePassword = () => {
  const [oldPW, setOldPW] = useState<string>("");
  const [newPW, setNewPW] = useState<string>("");
  const [newPWCheck, setNewPWCheck] = useState<string>("");
  const { updatePW } = UserFeature();

  const updatePassword = () => {
    if (newPW === "" || oldPW === "" || newPWCheck === "") alert("다 입력 해주세요.");
    else {
      if (newPW !== newPWCheck) alert("재확인 비밀번호가 다릅니다.");
      else if (oldPW === newPW) alert("원래 비밀번호와 같습니다.");
      else updatePW.mutate({ newPW, oldPW });
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
          <Input type="password" event={(e) => setOldPW(e.target.value)} placeholder="현재 비밀번호를 입력하세요." />
          <Input type="password" event={(e) => setNewPW(e.target.value)} placeholder="새로운 비밀번호를 입력하세요." />
          <Input type="password" event={(e) => setNewPWCheck(e.target.value)} placeholder="새로운 비밀번호를 한 번 더 입력하세요." />
        </S.InputBox>
        <S.InputBox>
          <AuthBtn event={updatePassword} value={"변경"} />
        </S.InputBox>
      </S.Form>
    </S.UpdateBox>
  );
};
