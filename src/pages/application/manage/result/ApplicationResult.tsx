import React from "react";
import { RESULT } from "../../../../types/application.type";
import * as S from "./ApplicationResult.style";

export const ApplicationResult = ({ result }: { result?: RESULT[] }) => {
  return (
    <S.ResultBody>
      {result?.map((r) => (
        <tr>
          <td>{r.studentNumber}</td>
          <td>{r.name}</td>
          {r.replyList.map((rp) => (
            <td>{rp.reply}</td>
          ))}
        </tr>
      ))}
    </S.ResultBody>
  );
};
