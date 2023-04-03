import React, { useRef } from "react";
import { ApplicationDetailFeature } from "../../../features/application";
import * as S from "../ApplicationDetail.style";
import { ApplicationResult } from "./result/ApplicationResult";
import { useDownloadExcel } from "react-export-table-to-excel";

export const ApplicationManage = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const { data } = ApplicationDetailFeature(undefined, tableRef);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef?.current,
    filename: data?.application.title ?? "신청 결과",
    sheet: data?.application?.title,
  });

  return (
    <S.Section>
      <S.Top>
        <S.Title>
          <span>
            {data?.application?.emoji} {data?.application?.title}
          </span>
          <img onClick={onDownload} src="/assets/export.svg" alt="공유" />
        </S.Title>
        <S.SubTitle>{data?.application?.description}</S.SubTitle>
        <S.SubTitle>{data?.application?.endDate || "- 상시"}</S.SubTitle>
      </S.Top>
      <S.Result ref={tableRef}>
        <thead>
          <S.ResultHead>
            <td>학번</td>
            <td>이름</td>
            {data?.questionList.map((q) => (
              <td>{q.question}</td>
            ))}
          </S.ResultHead>
        </thead>
        <ApplicationResult result={data?.resultList} />
      </S.Result>
    </S.Section>
  );
};
