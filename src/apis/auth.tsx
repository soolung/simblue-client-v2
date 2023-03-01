import server from "../utils/axios/server";
import { authorization } from "../utils/config/authorization";
import { UserData } from "../pages/auth/login/Login";

export interface ResetPassword {
  code: string;
  newPassword: string;
  oldPassword: string;
}
export interface LoginAuth {
  email: string;
  password: string;
}

export const getGoogleAuthLink = async () => {
  return (await server.get("/auth/google")).data;
};

export const getAccessTokenByGoogle = async (
  code: string
): Promise<ResetPassword> => {
  return (await server.post(`/auth/google/callback?code=${code}`)).data;
};

export const loginUser = async ({
  email,
  password,
}: LoginAuth): Promise<UserData> => {
  return (
    await server.post("/auth", {
      email: email,
      password: password,
    })
  ).data;
};

export const updatePassword = async ({
  newPassword,
  oldPassword,
}: ResetPassword): Promise<ResetPassword> => {
  return await server.patch(
    "/user/password",
    {
      newPassword: newPassword,
      oldPassword: oldPassword,
    },
    authorization()
  );
};
