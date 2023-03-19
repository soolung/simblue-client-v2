import { atom } from "recoil";

export const modalState = atom<JSX.Element | null>({
  key: "modal",
  default: null,
});
