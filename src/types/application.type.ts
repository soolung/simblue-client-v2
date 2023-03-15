import { Dayjs } from "dayjs";

export type APPLICATION = {
  allowsDuplication: boolean;
  description: string;
  emoji: string;
  endDate: string;
  id: number;
  replyId: number | null;
  startDate: string;
  status: string;
  title: string;
};

export type ANSWER = {
  answer: string;
};

export type QUESTION = {
  id: number;
  question: string;
  description: string;
  isRequired: boolean;
  type: string;
  answerList: ANSWER[];
  replyDetailList: string | null;
};

export type NOTICE = {
  author: string;
  createdAt: Dayjs;
  id: number;
  isPinned: boolean;
  notice: string;
};

export type APPLICATION_DETAIL = APPLICATION & {
  questionList: QUESTION[];
  noticeList: NOTICE[];
};

export type REQUEST = { id: number; replyDetailList: string[] }[];

export type TEACHER_APPLICATION = {
  applicationId: number;
  canUpdate: boolean;
  emoji: string;
  endDate: string;
  numberOfReplies: number;
  repliedAt: string | null;
  replyId: number | null;
  startDate: string;
  status: "ALWAYS" | "NOT_STARTED" | "IN_PROGRESS" | "DONE";
  title: string;
};

export type TECHER_RECORDS = {
  applicationMap: {
    ALWAYS: TEACHER_APPLICATION[];
    DONE: TEACHER_APPLICATION[];
    IN_PROGRESS: TEACHER_APPLICATION[];
    NOT_STARTED: TEACHER_APPLICATION[];
  };
  authority: string;
};
