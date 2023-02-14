import server from "../utils/axios/server";
import { authorization } from "../utils/config/authorization";

export const getApplications = async (type: string) => {
  return (await server.get(`/application?type=${type}`)).data;
};

export const getFourLatestApplications = async () => {
  return (await server.get("/application/four")).data;
};

export const getMyApplications = async () => {
  return (await server.get(`/application/my`, authorization())).data;
};

export const getApplicationDetail = async (id: string) => {
  return (await server.get(`/application/${id}`)).data;
};

export const getApplicationResult = async (id: string) => {
  return (await server.get(`/application/${id}/request`, authorization())).data;
};

export const createApplication = async (request: any) => {
  return (await server.post("/application", request, authorization())).data;
};

export const respondApplication = async (id: string, request: any) => {
  return (
    await server.post(`/application/${id}/request`, request, authorization())
  ).data;
};
