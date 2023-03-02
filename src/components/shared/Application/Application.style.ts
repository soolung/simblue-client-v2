import styled from "styled-components";
import { Colors } from "../../../constants/colors";
export const Application = styled.div`
  &:hover {
    cursor: pointer;
    background-color: ${Colors.lightGray};
  }
  display: flex;
  flex-direction: column;
  border: 1px solid $grey;
  background-color: white;
  border-radius: 18px;
  padding: 20px;
  aspect-ratio: 1 / 1;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.8vw;
`;

export const SecondTitle = styled.span`
  max-width: 80%;
  word-break: keep-all;
  font-weight: 500;
`;

export const Comment = styled.p`
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
  margin-top: auto;
  float: bottom;
  font-weight: 300;
  font-size: 1vw;
  text-align: right;
  white-space: nowrap;
`;

export const Emoji = styled.span``;
