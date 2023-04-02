import { RESET_REQUEST } from "../../types/auth.type";
import { authorization } from "../../utils/auth";
import server from "../client";

export const getUserInfo = async () => {
  return (await server.get("/user", authorization())).data;
};

export const updatePassword = async ({ newPW, oldPW }: RESET_REQUEST) => {
  return await server.patch(
    "/user/password",
    {
      newPassword: newPW,
      oldPassword: oldPW,
    },
    authorization()
  );
};

export const searchTeacher = async (q: string) => {
  return (await server.get(`/user/teacher/search?q=${q}`, authorization()))
    .data;
};
