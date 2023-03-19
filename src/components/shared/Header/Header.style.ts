import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../../constants/colors.constant";

export const HeaderNav = styled.nav`
  position: fixed;
  display: flex;
  width: 75%;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  img {
    height: 50%;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
  &:hover {
    background-color: ${Colors.lightGray};
  }
`;

export const Name = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: none;
  background-color: white;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
`;

export const SearchBar = styled.div`
  display: inline-block;
  position: relative;
  width: 20%;
  img {
    position: absolute;
    right: 5px;
    top: 3px;
    width: 30px;
    height: 30px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 34px;
  padding: 0 60px 0 14px;
  border: 1px solid ${Colors.lightGray};
  border-radius: 6px;
  background-color: ${Colors.lightGray};
  font-weight: 400;
  font-size: 12px;
  color: #666;
  outline: none;

  &::placeholder {
    color: #cccccc;
  }

  &:focus {
    background-color: white;
    color: #333;
  }
`;

export const CancelIcon = styled.button`
  position: absolute;
  top: 0;
  right: 30px;
  width: 36px;
  height: 36px;
  border: 0;
  background: url(https://res.kurly.com/pc/ico/2010/ico_search_del.svg)
    no-repeat 50% 50%;
  background-size: 12px 12px;
`;
