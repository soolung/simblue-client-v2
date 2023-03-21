import React from "react";
import { ApplicationDetailFeature } from "../../../features/application";
import * as S from "../ApplicationDetail.style";

export const ApplicationManage = () => {
  const { data } = ApplicationDetailFeature();

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
