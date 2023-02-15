import server from "../utils/axios/server";
import { authorization } from "../utils/config/authorization";
import { Request } from "../type/request/request.type";

interface Application {
  id: string;
  type: string;
}

export const getApplications = async (type: string): Promise<Application[]> => {
  return (await server.get(`/application?type=${type}`)).data;
};

export const getFourLatestApplications = async (): Promise<Application[]> => {
  return (await server.get("/application/four")).data;
};

export const getMyApplications = async (): Promise<Application[]> => {
  return (await server.get("/application/my", authorization())).data;
};

export const getApplication = async (id: string): Promise<Application> => {
  return (await server.get(`/application/${id}`)).data;
};

export const getApplicationResult = async (id: string): Promise<string> => {
  return (await server.get(`/application/${id}/request`, authorization())).data;
};

export const createApplication = async (
  request: Request
): Promise<Application> => {
  return (await server.post("/application", request, authorization())).data;
};

export const respondApplication = async (
  id: string,
  request: Request
): Promise<Application> => {
  return (
    await server.post(`/application/${id}/request`, request, authorization())
  ).data;
};
