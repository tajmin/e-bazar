import styled from "styled-components";
import wave from "../../images/home-wave.svg";

export const CategoriesContainer = styled.div`
  width: 100%;
  padding: 0 0 5rem;
`;

export const SectionTitleContainer = styled.div`
  background: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  height: 35vh;

  h2 {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 50px;
    margin: 0;
    letter-spacing: 2px;
    word-spacing: 15px;
    line-height: 215px;
  }
`;

export const TwoItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
`;

export const ThreeItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  margin: 30px 0;
`;
