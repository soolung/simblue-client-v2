import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    accessToken: localStorage.accessToken,
    refreshToken: localStorage.refreshToken,
    authority: localStorage.authority,
    name: localStorage.name,
  },
});
