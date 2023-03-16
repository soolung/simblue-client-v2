import React from "react";
import ReactModal from "react-modal";
import useModal from "../../../../hooks/useModal";
import * as S from "./ConfirmModal.style";

export const ConfirmModal = ({ title, description, onConfirm }: { title: string; description: string; onConfirm: () => void }) => {
  const { closeModal } = useModal();
  return (
    <S.ModalOveray isOpen={true} onRequestClose={closeModal} overlayClassName={"modal-overlay"}>
      <S.Modal>
        <p>{title}</p>
        <span>{description}</span>
        <S.ConfirmBar>
          <S.Button onClick={closeModal}>취소</S.Button>
          <S.OkayBtn
            onClick={() => {
              onConfirm();
              closeModal();
            }}>
            확인
          </S.OkayBtn>
        </S.ConfirmBar>
      </S.Modal>
    </S.ModalOveray>
  );
};
