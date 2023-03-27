import { authorization } from "../../utils/auth/index";
import { LOGIN_AUTH, RESET_REQUEST, USER } from "../../types/auth.type";
import server from "../client";

export const getGoogleAuthLink = async () => {
  return (await server.get("/auth/google")).data;
};

export const getAccessTokenByGoogle = async (code: string): Promise<RESET_REQUEST> => {
  return (await server.post(`/auth/google/callback?code=${code}`)).data;
};

export const loginUser = async ({ email, password }: LOGIN_AUTH): Promise<USER> => {
  return (
    await server.post("/auth", {
      email: email,
      password: password,
    })
  ).data;
};
