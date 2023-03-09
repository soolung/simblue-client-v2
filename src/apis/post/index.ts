import { authorization } from "../../utils/auth";
import { REQUEST } from "../@types/application";
import server from "../client";

export const replyApplication = async ({ id, request }: { id: number; request: REQUEST }) => {
  return (await server.post(`/application/${id}/request`, request, authorization())).data;
};
