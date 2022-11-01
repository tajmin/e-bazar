import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  position: relative;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 5px 10px 0 rgba(222, 222, 222, 0.15);
  transition: box-shadow 0.3s;

  button {
    width: 70%;
    position: absolute;
    top: 370px;
    display: none;
  }

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  &:hover {
    img {
      opacity: 0.7;
    }

    button {
      opacity: 0.9;
      display: flex;
    }
  }
`;

export const ProductInfoContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  h4 {
    margin: 2px 0 5px 0;
    color: #474252;
  }
  .price {
    color: #4dba3c;
  }
`;
