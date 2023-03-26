import styled from "styled-components";
import Text from "../../Text/Text";
import Radio from "../../Radio/Radio";
import Check from "../../Check/Check";
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
export const AnswerRadio = styled(Radio)`
  display: inline-flex;
`;
export const AnswerCheck = styled(Check)`
  display: inline-flex;
`;
export const AnswerText = styled(Text)`
  display: inline-block;
  font-size: 14px;
  width: 60%;
  padding: 0;
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

  &:hover {
    background-color: ${Colors.lightGray};
  }
`;

export const QuestionText = styled(Text)`
  padding: 10px 10px;
  font-size: 14px;
`;
