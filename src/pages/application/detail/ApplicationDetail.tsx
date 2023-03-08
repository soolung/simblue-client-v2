import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { APPLICATION_DETAIL } from "../../../apis/@types/application";
import { getApplicationDetail } from "../../../apis/application";
import { GET_APPLICATION_DETAIL } from "../../../constants/keys";
import { Notice } from "./notice/Notice";
import { Question } from "./question/Question";
import * as S from "./Application.style";
import { DetailLayout } from "../../../components/layout/DetailLayout";

export const ApplicationDetail = () => {
  const { application_id } = useParams();
  const { data } = useQuery<APPLICATION_DETAIL>([GET_APPLICATION_DETAIL], () => getApplicationDetail(Number(application_id)));

  return (
    <DetailLayout>
      <S.Notices>
        {data?.noticeList.map((n) => {
          return <Notice notice={n} />;
        })}
      </S.Notices>
      <S.RightSide>
        <S.Section>
          <S.Top>
            <S.Title>
              {data?.emoji} {data?.title}
            </S.Title>
            <S.SubTitle>{data?.description}</S.SubTitle>
            <S.SubTitle>{data?.endDate || "- 상시"}</S.SubTitle>
          </S.Top>
          {data?.questionList.map((q, index) => {
            return <Question quest={q} questIndex={index} />;
          })}
        </S.Section>
        <S.SubmitBtn>제출하기</S.SubmitBtn>
      </S.RightSide>
    </DetailLayout>
  );
};
