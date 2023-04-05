import { authorization } from "../../utils/auth";
import { ANSWER, QUESTION, REQUEST } from "../../types/application.type";
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

export type Owner = {
  teacherId: number;
  name: string;
};

export type RequestType = {
  request: {
    questionList: QUESTION[];
    ownerList: Owner[];
    emoji: string;
    isAlways: boolean;
    title: string;
    description: string;
    allowsDuplication: boolean;
    allowsUpdatingReply: boolean;
    startDate: String;
    endDate: String;
  };
};

export const createApplicationForm = async ({ request }: RequestType) => {
  return (await server.post("/application", request, authorization())).data;
};

export const updateApplicationForm = async ({
  id,
  request,
}: {
  id: number;
  request: RequestType["request"];
}) => {
  return (await server.put(`/application/${id}`, request, authorization()))
    .data;
};

export const deleteApplicationForm = async (id: number) => {
  return (await server.delete(`/application/${id}`, authorization())).data;
};
