import styled from "styled-components";
import { Colors } from "../../../constants/colors";

export const Notices = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.lightGray};
  width: 24%;
  height: 100%;
  padding: 2%;
  gap: 20px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding: 4%;
  row-gap: 1%;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 30px;
`;

export const SubTitle = styled.span`
  font-weight: 300;
  font-size: 18px;
`;
