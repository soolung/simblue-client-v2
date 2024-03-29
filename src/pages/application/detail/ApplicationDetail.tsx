import React, { useState } from "react";
import { REQUEST } from "../../../types/application.type";
import { Question } from "./question/Question";
import * as S from "../ApplicationDetail.style";
import { Button } from "../../../components/shared/common/Button/Button";
import { ApplicationDetailFeature } from "../../../features/application";
import { useUser } from "../../../hooks/useUser";

export const ApplicationDetail = () => {
  const { user } = useUser();
  const [request, setRequest] = useState<REQUEST>([]);
  const { reply, data } = ApplicationDetailFeature(request);

  const handleRequest = (a: string[], index: number): void => {
    const i = request.findIndex((r) => r.id === index);
    let coArr = [...request];
    if (i !== -1) {
      coArr[i] = { ...coArr[i], replyDetailList: a };
      setRequest(coArr);
    } else if (!(a.length === 0)) setRequest([...request, { id: index, replyDetailList: a }]);
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
