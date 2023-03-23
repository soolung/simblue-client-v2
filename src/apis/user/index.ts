import { authorization } from "../../utils/auth";
import server from "../client";

export const getUserInfo = async () => {
  return (await server.get("/user", authorization())).data;
};
