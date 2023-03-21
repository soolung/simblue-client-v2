import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";
import TextBox from "../TextBox/TextBox";

export const Dates = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${Colors.mediumGray};

  input {
    display: inline-block;
    height: auto;
    padding: 3px 5px;
    margin-right: 4px;
  }
`;

export const YearBox = styled(TextBox)`
  width: 50px;
`;

export const MonthDayBox = styled(TextBox)`
  width: 50px;
`;
