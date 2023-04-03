import styled from "styled-components";
import { Colors } from "../../../../constants/colors.constant";

export const ResultBody = styled.tbody`
  width: 100%;
  &::before {
    content: "@";
    display: block;
    line-height: 10px;
    text-indent: -99999px;
  }

  td {
    padding: 20px;
    background-color: #fff;
  }

  td:first-child {
    border-left: 1px solid ${Colors.gray};
  }

  td:last-child {
    border-right: 1px solid ${Colors.gray};
  }

  tr:first-child > td {
    border-top: 1px solid ${Colors.gray};
  }

  tr:last-child {
    td {
      border-bottom: 1px solid ${Colors.gray};
    }
    td:first-child {
      border-bottom-left-radius: 10px;
    }
    td:last-child {
      border-bottom-right-radius: 10px;
    }
  }
`;
