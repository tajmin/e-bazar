import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as CartSign } from "../../images/cart-icon.svg";
import "./CartIcon.style.scss";

const CartIcon = () => {
  const { isCartDropdownOpen, setCartDropdownOpen, cartProductCount } =
    useContext(CartContext);
  const toggleCart = () => setCartDropdownOpen(!isCartDropdownOpen);
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <CartSign className="shopping-icon"></CartSign>
      <span className="item-count">{cartProductCount}</span>
    </div>
  );
};

export default CartIcon;
