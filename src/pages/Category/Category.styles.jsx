import styled from "styled-components";

export const CategoryTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 50px;
  margin: 0 0 10px;
  letter-spacing: 3px;
  word-spacing: 10px;
`;

export const TitleBorder = styled.div`
  background-color: #4dba3c;
  width: 150px;
  height: 5px;
  margin: 0 auto 80px;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 30px;
`;
