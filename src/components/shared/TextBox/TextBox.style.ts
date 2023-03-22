import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const TextBox = styled.input`
  border: 0.5px solid ${Colors.mediumGray};
  width: 100%;
  height: 6vh;
  padding: 0 15px;

  &:focus {
    border: 1px solid ${Colors.mediumGray};
    outline: none;
  }

  &::placeholder {
    color: ${Colors.mediumGray};
    font-weight: 300;
  }
`;