import * as S from "./Form.style";
import Text from "../../components/shared/Text/Text";
import TextBox from "../../components/shared/TextBox/TextBox";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import React, { useState } from "react";
import { now } from "../../utils/common/getTimeDiff";
import DateBox from "../../components/shared/Date/DateBox";
import Toggle from "../../components/shared/Toggle/Toggle";
import Check from "../../components/shared/Check/Check";
import Answer from "../../components/shared/Create/Answer/Answer";

interface Question {
  type: "TEXT" | "CHOICE";
  question: string;
  answerList: { answer: string }[];
  isRequired: boolean;
  description: string;
}

interface AnswerProps {
  type: "TEXT" | "CHOICE";
  answers: { answer: string }[];
  addAnswer: () => void;
  addNextAnswer: (answerIndex: number, questionIndex: number) => void;
  handleAnswer: (
    answer: string,
    questionIndex: number,
    answerIndex: number
  ) => void;
  deleteAnswer: (target: number, questionIndex: number) => void;
  questionIndex: number;
}

type Request = {
  emoji: string;
  isAlways: boolean;
  title: string;
  description: string;
  allowsDuplication: boolean;
  allowsUpdatingReply: boolean;
  startDate: String;
  endDate: String;
};

export const Form = ({ mode }: any) => {
  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState(false);

  const [request, setRequest] = useState<Request>({
    emoji: "😎",
    isAlways: false,
    title: "",
    description: "",
    allowsDuplication: false,
    allowsUpdatingReply: false,
    startDate: now(),
    endDate: now(),
  });

  const [questionList, setQuestionList] = useState<Question[]>([
    {
      type: "TEXT",
      question: "",
      answerList: [{ answer: "" }],
      isRequired: true,
      description: "",
    },
  ]);

  const emojiChange = (e: { emoji: string }) => {
    setRequest({
      ...request,
      emoji: e.emoji,
    });

    setEmojiPickerIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };

  const addQuestion = () => {
    setQuestionList([
      ...questionList,
      {
        type: "CHOICE",
        question: "",
        answerList: [{ answer: "" }],
        isRequired: true,
        description: "",
      },
    ]);
  };

  const addAnswer = (index: number) => {
    setQuestionList((prev) => {
      const newQuestionList = [...prev];
      newQuestionList[index].answerList.push({ answer: "" });
      return newQuestionList;
    });
  };

  const addNextAnswer = (answerIndex: number, index: number) => {
    setQuestionList((prev) => {
      const newQuestionList = [...prev];
      const newAnswerList = newQuestionList[index].answerList;
      if (newAnswerList.length - 1 === answerIndex) {
        newAnswerList.push({ answer: "" });
      } else {
        newAnswerList.splice(answerIndex + 1, 0, { answer: "" });
      }
      newQuestionList[index].answerList = newAnswerList;
      return newQuestionList;
    });
  };

  const handleAnswer = (
    a: string,
    questionIndex: number,
    answerIndex: number
  ) => {
    setQuestionList((prev) => {
      const newQuestionList = [...prev];
      newQuestionList[questionIndex].answerList[answerIndex].answer = a;
      return newQuestionList;
    });
  };

  const deleteAnswer = (target: number, questionIndex: number) => {
    // 자꾸 에러나는데 왜나는지 모르겠어요 ㅠㅠ
    // setQuestionList(
    //   [...questionList],
    //   (questionList[questionIndex].answerList = questionList[
    //     questionIndex
    //   ].answerList.filter((a, index) => target !== index))
    // );
  };

  return (
    <>
      <DateBox
        initialDate={request?.endDate ?? now()}
        isAlways={request?.isAlways}
        handleDate={(d) => setRequest({ ...request, endDate: d })}
      />
      <Text
        placeholder="설명"
        name="description"
        onChange={handleChange}
        value={request?.description}
      />
      <Check
        label="상시"
        isChecked={request?.isAlways}
        onChange={() =>
          setRequest({ ...request, isAlways: !request?.isAlways })
        }
      />
      <Toggle
        value={request.allowsDuplication}
        onClick={() => {
          setRequest({
            ...request,
            allowsDuplication: !request.allowsDuplication,
          });
        }}
      />
      {questionList.map((question, index) => (
        <Answer
          type={question?.type}
          answers={question?.answerList}
          addAnswer={() => addAnswer(index)}
          addNextAnswer={addNextAnswer}
          handleAnswer={handleAnswer}
          deleteAnswer={deleteAnswer}
          questionIndex={index}
        />
      ))}
      <button onClick={addQuestion}>Add question</button>
    </>
  );
};
