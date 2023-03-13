import React from "react";
import { APPLICATION } from "../../../apis/@types/application";
import * as S from "./Application.style";

type PropsType = {
  key: number;
  data: APPLICATION;
};

export const Application = ({ key, data }: PropsType) => {
  return (
    <S.AppBox to={`application/${key}`}>
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
