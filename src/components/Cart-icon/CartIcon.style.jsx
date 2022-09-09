import styled from "styled-components";
import { ReactComponent as CartSign } from "../../images/cart-icon.svg";

export const CartIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(CartSign)`
  width: 26px;
  height: 26px;
`;

export const Span = styled.span`
  position: absolute;
  font-size: 12px;
  color: white;
  background-color: #4dba3c;
  padding: 2px 3px;
  top: 3px;
  left: 20px;
  text-align: center;
  min-width: 16px;
`;
