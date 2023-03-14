import styled from "styled-components";
import { Colors } from "../../../../constants/colors";

export const AnswerBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;

  input {
    width: 24px;
    aspect-ratio: 1 / 1;
    appearance: none;
    background: white;
    border-radius: 50%;
    border: 1px solid ${Colors.gray};
    cursor: pointer;
    transition: background 0.2s;

    :checked {
      border-color: ${Colors.mainRed};
    }

    :checked::after {
      display: block;
    }
  }
  [type="radio"] {
    ::after {
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
  }
  [type="checkbox"] {
    &::after {
      border: solid #fff;
      border-width: 0 2px 2px 0;
      content: "";
      display: none;
      height: 40%;
      left: 38%;
      position: relative;
      top: 20%;
      transform: rotate(45deg);
      width: 15%;
    }

    &:checked {
      background: ${Colors.mainRed};
      border: none;
    }
  }
`;

export const Text = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid ${Colors.gray};
  background-color: transparent;
  padding: 20px 10px;
  font-size: 18px;
  color: $input-text;
  outline: none;

  &::placeholder {
    color: ${Colors.mediumGray};
  }
`;

export const Textarea = styled.input`
  width: 100%;
  height: 70px;
  padding: 11px;
  font-size: 18px;
  color: $input-text;
  border: 1px solid ${Colors.gray};
  border-radius: 15px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const Questions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const QuestTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  span {
    color: ${Colors.mainRed};
  }
`;

export const Desc = styled.p`
  font-weight: 300;
  font-size: 14px;
  margin: 6px 0;
`;
