import Answer from "../Answer/Answer";
import Toggle from "../../Toggle/Toggle";
import Text from "../../Text/Text";

interface Proptypes {
  question: {
    type: string;
    answerList: { answer: string }[];
    isRequired: boolean;
    question: string;
  };

  handleQuestionChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;

  index: number;
  deleteQuestion: (target: number) => void;
  addAnswer: (questionIndex: number) => void;
  addNextAnswer: (answerIndex: number, questionIndex: number) => void;
  handleAnswer: (
    answer: string,
    questionIndex: number,
    answerIndex: number
  ) => void;
  deleteAnswer: (answerIndex: number, questionIndex: number) => void;
  toggleIsRequired: (index: number) => void;
  copyQuestion: (questionIndex: number) => void;
}

const Question = ({
  question,
  handleQuestionChange,
  index,
  deleteQuestion,
  addAnswer,
  addNextAnswer,
  handleAnswer,
  deleteAnswer,
  toggleIsRequired,
  copyQuestion,
}: Proptypes) => {
  return (
    <div className="question">
      <div className="question-header">
        <input
          className="question-header-question"
          type="text"
          placeholder="질문"
          value={question?.question}
          name="question"
          onChange={(e) => handleQuestionChange(e, index)}
        />
        <select
          className="question-header-question-type"
          name="type"
          onChange={(e) => handleQuestionChange(e, index)}
          value={question?.type}
        >
          <option value="TEXT">주관식 (단답)</option>
          <option value="TEXTAREA">주관식 (장문)</option>
          <option value="LINK">링크</option>
          <option value="RADIO">객관식 질문</option>
          <option value="CHECKBOX">체크 박스</option>
        </select>
        <Text
          className="question-header-description"
          placeholder="설명"
          name="description"
          onChange={(e) => handleQuestionChange(e, index)}
        />
      </div>
      {/* 답안 */}

      <div className="QuestionDiv-answer">
        <Answer
          type={question?.type}
          answers={question?.answerList}
          addAnswer={() => addAnswer(index)}
          addNextAnswer={addNextAnswer}
          handleAnswer={handleAnswer}
          deleteAnswer={deleteAnswer}
          questionIndex={index}
        />
      </div>
      {/* 설정 */}
      <div className="question-footer">
        <Toggle
          value={question?.isRequired}
          onClick={() => toggleIsRequired(index)}
          label={"필수"}
        />
        <div className="action-question-container">
          <img
            className="action-question"
            alt="copy"
            src="/images/copy.svg"
            onClick={() => copyQuestion(index)}
          />
          <img
            className="action-question"
            alt="delete"
            src="/images/delete.svg"
            onClick={() => deleteQuestion(index)}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
