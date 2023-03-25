import styled from "styled-components";
import { Colors } from "../../../../constants/colors.constant";
import Answer from "../Answer/Answer";
import Text from "../../Text/Text";
export const QuestionContainer = styled.div`
  box-shadow: 0 16px 40px rgba(173, 173, 173, 0.2);
  width: 50vw;
  background-color: white;
  border-radius: 20px;
  padding: 30px 35px;
  margin-bottom: 30px;
`;

export const QuestionHeader = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`;

export const QuestionHeaderQuestionType = styled.select`
  border: 1px solid ${Colors.mediumGray};
  padding: 10px 20px;
  font-size: 15px;
  color: ${Colors.mediumGray};
  border-radius: 4px;
  float: right;
  width: 25%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

export const QuestionHeaderQuestion = styled.input`
  float: left;
  font-size: 20px;
  width: 70%;
  height: 100%;
  padding: 10px 20px;
  background-color: ${Colors.mainBeige};
  border: none;
  border-bottom: 1px solid ${Colors.gray};

  &::placeholder {
    color: ${Colors.mediumGray};
  }
`;

export const QuestionHeaderDescription = styled(Text)`
  padding: 10px 10px;
  font-size: 14px;
  margin-top: 7px;
`;

export const QuestionAnswer = styled(Answer)`
  width: 100%;
  margin-top: 30px;
`;

export const QuestionFooter = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

export const ActionQuestionContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const ActionQuestion = styled.img`
  display: inline-block;
  width: 30px;
  cursor: pointer;
`;
