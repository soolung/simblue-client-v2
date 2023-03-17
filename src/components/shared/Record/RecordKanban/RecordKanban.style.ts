import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../../../constants/colors.constant";

export const Kanban = styled.div`
  display: flex;
  width: 100%;
  padding: 1%;
  flex-direction: column;
  background-color: ${Colors.lightGray};
  border-radius: 20px;
  row-gap: 10px;
`;

export const Head = styled.div`
  font-size: 20px;
`;

export const ItemHead = styled.div`
  font-size: 23px;
  font-weight: 500;
`;

export const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6%;
  border: 1px solid ${Colors.gray};
  border-radius: 10px;
  cursor: pointer;
  background-color: white;
  color: black;
  text-decoration: none;
  row-gap: 15px;
  &:hover {
    background-color: ${Colors.lightGray};
  }
`;

export const ItemBottom = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 200;
  justify-content: space-between;
  align-items: center;
  span > span {
    color: ${Colors.mediumGray};
    padding: 0 5px;
  }
  img {
    height: 18px;
  }
`;
