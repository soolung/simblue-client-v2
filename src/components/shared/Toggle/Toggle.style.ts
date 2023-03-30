import styled, { css } from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const Toggle = styled.label`
  display: inline-flex;
  align-items: center;
  color: ${Colors.mediumGray};
  font-size: 14px;
  cursor: pointer;
`;

export const ToggleCircle = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  transition: 0.5s;
`;

export const ToggleContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 30px;
  border-radius: 27.5px;
  background-color: ${Colors.mainRed};
  margin-right: 4px;
  padding: 0 7px;
  transition: 0.5s;

  &.disabled {
    background-color: ${Colors.gray};

    ${ToggleCircle} {
      left: 4px;
      transition: left 0.5s;
    }
  }
`;

export const DisabledToggleContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 30px;
  border-radius: 27.5px;
  background-color: ${Colors.mainRed};
  margin-right: 4px;
  padding: 0 7px;
  transition: 0.5s;
  background-color: ${Colors.gray};

  ${ToggleCircle} {
    left: 4px;
    transition: 0.5s;
  }
`;
