import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartProducts } from "../../store/cart/cart.selector";
import Button from "../Button/Button";
import CartItem from "../Cart-item/CartItem";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const cartProducts = useSelector(selectCartProducts);
  const navigate = useNavigate();
  const handleCheckoutNavigate = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartProducts.length ? (
          cartProducts.map((item) => (
            <CartItem key={item.id} CartItem={item}></CartItem>
          ))
        ) : (
          <span className="empty-message">Cart is empty</span>
        )}
      </div>
      <Button onClick={handleCheckoutNavigate}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
