import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modal";

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const openModal = (m: JSX.Element) => {
    setModal(m);
  };

  const closeModal = () => {
    setModal(null);
  };

  return {
    modal,
    setModal,
    openModal,
    closeModal,
  };
};

export default useModal;
