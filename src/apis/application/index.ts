import { authorization } from "../../utils/auth";
import { REQUEST } from "../../types/application.type";
import server from "../client";

export const getApplication = async (type: string) => {
  return (await server.get(`/application?type=${type}`)).data;
};

export const getPagingApplication = async () => {
  return (await server.get("/application/paging")).data;
};

export const getApplicationDetail = async (id: number) => {
  return (await server.get(`/application/${id}`)).data;
};

export const replyApplication = async (request: {
  applicationId: number;
  replyList?: REQUEST;
}) => {
  return (await server.post(`/reply`, request, authorization())).data;
};

export const getMyApplications = async () => {
  return (await server.get(`/application/my`, authorization())).data;
};

export const getApplicationResult = async (id: number) => {
  return (await server.get(`/application/${id}/result`, authorization())).data;
};

export const getApplicationForm = async (id: number) => {
  return (await server.get(`/application/${id}/form`, authorization())).data;
};

type QuestionInter = {
  type: string;
  question: string;
  answerList: {
    answer: string;
  }[];
  isRequired: boolean;
  description: string;
};

type Request = {
  emoji: string;
  isAlways: boolean;
  title: string;
  description: string;
  allowsDuplication: boolean;
  allowsUpdatingReply: boolean;
  startDate: String;
  endDate: String;
  questionList?: QuestionInter[];
  ownerList?: number;
};

type Owner = {
  teacherId: number;
  name: string;
};

type ReplyList = {
  request?: { [key: string]: Request };
  questionList: QuestionInter[];
  ownerList: Owner[];
};

export const createApplicationForm = async (request: {
  applicationId: number;
  replyList: ReplyList;
}) => {
  return (await server.post("/application", request, authorization())).data;
};

export const updateApplicationForm = async ({
  request,
  id,
}: {
  request: {
    applicationId: number;
    replyList: ReplyList;
  };
  id: number;
}) => {
  return (await server.put(`/application/${id}`, request, authorization()))
    .data;
};

export const deleteApplicationForm = async (id: number) => {
  return (await server.delete(`/application/${id}`, authorization())).data;
};
