import { authorization } from "../../utils/auth";
import { REQUEST } from "../@types/application";
import server from "../client";

export const replyApplication = async (request: { applicationId: number; replyList: REQUEST }) => {
  return (await server.post(`/reply`, request, authorization())).data;
};
