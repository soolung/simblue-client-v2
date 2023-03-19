import React from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../../../atoms/modal";

export const ModalProvider = () => {
  const modal = useRecoilValue(modalState);

  const provide = () => {
    if (!modal) return;
    return modal;
  };

  return <>{provide()}</>;
};
