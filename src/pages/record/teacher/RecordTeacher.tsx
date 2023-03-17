import React from "react";
import { useQuery } from "react-query";
import { getMyApplications } from "../../../apis/application";
import { RecordKanban } from "../../../components/shared/Record/RecordKanban/RecordKanban";
import { GET_MY_APPLICATIONS } from "../../../constants/keys/application.key";
import { TECHER_RECORDS } from "../../../types/application.type";
import * as S from "./RecordTeacher.style";

export const RecordTeacher = () => {
  const { data } = useQuery<TECHER_RECORDS>([GET_MY_APPLICATIONS], getMyApplications);

  return (
    <S.Records>
      <S.Head>
        <p>기록 보기</p>
        <span>내가 만든 신청~ 너를 위해 구웠지</span>
      </S.Head>
      <S.Applications>
        <RecordKanban emoji="📌" title="상시" data={data?.applicationMap.ALWAYS} />
        <RecordKanban emoji="🌙" title="시작 전" data={data?.applicationMap.NOT_STARTED} />
        <RecordKanban emoji="🌞" title="진행 중" data={data?.applicationMap.IN_PROGRESS} />
        <RecordKanban emoji="🌚" title="완료됨" data={data?.applicationMap.DONE} />
      </S.Applications>
    </S.Records>
  );
};
