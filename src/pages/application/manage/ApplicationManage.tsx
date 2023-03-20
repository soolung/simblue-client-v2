import React from "react";
import { APPLICATION_DETAIL } from "../../../types/application.type";
import * as S from "../ApplicationDetail.style";
import { ApplicationResult } from "./result/ApplicationResult";

export const ApplicationManage = ({ data }: { data?: APPLICATION_DETAIL }) => {
  return (
    <S.Section>
      <S.Top>
        <S.Title>
          {data?.application?.emoji} {data?.application?.title}
        </S.Title>
        <S.SubTitle>{data?.application?.description}</S.SubTitle>
        <S.SubTitle>{data?.application?.endDate || "- 상시"}</S.SubTitle>
      </S.Top>
      {/* <ApplicationResult result={data?.resultList} /> */}
    </S.Section>
  );
};
