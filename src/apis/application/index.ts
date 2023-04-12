import { authorization } from "../../utils/auth";
import { OWNER, QUESTION, REQUEST } from "../../types/application.type";
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

export type RequestType = {
    allowsDuplication: boolean;
    allowsUpdatingReply: boolean;
    description: string;
    endDate: String;
    isAlways: boolean;
    questionList: QUESTION[];
    ownerList: OWNER[];
    emoji: string;
    startDate: String;
    title: string;
  };

export const createApplicationForm = async ({ request }: RequestType) => {
  return (await server.post("/application", request, authorization())).data;
};

export const updateApplicationForm = async ({
  id,
  request,
}: {
  id: number;
  request: RequestType;
}) => {
  return (await server.put(`/application/${id}`, request, authorization()))
    .data;
};

export const deleteApplicationForm = async (id: number) => {
  return (await server.delete(`/application/${id}`, authorization())).data;
};
