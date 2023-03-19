import React from "react";
import { Link } from "react-router-dom";
import { RECORD_APPLICATION } from "../../../../types/application.type";
import * as S from "./RecordKanban.style";

export const RecordKanban = ({ emoji, title, data }: { emoji: string; title: string; data?: RECORD_APPLICATION[] }) => {
  return (
    <S.Kanban>
      <S.Head>
        {emoji} {title}
      </S.Head>
      {data?.map((d) => (
        <S.Item to={`/application/${d.applicationId}/manage`}>
          <S.ItemHead>
            {d.emoji} {d.title}
          </S.ItemHead>
          <S.ItemBottom>
            <span>
              {title}
              <span>|</span>
              {d.numberOfReplies}개의 신청
            </span>
            <Link to={`/application/${d.applicationId}/update`}>
              <img src="/assets/edit-pencil.svg" />
            </Link>
          </S.ItemBottom>
        </S.Item>
      ))}
    </S.Kanban>
  );
};
