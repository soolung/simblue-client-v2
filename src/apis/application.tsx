//Application.tsx
import server from "../utils/axios/server";
import { authorization } from "../utils/config/authorization";
import { Request } from "../types/request.type";

export const getApplications = async (type: string): Promise<Request[]> => {
  return (await server.get(`/application?type=${type}`)).data;
};

export const getFourLatestApplications = async (): Promise<Request[]> => {
  return (await server.get("/application/four")).data;
};

export const getMyApplications = async (): Promise<Request[]> => {
  return (await server.get("/application/my", authorization())).data;
};

export const getApplicationDetail = async (id: string): Promise<Request> => {
  return (await server.get(`/application/${id}`)).data;
};

export const getApplicationResult = async (id: string): Promise<string> => {
  return (await server.get(`/application/${id}/request`, authorization())).data;
};

export const createApplication = async (request: Request): Promise<Request> => {
  return (await server.post("/application", request, authorization())).data;
};

export const respondApplication = async (
  id: string,
  request: Request
): Promise<Request> => {
  return (
    await server.post(`/application/${id}/request`, request, authorization())
  ).data;
};
