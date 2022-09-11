import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CategoryBodyContainer = styled.div`
  height: 100px;
  width: 230px;
  border: 1px solid #4dba3c;
  border-radius: 5px;
  background-color: white;
  opacity: 0.9;
  position: absolute;
  text-align: center;
  margin: auto;

  h2 {
    font-weight: bold;
    font-size: 26px;
    color: #4dba3c;
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    margin-top: 0px;
    text-transform: capitalize;
  }
`;

export const CategoryContainer = styled.div`
  min-width: 30%;
  height: 250px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryBodyContainer} {
      opacity: 1;
      transform: scale(1.1);
      transition: 0.5s ease-in;
    }
  }
`;
