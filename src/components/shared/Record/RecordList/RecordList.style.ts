import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../../../constants/colors.constant";

export const Item = styled(Link)`
  display: flex;
  width: 100%;
  padding: 2% 3%;
  background-color: white;
  border: 1px solid ${Colors.gray};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: ${Colors.lightGray};
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 24px;
  }
  span {
    font-size: 14px;
    font-weight: 300;
    padding-left: 20px;
  }
`;

export const Status = styled.span<{ status: string }>`
  border: 1px solid ${(props) => (props.status === "DONE" ? Colors.mainRed : Colors.green)};
  border-radius: 30px;
  color: ${(props) => (props.status === "DONE" ? Colors.mainRed : Colors.green)};
  padding: 5px 10px;
`;

export const DeleteBtn = styled.img`
  z-index: 2;
  width: 25px;
`;

export const RightSide = styled.div`
  display: flex;
  column-gap: 5px;
`;
