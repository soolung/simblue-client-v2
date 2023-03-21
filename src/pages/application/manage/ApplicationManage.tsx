import React, { useRef } from "react";
import { ApplicationDetailFeature } from "../../../features/application";
import * as S from "../ApplicationDetail.style";
import { ApplicationResult } from "./result/ApplicationResult";

export const ApplicationManage = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const { data, onDownload } = ApplicationDetailFeature(undefined, tableRef);

  return (
    <S.Section>
      <S.Top>
        <S.Title>
          <span>
            {data?.application?.emoji} {data?.application?.title}
          </span>
          <img onClick={onDownload} src="/assets/export.svg" />
        </S.Title>
        <S.SubTitle>{data?.application?.description}</S.SubTitle>
        <S.SubTitle>{data?.application?.endDate || "- 상시"}</S.SubTitle>
      </S.Top>
      <S.Result ref={tableRef}>
        <S.ResultHead>
          <td>학번</td>
          <td>이름</td>
          {data?.questionList.map((q) => (
            <td>{q.toString()}</td>
          ))}
        </S.ResultHead>
        <ApplicationResult result={data?.resultList} />
      </S.Result>
    </S.Section>
  );
};
