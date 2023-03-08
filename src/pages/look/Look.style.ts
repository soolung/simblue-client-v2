import styled, { css } from "styled-components";
import { Colors } from "../../constants/colors";

interface CategoriesTypes {
  selectedCategory: any;
  selected: any;
}

export const Look = styled.div`
  width: 70vw;
  margin: 0 auto;
  padding: 50px 10px;
`;

export const Header = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

export const Description = styled.p`
  color: ${Colors.darkGray};
  font-size: 20px;
  font-weight: 400;
`;

export const Categories = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
`;

export const Section = styled.p<CategoriesTypes>`
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  ${({ selectedCategory, selected }) =>
    selectedCategory === selected
      ? css`
          font-weight: 600;
          color: ${Colors.mainRed};
          border-bottom: 2px solid ${Colors.mainRed};
        `
      : ""}
`;

export const Application = styled.p``;
