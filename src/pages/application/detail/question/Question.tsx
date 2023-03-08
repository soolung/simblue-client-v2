import React from "react";
import { QUESTION } from "../../../../apis/@types/application";
import * as S from "./Question.style";

export const Question = ({ quest, questIndex }: { quest?: QUESTION; questIndex?: number }) => {
  return (
    <div style={{ marginTop: "20px" }} key={questIndex}>
      <S.QuestTitle>
        {quest?.question} {quest?.isRequired && <span>*</span>}
      </S.QuestTitle>
      <S.Desc>{quest?.description}</S.Desc>
      <div style={{ display: "flex", alignItems: "center", columnGap: "15px" }}>
        {(quest?.type === "RADIO" || quest?.type === "CHECKBOX") &&
          quest?.answerList.map((a, index) => {
            return (
              <S.AnswerBox>
                <input name={`${quest.type + questIndex}`} type={quest.type} id={`answer${index}`} />
                <label htmlFor={`answer${index}`}>{a.answer}</label>
              </S.AnswerBox>
            );
          })}
        {(quest?.type === "TEXT" || quest?.type === "LINK") && <S.Text type={quest?.type} />}
        {quest?.type === "TEXTAREA" && <S.Textarea type={quest?.type} />}
      </div>
    </div>
  );
};
