import { atom } from "recoil";
import { USER_INFO } from "../types/user.type";

export const userEmpty: USER_INFO = {
  authority: "",
  email: "",
  name: "",
  roleId: 0,
  accessToken: "",
};

export const userState = atom<USER_INFO>({
  key: "user",
  default: userEmpty,
});
