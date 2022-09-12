import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../Button/Button";
import CartItem from "../Cart-item/CartItem";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const { cartProducts } = useContext(CartContext);
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
