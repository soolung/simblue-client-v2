import { atom } from "recoil";
import { USER } from "../types/auth.type";

export const userState = atom<USER>({
  key: "user",
  default: {
    accessToken: localStorage.accessToken,
    refreshToken: localStorage.refreshToken,
    authority: localStorage.authority,
    name: localStorage.name,
  },
});
