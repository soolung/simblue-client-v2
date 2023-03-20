import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const Text = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  border-bottom: 1px solid ${Colors.gray};
  background-color: transparent;
  padding: 0 11px 2px;
  font-size: 18px;
  color: ${Colors.inputText};

  &::placeholder {
    color: ${Colors.mediumGray};
  }
`;
