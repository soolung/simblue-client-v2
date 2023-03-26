import React, { useEffect, useRef, useState } from "react";
import Text from "../../Text/Text";
import Radio from "../../Radio/Radio";
import Check from "../../Check/Check";
import * as S from "./Answer.style";

interface Proptypes {
  type: any;
  answers: any;
  addAnswer: any;
  addNextAnswer: any;
  handleAnswer: any;
  deleteAnswer: any;
  questionIndex: any;
}

const Answer = ({
  type,
  answers,
  addAnswer,
  addNextAnswer,
  handleAnswer,
  deleteAnswer,
  questionIndex,
}: Proptypes) => {
  const answerRefs = useRef<any[]>([]);
  const [focusIndex, setFocusIndex] = useState(0);
  useEffect(() => {
    if ((answerRefs && type === "RADIO") || type === "CHECKBOX") {
      answerRefs.current[focusIndex]?.focus();
    }
  }, [focusIndex]);

  if (type === "RADIO" || type === "CHECKBOX") {
    return (
      <div>
        <S.AnswerBox>
          {answers?.map((a: any, index: any) => (
            <S.AnswerBoxAnswer key={index}>
              {type === "RADIO" ? (
                <S.AnswerRadio isChecked={false} readOnly />
              ) : (
                <S.AnswerCheck isChecked={false} readOnly />
              )}
              <S.AnswerText
                ref={(el) => (answerRefs.current[index] = el)}
                placeholder="옵션"
                value={a.answer}
                onChange={(e) =>
                  handleAnswer(e.target.value, questionIndex, index)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addNextAnswer(index, questionIndex);
                    setFocusIndex(index + 1);
                  } else if (
                    e.key === "Backspace" &&
                    a.answer.length === 0 &&
                    index > 0
                  ) {
                    deleteAnswer(index, questionIndex);
                    setFocusIndex(index - 1);
                  } else if (e.key === "ArrowDown" && index < answers.length) {
                    e.preventDefault();
                    setFocusIndex(index + 1);
                  } else if (e.key === "ArrowUp" && index > 0) {
                    e.preventDefault();
                    setFocusIndex(index - 1);
                  }
                }}
              />
              <S.Cancel
                src="/images/cancel.svg"
                alt="cancel"
                onClick={() => deleteAnswer(index, questionIndex)}
              />
            </S.AnswerBoxAnswer>
          ))}
        </S.AnswerBox>
        <S.AddAnswer onClick={addAnswer}>+ 옵션 추가</S.AddAnswer>
      </div>
    );
  }

  const placeholder =
    type === "TEXT"
      ? "주관식 답안(단답)"
      : type === "TEXTAREA"
      ? "주관식 답안(장문)"
      : "링크";

  return <S.QuestionText placeholder={placeholder} readOnly />;
};
export default Answer;
