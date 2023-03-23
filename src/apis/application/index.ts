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

export const replyApplication = async (request: { applicationId: number; replyList?: REQUEST }) => {
  return (await server.post(`/reply`, request, authorization())).data;
};

export const getMyApplications = async () => {
  return (await server.get(`/application/my`, authorization())).data;
};

export const getApplicationResult = async (id: number) => {
  return (await server.get(`/application/${id}/result`, authorization())).data;
};
