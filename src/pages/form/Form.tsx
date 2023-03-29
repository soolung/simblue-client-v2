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
    onSuccess: () => {
      alert("성공!");
      navigate("/");
    },
    onError: (err: AxiosError) => {
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
    console.log(typeof e);
    setEmojiPickerIsOpen(false);
  };

  const handleQuestionChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: any
  ) => {
    setQuestionList((prevQuestionList) => {
      const newQuestionList = [...prevQuestionList];
      newQuestionList[index].question = e.target.value;
      return newQuestionList;
    });
  };

  const toggleIsRequired = (index: number) => {
    setQuestionList((prevQuestionList) => {
      const newQuestionList = [...prevQuestionList];
      newQuestionList[index].isRequired = !newQuestionList[index].isRequired;
      return newQuestionList;
    });
  };

  const addAnswer = (index: number) => {
    setQuestionList((prevQuestionList) => {
      const newQuestionList = [...prevQuestionList];
      newQuestionList[index].answerList.push({ answer: "" });
      return newQuestionList;
    });
  };

  const addNextAnswer = (answerIndex: number, index: number) => {
    setQuestionList((prevQuestionList) => {
      const newQuestionList = [...prevQuestionList];
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
    setQuestionList((prevQuestionList) => {
      const newQuestionList = [...prevQuestionList];
      newQuestionList[questionIndex].answerList[answerIndex].answer = a;
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

  const [ownerList, setOwnerList] = useState([{}]);
  const [ownerIdSet, setOwnerIdSet] = useState<Set<number>>(
    new Set([user.user.roleId])
  );

  const addOwner = ({ teacherId, name }: any) => {
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
      setOwnerList(ownerList.filter((o: any) => teacherId !== o.teacherId));
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
          {questionList?.map((q: QuestionInter, index: any) => (
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
    </>
  );
};
