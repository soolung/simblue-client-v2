import { atom } from "recoil";
import {
  ACCESS_KEY,
  REFRESH_KEY,
  AUTHORITY,
  NAME,
} from "../constants/token.constant";
interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  authority: string | null;
  name: string | null;
}

export const userState = atom<UserState>({
  key: "user",
  default: {
    accessToken: localStorage.getItem(ACCESS_KEY),
    refreshToken: localStorage.getItem(REFRESH_KEY),
    authority: localStorage.getItem(AUTHORITY),
    name: localStorage.getItem(NAME),
  },
});
