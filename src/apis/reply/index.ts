import { authorization } from "../../utils/auth";
import server from "../client";

export const cancelReply = async (id: number) => {
  return (await server.delete(`/reply/${id}`, authorization())).data;
};
