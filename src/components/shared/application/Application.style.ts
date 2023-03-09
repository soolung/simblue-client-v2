import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppBox = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 23.5%;
  padding: 2%;
  justify-content: space-between;
  aspect-ratio: 1/1;
  color: black;
  text-decoration: none;
  border: 1px solid #d9d9d9;
  border-radius: 18px;
  background-color: white;
  @media screen and (max-width: 950px) {
    width: 31.3%;
  }
  @media screen and (max-width: 700px) {
    width: 47%;
    padding: 5%;
  }
`;
export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 25px;
  margin-bottom: 3%;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

export const Title = styled.span`
  max-width: 80%;
  word-break: keep-all;
  font-weight: 500;
`;

export const Desc = styled.p`
  margin: 8px 0;
  font-weight: 300;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
`;

export const EndDate = styled.p`
  float: bottom;
  font-weight: 300;
  font-size: 1vw;
  text-align: right;
  white-space: nowrap;
`;
