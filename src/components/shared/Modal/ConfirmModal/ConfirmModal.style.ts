import ReactModal from "react-modal";
import styled from "styled-components";
import { Colors } from "../../../../constants/colors.constant";

export const ModalOveray = styled(ReactModal)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 5;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  padding: 3%;
  background-color: white;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.15px;
  line-height: 160%;
  min-width: 400px;
  p {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.15px;
    line-height: 140%;
  }
`;

export const ConfirmBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 10%;
  column-gap: 10px;
`;

export const Button = styled.button`
  border: 1px solid ${Colors.mediumGray};
  color: ${Colors.mediumGray};
  background-color: white;
  border-radius: 8px;
  padding: 3% 4%;
  font-size: 1rem;
  &:hover {
    background-color: ${Colors.lightGray};
  }
`;

export const OkayBtn = styled(Button)`
  border: 1px solid ${Colors.mainRed};
  background-color: ${Colors.mainRed};
  color: white;
  &:hover {
    background-color: ${Colors.deepRed};
  }
`;
