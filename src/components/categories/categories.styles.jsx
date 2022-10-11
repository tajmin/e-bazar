import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100%;
  padding: 60px 0;
`;

export const TwoItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 25px;
`;

export const ThreeItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  margin: 30px 0;
`;
