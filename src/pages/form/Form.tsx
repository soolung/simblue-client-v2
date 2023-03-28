import * as S from "./Form.style";
import Text from "../../components/shared/Text/Text";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import React, { useState } from "react";
import { now } from "../../utils/common/getTimeDiff";
import DateBox from "../../components/shared/Date/DateBox";
import Check from "../../components/shared/Check/Check";
import Question from "../../components/shared/Create/Question/Question";
import { Button } from "../../components/shared/Button/Button";
import { useUser } from "../../hooks/useUser";
import {
  getApplicationForm,
  createApplicationForm,
  updateApplicationForm,
} from "../../apis/application";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { Colors } from "../../constants/colors.constant";

interface Question {
  type: string;
  question: string;
  answerList: { answer: string }[];
  isRequired: boolean;
  description: string;
}

interface Request {
  emoji: string;
  isAlways: boolean;
  title: string;
  description: string;
  allowsDuplication: boolean;
  allowsUpdatingReply: boolean;
  startDate: String;
  endDate: String;
  questionList?: Question[];
  ownerList?: number[];
}

export const Form = ({ mode }: any) => {
  const { id } = useParams();
  const parsedId = parseInt(id as string);

  const navigate = useNavigate();
  const user = useUser();
  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState(false);
  const [advancedSettingModalIsOpen, setAdvancedSettingModalOpen] =
    useState(false);
  const create = useMutation(createApplicationForm, {
    onSuccess: () => {
      navigate("/");
    },
  });

  const update = useMutation(updateApplicationForm, {
    onSuccess: (): void => {
      alert("성공!");
      navigate("/");
    },
    onError: (err: AxiosError): void => {
      console.log(err);
    },
  });

  const form = useQuery(
    "queryApplicationForm",
    () => getApplicationForm(parsedId),
    {
      enabled: mode === "update",
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setRequest({ ...data });
        setQuestionList([...data.questionList]);
        setOwnerIdSet(
          new Set<number>([
            ...data.ownerList
              .filter((d: any) => d != null)
              .map((d: any) => d.teacherId),
            user.user.roleId,
          ])
        );
        setOwnerIdSet(
          new Set([
            ...data.ownerList.map((d: any) => d.teacherId),
            user.user.roleId,
          ])
        );
      },
    }
  );

  const button = () => {
    if (mode === "create") {
      return {
        text: "만들기",
        disabled: user?.user.authority !== "ROLE_TEACHER",
      };
    } else if (mode === "update") {
      return {
        text: form.data?.canUpdate ? "수정하기" : "수정할 수 없습니다",
        disabled:
          user.user.authority !== "ROLE_TEACHER" || form.data?.canUpdate,
      };
    } else {
      return {
        text: "",
        disabled: false,
      };
    }
  };

  const onClick = () => {
    if (mode === "create") {
      create.mutate({
        applicationId: parsedId,
        replyList: [
          {
            id: parsedId,
            replyDetailList: {
              ...request,
              questionList: [...questionList],
              ownerList: Array.from(ownerList),
            },
          },
        ],
      });
    } else if (mode === "update" && form.data?.canUpdate) {
      update.mutate({
        id: parsedId,
        request: {
          applicationId: parsedId,
          replyList: [
            {
              id: parsedId,
              replyDetailList: {
                ...request,
                questionList: [...questionList],
                ownerList: Array.from(ownerList),
              },
            },
          ],
        },
      });
    }
  };

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

  const handleQuestionChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    setQuestionList((prevQuestionList) => {
      const newQuestionList = [...prevQuestionList];
      newQuestionList[index].answerList[index].answer = e.target.value;
      return newQuestionList;
    });
  };

  const toggleIsRequired = (index: number): void => {
    setQuestionList((prevQuestionList) => {
      const newQuestionList = [...prevQuestionList];
      newQuestionList[index].isRequired = !newQuestionList[index].isRequired;
      return newQuestionList;
    });
  };

  const deleteQuestion = (target: number): void => {
    setQuestionList((prevQuestionList) =>
      prevQuestionList.filter((q, index) => target !== index)
    );
  };

  const copyQuestion = (index: number): void => {
    const newQuestionList: Question[] = [...questionList];
    newQuestionList.splice(
      index + 1,
      0,
      JSON.parse(JSON.stringify(questionList[index]))
    );
    setQuestionList(newQuestionList);
  };

  const [ownerList, setOwnerList] = useState([]);
  const [ownerIdSet, setOwnerIdSet] = useState<Set<number>>(
    new Set([user.user.roleId])
  );

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
    setQuestionList((prev) => {
      const questionList = [...prev];
      questionList[questionIndex] = {
        ...questionList[questionIndex],
        answerList: questionList[questionIndex].answerList.filter(
          (a, index) => target !== index
        ),
      };
      return questionList;
    });
  };

  return (
    <>
      <S.FormSection>
        <S.FormHeader>
          <S.FormHeaderTop>
            <S.FormHeaderLeft>
              <S.FormHeaderEmoji>
                <S.FormHeaderEmojiInput
                  type="text"
                  name="emoji"
                  value={request?.emoji}
                  onClick={() => setEmojiPickerIsOpen(true)}
                  readOnly={true}
                />
                {emojiPickerIsOpen && (
                  <EmojiPicker
                    onEmojiClick={emojiChange}
                    emojiStyle={EmojiStyle.NATIVE}
                    width="30vw"
                  />
                )}
              </S.FormHeaderEmoji>
              <Text
                placeholder="제목"
                name="title"
                value={request?.title}
                onChange={handleChange}
                display="inline-block"
                width="78%"
                height="100%"
                fontSize="40px"
                fontWeight="bold"
                marginLeft="10px"
              />
            </S.FormHeaderLeft>

            <S.FormHeaderRight>
              <S.FormHeaderDate>
                <S.FormHeaderDateTop>
                  <span>기간</span>
                  <DateBox
                    initialDate={request?.startDate ?? now()}
                    isAlways={request?.isAlways}
                    handleDate={(d: string) =>
                      setRequest({ ...request, startDate: d })
                    }
                  />
                  <Check
                    style={{ border: "2px solid" + Colors.mediumGray }}
                    marginLeft="10px"
                    display="inline-flex"
                    fontSize="16px"
                    buttonWidth="18px"
                    marginTop="-2.5px"
                    className="always-button"
                    label="상시"
                    isChecked={request?.isAlways}
                    onChange={() =>
                      setRequest({ ...request, isAlways: !request?.isAlways })
                    }
                  />
                </S.FormHeaderDateTop>
                <S.FormHeaderDateBottom>
                  <span>~</span>
                  <DateBox
                    initialDate={request?.endDate ?? now()}
                    isAlways={request?.isAlways}
                    handleDate={(d: string) =>
                      setRequest({ ...request, endDate: d })
                    }
                  />
                </S.FormHeaderDateBottom>
              </S.FormHeaderDate>
            </S.FormHeaderRight>
          </S.FormHeaderTop>
          <Text
            marginTop="15px"
            borderBottomColor={Colors.mediumGray}
            placeholder="설명"
            name="description"
            onChange={handleChange}
            value={request?.description}
          />
        </S.FormHeader>

        <S.FormQuestionSection>
          {questionList?.map((q, index) => (
            <Question
              question={q}
              handleQuestionChange={handleQuestionChange}
              deleteQuestion={deleteQuestion}
              key={index}
              index={index}
              addAnswer={addAnswer}
              addNextAnswer={addNextAnswer}
              handleAnswer={handleAnswer}
              deleteAnswer={deleteAnswer}
              toggleIsRequired={toggleIsRequired}
              copyQuestion={copyQuestion}
            />
          ))}
          <S.AddQuestionButton onClick={addQuestion}>
            <span>+</span>
          </S.AddQuestionButton>
        </S.FormQuestionSection>
        <S.ButtonArea>
          <Button
            fontSize="16px"
            padding="13px 0"
            width="19%"
            marginRight="2%"
            backgroundColor="white"
            border="1px solid gray"
            text="고급 설정"
            color="gray"
            // action={() => setAdvancedSettingModalOpen(true)}
          />
          <Button
            width="79%"
            fontSize="16px"
            padding="13px 0"
            text={button().text}
            disabled={button().disabled}
            action={onClick}
          />
        </S.ButtonArea>
      </S.FormSection>
    </>
  );
};
