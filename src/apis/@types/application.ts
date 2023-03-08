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

export type QUESTION = {
  id: number;
  question: string;
  description: string;
  isRequired: boolean;
  type: string;
  answerList: [];
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
