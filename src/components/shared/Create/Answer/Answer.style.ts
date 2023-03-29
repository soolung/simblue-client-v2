import styled from "styled-components";
import { Colors } from "../../../../constants/colors.constant";

export const AnswerBox = styled.div`
  width: 100%;
`;

export const AnswerBoxAnswer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const Cancel = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 10px;
`;

export const AddAnswer = styled.button`
  padding: 7px;
  margin: 10px 0 0 10px;
  font-size: 12px;
  background-color: white;
  color: ${Colors.mediumGray};
  border-radius: 8px;
  border: none;

  &:hover {
    background-color: ${Colors.lightGray};
  }
`;
