import React from "react";
import { useQuery } from "react-query";
import { getMyApplications } from "../../../apis/application";
import { RecordList } from "../../../components/shared/Record/RecordList/RecordList";
import { GET_MY_APPLICATIONS } from "../../../constants/keys/application.key";
import { STUDENT_RECORDS } from "../../../types/application.type";
import * as S from "./RecordStudent.style";

export const RecordStudent = () => {
  const { data } = useQuery<STUDENT_RECORDS>([GET_MY_APPLICATIONS], getMyApplications);

  return (
    <S.Records>
      <S.Head>
        <p>기록 보기</p>
        <span>내가 만든 신청~ 너를 위해 구웠지</span>
      </S.Head>
      <S.List>
        {data?.applicationMap.applicationList.map((a) => (
          <RecordList data={a} />
        ))}
      </S.List>
    </S.Records>
  );
};
