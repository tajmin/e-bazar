import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../Button/Button";
import CartItem from "../Cart-item/CartItem";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyTextSpan,
} from "./CartDropdown.styles";

const CartDropdown = () => {
  const { cartProducts } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckoutNavigate = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartProducts.length ? (
          cartProducts.map((item) => (
            <CartItem key={item.id} CartItem={item}></CartItem>
          ))
        ) : (
          <EmptyTextSpan>Cart is empty</EmptyTextSpan>
        )}
      </CartItemsContainer>
      <Button onClick={handleCheckoutNavigate}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
