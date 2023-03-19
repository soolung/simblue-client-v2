import { authorization } from "../../utils/auth";
import server from "../client";

export const getUserData = async () => {
  return (await server.get("/user", authorization())).data;
};
