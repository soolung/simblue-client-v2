import server from "../client";

export const GET_APPLICATION = async (type: string) => {
  return (await server.get(`/application?type=${type}`)).data;
};

export const GET_FOUR_LATEST_APPLICATION = async () => {
  return (await server.get("/application/paging")).data;
};
