import dayjs from "dayjs";
import React, { useState } from "react";
import { RECORD_APPLICATION } from "../../../../types/application.type";
import * as S from "./RecordList.style";

export const RecordList = ({ data }: { data: RECORD_APPLICATION }) => {
  const [deleteBtn, setDeleteBtn] = useState<boolean>(false);

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
        {deleteBtn && <S.DeleteBtn src="/assets/delete.svg" />}
      </S.RightSide>
    </S.Item>
  );
};
