import React, { useEffect, useState } from "react";
import { QUESTION } from "../../../../types/application.type";
import * as S from "./Question.style";

type Props = {
  quest: QUESTION;
  handleRequest(a: string[], index?: number): void;
};

export const Question = ({ quest, handleRequest }: Props) => {
  const questIndex = quest?.id;
  const [reply, setReply] = useState<string[]>([]);
  const [check, setCheck] = useState<string[]>([]);

  const handleAnswer = (
    type: string,
    value: string,
    checked: boolean
  ): void => {
    if (type === "checkbox") {
      if (checked) setCheck([...check, value]);
      else if (!checked) setCheck(check.filter((el) => el !== value));
    } else if (type === "radio") {
      setReply([value]);
    }
  };

  useEffect(() => {
    handleRequest(reply, questIndex);
  }, [reply]);

  useEffect(() => {
    handleRequest(check, questIndex);
  }, [check]);

  return (
    <div style={{ marginTop: "20px" }} key={questIndex}>
      <S.QuestTitle>
        {quest?.question} {quest?.isRequired && <span>*</span>}
      </S.QuestTitle>
      <S.Desc>{quest?.description}</S.Desc>
      <S.Questions>
        {(quest?.type === "RADIO" || quest?.type === "CHECKBOX") &&
          quest?.answerList.map((a, index) => {
            return (
              <S.AnswerBox>
                <input
                  onChange={(e) =>
                    handleAnswer(
                      e.target.type,
                      e.target.value,
                      e.target.checked
                    )
                  }
                  value={a.answer}
                  name={`${quest.type + questIndex}`}
                  type={quest.type}
                  id={`answer${index}`}
                />
                <label htmlFor={`answer${index}`}>{a.answer}</label>
              </S.AnswerBox>
            );
          })}
        {(quest?.type === "TEXT" || quest?.type === "LINK") && (
          <S.Text
            onChange={(e) => setReply([e.target.value])}
            type={quest?.type}
          />
        )}
        {quest?.type === "TEXTAREA" && (
          <S.Textarea
            onChange={(e) => setReply([e.target.value])}
            type={quest?.type}
          />
        )}
      </S.Questions>
    </div>
  );
};
