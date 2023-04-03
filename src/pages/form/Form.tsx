import * as S from "./Form.style";
import Text from "../../components/shared/Text/Text";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import React, { useState } from "react";
import { now } from "../../utils/common/getTimeDiff";
import DateBox from "../../components/shared/Date/DateBox";
import Check from "../../components/shared/Check/Check";
import Question from "../../components/shared/Create/Question/Question";
import Button from "../../components/shared/common/Button/Button";
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
import AdvancedSettingModal from "../../components/shared/Modal/AdvancedSetting/AdvancedSettingModal";
import Toggle from "../../components/shared/Toggle/Toggle";

interface QuestionInter {
  type: string;
  question: string;
  answerList: {
    answer: string;
  }[];
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
  questionList?: QuestionInter[];
  ownerList?: number[];
}

interface Owner {
  teacherId: number;
  name: string;
}

export const Form = ({ mode }: { mode: string }) => {
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
    onSuccess: () => {
      alert("성공!");
      navigate("/");
    },
    onError: (err) => {
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
        replyList: {
          ...request,
          questionList: [...questionList],
          ownerList: Array.from(ownerList),
        },
      });
    } else if (mode === "update" && form.data?.canUpdate) {
      update.mutate({
        request: {
          applicationId: parsedId,
          replyList: {
            ...request,
            questionList: [...questionList],
            ownerList: Array.from(ownerList),
          },
        },
        id: parsedId,
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

  const advancedSettingModalData = [
    {
      name: "중복 허용",
      setting: (
        <Toggle
          value={request.allowsDuplication}
          onClick={() => {
            setRequest({
              ...request,
              allowsDuplication: !request.allowsDuplication,
            });
          }}
        />
      ),
    },
    {
      name: "답변 수정 허용",
      setting: (
        <Toggle
          value={request.allowsUpdatingReply}
          onClick={() => {
            setRequest({
              ...request,
              allowsUpdatingReply: !request.allowsUpdatingReply,
            });
          }}
        />
      ),
    },
  ];

  const [questionList, setQuestionList] = useState<QuestionInter[]>([
    {
      type: "TEXT",
      question: "",
      answerList: [
        {
          answer: "",
        },
      ],
      isRequired: true,
      description: "",
    },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };

  const emojiChange = (e: any) => {
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
    const newQuestionList = [...questionList];
    const newQuestion = {
      ...questionList[index],
      [e.target.name]: e.target.value,
    };
    newQuestionList[index] = newQuestion;
    setQuestionList(newQuestionList);
  };

  const toggleIsRequired = (index: number) => {
    setQuestionList((prevQuestionList) => {
      return prevQuestionList.map((question, idx) => {
        if (idx === index) {
          return {
            ...question,
            isRequired: !question.isRequired,
          };
        }
        return question;
      });
    });
  };

  const addAnswer = (index: number) => {
    setQuestionList((prevQuestionList) => {
      const newQuestionList = [...prevQuestionList];
      const newAnswerList = [...newQuestionList[index].answerList];
      newAnswerList.push({ answer: "" });
      newQuestionList[index] = {
        ...newQuestionList[index],
        answerList: newAnswerList,
      };
      return newQuestionList;
    });
  };

  const addNextAnswer = (answerIndex: number, index: number) => {
    setQuestionList((prevQuestionList) => {
      return prevQuestionList.map((question, idx) => {
        if (idx === index) {
          const newAnswerList = [...question.answerList];
          if (newAnswerList.length - 1 === answerIndex) {
            newAnswerList.push({ answer: "" });
          } else {
            newAnswerList.splice(answerIndex + 1, 0, { answer: "" });
          }
          return {
            ...question,
            answerList: newAnswerList,
          };
        }
        return question;
      });
    });
  };

  const handleAnswer = (
    a: string,
    questionIndex: number,
    answerIndex: number
  ) => {
    setQuestionList((prevQuestionList) => {
      const newQuestionList = [...prevQuestionList];
      const newAnswerList = [...newQuestionList[questionIndex].answerList];
      newAnswerList[answerIndex].answer = a;
      newQuestionList[questionIndex].answerList = newAnswerList;
      return newQuestionList;
    });
  };

  const deleteQuestion = (target: number) => {
    setQuestionList((prevQuestionList) =>
      prevQuestionList.filter(
        (q: QuestionInter, index: number) => target !== index
      )
    );
  };

  const addQuestion = () => {
    setQuestionList([
      ...questionList,
      {
        type: "TEXT",
        question: "",
        answerList: [{ answer: "" }],
        isRequired: true,
        description: "",
      },
    ]);
  };

  const deleteAnswer = (target: number, questionIndex: number) => {
    setQuestionList((prevQuestionList) => {
      const questionList = [...prevQuestionList];
      questionList[questionIndex] = {
        ...questionList[questionIndex],
        answerList: questionList[questionIndex].answerList.filter(
          (a, index: number) => target !== index
        ),
      };
      return questionList;
    });
  };

  const copyQuestion = (index: number) => {
    const newQuestionList: QuestionInter[] = [...questionList];
    newQuestionList.splice(
      index + 1,
      0,
      JSON.parse(JSON.stringify(questionList[index]))
    );
    setQuestionList(newQuestionList);
  };

  const [ownerList, setOwnerList] = useState<Owner[]>([]);
  const [ownerIdSet, setOwnerIdSet] = useState<Set<number>>(
    new Set([user.user.roleId])
  );

  const addOwner = ({
    teacherId,
    name,
  }: {
    teacherId: number;
    name: string;
  }) => {
    if (!ownerIdSet.has(teacherId)) {
      setOwnerList([
        ...ownerList,
        {
          teacherId: teacherId,
          name: name,
        },
      ]);

      ownerIdSet.add(teacherId);
    }
  };

  const deleteOwner = (teacherId: number) => {
    if (ownerIdSet.has(teacherId)) {
      setOwnerList(ownerList.filter((o: Owner) => teacherId !== o.teacherId));
      ownerIdSet.delete(teacherId);
    }
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
                    style={{ border: "2px solid" + Colors.mainRed }}
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
          {questionList?.map((q: QuestionInter, index: number) => (
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
            border={`1px solid ${Colors.mediumGray}`}
            text="고급 설정"
            color={Colors.mediumGray}
            action={() => setAdvancedSettingModalOpen(true)}
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
      <AdvancedSettingModal
        id={parsedId}
        mode={mode}
        isOpen={advancedSettingModalIsOpen}
        data={advancedSettingModalData}
        closeModal={() => setAdvancedSettingModalOpen(false)}
        ownerList={ownerList}
        addOwner={addOwner}
        deleteOwner={deleteOwner}
      />
    </>
  );
};
