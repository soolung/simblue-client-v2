import React, { useEffect, useRef, useState } from "react";
import Text from "../../Text/Text";
import Radio from "../../Radio/Radio";
import Check from "../../Check/Check";

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
      <div className="answer">
        <div className="answer-box">
          {answers?.map((a: any, index: any) => (
            <div className="answer-box-answer" key={index}>
              {type === "RADIO" ? (
                <Radio isChecked={false} readOnly />
              ) : (
                <Check isChecked={false} readOnly />
              )}
              <Text
                ref={(el) => (answerRefs.current[index] = el)}
                placeholder="옵션"
                className="answer-text"
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
              <img
                src="/images/cancel.svg"
                className="cancel"
                alt="cancel"
                onClick={() => deleteAnswer(index, questionIndex)}
              />
            </div>
          ))}
        </div>
        <button className="add-answer" onClick={addAnswer}>
          + 옵션 추가
        </button>
      </div>
    );
  }

  const placeholder =
    type === "TEXT"
      ? "주관식 답안(단답)"
      : type === "TEXTAREA"
      ? "주관식 답안(장문)"
      : "링크";

  return <Text className="question-text" placeholder={placeholder} readOnly />;
};
export default Answer;
