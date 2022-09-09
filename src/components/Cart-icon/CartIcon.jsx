import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, Span } from "./CartIcon.style.jsx";

const CartIcon = () => {
  const { isCartDropdownOpen, setCartDropdownOpen, cartProductCount } =
    useContext(CartContext);
  const toggleCart = () => setCartDropdownOpen(!isCartDropdownOpen);

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon></ShoppingIcon>
      <Span>{cartProductCount}</Span>
    </CartIconContainer>
  );
};

export default CartIcon;
