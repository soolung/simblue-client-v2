import styled from "styled-components";
import { Colors } from "../../constants/colors.constant";

export const FormSection = styled.section`
  width: 70vw;
  margin: 0 auto;
`;

export const FormHeader = styled.div`
  padding: 15px 12px;
`;

export const FormHeaderTop = styled.div`
  width: 100%;
  height: 80px;
`;

export const FormHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  float: left;
`;

export const FormHeaderEmoji = styled.div`
  position: relative;
`;

export const FormHeaderEmojiInput = styled.input`
  background-color: ${Colors.gray};
  font-size: 50px;
  width: 80px;
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
  height: 100%;
  border: none;
`;

export const FormHeaderRight = styled.div`
  width: 50%;
  height: 80px;
  float: right;
  text-align: right;
  display: inline-flex;
  align-items: center;
  justify-content: right;
`;

export const FormHeaderDate = styled.div`
  span {
    color: ${Colors.mediumGray};
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const FormHeaderDateTop = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const FormHeaderDateBottom = styled.div`
  margin-top: 8px;
`;

export const FormQuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const AddQuestionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 50px;
  border-radius: 15px;
  border: 2px solid ${Colors.gray};
  margin-bottom: 100px;
  background-color: transparent;

  span {
    font-size: 50px;
    line-height: 50px;
    font-weight: 500;
    color: ${Colors.mediumGray};
  }

  &:hover {
    background-color: ${Colors.lightGray};
  }
`;

export const ButtonArea = styled.div`
  width: 70vw;
  position: fixed;
  left: 50%;
  bottom: 15px;
  transform: translate(-50%, 0);

  .button {
    font-size: 16px;
    padding: 13px 0;
  }

  .advanced-setting-button {
    width: 19%;
    margin-right: 2%;
    background-color: white;
    border: 1px solid ${Colors.mediumGray};
    span {
      color: ${Colors.mediumGray};
    }
  }

  .form-button {
    width: 79%;
  }
`;
