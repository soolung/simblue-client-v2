import styled from "styled-components";
import { Colors } from "../../constants/colors.constant";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 18px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 30px;
`;

export const SubTitle = styled.span`
  font-weight: 300;
  font-size: 18px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const Result = styled.table`
  width: 100%;
  max-width: 100%;
  text-align: center;
  border-collapse: initial;
  border-spacing: 0;
`;

export const ResultHead = styled.tr`
  width: 100%;
  background-color: #fff;
  font-weight: 500;
  margin-bottom: 20px;
  font-size: 70%;
  word-break: keep-all;

  td {
    width: 3%;
    padding: 2%;
    border-top: 1px solid ${Colors.gray};
    border-bottom: 1px solid ${Colors.gray};
    &:first-child {
      border-top-left-radius: 10px;
      border-left: 1px solid ${Colors.gray};
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-right: 1px solid ${Colors.gray};
    }
  }
`;
