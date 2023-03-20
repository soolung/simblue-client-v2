import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteNotice, toggleNoticePin } from "../../../apis/notice";
import { GET_APPLICATION_RESULT } from "../../../constants/keys/application.key";
import { NOTICE } from "../../../types/application.type";
import { getTimeDiff } from "../../../utils/common/getTimeDiff";
import * as S from "./Notice.style";

export const Notice = ({ notice, location, applicationId }: { notice: NOTICE; location: boolean; applicationId: number }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const timeDiff = getTimeDiff(notice?.createdAt);

  const togglePin = useMutation(toggleNoticePin, {
    onSuccess: () => {
      queryClient.invalidateQueries([GET_APPLICATION_RESULT]);
    },
  });

  const removeNotice = useMutation(deleteNotice, {
    onSuccess: () => {
      queryClient.invalidateQueries([GET_APPLICATION_RESULT]);
    },
  });

  return (
    <S.NoticeBox>
      <S.PinBox>{notice?.isPinned && <S.Pin src="/assets/pin.svg" />}</S.PinBox>
      <S.Content>{notice?.notice}</S.Content>
      {isClick && (
        <S.FixationBox>
          <span onClick={() => togglePin.mutate(applicationId)}>{notice?.isPinned ? "고정 해제" : "고정"}</span>
          <span onClick={() => removeNotice.mutate(applicationId)}>삭제</span>
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
