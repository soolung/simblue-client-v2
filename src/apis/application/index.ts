import server from "../client";

export const getApplication = async (type: string) => {
  return (await server.get(`/application?type=${type}`)).data;
};

export const getFourLatestApplication = async () => {
  return (await server.get("/application/paging")).data;
};
