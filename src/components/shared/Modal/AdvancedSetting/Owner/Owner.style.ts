import styled from "styled-components";
import { Colors } from "../../../../../constants/colors.constant";

export const Owner = styled.div`
  width: 100%;
  background-color: ${Colors.lightGray};
  border-radius: 15px;
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const ProfileImage = styled.img`
  width: 49px;
  height: 49px;
`;
export const DeleteImage = styled.img`
  width: 15px;
  height: 15px;
`;

export const Light = styled.span`
  font-weight: 400;
  font-size: 15px;
  margin-left: 3px;
`;

export const Teacher = styled.div`
  flex: 1 1 0;
  color: $black;
  font-weight: 500;
  font-size: 20px;
`;
