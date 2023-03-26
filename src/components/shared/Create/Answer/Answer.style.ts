import styled from "styled-components";
import Text from "../../Text/Text";
import Radio from "../../Radio/Radio";
import Check from "../../Check/Check";

const AnswerBox = styled.div`
  width: 100%;
  .answer-box-answer {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }
`;
const AnswerBoxAnswer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;
const AnswerRadio = styled(Radio)`
  display: inline-flex;
`;
const AnswerCheck = styled(Check)`
  display: inline-flex;
`;
const AnswerText = styled(Text)`
  display: inline-block;
  font-size: 14px;
  width: 60%;
  padding: 0;
`;

const Cancel = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 10px;
`;

const AddAnswer = styled.button`
  padding: 7px;
  margin: 10px 0 0 10px;
  font-size: 12px;
  background-color: white;
  color: $medium-grey;
  border-radius: 8px;

  &:hover {
    background-color: $light-grey;
  }
`;

const QuestionText = styled(Text)`
  padding: 10px 10px;
  font-size: 14px;
`;
