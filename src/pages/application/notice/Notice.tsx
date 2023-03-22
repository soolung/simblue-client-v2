import React, { useState } from "react";
import { NoticeFeature } from "../../../features/notice";
import { NOTICE } from "../../../types/application.type";
import { getTimeDiff } from "../../../utils/common/getTimeDiff";
import * as S from "./Notice.style";

export const Notice = ({ notice, location, applicationId }: { notice: NOTICE; location: boolean; applicationId: number }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const timeDiff = getTimeDiff(notice?.createdAt);
  const { togglePin, removeNotice } = NoticeFeature(Number(applicationId));

  return (
    <S.NoticeBox>
      <S.PinBox>{notice?.isPinned && <S.Pin src="/assets/pin.svg" />}</S.PinBox>
      <S.Content>{notice?.notice}</S.Content>
      {isClick && (
        <S.FixationBox>
          <span onClick={() => togglePin.mutate}>{notice?.isPinned ? "고정 해제" : "고정"}</span>
          <span onClick={() => removeNotice.mutate}>삭제</span>
        </S.FixationBox>
      )}
      <S.SubBox>
        <div>
          <S.SubContent>{notice?.author}</S.SubContent>
          <span> ∙ </span>
          <S.SubContent>{timeDiff}</S.SubContent>
        </div>
        {location && <S.Option onClick={() => setIsClick((prev) => !prev)} src="/assets/options.svg" />}
      </S.SubBox>
    </S.NoticeBox>
  );
};
