import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const Records = styled.div`
  min-width: 350px;
  padding: 3% 0;
`;

export const Head = styled.div`
  padding: 2% 0;
  font-size: 30px;
  font-weight: 600;
  span {
    color: ${Colors.darkGray};
    font-size: 20px;
    font-weight: 400;
  }
`;

export const List = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
`;
