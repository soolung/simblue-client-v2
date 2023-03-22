import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const RadioLabel = styled.label`
  display: flex;
  align-items: flex-start;
  span {
    font-size: 18px;
    line-height: 24px;
    color: ${Colors.inputText};
  }
`;

export const Radio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 24px;
  aspect-ratio: 1 / 1;
  appearance: none;
  background: #fff;
  border-radius: 50%;
  border: 1px solid ${Colors.gray};
  cursor: pointer;
  outline: 0;
  transition: background 0.2s;
  margin-right: 7px;
  flex-grow: 0;
  flex-shrink: 0;

  &::after {
    background-color: ${Colors.mainRed};
    border-radius: 50%;
    width: 86%;
    height: 86%;
    content: "";
    display: none;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:checked {
    border-color: ${Colors.mainRed};
  }

  &:checked::after {
    display: block;
  }
`;
