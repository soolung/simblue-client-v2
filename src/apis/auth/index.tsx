import { authorization } from "../../utils/config/authorization";
import { AuthInfo, ResetPassword } from "../../types/userAuth.type";
import server from "../client";

export const getGoogleAuthLink = async () => {
  return (await server.get("/auth/google")).data;
};

export const getAccessTokenByGoogle = async (
  code: string
): Promise<ResetPassword> => {
  return (await server.post(`/auth/google/callback?code=${code}`)).data;
};

export const loginUser = async ({ email, password }: AuthInfo) => {
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
}: ResetPassword) => {
  return await server.patch(
    "/user/password",
    {
      newPassword: newPassword,
      oldPassword: oldPassword,
    },
    authorization()
  );
};
