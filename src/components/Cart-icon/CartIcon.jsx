import React from "react";
import { ReactComponent as CartSign } from "../../images/cart-icon.svg";
import "./CartIcon.style.scss";
const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <CartSign className="shopping-icon"></CartSign>
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
