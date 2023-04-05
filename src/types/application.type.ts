import { Dayjs } from "dayjs";

export type APPLICATION = {
  allowsDuplication: boolean;
  description: string;
  emoji: string;
  endDate: string;
  id: number;
  startDate: string;
  status: string;
  title: string;
};

export type ANSWER = {
  answer: string;
};

export type QUESTION = {
  answerList: ANSWER[];
  description: string;
  isRequired: boolean;
  question: string;
  type: string;
};

export type OWNER = {
  teacherId: number;
};

export type NOTICE = {
  author: string;
  createdAt: Dayjs;
  id: number;
  isPinned: boolean;
  notice: string;
};

export type RESULT = {
  name: string;
  replyList: string[];
  studentNumber: number;
};

export type APPLICATION_DETAIL = APPLICATION & {
  questionList: (QUESTION[] & string[]) | QUESTION[];
  noticeList: NOTICE[];
  application: APPLICATION;
  resultList: RESULT[];
};

export type REQUEST = { id: number; replyDetailList: string[] }[];

export type RECORD_APPLICATION = {
  applicationId: number;
  canUpdate: boolean;
  emoji: string;
  endDate: string;
  numberOfReplies: number;
  repliedAt: string;
  replyId: number;
  startDate: string;
  status: "ALWAYS" | "NOT_STARTED" | "IN_PROGRESS" | "DONE";
  title: string;
};

export type TECHER_RECORDS = {
  applicationMap: {
    ALWAYS: RECORD_APPLICATION[];
    DONE: RECORD_APPLICATION[];
    IN_PROGRESS: RECORD_APPLICATION[];
    NOT_STARTED: RECORD_APPLICATION[];
  };
  authority: string;
};

export type STUDENT_RECORDS = {
  applicationMap: {
    applicationList: RECORD_APPLICATION[];
  };
  authority: string;
};
