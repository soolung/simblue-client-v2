import styled, { css } from "styled-components";
import { Colors } from "../../constants/colors";
import { Category } from "./Look";

interface CategoriesTypes {
  selectedCategory: Category;
  selected: Category;
}

export const Look = styled.section`
  width: 70vw;
  margin: 0 auto;
  padding: 50px 10px;
  @media screen and (max-width: 700px) {
    width: 80vw;
  }
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

export const Application = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.3vw 1.3%;
  width: 100%;
`;

export const None = styled.p`
  color: ${Colors.darkGray};
  text-align: center;
  padding-top: 50px;
`;
