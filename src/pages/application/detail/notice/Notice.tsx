import React from "react";
import { NOTICE } from "../../../../apis/@types/application";
import { getTimeDiff } from "../../../../utils/common/getTimeDiff";
import * as S from "./Notice.style";

export const Notice = ({ notice }: { notice?: NOTICE }) => {
  const timeDiff = getTimeDiff(notice?.createdAt);
  return (
    <S.NoticeBox>
      <S.PinBox>{notice?.isPinned && <S.Pin src="/assets/pin.svg" />}</S.PinBox>
      <S.Content>{notice?.notice}</S.Content>
      <S.SubBox>
        <S.SubContent>{notice?.author}</S.SubContent>
        <span> ∙ </span>
        <S.SubContent>{timeDiff}</S.SubContent>
      </S.SubBox>
    </S.NoticeBox>
  );
};
