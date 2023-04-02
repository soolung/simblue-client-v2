import styled from "styled-components";
import { Colors } from "../../../../../constants/colors.constant";

export const Search = styled.div`
  width: 100%;
  z-index: 2;

  input[type="text"] {
    width: 100%;
    height: 34px;
    padding: 0 60px 0 14px;
    border: 1px solid ${Colors.lightGray};
    border-radius: 6px;
    background-color: ${Colors.lightGray};
    font-weight: 400;
    font-size: 12px;
    color: #666;
    line-height: 16px;
    outline: none;

    &::placeholder {
      color: #cccccc;
    }

    &:focus {
      background-color: white;
      color: #333;
    }
  }
`;

export const ResultSearch = styled.div`
  position: relative;
  display: inline-block;

  &.focused {
    filter: drop-shadow(0px 1px 25px rgba(0, 0, 0, 0.1));

    ${Search} {
      border-bottom: 1px solid ${Colors.gray};
      input[type="text"] {
        border-radius: 6px 6px 0 0;
        border: none;
      }
    }
  }
`;

export const SearchDelete = styled.button`
  position: absolute;
  top: 0;
  right: 30px;
  width: 36px;
  height: 36px;
  border: 0;
  background: url(https://res.kurly.com/pc/ico/2010/ico_search_del.svg)
    no-repeat 50% 50%;
  background-size: 12px 12px;
  &.search-delete-show {
    opacity: 1;
  }
  &.search-delete-no {
    opacity: 0;
  }
`;

export const SearchGo = styled.input`
  position: absolute;
  right: 5px;
  top: 3px;
  width: 30px;
  height: 30px;
`;

export const NoResult = styled.div`
  padding: 10px;
  font-size: 13px;
  font-weight: 300;
  color: ${Colors.black};
`;

export const Result = styled.div`
  padding: 5px;
  border-radius: 0 0 10px 10px;
  background-color: white;
`;

export const ResultTeacher = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 10px;
  border-radius: 10px;

  &:hover {
    background-color: #e7e7e7;
  }
  span {
    font-size: 13px;
    font-weight: 300;
  }
`;

export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;

  span {
    font-size: 13px;
    font-weight: 300;
  }
`;
