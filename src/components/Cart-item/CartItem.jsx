import React from "react";
import {
  CartItemContainer,
  DetailedItem,
  Image,
  ItemTitle,
} from "./CartItem.styles";

const CartItem = ({ CartItem }) => {
  const { name, imageUrl, price, quantity } = CartItem;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />

      <DetailedItem>
        <ItemTitle>{name}</ItemTitle>
        <span>
          {quantity} X ${price}
        </span>
      </DetailedItem>
    </CartItemContainer>
  );
};

export default CartItem;
