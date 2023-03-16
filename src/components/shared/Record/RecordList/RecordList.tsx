import dayjs from "dayjs";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { cancelReply } from "../../../../apis/reply";
import { GET_MY_APPLICATIONS } from "../../../../constants/keys/application.key";
import useModal from "../../../../hooks/useModal";
import { RECORD_APPLICATION } from "../../../../types/application.type";
import { ConfirmModal } from "../../Modal/ConfirmModal/ConfirmModal";
import * as S from "./RecordList.style";

export const RecordList = ({ data }: { data: RECORD_APPLICATION }) => {
  const queryClient = useQueryClient();
  const [deleteBtn, setDeleteBtn] = useState<boolean>(false);
  const { openModal } = useModal();
  const { mutate } = useMutation(cancelReply, {
    onSuccess: () => {
      queryClient.invalidateQueries(GET_MY_APPLICATIONS);
    },
  });

  return (
    <S.Item to={`/reply/${data.replyId}/update`}>
      <S.Head>
        <p>
          {data.emoji} {data.title}
        </p>
        <span>{dayjs(data.repliedAt).format("YYYY년 MM월 DD일")}에 신청함</span>
      </S.Head>
      <S.RightSide onMouseOver={() => setDeleteBtn(true)} onMouseLeave={() => setDeleteBtn(false)}>
        <S.Status status={data.status}>{data.status === "DONE" ? "마감" : "진행중"}</S.Status>
        {deleteBtn && (
          <S.DeleteBtn
            onClick={(e) => {
              e.preventDefault();
              openModal(<ConfirmModal title="신청 취소" description="정말로 신청을 취소하시겠습니까?" onConfirm={() => mutate(data.replyId)} />);
            }}
            src="/assets/delete.svg"
          />
        )}
      </S.RightSide>
    </S.Item>
  );
};
