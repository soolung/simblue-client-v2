import { atom } from "recoil";
import { USER_INFO } from "../types/user.type";

const userEmphty: USER_INFO = {
  authority: "",
  email: "",
  name: "",
  roleId: 0,
};

export const userState = atom<USER_INFO>({
  key: "user",
  default: userEmphty,
});
