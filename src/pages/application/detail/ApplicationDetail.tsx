import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { APPLICATION_DETAIL, REQUEST } from "../../../apis/@types/application";
import { getApplicationDetail } from "../../../apis/application";
import { GET_APPLICATION_DETAIL } from "../../../constants/keys";
import { Notice } from "./notice/Notice";
import { Question } from "./question/Question";
import * as S from "./Application.style";
import { DetailLayout } from "../../../components/layout/DetailLayout";

export const ApplicationDetail = () => {
  const { application_id } = useParams();
  const { data } = useQuery<APPLICATION_DETAIL>([GET_APPLICATION_DETAIL], () => getApplicationDetail(Number(application_id)));
  const [request, setRequest] = useState<REQUEST>([]);

  const handleRequest = (a: string[], index: number): void => {
    const i = request.findIndex((r) => r.id === index);
    let coArr = [...request];
    if (i !== -1) {
      coArr[i] = { ...coArr[i], replyDetailList: a };
      setRequest(coArr);
    } else if (!(a.length === 0)) setRequest([...request, { id: index, replyDetailList: a }]);
  };

  const reply = () => {
    if (request.length === data?.questionList.length && !request.find((r) => r.replyDetailList.length < 1 || r.replyDetailList[0] === "")) {
      console.log("다 입력 됨");
    } else console.log("다 입력 안 됨");
  };
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
            return <Question handleRequest={handleRequest} quest={q} questIndex={index} />;
          })}
        </S.Section>
        <S.SubmitBtn onClick={reply}>제출하기</S.SubmitBtn>
      </S.RightSide>
    </DetailLayout>
  );
};
