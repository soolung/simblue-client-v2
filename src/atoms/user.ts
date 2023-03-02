import { atom } from "recoil";
export interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  authority: string | null;
  name: string | null;
}

export const userState = atom<UserState>({
  key: "user",
  default: {
    accessToken: localStorage.getItem("access-token"),
    refreshToken: localStorage.getItem("refresh-token"),
    authority: localStorage.getItem("authority"),
    name: localStorage.getItem("name"),
  },
});
