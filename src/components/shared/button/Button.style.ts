import styled from "styled-components";
import { Colors } from "../../../constants/colors";

export const ButtonStyle = styled.button`
  background-color: ${Colors.mainRed};
  cursor: pointer;
  width: 100%;
  padding: 1%;
  align-self: flex-end;
  border-radius: 8px;
  color: white;
  border: none;
  font-weight: 700;
  font-size: 18px;

  &.disabled {
    background-color: ${Colors.mediumGray};
  }
`;
