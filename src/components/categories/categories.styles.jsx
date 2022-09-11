import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100%;
`;

export const TwoItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
`;

export const ThreeItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  margin: 10px 0;
`;
