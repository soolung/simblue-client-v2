import React from "react";
import { APPLICATION } from "../../../types/application.type";
import * as S from "./Application.style";

type PropsType = {
  data: APPLICATION;
};

export const Application = ({ data }: PropsType) => {
  return (
    <S.AppBox to={`/application/${data.id}`}>
      <div>
        <S.TopBox>
          <S.Title>{data.title}</S.Title>
          <span>{data.emoji}</span>
        </S.TopBox>
        <S.Desc>{data.description}</S.Desc>
      </div>
      <S.EndDate>
        {data.status === "ALWAYS" ? "- 상시" : `~ ${data.endDate}`}
      </S.EndDate>
    </S.AppBox>
  );
};
