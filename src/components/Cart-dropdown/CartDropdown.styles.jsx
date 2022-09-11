import styled from "styled-components";
import { BaseButton } from "../Button/Button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 80px;
  z-index: 5;

  ${BaseButton} {
    margin-top: auto;
    height: 45px;
    line-height: 45px;
  }
`;
export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const EmptyTextSpan = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
