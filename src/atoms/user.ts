import { atom } from "recoil";
import { USER } from "../types/auth.type";

export const userState = atom<USER>({
  key: "user",
  default: {
    accessToken: localStorage.ACCESS_KEY,
    refreshToken: localStorage.REFRESH_KEY,
    authority: localStorage.AUTHORITY,
    name: localStorage.NAME,
  },
});
