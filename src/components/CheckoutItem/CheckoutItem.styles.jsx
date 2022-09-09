import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.65)
  );
  margin: 0.5rem 0;
  padding: 1rem;
  box-shadow: 7px 7px 10px 2px rgb(122 122 122 / 21%);

  .name,
  .price {
    flex: 1;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  span {
    margin: 0 16px;
  }
`;

export const OperatorContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const RemoveIconContainer = styled.div`
  cursor: pointer;
  flex: 1;
  text-align: center;
`;
