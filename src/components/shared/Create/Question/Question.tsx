import Text from "../../Text/Text";
import Answer from "../Answer/Answer";
import Toggle from "../../Toggle/Toggle";
import * as S from "./Question.style";

interface Proptypes {
  question: {
    type: string;
    question: string;
    answerList: {
      answer: string;
    }[];
    isRequired: boolean;
    description: string;
  };
  handleQuestionChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
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
  display?: string;
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
    <S.Question>
      <S.QuestionHeader>
        <S.QuestionHeaderQuestion
          type="text"
          placeholder="질문"
          value={question?.question}
          name="question"
          onChange={(e) => {
            handleQuestionChange(e, index);
          }}
        />
        <S.QuestionHeaderQuestionType
          name="type"
          onChange={(e) => handleQuestionChange(e, index)}
          value={question?.type}
        >
          <option value="TEXT">주관식 (단답)</option>
          <option value="TEXTAREA">주관식 (장문)</option>
          <option value="LINK">링크</option>
          <option value="RADIO">객관식 질문</option>
          <option value="CHECKBOX">체크 박스</option>
        </S.QuestionHeaderQuestionType>
        <Text
          padding="10px 10px"
          fontSize="14px"
          marginTop="7px"
          placeholder="설명"
          name="description"
          onChange={(e) => handleQuestionChange(e, index)}
        />
      </S.QuestionHeader>

      {/* 답안 */}
      <S.QuestionDivAnswer>
        <Answer
          type={question?.type}
          answers={question?.answerList}
          addAnswer={() => addAnswer(index)}
          addNextAnswer={addNextAnswer}
          handleAnswer={handleAnswer}
          deleteAnswer={deleteAnswer}
          questionIndex={index}
        />
      </S.QuestionDivAnswer>
      {/* 설정 */}

      <S.QuestionFooter>
        <Toggle
          value={question?.isRequired}
          onClick={() => toggleIsRequired(index)}
          label={"필수"}
        />
        <S.ActionQuestionContainer>
          <S.ActionQuestion
            alt="copy"
            src="/assets/copy.svg"
            onClick={() => copyQuestion(index)}
          />
          <S.ActionQuestion
            alt="delete"
            src="/assets/delete.svg"
            onClick={() => deleteQuestion(index)}
          />
        </S.ActionQuestionContainer>
      </S.QuestionFooter>
    </S.Question>
  );
};

export default Question;
