import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CartSign } from "../../images/cart-icon.svg";
import { setCartDropdownOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartDropdownOpen,
} from "../../store/cart/cart.selector";
import "./CartIcon.style.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartProductCount = useSelector(selectCartCount);
  const isCartDropdownOpen = useSelector(selectIsCartDropdownOpen);

  const toggleCart = () => dispatch(setCartDropdownOpen(!isCartDropdownOpen));

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <CartSign className="shopping-icon"></CartSign>
      <span className="item-count">{cartProductCount}</span>
    </div>
  );
};

export default CartIcon;
