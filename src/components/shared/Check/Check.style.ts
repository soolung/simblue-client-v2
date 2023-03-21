import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const CheckLabel = styled.label`
  display: flex;
  align-items: flex-start;

  span {
    font-size: 18px;
    line-height: 24px;
    color: ${Colors.inputText};
  }
`;

export const CheckInput = styled.input`
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
    border: solid #fff;
    border-width: 0 2px 2px 0;
    content: "";
    display: none;
    height: 40%;
    left: 38%;
    position: relative;
    top: 17%;
    transform: rotate(45deg);
    width: 15%;
  }

  &:checked {
    background: ${Colors.mainRed};
    border: none;
  }

  &:checked::after {
    display: block;
  }
`;
