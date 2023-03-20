import React, { useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { APPLICATION_DETAIL, REQUEST } from "../../../types/application.type";
import { Question } from "./question/Question";
import * as S from "../ApplicationDetail.style";
import { replyApplication } from "../../../apis/application";
import { Button } from "../../../components/shared/Button/Button";
import { useRecoilValue } from "recoil";
import { userState } from "../../../atoms/user";

export const ApplicationDetail = ({ data }: { data?: APPLICATION_DETAIL }) => {
  const { applicationId } = useParams();
  const user = useRecoilValue(userState);
  const [request, setRequest] = useState<REQUEST>([]);
  const { mutate } = useMutation(replyApplication, {
    onSuccess: () => {
      alert("성공!");
      window.location.href = "/";
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const errMessage = err.response.data.message;
      alert(errMessage);
    },
  });

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
      mutate({ applicationId: Number(applicationId), replyList: request });
    } else console.log("다 입력 안 됨");
  };

  return (
    <>
      <S.Section>
        <S.Top>
          <S.Title>
            {data?.emoji} {data?.title}
          </S.Title>
          <S.SubTitle>{data?.description}</S.SubTitle>
          <S.SubTitle>{data?.endDate || "- 상시"}</S.SubTitle>
        </S.Top>
        {data?.questionList.map((q) => {
          return <Question handleRequest={handleRequest} quest={q} />;
        })}
      </S.Section>
      <Button disabled={user.authority ? false : true} event={reply}>
        {user.authority ? "제출하기" : "로그인 후 응답할 수 있어요"}
      </Button>
    </>
  );
};
