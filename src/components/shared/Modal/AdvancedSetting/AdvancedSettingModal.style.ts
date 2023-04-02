import styled from "styled-components";
import Modal from "react-modal";
import { Colors } from "../../../../constants/colors.constant";

export const StyledModal = styled(Modal)`
  width: 60vw;
  height: 60vh;
  border-radius: 15px;
  background-color: ${Colors.backgroundColor};
`;

export const Title = styled.p`
  height: 10%;
  font-size: 25px;
  font-weight: 500;
`;

export const SettingContent = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 50%;
  height: 100%;
  float: left;
  background-color: ${Colors.lightGray};
  padding: 50px 40px;
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;
  float: right;
  padding: 50px 40px 0 40px;
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.p`
  color: ${Colors.black};
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 20px;
`;

export const OwnerList = styled.div`
  flex: 1 1 0;
  margin-top: 30px;
  padding-bottom: 30px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
